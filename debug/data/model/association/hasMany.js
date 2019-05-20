
/**
 * 
 * 调试《一对多》数据关联模式
 * 
 * @import createModel from data.model.create
 * 
 */

 let Model = createModel({
     fields:[
         'name',
         'job'
     ]
 }) ;

 let user = new Model({
     data:{
        name:'陈治文',
        job:'程序员'
     }
 }) ;

 console.log(user) ;

 

 