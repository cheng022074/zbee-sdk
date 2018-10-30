const {
    env
} = process;

if (!env['ZBEE-APPLICATION-ROOT-PATH']) {

    env['ZBEE-APPLICATION-ROOT-PATH'] = __dirname;
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



        try {

            const {
                env
            } = process;

            let data;

            try {

                data = require(`${env['ZBEE-APPLICATION-ROOT-PATH']}/config/${name.replace(/\./g , '/')}.json`);

            } catch (err) {}

            if (data) {

                return get_config(data, key);
            }

        } catch (err) {

        }


        if (config.hasOwnProperty(name)) {

            return get_config(config[name], key);
        }

        return get_config(include(`config::${name}`), key);
    }

})();


exports['src::database.properties.databases'] = (() => {




    let __once_1540778997099_value__,
        __once_1540778997099_locked__ = false;





    function main() {



        return new Map();
    }
    return function() {


        if (__once_1540778997099_locked__) {

            return __once_1540778997099_value__;

        }

        __once_1540778997099_locked__ = true;

        return __once_1540778997099_value__ = main.call((function() {

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

exports['src::database.connection.type'] = (() => {








    function main(name) {



        let databaseConfig = config('database', name);

        if (databaseConfig) {

            let {
                type
            } = databaseConfig;

            return type || 'mongodb';
        }

        throw new Error(`${name} 无效的数据库配置`);
    }
    return function(name = 'default') {


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

exports['src::database.connection.config'] = (() => {








    function main(name) {



        let databaseConfig = config('database', name);

        if (databaseConfig) {

            let {
                type,
                backup,
                ...proxyConfig
            } = databaseConfig;

            return proxyConfig;
        }

        throw new Error(`${name} 无效的数据库配置`);
    }
    return function(name = 'default') {


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

exports['src::is.defined'] = (() => {








    function main(data) {



        return data !== undefined;
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

exports['src::database.mongodb.open'] = (() => {
    let isDefined, getMap;





    let __first_executed_1540778997100__ = false;





    const {
        MongoClient
    } = require('mongodb');

    async function main(map, name, {
        host,
        port,
        database,
        user,
        password
    }) {

        let client = await MongoClient.connect(`mongodb://${host}:${port}/${database}`, {
            auth: {
                user,
                password
            },
            useNewUrlParser: true
        });

        map.set(name, new DB(client, client.db(database)));
    }

    class DB {

        constructor(client, db) {

            let me = this;

            me.client = client,
                me.db = db;

        }

        close() {

            return this.client.close();
        }
    }
    return async function(map, name, config) {

        if (!__first_executed_1540778997100__) {
            isDefined = include('is.defined');
            getMap = include('database.properties.databases');

            __first_executed_1540778997100__ = true;
        }


        return await main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), map, name, config);
    }


})();

exports['src::database.methods.open'] = (() => {
    let getMap, getConnectionType, getConnectionConfig, databaseMongodbOpen;





    let __first_executed_1540778997100__ = false;



    async function main(name) {



        let databaseConfig = config('database', name);

        if (databaseConfig) {

            let open,
                config = getConnectionConfig(name);

            try {

                open = include(`database.${getConnectionType(name)}.open`);

            } catch (err) {

                throw new Error(`系统无法连接此类型数据库:${JSON.stringify(config)}`);
            }

            await open(getMap(), name, config);

        } else {

            throw new Error(`${name} 无效的数据库配置`);
        }
    }
    return async function(name = 'default') {

        if (!__first_executed_1540778997100__) {
            getMap = include('database.properties.databases');
            getConnectionType = include('database.connection.type');
            getConnectionConfig = include('database.connection.config');
            databaseMongodbOpen = include('database.mongodb.open');

            __first_executed_1540778997100__ = true;
        }


        return await main.call((function() {

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

exports['src::database.methods.close'] = (() => {
    let getMap;





    let __first_executed_1540778997100__ = false;



    async function main(name) {



        let database = getMap().get(name);

        if (database) {

            database.close();

        } else {

            throw new Error(`${name} 无效的数据库配置`);
        }
    }
    return async function(name = 'default') {

        if (!__first_executed_1540778997100__) {
            getMap = include('database.properties.databases');

            __first_executed_1540778997100__ = true;
        }


        return await main.call((function() {

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

exports['src::database'] = (() => {


    class Main {
        static open() {
            return include('database.methods.open').apply(this, arguments);
        }
        static close() {
            return include('database.methods.close').apply(this, arguments);
        }
    };


    return Main;

})();

exports['src::database.mongodb.collection.find'] = (() => {








    async function main({
        collection,
        db,
        query
    }) {



        return await db.db.collection(collection).find(query).toArray();
    }
    return async function({
        collection,
        db,
        query
    } = {}) {


        return await main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), {
            collection,
            db,
            query
        });
    }


})();

exports['src::database.collection.find'] = (() => {
    let getMap, getConnectionType, databaseMongodbCollectionFind;





    let __first_executed_1540778997102__ = false;



    async function main({
        collection,
        connection,
        query
    }) {



        let map = getMap();

        if (map.has(connection)) {

            return await include(`database.${getConnectionType(connection)}.collection.find`)({
                db: map.get(connection),
                collection,
                query
            });
        }

        return [];
    }
    return async function({
        collection,
        connection = 'default',
        query
    } = {}) {

        if (!__first_executed_1540778997102__) {
            getMap = include('database.properties.databases');
            getConnectionType = include('database.connection.type');
            databaseMongodbCollectionFind = include('database.mongodb.collection.find');

            __first_executed_1540778997102__ = true;
        }


        return await main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), {
            collection,
            connection,
            query
        });
    }


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

exports['src::directory.create'] = (() => {
    let isDirectory;





    let __first_executed_1540778997102__ = false;





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

        if (!__first_executed_1540778997102__) {
            isDirectory = include('is.directory');

            __first_executed_1540778997102__ = true;
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





    let __first_executed_1540778997103__ = false;



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

        if (!__first_executed_1540778997103__) {
            create = include('directory.create');

            __first_executed_1540778997103__ = true;
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





    let __first_executed_1540778997103__ = false;



    function main(data) {



        return Array.isArray(data);
    }
    return function(data) {

        if (!__first_executed_1540778997103__) {
            isType = include('is.type');

            __first_executed_1540778997103__ = true;
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

exports['src::script.format'] = (() => {








    function main(data) {



        const {
            js
        } = require('js-beautify');

        try {

            return js(data);

        } catch (err) {


        }

        return data;
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

exports['template::database.backup'] = `module.exports = <%- data.code %>`

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

exports['src::file.read'] = (() => {
    let isFile;





    let __first_executed_1540778997104__ = false;



    function main(path) {



        const {
            readFileSync
        } = require('fs');

        if (isFile(path)) {

            return readFileSync(path);
        }
    }
    return function(path) {

        if (!__first_executed_1540778997104__) {
            isFile = include('is.file');

            __first_executed_1540778997104__ = true;
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

exports['src::file.read.text'] = (() => {
    let read;





    let __first_executed_1540778997104__ = false;



    function main(path) {



        let data = read(path);

        if (data) {

            return data.toString('utf8');
        }
    }
    return function(path) {

        if (!__first_executed_1540778997104__) {
            read = include('file.read');

            __first_executed_1540778997104__ = true;
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





    let __first_executed_1540778997104__ = false;





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

        if (!__first_executed_1540778997104__) {
            read = include('file.read.text');

            __first_executed_1540778997104__ = true;
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

exports['src::database.collection.stringify'] = (() => {
    let isArray, isObject, format, templateDatabaseBackup, apply;





    let __first_executed_1540778997104__ = false;





    function main(data, name) {

        let databaseConfig = config('database', name);

        if (!databaseConfig) {

            throw new Error(`${name} 无效的数据库配置`);
        }

        let {
            backup
        } = databaseConfig;

        let {
            datatype,
            converts,
            template
        } = backup || {},
            typeFn = datatype ? include(datatype) : gettype,
            convertFns = {};

        template = template || 'database.backup';

        if (converts) {

            let names = Object.keys(converts);

            for (let name of names) {

                convertFns[name] = include(converts[name]);
            }
        }

        if (isObject(data)) {

            return return_value(template, processObject(data, typeFn, convertFns));

        } else if (isArray(data)) {

            return return_value(template, processArray(data, typeFn, convertFns));
        }
    }

    function return_value(template, code) {

        return format(apply(template, {
            code
        }));
    }

    function processArray(data, typeFn, convertFns) {

        let result = [];

        for (let item of data) {

            if (isArray(item)) {

                result.push(processArray(item, typeFn, convertFns));

            } else if (isObject(item)) {

                result.push(processObject(item, typeFn, convertFns));

            } else {

                let type = typeFn(item);

                if (type) {

                    let convertFn = convertFns[type];

                    if (convertFn) {

                        result.push(convertFn(item));

                        continue;
                    }
                }

                result.push(JSON.stringify(item, null, 2));
            }


        }

        return `[${result.join(',')}]`;
    }

    function processObject(data, typeFn, convertFns) {

        let names = Object.keys(data),
            result = [];

        for (let name of names) {

            let item = data[name];

            if (isArray(item)) {

                result.push(`${name}:${processArray(item , typeFn , convertFns)}`);

                continue;

            }

            if (isObject(item)) {

                result.push(`${name}:${processObject(item , typeFn , convertFns)}`);

                continue;

            }

            let type = typeFn(item);

            if (type) {

                let convertFn = convertFns[type];

                if (convertFn) {

                    data[name] = convertFn(item);

                    result.push(`${name}:${convertFn(item)}`);

                    continue;
                }
            }

            result.push(`${name}:${JSON.stringify(item , null , 2)}`);
        }


        return `{${result.join(',')}}`;
    }
    return function(data, name = 'default') {

        if (!__first_executed_1540778997104__) {
            isArray = include('is.array');
            isObject = include('is.object.simple');
            format = include('script.format');
            templateDatabaseBackup = include('template::database.backup');
            apply = include('template.apply');

            __first_executed_1540778997104__ = true;
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

        }).call(this), data, name);
    }


})();

exports['src::database.mongodb.stringify.ObjectID'] = (() => {








    function main(id) {



        return `new ObjectID("${id}")`;
    }
    return function(id) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), id);
    }


})();

exports['src::database.stringify.Date'] = (() => {








    function main(date) {



        return `new Date("${date.toJSON()}")`;
    }
    return function(date) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), date);
    }


})();

exports['src::is.Date'] = (() => {








    function main(data) {




        return Object.prototype.toString.call(data) === '[object Date]';
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

exports['src::database.datatype'] = (() => {
    let isDate;





    let __first_executed_1540778997104__ = false;



    function main(data) {



        if (isDate(data)) {

            return 'date';
        }
    }
    return function(data) {

        if (!__first_executed_1540778997104__) {
            isDate = include('is.Date');

            __first_executed_1540778997104__ = true;
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

exports['src::database.mongodb.datatype'] = (() => {
    let getDataType;





    let __first_executed_1540778997104__ = false;



    function main(data) {



        const {
            ObjectID,
        } = require('mongodb');

        if (data instanceof ObjectID) {

            return 'oid';
        }

        return getDataType(data);
    }
    return function(data) {

        if (!__first_executed_1540778997104__) {
            getDataType = include('database.datatype');

            __first_executed_1540778997104__ = true;
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

exports['template::database.mongodb.backup'] = `const {
    ObjectID
} = require('mongodb') ;

module.exports = <%- data.code %> ;`

exports['src::date.format'] = (() => {










    const formatFn = require('dateformat');

    function main(date, format) {

        return formatFn(date, format);
    }
    return function(date, format) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), date, format);
    }


})();

exports['src::job.start'] = (() => {










    const {
        scheduleJob
    } = require('node-schedule');

    function main(corn, fn, scope) {

        return scheduleJob(corn, fn.bind(scope));
    }
    return function(cron, fn, scope) {


        return main.call((function() {

            let me = this,
                target;

            if (typeof global !== 'undefined') {

                target = global;

            } else {

                target = window;
            }

            return me === target ? main : me;

        }).call(this), cron, fn, scope);
    }


})();