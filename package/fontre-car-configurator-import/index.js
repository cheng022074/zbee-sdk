try {

    let {
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

            return freeze(target);
        }
    }

    return (name, key) => {

        if (config.hasOwnProperty(name)) {

            return get_config(config[name], key);
        }

        try {

            return get_config(include(`config::${name}`), key);

        } catch (err) {

        }
    }

})();


exports['src::excel.constructor'] = (() => {




    let __first_executed_1528772039035__ = false;

    function main(path) {



        const {
            readFile
        } = require('xlsx');

        this.data = readFile(path, {
            cellDates: true
        });
    }
    return function(path) {
        if (!__first_executed_1528772039035__) {


            __first_executed_1528772039035__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), path);
    }


})();

exports['src::object.setOnce'] = (() => {




    let __first_executed_1528772039035__ = false;

    function main(target, name, fn, scope) {



        if (!target.hasOwnProperty(name)) {

            target[name] = fn.call(scope);

        }

        return target[name];
    }
    return function(target, name, fn, scope) {
        if (!__first_executed_1528772039035__) {


            __first_executed_1528772039035__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), target, name, fn, scope);
    }


})();

exports['src::excel.sheet.constructor'] = (() => {




    let __first_executed_1528772039035__ = false;

    function main(sheet) {



        this.data = sheet;
    }
    return function(sheet) {
        if (!__first_executed_1528772039035__) {


            __first_executed_1528772039035__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), sheet);
    }


})();

exports['src::excel.sheet.properties.endCellAddress'] = (() => {




    let __first_executed_1528772039035__ = false;



    const endCellAddressRe = /[A-Z]+\d+$/;

    function main() {

        return this.data['!ref'].match(endCellAddressRe)[0];
    }
    return function(data) {
        if (!__first_executed_1528772039035__) {


            __first_executed_1528772039035__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), data);
    }


})();

exports['src::excel.sheet.methods.address'] = (() => {
    let getEndCellAddress;



    let __first_executed_1528772039035__ = false;



    const addressRe = /^[A-Z]+\d+\:[A-Z]+\d+$/;

    function main(address) {

        if (addressRe.test(address)) {

            return address;
        }

        return `${address}:${getEndCellAddress.call(this)}`;
    }
    return function(address) {
        if (!__first_executed_1528772039035__) {
            getEndCellAddress = include('excel.sheet.properties.endCellAddress');

            __first_executed_1528772039035__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), address);
    }


})();

exports['src::excel.sheet.methods.getTitles'] = (() => {
    let getAddress;



    let __first_executed_1528772039036__ = false;

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
        if (!__first_executed_1528772039036__) {
            getAddress = include('excel.sheet.methods.address');

            __first_executed_1528772039036__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), address);
    }


})();

exports['src::excel.sheet.methods.getRecords'] = (() => {
    let getAddress;



    let __first_executed_1528772039036__ = false;

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
        if (!__first_executed_1528772039036__) {
            getAddress = include('excel.sheet.methods.address');

            __first_executed_1528772039036__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

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



    let __first_executed_1528772039038__ = false;



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
        if (!__first_executed_1528772039038__) {
            once = include('object.setOnce');
            Sheet = include('excel.sheet');

            __first_executed_1528772039038__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

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

exports['src::is.directory'] = (() => {




    let __first_executed_1528772039038__ = false;

    function main(path) {



        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isDirectory();
    }
    return function(path) {
        if (!__first_executed_1528772039038__) {


            __first_executed_1528772039038__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), path);
    }


})();

exports['src::is.file'] = (() => {




    let __first_executed_1528772039038__ = false;

    function main(path) {



        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isFile();
    }
    return function(path) {
        if (!__first_executed_1528772039038__) {


            __first_executed_1528772039038__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), path);
    }


})();

exports['src::directory.readFilePaths'] = (() => {
    let isDirectory, isFile;



    let __first_executed_1528772039038__ = false;

    function main(path) {



        if (isDirectory(path)) {

            const {
                readdirSync
            } = require('fs'), {
                join
            } = require('path');

            let names = readdirSync(path),
                paths = [];

            for (let name of names) {

                let targetPath = join(path, name);

                if (isFile(targetPath)) {

                    paths.push(targetPath);
                }
            }

            return paths;
        }

        return [];
    }
    return function(path) {
        if (!__first_executed_1528772039038__) {
            isDirectory = include('is.directory');
            isFile = include('is.file');

            __first_executed_1528772039038__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), path);
    }


})();

exports['src::data.recordset.init'] = (() => {




    let __first_executed_1528772039038__ = false;

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
        if (!__first_executed_1528772039038__) {


            __first_executed_1528772039038__ = true;
        }

        return main.call((function() {

            return this === global ? main : this;

        }).call(this), records, titles);
    }


})();