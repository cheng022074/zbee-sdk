
/**
 * 
 * 橡皮擦
 * 
 * @import arc from browser.canvas.draw.line.arc
 * 
 * @import clear from browser.canvas.clear
 * 
 * @param {object} [config = {}] 擦除配置
 * 
 * @param {array} [config.points = []] 擦除点集合
 * 
 * @param {number} config.size 橡皮擦大小
 * 
 */

let {
    context
 } = this ;

 context.save() ;

 let {
     length
 } = points ;

 for(let i = 0 ; i < length ; i += 2){

    let x = points[i] ;

    arc(context , {
        x,
        y:x + 1,
        r:size / 2,
        end:270,
        clip:true
    }) ;
 }

 clear(context) ;

 context.restore() ;