
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
        set,
        get,
        ...config
    }){

        let me = this ;

        me.name = name ;

        me.type = getType(type) ;

        me.onSet = generate(set) ;

        me.onGet = generate(get) ;

        me.config = config ;
    }

    set(value){

        let me = this,
        {
            config,
            type
        } = me;
        
        value = type.convert(value , config) ;

        if(isDefined(value)){

            return me.onSet(value) ;
        }
    }

    get(value){

        let me = this,
        {
            defaultValue,
            config,
            type
        } = me;

        value = type.convert(value , config) ;

        return me.onGet(isDefined(value) ? value : defaultValue) ;
    }
}

function main(name , config){

    return new Field(name , config) ;
}

