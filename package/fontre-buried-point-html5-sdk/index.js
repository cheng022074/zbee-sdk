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





    let __first_executed_1536131309778__ = false;



    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1536131309778__) {
            isType = include('is.type');

            __first_executed_1536131309778__ = true;
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





    let __first_executed_1536131309779__ = false;





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

        if (!__first_executed_1536131309779__) {
            isAbsolute = include('url.isAbsolute');

            __first_executed_1536131309779__ = true;
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





    let __first_executed_1536131309779__ = false;



    function main(url, data) {



        let querystring;

        if (isString(data)) {

            querystring = data;

        } else {

            querystring = [];

            let names = Object.keys(data);

            for (let name of names) {

                querystring.push(`${name}=${encodeURIComponent(data[name])}`);
            }

            querystring = querystring.join('&');

        }

        if (url.includes('?')) {

            return `${url}&${querystring}`;
        }

        return `${url}?${querystring}`;
    }
    return function(url, data) {

        if (!__first_executed_1536131309779__) {
            isString = include('is.string');

            __first_executed_1536131309779__ = true;
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

exports['config::http'] = {
    "default": {
        "timeout": 20000,
        "type": "json"
    }
};

exports['src::http.config.parse'] = (() => {
    let apply, isObject, isString, join, append, configHttp;
    let http;




    let __first_executed_1536131309780__ = false;



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
                root: rootURL,
                type,
                headers,
                timeout
            } = httpConfig, {
                query,
                path,
                body,
                timeout: userTimeout
            } = params;

            return {
                url: append(join(rootURL, apply(uri, path)), Object.assign({
                    _dc: Date.now()
                }, query)),
                type,
                headers,
                method,
                body,
                timeout: timeout || userTimeout
            };
        }

        throw new Error('试图请求未注册的路径');
    }
    return function(uri, method = 'GET', params) {

        if (!__first_executed_1536131309780__) {
            apply = include('url.template.apply');
            isObject = include('is.object.simple');
            isString = include('is.string');
            join = include('url.join');
            append = include('url.append');
            configHttp = include('config::http');
            http = config('http');
            __first_executed_1536131309780__ = true;
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

exports['src::http.request'] = (() => {
    let parse, isString, isObject;





    let __first_executed_1536131309780__ = false;





    const
        request = require('request-promise'),
        {
            assign
        } = Object;

    function main(uri, methodName, params) {

        let {
            url,
            type,
            headers,
            method,
            timeout,
            body
        } = parse(uri, methodName, params), {
            request: requestType,
            response: responseType
        } = process_type(type);

        return request(assign({
                uri: url,
                method,
                headers,
                transform: transform(responseType)
            },
            process_body(body, requestType),
            process_timeout(timeout)
        ));
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

        if (!__first_executed_1536131309780__) {
            parse = include('http.config.parse');
            isString = include('is.string');
            isObject = include('is.object.simple');

            __first_executed_1536131309780__ = true;
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

exports['src::http.post'] = (() => {
    let request;





    let __first_executed_1536131309780__ = false;



    function main(uri, params) {



        return request(uri, 'post', params);
    }
    return function(uri, params) {

        if (!__first_executed_1536131309780__) {
            request = include('http.request');

            __first_executed_1536131309780__ = true;
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