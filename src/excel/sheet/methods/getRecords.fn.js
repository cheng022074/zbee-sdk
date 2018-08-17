
/**
 * 
 * 获取所有数据信息
 * 
 * @import getAddress from excel.sheet.methods.address
 * 
 * 
 * @param {string} [address = 'A2'] 单元格区域信息
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
records = [];

for(let rowIndex = startCell.r ; rowIndex <= endCell.r ; rowIndex ++){

    let record = [] ;

    for(let columnIndex = startCell.c ; columnIndex <= endCell.c ; columnIndex ++){

        let cell = data[encode_cell({
            c:columnIndex,
            r:rowIndex
        })] ;
    
        if(cell){
    
            record.push(cell.v) ;
        
        }else{

            record.push('') ;
        }
    }

    records.push(record) ;
}

return records ;