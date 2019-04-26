
/**
 * 
 * 重新载入树形数据
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

          append(){

            console.log('添加') ;
          },

          insert(){

            console.log('插入') ;
          },

          remove(){

            console.log('移除') ;
          }
          
        }) ;
    }

    me.loading = false ;
 }




