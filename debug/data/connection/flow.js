
/**
 * 
 * 流程
 * 
 * @import Message from data.connection.message value
 * 
 * @import createFlow from data.connection.flow
 * 
 */

let flow = createFlow(Message , {
    start:'end'
} , {
    start(){

        return 'a' ;
    },
    end(value){

        console.log(this) ;

        return `${value}bbbbb` ;
    }
} , result => {

    console.log('结果' , result) ;

}) ;

flow.start() ;
