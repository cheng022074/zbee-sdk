
/**
 * 
 * 创建一个连续动画帧
 * 
 * @import getMap from browser.animationFrame.map
 * 
 * @alias browser.setAnimationFrame
 * 
 * @param {function} fn 动画帧回调函数
 * 
 * @param {mixed} scope 动画帧回调函数作用域
 * 
 * @return {number} 动画帧编号
 * 
 * @scoped
 * 
 */

let count = 0 ;

function main(fn , scope){

    count ++ ;

    let map = getMap(),
        animationFrame = new AnimationFrame(fn , scope);

    map.set(count , animationFrame) ;

    animationFrame.start() ;

    return count ;
}

class AnimationFrame{

    constructor(fn , scope){

        let me = this ;

        me.fn = fn ;

        me.scope = scope ;
    }

    start(){

        let me = this,
            {
                fn,
                scope
            } = me,
            animationFrame = time =>{

                fn.call(scope , time) ;

                me.animationFrameId = requestAnimationFrame(animationFrame) ;
                
            } ;

        me.animationFrameId = requestAnimationFrame(animationFrame) ;
    }

    stop(){

        cancelAnimationFrame(this.animationFrameId) ;
    }
}