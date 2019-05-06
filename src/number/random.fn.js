
/**
 * 
 * 返回一个范围内的随机数
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {number} [config.max = 0] 最大值
 * 
 * @param {number} [config.min = 0] 最小值
 * 
 * @return {number} 在指定范围内的随机数
 * 
 */

 const {
    abs,
    random,
    round
 } = Math ;

 return min + round(abs(max - min) * random()) ;