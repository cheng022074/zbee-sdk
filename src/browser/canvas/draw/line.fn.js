
/**
 * 
 * 绘制直线
 * 
 * @import assign from object.assign
 * 
 * @import scale from browser.scale value
 * 
 * @import doBegin from browser.canvas.begin
 * 
 * @import doEnd from browser.canvas.end
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {array} [config.points = []] 画线点集合
 * 
 * @param {boolean} [config.independent = true] 是否为独立图形
 * 
 * @param {boolean} [config.clip = false] 是否为剪切路径
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 if(points.length === 4){

    doBegin(context , independent) ;

    assign(context , styles) ;

    let newPoints = [] ;

    for(let point of points){

      newPoints.push(point * scale) ;
    }

    context.moveTo(...newPoints.slice(0 , 2));
    
    context.lineTo(...newPoints.slice(2));
    
    doEnd(context , clip) ;
 }