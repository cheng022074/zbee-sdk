
/**
 * 
 * 清除指定对象的所有键
 * 
 * @param {object} data 对象数据
 * 
 */

let keys = Object.keys(data) ;

for(let key of keys){

    delete data[key] ;
}
