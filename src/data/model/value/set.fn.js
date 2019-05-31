
/**
 * 
 * 设置属性
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} name 属性名称
 * 
 * @param {mixed} value 属性值
 * 
 */

let values ;

if(isString(name)){

    values = {
        [name]:value
    } ;

}else{

    values = name ;
}

if(isObject(values)){

    let me = this,
    {
        ZBEE_CURRENT_CLASS
    } = me,
    {
        fields
    } = ZBEE_CURRENT_CLASS,
    names = Object.keys(values),
    updateValues = {};

    for(let name of names){

        let field = fields.getField(name);

        if(field){

            let value = values[name],
                oldValue = me.get(name);

            if(field.equals.call(me , value , oldValue)){

                field.set.call(me , value , name) ;

                updateValues[name] = value ;

                me.fireEvent('update' , name , value , oldValue) ;
            }
        }
    }

    return updateValues ;
}