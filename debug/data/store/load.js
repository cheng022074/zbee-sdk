
/**
 * 
 * 载入数据
 * 
 * @import Store from data.store value
 * 
 */

 let store = new Store({
    properties:{
       name:'name',
       sex:{
          get(){

            return '男' ;

          }
       },
       info:{
          multi:false,
          model:{
             properties:{
                remark:{
                   get(){

                     return `${this.__ZBEE_DATA_PARENT__.name}` ;
                   }
                }
             }
          }
       }
    }
 }) ; 

 store.load([{
    name:'陈治文'
 },{
   name:'苏大强'
},{
   name:'宁小小'
}]) ;

store.load([{
   name:'陈炳昌'
}]) ;