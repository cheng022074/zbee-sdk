
/**
 * 
 * 返回数据记录编号
 * 
 * @import getId from id.generate
 * 
 * @return {mixed} 编号 
 * 
 */

let me = this,
{
    $id
} = me;

if($id){

    return $id ;
}

let {
    idProperty
} = me ;

if(me.has(idProperty)){

    return me.$id =  me.get(idProperty) ;

}

return me.$id = getId('model-') ;