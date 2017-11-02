exports.PATH = process.cwd() ;

const {
    defineProperties,
    assign,
    get
} = require('./object'),
{
    readJSONFile,
    readTextFile,
    readXMLFile,
    readHTMLFile
} = require('./fs'),
{
    PROPERTIES:COMPILER_PROPERTIES,
    getBinCode
} = require('./compiler'),
{
    join
} =  require('path'),
{
    from
} = require('./array'),
{
    file:is_file,
    function:is_function,
    string:is_string
} = require('./is'),
{
    CommandNotFoundExcepition,
    BinCodeFileNotFoundException
} = require('./application/exception'),
{
    SourceCode,
    BinCode,
    LibraryBinCode
} = require('./application/code');

defineProperties(exports , {

    PROPERTIES:{

        once:true,

        get:() =>{

            let properties = readJSONFile(join(exports.PATH , 'properties.json'));

            if(properties){

                return assign({} , COMPILER_PROPERTIES , properties) ;
            }

            return COMPILER_PROPERTIES ;
        }
    },

    SCOPE_SUFFIXES:{

        once:true,

        get:() =>{

            let suffixes =  exports.get('scope.suffixes'),
                names = Object.keys(suffixes),
                result = {};

            for(let name of names){

                result[name] = from(suffixes[name]) ;
            }

            return result ;
        }
    },

    LIBRARIES:{

        once:true,

        get:() =>{

            let libraryPaths = from(exports.get('libraries')),
                rootPath = exports.PATH,
                libraries = [];

            for(let libraryPath of libraryPaths){

                let path = join(rootPath , libraryPath) ;

                if(is_file(path)){

                    libraries.push(require(path)) ;
                }
            }

            return libraries ;
        }
    },

    COMMAND_CODE_NAMES:{

        once:true,

        get:() =>{

            let commands = exports.get('command'),
                names = Object.keys(commands),
                result = {};

            for(let name of names){

                let command = commands[name] ;

                if(is_string(command)){

                    result[name] = command ;

                }
            }

            return result ;
        }
    },

    COMMAND_NAMES:{

        once:true,

        get:() =>{

            return Object.keys(exports.COMMAND_CODE_NAMES) ;
        }
    },

    BIN_PATH:{

        once:true,

        get:() =>{

            return exports.get('path.bin') ;
        }
    },

    DIST_PATH:{

        once:true,

        get:() =>{

            return exports.get('path.dist') ;
        }
    }

}) ;

exports.get = key =>{

    return get(exports.PROPERTIES , key) ;
}

exports.SCOPE_FOLDERS = exports.get('scope.folders') ;

exports.DEFAULT_SCOPE = exports.get('scope.default') ;

require('./mixin/project')(exports) ;

exports.generateBinCode = name =>{

    let config = exports.parseSourceCodeName(name) ;

    if(config){

        if(config.hasOwnProperty('path')){

            return new BinCode(config) ;
        
        }else{

            return new LibraryBinCode(config) ;
        }

        return getBinCode(name) ;
    }
}

exports.executeBinCode = (codeName , ...args) =>{

    let binCode = exports.getBinCode(codeName) ;

    if(binCode){

        binCode = binCode.caller ;

        if(is_function(binCode)){

            return binCode(...args) ;
        
        }

    }else{

        throw new BinCodeFileNotFoundException(codeName) ;
    }
}

exports.executeCommand = (command , ...args) =>{

    let commandCodeNames = exports.COMMAND_CODE_NAMES ;

    if(commandCodeNames.hasOwnProperty(command)){

        return exports.executeBinCode(commandCodeNames[command] , ...args) ;
    
    }else{

        throw new CommandNotFoundExcepition(command) ;
    }
}

exports.generateSourceCode = name =>{

    let config = exports.parseSourceCodeName(name) ;

    if(config){

        return new SourceCode(config) ;
    }
}
