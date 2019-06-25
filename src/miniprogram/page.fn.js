
/**
 * 
 * 针对小程序的页面进行封装
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
 * 
 * @import get from object.value.get
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

            data = new Data(me , {
                computed,
                setData:nativeSetData
            }) ;

            me.setData = values => nativeSetData.call(me , values , () => refresh.call(data)) ;

            onLoad.call(me , query) ;
        },

        ...options
     } ;
 }

 class Data{

    constructor(program , {
        computed,
        setData
    }){

        let me = this ;

        me.program = program ;

        me.computed = computed ;

        me.setData = setData ;
    }

    get(name){

        let me = this,{
            computed,
            program
        } = me,
        {
            data
        } = program ;

        if(computed.hasOwnProperty(name)){
    
            return computed[name](me) ;
        }
    
        return get(data , name) ;
        
    }
 }

 function refresh(){

    let me = this,
    {
        program,
        setData,
        computed
    } = me,
    {
        data
    } = program,
    names = Object.keys(computed);

    for(let name of names){

        data[name] = computed[name](me) ;
    }

    setData.call(program , data) ;
 }
 