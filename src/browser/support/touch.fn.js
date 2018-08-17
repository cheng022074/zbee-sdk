
/**
 * 
 * 判断当前浏览器是否支持触摸
 * 
 * @import os.name
 * 
 * @import getName from browser.embed.name
 * 
 * @return {boolean} 如果是支持触摸则返回 true ，否则返回 false 
 * 
 * @once
 * 
 */

const isTouch = window.hasOwnProperty('ontouchstart');

 if(osName() === 'Windows'){

    let name = getName() ;

    return isTouch && name !== 'U3D' && name !== 'UE4';
 }

 return isTouch ;