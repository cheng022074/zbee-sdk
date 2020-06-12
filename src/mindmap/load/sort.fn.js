
/**
 * 
 * 节点排序
 * 
 */

 function main(){

    sort(this.rootNode) ;
 }

 function sort({
    children
}){

    children.sort(sortByOrder) ;

    for(let childNode of children){

        sort(childNode) ;
    }
 }

 function sortByOrder({
     order:order1
 } , {
     order:order2
 }){

    return order1 - order2 ;
 }