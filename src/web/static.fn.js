
/**
 * 
 * 针对于 Koa-static 进行二次封装
 * 
 * @import is.string
 * 
 * @import is.boolean
 * 
 * @param {function} routerFn 路由函数
 * 
 * @param {function} routerRegex 路由正则
 * 
 * @param {function} staticFn 静态函数
 * 
 * @param {object} ctx Koa 的上下文对象
 * 
 * @param {function} next Koa 向下执行一个单元
 * 
 * 
 * @async
 * 
 */

let {
    request
} = ctx,
{
    url
} = request;

if(routerRegex && !routerRegex.test(url)){

    return await staticFn(ctx , next) ;
}

let result = await routerFn(ctx) ;

if(isString(result)){

    ctx.redirect(result) ;

}else{

    return await staticFn(ctx , next) ;
}