
/**
 * 
 * 观察者模式
 * 
 * @class
 * 
 */

 class main extends require('events'){

    addEventListener(event , fn , {
        once = false
    } = {}){

        let me = this ;

        if(once){

            me.once(event , fn) ;
        }

        me.addListener(event , fn) ;
    }

    removeEventListener(){

        this.removeListener(event , fn) ;
    }

    dispatchEvent(event , ...args){

        let me = this ;

        me.emit(event , me , ...args) ;

        let {
            bubbleTarget
        } = me ;

        if(bubbleTarget && bubbleTarget instanceof main){

            bubbleTarget.dispatchEvent(event , me , ...args) ;
        }
    }
 }