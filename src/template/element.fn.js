
/**
 * 
 * 模板元素类
 * 
 * @import is.defined
 * 
 * @import clone from array.clone
 * 
 * @import clearArray from array.clear
 * 
 * @import clearObject from object.clear
 * 
 * @import getManager from template.element.manager
 * 
 * @return {template.Element} 模板元素类引用
 * 
 * @once 
 * 
 */

const {
    keys
} = Object ;

class Element{

    static create(tag , attributes , children){

        let el = getManager().get(Element) ;

        el.init(tag , attributes , children) ;

        return el ;
    }

    constructor(){

        let me = this ;

        me.$attributes = {} ;

        me.$changedAttributes = {} ;

        me.$children = [] ;
    }

    init(tag , attributes , children){

        let me = this ;

        me.tag = tag ;

        me.attributes = attributes ;

        me.children = children ;

    }

    set children(els){

        let {
            $children:currentElements
        } = this,
        len = els.length,
        elements = clone(currentElements);

        for(let i = 0 ; i < len ; i ++){

            let currentElement = elements[i],
                element = els[i];

            if(!isDefined(currentElement)){

                currentElements.push(element) ;

            }else if(currentElement.tag !== element.tag){

                currentElement.recovery() ;

                currentElements[i] = element ;
            
            }else{

                currentElement.attributes = element.attributes ;

                element.recovery() ;
            }
        }
    }

    get children(){

        return me.$children ;
    }

    get attributeNames(){

        return keys(this.$attributes) ;
    }

    set attributes(attrs){

        let me = this,
            names = keys(attrs);

        for(let name of names){

            me.setAttribute(name , attrs[name]) ;
        }
    }

    get attributes(){

        return this.attrs ;
    }

    setAttribute(name , value){

        let me = this ;

        if(me.getAttribute(name) !== value){

            me.$changedAttributes[name] = value ;

            me.$attributes[name] = value ;
        }
    }

    getAttribute(name){

        return this.$attributes[name] ;
    }

    get dirty(){

        return keys(this.$changedAttributes).length !== 0 ;
    }

    reset(){

        let 
        me = this,
        {
            $attributes,
            $changedAttributes,
            $children
        } = me ;

        delete me.tag ;

        clearObject($attributes) ;

        clearObject($changedAttributes) ;

        clearArray($children) ;
    }

    recovery(){

        getManager().recovery(this) ;
    }
}

return Element ;
