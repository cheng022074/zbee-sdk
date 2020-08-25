
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
 * @class
 * 
 */

class main{

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
}

 