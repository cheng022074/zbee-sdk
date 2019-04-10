
/**
 * 
 * 开始事件监听
 * 
 * @import getEventProperties from browser.event.point.single.get
 * 
 * @config timeout from event.tap...timeout
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this,
 {
    prevTime,
    locked
 } = me ;

 if(locked === true){

    return ;
}

let currentTime = Date.now() ;

if(prevTime && currentTime - prevTime <= timeout){

    return ;
}

me.prevTime = currentTime ;

me.locked = true ;

e.preventDefault() ;

let {
    pageX,
    pageY
} = getEventProperties(e , [
    'pageX',
    'pageY'
]) ;

me.startX = pageX ;

me.startY = pageY ;



