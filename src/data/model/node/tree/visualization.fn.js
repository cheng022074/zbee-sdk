
/**
 * 
 * 可视化节点信息
 * 
 */

 class main {

    constructor(node){

        this.node = node ;
    }

    get children(){

        let {
            node
        } = this,
        {
           expanded,
           cache
        } = node ;

       if(!expanded){

            return [] ;
       }

       return cache.get('children') ;
    }

     /**
     * 
     * 显示
     * 
     */
    show(){

        doHidden.call(this , false) ;
        
    }

    /**
     * 
     * 隐藏
     * 
     */
    hide(){

        doHidden.call(this , true) ;
    }

    /**
     * 
     * 返回上一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get previousSiblingNode(){

        return getSiblingNode.call(this , 'previous') ;
    }
    /**
     * 
     * 返回下一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get nextSiblingNode(){

        return getSiblingNode.call(this , 'next') ;
    }
 }

 function doHidden(value){

    let me = this,
        {
            cache,
            store
        } = me,
        {
            selectedNode
        } = store;

    if(selectedNode === me){

        let {
            parentNode
        } = me ;

        while(parentNode){

            if(parentNode.hidden === false){

                parentNode.select() ;

                break ;
            
            }else{

                parentNode = parentNode.parentNode ;
            }
        }
    }

    if(value){

        me.set({
            hidden:true,
            x:0,
            y:0
        }) ;

    }else{

        me.set('hidden' , value) ;
    }

    let children = cache.get('children') ;

    for(let childNode of children){

        childNode[value ? 'hide' : 'show']() ;
    }
 }