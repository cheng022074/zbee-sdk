
/**
 * 
 * 生成日期列表
 * 
 * @param {Date} startDate 起始日期
 * 
 * @param {Date} endDate 终止日期
 * 
 * @param {number} count 生成个数
 * 
 * @param {boolean} [isNumber = true] 是否以数字方式取代日期对象
 * 
 * @return {array} 日期列表
 * 
 */

let startTime = startDate.getTime(),
endTime = endDate.getTime(),
countTime = endTime - startTime ;

if(countTime % count !== 0){

   return [] ;
}

let time = countTime / count ;

if(time === 0){

   return [] ;
}

let result = [];

for(let i = startTime ; i <= endTime ; i += time){

   result.push(i) ;
}

if(!isNumber){

for(let i = 0 ; i < count ; i ++){

   result[i] = new Date(result[i]) ;
}
}

return result ;