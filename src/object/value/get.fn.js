
/**
 * 
 * 获得一个对象的键值
 * 
 * @import is.array
 * 
 * @import is.object
 * 
 * @import is.defined
 * 
 * @import join from object.key.join
 * 
 * @param {object} data 对象数据
 * 
 * @param {string} [key = '.'] 对象键值
 * 
 * @return {mixed} 对应对象数据的键值的数据 
 * 
 * @scoped
 * 
 */

const firstKeyRe = /^([^\.]+)\./;

function main(data , key , prefixKey = ''){

    if(key === '.'){

        return data ;
    }

    if(isObject(data)){

        let firstKey,
            lastKey = key.replace(firstKeyRe , function(){

                firstKey = arguments[1] ;
                
                return '' ;

            }) ;

        if(firstKey){

            firstKey = join(prefixKey , firstKey) ;

            let result ;

            if(data.hasOwnProperty(firstKey)){

                result = data[firstKey] ;

                prefixKey = '' ;

            }else{

                result = data ;

                prefixKey = firstKey ;
            }

            if(lastKey){

                return main(result , lastKey , prefixKey) ;
            }
        
            return result ;
        
        }else{

            return data[join(prefixKey , lastKey)] ;
        }

    }else if(isArray(data)){

        let result = [] ;

        for(let item of data){

            let itemResult = main(item , key) ;

            if(isArray(itemResult)){

                result.push(...itemResult) ;
            
            }else if(!isDefined(itemResult)){

                result.push(itemResult) ;

            }
        }

        return result ;
    }
}