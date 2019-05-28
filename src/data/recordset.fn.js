
/**
 * 
 * 数据记录集合
 * 
 * @import remove from array.remove
 * 
 * @import insert from array.insert
 * 
 * @import from from array.from
 * 
 * @import isModel from is.data.model
 * 
 * @import isObject from is.object.simple
 * 
 */

 class main{

    constructor(store){

        let me = this ;

        me.recordMap = new Map() ;

        me.recordData = [] ;

        me.store = [] ;
    }

    /**
     * 
     * 清理
     * 
     */
    clear(){

        let {
            recordMap,
            recordData
        } = this ;

        recordMap.clear() ;

        recordData.length = 0 ;
    }

    /**
     * 
     * @param {function} fn 循环执行的函数
     *  
     * @param {mixed} scope 
     */
    each(fn , scope){

        let {
            recordData
        } = this ;

        for(let record of recordData){

            fn.call(scope , record) ;
        }
    }

    /**
     * 
     * 添加数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    add(records){

        let me = this,
        {
            recordData
        } = me ;

        records = getRecords.call(me , records) ;

        recordData.push(...records) ;

        return records ;
    }
     /**
     * 
     * 插入数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    insert(index , records){

        let me = this,
        {
            recordData
        } = me ;

        records = getRecords.call(me , records) ;

        insert(recordData , index , ...records) ;

        return records ;
    }
     /**
     * 
     * 删除数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    remove(records){

        records = from(records) ;

        let {
            recordMap,
            recordData
        } = this,
        removeRecords = [];

        for(let record of records){

            let {
                id
            } = record ;

            if(recordMap.has(id)){

                recordMap.delete(id) ;

                remove(recordData , record) ;

                record.unbindStore() ;

                removeRecords.push(record) ;
            }
        }

        return removeRecords ;
    }
 }

 /**
  * 
  * 待处理的数据记录
  * 
  * @param {mixed} records 数据记录
  * 
  */
 function getRecords(records){

    records = from(records) ;

    let {
        recordMap,
        recordData,
        store
    } = me,
    result = [];

    for(let record of records){

        if(isObject(record)){

            record = store.createRecord(record) ;
        }

        if(isModel(record)){

            let {
                id
            } = record ;

            if(recordMap.has(id)){

                recordMap.delete(id) ;
    
                remove(recordData , record) ;
            }

            recordMap.set(id , record) ;

            result.push(record) ;
        }
    }

    return result ;
 }
