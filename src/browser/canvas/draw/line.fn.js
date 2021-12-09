
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
 * @param {boolean} [config.arrow = false] 是否画箭头
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

    if(arrow){

      let headlen = 10,
          angle = Math.atan2(points[3] - points[1] , points[2] - points[0]);

      context.lineTo(points[2] - headlen * Math.cos(angle - Math.PI / 6) , points[3] - headlen * Math.sin(angle - Math.PI / 6));

      context.moveTo(...points.slice(2));

      context.lineTo(points[2] - headlen * Math.cos(angle + Math.PI / 6) , points[3] - headlen * Math.sin(angle + Math.PI / 6));
    
    }
    
    doEnd(context , clip) ;
 }