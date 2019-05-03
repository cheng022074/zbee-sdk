/**
 * 
 * JSON 数据读取器
 * 
 * @import object.get
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import array.from
 * 
 * @import is.empty
 * 
 * @import getModel from data.model.get
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根
 * 
 * @param {function} [config.model] 数据模型类
 * 
 * @return {function} 读取器所生成的解析函数
 * 
 */

 function main({
   rootProperty,
   model
 }){

   const Model = getModel(model) ;

   let {
      fields
   } = Model ;

    return  (new Function('data' , `

      var me = this,
         include = me.include,
         converts = me.converts,
         createModel = me.createModel,
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

         result.push(createModel(item)) ;
      }

      return result;

    `)).bind({
       include,
       converts:fields.converts,
       createModel:data => new Model(data)
    });
 }

 function generate_get_root_data(rootProperty){

   if(rootProperty !== '.'){

      return `data = get(data , '${rootProperty}');` ;
   }

   return '' ;
 }

 function generate_get_field_data({
    names
 }){

   let result = [] ;

   for(let name of names){

      result.push(`item.${name} = converts.${name}(currentItem);`) ;

      result.push(`if(isEmpty(item.${name})){

         delete item.${name};
      
      }`) ;
   }

   return result.join('') ;
 }