
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
    left,
    top
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
           childNodes
       } = node;

       startX += lineOffsetX ;

       for(let childNode of childNodes){

           let {
               x:endX,
               y:endY
           } = childNode.getAnchorXY('l') ;

           lines.push([
               startX + left,
               startY + top,
               startX + halfMargin + left,
               startY + top,
               endX - halfMargin + left,
               endY + top,
               endX + left,
               endY + top
           ]) ;
       }
   }

   return lines ;
}