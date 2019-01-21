
/**
 * 
 * 当前消息地址的激活状态
 * 
 * @import clear from array.clear
 * 
 * @param {boolean} activate 如果非激活状态则设置 false , 否则设置  true 
 * 
 */

let me = this,
{
    activate
} = me;

if(activate === false){

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

    me.$activate = true ;
}