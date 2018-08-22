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
        config = {
            "http": {
                "default": {
                    "timeout": 20000,
                    "headers": {
                        "content-type": "application/json"
                    },
                    "type": "json"
                }
            }
        };

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


exports['src::url.template.apply'] = (() => {








    function main(url, data) {



        return url.replace(/\:([^\\\/\d]+)/g, (match, name) => {

            return data[name] || '';

        });
    }
    return function(url, data) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), url, data);
    }


})();

exports['src::is.object.simple'] = (() => {








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





    let __first_executed_1534834753743__ = false;



    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1534834753743__) {
            isType = include('is.type');

            __first_executed_1534834753743__ = true;
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

exports['src::url.isAbsolute'] = (() => {








    function main(url) {



        return /^https?\:\/{2}/.test(url);
    }
    return function(url) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), url);
    }


})();

exports['src::url.join'] = (() => {
    let isAbsolute;





    let __first_executed_1534834753743__ = false;





    const urlSuffixRe = /\/$/;

    function main(...urls) {

        let len = urls.length,
            i = 0,
            result = [];

        for (; i < len; i++) {

            let part = urls[i] || '';

            part = part.replace(urlSuffixRe, '');

            if (isAbsolute(part)) {

                result.length = 0;

                result.push(part);

            } else if (part) {

                result.push(part);
            }
        }

        return result.join('/');
    }
    return function(...urls) {

        if (!__first_executed_1534834753743__) {
            isAbsolute = include('url.isAbsolute');

            __first_executed_1534834753743__ = true;
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

        }).call(this), ...urls);
    }


})();

exports['src::url.append'] = (() => {
    let isString;





    let __first_executed_1534834753743__ = false;



    function main(url, data) {



        let querystring;

        if (isString(data)) {

            querystring = data;

        } else {

            const {
                stringify
            } = require('querystring');

            querystring = stringify(data);

        }

        if (url.includes('?')) {

            return `${url}&${querystring}`;
        }

        return `${url}?${querystring}`;
    }
    return function(url, data) {

        if (!__first_executed_1534834753743__) {
            isString = include('is.string');

            __first_executed_1534834753743__ = true;
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

        }).call(this), url, data);
    }


})();

