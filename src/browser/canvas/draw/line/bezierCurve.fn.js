
/**
 * 
 * 绘制贝赛尔曲线
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {array} [config.lineDash = []] 虚线设置
 * 
 * @param {array} [config.points = []] 画线点集合
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 if(points.length === 8){

    context.beginPath();

    Object.assign(context , styles) ;

    context.setLineDash(lineDash) ;

    context.moveTo(...points.slice(0 , 2));
    
    context.bezierCurveTo(...points.slice(2));
    
    context.stroke();
 }