
/**
 * 
 * 生成格式欢迎文本
 * 
 * @param {string} name 姓名
 * 
 * @return {string} 格式欢迎文本 
 * 
 */

return new Promise((reslove) =>{

    setTimeout(() =>{

        reslove(`欢迎 ${name}`) ;

    } , 1000 - name) ;

}) ;