exports['src::xml.parse'] = (() => {










    const {
        DOMParser
    } = require('xmldom'),
        parser = new DOMParser();

    function main() {

        try {

            return parser.parseFromString(data, 'text/xml');

        } catch (err) {


        }

        return parser.parseFromString('<xml/>', 'text/xml');
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

exports['src::is.object'] = (() => {
    let isType;





    let __first_executed_1534834753743__ = false;



    function main(data) {



        return Object.prototype.toString.call(data) === '[object Object]';
    }
    return function(data) {

        if (!__first_executed_1534834753743__) {
            isType = include('is.type');

            __first_executed_1534834753743__ = true;
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

exports['src::object.keys'] = (() => {
    let isObject;





    let __first_executed_1534834753743__ = false;





    function main(data) {

        return get_keys(data);
    }

    function get_keys(data, rootKey = '') {

        let keys = Object.keys(data),
            result = [];

        for (let key of keys) {

            let value = data[key];

            if (isObject(value)) {

                result.push(...get_keys(value, `${rootKey}${key}.`));

            } else {

                result.push(`${rootKey}${key}`);
            }
        }

        return result;
    }
    return function(data) {

        if (!__first_executed_1534834753743__) {
            isObject = include('is.object');

            __first_executed_1534834753743__ = true;
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

exports['src::is.array'] = (() => {
    let isType;





    let __first_executed_1534834753743__ = false;



    function main(data) {



        return Array.isArray(data);
    }
    return function(data) {

        if (!__first_executed_1534834753743__) {
            isType = include('is.type');

            __first_executed_1534834753743__ = true;
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





    let __first_executed_1534834753744__ = false;



    function main(data, allowEmptyString) {



        return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data, allowEmptyString = false) {

        if (!__first_executed_1534834753744__) {
            isArray = include('is.array');

            __first_executed_1534834753744__ = true;
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

exports['src::string.split'] = (() => {
    let isEmpty;





    let __first_executed_1534834753744__ = false;





    function main(target, splitRe) {

        return target.split(splitRe).filter(filter);
    }

    function filter(target) {

        return !isEmpty(target);
    }
    return function(target, splitRe) {

        if (!__first_executed_1534834753744__) {
            isEmpty = include('is.empty');

            __first_executed_1534834753744__ = true;
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

        }).call(this), target, splitRe);
    }


})();

exports['src::object.set'] = (() => {
    let isObject, split;





    let __first_executed_1534834753744__ = false;





    const splitRe = /\./;

    function main(target, key, value) {

        if (splitRe.test(key)) {

            let keys = split(key, splitRe);

            key = keys.pop();

            for (let key of keys) {

                let data = target[key];

                if (!isObject(data)) {

                    data = target[key] = {};
                }

                target = data;
            }

            target[key] = value;

        } else {

            target[key] = value;
        }
    }
    return function(target, key, value) {

        if (!__first_executed_1534834753744__) {
            isObject = include('is.object');
            split = include('string.split');

            __first_executed_1534834753744__ = true;
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

        }).call(this), target, key, value);
    }


})();

exports['src::object.get'] = (() => {










    const splitRe = /\./;

    function main(data, key) {

        if (key) {

            if (key in data) {

                return data[key];
            }

            let names = key.split(splitRe),
                prefix = '';

            for (let name of names) {

                let key = `${prefix}${name}`;

                if (!data) {

                    break;
                }

                if (key in data) {

                    data = data[key];

                    prefix = '';

                } else {

                    prefix = `${key}.`;
                }
            }

            if (prefix) {

                return;
            }

            return data;
        }

        return data;

    }
    return function(data, key) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data, key);
    }


})();

exports['src::object.assign'] = (() => {
    let getKeys, set, get;





    let __first_executed_1534834753744__ = false;



    function main(dest, source) {



        let keys = getKeys(source);

        for (let key of keys) {

            set(dest, key, get(source, key));
        }

        return dest;
    }
    return function(dest, source) {

        if (!__first_executed_1534834753744__) {
            getKeys = include('object.keys');
            set = include('object.set');
            get = include('object.get');

            __first_executed_1534834753744__ = true;
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

        }).call(this), dest, source);
    }


})();

exports['config::http'] = {
    "default": {
        "timeout": 20000,
        "type": "json"
    }
};

exports['src::http.params.parse'] = (() => {
    let apply, isObject, isString, join, append, parse, assign, configHttp;
    let http;




    let __first_executed_1534834753745__ = false;





    function main(uri, method, params) {

        method = method.toUpperCase();

        let name;

        if (isString(params)) {

            name = params;

            params = {};

        } else if (isObject(params)) {

            name = params.name || 'default';

            delete params.name;

        } else {

            name = 'default';

            params = {};
        }

        let httpConfig = http[name];

        if (httpConfig) {

            let {
                root: rootPath,
                type,
                headers,
                timeout
            } = httpConfig, {
                request: requestType,
                response: responseType
            } = process_type(type);

            let {
                query,
                path,
                body,
                timeout: userTimeout
            } = params;

            return assign({
                uri: append(join(rootPath, apply(uri, path)), {
                    _dc: Date.now()
                }),
                timeout,
                requestTimeout: timeout || 0,
                method,
                headers,
                qs: query,
                transform: transform(responseType)
            }, process_body(body, requestType), process_timeout(userTimeout));
        }

        throw new Error('试图请求未注册的路径');
    }

    function process_timeout(timeout) {

        if (timeout) {

            return {
                timeout,
                requestTimeout: timeout
            };
        }

        return {};
    }

    function process_body(body, type) {

        switch (type) {

            case 'json':

                return {
                    body,
                    headers: {
                        'content-type': 'application/json'
                    },
                    json: true
                };

            case 'xml':

                return {
                    headers: {
                        'content-type': 'application/xml'
                    },
                    body
                };

            case 'form':

                return {
                    formData: body
                };

            case 'html':

                return {
                    headers: {
                        'content-type': 'text/html'
                    },
                    body
                };
        }

        return {
            body
        };;
    }

    function process_type(type) {

        if (isObject(type)) {

            let {
                request,
                response
            } = type;

            return {
                request,
                response
            };

        } else if (isString(type)) {

            return {
                request: type,
                response: type
            };
        }

        return {};
    }

    function transform_json(body) {

        if (isString(body)) {

            return JSON.parse(body);
        }

        return body;
    }

    function transform_xml(body) {

        return parse(body);
    }

    function transform_html(body) {


    }

    function transform_empty(body) {

        return body;
    }

    function transform(type) {

        switch (type) {

            case 'json':

                return transform_json;

            case 'xml':

                return transform_xml;

            case 'html':

                return transform_html;
        }

        return transform_empty;
    }
    return function(uri, method, params) {

        if (!__first_executed_1534834753745__) {
            apply = include('url.template.apply');
            isObject = include('is.object.simple');
            isString = include('is.string');
            join = include('url.join');
            append = include('url.append');
            parse = include('xml.parse');
            assign = include('object.assign');
            configHttp = include('config::http');
            http = config('http');
            __first_executed_1534834753745__ = true;
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

        }).call(this), uri, method, params);
    }


})();

exports['src::http.methods.get'] = (() => {
    let parse;





    let __first_executed_1534834753745__ = false;



    function main(uri, params) {



        return require('request-promise')(parse(uri, 'get', params));
    }
    return function(uri, params) {

        if (!__first_executed_1534834753745__) {
            parse = include('http.params.parse');

            __first_executed_1534834753745__ = true;
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

        }).call(this), uri, params);
    }


})();

exports['src::http.methods.post'] = (() => {
    let parse;





    let __first_executed_1534834753745__ = false;



    function main(uri, params) {



        return require('request-promise')(parse(uri, 'post', params));
    }
    return function(uri, params) {

        if (!__first_executed_1534834753745__) {
            parse = include('http.params.parse');

            __first_executed_1534834753745__ = true;
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

        }).call(this), uri, params);
    }


})();

exports['src::http.methods.put'] = (() => {
    let parse;





    let __first_executed_1534834753745__ = false;



    function main(uri, params) {



        return require('request-promise')(parse(uri, 'put', params));
    }
    return function(uri, params) {

        if (!__first_executed_1534834753745__) {
            parse = include('http.params.parse');

            __first_executed_1534834753745__ = true;
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

        }).call(this), uri, params);
    }


})();

exports['src::http.methods.delete'] = (() => {
    let parse;





    let __first_executed_1534834753745__ = false;



    function main(uri, params) {



        return require('request-promise')(parse(uri, 'delete', params));
    }
    return function(uri, params) {

        if (!__first_executed_1534834753745__) {
            parse = include('http.params.parse');

            __first_executed_1534834753745__ = true;
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

        }).call(this), uri, params);
    }


})();

