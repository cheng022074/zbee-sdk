
/**
 * 
 * 获得指定配置的 Excel 资源
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import Excel from excel
 * 
 * @import init from data.recordset.init
 * 
 * @param {string} [name = 'default'] 配置名称
 * 
 * @return {object} 
 * 
 */

const {
    env
} = process,
{
    join
} = require('path'),
{
    keys,
    assign
} = Object,
rootPath = env['ZBEE-APPLICATION-ROOT-PATH'];

let excelConfig = config('excel' , name);

if(excelConfig){

    let {
        entry,
        sheets:sheetConfigSet
    } = excelConfig;

    let names = keys(entry),
        result = {};

    for(let name of names){

        let data = result[name] = {} ;

        let {
            sheets
        } = new Excel(join(rootPath , `${entry[name]}.xlsx`)),
        sheetNames = keys(sheetConfigSet) ;

        for(let sheetName of sheetNames){

            let sheet = sheets.get(sheetName),
                sheetConfig = sheetConfigSet[sheetName] ;

            if(isObject(sheetConfig)){

                let {
                    name,
                    fields,
                    titleArea,
                    recordArea
                } = sheetConfig,
                titles = sheet.getTitles(titleArea),
                records = sheet.getRecords(recordArea);

                if(fields){

                    let len = titles.length ;

                    for(let i = 0 ; i < len ; i ++){

                        titles[i] = fields[titles[i]] || titles[i] ;
                    }
                }

                data[name || sheetName] = init(records , titles) ;

            }else if(isString(sheetConfig)){

                assign(data , include(sheetConfig)(sheets , sheet)) ;
            }
        }
    }

    return result ;
}

return [] ;
