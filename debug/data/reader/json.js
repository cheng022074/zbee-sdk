
/**
 * 
 * 测试 JSON 读取器
 * 
 * @import createReader from data.reader.json
 * 
 */

 let model = {
    fields:{
        'id':'f_id',
        'text':'f_title',
        'children':{
            convert({
                f_id
            } , raws , index , data){

                return createReader({
                    root(records){

                        let result = [] ;

                        for(let record of records){
                 
                            if(record.f_pid === f_id){
                
                                result.push(record) ;
                            }
                        }
                
                        return result ;
                    },
                    ...model
                }).read(data) ;
            }
        },
        'leaf':{
            local:true,
            get(){

                let {
                    children
                } = this ;

                return ! children.length ;
            }
        },
        'hidden':{
            local:true,
            defaultValue:true
        }
    }
 },
 reader = createReader({
     root(records){

        let result = [] ;

        for(let record of records){
 
            if(record.f_pid === '0'){

                result.push(record) ;
            }
        }

        return result ;
     },
     ...model
 }) ;

 const {
    join
 } = require('path'),
 data = require(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.js'));

 console.time('耗时') ;

 let records = reader.read(data) ;

 console.log(JSON.stringify(records , null , 2)) ;

 console.timeEnd('耗时') ;
