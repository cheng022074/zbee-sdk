/**
 * 
 * 获得当前浏览器的缩放比率
 * 
 * @import os.name
 * 
 * @return {number} 缩放比率
 * 
 * @once
 * 
 */

switch(osName){

    case 'iOS':
    case 'Android':

        return 1 ;
}

return window.devicePixelRatio ;
