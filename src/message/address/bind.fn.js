
/**
 * 
 * 将消息地址绑定在一个具体对象上
 * 
 * @import clear from array.clear
 * 
 * @param {mixed} target 绑定对象
 * 
 */

let me = this,
{
    activate
} = me ;

if(!activate){

    let {
        relistenMode,
        unlistenMessages
    } = me ;

    for(let message of unlistenMessages){

        let {
            method
        } = message ;

        if(method in target){

            target[method](message) ;
        }

        if(relistenMode === 'recent'){

            break ;
        }

        clear(unlistenMessages) ;
    }
}

me.target = target ;

