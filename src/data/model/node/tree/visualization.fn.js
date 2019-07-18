
/**
 * 
 * 可视化节点信息
 * 
 */

 class main {

    constructor(node){

        this.node = node ;
    }

    get children(){

        let {
            node
        } = this,
        {
           expanded,
           cache
        } = node ;

       if(!expanded){

            return [] ;
       }

       return cache.get('children') ;
    }

    get firstDescendantNodes(){

        return getDescendantNodes.call(this , 'firstChildNode') ;
    }

    get lastDescendantNodes(){

        return getDescendantNodes.call(this , 'lastChildNode') ;
    }
 }

 function getDescendantNodes(property){

    let nodes = [],
        node = this;

    while(true){

        let childNode = node[property] ;

        if(childNode.hidden){

            break ;
        }

        if(childNode){

            nodes.push(childNode) ;

            node = childNode ;
        
        }else{

            break ;
        }

    }

    return nodes ;
 }
