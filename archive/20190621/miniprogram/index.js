



try{
    const {
        env
    } = process ;
    
    if(!env['ZBEE-APP-PATH']){
    
        env['ZBEE-APP-PATH'] = __dirname ;
    }
    
}catch(err){

}

const include = (() =>{

    const nameRe = /^(\w+)\:{2}(.+?)$/,
          CODES = {};

    return name =>{

        if(CODES.hasOwnProperty(name)){

            return CODES[name] ;
        }

        let match = name.match(nameRe),
            folder,
            className;
    
        if(match){
    
            folder = match[1],
            className = match[2] ;
    
        }else{

            if(exports.hasOwnProperty(name)){

                return CODES[name] = exports[name] ;
            }
    
            folder = 'src',
            className = name ;
        }

        let fullName = `${folder}::${className}`,
            code = CODES[name] = exports[fullName] ;

        if(code === undefined && folder !== 'config'){

            throw new Error(`${fullName} 没有定义`) ;
        }

        return code ;
    } ;

})();


exports.include = include ;


const config = (() =>{

    const {
        freeze:freeze2,
        isFrozen,
        keys
    } = Object ;

    function freeze(data){

        if (data && typeof data === 'object' && !isFrozen(data)){

            freeze2(data);

            let names = keys(data) ;

            for(let name of names){

                freeze(data[name]) ;
            }
        }

        return data;
    }

    const config = {};

    function get_config(target , key){

        if(key){
    
            if(target.hasOwnProperty(key)){
        
                return freeze(target[key]) ;
            }
        
            let names = key.split(/\./),
                prefix = '';
        
            for(let name of names){
        
                let key = `${prefix}${name}` ;
        
                if(target.hasOwnProperty(key)){
        
                    target = target[key] ;
        
                    prefix = '' ;
                
                }else{
        
                    prefix = `${key}.` ;
                }
            }

            if(prefix){
        
                return ;
            }
        }

        return freeze(target) ; 
    }

    return (name , key) =>{

        try{

            const {
                env
            } = process ;

            let data;

            try{

                data = require(`${env['ZBEE-APPLICATION-ROOT-PATH']}/config/${name.replace(/\./g , '/')}.json`) ;

            }catch(err){
            }

            if(data){

                return get_config(data , key) ;
            }
        
        }catch(err){

        }

        if(config.hasOwnProperty(name)){

            return get_config(config[name] , key) ;
        }

        return get_config(include(`config::${name}`)() , key) ;
    }

})();




exports['src::function.empty'] = (() =>{

                

                

                

                

                /**
 * 
 * 返回一个空函数
 * 
 * @scoped
 * 
 */

const emptyFn = () =>{
} ;

function main(){

    return emptyFn ;
}

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::miniprogram.page'] = (() =>{

                let empty;

                let var_init_locked_1561102865241;

                

                

                
/**
 * 
 * 针对小程序的页面进行封装
 * 
 * @import empty from function.empty value
 * 
 * @param {object} config 页面设置
 * 
 * @return {object} 封装后的页面配置 
 * 
 */

 function main({

    onLoad = empty,

    ...options

 }){

    return {

        onLoad(query){
    
            let me = this,
            {
                setData:nativeSetData
            } = me ;

            me.setData = values =>{

                nativeSetData.call(me , values , () =>{

                    console.log('设置完成') ;

                }) ;

            } ;

            onLoad.call(this , query) ;
        },

        ...options
     } ;
 }
 

                return function(config){

                    
        if(!var_init_locked_1561102865241){

            empty = include('function.empty')();

            var_init_locked_1561102865241 = true ;
        }
        

                    

                    return main.call(this , config) ;
                } ;

            })();





