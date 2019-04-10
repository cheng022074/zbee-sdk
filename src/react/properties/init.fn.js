
/**
 * 
 * 初始化 React 元素的属性设置
 * 
 * @import getEventName from browser.event.name.react
 * 
 * @import startTap from browser.event.tap.start
 * 
 * @import createAfter from function.create.after
 * 
 * @param {object} props 属性集合
 * 
 * @return {object} props 操作后的属性集合
 * 
 */

function main(props){

    if(props){

        if(props.hasOwnProperty('onTap')){

            let {
                onTap
            } = props ;

            add_event_listener(props , getEventName('onTouchStart') , startTap.bind({
                listeners:{
                    tap:onTap
                }
            })) ;

            delete props.onTap ;
        
        }
        
        if(props.hasOwnProperty('preventDefault')){

            add_event_listener(props , 'onTouchStart' , prevent_default) ;

            add_event_listener(props , 'onTouchMove' , prevent_default) ;

            delete props.preventDefault ;
        }
    }

    return props ;
}

function prevent_default(e){

    e.nativeEvent.preventDefault() ;
}

function add_event_listener(props , event , fn){

    if(props.hasOwnProperty(event)){

        props[event] = createAfter(props[event] , fn) ;
    
    }else{

        props[event] = fn ;
    }
}