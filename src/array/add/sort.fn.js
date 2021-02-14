
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

    let {
        length
    } = data ;

    if(length === 0){

        data.push(item) ;
    
    }else{

        data.splice(getInsertIndex(data , item , sortFn , 0 , data.length - 1) , 0 , item) ;
    }
 }

 function getInsertIndex(data , item , sortFn , start , end){

    let index ;

    if(start === end){

        index = start ;
    
    }else{

        index = start + Math.round((end - start) / 2) ;
    }

    let currentItem = data[index],
        value = sortFn(currentItem , item);

    if(value <= 0){

        start = index + 1;

        if(start > end || sortFn(data[start] , item) > 0){

            return index + 1;
        
        }
    
    }else if(value > 0){

        end = index - 1 ;

        if(start > end){

            return index === 0 ? index : index - 1;
        }
    }

    return getInsertIndex(data , item , sortFn , start , end) ;
 }