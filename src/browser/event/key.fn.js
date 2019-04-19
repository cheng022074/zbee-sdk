
/**
 * 
 * 得到对应代码的值键值 
 * 
 * @param {number} code 键代码
 * 
 * @return {mixed} 键值 
 * 
 */

 const KEY_CODES = {
    39:'DIRECTION::RIGHT',
    37:'DIRECTION::LEFT',
    38:'DIRECTION::UP',
    40:'DIRECTION::DOWN',
    13:'ENTER',
    46:'DELETE',
    9:'TAB'
 } ;

 function main(code){

    return KEY_CODES[code] ;
 }