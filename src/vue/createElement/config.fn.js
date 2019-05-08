/**
 * 
 * 将指定VUE组件对象中的属性配置转换成创建配置
 * 
 * @import get from object.value.get
 * 
 * @import split from string.split
 * 
 * @param {VueComponent} node VUE虚拟DOM对象
 * 
 * @param {String} property 包含配置的属性项
 * 
 * @param {Boolean} [isSelf = false] 默认是否应用本身
 * 
 * @return {Object} 标准VUE创建配置 
 * 
 */

let attrs = get(node , 'data.attrs') || {};

if(attrs.hasOwnProperty(property)){

   let config = attrs[property],
       keys = Object.keys(config),
       classes = {},
       props = {};

   for(let key of keys){

       switch(key){

           case 'class':

               let values = split(config[key] , /\s/) ;

               for(let value of values){

                   classes[value] = true ;
               }

               break ;

           case 'self':

               isSelf = config[key] ;

               break ;

           default:

               props[key] = config[key] ;
       }
   }

   delete attrs[property] ;

   return {
       isSelf,
       config:{
           'class':classes,
           props
       }
   } ;
}

return {
   isSelf,
   config:{}
} ;