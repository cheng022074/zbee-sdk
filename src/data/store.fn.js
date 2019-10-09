
/**
 * 
 * 数据存储器类
 * 
 * @import createReader from data.reader.create
 * 
 * @class
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Model} 数据存储器对象 
 * 
 * 
 */

class main{

    constructor(model){

       let me = this ;

       me.reader = createReader(model) ;

       me.ids = {} ;

       me.data = [] ;

    }
  
    load(data){

        let me = this,
        {
            reader,
            data:$data
        } = me ;

        $data.length = 0 ;

        add.call(me , ...reader.read(data)) ;

        console.log('全量载入数据' , JSON.stringify($data , null , 2)) ;

        // 触发 load 事件
    }

    append(data){

        let me = this,
        {
            reader
        } = me ;

        add.call(me , ...reader.read(data)) ;

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