/**
 * 
 * 缓存获得结果
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {string} name 缓存名称
 * 
 * @return {data.Record} 返回缓存后的节点
 * 
 */
let me = this,
    {
        cache
    } = me,
    map = cache[name];

if(!map.has(node)){

    map.set(node , me[`apply${name}`](node)) ;
}

return map.get(node) ;