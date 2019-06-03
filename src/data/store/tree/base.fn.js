
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
        depth = Number.MAX_VALUE,
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

        me.depth = depth ;

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
                    rootConfig,
                    depth
                } = me ;

                me.rootNode = node ;

                node.set(rootConfig) ;

                let nodes = node.getDepthNodes(depth) ;

                for(let node of nodes){

                    node.suspendEvents() ;

                    node.collapse() ;

                    node.resumeEvents() ;
                }
                
                doReorder(node) ;

                initNodeVisible(node) ;

                node.select() ;

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

 function initNodeVisible(node){

    let {
        childNodes
    } = node ;

    if(node.expanded){

        for(let childNode of childNodes){

            initNodeVisible(childNode) ;
        }

    }else{

        for(let childNode of childNodes){

            childNode.hide() ;
        }
    }
 }