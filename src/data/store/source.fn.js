
/**
 * 
 * 存储
 * 
 * @import is.defined
 * 
 */

 class main extends Array{

    constructor(store){

        super() ;

        let me = this ;

        me.map = {} ;

        me.store = store ;
    }

    clear(){

        let me = this ;

        me.map = {} ;

        me.length = 0 ;
    }

    splice(index , hasMany , ...records){

        let me = this,
        {
            map,
            store
        } = me;

        let count = 1 ;

        while(count <= hasMany){

            count ++ ;

            let record = me[index] ;

            if(record){

                delete map[record.id] ;

                super.splice(index , 1) ;

                record.destroy() ;
            }
        }

        let {
            length
        } = records ;

        for(let i = 0 ; i < length ; i ++){

            let record = records[i],
            {
                id
            } = record ;

            if(!isDefined(id)){

                continue ;
            }

            record.bindStore(store) ;

            if(!map.hasOwnProperty(id)){

                map[id] = record;

                super.splice(index + i , 0 , record) ;
            
            }else{

                let oldRecord = map[id] ;

                me[me.indexOf(oldRecord)] = record ;

                map[id] = record;

                oldRecord.destroy() ;
            }
        }
        
    }

    push(...records){

        let me = this,
        {
            map,
            store
        } = me ;

        for(let record of records){

            let {
                id
            } = record ;

            if(!isDefined(id)){

                continue ;
            }

            record.bindStore(store) ;

            if(!map.hasOwnProperty(id)){

                map[id] = record;

                super.push(record) ;
            
            }else{

                let oldRecord = map[id] ;

                me[me.indexOf(oldRecord)] = record ;

                map[id] = record;

                oldRecord.destroy() ;
            }
        }
    }
 }