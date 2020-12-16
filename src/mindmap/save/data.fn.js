
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

    let data =  {
        ...reader.data(node , {
            ignoreFields:[
                'hidden',
                'children'
            ]
        })
    },{
        children
    } = node,
    childNodes = data.children = [];

    for(let childNode of children){

        childNodes.push(generateNodeData(reader , childNode)) ;
    }

    return data ;
 }