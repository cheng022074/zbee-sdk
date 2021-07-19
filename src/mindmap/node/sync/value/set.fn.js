/**
 * 
 * 同步脑图节点信息修改
 * 
 * @import setNodeValue from ....api.value.set scoped
 * 
 * @param {object} values 同步的节点值
 * 
 * @param {mixed} node 节点
 * 
 */

let names = Object.keys(values),
    isUpdated = false;

for(let name of names){

    if(setNodeValue(node , name , values[name])){

        isUpdated = true ;
    }
}

return isUpdated ;