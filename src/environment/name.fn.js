
/**
 * 
 * 检测当前环境，返回值有 browser、zbee、node
 * 
 * @return {string} 环境名称 
 * 
 * @once
 * 
 */

const {
    toString
} = Object.prototype,
BROWSER_NAMES = {
    micromessenger: 'weixin-browser',
    ue4:'ue4-browser',
    unity: 'unity-browser',
    electron:'electron-browser',
    browser:'browser'
};

if(typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]'){
    
    return BROWSER_NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity|electron/) || ['browser'])[0]];

}else if(typeof process === 'object' && typeof global === 'object' && typeof require === 'function'){

    try{

        require('electron') ;

        return 'electron' ;

    }catch(err){

    }

    return 'node' ;
}

return 'other' ;