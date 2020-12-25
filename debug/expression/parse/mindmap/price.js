
/**
 * 
 * 报价
 * 
 * @import parse from expression.parse
 * 
 * @import expression.parser.mindmap.node.current
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
 * @import expression.parser.mindmap.node.root
 * 
 */

let parsers = [
    'expression.parser.string',
    'expression.parser.mindmap.node.root',
    'expression.parser.mindmap.node.current',
    'expression.parser.mindmap.nodes.descendant',
    'expression.parser.mindmap.nodes.children',
    'expression.parser.mindmap.nodes.condition',
    'expression.parser.mindmap.node.attribute',
    'expression.parser.function.call',
    'expression.parser.empty'
 ] ;

 console.log(JSON.stringify(parse('sum(.//[contains(@plugins , "price")]/@price)' , parsers) , null , 2)) ;