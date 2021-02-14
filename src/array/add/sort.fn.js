
/**
 * 
 * 以排序的形式添加数组项
 * 
 * @param {array} data 数组
 * 
 * @param {mixed} item 添加项
 * 
 * @param {function} sortFn 排序函数
 * 
 */

 function main(data , item , sortFn){

    data.splice(getInsertIndex(data , item , sortFn , 0 , data.length - 1) , 0 , item) ;
 }

 function getInsertIndex(data , item , sortFn , start , end){

    let index = (end - start) / 2,
        currentItem = data[index],
        value = sortFn(currentItem , item);

    if(value <= 0){

        start = index ;
    
    }else if(value > 0){

        end = index - 1 ;
    }

    if(start > end){

        return index + 1;
    }

    return getInsertIndex(data , item , sortFn , start , end) ;
 }