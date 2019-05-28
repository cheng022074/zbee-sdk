
/**
 * 
 * 数据存储器
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
 * @import createRecordset from data.recordset
 * 
 * @class
 * 
 */

class main{

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

        me.recordset = createRecordset(me) ;

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

        me.reader = createReader({
            model
        }) ;
    }

    createRecord(data){

        let records = this.reader(data) ;

        if(records.length){

            return records[0] ;
        }
    }

    onProxyRead(proxy , records){

        let me = this,
        {
            recordset
        } = me;

        recordset.add(records) ;

        me.fireEvent('load' , records) ;
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
            recordset
        } = me ;

        recordset.clear() ;

        me.fireEvent('clear') ;

    }
}

 