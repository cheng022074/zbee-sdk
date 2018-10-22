
/**
 * 
 * 判断当前环境是否是电脑
 * 
 * @import name from os.name
 * 
 * @once
 * 
 * @return {boolean} 如果是电脑则返回 true , 否则返回 false 
 * 
 */

switch(name()){

    case 'MacOS':
    case 'Windows':
    case 'Linux':

        return true ;
}

return false ;
