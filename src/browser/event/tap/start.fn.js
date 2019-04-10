
/**
 * 
 * 开始事件监听
 * 
 * @import getEventProperties from browser.event.point.single.get
 * 
 * @import enabled from ..enabled scoped
 * 
 * @config timeout from event.tap...timeout
 * 
 * @param {Event} e 事件对象
 * 
 */

let me = this ;

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

enabled() ;
