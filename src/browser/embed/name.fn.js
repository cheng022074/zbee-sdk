/**
 * 
 * 获取内嵌浏览器的环境名称
 * 
 * @once
 * 
 * @return {string} 内嵌浏览器的名称
 * 
 */

const NAMES = {
    ue4: 'UE4',
    unity:'U3D',
    other: 'Other'
};

return NAMES[(navigator.userAgent.toLowerCase().match(/ue4|unity/) || ['other'])[0]];