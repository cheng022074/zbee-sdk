
/**
 * 
 * 布局
 * 
 */

 function main(){

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
            marginRight,
            lineOffsetX
        } = me ;

        me.fireEvent('layout' , records , lines(records , region , marginRight , lineOffsetX)) ;
    }
 }

 function lines(nodes , {
    x,
    y
} , marginRight , lineOffsetX){

   let lines = [],
       halfMargin = marginRight / 2 ;

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