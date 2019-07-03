
/**
 * 
 * 数据存储器
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
 }