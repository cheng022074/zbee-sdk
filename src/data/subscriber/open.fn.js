
/**
 * 
 * 打开订阅器
 * 
 * @import is.defined
 * 
 * @import equals from data.equals
 * 
 * @import assign from object.assign
 * 
 * @import setData from .accept.data scoped
 * 
 * @param {object} [params = {}] 订阅参数
 * 
 */

let me = this,
{
    name,
    extraParams,
    defaultParams,
    params:oldParams,
    connection
} = me ;

params = assign({} , defaultParams , params , extraParams) ;

if(!oldParams || !equals(params , oldParams)){

    me.close() ;

    me.params = params ;
    
    me.fireEvent('open' , params , oldParams) ;

    let subscriber = connection.findOpenedSubscriberByName(name , me) ;

    if(subscriber){

        let {
            cache
        } = subscriber ;

        if(isDefined(cache)){

            me.cache = cahce ;

            setData() ;
        }
    }
}