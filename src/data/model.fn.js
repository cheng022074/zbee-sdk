
/**
 * 
 * 数据模型类
 * 
 * @import createReader from data.reader.create
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Model} 数据模型对象 
 * 
 */

 class main{

    constructor(model){

        let me = this ;

        me.reader = createReader(model) ;

        me.data = {} ;
    }

    load(data){

        let me = this,
        {
            reader
        } = me ;

        let result = reader.read(data) ;

        if(result.length){

            me.data = result[0] ;
        }
    }
 }