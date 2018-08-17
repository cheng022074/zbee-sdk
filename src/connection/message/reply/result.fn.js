/**
 * 
 * 获得回复结果
 * 
 * @param {object} replyMessage 回复消息包
 * 
 * @return {mixed} 回复的结果
 * 
 */

let {
    reply
} = replyMessage ;

if(reply !== false){

    let {
        data
    } = reply ;

    return data ;
}