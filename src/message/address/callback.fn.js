
/**
 * 
 * 处理发送消息后，目标地址的回复信息
 * 
 * @param {Message} message 包含有回复消息的消息包
 * 
 */

let me = this,
{
    activate
} = me ;

if(activate){

    let {
        target
    } = me,
    {
        callback
    } = message;

    if(target.hasOwnProperty(callback)){

        target[callback](message) ;
    }
}