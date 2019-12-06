
/**
 * 
 * 基于 spawn 进程实现
 * 
 * @import Process from ....process value
 * 
 * @import add from event.listener.add
 * 
 * @import removeAll from event.listener.remove.all
 * 
 * @param {object} options 配置
 * 
 */

 const {
    spawn
 } = require('child_process') ;

 class main extends Process{

    doStart(){

        let me = this,
            {
                path
            } = me.options,
            process = spawn(path),
            {
                stdout
            } = process;

        add(stdout , 'data' , 'onStart' , {
            sope:me,
            once:true
        }) ;

        add(process , 'exit' , 'onEnd' , {
            scope:me
        }) ;

        me.process = process ;
    }

    get started(){

        return this.hasOwnProperty('process') ;
    }

    onEnd(code , signal){

        let me = this,
        {
            process
        } = me;

        delete me.process ;

        removeAll(process) ;

        removeAll(process.stdout) ;

        super.onEnd(signal === 'NORMAL') ;
    }

    doEnd(){

        let {
            process
        } = this ;

        process.kill('NORMAL') ;
    }
 }