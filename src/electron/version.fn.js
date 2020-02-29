
/**
 * 
 * 获得 Electron 版本号
 * 
 * @import getName from environment.name
 * 
 * @import split from string.split
 * 
 * @return {number} Electron 版本号
 * 
 * @require electron
 * 
 * @once
 * 
 */

 if(getName() === 'electron'){

    let {
        app
    } = require('electron'),
    versions = split(app.getVersion() , /\./);

    return Number(`${versions[0]}.${versions.slice(1).join('')}`) ;
 }

 return 0 ;