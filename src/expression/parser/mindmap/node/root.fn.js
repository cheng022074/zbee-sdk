
/**
 * 
 * 解析路径中的根节点描述符
 * 
 * @param {string} expression 表达式
 * 
 */

 if(expression.trim() === '\/'){

    return {
        syntax:'node',
        type:'axis',
        name:'root'
    } ;
 }