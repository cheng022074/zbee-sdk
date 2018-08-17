
/**
 * 
 * 针对脚本代码进行美化
 * 
 * @param {string} data JS 脚本代码
 * 
 * @return {string} 美化后的脚本代码
 * 
 */

const {
    js
} = require('js-beautify') ;

try{

    return js(data) ;

}catch(err){


}

return data ;