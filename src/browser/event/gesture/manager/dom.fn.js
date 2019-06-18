
/**
 * 
 * 传统事件管理
 * 
 * @import getName from ....name.start
 * 
 * @once
 * 
 */

 class main {


    install(el , name){

        el.addeventListener(getName(name) , include(`browser.event.${name}.start`)) ;
    }

    uninstall(el , name){

        el.removeEventListener(getName(name) , include(`browser.event.${name}.start`)) ;
    }
 }