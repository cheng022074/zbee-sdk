
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import clone from object.clone
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} [fields = {}] 附加字段信息
 * 
 * @return {object} 数据信息 
 * 
 */

 node = from(node) ;

let data = Object.assign({} , node) ;

delete data.x ;

delete data.y ;

delete data.properties ;

delete data.children ;

delete data.hidden ;

delete data.parentNodeId ;

delete data.leafNodes ;

delete data.relationNodes ;

delete data.firstChildNodes ;

delete data.lastChildNodes ;

let names = Object.keys(fields) ;

for(let name of names){

    data[name] = fields[name](node) ;
}

return clone(data) ;

 