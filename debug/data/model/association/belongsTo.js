
/**
 * 
 * 调试《属于》逻辑
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

user.on('load' , () =>{

    console.log(user) ;

} , undefined , {
    getOldFireEventData:'last'
}) ;