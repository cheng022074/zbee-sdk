

/**
 * 
 *  获得指定区间的日期对象集合
 * 
 * @import is.defined
 * 
 * @import clone from date.clone
 * 
 * @import get from date.get
 * 
 * @import next from date.next
 * 
 * @param {number} year 年份
 * 
 * @param {number} month 月份
 * 
 * @param {number} startDate 起始日期数
 * 
 * @param {number} [endDate] 终止日期数
 * 
 * @return {array} 日期对象集合 
 * 
 */

 let date = get({
    year,
    month,
    date:startDate
 });

 let result = [
     clone(date)
 ],
 count;

 if(endDate){

    count = endDate - startDate ;
 }

 while(true){

    date = next(date) ;

    if(!isDefined(count)){

        if(date.getMonth() !== month){

            break ;
        }
    
    }else if(-- count <= 0){

        break ;
    }

    result.push(date) ;
 }

 return result ;