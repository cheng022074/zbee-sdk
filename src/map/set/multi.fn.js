
/**
 * 
 * 设置复合值
 * 
 * @import is.array
 * 
 * @param {Map} map Map 对象
 * 
 * @param {array} [...values] 包含多维键，以及相应值
 * 
 * @return {Map} 返回 Map 对象引用
 * 
 */

let {
    length
} = values;

if(length >= 2){

    let key = values.slice(0 , length - 1),
        value = values[length - 1],
        oldValues = map.get(...key);

    if(isArray(oldValues)){

        if(!oldValues.includes(value)){

            oldValues.push(value) ;
        }
        
    }else{

        oldValues = [
            value
        ] ;
    }

    map.set(...key , oldValues) ;
}

return map ;

 