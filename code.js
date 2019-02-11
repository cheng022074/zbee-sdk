const {
    parse
} = require('@babel/parser'),
{
    default:traverse
} = require('@babel/traverse'),
{
    resolve
} = require('path'),
{
    readFileSync,
    writeFileSync
} = require('fs');

let [
    ,
    ,
    path
] = process.argv,
ast = parse(readFileSync(resolve(`src/${path}`) , 'utf8') , {
    allowReturnOutsideFunction:true,
    allowAwaitOutsideFunction:true
});

writeFileSync(resolve(`ast/${path.replace(/\/|\./g , '_')}.json`) , JSON.stringify(ast.program.body , null , 2)) ;

traverse(ast , {
    enter({
        type
    }){

        console.log(type) ;
    }
}) ;