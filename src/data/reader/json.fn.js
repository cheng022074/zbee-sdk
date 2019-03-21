/**
 * 
 * JSON 数据读取器
 * 
 * @import get from object.get
 * 
 * @import getReader from data.reader
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根
 * 
 * @param {string} [config.fields] 读取数据记录的字段项
 * 
 * @return {function} 读取器所生成的解析函数
 * 
 * @scoped
 * 
 */

 function main({
   rootProperty,
   fields
 }){

    return  (new Function('data' , `

      var get = include('object.get'),
          converts = this;

      ${generate_get_root_data(rootProperty)}

      var result = [],
          len = data.length;

      for(var i = 0 ; i < len ; i ++){

         var item = {},
             currentItem = data[i];

         ${generate_get_field_data(fields)}

         result.push(item) ;
      }

      return result ;

    `)).bind(generate_get_field_converts(fields));
 }

 function generate_get_root_data(rootProperty){

   if(rootProperty !== '.'){

      return `data = get(data , '${rootProperty}');` ;
   }

   return '' ;
 }

 function generate_get_field_converts(fields){

   let converts = {} ;

   for(let {
      name,
      convert
   } of fields){

      if(convert){

         converts[name] = convert ;
      }
   }

   return converts ;
 }

 function generate_get_field_data(fields){

   let result = [] ;

   for(let field of fields){

      if(isString(field)){

         result.push(`item.${field} = currentItem.${field};`) ;

      }else if(isObject(field)){

         let {
            name,
            mapping,
            convert
         } = field ;

         if(convert){

            result.push(`item.${name} = converts.${name}(currentItem);`) ;

         }else if(mapping){

            result.push(`item.${name} = get(currentItem , '${mapping}');`) ;
         }
      }
   }

   return result.join('') ;
 }