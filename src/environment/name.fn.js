
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
} = Object.prototype ;

if(typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]'){

    return 'browser' ;
}

return 'node' ;