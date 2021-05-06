
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @param {data.Record} node 节点
 * 
 * @param {object} fields 字段信息
 * 
 * @return {object} 数据信息 
 * 
 */

 if(node){

    return this.reader.data(node , {
        ignoreFields:[
            'children'
        ],
        fields
    }) ;
 }