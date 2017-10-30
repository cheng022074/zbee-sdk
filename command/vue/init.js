const {
    parseSourceCodeName
} = require('../../src/compiler'),
{
    decompress
} = require('../../src/zip'),
{
    PATH
} =  require('../../src/application'),
{
    emptyDirectory
} = require('../../src/is'),
{
    apply
} = require('../../src/template'),
{
    writeTextFile
} = require('../../src/fs'),
{
    join
} = require('path'),
{
    exec
} = require('../../src/child_process');

module.exports = async function(name = 'zbee'){

    let {
        path
    } = parseSourceCodeName('template::project.vue' , '.zip') ;

    await decompress(path , PATH) ;

    writeTextFile(join(PATH , 'index.html') , apply('project.vue.index' , {
        name
    })) ;

    writeTextFile(join(PATH , 'package.json') , apply('project.vue.package' , {
        name
    })) ;

    writeTextFile(join(PATH , 'README.md') , apply('project.vue.README' , {
        name
    })) ;

    await exec('cnpm' , 'install') ;

    await exec('npm' , 'start') ;
}