
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
        records = recordset.toArray();

    if(rootNode){

        rootNode.layout() ;

        let {
            region
        } = me ;

        me.fireEvent('layout' , records , lines(records , region)) ;
    }
 }

 function lines(nodes , {
    y:regionY
}){

   let lines = [] ;

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

       for(let childNode of childNodes){

           let {
               x:endX,
               y:endY
           } = childNode.getAnchorXY('l') ;

           lines.push([
               startX,
               startY - regionY,
               endX,
               endY - regionY
           ]) ;
       }
   }

   return lines ;
}