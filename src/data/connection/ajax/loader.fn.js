
/**
 * 
 * 数据加载器
 * 
 * @import createMap from map
 * 
 * @import get from function.get
 * 
 * @import equals from object.equals
 * 
 * @param {data.connection.Ajax} ajax AJAX 引用
 * 
 * @param {string} url 数据加载的链接
 * 
 * @param {object} options 加载器配置
 * 
 * 
 */

 const join = require('url-join') ;

 class main{

    constructor(ajax , url , options = {}){

      let me = this ;

        me.ajax = ajax ;

        me.url = url ;

        let {
            autoLoad = true,
            params
        } = options ;
        
        me.callbacks = createMap() ;

        me.originParams = false ;

        me.options = options ;

        if(autoLoad){

            me.load(params) ;
        }
    }

    get isLoaded(){

      return !!this.data ;
    }

    reload(){

      let me = this ;

      if(me.isLoaded){

         let {
            originParams
         } = me ;

         me.originParams = false ;

         me.load(originParams) ;
      }
    }

    load(params){

      let me = this,
        {
            originParams,
            url,
            ajax
        } = me;

        if(originParams === false || !equals(originParams , params)){

            ajax.tryLoad(join(ajax.url , url) , params).then(message => this.accept(message)) ;

            me.originParams = params ;
        }
    }

    accept(message){

      let me = this,
      {
          originParams,
          ajax
      } = me;

      message = ajax.processData(message) ;

      me.data = message ;

      let {
          callbacks
      } = me ;

      callbacks.forEach(fn => fn(message , originParams)) ;
    }

    /**
     * 
     * 将注入到订阅器的数据推送给函数
     * 
     * @param {mixed} fn 函数
     * 
     * @param {mixed} scope 函数作用域
     * 
     */
    bind(fn , scope){

      let me = this,
         {
            callbacks
         } = me,
         bindFn = get(fn , scope),
         {
            data
         } = me;

      callbacks.set(fn , scope , bindFn) ;

      if(data){

         bindFn(data) ;
      }

      return me ;
   }

   /**
      * 
      * 解除函数绑定
      * 
      * @param {function} fn
      *  
      * @param {mixed} scope
      * 
      */
   unbind(fn , scope){

         let me = this,
         {
            callbacks
         } = me; 

         callbacks.delete(fn , scope) ;

         return me ;
   }
 }