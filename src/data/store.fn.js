
/**
 * 
 * 数据存储器类
 * 
 * @import createRawReader from data.reader.create.external
 * 
 * @import createDataWriter from data.writer.create.application
 * 
 * @import Observable from mixin.observable
 * 
 * @class
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Model} 数据存储器对象 
 * 
 * 
 */

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor({
        model,
        ...options
    }){

       super(options) ;

       let me = this ;

       me.rawReader = createRawReader(model) ;

       me.dataWriter = createDataWriter() ;

       me.ids = {} ;

       me.data = [] ;

    }
  
    load(data){

        let me = this,
        {
            rawReader,
            dataWriter
        } = me ;

        me.fireEvent('load' , dataWriter.write(me.data = rawReader.read(data))) ;
    }

    append(data){

        let me = this,
        {
            rawReader
        } = me ;

        add.call(me , ...rawReader.read(data)) ;

        console.log('增量载入数据' , $data) ;

        // 触发 add 事件
    }

    onReplaceRecord(record , oldRecord){

        return record ;
    }
 }

 function add(...records) {
    
    let me = this,
    {
        ids,
        data
    } = me ;

    for(let record of records){

        let {
            __ZBEE_DATA_ID__:id
        } = record ;

        if(id){

            if(ids.hasOwnProperty(id)){

                let index = ids[id] ;

                data[index] = me.onReplaceRecord(record , data[index]) ;
            
            }else{

                data.push(record) ;

                ids[id] = data.length - 1 ;
            }
        }
    }
 }