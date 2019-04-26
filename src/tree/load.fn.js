
/**
 * 
 * 重新载入树形数据
 * 
 * @import append from ..queue.append scoped
 * 
 * @import insert from ..queue.insert scoped
 * 
 * @import remove from ..queue.remove scoped
 * 
 * @param {mixed} data 树型数据
 * 
 */

 function main(data){

        
    let me = this ;

    me.clear() ;

    me.loading = true ;

    let rootNode = me.read(data);

    if(rootNode){

        me.rootNode = rootNode ;

        let {
          proxy
        } = me ;

        me.list = rootNode.list ;

        proxy.callIf('load' , me.data) ;

        rootNode.addListeners({

          append(parentNode , node){

            append(parentNode , node) ;
          },

          insert(parentNode , node , existNode , position){

            insert(parentNode , node , existNode , position) ;
          },

          remove(parentNode , node){

            remove(parentNode , node) ;
          }
          
        }) ;
    }

    me.loading = false ;
 }




