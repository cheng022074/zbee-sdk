
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

       me.data = [] ;

    }
  
    load(data){

        let me = this,
        {
            reader,
            data:$data
        } = me ;

        $data.length = 0 ;

        $data.push(...reader.read(data)) ;

        console.log('全量载入数据' , JSON.stringify($data , null , 2)) ;

        // 触发 load 事件
    }

    append(data){

        let me = this,
        {
            reader,
            $data
        } = me ;

        $data.push(...reader.read(data)) ;

        console.log('增量载入数据' , $data) ;

        // 触发 add 事件
    }
 }