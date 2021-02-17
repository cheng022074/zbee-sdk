/**
 * 
 * 生成以左边顺序排序的范围集合
 * 
 * @param {array} regions 范围集合
 * 
 * @return {array} 排序后的范围集合
 * 
 */

return Array.from(regions).sort(({
    left:left1
} , {
    left:left2
}) => left1 - left2) ;