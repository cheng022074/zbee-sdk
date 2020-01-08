
/**
 * 
 * 调试存储器排序能力
 * 
 * @import data.reader.json
 * 
 * @import Store from data.store value
 * 
 */

 const data = [{
    id:3,
    name:'闫业伟'
},{
   id:0,
   name:'陈治文'
},{
   id:2,
   name:'吴相锐'
},{
   id:1,
   name:'董雪维'
}] ;

 let ascStore = new Store({
     sorts:[
        'id'
     ],
     reader:{
        fields:[
            'id',
            'name'
        ]
     }
 }) ;

 ascStore.load(data) ;

 console.log('正序') ;

 {
    let {
        data
    } = ascStore ;
   
    for(let item of data){
   
       console.log(item) ;
    }
 }

 let descStore = new Store({
    sorts:[{
        field:'id',
        direction:'desc'
    }],
    reader:{
       fields:[
           'id',
           'name'
       ]
    }
}) ;

descStore.load(data) ;

console.log('逆序') ;

{
    let {
        data
    } = descStore ;
    
    for(let item of data){
    
       console.log(item) ;
    }
}