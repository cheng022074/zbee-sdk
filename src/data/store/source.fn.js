
/**
 * 
 * 存储
 * 
 */

 class main extends Array{

    constructor(){

        super() ;

        this.map = {} ;
    }

    clear(){

        let me = this ;

        me.map = {} ;

        me.length = 0 ;
    }

    push(...records){

        let {
            map
        } = this ;

        for(let record of records){

            let {
                id
            } = record ;

            if(id && !map.hasOwnProperty(id)){

                map[id] = record;

                super.push(record) ;
            }
        }
    }
 }