
/**
 * 
 * 基于目标函数生成一个带有后继函数的新函数
 * 
 * @param {function} target 目标函数
 * 
 * @param {fucntion} afterFn 后继函数
 * 
 * @return {function} 生成后的函数
 * 
 */

return function(){

    let me = this,
        value = target.apply(me , arguments) ;

    afterFn.apply(me , arguments) ;

    return value ;
} ;