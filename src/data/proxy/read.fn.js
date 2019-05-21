
/**
 * 
 * 读取数据
 * 
 * @import is.promise
 * 
 * @param {mixed} options 读取数据配置
 * 
 */

function fireReadEvent(data){

    let me = this,
    {
        reader
    } = me ;

    me.fireEvent('read' , reader(data)) ;
}

function main(options){

    let me = this,
    {
        proxy
    } = me,
    data = proxy.call('doRead' , options);
   
    if(isPromise(data)){
   
       data.then(data => fireReadEvent.call(me , data)) ;
    
    }else{

        fireReadEvent.call(me , data) ;
    }
}


