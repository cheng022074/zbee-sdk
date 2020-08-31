
/**
 * 
 * 是否为叶子节点
 * 
 * @param {string} id 脑图节点编号
 * 
 * @return {boolean} 如果指定节点为叶子节点则返回 true , 否则返回 false  
 * 
 */

 let node = this.mindmap.query(id) ;

 if(node){

    return node.children.length === 0 ;
 }

 return false ;

