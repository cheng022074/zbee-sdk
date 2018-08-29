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

    const
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

exports['src::connection.message.is'] = (() => {
    let isObject;





    let __first_executed_1535529812703__ = false;



    function main(data) {



        if (isObject(data)) {

            return data.hasOwnProperty('id') && data.hasOwnProperty('action');
        }

        return false;
    }
    return function(data) {

        if (!__first_executed_1535529812703__) {
            isObject = include('is.object.simple');

            __first_executed_1535529812703__ = true;
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

exports['src::connection.message.is.main'] = (() => {
    let is;





    let __first_executed_1535529812703__ = false;



    function main(message) {



        return is(message) && !message.hasOwnProperty('reply');
    }
    return function(message) {

        if (!__first_executed_1535529812703__) {
            is = include('connection.message.is');

            __first_executed_1535529812703__ = true;
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

        }).call(this), message);
    }


})();

exports['src::connection.message.reply'] = (() => {








    function main(message, data) {



        if (data) {

            return {
                ...message,
                reply: {
                    data
                }
            };
        }

        return {
            ...message,
            reply: false
        };
    }
    return function(message, data) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), message, data);
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





    let __first_executed_1535529812703__ = false;



    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1535529812703__) {
            isType = include('is.type');

            __first_executed_1535529812703__ = true;
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

exports['src::is.function'] = (() => {
    let isType;





    let __first_executed_1535529812703__ = false;



    function main(data) {



        return isType(data, 'function');
    }
    return function(data) {

        if (!__first_executed_1535529812703__) {
            isType = include('is.type');

            __first_executed_1535529812703__ = true;
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

exports['src::function.empty'] = (() => {










    const emptyFn = () => {};

    function main() {

        return emptyFn;
    }
    return function() {


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

exports['src::connection.receive'] = (() => {
    let isMain, reply, isString, isFunction, emptyFn;





    let __first_executed_1535529812704__ = false;



    function main(receiver, implementName, replyName, actionName) {



        let actionFn;

        if (isString(actionName)) {

            actionFn = include(actionName);

        } else if (isString(actionName)) {

            actionFn = actionName;

        } else {

            actionFn = emptyFn();
        }

        include(implementName)(receiver).then(async (message) => {

            if (isMain(message)) {

                include(replyName)(receiver, reply(reply, message, await actionFn(message)));

            }

        });
    }
    return function(receiver, implementName, replyName, actionName) {

        if (!__first_executed_1535529812704__) {
            isMain = include('connection.message.is.main');
            reply = include('connection.message.reply');
            isString = include('is.string');
            isFunction = include('is.function');
            emptyFn = include('function.empty');

            __first_executed_1535529812704__ = true;
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

        }).call(this), receiver, implementName, replyName, actionName);
    }


})();

exports['src::connection.receive.window'] = (() => {








    function main(window) {



        window.addEventListener('message', ({
            data
        }) => {

            callback(data);
        });
    }
    return function(window) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), window);
    }


})();

exports['src::connection.reply.window'] = (() => {








    function main(window, message) {



        window.postMessage(message, '*');
    }
    return function(window, message) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), window, message);
    }


})();

exports['src::connection.window.receive'] = (() => {
    let receive, connectionReceiveWindow, connectionReplyWindow;





    let __first_executed_1535529812704__ = false;



    function main(window, actionFn) {



        receive(window, 'connection.receive.window', 'connection.reply.window', actionFn);
    }
    return function(window, actionFn) {

        if (!__first_executed_1535529812704__) {
            receive = include('connection.receive');
            connectionReceiveWindow = include('connection.receive.window');
            connectionReplyWindow = include('connection.reply.window');

            __first_executed_1535529812704__ = true;
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

        }).call(this), window, actionFn);
    }


})();

exports['src::connection.message.is.reply'] = (() => {
    let is;





    let __first_executed_1535529812704__ = false;



    function main(message) {



        return is(message) && message.hasOwnProperty('reply');
    }
    return function(message) {

        if (!__first_executed_1535529812704__) {
            is = include('connection.message.is');

            __first_executed_1535529812704__ = true;
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

        }).call(this), message);
    }


})();

exports['src::connection.message.reply.result'] = (() => {








    function main(replyMessage) {



        let {
            reply
        } = replyMessage;

        if (reply !== false) {

            let {
                data
            } = reply;

            return data;
        }
    }
    return function(replyMessage) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), replyMessage);
    }


})();

exports['src::connection.send'] = (() => {
    let isReply, isReplyTo, result;





    let __first_executed_1535529812704__ = false;



    function main(sender, implementName, message) {



        return new Promise(callback => {

            include(implementName)(sender, message, replyMessage => {

                if (isReplyTo(replyMessage, message)) {

                    callback(result(replyMessage));

                    return true;
                }

            });
        });
    }
    return function(sender, implementName, message) {

        if (!__first_executed_1535529812704__) {
            isReply = include('connection.message.is.reply');
            isReplyTo = include('connection.message.is.reply.to');
            result = include('connection.message.reply.result');

            __first_executed_1535529812704__ = true;
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

        }).call(this), sender, implementName, message);
    }


})();

exports['src::connection.send.window'] = (() => {








    function main(window, message, fn) {



        window.postMessage(message, '*');

        const
            callback = ({
                data
            }) => {

                if (fn(data) === true) {

                    window.removeEventListener('message', callback);
                }
            };

        window.addEventListener('message', callback);
    }
    return function(window, message, fn) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), window, message, fn);
    }


})();

exports['src::connection.message.package'] = (() => {










    let count = 0;

    function main() {

        return {
            id: `${Date.now()}-${++ count}`,
            action,
            data
        };
    }
    return function(action, data) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), action, data);
    }


})();

exports['src::connection.window.send'] = (() => {
    let send, connectionSendWindow, doPackage;





    let __first_executed_1535529812704__ = false;



    function main(window, action, data) {



        return send(window, 'connection.send.window', doPackage(action, data));
    }
    return function(window, action, data) {

        if (!__first_executed_1535529812704__) {
            send = include('connection.send');
            connectionSendWindow = include('connection.send.window');
            doPackage = include('connection.message.package');

            __first_executed_1535529812704__ = true;
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

        }).call(this), window, action, data);
    }


})();