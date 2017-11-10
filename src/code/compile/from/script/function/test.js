const {
    apply
} = require('../../../../../template'),
function_params = require('../../../../script/function/params/object'),
import_codes = require('../../../../script/imports'),
config_codes = require('../../../../script/configs'),
extend_code = require('../../../../script/function/extend');

module.exports = sourceCode =>{

    let {
        fullName,
        code,
        meta,
    } = sourceCode,
    {
        params,
        imports,
        configs,
        extend
    } = meta,
    templateName;

    return apply('code.compile.script.function.test' , {
        fullName,
        code,
        params:function_params(params),
        imports:import_codes(imports),
        configs:config_codes(configs),
        extend:extend_code(extend)
    }) ;
}