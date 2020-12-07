
/**
 * 
 * 启动微服务服务器
 * 
 * @import config from .config value
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
} = config;

let app = new Koa(),
    router = new Router();

app.use(async ctx => ctx.body = 'Hello World');

server = app
.use(router.routes())
.use(router.allowedMethods())
.listen(port) ;

