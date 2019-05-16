
/**
 * 
 * 载入数据
 * 
 * @import is.empty
 * 
 * @param {mixed} records 数据
 * 
 */

let me = this,
{
    fullLoad
} = me;

if(fullLoad){

    me.clear() ;
}

let loadRecords = me.add(records , false) ;

me.fireEvent('load' , loadRecords) ;

