
/**
 * 
 * 逻辑图寻找器实现
 * 
 * @class
 * 
 */

 function getNodePositionInfoByPoint(point){


 }

 function getLeftNearestNodePositionInfoByPoint(point){


 }

 function getRightNearestNodePositionInfoByPoint(point){


 }

 function getTopNearestNodePositionInfoByPoint(point){

   
 }

function getBottomNearestNodePositionInfoByPoint(point){


}

function getNearestNodePositionInfo(...nodePositionInfoList){

   nodePositionInfoList = nodePositionInfoList
      .filter(nodePositionInfo => !! nodePositionInfo)
      .sort(({
         distance:distance1
      } , {
         distance:distance2
      }) => distance1 - distance2);

   if(nodePositionInfoList.length){

      return nodePositionInfoList[0] ;
   }
}

function getNodePositionInfo(node , point){


}

 class main {

   constructor(mindmap , direction){

      let me = this ;

      me.mindmap = mindmap ;

      me.direction = direction ;

   }

   getNearestNodePositionInfo(point){

      let me = this,
         {
            direction,
            mindmap
         } = me,
         info = getNodePositionInfoByPoint.call(me , point) ;

      if(info){

         return info ;

      }

      let parentNodePositionInfo ;

      switch(direction){

         case 'right':

            parentNodePositionInfo = getLeftNearestNodePositionInfoByPoint.call(me , point) ;

            break ;

         case 'left':

            parentNodePositionInfo = getRightNearestNodePositionInfoByPoint.call(me , point) ;
      }

      if(!parentNodePositionInfo){

         return getNodePositionInfo.call(me , mindmap.rootNode , point) ;
      }

      return getNearestNodePositionInfo(
         parentNodePositionInfo,
         getTopNearestNodePositionInfoByPoint.call(me , point),
         getBottomNearestNodePositionInfoByPoint.call(me , point)
      ) ;

   }
 }