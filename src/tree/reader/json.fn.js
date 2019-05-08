
/**
 * 
 * 解析树型数据
 * 
 * @import object.value.get
 * 
 * @import from from array.from
 * 
 * @import is.empty
 * 
 * @import is.object.simple
 * 
 * @import getReader from data.reader.json
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根名称
 * 
 * @param {string} [config.childrenProperty = 'cn'] 读取子节点的字段名称
 * 
 * @param {string} [config.childrenField = 'children'] 存储子节点的字段名称
 * 
 * @param {function} [config.create] 构建对象函数
 * 
 * @param {function} [config.createExtraParams] 基于构建对象函数附加参数
 * 
 * @param {string} [config.fields] 读取数据记录的字段项
 * 
 * @return {function} 读取器所生成的解析函数
 * 
 */

 function main({
    rootProperty,
    childrenProperty,
    childrenField,
    fields,
    create,
    createExtraParams
 }){

    const read = getReader({
        multi:false,
        create,
        createExtraParams,
        fields
    }),
    parse = children =>{

        children = from(children) ;

        let result = [] ;

        for(let child of children){

            {
                let children = child[childrenProperty] ;

                child = read(child) ;

                if(children){

                    child[childrenField] = parse(children) ;
                
                }else{

                    child[childrenField] = [] ;
                }

                result.push(child) ;
            }
        }

        return result ;

    };

    return (new Function('data' , `

        var include = this.include,
            parse = this.parse,
            get = include('object.value.get'),
            isObject = include('is.object.simple');

        ${generate_get_root_data(rootProperty)}

        if(isObject(data)){

            return parse(data)[0] ;
        }

    `)).bind({
        include,
        parse
    }) ;
 }

 function generate_get_root_data(rootProperty){

    if(rootProperty !== '.'){
 
       return `data = get(data , '${rootProperty}');` ;
    }
 
    return '' ;
  }