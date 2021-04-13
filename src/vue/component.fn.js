
/**
 * 
 * Vue 组件
 * 
 * @import is.function
 * 
 * @param {string} name 属性名称
 * 
 * @param {object} config 组件原始设置
 * 
 * @param {object} extend 组件扩展配置
 * 
 * @param {object} [extend.methods = {}] 组件方法配置
 * 
 * @param {function} [extend.mounted = () => {}] 组件初始时调用
 * 
 * @param {function} [extend.destroyed = () => {}] 组件销毁时调用
 * 
 * @param {object} [extend.computed = {}] 组件计算属性
 * 
 * @param {function} [extend.data = () => {return {};}] 组件初始化数据结构 
 * 
 * @return {object} Vue 组件配置
 * 
 */

const {
    assign
 } = Object ;

 let {
    mounted:originMounted,
    destroyed:originDestroyed,
    computed:originComputed = {},
    methods:originMethods = {},
    data:originData,
    ...options
 } = config,
 componentConfig = options[name];

 delete options[name] ;

methods = assign({} , methods , originMethods),
computed = assign({} , computed , originComputed);


if(isFunction(originData)){

   let innerData = data ;

   data = function(){

    let me = this ;

    return Object.assign(innerData.call(me) , originData.call(me) || {}) ;

   } ;

}

let innerMounted = mounted ;

if(originMounted){

    mounted = function(){

        let me = this ;

        innerMounted.call(me , componentConfig) ;

        originMounted.call(me) ;
    } ;

}else{

   mounted = function(){

      innerMounted.call(this , componentConfig) ;

   } ;
}

let innerDestroyed = destroyed ;

if(originDestroyed){

   destroyed = function(){

      let me = this ;

      innerDestroyed.call(me , componentConfig) ;

      originDestroyed.call(me) ;

   } ;

}else{

   destroyed = function(){

      innerDestroyed.call(this , componentConfig) ;
   } ;
}

return {
    ...options,
    data,
    computed,
    mounted,
    destroyed,
    methods
} ;
