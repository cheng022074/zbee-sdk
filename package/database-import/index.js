try {

    const {
        env
    } = process;

    if (!env['ZBEE-APPLICATION-ROOT-PATH']) {

        env['ZBEE-APPLICATION-ROOT-PATH'] = __dirname;
    }

} catch (err) {

}



const include = (() => {

    const nameRe = /^(\w+)\:{2}(.+?)$/,
        CODES = {};

    return name => {

        if (CODES.hasOwnProperty(name)) {

            return CODES[name];
        }

        let match = name.match(nameRe),
            folder,
            className;

        if (match) {

            folder = match[1],
                className = match[2];

        } else {

            folder = 'src',
                className = name;
        }

        let fullName = `${folder}::${className}`,
            code = CODES[name] = exports[fullName];

        if (code === undefined) {

            throw new Error(`${fullName} 没有定义`);
        }

        return code;
    };

})();

exports.include = include;

const gettype = (() => {

    const typeofTypes = [
            'number',
            'string',
            'boolean',
            'undefined',
            'function'
        ],
        {
            toString
        } = Object.prototype,
        toStringTypes = {
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object RegExp]': 'regexp'
        },
        nonWhitespaceRe = /\S/;

    return data => {

        if (data === null) {

            return 'null';
        }

        let type = typeof data;

        if (typeofTypes.includes(type)) {

            return type;
        }

        let ret = toStringTypes[toString.call(data)];

        if (ret) {

            return ret;
        }

        if (type === 'object') {

            if (data.nodeType !== undefined) {

                if (data.nodeType === 3) {

                    return nonWhitespaceRe.test(data.nodeValue) ? 'textnode' : 'whitespace';

                } else {

                    return 'element';
                }
            }

            return 'object';
        }

        return 'mixed';

    };

})();

const config = (() => {

    function freeze(data) {

        if (data && typeof data === 'object' && !Object.isFrozen(data)) {

            Object.freeze(data);

            let names = Object.keys(data);

            for (let name of names) {

                freeze(data[name]);
            }
        }

        return data;
    }

    const {
        join
    } = require('path'),
        dotRe = /\./g,
        config = {};

    function get_config(target, key) {

        if (key) {

            if (target.hasOwnProperty(key)) {

                return target[key];
            }

            let names = key.split(/\./),
                prefix = '';

            for (let name of names) {

                let key = `${prefix}${name}`;

                if (target.hasOwnProperty(key)) {

                    target = target[key];

                    prefix = '';

                } else {

                    prefix = `${key}.`;
                }
            }

            if (prefix) {

                return;
            }
        }

        return freeze(target);
    }

    return (name, key) => {



        try {

            const {
                env
            } = process;

            let path = `${env['ZBEE-APPLICATION-ROOT-PATH']}/config/${name.replace(dotRe , '/')}`,
                data;

            try {

                data = require(path);

            } catch (err) {}

            if (data) {

                return get_config(data, key);
            }

        } catch (err) {

        }


        if (config.hasOwnProperty(name)) {

            return get_config(config[name], key);
        }

        try {

            return get_config(include(`config::${name}`), key);

        } catch (err) {

        }

    }

})();


exports['src::is.object.simple'] = (() => {




    let __first_executed_1534494806871__ = false;


    function main(data) {



        return data instanceof Object && data.constructor === Object;
    }
    return function(data) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data);
    }


})();

exports['src::is.type'] = (() => {




    let __first_executed_1534494806870__ = false;


    function main(data, type) {



        return typeof data === type;
    }
    return function(data, type) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data, type);
    }


})();

exports['src::is.string'] = (() => {
    let isType;



    let __first_executed_1534494806877__ = false;


    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1534494806877__) {
            isType = include('is.type');

            __first_executed_1534494806877__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data);
    }


})();

exports['src::excel.constructor'] = (() => {




    let __first_executed_1534494807215__ = false;


    function main(path) {



        const {
            readFile
        } = require('xlsx');

        this.data = readFile(path, {
            cellDates: true
        });
    }
    return function(path) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), path);
    }


})();

