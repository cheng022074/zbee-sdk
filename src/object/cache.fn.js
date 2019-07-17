
/**
 * 
 * 缓存
 * 
 * @import is.string
 * 
 * @import is.array
 * 
 * @import is.defined
 * 
 */

 class main{

    constructor(target){

        let me = this ;

        me.target = target ;

        me.cache = {} ;
    }

    clear(names){

        let {
            cache
        } = this ;

        if(!isDefined(names)){

            names = Object.keys(cache) ;

        }else if(isString(names)){

            names = [
                names
            ] ;
        }

        if(isArray(names)){

            for(let name of names){

                delete cache[name] ;
            }
        }
    }

    get(name){

        let {
            cache,
            target
        } = this ;

        if(!cache.hasOwnProperty(name)){

            return cache[name] = target[name];
        }

        return cache[name] ;
    }
 }