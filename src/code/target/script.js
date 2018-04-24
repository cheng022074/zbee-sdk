const Target = require('../target') ;

module.exports = class extends Target{

    applyBinCodeData(){

        let {
            code,
            meta
        } = super.applyBinCodeData() ;

        let {
            code:body,
            imports,
            configItems
        } = meta,
        {
            project
        } = code;

        return {
            defaultFolder:project.defaultFolder,
            imports:process_imports(imports),
            importNames:process_import_names(imports),
            configItems:process_config_items(configItems),
            configItemNames:process_config_item_names(configItems),
            body
        }
    }
}

function process_import_names(imports){

    if(imports.length){

        let result = [] ;

        for(let {
            name
        } of imports){
    
            result.push(name) ;
        }
    
        return `let ${result.join(',')};` ;
    }

    return '' ;
}

function process_config_item_names(items){

    if(items && items.length){

        let result = [] ;

        for(let {
            name
        } of items){

            result.push(name) ;
        }

        return `let ${result.join(',')};` ;
    }

    return '' ;
}

function process_config_items(items){

    if(items){

        let result = [] ;

        for(let {
            name,
            target,
            key
        } of items){

            if(key){

                result.push(`${name} = config('${target}' , '${key}');`) ;
            
            }else{

                result.push(`${name} = config('${target}');`) ;
            }
        }

        return result.join('\n') ;
    }

    return '' ;
}

function process_imports(imports){

    let result = [] ;

    for(let {
        name,
        include
    } of imports){

        result.push(`${name} = include('${include}');`) ;
    }

    return result.join('\n') ;
}