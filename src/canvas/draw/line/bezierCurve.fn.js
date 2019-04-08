
/**
 * 
 * 绘制贝赛尔曲线
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {number[]} [...values] 一组坐标值
 * 
 */

 if(values.length === 8){

    context.beginPath();

    context.moveTo(...values.slice(0 , 2));
    
    context.bezierCurveTo(...values.slice(2));
    
    context.stroke();
 }