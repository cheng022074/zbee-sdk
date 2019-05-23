
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

            if(!node.isBindStore){

                continue ;
            }

            let {
                parentNode
            } = node ;

            if(!parentNode){

                sort(node) ;
            }
        }
    }

    remove(nodes){

        nodes = from(nodes) ;

        let removeNodes = [] ;

        for(let {
            descendantNodes
        } of nodes){

            removeNodes.push(...super.remove(descendantNodes , false)) ;
        }

        removeNodes.push(...super.remove(nodes , false)) ;

        this.fireEvent('remove' , removeNodes) ;
    }
 }

 function sort(node){

    let {
        store,
        childNodes
    } = node ;

    if(node.expanded){

        store.insert(store.indexOf(node) + 1 , childNodes) ;

        for(let childNode of childNodes){

            sort(childNode) ;
        }
    
    }else{

        store.remove(childNodes) ;
    }
 }