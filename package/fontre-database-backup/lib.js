


exports['src::database.properties.databases'] = (() =>{
    
    
    
    
    let __once_1535621112886_value__,
        __once_1535621112886_locked__ = false;
    
    
    

    
    function main(){

        

return new Map() ;
    }
    return function(){
        
        
        if(__once_1535621112886_locked__){

            return __once_1535621112886_value__ ;

        }

        __once_1535621112886_locked__ = true ;
        
        return __once_1535621112886_value__ =  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) ) ;
    }
    

})() ;

exports['src::database.connection.type'] = (() =>{
    
    
    
    
    
    

    
    function main(name){

        

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let {
        type
    } = databaseConfig ;

    return type || 'mongodb' ;
}

throw new Error(`${name} 无效的数据库配置`) ;
    }
    return function(name = 'default'){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , name) ;
    }
    

})() ;

exports['src::database.connection.config'] = (() =>{
    
    
    
    
    
    

    
    function main(name){

        

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let {
        type,
        backup,
        ...proxyConfig
    } = databaseConfig ;

    return proxyConfig ;
}

throw new Error(`${name} 无效的数据库配置`) ;
    }
    return function(name = 'default'){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , name) ;
    }
    

})() ;

exports['src::is.type'] = (() =>{
    
    
    
    
    
    

    
    function main(data,type){

        

 return typeof data === type ;
    }
    return function(data,type){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data,type) ;
    }
    

})() ;

exports['src::is.defined'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1535621112887__ = false ;
    

    
    function main(data){

        

return !isType(data , 'undefined') ;
    }
    return function(data){
        
        if(!__first_executed_1535621112887__){
            isType = include('is.type');
            
            __first_executed_1535621112887__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data) ;
    }
    

})() ;

exports['src::database.mongodb.open'] = (() =>{
    let isDefined,getMap;
    
    
    
    
    
    let __first_executed_1535621112887__ = false ;
    

    
    

const {
    MongoClient
} = require('mongodb');

async function main(map , name , {
    host,
    port,
    database,
    user,
    password
}){

    let client = await MongoClient.connect(`mongodb://${host}:${port}/${database}` , {
        auth:{
            user,
            password
        },
        useNewUrlParser:true
    });

    map.set(name , new DB(client , client.db(database))) ;
}

class DB{

    constructor(client , db){

        let me = this ;

        me.client = client,
        me.db = db ;

    }

    close(){

        return this.client.close() ;
    }
}
    return async function(map,name,config){
        
        if(!__first_executed_1535621112887__){
            isDefined = include('is.defined');
getMap = include('database.properties.databases');
            
            __first_executed_1535621112887__ = true ;
        }
        
        
        return await main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , map,name,config) ;
    }
    

})() ;

exports['src::database.methods.open'] = (() =>{
    let getMap,getConnectionType,getConnectionConfig,databaseMongodbOpen;
    
    
    
    
    
    let __first_executed_1535621112887__ = false ;
    

    
    async function main(name){

        

let databaseConfig = config('database' , name) ;

if(databaseConfig){

    let open,
        config = getConnectionConfig(name);

    try{

        open = include(`database.${getConnectionType(name)}.open`) ;

    }catch(err){

        throw new Error(`系统无法连接此类型数据库:${JSON.stringify(config)}`) ;
    }

    await open(getMap() , name , config) ;

}else{

    throw new Error(`${name} 无效的数据库配置`) ;
}
    }
    return async function(name = 'default'){
        
        if(!__first_executed_1535621112887__){
            getMap = include('database.properties.databases');
getConnectionType = include('database.connection.type');
getConnectionConfig = include('database.connection.config');
databaseMongodbOpen = include('database.mongodb.open');
            
            __first_executed_1535621112887__ = true ;
        }
        
        
        return  await main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , name) ;
    }
    

})() ;

exports['src::database.methods.close'] = (() =>{
    let getMap;
    
    
    
    
    
    let __first_executed_1535621112887__ = false ;
    

    
    async function main(name){

        

let database = getMap().get(name) ;

if(database){

    database.close() ;
    
}else{

    throw new Error(`${name} 无效的数据库配置`) ;
}
    }
    return async function(name = 'default'){
        
        if(!__first_executed_1535621112887__){
            getMap = include('database.properties.databases');
            
            __first_executed_1535621112887__ = true ;
        }
        
        
        return  await main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , name) ;
    }
    

})() ;

