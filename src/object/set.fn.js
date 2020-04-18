
/**
 * 
 * 实现一个对象 Set
 * 
 * @import flat from .flat
 * 
 * @import remove from array.remove.index
 * 
 * @import getKeys from object.keys
 * 
 */

 const {
    keys:getKeys
 } = Object ;

function find(value){

    let findValues = flat(value),
        findKeys = getKeys(findValues),
        findLen = findKeys.length;

    let {
        data
    } = this,
    index = 0;

    for(let {
        values:currentValues,
        keys:currentKeys,
        len:currentLen
    } of data){

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
                    value:data[index]
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

        this.data = [] ;
    }

    add(value){

        let me = this,
        {
            data
        } = me,
        index = me.indexOf(value);

        if(index === -1){

            let insertValues = flat(value),
                insertKeys = getKeys(insertValues);
        
            data.push({
                keys:insertKeys,
                len:insertKeys.length,
                values:insertValues,
                value
            }) ;
        }
    }

    indexOf(value){

        let {
            index
        } = find.call(this , value) ;

        return index ;
    }

    has(value){

        return this.indexOf(value) !== -1 ;
    }

    get(index){

        let {
            data
        } = this,
        item = data[index];

        if(item){

            return item.value ;
        }
    }

    get size(){

        return this.data.length ;
    }

    delete(value){

        let me = this,
        {
            data
        } = me ;

        me.deleteByIndex(me.indexOf(value)) ;
    }

    deleteByIndex(index){

        let me = this,
        {
            data
        } = me ;

        remove(data , index) ;
    }
 }