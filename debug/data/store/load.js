
/**
 * 
 * 载入数据
 * 
 * @import Store from data.store value
 * 
 */

 let store = new Store({
    id(){

      return this.name ;
    },
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

                     let {
                        __ZBEE_DATA_PARENT__:data
                     } = this ;

                     return `${data.name}是一个${data.sex}人`
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
},{
   name:'陈治文'
}]) ;

store.load([{
   name:'陈炳昌'
}]) ;