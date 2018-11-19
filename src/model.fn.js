
/**
 * 
 * 模型
 * 
 * @import defineProperty from object.defineCacheProperty
 * 
 * @import getField from model.field
 * 
 * @import clear from object.clear
 * 
 * @import is.defined
 * 
 * @once
 * 
 * @return {Model} 模型类型引用 
 * 
 */

const {
    keys,
    values
} = Object ;

class Model {

    constructor(){

        let me = this ;

        defineProperty(me , 'fields') ;

        // 用来存储模型修改前的数据
        me.$beforeEditData = {} ;

        // 用来存储模型当前的数据
        me.$data = {} ;
    }

    initData(data){

        let {
            fields,
            $beforeEditData:beforeEditData,
            $data:innerData
        } = me ;

        clear(beforeEditData) ;

        clear(innerData) ;

        fields = values(fields) ;

        for(let {
            name
        } of fields){

            innerData[name] = field.set(data[name]) ;
        }
    }

    get beforeEditData(){

        return this.applyBeforeEditData() ;
    }

    applyBeforeEditData(){

        return this.$beforeEditData ;
    }

    get afaterEditData(){

        return this.applyAfterEditData() ;
    }

    applyAfterEditData(){

        let 
        me = this,
        {
            $beforeEditData:beforeEditData
        } = me,
        names = keys(beforeEditData),
        result = {};

        for(let name of names){

            result[name] = me.get(name) ;
        }

        return result ;
    }

    set data(data){

        let me = this,
            names = keys(data) ;

        for(let name of names){

            me.set(name , data[name]) ;
        }
    }

    get data(){

        let me = this,
            fields = values(me.fields),
            data = {};

        for(let {
            name
        } of fields){

            data[name] = me.get(name) ;
        }

        return data ;
    }

    get dirty(){

        let {
            $beforeEditData:beforeEditData
        } = this ;

        return keys(beforeEditData).length !== 0 ;
    }

    applyFields(){

        let config = this.applyFieldConfig(),
            names = keys(config),
            fields = {};

        for(let name of names){

            fields[name] = getField(name , config[name]) ;
        }

        return fields ;
    }
    /**
     * 
     * 增加一个字段定义
     * 
     * @param {object} config 字段定义配置
     * 
     * @return {model.Field} 字段实例对象
     */
    addField(name , config){

        this.fields[name] = getField(name , config) ;
    }
    /**
     * 
     * 去除一个字段定义
     * 
     * @param {string} name 字段名称
     * 
     */
    removeField(name){

        let {
            fields
        } = this ;

        delete fields[name] ;
    }

    /**
     * 
     * 判断当前模型是否存在指定名称的字段
     * 
     * @param {string} name 字段名称
     * 
     * @return {boolean} 如果不存在，则返回 false , 否则返回true 
     */
    hasField(name){

        return this.fields.hasOwnProperty(name) ;
    }

    applyFieldConfig(){

        return {} ;
    }

    set(name , value){

        let 
        me = this,
        {
            fields,
            $data:data,
            $beforeEditData:beforeEditData
        } = me,
        field = fields[name];

        if(field){

            value = field.set(value) ;

            if(isDefined(value)){

                let currentValue = data[name];

                if(value !== currentValue){

                    data[name] = value ;

                    if(!beforeEditData.hasOwnProperty(name)){

                        beforeEditData[name] = currentValue ;
                    }
                }

                return value ;
            }
        }
    }
    
    get(name){

        let {
            fields,
            $data:data
        } = this,
        field = fields[name];

        if(field){

            return field.get(data[name]) ;
        }
    }

    doCommit(){


    }

    commit(){

        let me = this,
        {
            dirty
        } = me;

        if(dirty){

            me.doCommit() ;

            clear(me.$beforeEditData) ;
        }
    }

    reject(){

        let me = this,
        {
            dirty
        } = me;

        if(dirty){

            let {
                $beforeEditData:beforeEditData,
                data
            } = me,
            names = keys(beforeEditData);

            for(let name of names){

                data[name] = beforeEditData[name] ;

                delete beforeEditData[name] ;
            }
        }
    }
}

return Model ;
