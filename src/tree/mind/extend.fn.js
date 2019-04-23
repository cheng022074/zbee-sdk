/**
 * 
 * 脑图
 * 
 * @import Node from tree.node.mind value
 * 
 * @import tree value
 * 
 * @class
 * 
 */

class main extends tree{

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
        
        config.Node = Node ;

        super(target , config) ;
    }
}