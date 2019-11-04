/**
 * 
 * 图形结束
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {boolean} [clip = false] 是否为剪切路径
 * 
 * 
 */

 if(clip){

    context.clip() ;
 
 }else{

    context.stroke();
 }