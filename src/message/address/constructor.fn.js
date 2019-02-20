
/**
 * 
 * 构建一个消息地址，用以发送与接收消息
 * 
 * @param {string} address 唯一的消息地址
 * 
 * @param {mixed} target 地址所绑定的对象
 * 
 * @param {object} addressConfig 地址配置
 * 
 * @param {string} [addressConfig.plugin = 'normal'] 发送与接收消息的插件名称
 * 
 * @param {string} [addressConfig.relistenMode = 'recent'] 重听消息接送模式 
 * 
 */

let me = this ;

me.id = address ;

me.plugin = plugin ;

me.relistenMode = relistenMode ;

me.target = target ;

plugin.listen(me , message =>{

    let me = this,
    {
        method
    } = message ;

    let {
        target
    } = me ;

    if(method in target){

        return target[method](message) ;
    }

}) ;