
/**
 * 
 * 绘制直线
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
 * @param {array} [config.lineDash = []] 虚线设置
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

    Object.assign(context , styles) ;

    context.setLineDash(lineDash) ;

    context.moveTo(...points.slice(0 , 2));
    
    context.lineTo(...points.slice(2));
    
    doEnd(context , clip) ;
 }