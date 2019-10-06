
/**
 * 
 * 数据存储器类
 * 
 * @import createReader from data.reader.create
 * 
 * @import createData from data.outer.create.array
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Model} 数据存储器对象 
 * 
 */

class main{

    constructor(model){

        let me = this ;

        me.reader = createReader(model) ;

        me.data = [] ;

        me.outerData = createData(this , model) ;
    }

    load(data){

        let me = this,
        {
            reader
        } = me ;

        me.data = reader.read(data) ;
    }
 }