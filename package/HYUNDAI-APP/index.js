{
    function includes(target) {

        return this.indexOf(target) !== -1;
    }

    function init(target) {

        target.prototype.includes = target.prototype.includes || includes;
    }

    init(Array);

    init(String);
}




const exports = {};




export const include = (() => {

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

            if (exports.hasOwnProperty(name)) {

                return CODES[name] = exports[name];
            }

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

    const config = {};

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



        if (config.hasOwnProperty(name)) {

            return get_config(config[name], key);
        }

        return get_config(include(`config::${name}`), key);
    }

})();


exports['src::os.name'] = (() => {




    let __once_1539242100689_value__,
        __once_1539242100689_locked__ = false;





    function main() {



        const NAMES = {
            iphone: 'iOS',
            android: 'Android',
            mac: 'MacOS',
            win: 'Windows',
            linux: 'Linux',
            other: 'Other'
        };

        let userAgent = navigator.userAgent.toLowerCase(),
            name = NAMES[(userAgent.match(/mac|win|linux/) || ['other'])[0]];

        switch (name) {

            case 'MacOS':
            case 'Linux':

                {

                    let name = NAMES[(userAgent.match(/iphone|android/) || ['other'])[0]];

                    if (name !== 'Other') {

                        return name;
                    }
                }
        }

        return name;
    }
    return function() {


        if (__once_1539242100689_locked__) {

            return __once_1539242100689_value__;

        }

        __once_1539242100689_locked__ = true;

        return __once_1539242100689_value__ = main.call((function() {

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

exports['src::is.pc'] = (() => {
    let name;



    let __once_1539242100689_value__,
        __once_1539242100689_locked__ = false;



    let __first_executed_1539242100689__ = false;



    function main() {



        switch (name()) {

            case 'MacOS':
            case 'Windows':
            case 'Linux':

                return true;
        }

        return false;
    }
    return function() {

        if (!__first_executed_1539242100689__) {
            name = include('os.name');

            __first_executed_1539242100689__ = true;
        }


        if (__once_1539242100689_locked__) {

            return __once_1539242100689_value__;

        }

        __once_1539242100689_locked__ = true;

        return __once_1539242100689_value__ = main.call((function() {

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