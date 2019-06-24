
/**
 * 
 * 针对小程序的页面进行封装
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
 * 
 * @param {object} config 页面设置
 * 
 * @return {object} 封装后的页面配置 
 * 
 */

 function main({

    onLoad = empty,

    computed = {},

    ...options

 }){

    return {

        onLoad(query){
    
            let me = this,
            {
                setData:nativeSetData,
                data
            } = me ;

            me.setData = values =>{

                nativeSetData.call(me , values , () =>{

                    console.log('设置完成') ;

                }) ;

            } ;

            me.computed = computed ; 

            onLoad.call(this , query) ;
        },

        ...options
     } ;
 }

 class Data{

    constructor(program){

        let {
            data,
            computed
        } = program ;

        let me = this ;

        me.data = data ;

        me.computed = computed ;
    }

    get(name){

        let me = this,
        {
            data,
            computed
        } = me ;
    
        if(data.hasOwnProperty(name)){
    
            return data[name] ;
        
        }else if(computed.hasOwnProperty(name)){
    
            return computed[name](me) ;
        }
    }
 }
 