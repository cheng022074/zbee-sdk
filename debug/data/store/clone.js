
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

 let store = new Store({
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

 store.load(data) ;

 console.log(store.clone()) ;