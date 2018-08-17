
/**
 * 
 * 应用 EJS 模板
 * 
 * @import read from file.read.text
 * 
 * @param {string} name 模板名称
 * 
 * @param {mixed} [data = {}] 应用的模板数据
 * 
 * @return {string} 模板合并数据后的字符串
 * 
 * @scoped
 * 
 */

 const
 TEMPLATES = {},
 {
    compile
 } = require('ejs');

 function main(name , data){

    if(!TEMPLATES.hasOwnProperty(name)){

        let template ;

        try{

            template = include(`template::${name}`) ;

        }catch(err){

            template = read(name) ;
        }

        if(template){

            TEMPLATES[name] = compile(template) ;
        
        }else{

            TEMPLATES[name] = emptyFn ;
        }
    }

    return TEMPLATES[name]({
        data,
        apply:main
    }) ;
 }

 function emptyFn(){

    return '' ;
 }
