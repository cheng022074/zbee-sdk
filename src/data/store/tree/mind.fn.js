
/**
 * 
 * 获取脑图实例
 * 
 * @param Store from data.store.tree value
 * 
 * @param {object} options 脑图配置
 * 
 */

 class main extends Store{

    constructor({
        margin = {},
        lineOffsetX = 0,
        ...options
    }){

        super(options) ;

        let {
            bottom:marginBottom = 0,
            right:marginRight = 0
        } = margin ;

        me.marginBottom = marginBottom ;

        me.marginRight = marginRight ;

        me.lineOffsetX = lineOffsetX ;
    }

    get region(){

        let {
            rootNode
        } = this,
        {
            x,
            y,
            firstDescendantNodes,
            lastDescendantNodes,
            leafNodes
        } = rootNode;
        
        for(let node of firstDescendantNodes){
        
            let {
                y:nodeY
            } = node.getAnchorXY('tr') ;
        
            if(y > nodeY){
        
                y = nodeY ;
            }
        }
        
        let bottom = y ;
        
        for(let node of lastDescendantNodes){
        
            let {
                y:nodeY
            } = node.getAnchorXY('br') ;
        
            if(bottom < nodeY){
        
                bottom = nodeY ;
            }
        }
        
        let {
            x:right
        } = rootNode.getAnchorXY('r') ;
        
        for(let leafNode of leafNodes){
        
            let {
                x
            } = leafNode.getAnchorXY('r') ;
        
            if(right < x){
        
                right = x ;
            }
        }
        
        const {
            min,
            abs
        } = Math ;
        
        x = min(x , 0),
        y = min(y , 0) ;
        
        return {
            x:abs(x),
            y:abs(y),
            width:right,
            height:bottom
        } ;
    }

    layout(){

        let me = this,
        {
            rootNode,
            recordset
        } = me,
        records = recordset.findRecords('hidden' , false);

        if(rootNode){

            rootNode.layout() ;

            let {
                region,
                lineOffsetX
            } = me ;

            me.fireEvent('layout' , records , lines(records , region , lineOffsetX)) ;
        }
    }

    columns(){


    }

    rows(){


    }
 }

function lines(nodes , {
    x,
    y
} , lineOffsetX){

   let lines = [];

   for(let node of nodes){

        if(node.hidden){

            continue ;
        }

       let {
           x:startX,
           y:startY
       } = node.getAnchorXY('r'),
       {
           children
       } = node;

       startX += lineOffsetX ;

       for(let childNode of children){

            if(!nodes.includes(childNode)){

                continue ;
            }

           let {
               x:endX,
               y:endY
           } = childNode.getAnchorXY('l'),
           points = [
            startX + x,
            startY + y,
            startX + x,
            endY + y,
            startX + x,
            endY + y,
            endX + x,
            endY + y
           ];

           lines.push({
               start:node,
               end:childNode,
               points
           }) ;
       }
   }

   return lines ;
}