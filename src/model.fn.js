
/**
 * 
 * 模型
 * 
 * @import defineProperties from object.properties.define
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

        defineProperties(me , [
            'fields',
            'beforeEditData',
            'innerData'
        ]) ;
    }

    getInnerData(){

        return {} ;
    }

    getBeforeEditData(){

        return {} ;
    }

    initData(data){

        let {
            fields,
            beforeEditData,
            innerData
        } = me ;

        clear(beforeEditData) ;

        clear(innerData) ;

        fields = values(fields) ;

        for(let {
            name
        } of fields){

            if(data.hasOwnProperty(name)){

                innerData[name] = field.set(data[name]) ;

            }
        }
    }

    syncData(data){

        let {
            fields,
            beforeEditData,
            innerData
        } = me ;

        fields = values(fields) ;

        for(let {
            name
        } of fields){

            if(data.hasOwnProperty(name)){

                innerData[name] = field.set(data[name]) ;

                delete beforeEditData[name] ;
            }
        }
    }

    get afterEditData(){

        let 
        me = this,
        {
            beforeEditData
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
            beforeEditData
        } = this ;

        return keys(beforeEditData).length !== 0 ;
    }

    getFields(){

        let config = this.getFieldConfig(),
            names = keys(config),
            fields = {};

        for(let name of names){

            fields[name] = getField(name , config[name]) ;
        }

        return fields ;
    }

    getFieldConfig(){

        return {} ;
    }

    set(name , value){

        let 
        me = this,
        {
            fields,
            innerData,
            beforeEditData
        } = me,
        field = fields[name];

        if(field){

            value = field.set(value) ;

            if(isDefined(value)){

                let currentValue = data[name];

                if(value !== currentValue){

                    innerData[name] = value ;

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
            innerData
        } = this,
        field = fields[name];

        if(field){

            return field.get(innerData[name]) ;
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

            clear(me.beforeEditData) ;
        }
    }

    reject(){

        let me = this,
        {
            dirty
        } = me;

        if(dirty){

            let {
                beforeEditData,
                innerData
            } = me,
            names = keys(beforeEditData);

            for(let name of names){

                innerData[name] = beforeEditData[name] ;

                delete beforeEditData[name] ;
            }
        }
    }
}

return Model ;
