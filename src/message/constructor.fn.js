
/**
 * 
 * 构建消息
 * 
 * @import defineProperties from object.properties.define
 * 
 * @param {message.Address} fromAddress 发件地址
 * 
 * @param {message.Address} toAddress 收件地址
 * 
 * @param {string} method 方法名称
 * 
 * @param {mixed} [data] 消息
 * 
 */

let me = this,
    names = [
        'data',
        'from',
        'to',
        'method',
        'returnData'
    ],
    config = {};

for(let name of names){

    config[name] = {
        writeOnce:true,
        value:true
    } ;
}

defineProperties(me , config) ;

me.from = fromAddress ;

me.to = toAddress ;

me.method = method ;

me.data = data ;