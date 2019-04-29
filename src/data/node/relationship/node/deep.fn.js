
/**
 * 
 * 获得指定层数节点数据,如果层数不足，则返回最后一层的节点数据
 * 
 * @param {string} field 节点字段
 * 
 * @param {number} [deep = 1] 深度
 * 
 * @param {boolean} [strict = true] 是否严格匹配
 * 
 * @return {data.node.Relationship} 节点关系对象 
 * 
 */


let node = this ;

for(let i = 1 ; i <= deep ; i ++){

    while(true){

        let tempNode = node[field] ;

        if(tempNode){

            node = tempNode ;

            break ;
        
        }else{

            switch(field){

                case 'firstNode':

                    tempNode = node.nextNode ;

                    break ;

                case 'lastNode':

                    tempNode = node.previousNode ;
            }

            if(tempNode){

                node = tempNode ;
            
            }else{

                return strict === false ? node : null ;
            }
        }
    }
}

return node ;