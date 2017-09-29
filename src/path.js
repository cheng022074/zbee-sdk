const {
    sep,
    dirname,
    basename,
    join:path_join
} = require('path') ;

const dotRe = /\./g ;

exports.name2path = (name , suffix) =>{

    if(name === '*'){

        return '*' ;
    }

    return `${name.replace(dotRe , sep)}${suffix ? suffix : ''}` ;
}

const {
    readdirSync
} = require('fs'),
{
    file:is_file,
    directory:is_directory
} = require('./is');

exports.getFilePath = path =>{

    let folderPath = dirname(path) ;
    
    if(is_directory(folderPath)){

        let name = basename(path),
            fileNames = readdirSync(folderPath),
            result = [];

        for(let fileName of fileNames){

            if(fileName.indexOf(name) === 0){

                return path_join(folderPath , fileName) ; 
            }
        }
    }
}

exports.getFilePaths = path =>{

    let folderPath = dirname(path) ;

    if(is_directory(folderPath)){

        let name = basename(path),
            fileNames = readdirSync(folderPath),
            result = [];

        for(let fileName of fileNames){

            if(name === '*' || fileName.indexOf(name) === 0){

                let path = path_join(folderPath , fileName) ;

                if(is_file(path)){

                    result.push(path) ; 
                }
            }
        }

        return result ;
    }

    return [] ;
}

const suffixRe = /(?:\.[^\.\/\\]+)+$/ ;

exports.extname = path =>{

    let match = path.match(suffixRe) ;

    if(match){

        return match[0] ;
    }

    return '' ;
}

exports.replaceSuffix = (path , suffix) =>{

    return path.replace(suffixRe , suffix) ;
}