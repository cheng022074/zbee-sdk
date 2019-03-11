
/**
 * 
 * 调试函数执行器
 * 
 * @import createExecuter from function.executer
 * 
 */

function main(){

    let executer = createExecuter(doExecuter) ;

    executer
        .callback((result) =>{

            return 100 ;

        })
        .callback(result =>{

            console.log(result) ;

        });

    executer.execute('1') ;

    executer.execute('2') ;

    executer.execute('3') ;
}

function doExecuter(name){

    return new Promise(callback =>{

        setTimeout(() =>{

            callback(name) ;

        } , 1000) ;

    }) ;
}

