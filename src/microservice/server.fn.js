
/**
 * 
 * 启动微服务服务器
 * 
 * @import getConfig from .server.config
 * 
 * @param {object} config 服务器启动配置
 * 
 * @require koa
 * 
 * @require @koa/router
 * 
 */

const
Koa = require('koa'),
Router = require('@koa/router'),
{
    port
} = getConfig(config);

let app = new Koa(),
    router = new Router();

app.use(async ctx => ctx.body = 'Hello World');

server = app
.use(router.routes())
.use(router.allowedMethods())
.listen(port) ;

