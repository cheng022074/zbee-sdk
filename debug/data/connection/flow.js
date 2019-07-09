
/**
 * 
 * 流程
 * 
 * @import Message from data.connection.message value
 * 
 * @import createFlow from data.connection.flow
 * 
 */

Message.subscribe('api' , {
    fn({
        from,
        data
    }){

        console.log(from , data) ;

        return new Promise(callback =>{

            setTimeout(() => {

                callback('xxxxxxxxxxx') ;

            } , 1000) ;

        }) ;
    }
}) ;

let flow = createFlow(Message , {
    start:{
        external:'api',
        next:'end'
    }
} , {
    start(){

        return {
            command:'xxxx.xxxx'
        } ;
    },
    end(value){

        console.log(this) ;

        return `${value}bbbbb` ;
    }
} , result => {

    console.log('结果' , result) ;

}) ;

flow.start() ;
