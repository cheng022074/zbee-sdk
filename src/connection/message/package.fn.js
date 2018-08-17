/**
 * 
 * 将信息打包
 * 
 * @param {string} action 动作名称
 * 
 * @param {mixed} data 数据
 * 
 * @return {object} 打包后的信息包
 * 
 * @scoped
 * 
 */

let count = 0 ;

function main(){

    return {
        id:`${Date.now()}-${++ count}`,
        action,
        data
    } ;
}