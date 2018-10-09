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

})()

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


exports['src::array.removeByIndex'] = (() => {








    function main(data, index) {



        if (index >= 0 && index < data.length) {

            data.splice(index, 1);

            return true;
        }

        return false;
    }
    return function(data, index) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), data, index);
    }


})();

exports['src::array.remove'] = (() => {
    let remove;





    let __first_executed_1539062237078__ = false;



    function main(data, item) {



        return remove(data, data.indexOf(item));
    }
    return function(data, item) {

        if (!__first_executed_1539062237078__) {
            remove = include('array.removeByIndex');

            __first_executed_1539062237078__ = true;
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

        }).call(this), data, item);
    }


})();

exports['src::array.remove.all'] = (() => {
    let remove;





    let __first_executed_1539062237078__ = false;



    function main(data, item) {



        while (true) {

            if (remove(data, item) === false) {

                break;
            }
        }
    }
    return function(data, item) {

        if (!__first_executed_1539062237078__) {
            remove = include('array.remove');

            __first_executed_1539062237078__ = true;
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

        }).call(this), data, item);
    }


})();

exports['src::is.html.iframe'] = (() => {








    function main(el) {



        return el instanceof HTMLIFrameElement;
    }
    return function(el) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), el);
    }


})();

exports['src::browser.html.iframe'] = (() => {
    let isHtmlIframe;





    let __first_executed_1539062237078__ = false;



    function main(iframeEl) {



        if (!isHtmlIframe(iframeEl)) {

            return;
        }

        return new Promise(callback => {

            switch (iframeEl.readyState) {

                case 'complete':
                case 'loaded':

                    callback(iframeEl);

                    break;

                default:

                    iframeEl.addEventListener('load', () => {

                        callback(iframeEl);

                    });
            }

        });
    }
    return function(iframeEl) {

        if (!__first_executed_1539062237078__) {
            isHtmlIframe = include('is.html.iframe');

            __first_executed_1539062237078__ = true;
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

        }).call(this), iframeEl);
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





    let __first_executed_1539062237078__ = false;



    function main(data) {



        if (isObject(data)) {

            return data.hasOwnProperty('id') && data.hasOwnProperty('action');
        }

        return false;
    }
    return function(data) {

        if (!__first_executed_1539062237078__) {
            isObject = include('is.object.simple');

            __first_executed_1539062237078__ = true;
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





    let __first_executed_1539062237078__ = false;



    function main(message) {



        return is(message) && !message.hasOwnProperty('reply');
    }
    return function(message) {

        if (!__first_executed_1539062237078__) {
            is = include('connection.message.is');

            __first_executed_1539062237078__ = true;
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





    let __first_executed_1539062237079__ = false;



    function main(data) {



        return isType(data, 'string');
    }
    return function(data) {

        if (!__first_executed_1539062237079__) {
            isType = include('is.type');

            __first_executed_1539062237079__ = true;
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





    let __first_executed_1539062237079__ = false;



    function main(data) {



        return isType(data, 'function');
    }
    return function(data) {

        if (!__first_executed_1539062237079__) {
            isType = include('is.type');

            __first_executed_1539062237079__ = true;
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





    let __first_executed_1539062237079__ = false;



    function main(receiver, implementName, replyName, actionName) {



        let actionFn;

        if (isString(actionName)) {

            actionFn = include(actionName);

        } else if (isFunction(actionName)) {

            actionFn = actionName;

        } else {

            actionFn = emptyFn();
        }

        include(implementName)(receiver, async (message) => {

            if (isMain(message)) {

                include(replyName)(receiver, reply(message, await actionFn(message)));

            }

        });
    }
    return function(receiver, implementName, replyName, actionName) {

        if (!__first_executed_1539062237079__) {
            isMain = include('connection.message.is.main');
            reply = include('connection.message.reply');
            isString = include('is.string');
            isFunction = include('is.function');
            emptyFn = include('function.empty');

            __first_executed_1539062237079__ = true;
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








    function main(window, callback) {



        window.addEventListener('message', ({
            data
        }) => {

            callback(data);
        });
    }
    return function(window, callback) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), window, callback);
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





    let __first_executed_1539062237079__ = false;



    function main(window, actionFn) {



        receive(window, 'connection.receive.window', 'connection.reply.window', actionFn);
    }
    return function(window, actionFn) {

        if (!__first_executed_1539062237079__) {
            receive = include('connection.receive');
            connectionReceiveWindow = include('connection.receive.window');
            connectionReplyWindow = include('connection.reply.window');

            __first_executed_1539062237079__ = true;
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





    let __first_executed_1539062237079__ = false;



    function main(message) {



        return is(message) && message.hasOwnProperty('reply');
    }
    return function(message) {

        if (!__first_executed_1539062237079__) {
            is = include('connection.message.is');

            __first_executed_1539062237079__ = true;
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

exports['src::connection.message.is.reply.to'] = (() => {
    let isMain, isReply;





    let __first_executed_1539062237079__ = false;



    function main(replyMessage, message) {



        return isReply(replyMessage) && isMain(message) && replyMessage.id === message.id;
    }
    return function(replyMessage, message) {

        if (!__first_executed_1539062237079__) {
            isMain = include('connection.message.is.main');
            isReply = include('connection.message.is.reply');

            __first_executed_1539062237079__ = true;
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

        }).call(this), replyMessage, message);
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





    let __first_executed_1539062237079__ = false;



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

        if (!__first_executed_1539062237079__) {
            isReply = include('connection.message.is.reply');
            isReplyTo = include('connection.message.is.reply.to');
            result = include('connection.message.reply.result');

            __first_executed_1539062237079__ = true;
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








    function main(target, message, fn) {



        target.postMessage(message, '*');

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
    return function(target, message, fn) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), target, message, fn);
    }


})();

exports['src::connection.message.package'] = (() => {










    let count = 0;

    function main(action, data) {

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





    let __first_executed_1539062237079__ = false;



    function main(window, action, data) {



        return send(window, 'connection.send.window', doPackage(action, data));
    }
    return function(window, action, data) {

        if (!__first_executed_1539062237079__) {
            send = include('connection.send');
            connectionSendWindow = include('connection.send.window');
            doPackage = include('connection.message.package');

            __first_executed_1539062237079__ = true;
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