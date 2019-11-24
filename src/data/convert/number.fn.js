
/**
 * 
 * 将指定数据转换成数值
 * 
 * @import is.string
 * 
 * @import is.date
 * 
 * @import round from math.round
 * 
 * @param {mixed} data 数据
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {number} [config.digit = 0] 保留的小数点位数
 * 
 * @param {string} [config.keepMode = 'round'] 保留小数法
 * 
 * @return {number} 转换后的数值 
 * 
 */

 if(isString(data)){

    data = Number(data) ;
 }

 if(isDate(data)){

    data = data.getTime() ;
 }

 if(isNumber(data)){

    switch(keepMode){

        case 'round':

            data = round(data , digit) ;
    }

    return data ;

 }

 const {
    NEGATIVE_INFINITY,
    POSITIVE_INFINITY
 } = Number ;

 if(data === NEGATIVE_INFINITY || data === POSITIVE_INFINITY){

    return data ;
 }

 return NaN ;

 

 