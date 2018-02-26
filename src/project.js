const {
    APPLICATION:APPLICATION_PATH,
    COMPILER:COMPILER_PATH,
    fileNormalize
} = require('./path'),
{
    join
} = require('path'),
{
    load
} = require('./json'),
{
    get,
    defineCacheProperties
} = require('./object'),
{
    toPath
} = require('./name'),
{
    file:is_file
} = require('./is'),
{
    from
} = require('./array'),
{
    getAllFilePaths
} = require('./fs'),
{
    toName,
    extname
} = require('./path');

class Project{

    constructor(path){

        this.rootPath = path ;
    }

    getPath(folder , name , suffixes){

        suffixes = from(suffixes) ;

        let {
            rootPath
        } = this ;

        if(suffixes.length === 0){

            return fileNormalize(join(rootPath , folder , toPath(name))) ;
        }

        for(let suffix of suffixes){

            let path = join(rootPath , folder , toPath(name , suffix)) ;

            if(is_file(path)){

                return path ;
            }
        }

        return false ;
    }
}

class Application extends Project{

    constructor(){

        super(APPLICATION_PATH) ;

        let me = this ;

        me.libraries = new Libraries(me.properties = load(join(APPLICATION_PATH , 'properties'))) ;

        defineCacheProperties(me , [
            'manifest'
        ]) ;
    }

    get defaultFolder(){

        return this.libraries.defaultFolder || 'src';
    }

    getBinPath(folder , name){

        let path ;

        switch(folder){

            case 'config':

                path = join(APPLICATION_PATH , 'config' , toPath(name , '.json')) ;

                break ;

            case 'template':

                path = fileNormalize(join(APPLICATION_PATH , 'template' , toPath(name))) ;

                break ;

            default:

                path = join(APPLICATION_PATH , 'bin' , folder , `${name}.js`) ;
        }

        if(is_file(path)){

            return path ;
        }

        return false ;
    }

    getPath(folder , name , suffixes){

        return super.getPath(this.getFolderName(folder) , name , suffixes) ;
    }

    getFolderPath(folder){

        let me = this ;

        return join(me.rootPath , get(me.properties , `folders.${folder}`) || folder) ;
    }

    applyManifest(){

        let folders = [
            'config',
            'src',
            'template'
        ],
        me = this,
        manifest = {};

        for(let folder of folders){

            let folderPath = me.getFolderPath(folder),
                paths = getAllFilePaths(folderPath);

            for(let path of paths){

                let name = toName(path , folderPath) ;

                if(!manifest.hasOwnProperty(folder)){

                    manifest[folder] = [];
                }

                manifest[folder].push({
                    name,
                    suffix:extname(path)
                }) ;
            }
        }

        return manifest ;
    }
}

class Libraries{

    constructor({
        libraries = []
    }){

        let len = libraries.length ;

        for(let i = 0 ; i < len ; i ++){

            libraries[i] = require(join(APPLICATION_PATH , libraries[i])) ;
        }

        this.libraries = libraries ;
    }

    get(name){

        let {
            libraries
        } = this ;

        for(let library of libraries){

            if(library.hasOwnProperty(name)){

                return library[name] ;
            }
        }
    }
}

exports.APPLICATION = new Application() ;

class Compiler extends Project{

    constructor(){

        super(COMPILER_PATH) ;
    }
}

exports.COMPILER = new Compiler() ;