const {
    parse,
    stringify
} = require('../../../html/json'),
{
    format
} = require('../../../html');

module.exports = doc =>{

    let config = parse(doc),
        codes = [];

    return {
        code:generate(config)
    } ;
}

function generate(config){

    return format(stringify(config)) ;
}