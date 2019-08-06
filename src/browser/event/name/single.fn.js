
/**
 * 
 * 获取事件名称
 * 
 * @import isSupportPointer from is.browser.support.pointer
 * 
 * @import isSupportTouch from is.browser.support.touch
 * 
 * @param {string} name 事件名称
 * 
 * @return {mixed} 返回说明 
 * 
 */
if(isSupportTouch()){

    return `touch${name}` ;

}else{

    switch(name){

        case 'start':
    
            name = 'down' ;
    
            break ;
    
        case 'end':
    
            name = 'up' ;
    }
    
    if(isSupportPointer()){

        return `pointer${name}` ;
    }
    
    return `mouse${name}` ;
}

