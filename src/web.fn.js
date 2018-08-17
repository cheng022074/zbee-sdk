
/**
 * 
 * 构建一个 Web 服务器
 * 
 * @import web.static
 * 
 * @import web.dynamic
 * 
 * @import is.string
 * 
 * @import is.object
 * 
 * @import remove from array.remove
 * 
 * @import start from web
 * 
 * @config web from web
 * 
 */

const 
Koa = require('koa'),
mount = require('koa-mount'),
static = require('koa-static'),
Router = require('koa-router'),
Body = require('koa-bodyparser'),
url_join = require('url-join'),
{
    statics,
    dynamics,
    listen
} = web,
{
    join
} = require('path');

let 
app = new Koa(),
router = new Router() ;

app.use(Body()) ;

if(statics){

    let urls = Object.keys(statics) ;

    for(let url of urls){

        let config = statics[url] ;

        url = url_join('/static' , url) ;

        if(isString(config)){

            app.use(mount(url , static(config))) ;
        
        }else{

            let {
                router:routerName,
                path,
                regex
            } = config ;

            path = join(process.env['ZBEE-APPLICATION-ROOT-PATH'] , path) ;

            if(regex){

                regex = new RegExp(regex) ;
            }
        
            if(routerName){

                let staticFn = static(path),
                    routerFn = include(routerName);

                app.use(mount(url , async (ctx , next) =>{

                    await webStatic(routerFn , regex , staticFn , ctx , next) ;

                })) ;

            }else{

                app.use(mount(url , static(path))) ;
            }
        }
    }
}

if(dynamics){

    let urls = Object.keys(dynamics) ;

    for(let url of urls){

        let config = dynamics[url] ;

        url = url_join('/dynamic' , url) ;

        if(isString(config)){

            webDynamic(router , url  , config) ;
        
        }else if(isObject(config)){

            let {
                implement,
                params,
                method
            } = config ;

            webDynamic(router , url , implement , method , params) ;
        }
    }
}

console.log('端口' , listen , ' Web 服务已监听') ;

let sockets = [],
    server;

router.get('/restart' , ctx =>{

    console.log(ctx.request.body) ;

    ctx.body = {
        success:true
    } ;

    /*setTimeout(() =>{

        sockets.forEach(socket =>{

            socket.destroy();
        
        });

        sockets.length = 0 ;
        
        server.close(() => start());

    } , 1000) ;*/

}) ;

server = app
.use(router.routes())
.use(router.allowedMethods())
.listen(listen) ;

server.on('connection' , socket =>{

    sockets.push(socket);

    socket.once('close' , () => remove(sockets , socket));
}) ;