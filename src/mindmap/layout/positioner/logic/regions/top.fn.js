/**
 * 
 * 生成以顶部顺序排序的范围集合
 * 
 * @param {array} regions 范围集合
 * 
 * @return {array} 排序后的范围集合
 * 
 */

return Array.from(regions).sort(({
    top:top1
} , {
    top:top2
}) => top1 - top2) ;