exports['src::http'] = (() => {


    class Main {
        static get() {
            return include('http.methods.get').apply(this, arguments);
        }
        static post() {
            return include('http.methods.post').apply(this, arguments);
        }
        static put() {
            return include('http.methods.put').apply(this, arguments);
        }
        static delete() {
            return include('http.methods.delete').apply(this, arguments);
        }
    };


    return Main;

})();

exports['src::is.directory'] = (() => {








    function main(path) {



        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isDirectory();
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

exports['src::is.file'] = (() => {








    function main(path) {



        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isFile();
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

exports['src::directory.create'] = (() => {
    let isDirectory;





    let __first_executed_1534834753747__ = false;





    const {
        mkdirSync
    } = require('fs'),
        folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

    function main(path) {

        let folderNames = path.match(folderRe),
            folderPath = '';

        for (let folderName of folderNames) {

            folderPath += folderName;

            if (folderName !== '/' && !isDirectory(folderPath)) {

                mkdirSync(folderPath);
            }
        }
    }
    return function(path) {

        if (!__first_executed_1534834753747__) {
            isDirectory = include('is.directory');

            __first_executed_1534834753747__ = true;
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

        }).call(this), path);
    }


})();

exports['src::file.write'] = (() => {
    let create;





    let __first_executed_1534834753748__ = false;



    function main(path, data) {



        const {
            writeFileSync
        } = require('fs'), {
            dirname
        } = require('path');

        create(dirname(path));

        writeFileSync(path, data);
    }
    return function(path, data) {

        if (!__first_executed_1534834753748__) {
            create = include('directory.create');

            __first_executed_1534834753748__ = true;
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

        }).call(this), path, data);
    }


})();

exports['src::file.write.json'] = (() => {
    let write;





    let __first_executed_1534834753748__ = false;



    function main(path, data) {



        write(path, JSON.stringify(data, null, 2));
    }
    return function(path, data) {

        if (!__first_executed_1534834753748__) {
            write = include('file.write');

            __first_executed_1534834753748__ = true;
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

        }).call(this), path, data);
    }


})();

