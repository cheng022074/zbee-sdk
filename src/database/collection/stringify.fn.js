
/**
 * 
 * 将获得的数据库序列化成可以逆向的代码数据
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import format from script.format
 * 
 * @import template::database.backup
 * 
 * @import apply from template.apply
 * 
 * @param {mixed} data 数据表数据
 * 
 * @param {string} [name = 'default'] 数据库连接名称
 * 
 * @return {string} 返回的序列化数据
 * 
 * @scoped
 * 
 */

function main(data , name){

    let databaseConfig = config('database' , name) ;

    if(!databaseConfig){

        throw new Error(`${name} 无效的数据库配置`) ;
    }

    let {
        backup
    } = databaseConfig ;

    let {
        datatype,
        converts,
        template
    } = backup || {},
    typeFn = datatype ? include(datatype) : gettype,
    convertFns = {};

    template = template || 'database.backup' ;

    if(converts){

        let names = Object.keys(converts) ;

        for(let name of names){

            convertFns[name] = include(converts[name]) ;
        }
    }

    if(isObject(data)){

        return return_value(template , processObject(data , typeFn , convertFns)) ;
    
    }else if(isArray(data)){

        return return_value(template , processArray(data , typeFn , convertFns)) ;
    }
}

function return_value(template , code){

    return format(apply(template , {
        code
    })) ;
}

function processArray(data , typeFn , convertFns){

    let result = [] ;

    for(let item of data){

        if(isArray(item)){

            result.push(processArray(item , typeFn , convertFns)) ;

        }else if(isObject(item)){

            result.push(processObject(item , typeFn , convertFns)) ;
        
        }else{

            let type = typeFn(item) ;

            if(type){

                let convertFn = convertFns[type] ;

                if(convertFn){

                    result.push(convertFn(item)) ;

                    continue ;
                }
            }

            result.push(JSON.stringify(item , null , 2)) ;
        }

        
    }

    return `[${result.join(',')}]` ;
}

function processObject(data , typeFn , convertFns){

    let names = Object.keys(data),
        result = [];

    for(let name of names){

        let item = data[name] ;

        if(isArray(item)){

            result.push(`${name}:${processArray(item , typeFn , convertFns)}`) ;

            continue ;

        }
        
        if(isObject(item)){

            result.push(`${name}:${processObject(item , typeFn , convertFns)}`) ;

            continue ;
        
        }

        let type = typeFn(item);

        if(type){

            let convertFn = convertFns[type] ;

            if(convertFn){

                data[name] = convertFn(item) ;

                result.push(`${name}:${convertFn(item)}`) ;

                continue ;
            }
        }

        result.push(`${name}:${JSON.stringify(item , null , 2)}`) ;
    }


    return `{${result.join(',')}}` ;
}
