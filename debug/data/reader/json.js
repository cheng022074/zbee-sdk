
/**
 * 
 * 测试 JSON 读取器
 * 
 * @import createReader from data.reader.json
 * 
 */

 let reader = createReader({
    'id':'f_id',
    'text':'f_title',
    'children':{
       reader(data , {
           f_id
       }){

            let result = [] ;

            for(let item of data){

                if(item.f_pid === f_id){

                    result.push(item) ;
                }
            }

            return result ;
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
}) ;

 const {
    join
 } = require('path'),
 data = require(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.js'));

 console.time('耗时') ;

 let records = reader.read(data , records => {

    let result = [] ;

    for(let record of records){

        if(record.f_pid === ''){

            result.push(record) ;
        }
    }

    return result ;

 }) ;

 console.log(JSON.stringify(records , null , 2)) ;

 console.timeEnd('耗时') ;
