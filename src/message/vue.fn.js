/**
 * 
 * 基于 Vue 的消息封装
 * 
 * @import after from function.create.after
 * 
 * @import activate from .address.static.activate
 * 
 * @import deactivate from .address.static.deactivate
 * 
 * @import 
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

    if(target.hasOwnProperty('address')){

        
    }

    return target ;
}


