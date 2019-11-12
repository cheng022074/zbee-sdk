/**
 * 
 * 画板播放机
 * 
 * @import isObject from is.object.simple
 * 
 * @import Observable from mixin.observable
 * 
 * @import from from array.from
 * 
 * @import getData from browser.canvas.data.get
 * 
 * @import setData from browser.canvas.data.set
 * 
 * @import is.number
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 */

 
class main extends mixins({
    mixins:[
       Observable
    ]
}){

    constructor({
        context,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.context = context ;

        me.users = {} ;
    }

    saveData(){

        let me = this,
        {
            context
        } = me ;

        me.data = getData(context) ;
    }

    redrawData(){

        let {
            data,
            context
        } = this ;

        setData(context , {
            data
        }) ;
    }

    removeData(){

        delete this.data ;
    }

    get hasActiveUser(){

        return this.hasOwnProperty('activeUser') ;
    }

    reapplyActiveUser(){

        let me = this ;

        me.cancelActiveUser() ;

        me.applyActiveUser() ;
    }

    applyActiveUser(){

        let me = this,
            {
                hasActiveUser
            } = me ;

        if(!hasActiveUser){

            let {
                users
            } = me,
            names = Object.keys(users);

            for(let name of names){

                let user = users[name],
                {
                    cursor,
                    records
                } = user,
                {
                    length
                } = records;

                if(length > cursor){

                    me.activeUser = user ;

                    launch.call(me) ;

                    break ;
                }
            }
        
        }
    }

    cancelActiveUser(){

        let me = this,
            {
                hasActiveUser
            } = me ;

        if(hasActiveUser){

            delete me.activeUser ;
        }
    }

    add({
        user,
        ...record
    }){

        let me = this,
        {
            users
        } = me;

        if(!users.hasOwnProperty(user)){

            users[user] = {
                cursor:0,
                records:[]
            } ;
        }

        user = users[user] ;

        let {
            records
        } = user;

        records.push(record) ;

        me.applyActiveUser() ;
    }
 }

 function launch(){

    let me = this,
    {
        activeUser
    } = me,{
        cursor,
        records
    } = activeUser ;

    let record = records[cursor];

    if(record){
        
        let {
            api,
            params,
            delay
        } = record ;

        activeUser.cursor = cursor + 1;

        if(isNumber(delay)){

            setTimeout(() => {

                include(`browser.canvas.record.api.${api}`).call(me , params) ;
    
                launch.call(me) ;
    
            } , delay) ;
        
        }else{

            include(`browser.canvas.record.api.${api}`).call(me , params) ;
    
            launch.call(me) ;
        }
    
    }else{

        me.reapplyActiveUser() ;
    }
 }