
/**
 * 
 * 虚拟DOM
 * 
 * @import getModel from model
 * 
 * @import data.type.css.class
 * 
 * @import data.type.css.style
 * 
 * @import data.type.string
 * 
 * @import data.type.html.element.virtual
 * 
 * @return {html.element.Virtual} 虚拟DOM类型引用
 * 
 * @once
 * 
 */

class Element extends getModel(){

    static create(name , config , children){


    }

    constructor(name){


    }

    getFieldConfig(){

        return {
            class:'css.class',
            style:'css.style',
            html:'string',
            children:{
                type:'html.element.virtual',
                multi:true
            }
        } ;
    }    
}

return Element ;
