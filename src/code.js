const {
    file:is_file
} = require('./is'),
{
    readTextFile,
    getFileUpdateTime
} = require('./fs'),
{
    defineKey,
} = require('./object'),
{
    require:module_require
} = require('./module'),
baseSuffixRe = /\.[^\.]+$/;

class Code{

    constructor(project , config){

        let {
            path,
            name,
            scope,
            suffix
        } = config,
        me = this;

        me.project = project ;

        me.path = path ;

        me.name = name ;

        me.scope = scope ;

        me.suffix = suffix ;

        if(path){

            me.updateTime = getFileUpdateTime(path) ;
        }
    }

    get fullName(){

        return defineKey(this , '$fullName' , 'generateFullName') ;
    }

    generateFullName(){

        let {
            scope,
            name
        } = this ;

        return `${scope}::${name}` ;
    }

    get isFile(){

        let me = this ;

        let path = this.path ;

        if(path){

            return is_file(me.path) ;
        }

        return false ;
    }

    get isUpdated(){

        let me = this,
            path = me.path;

        if(path){

            return getFileUpdateTime(path) !== me.updateTime ;
        }

        return false ;
    }

    sync(){

        let me = this ;

        if(me.isUpdated === true){

            me.doSync() ;
        }
    }

    doSync(){

        let me = this ;

        me.updateTime = getFileUpdateTime(me) ;
    }
}

class BinCode extends Code{

    get caller(){

        return defineKey(this , '$caller' , 'generateCaller') ;
    }

    generateCaller(){

        let me = this ;

        if(me.isFile){

            let path = me.path ;
            
            if(me.scope === 'template'){
                
                return readTextFile(path) ;
            }
    
            switch(me.suffix.match(baseSuffixRe)[0]){
                
                case '.json':
                case '.js':
    
                    return module_require(path) ;
    
                case '.xml':
    
                    return readXMLFile(path) ;
    
                case '.html':
    
                    return readHTMLFile(path) ;
            }

            return readTextFile(path) ;
        }
    }

    doSync(){

        super.doSync() ;

        delete this.$caller ;
    }
}

exports.BinCode = BinCode ;


class SourceCode extends Code{

    get code(){

        return defineKey(this , '$code' , 'generateCode') ;
    }

    generateCode(){

        let me = this ;
        
        if(me.isFile){

            let path = me.path ;

            if(me.scope === 'template'){
                
                return readTextFile(path) ;
            }
    
            switch(me.suffix.match(baseSuffixRe)[0]){
                
                case '.json':
    
                    return module_require(path) ;
    
                case '.xml':
    
                    return readXMLFile(path) ;
    
                case '.html':
    
                    return readHTMLFile(path) ;
            }

            return readTextFile(path) ;
        }
    }

    doSync(){

        super.doSync() ;

        delete this.$code ;
    }
}

exports.SourceCode = SourceCode ;