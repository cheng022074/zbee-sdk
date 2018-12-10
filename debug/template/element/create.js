
/**
 * 
 * @import create from template.element.create
 * 
 * 创建元素
 * 
 */

console.log(create('div' , {
    id:'root'
} , [
    create('div' , {
        id:'children'
    })
]).toString()) ;