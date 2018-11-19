
/**
 * 
 * 模型存储器
 * 
 * @import defineProperty from object.defineCacheProperty
 * 
 * @import model
 * 
 * @once
 * 
 * @return {Store} 模型存储器类型引用 
 * 
 */

 
class Store{

    constructor(data){

        let me = this ;

        defineProperty(me , 'modelClass') ;
    }

    applyModelClass(){

        return include(this.applyModelName())() ;
    }

    applyModelName(){

        return 'model' ;
    }

    set data(data){


    }

    get data(){


    }

    add(data){


    }

    insert(index , data){

    }

    remove(index){


    }

}

return Store ;