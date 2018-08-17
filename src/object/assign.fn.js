
/**
 * 
 * 深度合并
 * 
 * @import getKeys from object.keys
 * 
 * @import set from object.set
 * 
 * @import get from object.get
 * 
 * @param {object} dest 目标数据
 * 
 * @param {object} source 来源数据
 * 
 * @return {object} 合并后数据
 * 
 */

let keys = getKeys(source) ;

for(let key of keys){

    set(dest , key , get(source , key)) ;
}

return dest ;