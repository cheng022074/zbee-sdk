
/**
 * 
 * 测试 JSON 读取器
 * 
 * @import createReader from data.reader.json
 * 
 */

 let reader = createReader({
     root(records){

        let result = [] ;

        for(let record of records){
 
            if(record.f_pid === '0'){

                result.push(record) ;
            }
        }

        return result ;
     },
     fields:{
         'id':'f_id',
         'text':'f_title'
     }
 }) ;

 console.time('Time') ;

 const {
    join
 } = require('path') ;

 let records = reader.read(require(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.js'))) ;

 console.log(records) ;

 console.timeEnd('Time') ;