exports['src::database'] = (() =>{

    
        class Main{
            static open(){
                    return include('database.methods.open').apply(this , arguments) ;
                }static close(){
                    return include('database.methods.close').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::database.mongodb.collection.find'] = (() =>{
    
    
    
    
    
    

    
    async function main({collection,db,query}){

        

return await db.db.collection(collection).find(query).toArray() ;
    }
    return async function({collection,db,query}){
        
        
        return  await main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , {collection,db,query}) ;
    }
    

})() ;

exports['src::database.collection.find'] = (() =>{
    let getMap,getConnectionType,databaseMongodbCollectionFind;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    async function main({collection,connection,query}){

        

let map = getMap() ;

if(map.has(connection)){

    return await include(`database.${getConnectionType(connection)}.collection.find`)({
        db:map.get(connection),
        collection,
        query
    }) ;
}

return [] ;
    }
    return async function({collection,connection = 'default',query}){
        
        if(!__first_executed_1535621112889__){
            getMap = include('database.properties.databases');
getConnectionType = include('database.connection.type');
databaseMongodbCollectionFind = include('database.mongodb.collection.find');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  await main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , {collection,connection,query}) ;
    }
    

})() ;

exports['src::is.directory'] = (() =>{
    
    
    
    
    
    

    
    function main(path){

        

const {
    existsSync,
    statSync
} = require('fs') ;

return existsSync(path) && statSync(path).isDirectory() ;
    }
    return function(path){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::directory.create'] = (() =>{
    let isDirectory;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    

const {
    mkdirSync
} = require('fs'),
folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

function main(path){

    let folderNames = path.match(folderRe),
        folderPath = '';

    for(let folderName of folderNames){

        folderPath += folderName ;

        if(folderName !== '/' && !isDirectory(folderPath)){

            mkdirSync(folderPath) ;
        }
    }
}
    return function(path){
        
        if(!__first_executed_1535621112889__){
            isDirectory = include('is.directory');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::file.write'] = (() =>{
    let create;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    function main(path,data){

        

const {
    writeFileSync
} = require('fs'),
{
    dirname
} = require('path');

create(dirname(path)) ;

writeFileSync(path , data) ;
    }
    return function(path,data){
        
        if(!__first_executed_1535621112889__){
            create = include('directory.create');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path,data) ;
    }
    

})() ;

exports['src::is.number'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    function main(data){

        

return isType(data , 'number') && isFinite(data);
    }
    return function(data){
        
        if(!__first_executed_1535621112889__){
            isType = include('is.type');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data) ;
    }
    

})() ;

exports['src::date.clone'] = (() =>{
    
    
    
    
    
    

    
    function main(date){

        

return new Date(date.valueOf()) ;
    }
    return function(date){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , date) ;
    }
    

})() ;

exports['src::date.week'] = (() =>{
    let isNumber,clone;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    function main(date){

        

if(isNumber(date)){

    date = new Date(date) ;
}

let cloneDate = clone(date),
    year = cloneDate.getFullYear(),
    month = cloneDate.getMonth(),
    day = cloneDate.getDay(),
    dateValue = cloneDate.getDate(),
    count = 7,
    dates = [];

cloneDate.setHours(0) ;

cloneDate.setMinutes(0) ;

cloneDate.setSeconds(0) ;

for(i = 1 ; i <= count ; i ++){

    cloneDate.setFullYear(year) ;

    cloneDate.setMonth(month) ;

    cloneDate.setDate(dateValue + i - day) ;

    dates.push(clone(cloneDate)) ;
}

let endDate = dates[dates.length - 1] ;

endDate.setHours(23) ;

endDate.setMinutes(59) ;

endDate.setHours(59) ;

return dates ;
    }
    return function(date = Date.now()){
        
        if(!__first_executed_1535621112889__){
            isNumber = include('is.number');
clone = include('date.clone');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , date) ;
    }
    

})() ;

exports['src::is.file'] = (() =>{
    
    
    
    
    
    

    
    function main(path){

        

const {
    existsSync,
    statSync
} = require('fs') ;

return existsSync(path) && statSync(path).isFile() ;
    }
    return function(path){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::file.read'] = (() =>{
    let isFile;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    function main(path){

        

const {
    readFileSync
} = require('fs') ;

if(isFile(path)){

    return readFileSync(path) ;
}
    }
    return function(path){
        
        if(!__first_executed_1535621112889__){
            isFile = include('is.file');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::excel.template.apply'] = (() =>{
    let read;
    
    
    
    
    
    let __first_executed_1535621112889__ = false ;
    

    
    function main(path,data){

        

const {
    renderExcel
} = require('ejsExcel'),
template = read(path);

if(template){

    return renderExcel(template , data) ;
}
    }
    return function(path,data = {}){
        
        if(!__first_executed_1535621112889__){
            read = include('file.read');
            
            __first_executed_1535621112889__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path,data) ;
    }
    

})() ;

exports['config::mail'] = {
    "default":{
        "host": "smtp.mxhichina.com",
        "port": 25,
        "secure": false
    }
} ;

exports['src::mail.send'] = (() =>{
    let configMail;
    let mailConfig;
    
    
    
    
    let __first_executed_1535621112891__ = false ;
    

    
    function main(fromMailAddress,fromMailPassword,toMailAddress,{title,text,attachments,name}){

        

const {
    createTransport
} = require('nodemailer'),
{
    basename
} = require('path');

if(mailConfig.hasOwnProperty(name)){

    let i = 0,
        len = attachments.length;

    for(; i < len ; i ++){

        let path = attachments[i] ;

        attachments[i] = {
            filename:basename(path),
            path:path
        } ;
    }

    return new Promise((resolve , reject) =>{
        
            createTransport({
                ...mailConfig[name],
                auth: {
                    user:fromMailAddress,
                    pass:fromMailPassword
                }
            }).sendMail({
                from:fromMailAddress,
                to:toMailAddress.join(','),
                subject:title,
                text,
                attachments
            }, err => {

                if(error){

                    reject(error) ;
                    
                }else{

                    resolve() ;
                }
            
            });

    }) ;

}
    }
    return function(fromMailAddress,fromMailPassword,toMailAddress,{title,text,attachments = [],name = 'default'}= {}){
        
        if(!__first_executed_1535621112891__){
            configMail = include('config::mail');
            mailConfig = config('mail');
            __first_executed_1535621112891__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , fromMailAddress,fromMailPassword,toMailAddress,{title,text,attachments,name}) ;
    }
    

})() ;

exports['src::date.format'] = (() =>{
    
    
    
    
    
    

    
    

const formatFn = require('dateformat') ;

function main(date , format){

    return formatFn(date , format) ;
}
    return function(date,format){
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , date,format) ;
    }
    

})() ;

exports['src::job.start'] = (() =>{
    
    
    
    
    
    

    
    

const {
    scheduleJob
} = require('node-schedule') ;

function main(corn , fn , scope){

    return scheduleJob(corn , fn.bind(scope)) ;
}
    return function(cron,fn,scope){
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , cron,fn,scope) ;
    }
    

})() ;

