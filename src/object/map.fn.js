
/**
 * 
 * 对象数组
 * 
 * @import createSet from ..set
 * 
 * @import remove from array.remove.index
 * 
 */

 class main{

    constructor(){

        let me = this ;

        me.keys = createSet() ;

        me.values = [] ;
    }

    get size(){

        return this.keys.size ;
    }

    set(key , value){

        let me = this,
        {
            keys,
            values
        } = me,
        index = keys.indexOf(key);

        if(index !== -1){

            values[index] = value ;
        
        }else{

            keys.add(key) ;

            values.push(value) ;
        }
    }

    get(key){

        let {
            keys,
            values
        } = this,
        index = keys.indexOf(key);

        if(index !== -1){

            return values[index] ;
        }
    }

    delete(key){

        let {
            keys,
            values
        } = this,
        index = keys.indexOf(key);

        if(index !== -1){

            keys.deleteByIndex(index) ;

            remove(values , index) ;
        }
    }

    has(key){

        return this.keys.has(key) ;
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

            fn.call(scope , values[i] , keys.get(i)) ;
        }
    }
 }