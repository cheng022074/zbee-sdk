import { isFunction } from "util";

/**
 * 
 * 激活消息地址
 * 
 * @import is.function
 * 
 * @param {function} fn 监听函数
 * 
 */

let me = this,
{
    activate
} = me;

if(activate === false && isFunction(fn)){

    me.listenFunction = fn ;

    let {
        unlistenMessages,
        relistenMode,
        listenFunction
    } = me,
    {
        length
    } = unlistenMessages;

    if(length){

        switch(relistenMode){

            case 'ALL':

                for(let message of unlistenMessages){

                    listenFunction(message) ;
                }

                break ;

            case 'RECENTLY':

                listenFunction(unlistenMessages[length - 1]) ;
        }

        
        clear(unlistenMessages) ;
    }

    me.activate = true ;
}