exports['src::object.setOnce'] = (() => {




    let __first_executed_1534494807215__ = false;


    function main(target, name, fn, scope) {



        if (!target.hasOwnProperty(name)) {

            target[name] = fn.call(scope);

        }

        return target[name];
    }
    return function(target, name, fn, scope) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), target, name, fn, scope);
    }


})();

exports['src::excel.sheet.constructor'] = (() => {




    let __first_executed_1534494807215__ = false;


    function main(sheet) {



        this.data = sheet;
    }
    return function(sheet) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), sheet);
    }


})();

exports['src::excel.sheet.properties.endCellAddress'] = (() => {




    let __first_executed_1534494807215__ = false;




    const endCellAddressRe = /[A-Z]+\d+$/;

    function main() {

        return this.data['!ref'].match(endCellAddressRe)[0];
    }
    return function(data) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data);
    }


})();

exports['src::excel.sheet.methods.address'] = (() => {
    let getEndCellAddress;



    let __first_executed_1534494807215__ = false;




    const addressRe = /^[A-Z]+\d+\:[A-Z]+\d+$/;

    function main(address) {

        if (addressRe.test(address)) {

            return address;
        }

        return `${address}:${getEndCellAddress.call(this)}`;
    }
    return function(address) {

        if (!__first_executed_1534494807215__) {
            getEndCellAddress = include('excel.sheet.properties.endCellAddress');

            __first_executed_1534494807215__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), address);
    }


})();

exports['src::excel.sheet.methods.getTitles'] = (() => {
    let getAddress;



    let __first_executed_1534494807215__ = false;


    function main(address) {



        const {
            decode_range,
            encode_cell
        } = require('xlsx').utils,
            me = this,
            data = me.data;

        let {
            s: startCell,
            e: endCell
        } = decode_range(getAddress.call(me, address)),
            rowIndex = startCell.r,
            titles = [];

        for (let columnIndex = startCell.c; columnIndex <= endCell.c; columnIndex++) {

            let cell = data[encode_cell({
                c: columnIndex,
                r: rowIndex
            })];

            if (cell) {

                titles.push(String(cell.v).trim());

            } else {

                titles.push('');
            }
        }

        return titles;
    }
    return function(address = 'A1') {

        if (!__first_executed_1534494807215__) {
            getAddress = include('excel.sheet.methods.address');

            __first_executed_1534494807215__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), address);
    }


})();

exports['src::excel.sheet.methods.getRecords'] = (() => {
    let getAddress;



    let __first_executed_1534494807215__ = false;


    function main(address) {




        const {
            decode_range,
            encode_cell
        } = require('xlsx').utils,
            me = this,
            data = me.data;

        let {
            s: startCell,
            e: endCell
        } = decode_range(getAddress.call(me, address)),
            records = [];

        for (let rowIndex = startCell.r; rowIndex <= endCell.r; rowIndex++) {

            let record = [];

            for (let columnIndex = startCell.c; columnIndex <= endCell.c; columnIndex++) {

                let cell = data[encode_cell({
                    c: columnIndex,
                    r: rowIndex
                })];

                if (cell) {

                    record.push(cell.v);

                } else {

                    record.push('');
                }
            }

            records.push(record);
        }

        return records;
    }
    return function(address = 'A2') {

        if (!__first_executed_1534494807215__) {
            getAddress = include('excel.sheet.methods.address');

            __first_executed_1534494807215__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), address);
    }


})();

exports['src::excel.sheet'] = (() => {


    class Main {
        constructor() {

            include('excel.sheet.constructor').apply(this, arguments);
        };
        getTitles() {
            return include('excel.sheet.methods.getTitles').apply(this, arguments);
        }
        getRecords() {
            return include('excel.sheet.methods.getRecords').apply(this, arguments);
        }
    };


    return Main;

})();

