
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
 * @param {object} [options = {}] 消息配置
 * 
 */

let me = this,
    names = [
        'data',
        'from',
        'to',
        'listen',
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

names = Object.keys(options) ;

for(let name of names){

    me[name] = options[name] ;
}