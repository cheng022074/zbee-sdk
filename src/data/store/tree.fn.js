
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
 * @param {object} options 数据存储器配置
 * 
 * 
 */

 class main extends Store{

    constructor({
        fields,
        rootConfig,
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
                
                doReorder(node) ;

                doHide(node) ;

                let me = this,
                {
                    rootConfig
                } = me ;

                me.rootNode = node ;

                node.set(rootConfig) ;

                break ;
            }
        }
    }

    insertNodes(index , nodes){

        nodes = from(nodes) ;

        let me = this,
            insertNodes = [] ;

        for(let node of nodes){

            insertNodes.push(node) ;

            insertNodes.push(...node.descendantNodes) ;
        }

        insertNodes.push(...me.insert(index , insertNodes , false)) ;

        me.fireEvent('insert' , insertNodes) ;
    }

    removeNodes(nodes){

        nodes = from(nodes) ;

        let me = this,
            removeNodes = [] ;

        for(let {
            descendantNodes
        } of nodes){

            removeNodes.push(...me.remove(descendantNodes , false)) ;
        }

        removeNodes.push(...me.remove(nodes , false)) ;

        me.fireEvent('remove' , removeNodes) ;
    }
 }

 function doReorder(node){

    let {
        store,
        childNodes
    } = node ;

    store.insertNodes(store.indexOf(node) + 1 , childNodes) ;

 }

 function doHide(node){

    let {
        childNodes
    } = node ;

    if(node.expanded){

        for(let childNode of childNodes){

            doHide(childNode) ;
        }

    }else{

        for(let childNode of childNodes){

            childNode.hide() ;
        }
    }
 }