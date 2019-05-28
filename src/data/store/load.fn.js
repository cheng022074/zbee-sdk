
/**
 * 
 * 加载数据
 * 
 * @param {mixed} options 数据或者配置
 * 
 * @param {boolean} [isClear = true] 是否在加载前清除
 * 
 */

let me = this,
{
    proxy
} = me;

if(isClear){

    me.clear() ;
}

proxy.read(options) ;