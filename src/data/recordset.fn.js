/**
 * 
 * 数据记录集合
 * 
 * @import remove from array.remove
 * 
 * @import removeIndex from array.remove.index
 * 
 * @import insert from array.insert
 * 
 * @import from from array.from
 * 
 * @import isModel from is.data.model
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import clone from array.clone
 * 
 * @param {data.Store} store 存储器
 * 
 */

 class main{

    constructor(store){

        let me = this ;

        me.recordMap = new Map() ;

        me.recordData = [] ;

        me.store = store ;
    }

    /**
     * 
     * 转换成数组输出
     * 
     * @return {array}
     * 
     */
    toArray(){

        return clone(this.recordData) ;
    }

    /**
     * 
     * 根据编号获得数据记录
     * 
     * @param {mixed} id 数据记录编号
     * 
     * @return {data.Model} 
     * 
     */
    getById(id){

        let {
            recordMap
        } = this ;

        return recordMap.get(id) ;
    }

    /**
     * 
     * 根据数据记录获得在存储器中的位置
     * 
     * @param {data.Model} record 数据记录
     * 
     * @return {number} 数据记录位置
     * 
     */
    indexOf(record){

        let {
            recordData
        } = this ;

        return recordData.indexOf(record) ;
    }

    /**
     * 
     * 查寻数据记录
     * 
     * @param {mixed} property 属性名称
     *  
     * @param {mixed} [value] 属性值
     * 
     * @return {array} 数据记录集合
     *  
     */
    findRecords(property , value){

        let {
            recordData:records
        } = this ;

        if(isString(property)){

            let result = [] ;

            for(let record of records){

                if(record.get(property) === value){

                    result.push(record) ;
                }
            }

            return result ;

        }else if(isFunction(property)){

            let result = [] ;

            for(let record of records){

                if(property.call(value , record) === true){

                    result.push(record) ;
                }
            }

            return result ;

        }
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

        resetRecordData(recordData) ;

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

        resetRecordData(recordData) ;

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
    } = this,
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

                record = recordMap.get(id) ;
    
                removeRecord(recordData , record) ;

                record.set(record.data) ;
            
            }else{

                recordMap.set(id , record) ;

                if(record.isBindStore && record.store !== store){

                    continue ;
                }

                record.bindStore(store) ;
            }

            result.push(record) ;
        }
    }

    return result ;
 }

 function removeRecord(recordData , record){

    let index = recordData.indexOf(record) ;

    if(index !== -1){

        recordData[index] = undefined ;
    }
 }

 function resetRecordData(recordData){

    let index ;

    while((index = recordData.indexOf(undefined)) !== -1){

        removeIndex(recordData , index) ;
    }
 }
