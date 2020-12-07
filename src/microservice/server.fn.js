
/**
 * 
 * 启动微服务服务器
 * 
 * @import config from .config value
 * 
 * @import get from object.value.get
 * 
 * @import is.defined
 * 
 * @param {object} config 服务器启动配置
 * 
 * @require koa
 * 
 * @require @koa/router
 * 
 * @require koa-bodyparser
 * 
 */

const
Koa = require('koa'),
Router = require('@koa/router'),
Body = require('koa-bodyparser'),
{
    port,
    server
} = config;

let app = new Koa(),
    router = new Router(),
    uris = Object.keys(server);

app.use(Body()) ;

for(let uri of uris){

    let {
        method,
        params,
        source
    } = server[uri] ;

    router[method](uri , ctx => {

        const {
            request
        } = ctx,
        args = [];

        for(let {
            target,
            property
        } of params){

            args.push(get(request[target] , property)) ;
        }

        let data = source(...args),
            success = true;

        if(isDefined(data)){

            ctx.body = {
                success,
                data
            }
        
        }else{

            ctx.body = {
                success
            } ;
        }

        

    }) ;
}

app
.use(router.routes())
.use(router.allowedMethods())
.listen(port) ;

