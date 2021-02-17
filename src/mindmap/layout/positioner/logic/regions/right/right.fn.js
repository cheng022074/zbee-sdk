/**
 * 
 * 生成以右部逆序排序的范围集合
 * 
 * @param {array} regions 范围集合
 * 
 * @return {array} 排序后的范围集合
 * 
 */

return Array.from(regions).sort(({
    right:right1
} , {
    right:right2
}) => right2 - right1) ;