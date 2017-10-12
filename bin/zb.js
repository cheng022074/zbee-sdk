#!/usr/bin/env node

const PROCESS = require('../src/process'),
      command = PROCESS.command;

if(command){

    const  {
        name2path
      } = require('../src/path') ;

    const {
        argv,
        execArgv
    } = PROCESS ;

    if(execArgv.hasOwnProperty('env')){

        require('../src/environment').set(execArgv.env) ;
    }

    global.zb = {
        script:require('../src/script')
    } ;

    try{
        
        let result = require(`../command/${name2path(command)}`)(...argv) ;
        
        if(result instanceof Promise){
    
            result.catch(err =>{
    
                console.log(err) ;
    
            }) ;
        }
    
    }catch(err){

        console.log(err) ;
    }
}