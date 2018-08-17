
/**
 * 
 * 获得当前 Excel 中所有的工作表对象列表
 * 
 * @import once from object.setOnce
 * 
 * @import Sheet from excel.sheet
 * 
 * @scoped
 * 
 */

function createSheets(){

    let {
        SheetNames:names,
        Sheets:sheets
    } = this.data,
    result = new Map;

    for(let name of names){

        result.set(name , new Sheet(sheets[name])) ;
    }

    return result ;
}


function main(){

    let me = this ;

    return once(me , '$sheets' , createSheets , me) ;
}
