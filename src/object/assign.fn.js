
/**
 * 
 * 积极深度合并
 * 
 * @import isObject from is.object
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
    }

    return source ;
}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}