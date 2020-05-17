
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

 console.time('Time') ;

 const {
    join
 } = require('path') ;

 let records = reader.read(require(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.js'))) ;

 console.log(JSON.stringify(records , null , 2)) ;

 console.timeEnd('Time') ;
