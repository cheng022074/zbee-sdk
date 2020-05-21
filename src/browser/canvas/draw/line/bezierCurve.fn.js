
/**
 * 
 * 绘制贝赛尔曲线
 * 
 * @import scale from browser.scale value
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {array} [config.points = []] 画线点集合
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 if(points.length === 8){

    context.beginPath();

    Object.assign(context , styles) ;

    let newPoints = [] ;

    for(let point of points){

      newPoints.push(point * scale) ;
    }

    context.moveTo(...newPoints.slice(0 , 2));
    
    context.bezierCurveTo(...newPoints.slice(2));
    
    context.stroke();
 }