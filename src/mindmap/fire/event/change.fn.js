/**
 * 
 * 脑图数据改变事件
 * 
 * @param {string} operation 数据改变行为
 * 
 * @param {object} node 数据改变的节点
 * 
 * @param {string} parentNodeId 数据改变的节点父节点编号
 * 
 * @param {string} previousNodeId 数据改变的节点前兄弟节点编号
 * 
 */

let me = this ;

switch(operation){

    case 'create':

        me.fireEvent('change' , operation , node , parentNodeId , previousNodeId) ;       

        break ;

    case 'move':

        me.fireEvent('change' , operation ,  node , parentNodeId , previousNodeId) ;

        break ;

    case 'remove':

        me.fireEvent('change' , operation , node) ;
}