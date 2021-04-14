
/**
 * 
 * 以排序的形式添加数组项
 * 
 * @import is.number
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

        return 0 ;
    
    }

    let index = getInsertIndex(data , item , sortFn , 0 , data.length - 1) ;

    data.splice(index , 0 , item) ;

    return index ;
    
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

    value = isNumber(value) ? value : 0 ;

    if(value <= 0){

        start = index + 1;

        if(start > end || sortFn(data[start] , item) >= 0){

            return start;
        
        }
    
    }else if(value > 0){

        end = index - 1 ;

        if(start > end){

            return index === 0 ? index : index - 1;
        }
    }

    return getInsertIndex(data , item , sortFn , start , end) ;
 }