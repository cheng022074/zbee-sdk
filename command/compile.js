const application = require('../src/application'),
{
    encode
} = require('../src/object/key'),
{
    apply
} = require('../src/template'),
{
    writeTextFile
} = require('../src/fs');

module.exports = name =>{

    let code = application.getSourceCode(name) ;

    console.log(code.meta) ;
}

/**
 * 
 * let config = parseSourceCodeName(name) ;

    if(config){

        let {
            scope,
            suffix
        } = config,
        suffixName = encode(suffix),
        template = get(`compile.${scope}.${suffixName}.template`),
        dataName = get(`compile.${scope}.${suffixName}.data`),
        toName = get(`compile.${scope}.${suffixName}.to`);

        if(template && dataName && toName){

            let path = executeBinCode(toName , config);

            writeTextFile(path , apply(template , executeBinCode(dataName , getSourceCode(name) , config))) ;

            console.log('已编译' , path) ;
        }
    }
 * 
 */