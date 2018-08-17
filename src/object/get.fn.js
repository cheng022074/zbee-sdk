
/**
 * 
 * 获得一个对象的键值
 * 
 * @param {object} data 对象数据
 * 
 * @param {string} key 对象键值
 * 
 * @return {mixed} 对应对象数据的键值的数据 
 * 
 * @scoped
 * 
 */

const splitRe = /\./;

function main(data , key){

    if(key){
    
        if(key in data){
    
            return data[key] ;
        }
    
        let names = key.split(splitRe),
            prefix = '';
    
        for(let name of names){
    
            let key = `${prefix}${name}` ;

            if(!data){

                break ;
            }
    
            if(key in data){
    
                data = data[key] ;
    
                prefix = '' ;
            
            }else{
    
                prefix = `${key}.` ;
            }
        }
    
        if(prefix){
    
            return ;
        }
    
        return data ;
    }
    
    return data ;

}