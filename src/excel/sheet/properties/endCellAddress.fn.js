
/**
 * 
 * 获取工作表最后单元格
 * 
 * @param {mixed} data 参数说明
 * 
 * @return {mixed} 返回说明 
 * 
 * @scoped
 * 
 */

const endCellAddressRe = /[A-Z]+\d+$/ ;

function main(){

    return this.data['!ref'].match(endCellAddressRe)[0] ;
}