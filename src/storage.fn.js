/**
 * 
 * 数据存储器
 * 
 * @import is.string
 * 
 * @config name from storage...name
 * 
 * @class
 * 
 */

 class main{

    getKey(key){

        return `${name}-${key}` ;
    }

    setItem(key , value){

        let me = this ;

        me.doSetItem(me.getKey(key) , value) ;
    }

    getItem(key){

        let me = this ;

        return me.doGetItem(me.getKey(key)) ;
    }

    removeItem(key){

        let me = this ;

        return me.doRemoveItem(me.getKey(key)) ;
    }

    key(index){

       let me = this,
           key = me.doKey(index);

        if(isString(key)){

            return key.replace(`${name}-`) ;
        }
    }

    clear(){

        return this.doClear() ;
    }
 }