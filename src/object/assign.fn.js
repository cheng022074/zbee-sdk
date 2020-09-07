
/**
 * 
 * 积极深度合并
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import is.date
 * 
 * @import array.clone
 * 
 * @import date.clone
 * 
 * @param {object} dest 目标数据
 * 
 * @param {object} [...sources] 来源数据
 * 
 * @return {object} 合并后数据
 * 
 * @scoped
 * 
 */

function assign(dest , source){

    if(isObject(dest) && isObject(source)){

        let names = Object.keys(source) ;

        for(let name of names){

            dest[name] = assign(dest[name] , source[name]) ;
        }

    }else if(isArray(source)){

        source = arrayClone(source) ;
    
    }else if(isDate(source)){

        source = dateClone(source) ;
    }

    return source ;
}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}