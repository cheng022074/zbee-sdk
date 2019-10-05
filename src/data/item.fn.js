/**
 * 
 * 数据项
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import typeOf from data.type
 * 
 * @import Observable from mixin.observable
 * 
 * @import getName from class.name
 * 
 * @param {object} data 初始化数据
 * 
 * @param {object} fields 字段定义
 * 
 */

 const {
    keys,
    defineProperty
 } = Object,
 fieldNameRe = /^[^\$].+$/;

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor(data , fields){

        let me = this ;

        {
            let names = keys(data) ;

            for(let name of names){

                let value = data[name] ;

                switch(getName(value)){

                    case 'data.item':
                    case 'data.group':

                        value.$parent = me ;
                }
            }
        }

        me.$data = data ;



        let names = Object.keys(fields) ;

        for(let name of names){

            if(!fieldNameRe.test(name)){

                continue ;
            }

            let field = fields[name] ;

            if(isString(field)){

                field = {
                    type:field
                } ;
            }

            if(isObject(field)){

                let {
                    type = 'auto',
                    mode = 'readwrite',
                    get,
                    set
                } = field ;

                switch(mode){

                    case 'readonly':

                        defineProperty(me , {
                            get:generateGetFn.bind(me , get)
                        }) ;

                        break ;

                    case 'writeonly':

                        defineProperty(me , {
                            set:generateSetFn.bind(me , set , name , type)
                        }) ;

                        break ;

                    case 'readwrite':

                        defineProperty(me , {
                            set:generateSetFn.bind(me , set , name , type),
                            get:generateGetFn.bind(me , get)
                        }) ;
                }
            }
        }
    }

    get $bubbleTarget(){

        return this.$parent ;
    }
 }

 function generateGetFn(getFn , name){

    let me = this ;

    if(isFunction(getFn)){

        return getFn.call(me , name) ;
    }

    return me.$data[name] ;
 }

 function generateSetFn(setFn , name , type , value){

    if(type === 'auto' || type === typeOf(value)){

        let me = this,
            oldValue = me[name];

        if(oldValue !== value){

            if(isFunction(setFn)){

                setFn.call(me , value) ;
            
            }else{
        
                me.$data[name] = value ;
            }
    
            me.fireEvent('propertychange' , name , value , oldValue) ;
            
        }
    }
 }