exports['src::excel.properties.sheets'] = (() => {
    let once, Sheet;



    let __first_executed_1534494807216__ = false;




    function createSheets() {

        let {
            SheetNames: names,
            Sheets: sheets
        } = this.data,
            result = new Map;

        for (let name of names) {

            result.set(name, new Sheet(sheets[name]));
        }

        return result;
    }


    function main() {

        let me = this;

        return once(me, '$sheets', createSheets, me);
    }
    return function() {

        if (!__first_executed_1534494807216__) {
            once = include('object.setOnce');
            Sheet = include('excel.sheet');

            __first_executed_1534494807216__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this));
    }


})();

exports['src::excel'] = (() => {


    class Main {
        constructor() {

            include('excel.constructor').apply(this, arguments);
        };
        get sheets() {
            return include('excel.properties.sheets').call(this);
        }
    };


    return Main;

})();

exports['src::data.recordset.init'] = (() => {




    let __first_executed_1534494807216__ = false;


    function main(records, titles) {



        let result = [],
            len = titles.length;

        for (let record of records) {

            let data = {};

            for (let i = 0; i < len; i++) {

                data[titles[i]] = record[i];
            }

            result.push(data);
        }

        return result;
    }
    return function(records, titles) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), records, titles);
    }


})();

exports['src::excel.get'] = (() => {
    let isObject, isString, Excel, init;



    let __first_executed_1534494807216__ = false;


    function main(name) {



        const {
            env
        } = process, {
            join
        } = require('path'), {
                keys,
                assign
            } = Object,
            rootPath = env['ZBEE-APPLICATION-ROOT-PATH'];

        let excelConfig = config('excel', name);

        if (excelConfig) {

            let {
                entry,
                sheets: sheetConfigSet
            } = excelConfig;

            let names = keys(entry),
                result = {};

            for (let name of names) {

                let data = result[name] = {};

                let {
                    sheets
                } = new Excel(join(rootPath, `${entry[name]}.xlsx`)),
                    sheetNames = keys(sheetConfigSet);

                for (let sheetName of sheetNames) {

                    let sheet = sheets.get(sheetName),
                        sheetConfig = sheetConfigSet[sheetName];

                    if (isObject(sheetConfig)) {

                        let {
                            name,
                            fields,
                            titleArea,
                            recordArea
                        } = sheetConfig,
                        titles = sheet.getTitles(titleArea),
                            records = sheet.getRecords(recordArea);

                        if (fields) {

                            let len = titles.length;

                            for (let i = 0; i < len; i++) {

                                titles[i] = fields[titles[i]] || titles[i];
                            }
                        }

                        data[name || sheetName] = init(records, titles);

                    } else if (isString(sheetConfig)) {

                        assign(data, include(sheetConfig)(sheets, sheet));
                    }
                }
            }

            return result;
        }

        return [];
    }
    return function(name = 'default') {

        if (!__first_executed_1534494807216__) {
            isObject = include('is.object.simple');
            isString = include('is.string');
            Excel = include('excel');
            init = include('data.recordset.init');

            __first_executed_1534494807216__ = true;
        }


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), name);
    }


})();





{
    const {
        env
    } = process,
    entryName = env['ZBEE-ENTRY-NAME'];

    if (entryName) {

        const {
            isWorker
        } = require('cluster'),
            entryFn = include(entryName);

        if (typeof entryFn === 'function') {

            if (isWorker) {

                process.on('message', async ({
                    type,
                    id,
                    data
                }) => {

                    if (type === 'master-send') {

                        process.send({
                            id,
                            type: 'master-send-result',
                            data: await entryFn(...data)
                        });
                    }

                });

            } else {

                let args = env['ZBEE-ENTRY-ARGS'];

                if (args) {

                    args = JSON.parse(args);

                } else {

                    args = [];
                }

                (async () => {

                    process.send(await entryFn(...args));

                })();
            }
        }

    } else {


    }
}