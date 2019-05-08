
/**
 * 
 * 函数实现说明
 * 
 * @import is.defined
 * 
 * @import string.convert.string
 * 
 * @import get from object.value.get
 * 
 * @param {object} router 基于 Koa 的路由对象
 * 
 * @param {string} url 请求路径
 * 
 * @param {string} name 脚本文件名称
 * 
 * @param {string} [method='GET'] HTTP 请求方式
 * 
 * @param {array} [params = []] HTTP 参数集合
 * 
 */

router[method.toLowerCase()](url , async (ctx) =>{

    let values = [] ;

    for(let {
        type,
        mapping
    } of params){

        type = type || 'string' ;

        values.push(include(`string.convert.${type}`)(get(ctx , mapping))) ;
    }

    try{

        let result = await include(name)(...values) ;

        if(isDefined(result)){

            ctx.body = {
                success:true,
                data:result
            }
        
        }else{

            ctx.body = {
                success:true
            }
        }

    }catch(err){

        ctx.body = {
            success:false,
            message:err.message
        } ;
    }

}) ;
