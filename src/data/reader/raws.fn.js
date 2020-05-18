
/**
 * 
 * 获取一组原始数据用来解析数据记录
 * 
 * @import is.function
 * 
 * @import from from array.from
 * 
 * @param {mixed} data 原始数据
 * 
 * @param {string} root 根遍历路径
 * 
 * @return {array} 一组原始数据 
 * 
 */

let {
    getData
} = this,
raws;

if(isFunction(root)){

    raws = root(data) ;

}else{

    raws = getData(data , root) ;
}

return from(raws) ;