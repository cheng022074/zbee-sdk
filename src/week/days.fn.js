
/**
 * 
 * 获得一周周期排列
 * 
 * @param {number} [startDay = 0] 确定起始周几
 * 
 * @return {array} 一周周期排列数字集合
 * 
 */

 let result = [
     startDay
 ];

while(result.length < 7){

    startDay ++ ;

    if(startDay <= 6){

        result.push(startDay) ;
    
    }else{

        result.push(startDay = 0) ;
    }
}

return result ;
