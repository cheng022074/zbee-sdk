
/**
 * 
 * 保存脑图数据
 * 
 * @return {object} 脑图数据 
 * 
 */

 function main(){

    let {
        reader,
        rootNode
    } = this;

    return generateNodeData(reader , rootNode) ;

 }

 function generateNodeData(reader , node){

    let result = [
        reader.data(node , {
            ignoreFields:[
                'children'
            ]
        })
    ],{
        children
    } = node ;

    for(let childNode of children){

        result.push(...generateNodeData(reader , childNode)) ;
    }

    return result ;
 }