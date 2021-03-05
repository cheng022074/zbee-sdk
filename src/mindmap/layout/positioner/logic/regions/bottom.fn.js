/**
 * 
 * 生成以底部逆序排序的范围集合
 * 
 * @param {array} regions 范围集合
 * 
 * @return {array} 排序后的范围集合
 * 
 */

return Array.from(regions).sort(({
    bottom:bottom1
} , {
    bottom:bottom2
}) => bottom1 - bottom2) ;