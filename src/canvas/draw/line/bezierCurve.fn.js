
/**
 * 
 * 绘制贝赛尔曲线
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 */

 let {
    points = [],
    ...styles
 } = config ;

 if(points.length === 8){

    context.beginPath();

    let names = Object.keys(styles) ;

    for(let name of names){

      context[name] = styles[name] ;
    }

    console.log(points) ;

    context.moveTo(...points.slice(0 , 2));
    
    context.bezierCurveTo(...points.slice(2));
    
    context.stroke();
 }