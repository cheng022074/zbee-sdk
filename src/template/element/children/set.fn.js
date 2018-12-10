
/**
 * 
 * 初始化子元素集合
 * 
 * @import getManager from template.element.manager
 * 
 * @param {array} [children = []] 子元素集合
 * 
 */

let {
    $children
} = this,
len = children.length,
manager = getManager();

for(let i = 0 ; i < len ; i ++){

    let currentEl = $children[i],
        equalEl = children[i];

    if(currentEl && equalEl){

        if(currentEl.equals(equalEl)){

            currentEl.attribute = equalEl.attribute ;

            currentEl.children = equalEl.children ;

            manager.remove(equalEl) ;
        
        }else{

            manager.remove(currentEl) ;

            $children[i] = equalEl ;
        }

    }else if(currentEl && !equalEl){

        for(let j = i ; j < len ; j ++){

            manager.remove($children[i]) ;
        }

        $children.splice(i , len - i) ;

        break ;

    }else if(!currentEl && equalEl){

        $children.push(equalEl) ;
    }
}

