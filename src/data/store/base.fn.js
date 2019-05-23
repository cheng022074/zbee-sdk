
/**
 * 
 * 数据存储器
 * 
 * @import observable from mixin.observable
 * 
 * @import get from data.model.get
 * 
 * @import create from data.model.create
 * 
 * @import assign from object.assign
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import createReader from data.reader.json
 * 
 * @class
 * 
 */

class main extends mixins({
    mixins:[
       observable
    ]
}){

    constructor({
        proxy = {},
        data,
        autoLoad,
        fields,
        model,
    } = {}){

        super() ;

        if(fields){

            model = create({
                fields
            }) ;
        
        }

        if(model){

            model = get(model) ;
        
        }

        let me = this ;

        me.fireEventDataCacheCount = 1 ;

        (me.proxy = createProxy(assign({
            type:'memory',
            model,
            reader:{
                type:'json'
            }
        } , proxy))).addListeners({
            read:'onProxyRead',
            scope:me
        }) ;

        me.records = [] ;

        me.recordMap = new Map() ;

        if(data){

            let {
                proxy
            } = me ;

            if(isMemoryProxy(proxy)){

                proxy.read(data)
            }

        }else if(autoLoad){

            me.load() ;
        }

        me.innerReader = createReader({
            model
        }) ;
    }

    onProxyRead(proxy , records){

        if(records.length){

            let me = this,
            {
                records:data,
                recordMap
            } = me;

            for(let record of records){

                let {
                    id
                } = record ;

                if(recordMap.has(id)){

                    recordMap.get(id).set(record.data) ;

                }else{

                    data.push(record) ;

                    recordMap.set(id , record) ;

                    record.bindStore(me) ;
                }
            }

            me.fireEvent('load' , records) ;
        }
    }

    load(options , isClear = true){

        let me = this ;

        if(isClear){

            me.clear() ;
        }

        me.proxy.read(options) ;
    }

    clear(){

        let me = this,
        {
            records,
            recordMap
        } = me ;

        records.length = 0 ;

        recordMap.clear() ;

        me.fireEvent('clear') ;

    }
}

 