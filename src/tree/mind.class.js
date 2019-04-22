/**
 * 
 * @import node from tree.node.mind
 * 
 * @import tree
 * 
 */

class main extends tree(){

    constructor(target , config){

        let {
           fields = []
        } = config;
        
        config.fields = [
           'id',
           'x',
           'y',
           'width',
           'height',
           'selected',
           ...fields
        ] ;
        
        config.Node = node() ;
        
        super(target , config) ;
    }
}