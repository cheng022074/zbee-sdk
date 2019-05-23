
/**
 * 
 * 树型数据存储器
 * 
 * @import Store from data.store value
 * 
 * @import model from data.model.node.tree value
 * 
 * @import define from class.define
 * 
 * @param {object} options 数据存储器配置
 * 
 * 
 */

 class main extends Store{

    constructor({
        fields,
        ...options
    }){

        if(fields){

            model = define(class extends model{

                static get fieldConfigurations(){

                    return [
                        ...super.fieldConfigurations,
                        ...fields
                    ];
                }
            }) ;
        }

        super({
            ...options,
            model
        }) ;

        let me = this ;

        me.on('load' , 'onLoad' , me , {
            once:true,
            getOldFireEventData:'last'
        }) ;
    }

    onLoad(store , nodes){

        for(let node of nodes){

            let {
                parentNode
            } = node ;

            if(!parentNode){

                sort(node) ;
            }
        }
    }
 }

 function sort(node){

    let {
        store,
        childNodes
    } = node ;

    store.insert(store.indexOf(node) + 1 , childNodes) ;

    for(let childNode of childNodes){

        sort(childNode) ;
    }
 }