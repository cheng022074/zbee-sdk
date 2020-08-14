
/**
 * 
 * 报价
 * 
 * @import parse from expression.parse
 * 
 * @import expression.parser.mindmap.node.current
 * 
 * @import expression.parser.mindmap.node.plugin
 * 
 * @import expression.parser.mindmap.node.attribute
 * 
 * @import expression.parser.mindmap.nodes.descendant
 * 
 * @import expression.parser.mindmap.path.split
 * 
 * @import expression.parser.empty
 * 
 * @import expression.parser.function.call
 * 
 */

let parsers = [
    'expression.parser.function.call',
    'expression.parser.mindmap.node.current',
    'expression.parser.mindmap.nodes.descendant',
    'expression.parser.mindmap.node.attribute',
    'expression.parser.mindmap.node.plugin',
    'expression.parser.mindmap.path.split',
    'expression.parser.number',
    'expression.parser.empty'
 ] ;

 console.log(JSON.stringify(parse('sum(.//price/@price , 1)' , parsers) , null , 2)) ;