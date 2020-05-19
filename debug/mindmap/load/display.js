
/**
 * 
 * 调试脑图加载
 * 
 * @import createMindMap from mindmap
 * 
 */

 let mind = createMindMap({
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
        },
        'expanded':{
            mode:'readwrite',
            local:true,
            defaultValue:false
        },
        'hidden':{
            mode:'readwrite',
            local:true,
            defaultValue:true
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

 let {
     rootNode
 } = mind ;

 rootNode.hidden = false ;

 console.log(mind.visibilityNodes.length) ;