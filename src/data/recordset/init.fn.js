
/**
 * 
 * 将二维数组数据转换成普通的数据记录集合
 * 
 * @param {array} records 记录集合
 * 
 * @param {array} titles 记录字段名称
 * 
 * @return {array} 普通的数据记录集合
 * 
 */

let result = [],
    len = titles.length;

for(let record of records){

    let data = {} ;

    for(let i = 0 ; i < len ; i ++){

        data[titles[i]] = record[i] ;
    }

    result.push(data) ;
}

return result ;