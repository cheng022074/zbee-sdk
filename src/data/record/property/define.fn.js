/**
 * 
 * 定义数据记录的属性
 * 
 * @import is from is.data.record
 * 
 * @import is.function
 * 
 * @import is.defined
 * 
 * @import emptyFn from function.empty value
 * 
 * @param {object} record 数据记录
 * 
 * @param {string} name 属性名称
 * 
 * @param {object} descriptor 属性描述
 * 
 * @param {string} [descriptor.cache = false] 缓存属性值
 * 
 * @param {function} [descriptor.set] 设置属性值方法
 * 
 * @param {function} [descriptor.get] 获取属性值方法
 * 
 * @param {mixed} [descriptor.value] 属性值
 * 
 * @param {string} [descriptor.mode = 'readwrite'] 属性读写模式
 * 
 */

const {
    defineProperty
} = Object ;

 function main(record , name , {
     cache,
     set,
     get,
     value,
     mode
 }) {

    if(is(record)){

        let setFn,
            getFn ;
    
        if(isFunction(get) || isFunction(set)){
    
            if(cache){
    
               getFn = () =>{
        
                    let {
                        __ZBEE_DATA_INNER__:data
                    } = record ;

                    if(data.hasOwnProperty(name)){

                        return data[name] ;
                    }

                    return data[name] = get.call(record , name) ;
                } ;
            
            }else{
    
                getFn = get ;
            }

            setFn = setFn ;

        }else if(isDefined(value)){

            record.__ZBEE_DATA_INNER__[name] = value ;

            switch(mode){

                case 'writeonly':
                case 'readwrite':

                    setFn = value =>{

                        record.__ZBEE_DATA_INNER__[name] = value ;
                    } ;
            }

            switch(mode){

                case 'readonly':
                case 'readwrite':

                    getFn = () =>{

                        return record.__ZBEE_DATA_INNER__[name] ;
                    } ;
            }
           
        }

        defineProperty(record , name , {
            enumerable:true,
            configurable:true,
            set:setFn || emptyFn,
            get:getFn || emptyFn
        }) ;
    }   
 }