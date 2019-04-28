/**
 * 
 * 将节点插入到线性表中
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {mixed} node 子节点
 * 
 * @param {mixed} baseChildNode 基准子节点
 * 
 * @param {string} position 插入在基准子节点的前后位置
 * 
 */

 let {
    list
 } = this ;

 switch(position){

   case 'before':

      list.insert(baseChildNode , node , 'beforestart') ;

      break ;

   case 'after':

      list.insert(baseChildNode , node , 'afterend') ;
 }