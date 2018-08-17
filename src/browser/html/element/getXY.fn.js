
/**
 * 
 * 获得元素的坐标
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @return {object} 坐标 
 * 
 */

const 
{
    round
} = Math ;

let 
x = 0,
y = 0,
{
    body
} = document;

if(el !== document && el !== body){
   
    try{

        let bodyRect = body.getBoundingClientRect(),
            rect = el.getBoundingClientRect();

        x = rect.left - bodyRect.left;
        y = rect.top - bodyRect.top;
    
    }catch(ex){

    }
}

return {
    x:round(x), 
    y:round(y)
};
