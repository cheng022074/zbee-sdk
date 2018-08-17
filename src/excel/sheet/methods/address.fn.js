
/**
 * 
 * 完整单元格地址信息
 * 
 * @import getEndCellAddress from excel.sheet.properties.endCellAddress
 * 
 * @param {string} address 单元格地址
 * 
 * @return {string} 完善后的单元格地址信息
 * 
 * @scoped
 * 
 */

const addressRe = /^[A-Z]+\d+\:[A-Z]+\d+$/ ;

function main(address){

    if(addressRe.test(address)){

        return address ;
    }

    return `${address}:${getEndCellAddress.call(this)}` ;
}