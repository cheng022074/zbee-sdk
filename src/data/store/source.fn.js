
/**
 * 
 * 存储
 * 
 */

 class main extends Array{

    constructor(){

        super() ;

        this.ids = [] ;
    }

    push(...records){

        let {
            ids
        } = this ;

        for(let record of records){

            let {
                id
            } = record ;

            if(id && !ids.includes(id)){

                ids.push(id) ;

                super.push(record) ;
            }
        }
    }
 }