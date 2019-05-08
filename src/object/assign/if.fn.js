
/**
 * 
 * 如果目标存在来源的字段，则不覆盖
 * 
 * @import getKeys from object.keys
 * 
 * @import set from object.value.set
 * 
 * @import get from object.value.get
 * 
 * @param {object} dest 目标数据
 * 
 * @param {object} [...sources] 来源数据
 * 
 * @return {object} 合并后数据
 * 
 * @scoped
 * 
 */

function assign(dest , source){

    let keys = getKeys(source),
        destKeys = getKeys(dest);

    for(let key of keys){

        if(!destKeys.includes(key)){

            set(dest , key , get(source , key)) ;
        }
    }

}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}