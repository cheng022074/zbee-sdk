
/**
 * 
 * 字段配置
 * 
 * @return {array} 
 * 
 */

return [
    'id',
    'parentId',
    {
        name:'expanded',
        persistent:true,
        defaultValue:false
    },{
        name:'selected',
        persistent:true,
        defaultValue:false
    },{
        name:'hidden',
        persistent:true,
        defaultValue:true
    },
    {
        name:'leaf',
        defaultValue:false
    }
];