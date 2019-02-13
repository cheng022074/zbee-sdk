/**
 * 
 * 生成 import 语句
 * 
 * @param {string} path import 所引用的路径
 * 
 * @return {string} import 的引用名称
 * 
 */

let count = 1 ;

function main(path){

    let name = `import_${count ++}` ;

    return {
        name,
        code:`import ${name} from '${path}';`
    } ;
}