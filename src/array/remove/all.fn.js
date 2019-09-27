
/**
 * 
 * 在数组中去除所有指定项目
 * 
 * @import remove from ..index
 * 
 * @import indexOf from ....indexOf
 * 
 * @param {array} data 数组
 * 
 * @param {mixed} item 项目
 * 
 */

while(true){

    let index = indexOf(data , item) ;

    if(index !== -1){

        remove(data , index) ;
    
    }else{

        break ;
    }
}