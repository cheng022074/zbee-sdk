
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import is.array
 * 
 * @import clone from object.clone
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} [options = {}] 附加字段信息
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

 function main(node , {
   fields,
   addFields = DATA_FIELDS
 }){

    node = from(node) ;

    let data ;

    if(isArray(fields)){

      data = {};

      for(let field of fields){

         if(node.hasOwnProperty(field)){

            data[field] = node[field] ;
         
         }else if(addFields.hasOwnProperty(field)){

            data[field] = addFields[field](node) ;
         }
      }

    }else{

      data = Object.assign({} , node) ;

      let names = Object.keys(addFields) ;
    
      for(let name of names){
      
         data[name] = addFields[name](node) ;
      }
    }

    delete data.children ;
    
    delete data.hidden ;
    
    delete data.parentNodeId ;
    
    delete data.leafNodes ;
    
    delete data.relationNodes ;
    
    delete data.firstChildNodes ;
    
    delete data.lastChildNodes ;

    delete data.descendantNodes ;

    delete data.ancestorNodes ;
    
    return clone(data) ;
 }


 