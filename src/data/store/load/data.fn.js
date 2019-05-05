
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

if(!isEmpty(loadRecords)){

    me.fireEvent('load' , loadRecords) ;
}

