/**
 * 
 * 基于 Vue 的消息封装
 * 
 * @import after from function.create.after
 * 
 * @import activate from .activate
 * 
 * @import deactivate from .deactivate
 * 
 * @param {object} target Vue 配置对象
 * 
 */

function doActivate(){

    activate(this) ;
}

function doDeactivate(){

    deactivate(this) ;
}

function main(target){

    if(target.hasOwnProperty('mounted')){

        target.mounted = after(target.mounted , doActivate) ;
    
    }else{

        target.mounted = doActivate ;
    }

    if(target.hasOwnProperty('destroyed')){

        target.destroyed = after(target.destroyed , doDeactivate) ;
    
    }else{

        target.destroyed = doDeactivate ;
    }

    return target ;
}


