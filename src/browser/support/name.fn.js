/**
 * 
 * 返回当前浏览器的名称
 * 
 * @once
 * 
 * @return {string} 浏览器的名称
 * 
 */

const NAMES = {
    micromessenger: 'WeiXin',
    ue4:'UE4',
    unity: 'Unity'
};

return NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity/) || ['other'])[0]];