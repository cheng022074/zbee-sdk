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

    const config = {
        "vue": {
            "gestures": ["browser.event.gesture.tap"]
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



        if (config.hasOwnProperty(name)) {

            return get_config(config[name], key);
        }

        return get_config(include(`config::${name}`), key);
    }

})();


exports['src::os.name'] = (() => {




    let __once_1539328776915_value__,
        __once_1539328776915_locked__ = false;





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


        if (__once_1539328776915_locked__) {

            return __once_1539328776915_value__;

        }

        __once_1539328776915_locked__ = true;

        return __once_1539328776915_value__ = main.call((function() {

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



    let __once_1539328776915_value__,
        __once_1539328776915_locked__ = false;



    let __first_executed_1539328776915__ = false;



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

        if (!__first_executed_1539328776915__) {
            name = include('os.name');

            __first_executed_1539328776915__ = true;
        }


        if (__once_1539328776915_locked__) {

            return __once_1539328776915_value__;

        }

        __once_1539328776915_locked__ = true;

        return __once_1539328776915_value__ = main.call((function() {

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

exports['src::browser.event.init'] = (() => {




    let __once_1539328776916_value__,
        __once_1539328776916_locked__ = false;







    function preventDefault(e) {

        switch (e.target.tagName) {

            case 'INPUT':

                return;
        }

        e.preventDefault();
    }

    function main(target) {

        target.addEventListener('touchstart', preventDefault);

        target.addEventListener('touchmove', preventDefault);
    }
    return function(target = window) {


        if (__once_1539328776916_locked__) {

            return __once_1539328776916_value__;

        }

        __once_1539328776916_locked__ = true;

        return __once_1539328776916_value__ = main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), target);
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

exports['src::is.function'] = (() => {
    let isType;





    let __first_executed_1539328776916__ = false;



    function main(data) {



        return isType(data, 'function');
    }
    return function(data) {

        if (!__first_executed_1539328776916__) {
            isType = include('is.type');

            __first_executed_1539328776916__ = true;
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

exports['config::vue'] = {
    "gestures": [
        "browser.event.gesture.tap"
    ]
};

exports['src::vue.plugin.gestures'] = (() => {
    let isFunction, isObject, configVue;
    let plugins;


    let __once_1539328776917_value__,
        __once_1539328776917_locked__ = false;



    let __first_executed_1539328776917__ = false;





    const events = {};

    function process_event_name(name) {

        return `touch:${name}`;
    }

    function process_event_listener(listener) {

        if (isObject(listener)) {

            if (listener.hasOwnProperty('fn')) {

                let config = Object.assign({}, listener);

                delete config.fn;

                return {
                    fn: listener.fn,
                    config
                };
            }

        } else if (isFunction(listener)) {

            return {
                fn: listener,
                config: {}
            };
        }

        return {};
    }

    function adddEventListener(el, name, listener, isInstall = true) {

        name = process_event_name(name);

        let {
            fn,
            config
        } = process_event_listener(listener);

        if (isFunction(fn)) {

            if (events.hasOwnProperty(name)) {

                if (isInstall) {

                    events[name].install(el, config);
                }

                el.addEventListener(name, fn);
            }
        }
    }

    function removeEventListener(el, name, listener, isUninstall = true) {

        name = process_event_name(name);

        let {
            fn
        } = process_event_listener(listener);

        if (isFunction(fn)) {

            if (events.hasOwnProperty(name)) {

                if (isUninstall) {

                    events[name].uninstall(el);
                }

                el.removeEventListener(name, fn);
            }

        }
    }

    function bind(el, {
        value: fn,
        arg: name
    }) {
        adddEventListener(el, name, fn);

    }

    function unbind(el, {
        value: fn,
        arg: name
    }) {

        removeEventListener(el, name, fn);
    }

    function update(el, {
        value: fn,
        oldValue: oldFn,
        arg: name
    }) {

        removeEventListener(el, name, oldFn, false),
            adddEventListener(el, name, fn, false);
    }

    function main() {

        for (let plugin of plugins) {

            plugin = include(plugin);

            let {
                handledEvents
            } = plugin;

            for (let handledEvent of handledEvents) {

                events[handledEvent] = plugin;
            }
        }

        return {
            install(Vue) {

                Vue.directive('touch', {
                    bind,
                    unbind,
                    update
                });
            }
        };
    };
    return function() {

        if (!__first_executed_1539328776917__) {
            isFunction = include('is.function');
            isObject = include('is.object.simple');
            configVue = include('config::vue');
            plugins = config('vue', 'gestures');
            __first_executed_1539328776917__ = true;
        }


        if (__once_1539328776917_locked__) {

            return __once_1539328776917_value__;

        }

        __once_1539328776917_locked__ = true;

        return __once_1539328776917_value__ = main.call((function() {

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

exports['src::browser.event.gesture.tap.properties.handleEvents'] = (() => {




    let __once_1539328776917_value__,
        __once_1539328776917_locked__ = false;





    function main() {



        return [
            'touch:beforetap',
            'touch:tap',
            'touch:tapcancel'
        ];
    }
    return function() {


        if (__once_1539328776917_locked__) {

            return __once_1539328776917_value__;

        }

        __once_1539328776917_locked__ = true;

        return __once_1539328776917_value__ = main.call((function() {

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

exports['src::browser.embed.name'] = (() => {




    let __once_1539328776917_value__,
        __once_1539328776917_locked__ = false;





    function main() {



        const NAMES = {
            ue4: 'UE4',
            unity: 'U3D',
            other: 'Other'
        };

        return NAMES[(navigator.userAgent.toLowerCase().match(/ue4|unity/) || ['other'])[0]];
    }
    return function() {


        if (__once_1539328776917_locked__) {

            return __once_1539328776917_value__;

        }

        __once_1539328776917_locked__ = true;

        return __once_1539328776917_value__ = main.call((function() {

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

exports['src::browser.support.touch'] = (() => {
    let osName, getName;



    let __once_1539328776917_value__,
        __once_1539328776917_locked__ = false;



    let __first_executed_1539328776917__ = false;



    function main() {



        const isTouch = window.hasOwnProperty('ontouchstart');

        if (osName() === 'Windows') {

            let name = getName();

            return isTouch && name !== 'U3D' && name !== 'UE4';
        }

        return isTouch;
    }
    return function() {

        if (!__first_executed_1539328776917__) {
            osName = include('os.name');
            getName = include('browser.embed.name');

            __first_executed_1539328776917__ = true;
        }


        if (__once_1539328776917_locked__) {

            return __once_1539328776917_value__;

        }

        __once_1539328776917_locked__ = true;

        return __once_1539328776917_value__ = main.call((function() {

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

exports['src::browser.event.pointer'] = (() => {
    let isTouch;





    let __first_executed_1539328776918__ = false;



    function main(e, valid) {



        if (isTouch()) {

            let {
                changedTouches: touches
            } = e;

            if (valid) {

                if (touches.length == 1) {

                    return touches[0];
                }

            } else {

                return touches[0];
            }
        }

        return e;
    }
    return function(e, valid = false) {

        if (!__first_executed_1539328776918__) {
            isTouch = include('browser.support.touch');

            __first_executed_1539328776918__ = true;
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

        }).call(this), e, valid);
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

exports['src::map.event.listener'] = (() => {
    let remove;



    let __once_1539328776918_value__,
        __once_1539328776918_locked__ = false;



    let __first_executed_1539328776918__ = false;



    function main() {



        class Map {

            constructor() {

                let me = this;

                me.functions = [];

                me.scopes = [];

                me.results = [];
            }

            indexOf(fn, scope) {

                let {
                    functions,
                    scopes
                } = this,
                len = functions.length;

                for (let i = 0; i < len; i++) {

                    if (functions[i] === fn && scopes[i] === scope) {

                        return i;
                    }
                }

                return -1;
            }

            get(fn, scope) {

                let
                    me = this,
                    {
                        functions,
                        scopes,
                        results
                    } = me,
                    index = me.indexOf(fn, scope);

                if (index !== -1) {

                    return results[index];
                }

                functions.push(fn);

                fn = fn.bind(scope);

                scopes.push(scope);

                results.push(fn);

                return fn;
            }

            remove(fn, scope) {

                let
                    me = this,
                    {
                        functions,
                        scopes,
                        results
                    } = me,
                    index = me.indexOf(fn, scope);

                if (index !== -1) {

                    remove(functions, index);

                    remove(scopes, index);

                    remove(results, index);
                }
            }
        }

        return new Map();
    }
    return function() {

        if (!__first_executed_1539328776918__) {
            remove = include('array.removeByIndex');

            __first_executed_1539328776918__ = true;
        }


        if (__once_1539328776918_locked__) {

            return __once_1539328776918_value__;

        }

        __once_1539328776918_locked__ = true;

        return __once_1539328776918_value__ = main.call((function() {

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

exports['src::browser.html.event.listener.add'] = (() => {
    let getMap;





    let __first_executed_1539328776918__ = false;



    function main(target, event, fn, scope) {



        target.addEventListener(event, getMap().get(fn, scope));
    }
    return function(target, event, fn, scope) {

        if (!__first_executed_1539328776918__) {
            getMap = include('map.event.listener');

            __first_executed_1539328776918__ = true;
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

        }).call(this), target, event, fn, scope);
    }


})();

exports['src::browser.html.element.addWindowEventListener'] = (() => {
    let addEventListener;





    let __first_executed_1539328776918__ = false;



    function main(el, event, fn) {



        addEventListener(window, event, fn, el);
    }
    return function(el, event, fn) {

        if (!__first_executed_1539328776918__) {
            addEventListener = include('browser.html.event.listener.add');

            __first_executed_1539328776918__ = true;
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

        }).call(this), el, event, fn);
    }


})();

exports['src::math.point.distance'] = (() => {








    function main(point1, point2) {



        const {
            pow,
            sqrt
        } = Math;

        return sqrt(pow(point1.x - point2.x, 2) + pow(point1.y - point2.y, 2), 2);
    }
    return function(point1, point2) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), point1, point2);
    }


})();

exports['src::browser.html.event.listener.remove'] = (() => {
    let getMap;





    let __first_executed_1539328776918__ = false;



    function main(target, event, fn, scope) {



        let map = getMap();

        target.removeEventListener(event, map.get(fn, scope));

        map.remove(fn, scope);
    }
    return function(target, event, fn, scope) {

        if (!__first_executed_1539328776918__) {
            getMap = include('map.event.listener');

            __first_executed_1539328776918__ = true;
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

        }).call(this), target, event, fn, scope);
    }


})();

exports['src::browser.html.element.removeWindowEventListener'] = (() => {
    let removeEventListener;





    let __first_executed_1539328776918__ = false;



    function main(el, event, fn) {



        removeEventListener(window, event, fn, el);
    }
    return function(el, event, fn) {

        if (!__first_executed_1539328776918__) {
            removeEventListener = include('browser.html.event.listener.remove');

            __first_executed_1539328776918__ = true;
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

        }).call(this), el, event, fn);
    }


})();

exports['src::browser.event.dispatch'] = (() => {








    function main(target, name, detail) {



        target.dispatchEvent(new CustomEvent(name, {
            bubbles: false,
            detail
        }));
    }
    return function(target, name, detail) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), target, name, detail);
    }


})();

exports['src::object.data.name.signature'] = (() => {




    let __once_1539328776918_value__,
        __once_1539328776918_locked__ = false;





    function main() {



        return `zbee-key-${Date.now()}`;
    }
    return function() {


        if (__once_1539328776918_locked__) {

            return __once_1539328776918_value__;

        }

        __once_1539328776918_locked__ = true;

        return __once_1539328776918_value__ = main.call((function() {

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

exports['src::object.data.name'] = (() => {
    let signature;





    let __first_executed_1539328776918__ = false;



    function main(name) {



        return `${signature()}-${name}`;
    }
    return function(name) {

        if (!__first_executed_1539328776918__) {
            signature = include('object.data.name.signature');

            __first_executed_1539328776918__ = true;
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

exports['src::object.data.get'] = (() => {
    let getName;





    let __first_executed_1539328776918__ = false;



    function main(target, name) {



        return target[getName(name)];
    }
    return function(target, name) {

        if (!__first_executed_1539328776918__) {
            getName = include('object.data.name');

            __first_executed_1539328776918__ = true;
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

        }).call(this), target, name);
    }


})();

exports['src::object.data.set'] = (() => {
    let getName;





    let __first_executed_1539328776918__ = false;



    function main(target, name, value) {



        target[getName(name)] = value;
    }
    return function(target, name, value) {

        if (!__first_executed_1539328776918__) {
            getName = include('object.data.name');

            __first_executed_1539328776918__ = true;
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

        }).call(this), target, name, value);
    }


})();

exports['src::browser.event.gesture.tap.methods.onEnd'] = (() => {
    let disabled, dispatch, getEvent, get, set;





    let __first_executed_1539328776918__ = false;



    function main(e) {



        e.preventDefault();

        let el = this,
            event = getEvent(e),
            defer = get(el, 'tap:defer');

        dispatch(el, 'touch:beforetap', {
            browserEvent: e,
            event: getEvent(e)
        });

        if (defer) {

            set(el, 'tap:deferTimer', setTimeout(() => {

                dispatch(el, 'touch:tap', {
                    browserEvent: e,
                    event: getEvent(e)
                });

                disabled(el);

            }, defer));

        } else {

            dispatch(el, 'touch:tap', {
                browserEvent: e,
                event: getEvent(e)
            });

            disabled(el);
        }
    }
    return function(e) {

        if (!__first_executed_1539328776918__) {
            disabled = include('browser.event.gesture.tap.methods.disabled');
            dispatch = include('browser.event.dispatch');
            getEvent = include('browser.event.pointer');
            get = include('object.data.get');
            set = include('object.data.set');

            __first_executed_1539328776918__ = true;
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

        }).call(this), e);
    }


})();

exports['src::browser.event.pointer.move'] = (() => {
    let isTouch;



    let __once_1539328776918_value__,
        __once_1539328776918_locked__ = false;



    let __first_executed_1539328776918__ = false;



    function main() {



        return isTouch() ? 'touchmove' : 'pointermove';
    }
    return function() {

        if (!__first_executed_1539328776918__) {
            isTouch = include('browser.support.touch');

            __first_executed_1539328776918__ = true;
        }


        if (__once_1539328776918_locked__) {

            return __once_1539328776918_value__;

        }

        __once_1539328776918_locked__ = true;

        return __once_1539328776918_value__ = main.call((function() {

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

exports['src::browser.event.pointer.up'] = (() => {
    let isTouch;



    let __once_1539328776918_value__,
        __once_1539328776918_locked__ = false;



    let __first_executed_1539328776918__ = false;



    function main() {



        return isTouch() ? 'touchend' : 'pointerup';
    }
    return function() {

        if (!__first_executed_1539328776918__) {
            isTouch = include('browser.support.touch');

            __first_executed_1539328776918__ = true;
        }


        if (__once_1539328776918_locked__) {

            return __once_1539328776918_value__;

        }

        __once_1539328776918_locked__ = true;

        return __once_1539328776918_value__ = main.call((function() {

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

exports['src::object.data.remove'] = (() => {
    let getName;





    let __first_executed_1539328776919__ = false;



    function main(target, name) {



        delete target[getName(name)];
    }
    return function(target, name) {

        if (!__first_executed_1539328776919__) {
            getName = include('object.data.name');

            __first_executed_1539328776919__ = true;
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

        }).call(this), target, name);
    }


})();

exports['src::browser.event.gesture.tap.methods.disabled'] = (() => {
    let removeEventListener, onMove, onEnd, getMoveEventName, getUpEventName, get, remove, tap;





    let __first_executed_1539328776919__ = false;



    function main(el) {



        removeEventListener(el, getMoveEventName(), onMove);

        removeEventListener(el, getUpEventName(), onEnd);

        clearTimeout(get(el, 'tap:deferTimer'));

        remove(el, 'tap:deferTimer');

        remove(el, 'tap:startPoint');

        tap.locked = false;
    }
    return function(el) {

        if (!__first_executed_1539328776919__) {
            removeEventListener = include('browser.html.element.removeWindowEventListener');
            onMove = include('browser.event.gesture.tap.methods.onMove');
            onEnd = include('browser.event.gesture.tap.methods.onEnd');
            getMoveEventName = include('browser.event.pointer.move');
            getUpEventName = include('browser.event.pointer.up');
            get = include('object.data.get');
            remove = include('object.data.remove');
            tap = include('browser.event.gesture.tap');

            __first_executed_1539328776919__ = true;
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

        }).call(this), el);
    }


})();

exports['src::browser.scale'] = (() => {
    let osName;





    let __first_executed_1539328776919__ = false;



    function main() {



        switch (osName) {

            case 'iOS':
            case 'Android':

                return 1;
        }

        return window.devicePixelRatio;
    }
    return function() {

        if (!__first_executed_1539328776919__) {
            osName = include('os.name');

            __first_executed_1539328776919__ = true;
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

exports['config::gesture.tap'] = {
    "timeout": 100,
    "moveDistance": 100
};

exports['src::browser.event.gesture.tap.methods.onMove'] = (() => {
    let getEvent, getDistance, disabled, scale, get, dispatch, configGestureTap;
    let moveDistance;




    let __first_executed_1539328776919__ = false;



    function main(e) {



        e.preventDefault();

        let el = this,
            event = getEvent(e);

        if (Math.round(Math.abs(getDistance({
                x: event.pageX,
                y: event.pageY
            }, get(el, 'tap:startPoint')) * scale())) >= moveDistance) {

            dispatch(el, 'touch:tapcancel', {
                browserEvent: e,
                event
            });

            disabled(el);
        }
    }
    return function(e) {

        if (!__first_executed_1539328776919__) {
            getEvent = include('browser.event.pointer');
            getDistance = include('math.point.distance');
            disabled = include('browser.event.gesture.tap.methods.disabled');
            scale = include('browser.scale');
            get = include('object.data.get');
            dispatch = include('browser.event.dispatch');
            configGestureTap = include('config::gesture.tap');
            moveDistance = config('gesture.tap', 'moveDistance');
            __first_executed_1539328776919__ = true;
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

        }).call(this), e);
    }


})();

exports['src::browser.event.gesture.tap.methods.enabled'] = (() => {
    let addEventListener, onMove, onEnd, getMoveEventName, getUpEventName;





    let __first_executed_1539328776919__ = false;



    function main(el) {



        addEventListener(el, getMoveEventName(), onMove);

        addEventListener(el, getUpEventName(), onEnd);
    }
    return function(el) {

        if (!__first_executed_1539328776919__) {
            addEventListener = include('browser.html.element.addWindowEventListener');
            onMove = include('browser.event.gesture.tap.methods.onMove');
            onEnd = include('browser.event.gesture.tap.methods.onEnd');
            getMoveEventName = include('browser.event.pointer.move');
            getUpEventName = include('browser.event.pointer.up');

            __first_executed_1539328776919__ = true;
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

        }).call(this), el);
    }


})();

exports['src::object.data.has'] = (() => {
    let getName;





    let __first_executed_1539328776919__ = false;



    function main(target, name) {



        return target.hasOwnProperty(getName(name));
    }
    return function(target, name) {

        if (!__first_executed_1539328776919__) {
            getName = include('object.data.name');

            __first_executed_1539328776919__ = true;
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

        }).call(this), target, name);
    }


})();

exports['src::browser.event.gesture.tap.methods.onStart'] = (() => {
    let getEvent, enabled, set, get, has, tap, configGestureTap;
    let timeout;




    let __first_executed_1539328776919__ = false;



    function main(e) {



        let {
            locked,
            time
        } = tap;

        if (locked === true) {

            return;
        }

        let currentTime = Date.now();

        if (time && currentTime - time <= timeout) {

            return;
        }

        tap.time = currentTime;

        tap.locked = true;

        e.preventDefault();

        let event = getEvent(e, true);

        if (!event) {

            return;
        }

        let el = this;

        set(el, 'tap:startPoint', {
            x: event.pageX,
            y: event.pageY
        });

        if (has(el, 'tap:defer')) {

            clearTimeout(get(el, 'tap:deferTimer'));
        }

        enabled(el);
    }
    return function(e) {

        if (!__first_executed_1539328776919__) {
            getEvent = include('browser.event.pointer');
            enabled = include('browser.event.gesture.tap.methods.enabled');
            set = include('object.data.set');
            get = include('object.data.get');
            has = include('object.data.has');
            tap = include('browser.event.gesture.tap');
            configGestureTap = include('config::gesture.tap');
            timeout = config('gesture.tap', 'timeout');
            __first_executed_1539328776919__ = true;
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

        }).call(this), e);
    }


})();

exports['src::browser.event.pointer.down'] = (() => {
    let isTouch;



    let __once_1539328776919_value__,
        __once_1539328776919_locked__ = false;



    let __first_executed_1539328776919__ = false;



    function main() {



        return isTouch() ? 'touchstart' : 'pointerdown';
    }
    return function() {

        if (!__first_executed_1539328776919__) {
            isTouch = include('browser.support.touch');

            __first_executed_1539328776919__ = true;
        }


        if (__once_1539328776919_locked__) {

            return __once_1539328776919_value__;

        }

        __once_1539328776919_locked__ = true;

        return __once_1539328776919_value__ = main.call((function() {

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

exports['src::browser.event.gesture.tap.methods.install'] = (() => {
    let onStart, getEventName, set;





    let __first_executed_1539328776919__ = false;



    function main(el, config) {



        if (config) {

            let {
                defer
            } = config;

            if (defer) {

                set(el, 'tap:defer', defer);
            }
        }

        el.addEventListener(getEventName(), onStart);
    }
    return function(el, config) {

        if (!__first_executed_1539328776919__) {
            onStart = include('browser.event.gesture.tap.methods.onStart');
            getEventName = include('browser.event.pointer.down');
            set = include('object.data.set');

            __first_executed_1539328776919__ = true;
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

        }).call(this), el, config);
    }


})();

exports['src::browser.event.gesture.tap.methods.uninstall'] = (() => {
    let onStart, getEventName;





    let __first_executed_1539328776919__ = false;



    function main(el) {



        el.removeEventListener(getEventName(), onStart);
    }
    return function(el) {

        if (!__first_executed_1539328776919__) {
            onStart = include('browser.event.gesture.tap.methods.onStart');
            getEventName = include('browser.event.pointer.down');

            __first_executed_1539328776919__ = true;
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

        }).call(this), el);
    }


})();

exports['src::browser.event.gesture.tap'] = (() => {


    class Main {
        static get handledEvents() {
            return include('browser.event.gesture.tap.properties.handleEvents').call(this);
        }
        static install() {
            return include('browser.event.gesture.tap.methods.install').apply(this, arguments);
        }
        static uninstall() {
            return include('browser.event.gesture.tap.methods.uninstall').apply(this, arguments);
        }
    };


    return Main;

})();