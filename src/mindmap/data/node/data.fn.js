
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {array} [addFields] 附加字段信息
 * 
 * @return {object} 数据信息 
 * 
 */

 const DATA_FIELDS = {
    root(node){

        return isRootNode(node) ;
     },

     leaf(node){

        return isLeafNode(node) ;
     }
 } ;

function main(node , addFields = DATA_FIELDS){

   node = from(node);

   let data = this.reader.data(node , [
      'children'
   ]),
         names = Object.keys(addFields) ;

   for(let name of names){

      data[name] = addFields[name](node) ;
   }

   return data ;
}


 