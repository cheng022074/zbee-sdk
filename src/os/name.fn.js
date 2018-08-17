/**
 * 
 * 返回当前操作系统的名称
 * 
 * @once
 * 
 * @return {string} 操作系统的名称
 * 
 */

const NAMES = {
    iphone: 'iOS',
    android:'Android',
    mac: 'MacOS',
    win: 'Windows',
    linux: 'Linux',
    other: 'Other'
};

let userAgent = navigator.userAgent.toLowerCase(),
    name = NAMES[(userAgent.match(/mac|win|linux/) || ['other'])[0]];

switch(name){

    case 'MacOS':
    case 'Linux':

        {

            let name = NAMES[(userAgent.match(/iphone|android/) || ['other'])[0]] ;

            if(name !== 'Other'){

                return name ;
            }
        }
}

return name ;