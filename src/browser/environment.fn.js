/**
 * 
 * 返回当前浏览器的环境名称
 * 
 * @once
 * 
 * @return {string} 浏览器的名称
 * 
 */

const NAMES = {
    micromessenger: 'WeiXin',
    ue4:'UE4',
    unity: 'Unity',
    electron:'Electron'
};

return NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity|electron/) || ['other'])[0]];