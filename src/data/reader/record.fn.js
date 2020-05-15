
/**
 * 
 * 根据获取原始数据转换后正式数据
 * 
 * @param {mixed} raw 行级原始数据
 * 
 * @param {array} raws 一组行级原始数据
 * 
 * @param {number} index 原始数据下标
 * 
 * @param {mixed} data 原始数据
 * 
 * @return {object} 正式数据
 * 
 */

let {
    fields
} = this,
record = {};

for(let {
    name,
    convert
} of fields){

    record[name] = convert(row , rows , index , data) ;
}

return record ;