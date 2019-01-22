
/**
 * 
 * 将消息地址绑定在一个具体对象上
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

        if(target.hasOwnProperty(method)){

            target[method](message) ;
        }

        if(relistenMode === 'RECENT'){

            break ;
        }
    }
}

me.target = target ;

