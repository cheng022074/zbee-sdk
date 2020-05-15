
/**
 * 
 * 测试 JSON 读取器
 * 
 * @import createReader from data.reader.json
 * 
 * @import read from file.read.json
 * 
 */

 let reader = createReader({
     root(records){

        let result = [] ;

        for(let record of records){
 
            if(record.f_pid === ''){

                result.push(record) ;
            }
        }

        return result ;
     },
     fields:{
         'id':'f_id',
         'text':'f_title',
         'children':{
             
         }
     }
 }) ;

 console.time('Time') ;

 const {
    join
 } = require('path') ;

 let records = reader.read(read(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.json'))) ;

 console.log(records) ;

 console.timeEnd('Time') ;
