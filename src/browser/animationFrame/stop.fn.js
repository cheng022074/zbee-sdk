
/**
 * 
 * 清除一个连续动画帧
 * 
 * @import getMap from browser.animationFrame.map
 * 
 * @alias stopAnimationFrame
 * 
 * @param {number} animationFrameId 动画帧编号
 * 
 * @return {mixed} 返回说明 
 * 
 */

let map = getMap() ;

if(map.has(animationFrameId)){

    map.get(animationFrameId).stop() ;
}
