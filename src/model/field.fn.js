
/**
 * 
 * 模型字段
 * 
 * @import is.defined
 * 
 * @import is.function
 * 
 * @import is.string
 * 
 * @import getType from data.type
 * 
 * @scoped
 * 
 * @return {model.Field} 模型字段类型引用 
 * 
 */

 function convert(value){

    return value ;
 }

 function generate(name){

    if(isString(name)){

        return include(name) ;
    }

    return convert ;
 }

class Field{

    constructor(name , {
        type = 'auto',
        mode = 'normal',
        set,
        get,
        ...config
    }){

        let me = this ;

        me.name = name ;

        me.type = getType(type) ;

        me.mode = mode ;

        me.onSet = generate(set) ;

        me.onGet = generate(get) ;

        Object.assign(me , config) ;
    }

    set(value){

        let me = this;
        
        value = me.type.convert(value) ;

        if(isDefined(value)){

            return me.set(value) ;
        }
    }

    get(value){

        let me = this,
        {
            defaultValue
        } = me;

        value = me.type.convert(value) ;

        value = isDefined(value) ? value : defaultValue ;

        if(isDefined(value)){

            return me.get(value) ;
        }
    }
}

function main(name , config){

    return new Field(name , config) ;
}

