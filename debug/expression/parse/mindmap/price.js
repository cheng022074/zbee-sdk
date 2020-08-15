
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
 * @import expression.parser.mindmap.nodes.children
 * 
 * @import expression.parser.mindmap.nodes.condition
 * 
 * @import expression.parser.empty
 * 
 * @import expression.parser.function.call
 * 
 * @import expression.parser.operator
 * 
 * @import expression.parser.string
 * 
 */

let parsers = [
    'expression.parser.string',
    'expression.parser.operator',
    'expression.parser.function.call',
    'expression.parser.mindmap.node.current',
    'expression.parser.mindmap.nodes.descendant',
    'expression.parser.mindmap.nodes.condition',
    'expression.parser.mindmap.node.attribute',
    'expression.parser.mindmap.node.plugin',
    'expression.parser.mindmap.nodes.children',
    'expression.parser.empty'
 ] ;

 console.log(JSON.stringify(parse('sum(.//[@plugins]/@price)' , parsers) , null , 2)) ;