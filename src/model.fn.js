
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

    constructor(data){

        let me = this ;

        defineProperty(me , 'fields') ;

        me.beforeCommitData = {} ;

        let 
        data = me.$data = {},
        {
            fields
        } = me ;

        fields = values(fields) ;

        for(let field of fields){

            let {
                name
            } = field ;

            data[name] = field.set(data[name]) ;
        }

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

        return keys(this.beforeCommitData).length !== 0 ;
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

    applyFieldConfig(){

        return {} ;
    }

    set(name , value){

        let {
            fields,
            $data:data,
            beforeCommitData
        } = this,
        field = fields[name];

        if(field){

            value = field.set(value) ;

            if(isDefined(value)){

                let currentValue = data[name];

                if(value !== currentValue){

                    data[name] = value ;

                    if(!beforeCommitData.hasOwnProperty(name)){

                        beforeCommitData[name] = currentValue ;
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

            if(field.mode === 'writeonly'){

                return ;
            }

            return field.get(data[name]) ;
        }
    }

    doCommit(beforeCommitData){


    }

    commit(){

        let me = this,
        {
            dirty
        } = me;

        if(dirty){

            let {
                beforeCommitData
            } = me ;

            me.doCommit(beforeCommitData) ;

            clear(beforeCommitData) ;
        }
    }

    reject(){

        let me = this,
        {
            dirty
        } = me;

        if(dirty){

            let {
                beforeCommitData,
                data
            } = me,
            names = keys(beforeCommitData);

            for(let name of names){

                data[name] = beforeCommitData[name] ;

                delete beforeCommitData[name] ;
            }
        }
    }

}

return Model ;