exports['src::html.format'] = (() => {
    let isString;





    let __first_executed_1534834753748__ = false;



    function main(data) {



        const {
            minify
        } = require('html-minifier'), {
            html
        } = require('js-beautify');

        if (!isString(data)) {

            data = `<!DOCTYPE html>\n${data.documentElement.outerHTML}`;
        }

        return html(minify(data, {
            collapseWhitespace: true
        }));
    }
    return function(data) {

        if (!__first_executed_1534834753748__) {
            isString = include('is.string');

            __first_executed_1534834753748__ = true;
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

exports['src::file.write.html'] = (() => {
    let write, format;





    let __first_executed_1534834753748__ = false;



    function main(path, doc) {



        write(path, format(doc));
    }
    return function(path, doc) {

        if (!__first_executed_1534834753748__) {
            write = include('file.write');
            format = include('html.format');

            __first_executed_1534834753748__ = true;
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

        }).call(this), path, doc);
    }


})();

exports['src::file.read.text'] = (() => {
    let isFile;





    let __first_executed_1534834753748__ = false;



    function main(path) {



        const {
            readFileSync
        } = require('fs');

        if (isFile(path)) {

            return readFileSync(path, 'utf8');
        }
    }
    return function(path) {

        if (!__first_executed_1534834753748__) {
            isFile = include('is.file');

            __first_executed_1534834753748__ = true;
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

        }).call(this), path);
    }


})();

exports['src::template.apply'] = (() => {
    let read;





    let __first_executed_1534834753748__ = false;





    const
        TEMPLATES = {},
        {
            compile
        } = require('ejs');

    function main(name, data) {

        if (!TEMPLATES.hasOwnProperty(name)) {

            let template;

            try {

                template = include(`template::${name}`);

            } catch (err) {

                template = read(name);
            }

            if (template) {

                TEMPLATES[name] = compile(template);

            } else {

                TEMPLATES[name] = emptyFn;
            }
        }

        return TEMPLATES[name]({
            data,
            apply: main
        });
    }

    function emptyFn() {

        return '';
    }
    return function(name, data = {}) {

        if (!__first_executed_1534834753748__) {
            read = include('file.read.text');

            __first_executed_1534834753748__ = true;
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

        }).call(this), name, data);
    }


})();

exports['src::html.parse'] = (() => {








    function main(html) {


        const {
            JSDOM
        } = require('jsdom'), {
            window
        } = new JSDOM(html, {
            features: {
                FetchExternalResources: false,
                ProcessExternalResources: false
            }
        });

        return window.document;
    }
    return function(html) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), html);
    }


})();

exports['src::html.load'] = (() => {
    let parse, read;





    let __first_executed_1534834753748__ = false;



    function main(path) {



        return parse(read(path));
    }
    return function(path) {

        if (!__first_executed_1534834753748__) {
            parse = include('html.parse');
            read = include('file.read.text');

            __first_executed_1534834753748__ = true;
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