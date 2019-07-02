
/**
 * 
 * 打开订阅器
 * 
 * @import equals from object.equals
 * 
 * @import assign from object.assign
 * 
 * @param {object} [params = {}] 订阅参数
 * 
 */

let me = this,
{
    extraParams,
    defaultParams,
    params:oldParams
} = me ;

params = assign({} , defaultParams , params , extraParams) ;

if(!oldParams || !equals(params , oldParams)){

    me.close() ;

    me.params = params ;
    
    me.fireEvent('open' , params , oldParams) ;
}