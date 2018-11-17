
/**
 * 
 * 字符串模板元素类
 * 
 * @import getElementClass from template.element
 * 
 * @return {template.Element} 模板元素类引用
 * 
 * @once
 * 
 */

class Element extends getElementClass(){

    generateString(){

    }

    toString(){

        let me = this,
            {
                dirty
            } = me ;

        if(dirty){

            return me.$string = me.generateString() ;
        }

        return me.$string ;
    }
}

return Element ;
