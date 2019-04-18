/**
 * 
 * JSON 数据读取器
 * 
 * @import get from object.get
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @import array.from
 * 
 * @import is.empty
 * 
 * @import assign from object.assign.if
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根
 * 
 * @param {string} [config.fields = []] 读取数据记录的字段项
 * 
 * @param {function} [config.create] 基于构建出来的数据进行构建对象
 * 
 * @param {function} [config.createExtraParams = {}] 基于构建对象函数附加参数
 * 
 * @param {boolean} [config.multi = true] 如果设置为 true , 则返回数组，设置为 false , 则返回第一条记录 
 * 
 * @return {function} 读取器所生成的解析函数
 * 
 */

 function main({
   rootProperty,
   fields,
   multi,
   create:createFn,
   createExtraParams
 }){

    return  (new Function('data' , `

      var me = this,
         include = me.include,
         converts = me.converts,
         createFn = me.createFn,
         get = include('object.get'),
         from = include('array.from'),
         isEmpty = include('is.empty');

      ${generate_get_root_data(rootProperty)}

      data = from(data) ;

      var result = [],
          len = data.length;

      for(var i = 0 ; i < len ; i ++){

         var item = {},
             currentItem = data[i];

         ${generate_get_field_data(fields)}

         result.push(createFn(item)) ;
      }

      ${generate_result(multi)}

    `)).bind({
       include,
       converts:generate_get_field_converts(fields),
       createFn:data =>{

         if(isFunction(createFn)){

            return createFn(assign(data , createExtraParams)) ;
         }

         return data ;

       }
    });
 }

 function generate_result(multi){

   return multi ? `return result;` :`return result[0];`;
 }

 function generate_get_root_data(rootProperty){

   if(rootProperty !== '.'){

      return `data = get(data , '${rootProperty}');` ;
   }

   return '' ;
 }

 function generate_get_field_converts(fields){

   let converts = {} ;

   for(let field of fields){

      if(isObject(field)){

         let {
            name,
            convert
         } = field ;

         if(convert){

            converts[name] = convert ;
         }
      }
   }

   return converts ;
 }

 const {
   stringify
 } = JSON ;

 function generate_get_field_data(fields){

   let result = [] ;

   for(let field of fields){

      if(isString(field)){

         result.push(`item.${field} = currentItem.${field};`) ;

      }else if(isObject(field)){

         let {
            name,
            mapping,
            convert,
            defaultValue
         } = field ;

         if(convert){

            result.push(`item.${name} = converts.${name}(currentItem);`) ;

         }else if(mapping){

            result.push(`item.${name} = get(currentItem , '${mapping}');`) ;
         }

         if(defaultValue){

            result.push(`item.${name} = isEmpty(item.${name}) ? ${stringify(defaultValue)} : item.${name};`) ;
         }
      }
   }

   return result.join('') ;
 }