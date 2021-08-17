/**
 * 
 * 保存脑图
 * 
 * @param {array} [fields = []] 需要保存的节点字段名称集合
 * 
 * @return {object} 脑图节点信息
 * 
 */

function main(){

    let {
        rootNode
    } = this,
    fieldNames = new Set([
        'id',
        'text'
    ]);
    
    for(let field of fields){
    
        fieldNames.add(field) ;
    }
    
    fieldNames = Array.from(fieldNames) ;
    
    return doSave(rootNode , fieldNames) ;
}

function doSave(node , fieldNames){

    let children = [],
    values = {},
    {
        children:childNodes
    } = node ;

    for(let fieldName of fieldNames){

        values[fieldName] = node[fieldName] ;
    }

    for(let childNode of childNodes){

        children.push(doSave(childNode , fieldNames)) ;
    }

    return {
        ...values,
        children
    } ;
}

