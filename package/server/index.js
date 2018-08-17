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


exports['src::environment.name'] = (() => {




    let __once_1534494169109_value__,
        __once_1534494169109_locked__ = false;

    let __first_executed_1534494169109__ = false;


    function main() {



        const {
            toString
        } = Object.prototype;

        if (typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]') {

            return 'browser';
        }

        const {
            env
        } = process;

        if (env['ZBEE-RUNTIME-ENVIRONMENT'] === 'yes') {

            return 'zbee';
        }

        return 'node';
    }
    return function() {


        if (__once_1534494169109_locked__) {

            return __once_1534494169109_value__;

        }

        __once_1534494169109_locked__ = true;

        return __once_1534494169109_value__ = main.call((function() {

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

exports['src::fork.path'] = (() => {
    let getName;



    let __once_1534494169110_value__,
        __once_1534494169110_locked__ = false;

    let __first_executed_1534494169110__ = false;


    function main() {



        const {
            env
        } = process, {
            join
        } = require('path');

        switch (getName()) {

            case 'zbee':

                return join(env['ZBEE-APPLICATION-ROOT-PATH'], 'bin', 'header.js');

                break;

            case 'node':

                return __filename;

                break;

            default:

                return;
        };
    }
    return function() {

        if (!__first_executed_1534494169110__) {
            getName = include('environment.name');

            __first_executed_1534494169110__ = true;
        }


        if (__once_1534494169110_locked__) {

            return __once_1534494169110_value__;

        }

        __once_1534494169110_locked__ = true;

        return __once_1534494169110_value__ = main.call((function() {

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

exports['src::fork.process'] = (() => {
    let getPath;



    let __first_executed_1534494169110__ = false;


    function main(name, ...args) {



        const {
            fork
        } = require('child_process');

        return new Promise((resolve, reject) => {

            fork(getPath(), {
                env: {
                    'ZBEE-APPLICATION-ROOT-PATH': env['ZBEE-APPLICATION-ROOT-PATH'],
                    'ZBEE-ENTRY-NAME': name,
                    'ZBEE-ENTRY-ARGS': JSON.stringify(args)
                }
            }).on('message', resolve).on('error', reject);

        });
    }
    return function(name, ...args) {

        if (!__first_executed_1534494169110__) {
            getPath = include('fork.path');

            __first_executed_1534494169110__ = true;
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

        }).call(this), name, ...args);
    }


})();

exports['src::fork.worker'] = (() => {
    let getPath;



    let __first_executed_1534494169112__ = false;


    function main(name) {



        const {
            fork,
            setupMaster,
            isMaster
        } = require('cluster'), {
            env
        } = process;

        if (isMaster) {

            setupMaster({
                exec: getPath()
            });

            return fork({
                'ZBEE-APPLICATION-ROOT-PATH': env['ZBEE-APPLICATION-ROOT-PATH'],
                'ZBEE-ENTRY-NAME': name
            });
        }
    }
    return function(name) {

        if (!__first_executed_1534494169112__) {
            getPath = include('fork.path');

            __first_executed_1534494169112__ = true;
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