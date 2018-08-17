
/**
 * 
 * 随机生成一个范围的数字
 * 
 * @param {number} startValue 起始值
 * 
 * @param {number} endValue 终止值
 * 
 * @return {number}
 * 
 */

const {
    floor,
    random
} = Math ;

return floor(random() * (endValue - startValue + 1) + startValue);
