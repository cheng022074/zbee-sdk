/**
 * 
 * 基于 Vue 的消息封装
 * 
 * @import before from function.create.before
 * 
 * @import bind from function.bind
 * 
 * @import get from message.address.storage
 * 
 * @param {object} target Vue 配置对象
 * 
 */

function onMounted(address){

    address = get(address) ;

    if(address){

        let me = this ;

        address.bind(me) ;

        me.$address = address ;
    }
}

function onDestroyed(){

    let {
        $address:address
    } = this ;

    if(address){

        address.unbind() ;
    }
}

function main(target){

    let {
        address,
        mounted,
        destroyed
    } = target ;

    if(!address){

        throw new Error('应用消息机制的对象必须提供 address 定义') ;
    }

    let onMountedFn = bind(onMounted , [
        address
    ]) ;

    if(mounted){

        target.mounted = before(mounted ,onMountedFn) ;
    
    }else{

        target.mounted = onMountedFn ;
    }

    if(destroyed){

        target.destroyed = before(destroyed , onDestroyed) ;
    
    }else{

        target.destroyed = onDestroyed ;
    }

    return target ;
}


