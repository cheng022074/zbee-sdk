
/**
 * 
 * 获得一组模拟记录集
 * 
 * @config mockConfig from mock
 * 
 * @param {object} fieldConfig 模拟配置
 * 
 * @param {number} [count = 10] 记录数 
 * 
 * @return {array} 记录集 
 * 
 */

let recordset = [],
    names = Object.keys(fieldConfig),
    currentConfig = {};

for(let name of names){

    let {
        mock,
        ...options
    } = fieldConfig[name] ;

    if(mockConfig.hasOwnProperty(mock)){

        currentConfig[name] = {
            mock:include(mockConfig[mock]),
            options
        } ;
    }
}

for(let i = 0 ; i < count ; i ++){

    let record = {} ;

    for(let name of names){

        let {
            mock,
            options
        } = currentConfig[name] ;

        record[name] = mock(options , i , count) ;
    }

    recordset.push(record) ;
}

return recordset ;