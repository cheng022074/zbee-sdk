
/**
 * 
 * 将XML字符串转换成XML文档对象
 * 
 * @scoped
 * 
 * @param {string} data XML字符串
 * 
 * @return {XMLDocument} XML文档对象 
 * 
 */

const {
    DOMParser
} = require('xmldom'),
parser = new DOMParser();

function main(){

    try{

        return parser.parseFromString(data , 'text/xml') ;

    }catch(err){


    }

    return parser.parseFromString('<xml/>' , 'text/xml') ;
}
