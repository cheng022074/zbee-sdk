/**
 * 
 * 根据字段定义生成对象
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import is.defined
 * 
 * @parm {data.Item} item 数据项
 * 
 * @param {object} fields 字段定义
 * 
 * @return {object} 由字段定义出来的数据项
 * 
 */

 let names = Object.keys(fields),
     properties = {};

 for(let name of names){

    let value = fields[name],
        property = properties[name];

    switch(value.ZBEE_CLASS_NAME){

        case 'data.item':
        case 'data.group':

            property.set = data => value.load(data) ;

            break ;

        default:

            if(isObject(value)){

                let {
                    writable = true,
                    readable = true,
                    value:propertyValue,
                    set,
                    get
                } = value ;

                if(isDefined(propertyValue)){

                    if(writable){

                        property
                    }
                }

                if(isFunction(set)){

                    property.set = set ;
                }

                if(isFunction(get)){

                    property.get = get ;
                }
            }


    }
 }

 