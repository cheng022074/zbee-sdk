/**
 * 
 * 获取所有标题信息
 * 
 * 
 * @import getAddress from excel.sheet.methods.address
 * 
 * @param {string} [address='A1'] 单元格区域信息
 * 
 * 
 * @return {array} 
 * 
 */

const {
    decode_range,
    encode_cell
} = require('xlsx').utils,
me = this,
data = me.data;

let {
    s:startCell,
    e:endCell
} = decode_range(getAddress.call(me , address)),
rowIndex = startCell.r,
titles = [];

for(let columnIndex = startCell.c ; columnIndex <= endCell.c ; columnIndex ++){

    let cell = data[encode_cell({
        c:columnIndex,
        r:rowIndex
    })] ;

    if(cell){

        titles.push(String(cell.v).trim()) ;
    
    }else{

        titles.push('') ;
    }
}

return titles ;