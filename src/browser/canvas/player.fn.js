/**
 * 
 * 画板播放机
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import Observable from mixin.observable
 * 
 * @import getData from browser.canvas.data.get
 * 
 * @import setData from browser.canvas.data.set
 * 
 * @import createEngine from .player.engine
 * 
 * @import removeAll from array.remove.all
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 */

 const {
    keys
 } = Object ;

 
class main extends mixins({
    mixins:[
       Observable
    ]
}){

    constructor({
        context,
        user,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.context = context ;

        me.users = {};

        tryCreateUser.call(me , {
            [user]({
                delay,
                ...params
            }){

                return params ;
            }
        }) ;

        me.engine = createEngine({
            player:me
        }) ;

        me.activeUsers = [] ;
        
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

    get activeUser(){

        let {
            activeUsers
        } = this,
        [
            user
        ] = activeUsers;

        if(user){

            removeAll(activeUsers , user) ;

            return user ;
        }
    }

    add({
        user,
        ...record
    }){

        let me = this,
        {
            users,
            activeUsers
        } = me;

        tryCreateUser.call(me , user) ;

        user = users[user] ;

        let {
            records,
            convert
        } = user;

        records.push(convert(record)) ;

        activeUsers.push(user) ;

        me.fireEvent('add' , user , record) ;
    }
 }

 function tryCreateUser(user){

    let {
        users
    } = this ;

    if(isString(user)){

        user = {
            [user]:{
                covnert:record => record
            }
        } ;
    }

    console.log(user) ;

    if(isObject(user)){

        let names = keys(user) ;

        for(let name of names){

            if(!users.hasOwnProperty(name)){

                let config = user[name] ;

                if(isFunction(config)){

                    config = {
                        convert:config
                    } ;
                }

                if(isObject(config)){

                    users[name] = {
                        ...config,
                        cursor:0,
                        records:[]
                    } ;
                }
            }
        }
    }
 }
