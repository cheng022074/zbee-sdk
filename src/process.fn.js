
/**
 * 
 * 进程管理器
 * 
 * @import Observable from mixin.observable
 * 
 * @import add from event.listener.add
 * 
 * @class
 * 
 */

 class main extends mixins({
    mixins:[
       Observable
    ]
}){

    constructor(options = {}){

        super(options) ;

        let me = this ;

        me.options = options ;

        let {
            autoStart,
            reStart,
        } = options ;

        if(autoStart){

            me.start() ;
        }

        if(reStart){

            add(me , 'crash' , () => me.start()) ;
        }
    }

    get started(){

        return true ;
    }

    onStart(){

        this.fireEvent('open') ;
    }

    onEnd(isNormal){

        let me = this;

        if(isNormal){

            me.fireEvent('end') ;
        
        }else{

            me.fireEvent('crash') ;
        }

        me.fireEvent('exit') ;
    }

    start(){

        let me = this,
        {
            started
        } = me ;

        if(!started){

            me.doStart() ;
        }
    }

    doStart(){


    }

    end(){

        let me = this,
        {
            started
        } = me;

        if(started){

            me.doEnd() ;
        }        
    }

    doEnd(){


    }
 }