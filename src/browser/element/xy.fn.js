
/**
 * 
 * 获得元素的坐标
 * 
 * @param {HTMLElement} el 元素
 * 
 * @return {object} 坐标信息
 * 
 */

 const {
    round
 } = Math ;

let x = 0,
    y = 0;

if(el !== document && el !== document.body){

    let {
        left:bodyLeft,
        top:bodyTop
    } = document.body.getBoundingClientRect(),
    {
        left,
        top
    } = el.getBoundingClientRect();

    x = left - bodyLeft,
    y = top - bodyTop;
}

return {
    x:round(x),
    y:round(y)
} ;