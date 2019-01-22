/**
 * 
 * 基于 Vue 的消息封装
 * 
 * @import after from function.create.after
 * 
 * @import bind from function.bind
 * 
 * @import get from message.address.static.storage
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

    if(mounted){

        target.mounted = after(mounted , bind(onMounted , [
            address
        ])) ;
    
    }else{

        target.mounted = onMounted ;
    }

    if(destroyed){

        target.destroyed = after(destroyed , onDestroyed) ;
    
    }else{

        target.destroyed = onDestroyed ;
    }

    return target ;
}


