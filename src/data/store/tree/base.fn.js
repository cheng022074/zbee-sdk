
/**
 * 
 * 树型数据存储器
 * 
 * @import Store from data.store value
 * 
 * @import Model from data.model.node.tree.mind value
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
        synchronize,
        listeners = {},
        ...options
    }){

        let currentModel ;

        if(fields){

            currentModel = define(class extends Model{

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
            model:currentModel,
            listeners:[{
                load:'onLoad',
                expand:'onExpand',
                collapse:'onCollapse'
            } , listeners]
        }) ;

        let me = this ;

        me.rootConfig = rootConfig || {} ;

        me.synchronize = synchronize || (() => []) ;

        let {
            bottom:marginBottom = 0,
            right:marginRight = 0
        } = margin ;

        me.marginBottom = marginBottom ;

        me.marginRight = marginRight ;

        me.padding = padding ;

        me.lineOffsetX = lineOffsetX ;
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