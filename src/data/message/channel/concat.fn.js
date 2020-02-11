
/**
 * 
 * 与其它消息通道完成互联
 * 
 * @import from from array.from
 * 
 * @param {mixed} channels 其它的对接的消息通道对象
 * 
 */

 channels = from(channels) ;

 let me = this,
 {
    concatenateChannels
 } = me ;

 for(let channel of channels){

    if(!concatenateChannels.includes(channel)){

      concatenateChannels.push(channel) ;

      channel.concat(me) ;

    }
 }