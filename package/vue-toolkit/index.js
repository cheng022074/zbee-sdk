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

        if (code === undefined && folder !== 'config') {

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

            let data;

            try {

                data = require(`${env['ZBEE-APPLICATION-ROOT-PATH']}/config/${name.replace(dotRe , '/')}.json`);

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


exports['src::is.type'] = (() => {








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

exports['src::is.array'] = (() => {
    let isType;





    let __first_executed_1535005768852__ = false;



    function main(data) {



        return Array.isArray(data);
    }
    return function(data) {

        if (!__first_executed_1535005768852__) {
            isType = include('is.type');

            __first_executed_1535005768852__ = true;
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

exports['src::is.empty'] = (() => {
    let isArray;





    let __first_executed_1535005768852__ = false;



    function main(data, allowEmptyString) {



        return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data, allowEmptyString = false) {

        if (!__first_executed_1535005768852__) {
            isArray = include('is.array');

            __first_executed_1535005768852__ = true;
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

        }).call(this), data, allowEmptyString);
    }


})();

exports['src::is.string'] = (() => {
    let isType;





    let __first_executed_1535005768852__ = false;



    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1535005768852__) {
            isType = include('is.type');

            __first_executed_1535005768852__ = true;
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

exports['src::array.from'] = (() => {
    let isEmpty, isString;





    let __first_executed_1535005768852__ = false;



    function main(data) {



        if (isEmpty(data)) {

            return [];
        }

        if (data && data.length !== undefined && !isString(data)) {

            return Array.from(data);

        }

        return [
            data
        ];
    }
    return function(data) {

        if (!__first_executed_1535005768852__) {
            isEmpty = include('is.empty');
            isString = include('is.string');

            __first_executed_1535005768852__ = true;
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

exports['src::path.string'] = (() => {








    function main(path) {



        return path.replace(/\\/g, '\\\\');
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