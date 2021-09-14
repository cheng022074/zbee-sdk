/**
 * 
 * 设置或获取节点值
 * 
 * @import equals from data.equals
 * 
 * @import clone from data.clone
 * 
 * @import from from ....from scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @import adjustSelectedBefore from ..adjust.selected.before scoped
 * 
 * @import adjustSelectedAfter from ..adjust.selected.after scoped
 * 
 * @param {string} field 字段名称
 * 
 * @param {mixed} value 字段值
 * 
 * @param {mixed} [node] 节点
 * 
 */

function main(field , value , node){

    node = from(node) ;

    if(node){

        let isUpdated = false,
            adjustInfo = adjustSelectedBefore(),
            {
                hidden:oldHidden
            } = node;

        if(isObject(field)){

            let names = Object.keys(field) ;

            for(let name of names){

                if(setNodeValue(node , name , field[name])){

                    isUpdated = true ;
                }
            }
        
        }else{

            isUpdated = setNodeValue(node , field , value) ;
        }

        adjustSelectedAfter(adjustInfo) ;

        let {
            hidden
        } = node ;

        if(hidden !== oldHidden){

            return true ;
        
        }else if(hidden){

            return false ;
        }

        return isUpdated ;
    }

    return false ;
}

function setNodeValue(node , field , value){

    let oldValue = node[field],
        newValue = node[field] = clone(value);

    return !equals(newValue , oldValue) ;
}