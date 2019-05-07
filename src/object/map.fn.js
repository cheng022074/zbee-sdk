
/**
 * 
 * 对象数组
 * 
 * @import flat from ..flat
 * 
 * @import remove from array.remove.index
 * 
 */

const {
    keys:getKeys
} = Object ;

 function find(key){

    let findValues = flat(key),
        findKeys = getKeys(findValues),
        findLen = findKeys.length;

    let {
        keys,
        values,
    } = this,
    index = 0;

    for(let {
        values:currentValues,
        keys:currentKeys,
        len:currentLen
    } of keys){

        if(findLen === currentLen){

            let isMatch = true ;

            for(let i = 0 ; i < findLen ; i ++){

                let key = findKeys[i] ;

                if(!currentKeys.includes(key)){

                    isMatch = false ;

                    break ;
                }

                if(findValues[key] !== currentValues[key]){

                    isMatch = false ;

                    break ;
                }
            }

            if(isMatch){

                return {
                    index,
                    value:values[index]
                } ;
            }

            index ++ ;
        }
    }

    return {
        index:-1
    } ;
 }

 class main{

    constructor(){

        let me = this ;

        me.keys = [] ;

        me.values = [] ;
    }

    get size(){

        return this.keys.length ;
    }

    set(key , value){

        let me = this,
        {
            keys,
            values
        } = me,
        {
            index
        } = find.call(me , key);

        if(index !== -1){

            values[index] = value ;
        
        }else{

            let insertValues = flat(key),
                insertKeys = getKeys(insertValues);
        
            keys.push({
                keys:insertKeys,
                len:insertKeys.length,
                values:insertValues
            }) ;

            values.push(value) ;
        }
    }

    get(key){

        let {
            value
        } = find.call(this , key) ;

        return value ;
    }

    delete(key){

        let me = this,
            {
                index
            } = find.call(me , key),
            {
                keys,
                values
            } = me;

        if(index !== -1){

            remove(keys , index) ;

            remove(values , index) ;
        }
    }

    has(key){

        let me = this,
            {
                index
            } = find.call(me , key);

        return index !== -1 ;
    }

    values(){

        return Array.from(this.values) ;
    }

    forEach(fn , scope){

        let {
            keys,
            values
        } = this,
        len = values.length ;

        for(let i = 0 ; i < len ; i ++){

            fn.call(scope , values[i] , keys[i]) ;
        }
    }
 }