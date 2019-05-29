
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

        me.on('load' , 'onLoad' , me , {
            once:true,
            getOldFireEventData:'last'
        }) ;
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

                    node.collapse() ;
                }
                
                doReorder(node) ;

                initNodeVisible(node) ;


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