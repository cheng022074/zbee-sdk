
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
 * @import from from array.from
 * 
 * @class
 * 
 * 
 */

 class main extends Store{

    constructor({
        fields,
        margin = {},
        padding = 0,
        lineOffsetX = 0, 
        rootConfig,
        syncChildNodes,
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

        me.rootConfig = rootConfig || {} ;

        me.syncChildNodes = syncChildNodes || (() => []) ;

        let {
            bottom:marginBottom = 0,
            right:marginRight = 0
        } = margin ;

        me.marginBottom = marginBottom ;

        me.marginRight = marginRight ;

        me.padding = padding ;

        me.lineOffsetX = lineOffsetX ;

        me.addListeners({
            load:{
                fn:'onLoad',
                once:true,
                getOldFireEventData:'last'
            },
            expand:'onExpand',
            collapse:'onCollapse',
            scope:me
        }) ;
    }

    onExpand(){

        this.layout() ;

    }

    onCollapse(){

        this.layout() ;
    }

    onLoad(store , nodes){

        for(let node of nodes){

            if(!node.isBindStore){

                continue ;
            }

            let {
                parentNode
            } = node ;

            if(!parentNode){
                
                let me = this,
                {
                    rootConfig
                } = me ;

                me.rootNode = node ;

                node.set(rootConfig) ;

                doReorder(node) ;

                node.suspendEvents() ;

                me.fireEvent('root' , node) ;

                node.resumeEvents() ;

                break ;
            }
        }
    }
 }


 function doReorder(node){

    let {
        store,
        childNodes
    } = node ;

    store.insert(store.indexOf(node) + 1 , childNodes) ;

 }