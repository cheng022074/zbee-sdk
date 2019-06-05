
/**
 * 
 * 打开订阅器
 * 
 * @import equals from object.equals
 * 
 * @param {object} [params = {}] 订阅参数
 * 
 */

let {
    extraParams,
    defaultParams,
    params:oldParams
} = this ;

params = assign({} , defaultParams , params , extraParams) ;

if(!oldParams || !equals(params , oldParams)){

    me.close() ;

    me.params = params ;

    me.closed = false ;
    
    me.fireEvent('open' , params , oldParams) ;
}