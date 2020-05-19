
/**
 * 
 * 调试脑图加载
 * 
 * @import createMindMap from mindmap
 * 
 */

 let mind = createMindMap({
    listeners:{
        load(mind , nodes){

            console.log('load' , nodes) ;
        }
    },
    reader:{
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
        }
    },
    readerAsRoot(records){

        let result = [] ;

        for(let record of records){
    
            if(record.f_pid === ''){
    
                result.push(record) ;
            }
        }
    
        return result ;
    }
 }) ;

 const {
    join
 } = require('path');

 mind.load(require(join(process.env['ZBEE-APP-PATH'] , 'data/json/demo.js'))) ;