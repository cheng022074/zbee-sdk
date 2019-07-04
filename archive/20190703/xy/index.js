exports['src::array.clear'] = (() => {









    function main(data) {


        /**
         * 
         * 清除数组
         * 
         * @param {array} data 数组
         * 
         * 
         */

        data.splice(0, data.length);

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::array.clone'] = (() => {









    function main(data) {


        /**
         * 
         * 对于数组进行拷贝
         * 
         * @param {array} data 数组
         * 
         * 
         */

        return data.slice(0);

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::is.type'] = (() => {









    function main(data, type) {

        /**
         * 
         * 对于 typeof 的简单封装
         * 
         * @param {mixed} data 检验数据
         * 
         * @param {string} type 检验数据类型
         * 
         * @return {boolean} 如果检验数据的数据类型与检验数据类型一致，则返回 true，否则返回 false 
         * 
         */

        return typeof data === type;

    }

    return function(data, type) {





        return main.call(this, data, type);
    };

})();

exports['src::is.array'] = (() => {

    let isType;

    let var_init_locked_1562145552997;





    function main(data) {

        /**
         * 
         * 判定数据是否为数组类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为数组类型则返回 true , 否则返回 false 
         * 
         */

        return Array.isArray(data);

    }

    return function(data) {


        if (!var_init_locked_1562145552997) {

            isType = include('is.type');

            var_init_locked_1562145552997 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.empty'] = (() => {

    let isArray;

    let var_init_locked_1562145553001;





    function main(data, allowEmptyString) {

        /**
         * 
         * 判定数据是否为空
         * 
         * @import is.array
         * 
         * @param {mixed} data 检验数据
         * 
         * @param {boolean} [allowEmptyString = false] 是否视空符串不为空，默认空符串为空
         * 
         * @return {mixed} 如果给定值为空则返回 true , 否则返回 false  
         * 
         */

        return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);

    }

    return function(data, allowEmptyString = false) {


        if (!var_init_locked_1562145553001) {

            isArray = include('is.array');

            var_init_locked_1562145553001 = true;
        }




        return main.call(this, data, allowEmptyString);
    };

})();

exports['src::is.string'] = (() => {

    let isType;

    let var_init_locked_1562145553004;





    function main(data) {

        /**
         * 
         * 判定数据是否为字符串类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为字符串类型则返回 true , 否则返回 false 
         * 
         */

        return isType(data, 'string');

    }

    return function(data) {


        if (!var_init_locked_1562145553004) {

            isType = include('is.type');

            var_init_locked_1562145553004 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::array.from'] = (() => {

    let isEmpty, isString;

    let var_init_locked_1562145553009;





    function main(data) {

        /**
         * 
         * 将非数组数据打包成数组数据
         * 
         * @import is.empty
         * 
         * @import is.string
         * 
         * @param {mixed} data 数据
         * 
         * @return {array} 数组数据
         * 
         */

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


        if (!var_init_locked_1562145553009) {

            isEmpty = include('is.empty');
            isString = include('is.string');

            var_init_locked_1562145553009 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::date.get.properties'] = (() => {

    let from;

    let var_init_locked_1562145553018;





    function main(date, names) {


        /**
         * 
         * 获得指定日期的属性值
         * 
         * @import from from array.from
         * 
         * @param {Date} date 日期对象
         * 
         * @param {string[]} [names] 属性名称集合
         * 
         * @return {object} 日期描述
         * 
         */

        names = from(names);

        let result = {};

        for (name of names) {

            let value;

            switch (name) {

                case 'year':

                    value = date.getFullYear();

                    break;

                case 'month':

                    value = date.getMonth() + 1;

                    break;

                case 'day':

                    value = date.getDate();
            }

            result[name] = value;
        }

        return result;

    }

    return function(date, names) {


        if (!var_init_locked_1562145553018) {

            from = include('array.from');

            var_init_locked_1562145553018 = true;
        }




        return main.call(this, date, names);
    };

})();

exports['src::array.dates.includes'] = (() => {

    let get;

    let var_init_locked_1562145553024;





    function main(dates, date, fields) {


        /**
         * 
         * 基于日历数组进行包含性检测
         * 
         * @import get from date.get.properties
         * 
         * @param {Date[]} dates 日历数组
         * 
         * @param {Date} date 校验匹配数据项
         * 
         * @param {array} [fields = ['year' , 'month' , 'day']] 校验字段项
         * 
         * @return {boolean} 如果日历数组中包含校验项则返回 true , 否则返回 false 
         * 
         */

        let {
            year,
            month,
            day
        } = get(date, fields);

        for (let date of dates) {

            let {
                year: itemYear,
                month: itemMonth,
                day: itemDay
            } = get(date, fields);

            if (itemYear === year && itemMonth === month && itemDay === day) {

                return true;
            }
        }

        return false;






    }

    return function(dates, date, fields = ['year', 'month', 'day']) {


        if (!var_init_locked_1562145553024) {

            get = include('date.get.properties');

            var_init_locked_1562145553024 = true;
        }




        return main.call(this, dates, date, fields);
    };

})();

exports['src::array.insert.after'] = (() => {









    function main(data, insertItem, existItem) {


        /**
         * 
         * 在数组中指定项之后添加
         * 
         * @param {array} data 目标数组
         * 
         * @param {mixed} insertItem 需要添加的项
         * 
         * @param {mixed} existItem 指定项
         * 
         */

        let index = data.indexOf(existItem);

        if (index !== -1) {

            data.splice(index + 1, 0, insertItem);
        }

    }

    return function(data, insertItem, existItem) {





        return main.call(this, data, insertItem, existItem);
    };

})();

exports['src::array.insert.before'] = (() => {









    function main(data, insertItem, existItem) {


        /**
         * 
         * 在数组中指定项之前添加
         * 
         * @param {array} data 目标数组
         * 
         * @param {mixed} insertItem 需要添加的项
         * 
         * @param {mixed} existItem 指定项
         * 
         */

        let index = data.indexOf(existItem);

        if (index !== -1) {

            data.splice(index, 0, insertItem);
        }

    }

    return function(data, insertItem, existItem) {





        return main.call(this, data, insertItem, existItem);
    };

})();

exports['src::array.insert'] = (() => {









    function main(data, index, ...items) {


        /**
         * 
         * 在指定下标处插入项
         * 
         * @param {array} data 数组
         * 
         * @param {number} index 数组下标
         * 
         * @param {mixed} [...items] 项
         * 
         */

        data.splice(index, 0, ...items);

    }

    return function(data, index, ...items) {





        return main.call(this, data, index, ...items);
    };

})();

exports['src::array.remove.index'] = (() => {









    function main(data, index) {


        /**
         * 
         * 根据数组下标删除对应项
         * 
         * @param {array} data 作用数组
         * 
         * @param {number} index 数组项的下标
         * 
         * @return {boolean} 如果删除成功则返回 true , 否则返回　false 
         * 
         */

        if (index >= 0 && index < data.length) {

            data.splice(index, 1);

            return true;
        }

        return false;

    }

    return function(data, index) {





        return main.call(this, data, index);
    };

})();

exports['src::array.remove'] = (() => {

    let remove;

    let var_init_locked_1562145553041;





    function main(data, ...items) {


        /**
         * 
         * 在数组中去除项目
         * 
         * @import remove from array.remove.index
         * 
         * @param {array} data 数组
         * 
         * @param {mixed} [...items] 项目
         * 
         */

        for (let item of items) {

            remove(data, data.indexOf(item));
        }

    }

    return function(data, ...items) {


        if (!var_init_locked_1562145553041) {

            remove = include('array.remove.index');

            var_init_locked_1562145553041 = true;
        }




        return main.call(this, data, ...items);
    };

})();

exports['src::array.remove.all'] = (() => {

    let remove;

    let var_init_locked_1562145553043;





    function main(data, item) {


        /**
         * 
         * 在数组中去除所有指定项目
         * 
         * @import remove from array.remove
         * 
         * @param {array} data 数组
         * 
         * @param {mixed} item 项目
         * 
         */

        while (true) {

            if (remove(data, item) === false) {

                break;
            }
        }

    }

    return function(data, item) {


        if (!var_init_locked_1562145553043) {

            remove = include('array.remove');

            var_init_locked_1562145553043 = true;
        }




        return main.call(this, data, item);
    };

})();

exports['src::data.connection.accept'] = (() => {









    function main(...args) {


        /**
         * 
         * 接收消息数据
         * 
         * @param {mixed} [...args] 可选参数
         * 
         * @return {object} 消息体 
         * 
         */

        let me = this,
            message = me.processMessage(...args),
            {
                subscribers
            } = me;

        subscribers.forEach(subscriber => {

            if (me.validateMessage(subscriber, message)) {

                subscriber.accept(me.processData(subscriber, message));
            }

        });

    }

    return function(...args) {





        return main.call(this, ...args);
    };

})();

exports['src::url.append'] = (() => {

    let isString;

    let var_init_locked_1562145553054;





    function main(url, data) {


        /**
         * 
         * 基于已有链接附加查询信息
         * 
         * @import is.string
         * 
         * @param {string} url 链接
         * 
         * @param {mixed} data 附加查询信息
         * 
         * @return {mixed} 拼接了查询信息的链接 
         * 
         */

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

        if (querystring) {

            if (url.includes('?')) {

                return `${url}&${querystring}`;
            }

            return `${url}?${querystring}`;

        }

        return url;


    }

    return function(url, data) {


        if (!var_init_locked_1562145553054) {

            isString = include('is.string');

            var_init_locked_1562145553054 = true;
        }




        return main.call(this, url, data);
    };

})();

exports['src::regexp.int'] = (() => {









    function main(data) {


        /**
         * 
         * 匹配整数
         * 
         * @param {string} data 参数说明
         * 
         * @return {boolean} 如果匹配成功则返回 true , 否则返回 false 
         * 
         */

        return /^\d+$/.test(data);

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::url.template.apply'] = (() => {

    let isInt;

    let var_init_locked_1562145553061;





    function main(url, data) {


        /**
         * 
         * 路径模板应用
         * 
         * @import isInt from regexp.int
         * 
         * @param {string} url 带有参数定义的URL
         * 
         * @param {object} data 模板参数定义数据集合
         * 
         * @return {string} 应用数据后的URL链接
         * 
         */

        return url.replace(/\:(\w+)/g, (match, name) => {

            if (isInt(name)) {

                return `:${name}`;
            }

            return data[name] || '';

        });


    }

    return function(url, data) {


        if (!var_init_locked_1562145553061) {

            isInt = include('regexp.int');

            var_init_locked_1562145553061 = true;
        }




        return main.call(this, url, data);
    };

})();

exports['src::is.object.simple'] = (() => {









    function main(data) {

        /**
         * 
         * 判定数据是否为简单对象类型
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为简单对象类型则返回 true , 否则返回 false 
         * 
         */

        return data instanceof Object && data.constructor === Object;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.connection.ajax.request'] = (() => {

    let append, apply, isObject;

    let var_init_locked_1562145553069;





    function main(url, {
        method,
        query,
        params,
        path,
        requestJSON,
        responseHeaders
    }) {


        /**
         * 
         * 基于 AJAX 进行数据交互
         * 
         * @import append from url.append
         * 
         * @import apply from url.template.apply
         * 
         * @import isObject from is.object.simple
         * 
         * @param {string} url 请求路径
         * 
         * @param {object} [config] 请求配置
         * 
         * @param {string} [config.method = 'GET'] 请求方式，默认是 GET 请求
         * 
         * @param {object} [config.query] GET请求的参数集合
         * 
         * @param {object} [config.params = {}] 请求主体的参数集合
         * 
         * @param {object} [config.path] 以路径参数形式提交的参数集合
         * 
         * @param {boolean} [config.requestJSON = true] 是否以 JSON方式提交数据
         * 
         * @param {boolean} [config.responseHeaders = false] 是否返回头部信息
         * 
         */

        if (query) {

            url = append(url, query);
        }

        if (path) {

            url = apply(url, path);
        }

        let form = false;

        method = method.toUpperCase();

        switch (method) {

            case 'GET':
            case 'DELETE':

                url = append(url, params);

                break;

            case 'POST':
            case 'PUT':

                if (requestJSON === false) {

                    form = true;
                }
        }

        return {
            url,
            method,
            data: params,
            form,
            responseHeaders
        };

    }

    return function(url, {
        method = 'GET',
        query,
        params = {},
        path,
        requestJSON = true,
        responseHeaders = false
    }) {


        if (!var_init_locked_1562145553069) {

            append = include('url.append');
            apply = include('url.template.apply');
            isObject = include('is.object.simple');

            var_init_locked_1562145553069 = true;
        }




        return main.call(this, url, {
            method,
            query,
            params,
            path,
            requestJSON,
            responseHeaders
        });
    };

})();

exports['src::data.connection.ajax.request.browser'] = (() => {

    let request;

    let var_init_locked_1562145553076;





    function main(url, config) {


        /**
         * 
         * 基于浏览器的 AJAX 请求实现
         * 
         * @import request from ....request
         * 
         * @require axios
         * 
         * @require qs
         * 
         * @param {string} url 请求路径
         * 
         * @param {object} [config] 请求配置
         * 
         */

        let {
            url: requestURL,
            method,
            data,
            form,
            responseHeaders
        } = request(url, config);

        const axios = require('axios'),
            {
                stringify
            } = require('qs');


        if (form === true) {

            data = stringify(data);
        }

        let result = axios[method.toLowerCase()](requestURL, data);

        if (responseHeaders) {

            return result.then(({
                data,
                headers
            }) => {
                data,
                headers
            });
        }

        return result.then(({
            data
        }) => data);

    }

    return function(url, config) {


        if (!var_init_locked_1562145553076) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1562145553076 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::data.connection.ajax.request.miniprogram'] = (() => {

    let request;

    let var_init_locked_1562145553085;





    function main(url, config) {


        /**
         * 
         * 基于小程序的 AJAX 请求实现
         * 
         * @import request from ....request
         * 
         * @param {string} url 请求路径
         * 
         * @param {object} [config] 请求配置
         * 
         */

        let {
            url: requestURL,
            method,
            data,
            form,
            responseHeaders
        } = request(url, config),
            header = {};

        if (form === true) {

            header['content-type'] = 'application/x-www-form-urlencoded';
        }

        return new Promise(callback => {

            wx.request({
                header,
                url: requestURL,
                method,
                data,
                success({
                    data,
                    header
                }) {

                    if (responseHeaders) {

                        callback({
                            data,
                            header
                        });

                    } else {

                        callback(data);
                    }
                }
            });

        });




    }

    return function(url, config) {


        if (!var_init_locked_1562145553085) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1562145553085 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::is.function'] = (() => {

    let isType;

    let var_init_locked_1562145553088;





    function main(data) {

        /**
         * 
         * 判定数据是否为函数类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {mixed} 如果给定值为函数类型则返回 true , 否则返回 false
         * 
         */

        return isType(data, 'function') && data.ZBEE_CLASS !== true;

    }

    return function(data) {


        if (!var_init_locked_1562145553088) {

            isType = include('is.type');

            var_init_locked_1562145553088 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.boolean'] = (() => {

    let isType;

    let var_init_locked_1562145553091;





    function main(data) {

        /**
         * 
         * 判定数据是否为布尔类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为布尔类型则返回 true , 否则返回 false 
         * 
         */

        return isType(data, 'boolean');

    }

    return function(data) {


        if (!var_init_locked_1562145553091) {

            isType = include('is.type');

            var_init_locked_1562145553091 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.empty'] = (() => {







    let var_once_value_1562145553094;

    function main() {


        /**
         * 
         * 返回一个空类
         * 
         * @once
         * 
         * @return {function} 类引用 
         * 
         */

        return class {

        };

    }

    return function() {






        if (var_once_value_1562145553094) {

            return var_once_value_1562145553094;

        }
        return var_once_value_1562145553094 = main.call(this);

    };

})();

exports['src::map.constructor'] = (() => {









    function main() {


        /**
         * 
         * 初始化 Map 对象
         * 
         */

        this.map = new Map();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::map.size.get'] = (() => {









    function main() {


        /**
         * 
         * 获得当前 Map 的键值对数量
         * 
         * @return {number} 数量 
         * 
         */

        return this.map.size;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::map.find'] = (() => {









    function main(keys) {


        /**
         * 
         * 判断指定组合键是否存在
         * 
         * @param {array} keys 组合键
         * 
         * @return {object} 返回查询结果 
         * 
         */

        let me = this,
            {
                map
            } = me,
            currentKeys = map.keys(),
            {
                length
            } = keys;

        for (let groupKeys of currentKeys) {

            if (length === groupKeys.length) {

                let isMatch = true;

                for (let i = 0; i < length; i++) {

                    if (groupKeys[i] !== keys[i]) {

                        isMatch = false;

                        break;
                    }
                }

                if (isMatch) {

                    return {
                        match: true,
                        key: groupKeys
                    };
                }
            }
        }

        return {
            match: false
        };

    }

    return function(keys) {





        return main.call(this, keys);
    };

})();

exports['src::map.set'] = (() => {

    let find;

    let var_init_locked_1562145553111;

    let var_current_scope_1562145553111;



    function main(...values) {


        /**
         * 
         * 设置一个值
         * 
         * @import find from .find scoped
         * 
         * @param {array} [...values] 包含多维键，以及相应值
         * 
         * @return {Map} 返回当前对象 
         * 
         */

        let me = this,
            {
                map
            } = me,
            {
                length
            } = values;

        if (length >= 2) {

            let keys = values.slice(0, length - 1),
                value = values[length - 1],
                {
                    match,
                    key
                } = find(keys);

            if (match) {

                map.set(key, value);

            } else {

                map.set(keys, value);
            }
        }

        return me;

    }

    return function(...values) {




        if (!var_current_scope_1562145553111 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1562145553111 = this;
        }


        return main.call(this, ...values);
    };

})();

exports['src::map.get'] = (() => {

    let find;

    let var_init_locked_1562145553115;

    let var_current_scope_1562145553115;



    function main(...keys) {


        /**
         * 
         * 判断指定组合键是否存在
         * 
         * @import find from .find scoped
         * 
         * @param {array} [...keys] 组合键
         * 
         * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
         * 
         */

        let me = this,
            {
                map
            } = me;

        let {
            match,
            key
        } = find(keys);

        if (match) {

            return map.get(key);
        }

    }

    return function(...keys) {




        if (!var_current_scope_1562145553115 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1562145553115 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.has'] = (() => {

    let find;

    let var_init_locked_1562145553118;

    let var_current_scope_1562145553118;



    function main(...keys) {


        /**
         * 
         * 判断指定组合键是否存在
         * 
         * @import find from .find scoped
         * 
         * @param {array} [...keys] 组合键
         * 
         * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
         * 
         */

        let {
            match
        } = find(keys);

        return match;

    }

    return function(...keys) {




        if (!var_current_scope_1562145553118 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1562145553118 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.delete'] = (() => {

    let find;

    let var_init_locked_1562145553122;

    let var_current_scope_1562145553122;



    function main(...keys) {



        /**
         * 
         * 删除指定组合键
         * 
         * @import find from .find scoped
         * 
         * @param {array} [...keys] 组合键
         * 
         * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
         * 
         */

        let me = this,
            {
                map
            } = me;

        let {
            match,
            key
        } = find(keys);

        if (match) {

            return map.delete(key);
        }

        return false;

    }

    return function(...keys) {




        if (!var_current_scope_1562145553122 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1562145553122 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.forEach'] = (() => {









    function main(fn, scope) {


        /**
         * 
         * 实现迭代
         * 
         * @param {function} fn 函数引用
         * 
         * @param {mixed} scope 函数作用域
         * 
         */

        let {
            map
        } = this;

        map.forEach(fn, scope);

    }

    return function(fn, scope) {





        return main.call(this, fn, scope);
    };

})();

exports['src::map.clear'] = (() => {









    function main() {


        /**
         * 
         * 清空
         * 
         */

        this.map.clear();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::map'] = (() => {

    let extend, constructor, get_size, method_set, method_get, method_has, method_delete, method_forEach, method_clear;

    let var_init_locked_1562145553131;

    let var_class_1562145553131;



    return function() {


        if (!var_init_locked_1562145553131) {

            extend = include('class.empty')();
            constructor = include('src::map.constructor');
            get_size = include('src::map.size.get');
            method_set = include('src::map.set');
            method_get = include('src::map.get');
            method_has = include('src::map.has');
            method_delete = include('src::map.delete');
            method_forEach = include('src::map.forEach');
            method_clear = include('src::map.clear');

            var_init_locked_1562145553131 = true;
        }



        if (!var_class_1562145553131) {

            class main {





                constructor(...args) {



                    constructor.apply(this, args);

                }

                set(...args) {

                    return method_set.apply(this, args);

                }
                get(...args) {

                    return method_get.apply(this, args);

                }
                has(...args) {

                    return method_has.apply(this, args);

                }
                delete(...args) {

                    return method_delete.apply(this, args);

                }
                forEach(...args) {

                    return method_forEach.apply(this, args);

                }
                clear(...args) {

                    return method_clear.apply(this, args);

                }

                get size() {

                    return get_size.call(this);

                }

            }

            var_class_1562145553131 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553131;
                }

            };
        }


        return new var_class_1562145553131();
    };

})();

exports['src::mixin.observable.constructor'] = (() => {

    let createMap;

    let var_init_locked_1562145553137;






    /**
     * 
     * 初始化观察者
     * 
     * @import createMap from map
     * 
     */

    const EventEmitter = require('events');

    function main() {

        let me = this;

        me.emitter = new EventEmitter();

        me.listeners = createMap();

        me.cacheFireEventDataList = [];
    }



    return function() {


        if (!var_init_locked_1562145553137) {

            createMap = include('map');

            var_init_locked_1562145553137 = true;
        }




        return main.call(this);
    };

})();

exports['src::mixin.observable.fire.data.last'] = (() => {









    function main() {


        /**
         * 
         * 获得最近的触发事件数据
         * 
         * @return {mixed} 如果有的话则返回一个参数数组，如果没有则返回 false 
         * 
         */

        let {
            cacheFireEventDataList
        } = this, {
            length
        } = cacheFireEventDataList;

        if (length) {

            return cacheFireEventDataList[length - 1];
        }

        return false;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::mixin.observable.listeners.clear.all'] = (() => {









    function main() {


        /**
         * 
         * 清除所有事件监听
         * 
         */

        this.emitter.removeAllListeners();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::mixin.observable.listeners.clear'] = (() => {









    function main(event) {


        /**
         * 
         * 清除指定事件上的所有事件监听
         * 
         * @param {string} event 事件名称
         * 
         */

        this.emitter.removeAllListeners(event);

    }

    return function(event) {





        return main.call(this, event);
    };

})();

exports['src::mixin.observable.listeners.add'] = (() => {

    let isObject, isFunction;

    let var_init_locked_1562145553149;





    function main(listeners) {


        /**
         * 
         * 添加一组事件监听
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.function
         * 
         * @param {object} listeners 事件监听配置
         * 
         */

        let me = this,
            events = Object.keys(listeners),
            {
                scope,
                ...realListeners
            } = listeners;

        listeners = realListeners;

        for (let event of events) {

            let listener = listeners[event];

            if (isObject(listener)) {

                let {
                    fn,
                    scope: listenerScope,
                    ...options
                } = listener;

                me.addListener(event, fn, listenerScope || scope, options);

            } else {

                me.addListener(event, listener, scope);
            }
        }

    }

    return function(listeners) {


        if (!var_init_locked_1562145553149) {

            isObject = include('is.object.simple');
            isFunction = include('is.function');

            var_init_locked_1562145553149 = true;
        }




        return main.call(this, listeners);
    };

})();

exports['src::mixin.observable.listeners.remove'] = (() => {









    function main(listeners) {


        /**
         * 
         * 去除一组事件监听
         * 
         * @param {object} listeners 事件监听
         * 
         */

        let me = this,
            events = Object.keys(listeners);

        for (let event of events) {

            let listener = listeners[event];

            if (isObject(listener)) {

                let {
                    fn
                } = listener;

                me.removeListener(event, fn);

            } else if (isFunction(listener)) {

                me.removeListener(event, listener);
            }
        }

    }

    return function(listeners) {





        return main.call(this, listeners);
    };

})();

exports['src::function.empty'] = (() => {









    /**
     * 
     * 返回一个空函数
     * 
     * @scoped
     * 
     */

    const emptyFn = () => {};

    function main() {

        return emptyFn;
    }

    return function() {





        return main.call(this);
    };

})();

exports['src::function.get'] = (() => {

    let isString, isFunction, empty;

    let var_init_locked_1562145553159;





    function main(fn, scope) {

        /**
         * 
         * 获得一个函数引用
         * 
         * @import is.string
         * 
         * @import is.function
         * 
         * @import empty from function.empty
         * 
         * @param {string | function} fn 函数描述
         * 
         * @param {mixed} [scope] 函数作用域
         * 
         * @return {function} 函数引用本身 
         * 
         */

        if (isString(fn)) {

            if (scope && fn in scope) {

                fn = scope[fn];

            } else {

                fn = include(fn);
            }
        }

        if (isFunction(fn)) {

            if (scope) {

                return fn.bind(scope);
            }

            return fn;
        }

        return empty();

    }

    return function(fn, scope) {


        if (!var_init_locked_1562145553159) {

            isString = include('is.string');
            isFunction = include('is.function');
            empty = include('function.empty');

            var_init_locked_1562145553159 = true;
        }




        return main.call(this, fn, scope);
    };

})();

exports['src::mixin.observable.listener.add'] = (() => {

    let get;

    let var_init_locked_1562145553165;





    function main(event, fn, scope, {
        once,
        getOldFireEventData
    }) {


        /**
         * 
         * 添加事件监听
         * 
         * @import get from function.get
         * 
         * @param {string} event 事件名称
         * 
         * @param {mixed} fn 事件回调函数
         * 
         * @param {mixed} [scope] 事件作用域
         * 
         * @param {object} [options = {}] 配置
         * 
         * @param {boolean} [options.once = false] 是否只监听一次
         * 
         * @param {boolean} [options.getOldFireEventData] 是否获取以前的触发事件数据
         * 
         */

        let me = this,
            {
                emitter,
                listeners
            } = me,
            listener = get(fn, scope);

        listeners.set(event, fn, scope, listener);

        switch (getOldFireEventData) {

            case 'last':

                let {
                    lastFireEventData
                } = me;


                if (lastFireEventData) {

                    listener(...lastFireEventData);
                }

                break;

            case 'all':

                let {
                    cacheFireEventDataList
                } = me;

                for (let cacheFireEventData of cacheFireEventDataList) {

                    listener(...cacheFireEventData);
                }
        }

        if (once) {

            emitter.once(event, listener);

        } else {

            emitter.addListener(event, listener);
        }

    }

    return function(event, fn, scope, {
        once = false,
        getOldFireEventData
    } = {}) {


        if (!var_init_locked_1562145553165) {

            get = include('function.get');

            var_init_locked_1562145553165 = true;
        }




        return main.call(this, event, fn, scope, {
            once,
            getOldFireEventData
        });
    };

})();

exports['src::mixin.observable.listener.remove'] = (() => {









    function main(event, fn, scope) {


        /**
         * 
         * 移除事件监听
         * 
         * @param {string} event 事件名称
         * 
         * @param {function} fn 事件回调函数
         * 
         * @param {mixed} [scope] 事件作用域
         * 
         * 
         */

        let me = this,
            {
                listeners,
                emitter
            } = me,
            listener = listeners.get(event, fn, scope);

        if (listener) {

            emitter.removeListener(event, listener);

            listeners.delete(event, fn, scope);
        }

    }

    return function(event, fn, scope) {





        return main.call(this, event, fn, scope);
    };

})();

exports['src::mixin.observable.listener.has'] = (() => {









    function main(name) {


        /**
         * 
         * 查看指定事件名称上有无事件监听
         * 
         * @param {string} name 事件名称
         * 
         * @return {boolean} 如果事件上有监听则返回 true , 否则返回 false 
         * 
         */

        let {
            emitter
        } = this;

        return emitter.listenerCount(name) !== 0;

    }

    return function(name) {





        return main.call(this, name);
    };

})();

exports['src::mixin.observable.fire'] = (() => {

    let isArray;

    let var_init_locked_1562145553179;






    /**
     *
     * 触发事件
     * 
     * @import is.array
     *
     * @param {string} event 事件名称
     *
     * @param {mixed} [...args] 事件参数
     *
     */

    function main(event, ...args) {

        let me = this;

        if (me.$suspendEvents === true) {

            return;
        }

        doFireBubbleEvent.call(me, event, me, ...args);
    }

    function doFireBubbleEvent(event, target, ...args) {

        let me = this,
            {
                bubbleTarget,
                emitter,
                fireEventDataCacheCount = 0,
                cacheFireEventDataList
            } = me;

        if (fireEventDataCacheCount !== 0) {

            cacheFireEventDataList.push([
                target,
                ...args
            ]);

            let deleteCount = cacheFireEventDataList.length - fireEventDataCacheCount;

            if (deleteCount > 0) {

                cacheFireEventDataList.splice(0, deleteCount);
            }
        }

        emitter.emit(event, target, ...args);

        if (bubbleTarget) {

            doFireBubbleEvent.call(bubbleTarget, event, target, ...args);
        }
    }

    return function(event, ...args) {


        if (!var_init_locked_1562145553179) {

            isArray = include('is.array');

            var_init_locked_1562145553179 = true;
        }




        return main.call(this, event, ...args);
    };

})();

exports['src::mixin.observable.events.suspend'] = (() => {









    function main() {


        /**
         * 
         * 暂停事件监听
         * 
         */

        this.$suspendEvents = true;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::mixin.observable.events.resume'] = (() => {









    function main() {


        /**
         * 
         * 恢复事件监听
         * 
         */

        this.$suspendEvents = false;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::mixin.observable'] = (() => {

    let constructor, get_lastFireEventData, method_clearAllListeners, method_clearListeners, method_addListeners, method_removeListeners, method_addListener, method_removeListener, method_hasListener, method_fireEvent, method_suspendEvents, method_resumeEvents;

    let var_init_locked_1562145553188;





    function main(extend) {

        return class extends extend {





            constructor(...args) {

                super(...args);

                constructor.apply(this, args);

            }

            clearAllListeners(...args) {

                return method_clearAllListeners.apply(this, args);

            }
            clearListeners(...args) {

                return method_clearListeners.apply(this, args);

            }
            addListeners(...args) {

                return method_addListeners.apply(this, args);

            }
            removeListeners(...args) {

                return method_removeListeners.apply(this, args);

            }
            addListener(...args) {

                return method_addListener.apply(this, args);

            }
            on(...args) {

                return this.addListener(...args);

            }
            removeListener(...args) {

                return method_removeListener.apply(this, args);

            }
            un(...args) {

                return this.removeListener(...args);

            }
            hasListener(...args) {

                return method_hasListener.apply(this, args);

            }
            fireEvent(...args) {

                return method_fireEvent.apply(this, args);

            }
            suspendEvents(...args) {

                return method_suspendEvents.apply(this, args);

            }
            resumeEvents(...args) {

                return method_resumeEvents.apply(this, args);

            }

            get lastFireEventData() {

                return get_lastFireEventData.call(this);

            }

        }

    }

    return function(extend) {


        if (!var_init_locked_1562145553188) {

            constructor = include('src::mixin.observable.constructor');
            get_lastFireEventData = include('src::mixin.observable.fire.data.last');
            method_clearAllListeners = include('src::mixin.observable.listeners.clear.all');
            method_clearListeners = include('src::mixin.observable.listeners.clear');
            method_addListeners = include('src::mixin.observable.listeners.add');
            method_removeListeners = include('src::mixin.observable.listeners.remove');
            method_addListener = include('src::mixin.observable.listener.add');
            method_removeListener = include('src::mixin.observable.listener.remove');
            method_hasListener = include('src::mixin.observable.listener.has');
            method_fireEvent = include('src::mixin.observable.fire');
            method_suspendEvents = include('src::mixin.observable.events.suspend');
            method_resumeEvents = include('src::mixin.observable.events.resume');

            var_init_locked_1562145553188 = true;
        }




        return main.call(this, extend);
    };

})();

exports['src::data.subscriber.constructor'] = (() => {

    let get;

    let var_init_locked_1562145553198;





    function main(name, {
        innerListeners,
        listeners,
        params,
        autoOpen,
        extraParams,
        defaultParams,
        fn,
        scope
    }) {


        /**
         * 
         * 初始化订阅器
         * 
         * @import get from function.get
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {object} [config.innerListeners = {}] 来自于内部事件监听
         * 
         * @param {object} [config.listeners = {}] 来自古地外部事件监听
         * 
         * @param {mixed} [config.params] 默认打开的订阅参数
         * 
         * @param {boolean} [config.autoOpen = true] 是否自动打开订阅器
         * 
         * @param {object} [config.extraParams = {}] 附加参数
         * 
         * @param {object} [config.defaultParams = {}] 默认参数
         * 
         * @param {function} config.fn 订阅函数
         * 
         * @param {mixed} [config.scope] 订阅函数作用域
         * 
         */

        let me = this;

        me.name = name;

        me.extraParams = extraParams;

        me.defaultParams = defaultParams;

        me.bindFn = get(fn, scope);

        me.addListeners(innerListeners);

        me.addListeners({
            ...listeners,
            scope
        });

        if (autoOpen) {

            me.open(params);
        }


    }

    return function(name, {
        innerListeners = {},
        listeners = {},
        params,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        scope
    }) {


        if (!var_init_locked_1562145553198) {

            get = include('function.get');

            var_init_locked_1562145553198 = true;
        }




        return main.call(this, name, {
            innerListeners,
            listeners,
            params,
            autoOpen,
            extraParams,
            defaultParams,
            fn,
            scope
        });
    };

})();

exports['src::data.subscriber.closed'] = (() => {









    function main() {


        /**
         * 
         * 返回当前订阅器的关闭状态
         * 
         * @return {boolean} 返回 true 则表示为关闭，返回 false 则表示为打开
         * 
         */

        return !this.hasOwnProperty('params');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::is.defined'] = (() => {









    function main(data) {

        /**
         * 
         * 判断给定数据是否定义
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果数据定义则返回 true , 否则返回 false
         * 
         */

        return data !== undefined;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.subscriber.accept'] = (() => {

    let isDefined;

    let var_init_locked_1562145553205;





    function main(data) {


        /**
         * 
         * 接收数据
         * 
         * @import is.defined
         * 
         * @param {mixed} data 数据
         * 
         * 
         */

        let me = this,
            {
                closed,
                bindFn,
                params
            } = me;

        if (closed) {

            return;
        }

        me.fireEvent('data', data, params);

        if (bindFn) {

            return bindFn(data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1562145553205) {

            isDefined = include('is.defined');

            var_init_locked_1562145553205 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.subscriber.reopen'] = (() => {









    function main() {


        /**
         * 
         * 重新打开订阅器
         * 
         */

        let me = this,
            {
                closed,
                params
            } = me;

        if (!closed) {

            me.close();

            me.open(params);
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::object.keys'] = (() => {

    let isObject;

    let var_init_locked_1562145553213;





    /**
     * 
     * 获取对象的键值组合
     * 
     * @import isObject from is.object.simple
     * 
     * @param {object} data 对象
     * 
     * @return {array} 键值数组
     * 
     * @scoped
     * 
     */

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


        if (!var_init_locked_1562145553213) {

            isObject = include('is.object.simple');

            var_init_locked_1562145553213 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.object'] = (() => {

    let isType;

    let var_init_locked_1562145553215;





    function main(data) {

        /**
         * 
         * 判定数据是否为对象类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为对象类型则返回 true , 否则返回 false 
         * 
         */

        return Object.prototype.toString.call(data) === '[object Object]';

    }

    return function(data) {


        if (!var_init_locked_1562145553215) {

            isType = include('is.type');

            var_init_locked_1562145553215 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::object.key.join'] = (() => {










    /**
     * 
     * 将多个键值连接起来
     * 
     * @param {array} [...keys] 一组键值
     * 
     * @return {string} 连接后的键值 
     * 
     */

    const suffixRe = /(?:^\.+)|(?:\.+$)/g;

    function main(...keys) {

        let result = [];

        for (let key of keys) {

            key = key.replace(suffixRe, '');

            if (key) {

                result.push(key);
            }
        }

        return result.join('.');
    }



    return function(...keys) {





        return main.call(this, ...keys);
    };

})();

exports['src::object.value.get'] = (() => {

    let isArray, isObject, isDefined, join;

    let var_init_locked_1562145553221;






    /**
     * 
     * 获得一个对象的键值
     * 
     * @import is.array
     * 
     * @import is.object
     * 
     * @import is.defined
     * 
     * @import join from object.key.join
     * 
     * @param {object} data 对象数据
     * 
     * @param {string} [key = '.'] 对象键值
     * 
     * @return {mixed} 对应对象数据的键值的数据 
     * 
     * @scoped
     * 
     */

    const firstKeyRe = /^([^\.]+)\./;

    function main(data, key, prefixKey = '') {

        if (key === '.') {

            return data;
        }

        if (isObject(data)) {

            let firstKey,
                lastKey = key.replace(firstKeyRe, function() {

                    firstKey = arguments[1];

                    return '';

                });

            if (firstKey) {

                firstKey = join(prefixKey, firstKey);

                let result;

                if (data.hasOwnProperty(firstKey)) {

                    result = data[firstKey];

                    prefixKey = '';

                } else {

                    result = data;

                    prefixKey = firstKey;
                }

                if (lastKey) {

                    return main(result, lastKey, prefixKey);
                }

                return result;

            } else {

                return data[join(prefixKey, lastKey)];
            }

        } else if (isArray(data)) {

            let result = [];

            for (let item of data) {

                let itemResult = main(item, key);

                if (isArray(itemResult)) {

                    result.push(...itemResult);

                } else if (!isDefined(itemResult)) {

                    result.push(itemResult);

                }
            }

            return result;
        }
    }

    return function(data, key = '.') {


        if (!var_init_locked_1562145553221) {

            isArray = include('is.array');
            isObject = include('is.object');
            isDefined = include('is.defined');
            join = include('object.key.join');

            var_init_locked_1562145553221 = true;
        }




        return main.call(this, data, key);
    };

})();

exports['src::object.equals'] = (() => {

    let keys, get;

    let var_init_locked_1562145553225;





    function main(value1, value2) {

        /**
         * 
         * 匹配两个对象数据是否匹配
         * 
         * @import keys from object.keys
         * 
         * @import get from object.value.get
         * 
         * @param {object} value1 第一个对象数据
         * 
         * @param {object} value2 第二个对象数据
         * 
         * @return {boolean} 如果对象数据匹配则返回 true ， 否则返回 false
         * 
         */

        let keys1 = keys(value1),
            keys2 = keys(value2);

        if (keys1.length !== keys2.length) {

            return false;
        }

        for (let key of keys1) {

            if (!keys2.includes(key) || get(value1, key) !== get(value2, key)) {

                return false;
            }
        }

        return true;

    }

    return function(value1, value2) {


        if (!var_init_locked_1562145553225) {

            keys = include('object.keys');
            get = include('object.value.get');

            var_init_locked_1562145553225 = true;
        }




        return main.call(this, value1, value2);
    };

})();

exports['src::string.split'] = (() => {

    let isEmpty;

    let var_init_locked_1562145553229;






    /**
     * 
     * 将字符串通过间隔符分隔成数组
     * 
     * @import is.empty
     * 
     * @param {String} target 字符串
     * 
     * @param {RegEx} splitRe 字符串分隔符
     * 
     * @scoped
     * 
     */

    function main(target, splitRe) {

        return target.split(splitRe).filter(filter);
    }

    function filter(target) {

        return !isEmpty(target);
    }

    return function(target, splitRe) {


        if (!var_init_locked_1562145553229) {

            isEmpty = include('is.empty');

            var_init_locked_1562145553229 = true;
        }




        return main.call(this, target, splitRe);
    };

})();

exports['src::object.value.set'] = (() => {

    let isObject, split;

    let var_init_locked_1562145553232;





    /**
     * 
     * 设置对象的属性值
     * 
     * @import is.object
     * 
     * @import split from string.split
     * 
     * @param {object} target 目标对象
     * 
     * @param {string} key 属性名称
     * 
     * @param {mixed} value 属性值
     * 
     * @scoped
     * 
     */

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


        if (!var_init_locked_1562145553232) {

            isObject = include('is.object');
            split = include('string.split');

            var_init_locked_1562145553232 = true;
        }




        return main.call(this, target, key, value);
    };

})();

exports['src::object.assign'] = (() => {

    let getKeys, set, get;

    let var_init_locked_1562145553237;






    /**
     * 
     * 深度合并
     * 
     * @import getKeys from object.keys
     * 
     * @import set from object.value.set
     * 
     * @import get from object.value.get
     * 
     * @param {object} dest 目标数据
     * 
     * @param {object} [...sources] 来源数据
     * 
     * @return {object} 合并后数据
     * 
     * @scoped
     * 
     */

    function assign(dest, source) {

        let keys = getKeys(source);

        for (let key of keys) {

            set(dest, key, get(source, key));
        }

    }

    function main(dest, ...sources) {

        for (let source of sources) {

            assign(dest, source);
        }

        return dest;

    }

    return function(dest, ...sources) {


        if (!var_init_locked_1562145553237) {

            getKeys = include('object.keys');
            set = include('object.value.set');
            get = include('object.value.get');

            var_init_locked_1562145553237 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::data.subscriber.open'] = (() => {

    let equals, assign;

    let var_init_locked_1562145553244;





    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import equals from object.equals
         * 
         * @import assign from object.assign
         * 
         * @param {object} [params = {}] 订阅参数
         * 
         */

        let me = this,
            {
                extraParams,
                defaultParams,
                params: oldParams
            } = me;

        params = assign({}, defaultParams, params, extraParams);

        if (!oldParams || !equals(params, oldParams)) {

            me.close();

            me.params = params;

            me.fireEvent('open', params, oldParams);
        }

    }

    return function(params = {}) {


        if (!var_init_locked_1562145553244) {

            equals = include('object.equals');
            assign = include('object.assign');

            var_init_locked_1562145553244 = true;
        }




        return main.call(this, params);
    };

})();

exports['src::data.subscriber.close'] = (() => {









    function main() {


        /**
         * 
         * 关闭订阅器
         * 
         */

        let me = this,
            {
                params,
                closed
            } = me;

        if (closed) {

            return;
        }

        delete me.params;

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.subscriber.destroy'] = (() => {









    function main() {


        /**
         * 
         * 销毁
         * 
         */

        let me = this;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        me.clearAllListeners();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.subscriber'] = (() => {

    let mixin_1562145552558__1, extend, constructor, get_closed, method_accept, method_reopen, method_open, method_close, method_destroy;

    let var_init_locked_1562145553255;

    let var_class_1562145553255;



    return function() {


        if (!var_init_locked_1562145553255) {

            mixin_1562145552558__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_accept = include('src::data.subscriber.accept');
            method_reopen = include('src::data.subscriber.reopen');
            method_open = include('src::data.subscriber.open');
            method_close = include('src::data.subscriber.close');
            method_destroy = include('src::data.subscriber.destroy');

            var_init_locked_1562145553255 = true;
        }



        if (!var_class_1562145553255) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                accept(...args) {

                    return method_accept.apply(this, args);

                }
                reopen(...args) {

                    return method_reopen.apply(this, args);

                }
                open(...args) {

                    return method_open.apply(this, args);

                }
                close(...args) {

                    return method_close.apply(this, args);

                }
                destroy(...args) {

                    return method_destroy.apply(this, args);

                }

                get closed() {

                    return get_closed.call(this);

                }

            }

            var_class_1562145553255 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553255;
                }

            };
        }


        return var_class_1562145553255;
    };

})();

exports['src::is.class'] = (() => {

    let isType;

    let var_init_locked_1562145553266;





    function main(data) {


        /**
         * 
         * 判断数据是否为类
         * 
         * @import is.type
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果指定数据是类则返回 true ，否则返回 false 
         * 
         */

        return isType(data, 'function') && data.ZBEE_CLASS === true;

    }

    return function(data) {


        if (!var_init_locked_1562145553266) {

            isType = include('is.type');

            var_init_locked_1562145553266 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.create'] = (() => {

    let isString, isFunction, isClass;

    let var_init_locked_1562145553269;





    function main(baseClass, ...args) {


        /**
         * 
         * 实例基于指定类对象
         * 
         * @import is.string
         * 
         * @import is.function
         * 
         * @import is.class
         * 
         * @param {mixed} baseClass 类
         * 
         * @param {mixed} [...args] 类参数
         * 
         */

        if (isString(baseClass)) {

            baseClass = include(baseClass);
        }

        if (isFunction(baseClass)) {

            baseClass = baseClass(...args);

            if (!isClass(baseClass)) {

                return baseClass;
            }
        }

        if (isClass(baseClass)) {

            return new baseClass(...args);
        }

    }

    return function(baseClass, ...args) {


        if (!var_init_locked_1562145553269) {

            isString = include('is.string');
            isFunction = include('is.function');
            isClass = include('is.class');

            var_init_locked_1562145553269 = true;
        }




        return main.call(this, baseClass, ...args);
    };

})();

exports['src::data.connection.base'] = (() => {

    let isObject, isString, isFunction, isBoolean, isArray, Subscriber, get, create;

    let var_init_locked_1562145553273;

    let var_class_1562145553273;



    return function() {


        if (!var_init_locked_1562145553273) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            isBoolean = include('is.boolean');
            isArray = include('is.array');
            Subscriber = include('data.subscriber')();
            get = include('function.get');
            create = include('class.create');

            var_init_locked_1562145553273 = true;
        }



        if (!var_class_1562145553273) {

            /**
             * 
             * 数据连接基础类
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.string
             * 
             * @import is.function
             * 
             * @import is.boolean
             * 
             * @import is.array
             * 
             * @import Subscriber from data.subscriber value
             * 
             * @import get from function.get
             * 
             * @import create from class.create
             * 
             * @require regex-parser
             * 
             * @class
             * 
             */

            const createRegex = require('regex-parser');

            function createRules(rules) {

                let result = [];

                for (let {
                        test,
                        use
                    } of rules) {

                    if (isFunction(use)) {

                        result.push({
                            test: createRegex(test),
                            use
                        });
                    }
                }

                return result;
            }

            class main {

                constructor({
                    subscriber = (name, options) => {

                        return new Subscriber(name, options);
                    },
                    rules = []
                }) {

                    let me = this;

                    me.subscriber = subscriber;

                    me.subscribers = new Map();

                    me.rules = createRules(rules);

                    me.subscribeParams = [];
                }

                processMessage(...args) {

                    return {};
                }

                processData(subscriber, {
                    data
                }) {

                    return data;
                }

                validateMessage(subscriber, message) {

                    return true;
                }


                processSubscribeParams(subscriber, params, operation) {

                    return [
                        params
                    ];
                }

                /**
                 * 
                 * 构建订阅器
                 * 
                 * @param {string} name  订阅名称 
                 * 
                 * @param {mixed} options 订阅器参数
                 * 
                 * @return {data.Subscriber} 订阅器
                 * 
                 */
                createSubscriber(name, options) {

                    let me = this,
                        {
                            subscriber
                        } = me;

                    return create(subscriber, name, options);
                }

                get subscriberListeners() {

                    return {
                        open: 'onSubscriberOpen',
                        close: 'onSubscriberClose'
                    };
                }

                onSubscriberOpen(subscriber, params) {

                    let me = this;

                    params = me.processSubscribeParams(subscriber, params, 'open');

                    if (isArray(params)) {

                        me.doSubscriberOpen(subscriber, ...params);
                    }
                }

                doSubscriberOpen(subscriber, ...args) {


                }

                onSubscriberClose(subscriber, params) {

                    let me = this;

                    params = me.processSubscribeParams(subscriber, params, 'close');

                    if (isArray(params)) {

                        me.doSubscriberClose(subscriber, ...params);
                    }

                }

                doSubscriberClose(subscriber, ...args) {


                }

                /**
                 * 
                 * @param {string} name 订阅器名称
                 *  
                 * @param {string} method 订阅器方法名称
                 *  
                 * @param  {mixed} ...args 订阅器方法参数
                 */
                doSubscriberMethod(name, method, ...args) {

                    let me = this,
                        {
                            subscribers
                        } = me,
                        subscriber = subscribers.get(name);

                    if (subscriber) {

                        subscriber[method](...args);

                        return subscriber;
                    }
                }
            }

            var_class_1562145553273 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553273;
                }

            };
        }


        return var_class_1562145553273;
    };

})();

exports['src::data.connection.subscribe'] = (() => {

    let assign;

    let var_init_locked_1562145553289;






    /**
     * 
     * 单次订阅
     * 
     * @import assign from object.assign
     * 
     * @param {string} name 订阅名称
     * 
     * @param {object} [options = {}] 订阅配置
     * 
     */

    const nameRe = /\<|\>/g;

    function main(name, {
        instanceId,
        ...options
    }) {

        name = name.replace(nameRe, '');

        let me = this,
            {
                subscribers
            } = me;

        if (subscribers.has(name)) {

            return;
        }

        options = assign({}, convertNameToSubscriberOptions.call(me, name), options);

        let {
            subscriberListeners
        } = me;

        if (instanceId) {

            name = `${name}<${instanceId}>`;
        }

        let subscriber = me.createSubscriber(name, {
            ...options,
            innerListeners: {
                ...subscriberListeners,
                scope: me
            }
        });

        subscribers.set(name, subscriber);

        return subscriber;
    }

    function convertNameToSubscriberOptions(name) {

        let {
            rules
        } = this;

        for (let {
                test,
                use
            } of rules) {

            let args = name.match(test);

            if (args) {

                return use(...args);
            }
        }

        return {};
    }

    return function(name, options = {}) {


        if (!var_init_locked_1562145553289) {

            assign = include('object.assign');

            var_init_locked_1562145553289 = true;
        }




        return main.call(this, name, options);
    };

})();

exports['src::data.connection.unsubscribe'] = (() => {









    function main(name, instanceId) {


        /**
         * 
         * 取消单次订阅
         * 
         * @param {string} name 订阅名称
         * 
         * @param {string} [instanceId] 实例编号
         * 
         */

        if (instanceId) {

            name = `${name}<${instanceId}>`;
        }

        let me = this,
            {
                subscribers
            } = me,
            subscriber = me.doSubscriberMethod(name, 'destroy');

        if (subscriber) {

            subscribers.delete(name);
        }

    }

    return function(name, instanceId) {





        return main.call(this, name, instanceId);
    };

})();

exports['src::data.connection.subscribes'] = (() => {

    let isString, isFunction, isObject, get;

    let var_init_locked_1562145553299;





    function main(config) {


        /**
         * 
         * 批量订阅
         * 
         * @import is.string
         * 
         * @import is.function
         * 
         * @import isObject from is.object.simple
         * 
         * @import get from function.get
         * 
         * @param {object} config 批量订阅配置
         * 
         * @return {object} 实例化后的订阅器集合
         * 
         */

        let {
            scope,
            instanceId,
            ...subscribers
        } = config,
        me = this,
            names = Object.keys(subscribers),
            result = {};

        for (let name of names) {

            let target = subscribers[name],
                subscriber;

            if (isString(target) || isFunction(target)) {

                subscriber = me.subscribe(name, {
                    fn: target,
                    instanceId,
                    scope
                });

            } else if (isObject(target)) {

                subscriber = me.subscribe(name, {
                    ...target,
                    instanceId,
                    scope
                });
            }

            if (subscriber) {

                result[name] = subscriber;
            }
        }

        return result;

    }

    return function(config) {


        if (!var_init_locked_1562145553299) {

            isString = include('is.string');
            isFunction = include('is.function');
            isObject = include('is.object.simple');
            get = include('function.get');

            var_init_locked_1562145553299 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::data.connection.unsubscribes'] = (() => {









    function main(names, instanceId) {


        /**
         * 
         * 批量取消订阅
         * 
         * @param {string[]} names 批量订阅配置
         * 
         * @param {string} [instanceId] 实例编号
         * 
         */

        let me = this;

        for (let name of names) {

            me.unsubscribe(name, instanceId);
        }

    }

    return function(names, instanceId) {





        return main.call(this, names, instanceId);
    };

})();

exports['src::data.connection.resubscribes'] = (() => {









    function main() {


        /**
         * 
         * 重新订阅
         * 
         */

        let {
            subscribers
        } = this;

        subscribers.forEach(subscriber => subscriber.reopen());

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.connection'] = (() => {

    let extend, method_acceptMessage, method_subscribe, method_unsubscribe, method_subscribes, method_unsubscribes, method_resubscribes;

    let var_init_locked_1562145553307;

    let var_class_1562145553307;



    return function() {


        if (!var_init_locked_1562145553307) {

            extend = include('src::data.connection.base')();
            method_acceptMessage = include('src::data.connection.accept');
            method_subscribe = include('src::data.connection.subscribe');
            method_unsubscribe = include('src::data.connection.unsubscribe');
            method_subscribes = include('src::data.connection.subscribes');
            method_unsubscribes = include('src::data.connection.unsubscribes');
            method_resubscribes = include('src::data.connection.resubscribes');

            var_init_locked_1562145553307 = true;
        }



        if (!var_class_1562145553307) {

            class main extends mixins({
                extend,
                mixins: []
            }) {







                acceptMessage(...args) {

                    return method_acceptMessage.apply(this, args);

                }
                subscribe(...args) {

                    return method_subscribe.apply(this, args);

                }
                unsubscribe(...args) {

                    return method_unsubscribe.apply(this, args);

                }
                subscribes(...args) {

                    return method_subscribes.apply(this, args);

                }
                unsubscribes(...args) {

                    return method_unsubscribes.apply(this, args);

                }
                resubscribes(...args) {

                    return method_resubscribes.apply(this, args);

                }



            }

            var_class_1562145553307 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553307;
                }

            };
        }


        return var_class_1562145553307;
    };

})();

exports['src::data.connection.ajax'] = (() => {

    let Connection;

    let var_init_locked_1562145553321;

    let var_class_1562145553321;



    return function(options) {


        if (!var_init_locked_1562145553321) {

            Connection = include('data.connection')();

            var_init_locked_1562145553321 = true;
        }



        if (!var_class_1562145553321) {


            /**
             * 
             * 基于 AJAX 进行数据交互
             * 
             * @import Connection from data.connection value
             * 
             * @require url-join
             * 
             * @param {object} options 配置
             * 
             */

            const join = require('url-join');

            class main extends Connection {

                constructor({
                    ajax
                }) {

                    super();

                    let me = this,
                        {
                            url: ajaxURL,
                            request
                        } = ajax;

                    me.ajaxURL = ajaxURL;

                    me.request = request;
                }

                processSubscribeParams(subscriber, params) {

                    let {
                        ajaxURL
                    } = this;

                    return [
                        join(ajaxURL, subscriber.name),
                        params
                    ];
                }

                validateMessage(subscriber, {
                    subscriber: messageSubscriber
                }) {

                    return subscriber === messageSubscriber;
                }

                processMessage(subscriber, data) {

                    return {
                        subscriber,
                        data
                    };
                }

                async doSubscriberOpen(subscriber, url, params) {

                    this.acceptMessage(subscriber, await request(url, params));

                }
            }


            var_class_1562145553321 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553321;
                }

            };
        }


        return new var_class_1562145553321(options);
    };

})();

exports['src::id.generate'] = (() => {










    /**
     * 
     * 生成唯一的编号
     * 
     * @param {string} prefix 编号前缀
     * 
     * @return {string} 生成后的唯一编号 
     * 
     */

    let count = 1;

    function main(prefix = 'zb-') {

        return `${prefix}${count ++}`;

    }

    return function(prefix) {





        return main.call(this, prefix);
    };

})();

exports['src::data.connection.deploy'] = (() => {

    let generate;

    let var_init_locked_1562145553338;





    function main(subscriberMap, connections, connectionVarName) {


        /**
         * 
         * 实现部署
         * 
         * @import generate from id.generate
         * 
         * @param {object} subscriberMap 订阅器定义集合
         * 
         * @param {object} connections 连接集合
         * 
         * @param {string} connectionVarName 连接集合的变量名称
         * 
         * @return {object}
         * 
         */

        let {
            keys
        } = Object,
        instanceId = generate('connection-');

        return {

            mounted() {

                let scope = this,
                    names = keys(subscriberMap);

                for (let name of names) {

                    let {
                        varName,
                        connection,
                        subscribers
                    } = subscriberMap[name];

                    if (subscribers) {

                        scope[varName] = connection.subscribes({
                            ...subscribers,
                            instanceId,
                            scope
                        });
                    }
                }
            },

            unmounted() {

                let scope = this,
                    names = keys(subscriberMap);

                for (let name of names) {

                    let {
                        varName,
                        connection,
                        subscribers
                    } = subscriberMap[name];

                    connection.unsubscribes(keys(subscribers), instanceId);

                    delete scope[varName];
                }
            }

        };

    }

    return function(subscriberMap, connections, connectionVarName) {


        if (!var_init_locked_1562145553338) {

            generate = include('id.generate');

            var_init_locked_1562145553338 = true;
        }




        return main.call(this, subscriberMap, connections, connectionVarName);
    };

})();

exports['src::data.connection.deploy.object'] = (() => {

    let deploy;

    let var_init_locked_1562145553342;





    function main(connections, component) {


        /**
         * 
         * 对象版部署封装
         * 
         * @import deploy from ....deploy
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} component 组件定义对象
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        let names = Object.keys(connections),
            config = {};

        for (let name of names) {

            let field = name === 'default' ? 'subscribers' : `${name}_subscribers`,
                subscribers = component[field];

            if (subscribers) {

                config[name] = {
                    varName: `$${field}`,
                    connection: connections[name],
                    subscribers
                };

                delete component[field];
            }
        }

        return deploy(config);

    }

    return function(connections, component) {


        if (!var_init_locked_1562145553342) {

            deploy = include('src::data.connection.deploy');

            var_init_locked_1562145553342 = true;
        }




        return main.call(this, connections, component);
    };

})();

exports['src::data.connection.deploy.miniprogram'] = (() => {

    let empty, deploy;

    let var_init_locked_1562145553345;





    function main(connections, component) {


        /**
         * 
         * 基于数据连接的 VUE 封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from ..object
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} component 组件定义对象
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        let {
            mounted,
            unmounted
        } = deploy(connections, component);

        const {
            onLoad: originMounted = empty,
            onUnload: originUnmounted = empty,
            ...options
        } = component;

        return {
            onLoad() {

                let me = this;

                mounted.call(me);

                originMounted.call(me);
            },

            onUnload() {

                let me = this;

                originUnmounted.call(me);

                unmounted.call(me);
            },

            ...options
        };

    }

    return function(connections, component) {


        if (!var_init_locked_1562145553345) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.object');

            var_init_locked_1562145553345 = true;
        }




        return main.call(this, connections, component);
    };

})();

exports['src::data.connection.deploy.vue'] = (() => {

    let empty, deploy;

    let var_init_locked_1562145553349;





    function main(connections, component) {


        /**
         * 
         * 基于数据连接的 VUE 封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from ..object
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} component 组件定义对象
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        let {
            mounted,
            unmounted
        } = deploy(connections, component);

        const {
            mounted: originMounted = empty,
            destroyed: originUnmounted = empty,
            ...options
        } = component;

        return {
            mounted() {

                let me = this;

                mounted.call(me);

                originMounted.call(me);
            },

            destroyed() {

                let me = this;

                originUnmounted.call(me);

                unmounted.call(me);
            },

            ...options
        };

    }

    return function(connections, component) {


        if (!var_init_locked_1562145553349) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.object');

            var_init_locked_1562145553349 = true;
        }




        return main.call(this, connections, component);
    };

})();

exports['src::data.Subscriber.constructor'] = (() => {

    let get;

    let var_init_locked_1562145553352;





    function main(name, {
        innerListeners,
        listeners,
        params,
        autoOpen,
        extraParams,
        defaultParams,
        fn,
        scope
    }) {


        /**
         * 
         * 初始化订阅器
         * 
         * @import get from function.get
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {object} [config.innerListeners = {}] 来自于内部事件监听
         * 
         * @param {object} [config.listeners = {}] 来自古地外部事件监听
         * 
         * @param {mixed} [config.params] 默认打开的订阅参数
         * 
         * @param {boolean} [config.autoOpen = true] 是否自动打开订阅器
         * 
         * @param {object} [config.extraParams = {}] 附加参数
         * 
         * @param {object} [config.defaultParams = {}] 默认参数
         * 
         * @param {function} config.fn 订阅函数
         * 
         * @param {mixed} [config.scope] 订阅函数作用域
         * 
         */

        let me = this;

        me.name = name;

        me.extraParams = extraParams;

        me.defaultParams = defaultParams;

        me.bindFn = get(fn, scope);

        me.addListeners(innerListeners);

        me.addListeners({
            ...listeners,
            scope
        });

        if (autoOpen) {

            me.open(params);
        }


    }

    return function(name, {
        innerListeners = {},
        listeners = {},
        params,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        scope
    }) {


        if (!var_init_locked_1562145553352) {

            get = include('function.get');

            var_init_locked_1562145553352 = true;
        }




        return main.call(this, name, {
            innerListeners,
            listeners,
            params,
            autoOpen,
            extraParams,
            defaultParams,
            fn,
            scope
        });
    };

})();

exports['src::data.Subscriber.accept'] = (() => {

    let isDefined;

    let var_init_locked_1562145553359;





    function main(data) {


        /**
         * 
         * 接收数据
         * 
         * @import is.defined
         * 
         * @param {mixed} data 数据
         * 
         * 
         */

        let me = this,
            {
                closed,
                bindFn,
                params
            } = me;

        if (closed) {

            return;
        }

        me.fireEvent('data', data, params);

        if (bindFn) {

            return bindFn(data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1562145553359) {

            isDefined = include('is.defined');

            var_init_locked_1562145553359 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.Subscriber.reopen'] = (() => {









    function main() {


        /**
         * 
         * 重新打开订阅器
         * 
         */

        let me = this,
            {
                closed,
                params
            } = me;

        if (!closed) {

            me.close();

            me.open(params);
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.Subscriber.open'] = (() => {

    let equals, assign;

    let var_init_locked_1562145553364;





    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import equals from object.equals
         * 
         * @import assign from object.assign
         * 
         * @param {object} [params = {}] 订阅参数
         * 
         */

        let me = this,
            {
                extraParams,
                defaultParams,
                params: oldParams
            } = me;

        params = assign({}, defaultParams, params, extraParams);

        if (!oldParams || !equals(params, oldParams)) {

            me.close();

            me.params = params;

            me.fireEvent('open', params, oldParams);
        }

    }

    return function(params = {}) {


        if (!var_init_locked_1562145553364) {

            equals = include('object.equals');
            assign = include('object.assign');

            var_init_locked_1562145553364 = true;
        }




        return main.call(this, params);
    };

})();

exports['src::data.Subscriber.close'] = (() => {









    function main() {


        /**
         * 
         * 关闭订阅器
         * 
         */

        let me = this,
            {
                params,
                closed
            } = me;

        if (closed) {

            return;
        }

        delete me.params;

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.Subscriber.destroy'] = (() => {









    function main() {


        /**
         * 
         * 销毁
         * 
         */

        let me = this;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        me.clearAllListeners();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.Subscriber'] = (() => {

    let mixin_1562145552620__1, extend, constructor, get_closed, method_accept, method_reopen, method_open, method_close, method_destroy;

    let var_init_locked_1562145553372;

    let var_class_1562145553372;



    return function() {


        if (!var_init_locked_1562145553372) {

            mixin_1562145552620__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.Subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_accept = include('src::data.Subscriber.accept');
            method_reopen = include('src::data.Subscriber.reopen');
            method_open = include('src::data.Subscriber.open');
            method_close = include('src::data.Subscriber.close');
            method_destroy = include('src::data.Subscriber.destroy');

            var_init_locked_1562145553372 = true;
        }



        if (!var_class_1562145553372) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                accept(...args) {

                    return method_accept.apply(this, args);

                }
                reopen(...args) {

                    return method_reopen.apply(this, args);

                }
                open(...args) {

                    return method_open.apply(this, args);

                }
                close(...args) {

                    return method_close.apply(this, args);

                }
                destroy(...args) {

                    return method_destroy.apply(this, args);

                }

                get closed() {

                    return get_closed.call(this);

                }

            }

            var_class_1562145553372 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553372;
                }

            };
        }


        return var_class_1562145553372;
    };

})();

exports['src::data.connection.message.address'] = (() => {

    let Subscriber;

    let var_init_locked_1562145553385;

    let var_class_1562145553385;



    return function(name, options) {


        if (!var_init_locked_1562145553385) {

            Subscriber = include('data.Subscriber')();

            var_init_locked_1562145553385 = true;
        }



        if (!var_class_1562145553385) {


            /**
             * 
             * 消息地址
             * 
             * @import Subscriber from data.Subscriber value
             * 
             * @param {string} name 消息地址
             * 
             * @param {object} options 消息配置
             * 
             */

            class main extends Subscriber {

                send(to, data) {

                    let me = this;

                    me.fireEvent('send', {
                        from: me.name,
                        to,
                        data
                    });
                }

                accept(data) {

                    let me = this,
                        results = super.accept(data),
                        {
                            from
                        } = data;

                    if (from) {

                        for (let result of results) {

                            if (result instanceof Promise) {

                                result.then(data => me.send(from, data));

                            } else {

                                me.send(from, result);
                            }
                        }
                    }
                }
            }



            var_class_1562145553385 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553385;
                }

            };
        }


        return new var_class_1562145553385(name, options);
    };

})();

exports['src::data.connection.socket'] = (() => {

    let Connection, isObject, getKeys, getValue, equals;

    let var_init_locked_1562145553395;

    let var_class_1562145553395;



    return function() {


        if (!var_init_locked_1562145553395) {

            Connection = include('data.connection')();
            isObject = include('is.object.simple');
            getKeys = include('object.keys');
            getValue = include('object.value.get');
            equals = include('object.equals');

            var_init_locked_1562145553395 = true;
        }



        if (!var_class_1562145553395) {


            /**
             * 
             * Socket 通信
             * 
             * @import Connection from data.connection value
             * 
             * @import isObject from is.object.simple
             * 
             * @import getKeys from object.keys
             * 
             * @import getValue from object.value.get
             * 
             * @import equals from object.equals
             * 
             * @class
             * 
             */

            class main extends Connection {

                validateMessage({
                    params: baseParams
                }, {
                    params: equalParams
                }) {

                    if (isObject(baseParams) && isObject(equalParams)) {

                        let names = Object.keys(equalParams);

                        for (let name of names) {

                            if (baseParams[name] !== equalParams[name]) {

                                return false;
                            }
                        }

                        return true;
                    }

                    return false;
                }
            }

            var_class_1562145553395 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553395;
                }

            };
        }


        return var_class_1562145553395;
    };

})();

exports['src::data.connection.message'] = (() => {

    let Socket, isObject, isString, createAddress, isDefined;

    let var_init_locked_1562145553408;

    let var_class_1562145553408;



    return function() {


        if (!var_init_locked_1562145553408) {

            Socket = include('data.connection.socket')();
            isObject = include('is.object.simple');
            isString = include('is.string');
            createAddress = include('data.connection.message.address');
            isDefined = include('is.defined');

            var_init_locked_1562145553408 = true;
        }



        if (!var_class_1562145553408) {

            /**
             * 
             * 消息订阅
             * 
             * @import Socket from data.connection.socket value
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.string
             * 
             * @import createAddress from data.connection.message.address
             * 
             * @import is.defined
             * 
             * @singleton
             * 
             */

            class main extends Socket {

                constructor() {

                    super({
                        subscriber: createAddress
                    });
                }

                processMessage({
                    from,
                    to,
                    data
                }) {

                    return {
                        params: {
                            address: to
                        },
                        data: {
                            from,
                            to,
                            data
                        }
                    };
                }

                get subscriberListeners() {

                    return {
                        ...super.subscriberListeners,
                        send: 'onMessageSend'
                    };
                }

                subscribe(name) {

                    return super.subscribe(name, {
                        params: {
                            address: name
                        }
                    });
                }

                onMessageSend(address, message) {

                    this.acceptMessage(message);
                }

                send(address, data) {

                    if (isString(address)) {

                        address = {
                            to: address
                        };
                    }

                    if (isObject(address)) {

                        if (!address.hasOwnProperty('data')) {

                            address = {
                                ...address,
                                data
                            };
                        }

                        this.acceptMessage(address);
                    }
                }
            }

            var_class_1562145553408 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553408;
                }

            };
        }


        return new var_class_1562145553408();
    };

})();

exports['src::data.connection.socket.io'] = (() => {

    let Connection;

    let var_init_locked_1562145553430;

    let var_class_1562145553430;



    return function() {


        if (!var_init_locked_1562145553430) {

            Connection = include('data.connection.socket')();

            var_init_locked_1562145553430 = true;
        }



        if (!var_class_1562145553430) {

            /**
             * 
             * 基于 socket.io 标准进行开发
             * 
             * @import Connection from data.connection.socket value
             * 
             * @require socket.io-client
             * 
             * @class
             * 
             */

            const IO = require('socket.io-client');

            class main extends Connection {

                constructor({
                    socket,
                    ...options
                }) {

                    super(options);

                    let {
                        url: socketURL,
                        options: socketOptions
                    } = socket;

                    let me = this,
                        {
                            messageEventName,
                            acceptMessage,
                            resubscribes,
                            onConnect
                        } = me;

                    socket = me.socket = IO(socketURL, {
                        'force new connection': true,
                        transports: [
                            'websocket',
                            'polling'
                        ],
                        ...socketOptions
                    });

                    socket.on(messageEventName, acceptMessage.bind(me));

                    socket.on('reconnect', resubscribes.bind(me));

                    socket.once('connect', onConnect.bind(me));

                    me.firstConnected = false;
                }

                onConnect() {

                    this.firstConnected = true;
                }

                get messageEventName() {

                    return 'msg';
                }


                get subscribeEventName() {

                    return 'sub';
                }

                get unsubscribeEventName() {

                    return 'unsub';
                }


                emit(event, ...params) {

                    let me = this,
                        {
                            firstConnected,
                            socket
                        } = me;

                    if (firstConnected) {

                        if (socket.connected) {

                            socket.emit(event, ...params);
                        }

                    } else {

                        socket.once('connect', () => me.emit(event, ...params));
                    }
                }

                doSubscriberOpen(subscriber, ...args) {

                    let me = this,
                        {
                            subscribeEventName
                        } = me;

                    me.emit(subscribeEventName, ...args);
                }

                doSubscriberClose(subscriber, ...args) {

                    let me = this,
                        {
                            unsubscribeEventName
                        } = me;

                    me.emit(unsubscribeEventName, ...args);
                }
            }

            var_class_1562145553430 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553430;
                }

            };
        }


        return var_class_1562145553430;
    };

})();

exports['src::data.connection.socket.standard'] = (() => {

    let createTimer;

    let var_init_locked_1562145553444;





    /**
     * 
     * 基于标准 WebSocket 进行开发
     * 
     * @import createTimer from timer
     * 
     * @param {string} url socket 连接地址
     * 
     * @param {object} config socket 连接配置
     * 
     */

    function main(url, options = {}) {

        return new Socket(url, options);
    }

    const EventEmitter = require('events');

    class Socket extends EventEmitter {

        constructor(url, options) {

            super();

            let me = this;

            me.url = url;

            me.options = options;

            let {
                timeout = 20000,
                    parse
            } = options;

            me.timer = createTimer(timeout);

            createSocket.call(me);

            let {
                socket
            } = me;

            socket.addEventListener('message', ({
                data
            }) => {

                let {
                    event,
                    params
                } = parse(data);

                me.emit(event, params);

            });

            let onException = () => reconnect.call(me);

            me.once('connect', () => {

                socket.addEventListener('error', onException);

                socket.addEventListener('close', onException);

            });
        }

        get connected() {

            let {
                socket
            } = this;

            return socket.readyState === 1;
        }

        emit(event, ...args) {

            let me = this,
                {
                    connected,
                    options,
                    socket
                } = me,
                {
                    stringify
                } = options;

            if (connected) {

                socket.send(stringify(event, args));

            } else {

                me.on('connect', () => me.emit(event, ...args));
            }
        }

        on(eventName, fn) {

            this.addListener(eventName, fn);
        }
    }

    function reconnect() {

        let me = this;

        if (me.connected) {

            me.socket.close();
        }

        return createSocket.call(me);
    }

    function createSocket() {

        let me = this,
            socket = me.socket = new WebSocket(url),
            {
                timer
            } = me,
            onConnectError = () => me.emit('connect_error');

        timer.start();

        timer.on('timeout', () => me.emit('connect_timeout'));

        socket.addEventListener('open', () => {

            socket.removeEventListener('error', onConnectError);

            timer.end();

            me.emit('connect');

        });

        socket.addEventListener('error', onConnectError);

        return me.socket;
    }

    return function(url, config) {


        if (!var_init_locked_1562145553444) {

            createTimer = include('timer');

            var_init_locked_1562145553444 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::class.create.option'] = (() => {

    let isString, isObject, isClass, create, isDefined;

    let var_init_locked_1562145553448;





    function main(namespace, option) {

        /**
         * 
         * 基于配置的实例
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.class
         * 
         * @import create from class.create
         * 
         * @import is.defined
         * 
         * @param {string} namespace 命名空间
         * 
         * @param {mixed}  [option] 配置
         * 
         * @return {mixed} 类实例
         * 
         */

        if (isString(option)) {

            return create(`${namespace}.${option}`);

        } else if (isObject(option)) {

            let {
                type,
                ...currentOptions
            } = option,
            name;

            if (type) {

                name = `${namespace}.${type}`;

            } else {

                name = namespace;
            }

            return create(name, currentOptions);

        } else if (!isDefined(options)) {

            return create(namespace);
        }

    }

    return function(namespace, option) {


        if (!var_init_locked_1562145553448) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            isClass = include('is.class');
            create = include('class.create');
            isDefined = include('is.defined');

            var_init_locked_1562145553448 = true;
        }




        return main.call(this, namespace, option);
    };

})();

exports['src::object.proxy'] = (() => {










    /**
     * 
     * 对象代理，如果对象没有需要的方法或者属性时，则会抛出异常
     * 
     * @param {mixed} target 需要代理的对象
     * 
     * @return {object.Proxy} 代理对象引用 
     * 
     */

    function main(target) {

        return new Proxy(target);
    }

    class Proxy {

        constructor(target) {

            this.target = target;
        }

        call(method, ...args) {

            let {
                target
            } = this;

            if (method in target) {

                return target[method](...args);

            } else {

                throw new ProxyMethodNotFoundError(target, method);
            }
        }

        callIf(method, ...args) {

            let {
                target
            } = this;

            if (method in target) {

                return target[method](...args);
            }
        }

        set(name, value) {

            let {
                target
            } = this;

            if (name in target) {

                target[name] = value;

            } else {

                throw new ProxyPropertyNotFoundError(target, name, 'set');
            }
        }

        setIf(name, value) {

            let {
                target
            } = this;

            if (name in target) {

                target[name] = value;

            }
        }

        get(name) {

            let {
                target
            } = this;

            if (name in target) {

                return target[name];

            } else {

                throw new ProxyPropertyNotFoundError(target, name, 'get');
            }
        }

        getIf(name) {

            let {
                target
            } = this;

            if (name in target) {

                return target[name];

            }
        }

        fireEvent(name, ...args) {

            let {
                target
            } = this;

            if ('fireEvent' in target) {

                target.fireEvent(name, ...args);
            }
        }
    }

    class ProxyMethodNotFoundError extends Error {

        constructor(target, method) {

            super(`无法访问名称为 ${method} 的方法`);

            let me = this;

            me.proxyTarget = target;

            me.proxyMethod = method;

        }
    }

    class ProxyPropertyNotFoundError extends Error {

        constructor(target, property, mode) {

            let modeMessage;

            switch (mode) {

                case 'set':

                    modeMessage = '设置';

                    break;

                case 'get':

                    modeMessage = '获取';
            }

            super(`无法${modeMessage}名称为 ${property} 的属性`);

            let me = this;

            me.proxyTarget = target;

            me.proxyProperty = property;

        }
    }

    return function(target) {





        return main.call(this, target);
    };

})();

exports['src::data.reader.json'] = (() => {

    let objectValueGet, isString, isFunction, arrayFrom, isEmpty, getModel;

    let var_init_locked_1562145553455;





    /**
     * 
     * JSON 数据读取器
     * 
     * @import object.value.get
     * 
     * @import is.string
     * 
     * @import is.function
     * 
     * @import array.from
     * 
     * @import is.empty
     * 
     * @import getModel from data.model.get
     * 
     * @param {object} [config = {}] 读取参数设置
     * 
     * @param {string} [config.rootProperty = '.'] 读取数据的根
     * 
     * @param {function} [config.model] 数据模型类
     * 
     * @param {boolean} [config.isModelData = true] 是否解析成模型化的数据 
     * 
     * @return {function} 读取器所生成的解析函数
     * 
     */

    function main({
        rootProperty,
        model,
        isModelData
    }) {

        const Model = getModel(model);

        let {
            fields
        } = Model;

        return (new Function('data', `

      var me = this,
         include = me.include,
         converts = me.converts,
         createModel = me.createModel,
         get = include('object.value.get'),
         from = include('array.from'),
         isEmpty = include('is.empty');

      ${generate_get_root_data(rootProperty)}

      data = from(data) ;

      var result = [],
          len = data.length;

      for(var i = 0 ; i < len ; i ++){

         var item = {},
             currentItem = data[i];

         ${generate_get_field_data(fields)}

         result.push(createModel(item)) ;
      }

      return result;

    `)).bind({
            include,
            converts: fields.converts,
            createModel: data => isModelData ? new Model({
                innerData: data
            }) : data
        });
    }

    function generate_get_root_data(rootProperty) {

        if (rootProperty !== '.') {

            return `data = get(data , '${rootProperty}');`;
        }

        return '';
    }

    function generate_get_field_data({
        names
    }) {

        let result = [];

        for (let name of names) {

            result.push(`item['${name}'] = converts['${name}'](currentItem);`);

            result.push(`if(isEmpty(item['${name}'])){

         delete item['${name}'];
      
      }`);
        }

        return result.join('');
    }

    return function({
        rootProperty = '.',
        model,
        isModelData = true
    } = {}) {


        if (!var_init_locked_1562145553455) {

            objectValueGet = include('object.value.get');
            isString = include('is.string');
            isFunction = include('is.function');
            arrayFrom = include('array.from');
            isEmpty = include('is.empty');
            getModel = include('data.model.get');

            var_init_locked_1562145553455 = true;
        }




        return main.call(this, {
            rootProperty,
            model,
            isModelData
        });
    };

})();

exports['src::data.proxy.constructor'] = (() => {

    let createProxy, createReader;

    let var_init_locked_1562145553471;





    function main({
        reader,
        model
    }) {


        /**
         * 
         * 初始化数据代理
         * 
         * @import createProxy from object.proxy
         * 
         * @import createReader from data.reader.json
         * 
         * @param {object} [options = {}] 配置
         * 
         * @param {mixed} [options.reader = {}] 配置读取器
         * 
         * @param {mixed} [options.model] 数据模型
         * 
         */

        let me = this;

        me.proxy = createProxy(me);

        me.reader = createReader({
            ...reader,
            model
        });

    }

    return function({
        reader = {},
        model
    } = {}) {


        if (!var_init_locked_1562145553471) {

            createProxy = include('object.proxy');
            createReader = include('data.reader.json');

            var_init_locked_1562145553471 = true;
        }




        return main.call(this, {
            reader,
            model
        });
    };

})();

exports['src::is.promise'] = (() => {









    function main(data) {


        /**
         * 
         * 判断数据是否为 Promise 对象
         * 
         * @param {mixed} data 测试数据
         * 
         * @return {boolean} 如果是 Promise 则返回 true , 否则返回 false
         * 
         */

        return data instanceof Promise;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.proxy.read'] = (() => {

    let isPromise;

    let var_init_locked_1562145553492;






    /**
     * 
     * 读取数据
     * 
     * @import is.promise
     * 
     * @param {mixed} options 读取数据配置
     * 
     */

    function fireReadEvent(data) {

        let me = this,
            {
                reader
            } = me;

        me.fireEvent('read', reader(data));
    }

    function main(options) {

        let me = this,
            {
                proxy
            } = me,
            data = proxy.call('doRead', options);

        if (isPromise(data)) {

            data.then(data => fireReadEvent.call(me, data));

        } else {

            fireReadEvent.call(me, data);
        }
    }




    return function(options) {


        if (!var_init_locked_1562145553492) {

            isPromise = include('is.promise');

            var_init_locked_1562145553492 = true;
        }




        return main.call(this, options);
    };

})();

exports['src::data.proxy'] = (() => {

    let mixin_1562145552707__1, extend, constructor, method_read;

    let var_init_locked_1562145553494;

    let var_class_1562145553494;



    return function() {


        if (!var_init_locked_1562145553494) {

            mixin_1562145552707__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.proxy.constructor');
            method_read = include('src::data.proxy.read');

            var_init_locked_1562145553494 = true;
        }



        if (!var_class_1562145553494) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                read(...args) {

                    return method_read.apply(this, args);

                }



            }

            var_class_1562145553494 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553494;
                }

            };
        }


        return var_class_1562145553494;
    };

})();

exports['src::data.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1562145553512;

    let var_class_1562145553512;



    return function(options) {


        if (!var_init_locked_1562145553512) {

            Proxy = include('data.proxy')();

            var_init_locked_1562145553512 = true;
        }



        if (!var_class_1562145553512) {


            /**
             * 
             * 内存数据代理
             * 
             * @param {object} options 配置
             * 
             * @import Proxy from data.proxy value
             * 
             */

            class main extends Proxy {

                get proxyType() {

                    return 'memory';
                }

                doRead(data) {

                    return data;
                }
            }

            var_class_1562145553512 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553512;
                }

            };
        }


        return new var_class_1562145553512(options);
    };

})();

exports['src::data.proxy.create'] = (() => {

    let create, srcDataProxyMemory;

    let var_init_locked_1562145553531;





    function main(proxy) {


        /**
         * 
         * 创建新的代理
         * 
         * @import create from class.create.option
         * 
         * @import ..memory
         * 
         * @param {mixed} [proxy = 'memory'] 数据代理
         * 
         * @return {mixed} 数据代理 
         * 
         */

        return create('data.proxy', proxy);

    }

    return function(proxy = 'memory') {


        if (!var_init_locked_1562145553531) {

            create = include('class.create.option');
            srcDataProxyMemory = include('src::data.proxy.memory');

            var_init_locked_1562145553531 = true;
        }




        return main.call(this, proxy);
    };

})();

exports['src::is.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1562145553548;





    function main(data) {


        /**
         * 
         * 判断是否内存代理
         * 
         * @import Proxy from data.proxy value
         * 
         * @param {mixed} data 测试数据
         * 
         * @return {boolean} 如果为内存代理则返回 true , 否则返回 false
         * 
         */


        return data instanceof Proxy && data.proxyType === 'memory';

    }

    return function(data) {


        if (!var_init_locked_1562145553548) {

            Proxy = include('data.proxy')();

            var_init_locked_1562145553548 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::object.assign.if'] = (() => {

    let getKeys, set, get;

    let var_init_locked_1562145553563;






    /**
     * 
     * 如果目标存在来源的字段，则不覆盖
     * 
     * @import getKeys from object.keys
     * 
     * @import set from object.value.set
     * 
     * @import get from object.value.get
     * 
     * @param {object} dest 目标数据
     * 
     * @param {object} [...sources] 来源数据
     * 
     * @return {object} 合并后数据
     * 
     * @scoped
     * 
     */

    function assign(dest, source) {

        let keys = getKeys(source),
            destKeys = getKeys(dest);

        for (let key of keys) {

            if (!destKeys.includes(key)) {

                set(dest, key, get(source, key));
            }
        }

    }

    function main(dest, ...sources) {

        for (let source of sources) {

            assign(dest, source);
        }

        return dest;

    }

    return function(dest, ...sources) {


        if (!var_init_locked_1562145553563) {

            getKeys = include('object.keys');
            set = include('object.value.set');
            get = include('object.value.get');

            var_init_locked_1562145553563 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::data.model.base'] = (() => {

    let isString, isObject, createProxy, isMemoryProxy, assign2;

    let var_init_locked_1562145553569;

    let var_class_1562145553569;



    return function() {


        if (!var_init_locked_1562145553569) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            createProxy = include('data.proxy.create');
            isMemoryProxy = include('is.proxy.memory');
            assign2 = include('object.assign.if');

            var_init_locked_1562145553569 = true;
        }



        if (!var_class_1562145553569) {


            /**
             * 
             * 数据模型
             * 
             * @import is.string
             * 
             * @import isObject from is.object.simple
             * 
             * @import createProxy from data.proxy.create
             * 
             * @import isMemoryProxy from is.proxy.memory
             * 
             * @import assign2 from object.assign.if
             * 
             * @class
             * 
             */

            class main {

                constructor({
                    proxy = {},
                    innerData = {},
                    data,
                    autoLoad
                } = {}) {

                    let me = this,
                        {
                            ZBEE_CURRENT_CLASS
                        } = me;

                    me.fireEventDataCacheCount = 1;

                    (me.proxy = createProxy(assign2({
                        type: 'memory',
                        model: ZBEE_CURRENT_CLASS,
                        reader: {
                            type: 'json',
                            isModelData: false
                        }
                    }, proxy))).addListeners({
                        read: 'onProxyRead',
                        scope: me
                    });

                    me.data = innerData || {};

                    if (data) {

                        let {
                            proxy
                        } = me;

                        if (isMemoryProxy(proxy)) {

                            proxy.read(data);
                        }

                    } else if (autoLoad) {

                        me.load();
                    }
                }

                get idProperty() {

                    return 'id';
                }

                get bubbleTarget() {

                    return this.store;
                }

                static get fieldConfigurations() {

                    return [];
                }

                onProxyRead(proxy, records) {

                    if (records.length) {

                        let me = this;

                        Object.assign(me.data, records[0].data);

                        me.fireEvent('load');
                    }
                }
            }

            var_class_1562145553569 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553569;
                }

            };
        }


        return var_class_1562145553569;
    };

})();

exports['src::data.model.fields'] = (() => {

    let isString, from, isObject, isDefined, getModel, Store;

    let var_init_locked_1562145553590;






    /**
     * 
     * 获取数据字段定义集合
     * 
     * @import is.string
     * 
     * @import from from array.from
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.defined
     * 
     * @import getModel from data.model.get
     * 
     * @import Store from data.store value
     * 
     * @return {data.Fields} 字段定义集合 
     * 
     */

    const createConvertFn = mapping => data => data[mapping],
        defaultGetFn = data => data,
        defaultEqualsFn = (value, oldValue) => value !== oldValue,
        defaultSetFn = function(value, name) {

            this.data[name] = value;
        },
        {
            assign,
            keys
        } = Object;

    function main() {

        let me = this,
            {
                $fields
            } = me;

        if ($fields) {

            return $fields;
        }

        let {
            fieldConfigurations
        } = me,
        fields = [];

        for (let fieldConfig of fieldConfigurations) {

            if (isString(fieldConfig)) {

                fieldConfig = {
                    name: fieldConfig,
                    convert: createConvertFn(fieldConfig),
                    get: defaultGetFn,
                    equals: defaultEqualsFn,
                    set: defaultSetFn
                };

            } else if (isObject(fieldConfig)) {

                let {
                    name,
                    convert,
                    mapping,
                    persistent = false,
                    get = defaultGetFn,
                    equals = defaultEqualsFn,
                    set = defaultSetFn,
                    defaultValue,
                    ...otherFieldConfig
                } = fieldConfig;

                if (persistent) {

                    convert = () => defaultValue;

                } else {

                    if (mapping) {

                        convert = createConvertFn(mapping);
                    }

                    convert = convert || createConvertFn(name);

                    if (isDefined(defaultValue)) {

                        let oldConvert = convert;

                        convert = (data) => {

                            let value = oldConvert(data);

                            return isDefined(value) ? value : defaultValue;

                        };
                    }
                }

                fieldConfig = {
                    name,
                    convert,
                    get,
                    set,
                    equals,
                    ...otherFieldConfig
                };
            }

            if (isObject(fieldConfig)) {

                let {
                    hasMany,
                    hasOne,
                    belongsTo
                } = fieldConfig;

                let association;

                if (hasMany) {

                    association = {
                        type: 'hasMany',
                        ...hasMany
                    };

                    delete fieldConfig.hasMany;
                }

                if (hasOne) {

                    association = {
                        type: 'hasOne',
                        ...hasOne
                    };

                    delete fieldConfig.hasOne;
                }


                if (belongsTo) {

                    association = {
                        type: 'belongsTo',
                        ...belongsTo
                    };

                }

                if (association) {

                    assign(fieldConfig, getAssociationConfig(me, association));
                }
            }

            fields.push(fieldConfig);
        }

        return me.$fields = new Fields(fields);
    }

    function getAssociationConfig(model, {
        model: AssociationModel,
        autoLoad,
        type,
        associationKey,
        assocationMode = 'local-data'
    }) {

        if (AssociationModel) {

            AssociationModel = getModel(associationModel);

        } else {

            AssociationModel = model;
        }

        switch (type) {

            case 'hasMany':

                switch (assocationMode) {

                    case 'local-data':

                        return {
                            convert: data => new Store({
                                model: AssociationModel,
                                autoLoad,
                                data,
                                proxy: {
                                    reader: {
                                        rootProperty: associationKey
                                    }
                                }
                            })
                        };

                    case 'local-key':

                        return {
                            convert: data => from(createConvertFn(associationKey)(data)),
                                get: keys => this.store.getByIds(keys)
                        };

                    case 'remote-key':

                        // 等待远程 AJAX 代理实现

                        break;
                }

                break;

            case 'hasOne':
            case 'belongsTo':

                switch (assocationMode) {

                    case 'local-data':

                        return {
                            convert: data => new AssociationModel({
                                autoLoad,
                                data,
                                proxy: {
                                    reader: {
                                        rootProperty: associationKey
                                    }
                                }
                            })
                        };

                    case 'local-key':

                        return {
                            convert: createConvertFn(associationKey),
                                get(key) {

                                    let {
                                        store
                                    } = this;

                                    if (store) {

                                        return store.getById(key);
                                    }


                                }
                        };

                    case 'remote-key':

                        // 等待远程 AJAX 代理实现

                        break;
                }
        }
    }

    class Fields {

        constructor(fields) {

            let me = this,
                names = [],
                innerFields = [];

            for (let field of fields) {

                let {
                    name
                } = field;

                if (!names.includes(name)) {

                    innerFields.push(field);

                    names.push(name);

                } else {

                    innerFields[names.indexOf(name)] = field;
                }
            }

            me.fields = innerFields;

            me.names = names;
        }

        getField(name) {

            let me = this,
                index = getFieldIndex.call(me, name);

            if (index !== -1) {

                return me.fields[index];
            }
        }

        hasField(name) {

            return getFieldIndex.call(this, name) !== -1;
        }

        get converts() {

            let {
                fields
            } = this,
            converts = {};

            for (let {
                    name,
                    convert
                } of fields) {

                converts[name] = convert;
            }

            return converts;
        }
    }

    function getFieldIndex(name) {

        let {
            names
        } = this;

        return names.indexOf(name);
    }

    return function() {


        if (!var_init_locked_1562145553590) {

            isString = include('is.string');
            from = include('array.from');
            isObject = include('is.object.simple');
            isDefined = include('is.defined');
            getModel = include('data.model.get');
            Store = include('data.store')();

            var_init_locked_1562145553590 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.model.store.bind.is'] = (() => {









    function main() {


        /**
         * 
         * 检测当前记录是否绑定存储器
         * 
         * @return {boolean} 如果记录绑定存储器则返回 true , 否则返回 false 
         * 
         */

        return this.hasOwnProperty('store');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.id'] = (() => {

    let getId;

    let var_init_locked_1562145553608;





    function main() {


        /**
         * 
         * 返回数据记录编号
         * 
         * @import getId from id.generate
         * 
         * @return {mixed} 编号 
         * 
         */

        let me = this,
            {
                $id
            } = me;

        if ($id) {

            return $id;
        }

        let {
            idProperty
        } = me;

        if (me.has(idProperty)) {

            return me.$id = me.get(idProperty);

        }

        return me.$id = getId('model-');

    }

    return function() {


        if (!var_init_locked_1562145553608) {

            getId = include('id.generate');

            var_init_locked_1562145553608 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.model.store.bind'] = (() => {









    function main(store) {


        /**
         * 
         * 绑定存储器
         * 
         * @param {data.Store} store 数据存储器
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let me = this;

        if (!me.isBindStore) {

            me.store = store;
        }

    }

    return function(store) {





        return main.call(this, store);
    };

})();

exports['src::data.model.store.unbind'] = (() => {









    function main() {


        /**
         * 
         * 解绑存储器
         * 
         */

        delete this.store;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.has'] = (() => {









    function main(name) {


        /**
         * 
         * 判断是否拥有此字段
         * 
         * @param {string} name 字段名称
         * 
         * @return {boolean} 如果拥有指定字段则返回 true , 否则返回 false
         * 
         */

        let {
            fields
        } = this.ZBEE_CURRENT_CLASS;

        return fields.hasField(name);

    }

    return function(name) {





        return main.call(this, name);
    };

})();

exports['src::data.model.value.set'] = (() => {

    let isString, isObject;

    let var_init_locked_1562145553618;





    function main(name, value) {


        /**
         * 
         * 设置属性
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @param {mixed} name 属性名称
         * 
         * @param {mixed} value 属性值
         * 
         */

        let values;

        if (isString(name)) {

            values = {
                [name]: value
            };

        } else {

            values = name;
        }

        if (isObject(values)) {

            let me = this,
                {
                    ZBEE_CURRENT_CLASS
                } = me,
                {
                    fields
                } = ZBEE_CURRENT_CLASS,
                names = Object.keys(values),
                updateValues = {};

            for (let name of names) {

                let field = fields.getField(name);

                if (field) {

                    let value = values[name],
                        oldValue = me.get(name);

                    if (field.equals.call(me, value, oldValue)) {

                        field.set.call(me, value, name);

                        updateValues[name] = value;

                        me.fireEvent('update', name, value, oldValue);
                    }
                }
            }

            return updateValues;
        }

    }

    return function(name, value) {


        if (!var_init_locked_1562145553618) {

            isString = include('is.string');
            isObject = include('is.object.simple');

            var_init_locked_1562145553618 = true;
        }




        return main.call(this, name, value);
    };

})();

exports['src::data.model.value.get'] = (() => {









    function main(name) {


        /**
         * 
         * 获取属性
         * 
         * @param {mixed} name 属性名称
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let me = this,
            {
                data,
                ZBEE_CURRENT_CLASS
            } = me,
            {
                fields
            } = ZBEE_CURRENT_CLASS,
            field = fields.getField(name);

        if (field) {

            return field.get.call(me, data[name]);
        }

    }

    return function(name) {





        return main.call(this, name);
    };

})();

exports['src::data.model.load'] = (() => {









    function main(options) {


        /**
         * 
         * 加载数据
         * 
         * @param {mixed} options 加载配置
         * 
         * 
         */

        this.proxy.read(options);

    }

    return function(options) {





        return main.call(this, options);
    };

})();

exports['src::data.model.destroy'] = (() => {









    function main(data) {


        /**
         * 
         * 函数实现说明
         * 
         * @param {mixed} data 参数说明
         * 
         * @return {mixed} 返回说明 
         * 
         */

        // 代码实现

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.model'] = (() => {

    let mixin_1562145552703__1, extend, static_get_fields, get_isBindStore, get_id, method_bindStore, method_unbindStore, method_has, method_set, method_get, method_load, method_destroy;

    let var_init_locked_1562145553627;

    let var_class_1562145553627;



    return function() {


        if (!var_init_locked_1562145553627) {

            mixin_1562145552703__1 = include('mixin.observable');
            extend = include('src::data.model.base')();
            static_get_fields = include('src::data.model.fields');
            get_isBindStore = include('src::data.model.store.bind.is');
            get_id = include('src::data.model.id');
            method_bindStore = include('src::data.model.store.bind');
            method_unbindStore = include('src::data.model.store.unbind');
            method_has = include('src::data.model.has');
            method_set = include('src::data.model.value.set');
            method_get = include('src::data.model.value.get');
            method_load = include('src::data.model.load');
            method_destroy = include('src::data.model.destroy');

            var_init_locked_1562145553627 = true;
        }



        if (!var_class_1562145553627) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {



                static get fields() {

                    return static_get_fields.call(this);

                }



                bindStore(...args) {

                    return method_bindStore.apply(this, args);

                }
                unbindStore(...args) {

                    return method_unbindStore.apply(this, args);

                }
                has(...args) {

                    return method_has.apply(this, args);

                }
                set(...args) {

                    return method_set.apply(this, args);

                }
                get(...args) {

                    return method_get.apply(this, args);

                }
                load(...args) {

                    return method_load.apply(this, args);

                }
                destroy(...args) {

                    return method_destroy.apply(this, args);

                }

                get isBindStore() {

                    return get_isBindStore.call(this);

                }
                get id() {

                    return get_id.call(this);

                }

            }

            var_class_1562145553627 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553627;
                }

            };
        }


        return var_class_1562145553627;
    };

})();

exports['src::is.class.from'] = (() => {

    let isClass, isString;

    let var_init_locked_1562145553643;





    function main(data, baseClass) {


        /**
         * 
         * 判定数据是否为指定类
         * 
         * @import is.class
         * 
         * @import is.string
         * 
         * @param {mixed} data 测试数据
         * 
         * @param {mixed} baseClass 基准类
         * 
         * @return {boolean} 如果数据为基准类时则返回 true ,  否则返回 false
         * 
         */

        if (isString(baseClass)) {

            baseClass = include(baseClass)();
        }

        return isClass(data) && isClass(baseClass) && (data === baseClass || data.prototype instanceof baseClass);

    }

    return function(data, baseClass) {


        if (!var_init_locked_1562145553643) {

            isClass = include('is.class');
            isString = include('is.string');

            var_init_locked_1562145553643 = true;
        }




        return main.call(this, data, baseClass);
    };

})();

exports['src::is.data.model.class'] = (() => {

    let dataModel, isClass;

    let var_init_locked_1562145553645;





    function main(data) {


        /**
         * 
         * 判断是否为数据模型类
         * 
         * 
         * @import data.model
         * 
         * @import isClass from is.class.from
         * 
         * @param {mixed} data 参照数据
         * 
         * @return {boolean} 如果是数据模型类则返回 true , 否则返回 false 
         * 
         */

        return isClass(data, 'data.model');



    }

    return function(data) {


        if (!var_init_locked_1562145553645) {

            dataModel = include('data.model');
            isClass = include('is.class.from');

            var_init_locked_1562145553645 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.model.get'] = (() => {

    let Model, isModelClass, isString, isFunction;

    let var_init_locked_1562145553662;





    function main(model) {

        /**
         * 
         * 获取数据模型类引用
         * 
         * @import Model from data.model value
         * 
         * @import isModelClass from is.data.model.class
         * 
         * @import is.string
         * 
         * @import is.function
         * 
         * @param {mixed} model 数据模型名称
         * 
         * @return {data.Model} 模型类引用
         * 
         */

        if (isString(model)) {

            model = include(`data.model.${model}`);
        }

        if (isModelClass(model)) {

            return model;
        }

        return Model;

    }

    return function(model) {


        if (!var_init_locked_1562145553662) {

            Model = include('data.model')();
            isModelClass = include('is.data.model.class');
            isString = include('is.string');
            isFunction = include('is.function');

            var_init_locked_1562145553662 = true;
        }




        return main.call(this, model);
    };

})();

exports['src::class.define'] = (() => {









    function main(BaseClass) {


        /**
         * 
         * 类定义
         * 
         * @param {mixed} BaseClass 基准类
         * 
         * @return {mixed} 类
         * 
         */

        return class extends BaseClass {

            get ZBEE_CURRENT_CLASS() {

                return BaseClass;
            }

        };

    }

    return function(BaseClass) {





        return main.call(this, BaseClass);
    };

})();

exports['src::data.model.create'] = (() => {

    let Model, get, define;

    let var_init_locked_1562145553682;






    /**
     * 
     * 根据字段创建一个数据模型类
     * 
     * @import Model from data.model value
     * 
     * @import get from data.model.get
     * 
     * @import define from class.define
     *
     * @param {object} [config = {}] 配置
     * 
     * @param {mixed} [config.fields = []] 字段定义
     * 
     * @param {string} [config.idProperty = 'id'] 编号字段名称
     * 
     * @return {data.Model} 数据模型类 
     * 
     */

    function main({
        fields,
        idProperty
    }) {


        return define(class extends Model {

            static get fieldConfigurations() {

                return fields;
            }

            get idProperty() {

                return idProperty;
            }
        });
    }

    return function({
        fields = [],
        idProperty = 'id'
    } = {}) {


        if (!var_init_locked_1562145553682) {

            Model = include('data.model')();
            get = include('data.model.get');
            define = include('class.define');

            var_init_locked_1562145553682 = true;
        }




        return main.call(this, {
            fields,
            idProperty
        });
    };

})();

exports['src::is.data.model'] = (() => {

    let Model;

    let var_init_locked_1562145553698;





    function main(data) {


        /**
         * 
         * 判定数据是否为数据模型对象
         * 
         * @import Model from data.model value
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果检测为数据模型则返回 true , 否则返回 false 
         * 
         */

        return data instanceof Model;

    }

    return function(data) {


        if (!var_init_locked_1562145553698) {

            Model = include('data.model')();

            var_init_locked_1562145553698 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.recordset'] = (() => {

    let remove, removeIndex, insert, from, isModel, isObject, isDefined, isString, isFunction, clone;

    let var_init_locked_1562145553717;

    let var_class_1562145553717;



    return function(store) {


        if (!var_init_locked_1562145553717) {

            remove = include('array.remove');
            removeIndex = include('array.remove.index');
            insert = include('array.insert');
            from = include('array.from');
            isModel = include('is.data.model');
            isObject = include('is.object.simple');
            isDefined = include('is.defined');
            isString = include('is.string');
            isFunction = include('is.function');
            clone = include('array.clone');

            var_init_locked_1562145553717 = true;
        }



        if (!var_class_1562145553717) {

            /**
             * 
             * 数据记录集合
             * 
             * @import remove from array.remove
             * 
             * @import removeIndex from array.remove.index
             * 
             * @import insert from array.insert
             * 
             * @import from from array.from
             * 
             * @import isModel from is.data.model
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.defined
             * 
             * @import is.string
             * 
             * @import is.function
             * 
             * @import clone from array.clone
             * 
             * @param {data.Store} store 存储器
             * 
             */

            class main {

                constructor(store) {

                    let me = this;

                    me.recordMap = new Map();

                    me.recordData = [];

                    me.store = store;
                }

                /**
                 * 
                 * 转换成数组输出
                 * 
                 * @return {array}
                 * 
                 */
                toArray() {

                    return clone(this.recordData);
                }

                /**
                 * 
                 * 根据编号获得数据记录
                 * 
                 * @param {mixed} id 数据记录编号
                 * 
                 * @return {data.Model} 
                 * 
                 */
                getById(id) {

                    let {
                        recordMap
                    } = this;

                    return recordMap.get(id);
                }

                /**
                 * 
                 * 根据数据记录获得在存储器中的位置
                 * 
                 * @param {data.Model} record 数据记录
                 * 
                 * @return {number} 数据记录位置
                 * 
                 */
                indexOf(record) {

                    let {
                        recordData
                    } = this;

                    return recordData.indexOf(record);
                }

                /**
                 * 
                 * 查寻数据记录
                 * 
                 * @param {mixed} property 属性名称
                 *  
                 * @param {mixed} [value] 属性值
                 * 
                 * @return {array} 数据记录集合
                 *  
                 */
                findRecords(property, value) {

                    let {
                        recordData: records
                    } = this;

                    if (isString(property)) {

                        let result = [];

                        for (let record of records) {

                            if (record.get(property) === value) {

                                result.push(record);
                            }
                        }

                        return result;

                    } else if (isFunction(property)) {

                        let result = [];

                        for (let record of records) {

                            if (property.call(value, record) === true) {

                                result.push(record);
                            }
                        }

                        return result;

                    }
                }

                /**
                 * 
                 * 清理
                 * 
                 */
                clear() {

                    let {
                        recordMap,
                        recordData
                    } = this;

                    recordMap.clear();

                    recordData.length = 0;
                }

                /**
                 * 
                 * @param {function} fn 循环执行的函数
                 *  
                 * @param {mixed} scope 
                 */
                each(fn, scope) {

                    let {
                        recordData
                    } = this;

                    for (let record of recordData) {

                        fn.call(scope, record);
                    }
                }

                /**
                 * 
                 * 添加数据记录
                 * 
                 * @param {mixed} records 数据记录
                 * 
                 * 
                 */
                add(records) {

                    let me = this,
                        {
                            recordData
                        } = me;

                    records = getRecords.call(me, records);

                    recordData.push(...records);

                    resetRecordData(recordData);

                    return records;
                }
                /**
                 * 
                 * 插入数据记录
                 * 
                 * @param {mixed} records 数据记录
                 * 
                 * 
                 */
                insert(index, records) {

                    let me = this,
                        {
                            recordData
                        } = me;

                    records = getRecords.call(me, records);

                    insert(recordData, index, ...records);

                    resetRecordData(recordData);

                    return records;
                }
                /**
                 * 
                 * 删除数据记录
                 * 
                 * @param {mixed} records 数据记录
                 * 
                 * 
                 */
                remove(records) {

                    records = from(records);

                    let {
                        recordMap,
                        recordData
                    } = this,
                    removeRecords = [];

                    for (let record of records) {

                        let {
                            id
                        } = record;

                        if (recordMap.has(id)) {

                            recordMap.delete(id);

                            remove(recordData, record);

                            record.unbindStore();

                            removeRecords.push(record);
                        }
                    }

                    return removeRecords;
                }
            }

            /**
             * 
             * 待处理的数据记录
             * 
             * @param {mixed} records 数据记录
             * 
             */
            function getRecords(records) {

                records = from(records);

                let {
                    recordMap,
                    recordData,
                    store
                } = this,
                result = [];

                for (let record of records) {

                    if (isObject(record)) {

                        record = store.createRecord(record);
                    }

                    if (isModel(record)) {

                        let {
                            id
                        } = record;

                        if (recordMap.has(id)) {

                            record = recordMap.get(id);

                            removeRecord(recordData, record);

                            record.set(record.data);

                        } else {

                            recordMap.set(id, record);

                            if (record.isBindStore && record.store !== store) {

                                continue;
                            }

                            record.bindStore(store);
                        }

                        result.push(record);
                    }
                }

                return result;
            }

            function removeRecord(recordData, record) {

                let index = recordData.indexOf(record);

                if (index !== -1) {

                    recordData[index] = undefined;
                }
            }

            function resetRecordData(recordData) {

                let index;

                while ((index = recordData.indexOf(undefined)) !== -1) {

                    removeIndex(recordData, index);
                }
            }


            var_class_1562145553717 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553717;
                }

            };
        }


        return new var_class_1562145553717(store);
    };

})();

exports['src::data.store.base'] = (() => {

    let get, create, assign, createProxy, isMemoryProxy, createReader, createRecordset;

    let var_init_locked_1562145553734;

    let var_class_1562145553734;



    return function() {


        if (!var_init_locked_1562145553734) {

            get = include('data.model.get');
            create = include('data.model.create');
            assign = include('object.assign');
            createProxy = include('data.proxy.create');
            isMemoryProxy = include('is.proxy.memory');
            createReader = include('data.reader.json');
            createRecordset = include('data.recordset');

            var_init_locked_1562145553734 = true;
        }



        if (!var_class_1562145553734) {


            /**
             * 
             * 数据存储器
             * 
             * @import get from data.model.get
             * 
             * @import create from data.model.create
             * 
             * @import assign from object.assign
             * 
             * @import createProxy from data.proxy.create
             * 
             * @import isMemoryProxy from is.proxy.memory
             * 
             * @import createReader from data.reader.json
             * 
             * @import createRecordset from data.recordset
             * 
             * @class
             * 
             */

            class main {

                createRecord(data) {

                    let records = this.reader(data);

                    if (records.length) {

                        return records[0];
                    }
                }

                onProxyRead(proxy, records) {

                    let me = this,
                        {
                            recordset
                        } = me;

                    recordset.add(records);

                    me.fireEvent('load', records);
                }
            }



            var_class_1562145553734 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553734;
                }

            };
        }


        return var_class_1562145553734;
    };

})();

exports['src::object.link'] = (() => {

    let isFunction;

    let var_init_locked_1562145553751;





    function main(dest, source, names) {

        /**
         * 
         * 将对象的方法或者属性进行链接
         * 
         * @import is.function
         * 
         * @param {mixed} dest 目标对象
         * 
         * @param {mixed} source 来源对象
         * 
         * @param {array} names 字段名称集合
         * 
         */

        for (let name of names) {

            let value = source[name];

            if (isFunction(value)) {

                dest[name] = (...args) => source[name](...args);

            } else {

                Object.defineProperty(dest, name, {

                    set: value => source[name] = value,

                    get: () => source[name]

                });
            }
        }

    }

    return function(dest, source, names) {


        if (!var_init_locked_1562145553751) {

            isFunction = include('is.function');

            var_init_locked_1562145553751 = true;
        }




        return main.call(this, dest, source, names);
    };

})();

exports['src::data.store.constructor'] = (() => {

    let create, get, assign, createProxy, isMemoryProxy, createReader, createRecordset, link;

    let var_init_locked_1562145553754;





    function main({
        proxy,
        data,
        autoLoad,
        fields,
        model
    }) {


        /**
         * 
         * 初始化数据存储器
         * 
         * @import create from data.model.create
         * 
         * @import get from data.model.get
         * 
         * @import assign from object.assign
         * 
         * @import createProxy from data.proxy.create
         * 
         * @import isMemoryProxy from is.proxy.memory
         * 
         * @import createReader from data.reader.json
         * 
         * @import createRecordset from data.recordset
         * 
         * @import link from object.link
         * 
         * @param {object} config 配置
         * 
         * @param {object} [config.proxy = {}] 数据代理
         * 
         * @param {mixed} [config.data] 初始数据
         * 
         * @param {boolean} [config.autoLoad = false] 自动加载
         * 
         * @param {array} [config.fields] 数据字段定义
         * 
         * @param {data.Model} [config.model] 数据模型
         * 
         * 
         */

        if (fields) {

            model = create({
                fields
            });

        }

        if (model) {

            model = get(model);

        }

        let me = this;

        me.fireEventDataCacheCount = 1;

        (me.proxy = createProxy(assign({
            type: 'memory',
            model,
            reader: {
                type: 'json'
            }
        }, proxy))).addListeners({
            read: 'onProxyRead',
            scope: me
        });

        let recordset = me.recordset = createRecordset(me);

        if (data) {

            let {
                proxy
            } = me;

            if (isMemoryProxy(proxy)) {

                proxy.read(data)
            }

        } else if (autoLoad) {

            me.load();
        }

        me.reader = createReader({
            model
        });

        link(me, recordset, [
            'indexOf',
            'findRecords',
            'getById'
        ]);

    }

    return function({
        proxy = {},
        data,
        autoLoad = false,
        fields,
        model
    }) {


        if (!var_init_locked_1562145553754) {

            create = include('data.model.create');
            get = include('data.model.get');
            assign = include('object.assign');
            createProxy = include('data.proxy.create');
            isMemoryProxy = include('is.proxy.memory');
            createReader = include('data.reader.json');
            createRecordset = include('data.recordset');
            link = include('object.link');

            var_init_locked_1562145553754 = true;
        }




        return main.call(this, {
            proxy,
            data,
            autoLoad,
            fields,
            model
        });
    };

})();

exports['src::data.store.add'] = (() => {









    function main(records, isFireEvent) {

        /**
         * 
         * 插入记录
         * 
         * @param {mixed} records 数据记录
         * 
         * @param {boolean} [isFireEvent = true] 是否触发插入事件
         * 
         */

        let me = this,
            {
                recordset
            } = me;

        records = recordset.add(records);

        if (records.length) {

            if (isFireEvent) {

                me.fireEvent('add', records);
            }
        }

        return records;

    }

    return function(records, isFireEvent = true) {





        return main.call(this, records, isFireEvent);
    };

})();

exports['src::data.store.insert'] = (() => {









    function main(index, records, isFireEvent) {


        /**
         * 
         * 插入记录
         * 
         * @param {number} index 插入位置
         * 
         * @param {mixed} records 数据记录
         * 
         * @param {boolean} [isFireEvent = true] 是否触发插入事件
         * 
         */

        let me = this,
            {
                recordset
            } = me;

        records = recordset.insert(index, records);

        if (records.length) {

            if (isFireEvent) {

                me.fireEvent('insert', index, records);
            }
        }

        return records;

    }

    return function(index, records, isFireEvent = true) {





        return main.call(this, index, records, isFireEvent);
    };

})();

exports['src::data.store.remove'] = (() => {

    let remove, from;

    let var_init_locked_1562145553775;





    function main(records, isFireEvent) {


        /**
         * 
         * 删除记录
         * 
         * @import remove from array.remove
         * 
         * @import from from array.from
         * 
         * @param {mixed} records 数据记录
         * 
         * @param {boolean} [isFireEvent = true] 是否触发删除事件
         * 
         */

        let me = this,
            {
                recordset
            } = me;

        records = recordset.remove(records);

        if (records.length && isFireEvent) {

            me.fireEvent('remove', records);
        }

        return records;






    }

    return function(records, isFireEvent = true) {


        if (!var_init_locked_1562145553775) {

            remove = include('array.remove');
            from = include('array.from');

            var_init_locked_1562145553775 = true;
        }




        return main.call(this, records, isFireEvent);
    };

})();

exports['src::data.store.load'] = (() => {









    function main(options, isClear) {


        /**
         * 
         * 加载数据
         * 
         * @param {mixed} options 数据或者配置
         * 
         * @param {boolean} [isClear = true] 是否在加载前清除
         * 
         */

        let me = this,
            {
                proxy
            } = me;

        if (isClear) {

            me.clear();
        }

        proxy.read(options);

    }

    return function(options, isClear = true) {





        return main.call(this, options, isClear);
    };

})();

exports['src::data.store.clear'] = (() => {









    function main() {


        /**
         * 
         * 清理
         * 
         * 
         */

        let me = this,
            {
                recordset
            } = me;

        recordset.clear();

        me.fireEvent('clear');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.store'] = (() => {

    let mixin_1562145552693__1, extend, constructor, method_add, method_insert, method_remove, method_load, method_clear;

    let var_init_locked_1562145553783;

    let var_class_1562145553783;



    return function() {


        if (!var_init_locked_1562145553783) {

            mixin_1562145552693__1 = include('mixin.observable');
            extend = include('src::data.store.base')();
            constructor = include('src::data.store.constructor');
            method_add = include('src::data.store.add');
            method_insert = include('src::data.store.insert');
            method_remove = include('src::data.store.remove');
            method_load = include('src::data.store.load');
            method_clear = include('src::data.store.clear');

            var_init_locked_1562145553783 = true;
        }



        if (!var_class_1562145553783) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                add(...args) {

                    return method_add.apply(this, args);

                }
                insert(...args) {

                    return method_insert.apply(this, args);

                }
                remove(...args) {

                    return method_remove.apply(this, args);

                }
                load(...args) {

                    return method_load.apply(this, args);

                }
                clear(...args) {

                    return method_clear.apply(this, args);

                }



            }

            var_class_1562145553783 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553783;
                }

            };
        }


        return var_class_1562145553783;
    };

})();

exports['src::data.store.create'] = (() => {

    let create, srcDataStore;

    let var_init_locked_1562145553799;





    function main(store) {


        /**
         * 
         * 创建新的数据存储器
         * 
         * @import create from class.create.option
         * 
         * @import ....store
         * 
         * @param {mixed} [store] 数据代理
         * 
         * @return {mixed} 数据代理 
         * 
         */

        return create('data.store', store);



    }

    return function(store) {


        if (!var_init_locked_1562145553799) {

            create = include('class.create.option');
            srcDataStore = include('src::data.store');

            var_init_locked_1562145553799 = true;
        }




        return main.call(this, store);
    };

})();

exports['src::mixin.region.xy.anchor.get'] = (() => {









    function main(anchor) {


        /**
         * 
         * 计算当前区域锚点坐标
         * 
         * @param {string} [anchor = 'tl'] 锚点信息
         * 
         * @return {object} 坐标值 
         * 
         */

        let {
            x,
            y,
            width,
            height
        } = this;

        switch (anchor) {

            case 'c':

                return {
                    x: x + width / 2,
                        y: y + height / 2
                };

            case 'tl':

                return {
                    x,
                    y
                };

            case 'tr':

                return {
                    x: x + width,
                        y
                };

            case 'br':

                return {
                    x: x + width,
                        y: y + height
                };

            case 'bl':

                return {
                    x,
                    y: y + height
                };

            case 'r':

                return {
                    x: x + width,
                        y: y + height / 2
                };

            case 'l':

                return {
                    x,
                    y: y + height / 2
                };

            case 't':

                return {
                    x: x + width / 2,
                        y
                };

            case 'b':

                return {
                    x: x + width / 2,
                        y: y + height
                }
        }

    }

    return function(anchor = 'tl') {





        return main.call(this, anchor);
    };

})();

exports['src::mixin.region.xy.anchor.set'] = (() => {

    let isDefined;

    let var_init_locked_1562145553818;





    function main(xy, anchor) {


        /**
         * 
         * 计算当前区域锚点坐标
         * 
         * @import is.defined
         * 
         * @param {object} xy 设置坐标
         * 
         * @param {string} [anchor = 'tl'] 锚点信息
         * 
         * @return {object} 坐标值 
         * 
         */

        let {
            x: originX,
            y: originY,
            width,
            height
        } = this, {
            x,
            y
        } = xy,
        defaultXY = {};

        if (!isDefined(x)) {

            defaultXY.x = originX;
        }

        if (!isDefined(y)) {

            defaultXY.y = originY;
        }

        const {
            assign
        } = Object;

        switch (anchor) {

            case 'c':

                return assign({
                    x: x - width / 2,
                    y: y - height / 2
                }, defaultXY);

            case 'tl':

                return assign({
                    x,
                    y
                }, defaultXY);

            case 'tr':

                return assign({
                    x: x - width,
                    y
                }, defaultXY);

            case 'br':

                return assign({
                    x: x - width,
                    y: y - height
                }, defaultXY);

            case 'bl':

                return assign({
                    x,
                    y: y - height
                }, defaultXY);

            case 'r':

                return assign({
                    x: x - width,
                    y: y - height / 2
                }, defaultXY);

            case 'l':

                return assign({
                    x,
                    y: y - height / 2
                }, defaultXY);

            case 't':

                return assign({
                    x: x - width / 2,
                    y
                }, defaultXY);

            case 'b':

                return assign({
                    x: x - width / 2,
                    y: y - height
                }, defaultXY);
        }

    }

    return function(xy, anchor = 'tl') {


        if (!var_init_locked_1562145553818) {

            isDefined = include('is.defined');

            var_init_locked_1562145553818 = true;
        }




        return main.call(this, xy, anchor);
    };

})();

exports['src::mixin.region'] = (() => {

    let method_getAnchorXY, method_setAnchorXY;

    let var_init_locked_1562145553821;





    function main(extend) {

        return class extends extend {







            getAnchorXY(...args) {

                return method_getAnchorXY.apply(this, args);

            }
            setAnchorXY(...args) {

                return method_setAnchorXY.apply(this, args);

            }



        }

    }

    return function(extend) {


        if (!var_init_locked_1562145553821) {

            method_getAnchorXY = include('src::mixin.region.xy.anchor.get');
            method_setAnchorXY = include('src::mixin.region.xy.anchor.set');

            var_init_locked_1562145553821 = true;
        }




        return main.call(this, extend);
    };

})();

exports['src::is.object.empty'] = (() => {









    function main(data) {


        /**
         * 
         * 判断对象是否没有字段
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果没有字段则返回 true , 否则返回 false
         * 
         */

        return Object.keys(data).length === 0;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.model.node.tree.base'] = (() => {

    let Model, insert, remove, region, isEmpty;

    let var_init_locked_1562145553834;

    let var_class_1562145553834;



    return function() {


        if (!var_init_locked_1562145553834) {

            Model = include('data.model')();
            insert = include('array.insert');
            remove = include('array.remove');
            region = include('mixin.region');
            isEmpty = include('is.object.empty');

            var_init_locked_1562145553834 = true;
        }



        if (!var_class_1562145553834) {


            /**
             * 
             * 树型数据模型
             * 
             * @import Model from data.model value
             * 
             * @import insert from array.insert
             * 
             * @import remove from array.remove
             * 
             * @import region from mixin.region
             * 
             * @import isEmpty from is.object.empty
             * 
             * @param {mixed} data 数据
             * 
             * @class
             * 
             */

            class main extends Model {

                syncSize({
                    width,
                    height
                }) {

                    return !isEmpty(this.set({
                        width,
                        height
                    }));
                }

                static get fieldConfigurations() {

                    return [
                        'id',
                        'parentId',
                        {
                            name: 'expanded',
                            persistent: true,
                            defaultValue: false
                        }, {
                            name: 'width',
                            persistent: true,
                            defaultValue: 0
                        }, {
                            name: 'height',
                            persistent: true,
                            defaultValue: 0
                        }, {
                            name: 'x',
                            persistent: true,
                            defaultValue: 0
                        }, {
                            name: 'y',
                            persistent: true,
                            defaultValue: 0
                        }, {
                            name: 'selected',
                            persistent: true,
                            defaultValue: false
                        }, {
                            name: 'hidden',
                            persistent: true,
                            defaultValue: true
                        },
                        {
                            name: 'leaf',
                            defaultValue: false
                        }
                    ];
                }

                get hidden() {

                    return this.get('hidden');
                }

                /**
                 * 
                 * 获得横坐标
                 * 
                 * @return {number}
                 * 
                 */
                get x() {

                    return this.get('x');
                }

                /**
                 * 
                 * 获得纵坐标
                 * 
                 * @return {number}
                 * 
                 */
                get y() {

                    return this.get('y');
                }

                get width() {

                    return this.get('width');
                }

                /**
                 * 
                 * 获得高度
                 * 
                 * @return {number}
                 * 
                 */
                get height() {

                    return this.get('height');
                }

                /**
                 * 
                 * 判断当前节点是否为根节点
                 * 
                 * @return {boolean} 如果为根节点则返回 true , 否则返回 false
                 * 
                 */
                get isRoot() {

                    return !this.parentNode;
                }

                /**
                 * 
                 * 判断当前节点是否为叶子节点
                 * 
                 * @return {boolean} 如果为叶子节点则返回 true , 否则返回 false
                 * 
                 */
                get isLeaf() {

                    return this.get('leaf');
                }

                /**
                 * 
                 * 判断当前节点是否加载
                 * 
                 * @return {boolean}
                 * 
                 */
                get synchronized() {

                    let {
                        isLeaf,
                        children
                    } = this;

                    return !isLeaf && children.length !== 0;
                }

                syncChildNodes(nodes) {

                    let me = this;

                    if (!me.synchronized) {

                        if (nodes.length === 0) {

                            me.set('leaf', true);

                        } else {

                            me.suspendEvents();

                            nodes = me.appendChild(nodes);

                            me.resumeEvents();
                        }

                        me.fireEvent('syncchildnodes', nodes);
                    }
                }

                /**
                 * 
                 * 返回上一个兄弟节点
                 * 
                 * @return {data.model.node.Tree} 父节点
                 * 
                 */
                get previousSiblingNode() {

                    return getSiblingNode.call(this, 'previous');
                }
                /**
                 * 
                 * 返回下一个兄弟节点
                 * 
                 * @return {data.model.node.Tree} 父节点
                 * 
                 */
                get nextSiblingNode() {

                    return getSiblingNode.call(this, 'next');
                }

                /**
                 * 
                 * 表达当前节点是否展开
                 * 
                 * @return {boolean} 节点展开标志
                 * 
                 */
                get expanded() {

                    return this.get('expanded');
                }
                /**
                 * 
                 * 返回父节点
                 * 
                 * @return {data.model.node.Tree} 父节点
                 * 
                 */
                get parentNode() {

                    let me = this,
                        {
                            store
                        } = me;

                    return store.getById(me.get('parentId'));
                }
                /**
                 * 
                 * 返回子节点集合
                 * 
                 * @return {data.model.node.Tree[]} 子节点集合
                 * 
                 */
                get childNodes() {

                    let me = this,
                        {
                            expanded
                        } = me;

                    if (!expanded) {

                        return [];
                    }

                    return me.children;
                }

                /**
                 * 
                 * 返回第一个子节点
                 * 
                 * @return {data.model.node.Tree} 节点
                 * 
                 */
                get firstChildNode() {

                    return getChildNode.call(this, 'first');
                }

                get firstDescendantNodes() {

                    return getDescendantNodes.call(this, 'firstChildNode');
                }

                /**
                 * 
                 * 返回最后一个子节点
                 * 
                 * @return {data.model.node.Tree} 节点
                 * 
                 */
                get lastChildNode() {

                    return getChildNode.call(this, 'last');
                }

                get lastDescendantNodes() {

                    return getDescendantNodes.call(this, 'lastChildNode');
                }


                get selected() {

                    return this.get('selected');
                }

                /**
                 * 
                 * 删除
                 * 
                 * @param {data.model.node.Tree} node 节点
                 * 
                 */
                removeChild(node) {

                    let {
                        store,
                        childNodes
                    } = this;

                    store.removeNodes(node);

                    remove(childNodes, node);
                }

                /**
                 * 
                 * 显示
                 * 
                 */
                show() {

                    doHidden.call(this, false);

                }

                /**
                 * 
                 * 隐藏
                 * 
                 */
                hide() {

                    doHidden.call(this, true);
                }
            }

            function doHidden(value) {

                let me = this,
                    {
                        childNodes,
                        store
                    } = me,
                    {
                        selectedNode
                    } = store;

                if (selectedNode === me) {

                    let {
                        parentNode
                    } = me;

                    while (parentNode) {

                        if (parentNode.hidden === false) {

                            parentNode.select();

                            break;

                        } else {

                            parentNode = parentNode.parentNode;
                        }
                    }
                }

                if (value) {

                    me.set({
                        hidden: true,
                        x: 0,
                        y: 0
                    });

                } else {

                    me.set('hidden', value);
                }

                for (let childNode of childNodes) {

                    childNode[value ? 'hide' : 'show']();
                }
            }

            function getSiblingNode(property) {

                let me = this,
                    {
                        parentNode
                    } = me;

                if (parentNode) {

                    let {
                        childNodes
                    } = parentNode,
                    index = childNodes.indexOf(me);

                    switch (property) {

                        case 'next':

                            index++;

                            break;

                        case 'previous':

                            index--;
                    }

                    return childNodes[index];
                }
            }

            function getDescendantNodes(property) {

                let nodes = [],
                    node = this;

                while (true) {

                    let childNode = node[property];

                    if (childNode) {

                        nodes.push(childNode);

                        node = childNode;

                    } else {

                        break;
                    }

                }

                return nodes;
            }

            function getChildNode(property) {

                let {
                    children
                } = this;

                if (children.length) {

                    switch (property) {

                        case 'first':

                            return children[0];

                        case 'last':

                            return children[children.length - 1];
                    }
                }
            }

            var_class_1562145553834 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553834;
                }

            };
        }


        return var_class_1562145553834;
    };

})();

exports['src::math.region'] = (() => {

    let region;

    let var_init_locked_1562145553855;

    let var_class_1562145553855;



    return function({
        x,
        y,
        width,
        height
    }) {


        if (!var_init_locked_1562145553855) {

            region = include('mixin.region');

            var_init_locked_1562145553855 = true;
        }



        if (!var_class_1562145553855) {


            /**
             * 
             * 区域
             * 
             * @import region from mixin.region
             * 
             * @param {object} config 配置
             * 
             * @param {number} [config.x] 横坐标
             * 
             * @param {number} [config.y] 纵坐标
             * 
             * @param {number} [config.width] 宽度
             * 
             * @param {number} [config.height] 高度
             * 
             */

            class main extends mixins({
                mixins: [
                    region
                ]
            }) {

                constructor({
                    x,
                    y,
                    width,
                    height
                }) {

                    super();

                    let me = this;

                    me.x = x;

                    me.y = y;

                    me.width = width;

                    me.height = height;

                }

                get right() {

                    return this.getAnchorXY('r').x;
                }

                get bottom() {

                    return this.getAnchorXY('b').y;
                }

                contains(region) {

                    let me = this;

                    return (region.x >= me.x && (region.right || region.x) <= me.right && region.y >= me.y && (region.bottom || region.y) <= me.bottom);
                }

                containTo(region) {

                    let me = this;

                    if (me.contains(region)) {

                        return {
                            x: 0,
                            y: 0
                        };
                    }

                    let {
                        x: currentX,
                        y: currentY,
                        right: currentRight,
                        bottom: currentBottom
                    } = me,
                    offsetX = 0,
                        offsetY = 0;

                    let {
                        x: regionX,
                        y: regionY,
                        right: regionRight,
                        bottom: regionBottom
                    } = region;

                    if (regionX < currentX) {

                        offsetX = regionX - currentX;
                    }

                    if (regionRight > currentRight) {

                        offsetX = regionRight - currentRight;
                    }

                    if (regionY < currentY) {

                        offsetY = regionY - currentY;
                    }

                    if (regionBottom > currentBottom) {

                        offsetY = regionBottom - currentBottom;
                    }

                    return {
                        x: offsetX,
                        y: offsetY
                    };
                }
            }



            var_class_1562145553855 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553855;
                }

            };
        }


        return new var_class_1562145553855({
            x,
            y,
            width,
            height
        });
    };

})();

exports['src::data.model.node.tree.region'] = (() => {

    let createRegion;

    let var_init_locked_1562145553860;





    function main() {


        /**
         * 
         * 获得当前节点区域对象
         * 
         * @import createRegion from math.region
         * 
         * @return {math.Region} 节点区域 
         * 
         */

        let {
            x,
            y,
            width,
            height
        } = this;

        return createRegion({
            x,
            y,
            width,
            height
        });

    }

    return function() {


        if (!var_init_locked_1562145553860) {

            createRegion = include('math.region');

            var_init_locked_1562145553860 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.model.node.tree.depth'] = (() => {









    function main() {


        /**
         * 
         * 当前节点深度
         * 
         * @return {number} 深度
         * 
         */

        let node = this,
            parentNode,
            depth = 0;

        while (parentNode = node.parentNode) {

            node = parentNode;

            depth++;
        }

        return depth;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.height.scope.child'] = (() => {









    function main() {


        /**
         * 
         * 所有子节点的总范围高度
         * 
         * @return {number} 总高度 
         * 
         */

        let countHeight = 0,
            {
                childNodes,
                store
            } = this;

        if (childNodes.length) {

            for (let {
                    scopeHeight
                } of childNodes) {

                countHeight += scopeHeight;
            }

            countHeight += store.marginBottom * (childNodes.length - 1);

            return countHeight;
        }

        return 0;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.height.scope'] = (() => {









    function main() {


        /**
         * 
         * 获取当前节点的范围高度
         * 
         * @return {number} 高度 
         * 
         */

        let me = this,
            {
                height,
                childCountScopeHeight,
            } = me;

        return Math.max(height, childCountScopeHeight);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.child'] = (() => {









    function main() {


        /**
         * 
         * 获取真实的子节点集合
         * 
         * @return {array} 子节点集合 
         * 
         */

        let {
            store,
            id
        } = this;

        return store.findRecords('parentId', id);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.descendant'] = (() => {

    let getChildNodes;

    let var_init_locked_1562145553872;

    let var_current_scope_1562145553872;



    function main() {


        /**
         * 
         * 获得所有子孙节点
         * 
         * @import getChildNodes from ..child scoped
         * 
         * @return {array} 节点集合 
         * 
         */

        let me = this,
            childNodes = getChildNodes(),
            result = [];

        for (let childNode of childNodes) {

            result.push(childNode);

            result.push(...childNode.descendantNodes);

        }

        return result;

    }

    return function() {




        if (!var_current_scope_1562145553872 !== this) {

            getChildNodes = include('src::data.model.node.tree.nodes.child').bind(this);

            var_current_scope_1562145553872 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.leaf.last'] = (() => {









    function main() {


        /**
         * 
         * 最后一个叶子节点
         * 
         * @return {data.model.node.Tree} 树型节点 
         * 
         */

        let me = this,
            {
                isLeaf
            } = me;

        if (isLeaf) {

            return me;
        }

        let node = me.lastChildNode;

        while (node && !node.isLeaf && node.synchronized) {

            node = node.lastChildNode;
        }

        return node;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.leaf'] = (() => {









    function main() {


        /**
         * 
         * 当前节点下的所有叶子节点
         * 
         * @return {array} 节点集合 
         * 
         */

        let me = this,
            {
                childNodes
            } = me;

        if (childNodes.length) {

            let leafNodes = [];

            for (let childNode of childNodes) {

                leafNodes.push(...childNode.leafNodes);
            }

            return leafNodes;

        }

        return [
            me
        ];

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.layout'] = (() => {









    function main() {


        /**
         * 
         * 布局
         * 
         * 
         */

        let me = this,
            {
                childNodes
            } = me;

        if (childNodes.length === 0) {

            return;
        }

        let {
            childCountScopeHeight,
            store
        } = me, {
            marginBottom,
            marginRight
        } = store, {
            y: centerY
        } = me.getAnchorXY('c'), {
            x
        } = me.getAnchorXY('r');

        let startY = centerY - childCountScopeHeight / 2;

        x += marginRight;

        for (let childNode of childNodes) {

            let {
                scopeHeight
            } = childNode;

            childNode.set('x', x);

            childNode.set(childNode.setAnchorXY({
                y: startY + scopeHeight / 2
            }, 'c'));

            startY += scopeHeight + marginBottom;

            childNode.layout();
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.expand'] = (() => {









    async function main() {


        /**
         * 
         * 展开节点 
         * 
         */

        let me = this,
            {
                expanded
            } = me;

        if (!expanded) {

            let {
                store,
                synchronized
            } = this;

            if (!synchronized) {

                me.syncChildNodes(await store.syncChildNodes(me));
            }

            me.set('expanded', true);

            let {
                childNodes
            } = me;

            for (let childNode of childNodes) {

                childNode.show();
            }

            me.fireEvent('expand', synchronized);
        }

    }

    return async function() {





        return await main.call(this);
    };

})();

exports['src::data.model.node.tree.collapse'] = (() => {









    function main(deep) {


        /**
         * 
         * 收起
         * 
         * @param {boolean} [deep = false] 是否级联收起节点，默认为 false
         * 
         */

        let me = this,
            {
                expanded,
                childNodes
            } = me;

        if (expanded) {

            for (let childNode of childNodes) {

                if (deep) {

                    childNode.suspendEvents();

                    childNode.collapse(deep);

                    childNode.resumeEvents();
                }

                childNode.hide();
            }

            me.set('expanded', false);

            me.fireEvent('collapse');
        }

    }

    return function(deep = false) {





        return main.call(this, deep);
    };

})();

exports['src::data.model.node.tree.select'] = (() => {









    function main() {


        /**
         * 
         * 选定
         * 
         * 
         */

        let me = this,
            {
                selected,
                store,
                hidden
            } = me;

        if (!selected && !hidden) {

            let {
                selectedNode
            } = store;

            if (selectedNode) {

                selectedNode.deselect();
            }

            me.set('selected', true);

            store.selectedNode = me;

            me.fireEvent('select');
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.deselect'] = (() => {









    function main() {


        /**
         * 
         * 取消选定
         * 
         * 
         */

        let me = this,
            {
                selected,
                hidden,
                store
            } = me;

        if (selected && !hidden) {

            me.set('selected', false);

            me.fireEvent('deselect');
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.select.vertical'] = (() => {









    function main(direction) {


        /**
         * 
         * 垂直方向选择
         * 
         * @param {string} direction 方向 
         * 
         */

        let methodName,
            increment;

        switch (direction) {

            case 'up':

                methodName = 'previousSiblingNode';

                increment = -1;

                break;

            case 'down':

                methodName = 'nextSiblingNode';

                increment = 1;
        }

        let me = this,
            node = me[methodName];

        if (node) {

            node.select();

            return node;

        } else {

            let {
                depth,
                store
            } = me,
            nodes = store.rootNode.getDepthNodes(depth),
                node = nodes[nodes.indexOf(me) + increment];

            if (node) {

                node.select();

                return node;
            }

        }


    }

    return function(direction) {





        return main.call(this, direction);
    };

})();

exports['src::data.model.node.tree.select.up'] = (() => {

    let select;

    let var_init_locked_1562145553903;

    let var_current_scope_1562145553903;



    function main() {

        /**
         * 
         * 向上选择一个节点
         * 
         * @import select from ..vertical scoped
         * 
         */

        return select('up');

    }

    return function() {




        if (!var_current_scope_1562145553903 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1562145553903 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.select.down'] = (() => {

    let select;

    let var_init_locked_1562145553905;

    let var_current_scope_1562145553905;



    function main() {

        /**
         * 
         * 向下选择一个节点
         * 
         * @import select from ..vertical scoped
         * 
         */

        return select('down');



    }

    return function() {




        if (!var_current_scope_1562145553905 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1562145553905 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.select.left'] = (() => {









    function main() {


        /**
         * 
         * 向左选择一个节点
         * 
         */

        let {
            parentNode
        } = this;

        if (parentNode) {

            parentNode.select();

            return parentNode;
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::math.point.distance'] = (() => {









    function main(point1, point2) {

        /**
         * 
         * 计算两点之间的距离
         * 
         * @param {object} point1 第一个点的位置
         * 
         * @param {object} point2 第二个点的位置
         * 
         * @return {number} 两点之间的距离
         * 
         */

        const {
            pow,
            sqrt
        } = Math;

        return sqrt(pow(point1.x - point2.x, 2) + pow(point1.y - point2.y, 2), 2);

    }

    return function(point1, point2) {





        return main.call(this, point1, point2);
    };

})();

exports['src::data.model.node.tree.select.right'] = (() => {

    let getDistance;

    let var_init_locked_1562145553915;





    function main() {


        /**
         * 
         * 向右移动一格
         * 
         * @import getDistance from math.point.distance
         * 
         */

        let me = this,
            {
                firstChildNode
            } = me;

        if (firstChildNode) {

            firstChildNode.select();

            return firstChildNode;

        } else {

            let {
                depth,
                store
            } = me,
            nodes = store.rootNode.getDepthNodes(depth + 1),
                minDistance,
                nearestNode;

            for (let node of nodes) {

                let distance = getDistance(me, node);

                if (!minDistance) {

                    minDistance = distance;

                    nearestNode = node;

                    continue;
                }

                if (minDistance > distance) {

                    minDistance = distance;

                    nearestNode = node;
                }
            }

            if (nearestNode) {

                nearestNode.select();

                return nearestNode;
            }
        }

    }

    return function() {


        if (!var_init_locked_1562145553915) {

            getDistance = include('math.point.distance');

            var_init_locked_1562145553915 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.depth'] = (() => {









    function main(depth) {


        /**
         * 
         * 获得指定深度的节点集合
         * 
         * @param {number} depth 深度
         * 
         * @return {array} 节点集合 
         * 
         */

        let nodes = [],
            {
                children
            } = this;

        if (depth === 1) {

            return children;
        }

        depth--;

        for (let childNode of children) {

            nodes.push(childNode, ...childNode.getDepthNodes(depth));
        }

        return nodes;

    }

    return function(depth) {





        return main.call(this, depth);
    };

})();

exports['src::data.model.node.tree.append'] = (() => {









    function main(node) {


        /**
         * 
         * 添加节点
         * 
         * @param {mixed} node 节点信息
         * 
         */

        let me = this,
            {
                store,
                expanded,
                hidden
            } = me,
            nodes = store.insert(store.indexOf(me.lastLeafNode || me) + 1, node);

        me.set('leaf', false);

        if (expanded && !hidden) {

            for (let node of nodes) {

                node.show();
            }
        }

        me.fireEvent('append', nodes);

        return nodes;


    }

    return function(node) {





        return main.call(this, node);
    };

})();

exports['src::data.model.node.tree.insert.after'] = (() => {









    function main(node, existNode) {


        /**
         * 
         * 在指定节点之前插入
         * 
         * @param {mixed} node 插入节点
         * 
         * @param {data.model.tree.Node} existNode 节点
         * 
         */

        let me = this,
            {
                store,
                children,
                expanded,
                hidden
            } = me;

        if (children.includes(existNode)) {

            let nodes = store.insert(store.indexOf(existNode) + 1, node);

            me.set('leaf', false);

            if (expanded && !hidden) {

                for (let node of nodes) {

                    node.show();
                }
            }

            me.fireEvent('insertafter', nodes, existNode);
        }

    }

    return function(node, existNode) {





        return main.call(this, node, existNode);
    };

})();

exports['src::data.model.node.tree.remove'] = (() => {

    let remove;

    let var_init_locked_1562145553929;





    function main(node) {


        /**
         * 
         * 删除子节点
         * 
         * @import remove from array.remove
         * 
         * @param {data.model.node.Tree} node 树型节点
         * 
         */

        let me = this,
            {
                store,
                children
            } = me;

        if (children.includes(node)) {

            store.remove(node);

            remove(children, node);

            if (children.length === 0) {

                me.set('leaf', true);
            }
        }

    }

    return function(node) {


        if (!var_init_locked_1562145553929) {

            remove = include('array.remove');

            var_init_locked_1562145553929 = true;
        }




        return main.call(this, node);
    };

})();

exports['src::data.model.node.tree'] = (() => {

    let mixin_1562145552760__1, extend, get_region, get_depth, get_childCountScopeHeight, get_scopeHeight, get_descendantNodes, get_children, get_lastLeafNode, get_leafNodes, method_layout, method_expand, method_collapse, method_select, method_deselect, method_selectUp, method_selectDown, method_selectLeft, method_selectRight, method_getDepthNodes, method_appendChild, method_insertAfter, method_removeChild;

    let var_init_locked_1562145553932;

    let var_class_1562145553932;



    return function() {


        if (!var_init_locked_1562145553932) {

            mixin_1562145552760__1 = include('mixin.region');
            extend = include('src::data.model.node.tree.base')();
            get_region = include('src::data.model.node.tree.region');
            get_depth = include('src::data.model.node.tree.depth');
            get_childCountScopeHeight = include('src::data.model.node.tree.height.scope.child');
            get_scopeHeight = include('src::data.model.node.tree.height.scope');
            get_descendantNodes = include('src::data.model.node.tree.nodes.descendant');
            get_children = include('src::data.model.node.tree.nodes.child');
            get_lastLeafNode = include('src::data.model.node.tree.node.leaf.last');
            get_leafNodes = include('src::data.model.node.tree.nodes.leaf');
            method_layout = include('src::data.model.node.tree.layout');
            method_expand = include('src::data.model.node.tree.expand');
            method_collapse = include('src::data.model.node.tree.collapse');
            method_select = include('src::data.model.node.tree.select');
            method_deselect = include('src::data.model.node.tree.deselect');
            method_selectUp = include('src::data.model.node.tree.select.up');
            method_selectDown = include('src::data.model.node.tree.select.down');
            method_selectLeft = include('src::data.model.node.tree.select.left');
            method_selectRight = include('src::data.model.node.tree.select.right');
            method_getDepthNodes = include('src::data.model.node.tree.nodes.depth');
            method_appendChild = include('src::data.model.node.tree.append');
            method_insertAfter = include('src::data.model.node.tree.insert.after');
            method_removeChild = include('src::data.model.node.tree.remove');

            var_init_locked_1562145553932 = true;
        }



        if (!var_class_1562145553932) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.region')]
            }) {







                layout(...args) {

                    return method_layout.apply(this, args);

                }
                expand(...args) {

                    return method_expand.apply(this, args);

                }
                collapse(...args) {

                    return method_collapse.apply(this, args);

                }
                select(...args) {

                    return method_select.apply(this, args);

                }
                deselect(...args) {

                    return method_deselect.apply(this, args);

                }
                selectUp(...args) {

                    return method_selectUp.apply(this, args);

                }
                selectDown(...args) {

                    return method_selectDown.apply(this, args);

                }
                selectLeft(...args) {

                    return method_selectLeft.apply(this, args);

                }
                selectRight(...args) {

                    return method_selectRight.apply(this, args);

                }
                getDepthNodes(...args) {

                    return method_getDepthNodes.apply(this, args);

                }
                appendChild(...args) {

                    return method_appendChild.apply(this, args);

                }
                insertAfter(...args) {

                    return method_insertAfter.apply(this, args);

                }
                removeChild(...args) {

                    return method_removeChild.apply(this, args);

                }

                get region() {

                    return get_region.call(this);

                }
                get depth() {

                    return get_depth.call(this);

                }
                get childCountScopeHeight() {

                    return get_childCountScopeHeight.call(this);

                }
                get scopeHeight() {

                    return get_scopeHeight.call(this);

                }
                get descendantNodes() {

                    return get_descendantNodes.call(this);

                }
                get children() {

                    return get_children.call(this);

                }
                get lastLeafNode() {

                    return get_lastLeafNode.call(this);

                }
                get leafNodes() {

                    return get_leafNodes.call(this);

                }

            }

            var_class_1562145553932 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553932;
                }

            };
        }


        return var_class_1562145553932;
    };

})();

exports['src::data.store.tree.base'] = (() => {

    let Store, model, define, from;

    let var_init_locked_1562145553955;

    let var_class_1562145553955;



    return function() {


        if (!var_init_locked_1562145553955) {

            Store = include('data.store')();
            model = include('data.model.node.tree')();
            define = include('class.define');
            from = include('array.from');

            var_init_locked_1562145553955 = true;
        }



        if (!var_class_1562145553955) {


            /**
             * 
             * 树型数据存储器
             * 
             * @import Store from data.store value
             * 
             * @import model from data.model.node.tree value
             * 
             * @import define from class.define
             * 
             * @import from from array.from
             * 
             * @class
             * 
             * 
             */

            class main extends Store {

                constructor({
                    fields,
                    margin = {},
                    padding = 0,
                    lineOffsetX = 0,
                    rootConfig,
                    syncChildNodes,
                    ...options
                }) {

                    if (fields) {

                        model = define(class extends model {

                            static get fieldConfigurations() {

                                return [
                                    ...super.fieldConfigurations,
                                    ...fields
                                ];
                            }
                        });

                    }

                    super({
                        ...options,
                        model
                    });

                    let me = this;

                    me.rootConfig = rootConfig || {};

                    me.syncChildNodes = syncChildNodes || (() => []);

                    let {
                        bottom: marginBottom = 0,
                        right: marginRight = 0
                    } = margin;

                    me.marginBottom = marginBottom;

                    me.marginRight = marginRight;

                    me.padding = padding;

                    me.lineOffsetX = lineOffsetX;

                    me.addListeners({
                        load: {
                            fn: 'onLoad',
                            once: true,
                            getOldFireEventData: 'last'
                        },
                        expand: 'onExpand',
                        collapse: 'onCollapse',
                        scope: me
                    });
                }

                onExpand() {

                    this.layout();

                }

                onCollapse() {

                    this.layout();
                }

                onLoad(store, nodes) {

                    for (let node of nodes) {

                        if (!node.isBindStore) {

                            continue;
                        }

                        let {
                            parentNode
                        } = node;

                        if (!parentNode) {

                            let me = this,
                                {
                                    rootConfig
                                } = me;

                            me.rootNode = node;

                            node.set(rootConfig);

                            doReorder(node);

                            node.suspendEvents();

                            node.show();

                            node.select();

                            node.expand();

                            node.resumeEvents();

                            break;
                        }
                    }
                }
            }


            function doReorder(node) {

                let {
                    store,
                    childNodes
                } = node;

                store.insert(store.indexOf(node) + 1, childNodes);

            }

            var_class_1562145553955 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553955;
                }

            };
        }


        return var_class_1562145553955;
    };

})();

exports['src::data.store.tree.region'] = (() => {









    function main() {


        /**
         * 
         * 返回当前脑图区域信息
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let {
            rootNode,
            padding
        } = this, {
            x,
            y,
            firstDescendantNodes,
            lastDescendantNodes,
            leafNodes
        } = rootNode;

        if (x > 0) {

            x = 0;
        }

        for (let node of firstDescendantNodes) {

            let {
                x: nodeX,
                y: nodeY
            } = node.getAnchorXY('tr');

            if (y > nodeY) {

                y = nodeY;
            }
        }

        if (y > 0) {

            y = 0;
        }

        let bottom = y;

        for (let node of lastDescendantNodes) {

            let {
                y: nodeY
            } = node.getAnchorXY('br');

            if (bottom < nodeY) {

                bottom = nodeY;
            }
        }

        let right = rootNode.getAnchorXY('r').x;

        for (let leafNode of leafNodes) {

            let {
                x
            } = leafNode.getAnchorXY('c');

            if (right < x) {

                right = x;
            }
        }

        return {
            left: Math.abs(x) + padding,
            top: Math.abs(y) + padding,
            bottom: padding,
            right: padding,
            width: right - Math.max(x, 0),
            height: bottom - Math.max(y, 0)
        };

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.store.tree.insert'] = (() => {









    function main(index, nodes) {


        /**
         * 
         * 插入节点
         * 
         * @param {number} index 插入位置
         * 
         * @param {mixed} nodes 节点数据
         * 
         * 
         */

        let me = this,
            {
                recordset
            } = me,
            insertNodes = [];

        nodes = recordset.add(nodes);

        for (let node of nodes) {

            insertNodes.push(node);

            insertNodes.push(...node.descendantNodes);
        }

        recordset.insert(index, insertNodes);

        me.fireEvent('insert', insertNodes);

        return nodes;

    }

    return function(index, nodes) {





        return main.call(this, index, nodes);
    };

})();

exports['src::data.store.tree.remove'] = (() => {

    let from;

    let var_init_locked_1562145553983;





    function main(nodes) {


        /**
         * 
         * 去除节点
         * 
         * @import from from array.from
         * 
         * @param {mixed} nodes 节点数据
         * 
         */

        nodes = from(nodes);

        let me = this,
            {
                recordset
            } = me,
            removeNodes = [];

        for (let node of nodes) {

            let {
                descendantNodes
            } = node;

            removeNodes.push(...recordset.remove([
                node,
                ...descendantNodes
            ]));
        }

        me.fireEvent('remove', removeNodes);

    }

    return function(nodes) {


        if (!var_init_locked_1562145553983) {

            from = include('array.from');

            var_init_locked_1562145553983 = true;
        }




        return main.call(this, nodes);
    };

})();

exports['src::data.store.tree.layout'] = (() => {










    /**
     * 
     * 布局
     * 
     */

    function main() {

        let me = this,
            {
                rootNode,
                recordset
            } = me,
            records = recordset.findRecords('hidden', false);

        if (rootNode) {

            rootNode.layout();

            let {
                region,
                marginRight,
                lineOffsetX
            } = me;

            me.fireEvent('layout', records, lines(records, region, marginRight, lineOffsetX));
        }
    }

    function lines(nodes, {
        left,
        top
    }, marginRight, lineOffsetX) {

        let lines = [],
            halfMargin = marginRight / 2;

        for (let node of nodes) {

            if (node.hidden) {

                continue;
            }

            let {
                x: startX,
                y: startY
            } = node.getAnchorXY('r'), {
                childNodes
            } = node;

            startX += lineOffsetX;

            for (let childNode of childNodes) {

                let {
                    x: endX,
                    y: endY
                } = childNode.getAnchorXY('l');

                lines.push([
                    startX + left,
                    startY + top,
                    startX + halfMargin + left,
                    startY + top,
                    endX - halfMargin + left,
                    endY + top,
                    endX + left,
                    endY + top
                ]);
            }
        }

        return lines;
    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.store.tree'] = (() => {

    let extend, get_region, method_insert, method_remove, method_layout;

    let var_init_locked_1562145553989;

    let var_class_1562145553989;



    return function(options) {


        if (!var_init_locked_1562145553989) {

            extend = include('src::data.store.tree.base')();
            get_region = include('src::data.store.tree.region');
            method_insert = include('src::data.store.tree.insert');
            method_remove = include('src::data.store.tree.remove');
            method_layout = include('src::data.store.tree.layout');

            var_init_locked_1562145553989 = true;
        }



        if (!var_class_1562145553989) {

            class main extends mixins({
                extend,
                mixins: []
            }) {







                insert(...args) {

                    return method_insert.apply(this, args);

                }
                remove(...args) {

                    return method_remove.apply(this, args);

                }
                layout(...args) {

                    return method_layout.apply(this, args);

                }

                get region() {

                    return get_region.call(this);

                }

            }

            var_class_1562145553989 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145553989;
                }

            };
        }


        return new var_class_1562145553989(options);
    };

})();

exports['src::canvas.draw.line.bezierCurve'] = (() => {

    let assign;

    let var_init_locked_1562145554015;





    function main(context, {
        points,
        ...styles
    }) {


        /**
         * 
         * 绘制贝赛尔曲线
         * 
         * @import assign from object.assign
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {array} [config.points = []] 画线点集合
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        if (points.length === 8) {

            context.beginPath();

            assign(context, styles);

            context.moveTo(...points.slice(0, 2));

            context.bezierCurveTo(...points.slice(2));

            context.stroke();
        }

    }

    return function(context, {
        points = [],
        ...styles
    } = {}) {


        if (!var_init_locked_1562145554015) {

            assign = include('object.assign');

            var_init_locked_1562145554015 = true;
        }




        return main.call(this, context, {
            points,
            ...styles
        });
    };

})();

exports['src::math.degree2radian'] = (() => {









    function main(degree) {


        /**
         * 
         * 将角度转换成弧度
         * 
         * @param {number} degree 角度
         * 
         * @return {number} 弧度 
         * 
         */

        return Math.PI / 180 * degree;


    }

    return function(degree) {





        return main.call(this, degree);
    };

})();

exports['src::canvas.draw.line.arc'] = (() => {

    let assign, degree2radian;

    let var_init_locked_1562145554021;





    function main(context, {
        x,
        y,
        r,
        start,
        end,
        counterclockwise,
        ...styles
    }) {


        /**
         * 
         * 绘制弧线
         * 
         * @import assign from object.assign
         * 
         * @import degree2radian from math.degree2radian
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {number} config.x 圆中心点横坐标
         * 
         * @param {number} config.y 圆中心点纵坐标
         * 
         * @param {number} config.r 圆的半径
         * 
         * @param {number} [config.start = -90] 圆起始角度
         * 
         * @param {number} config.end 圆终止角度
         * 
         * @param {number} [config.counterclockwise = false] 如果为 false 则为顺时针，反之为逆时针
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        context.beginPath();

        assign(context, styles);

        context.arc(x, y, r, degree2radian(start), degree2radian(end), counterclockwise);

        context.stroke();

    }

    return function(context, {
        x,
        y,
        r,
        start = -90,
        end,
        counterclockwise = false,
        ...styles
    } = {}) {


        if (!var_init_locked_1562145554021) {

            assign = include('object.assign');
            degree2radian = include('math.degree2radian');

            var_init_locked_1562145554021 = true;
        }




        return main.call(this, context, {
            x,
            y,
            r,
            start,
            end,
            counterclockwise,
            ...styles
        });
    };

})();

exports['src::is.number'] = (() => {

    let isType;

    let var_init_locked_1562145554025;





    function main(data) {

        /**
         * 
         * 判定数据是否为数值类型
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为数值类型则返回 true , 否则返回 false 
         * 
         */

        return isType(data, 'number') && isFinite(data);

    }

    return function(data) {


        if (!var_init_locked_1562145554025) {

            isType = include('is.type');

            var_init_locked_1562145554025 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::date.get'] = (() => {

    let isDefined;

    let var_init_locked_1562145554028;





    function main({
        year,
        month,
        day,
        hours,
        minutes,
        seconds
    }) {


        /**
         * 
         * 获得日期对象
         * 
         * @import is.defined
         * 
         * @param {object} [config = {}] 日期配置
         * 
         * @param {number} [config.year] 年份
         * 
         * @param {number} [config.month] 月份
         * 
         * @param {number} [config.day] 日
         * 
         * @param {number} [config.hours] 小时
         * 
         * @param {number} [config.minutes] 分钟
         * 
         * @param {number} [config.seconds] 秒
         * 
         * @return {Date} 日期对象 
         * 
         */

        let data = new Date();

        data.setMonth(0);

        data.setDate(1);

        data.setMilliseconds(0);

        if (isDefined(year)) {

            data.setFullYear(year);
        }

        if (isDefined(month)) {

            data.setMonth(month - 1);
        }

        if (isDefined(day)) {

            data.setDate(day);

        }

        if (isDefined(hours)) {

            data.setHours(hours);
        }

        if (isDefined(minutes)) {

            data.setMinutes(minutes);
        }

        if (isDefined(seconds)) {

            data.setSeconds(seconds);
        }

        return data;



    }

    return function({
        year,
        month,
        day,
        hours,
        minutes,
        seconds
    } = {}) {


        if (!var_init_locked_1562145554028) {

            isDefined = include('is.defined');

            var_init_locked_1562145554028 = true;
        }




        return main.call(this, {
            year,
            month,
            day,
            hours,
            minutes,
            seconds
        });
    };

})();

exports['src::date.list'] = (() => {









    function main(startDate, endDate, count, isNumber) {


        /**
         * 
         * 生成日期列表
         * 
         * @param {Date} startDate 起始日期
         * 
         * @param {Date} endDate 终止日期
         * 
         * @param {number} count 生成个数
         * 
         * @param {boolean} [isNumber = true] 是否以数字方式取代日期对象
         * 
         * @return {array} 日期列表
         * 
         */

        let startTime = startDate.getTime(),
            endTime = endDate.getTime(),
            countTime = endTime - startTime;

        if (countTime % count !== 0) {

            return [];
        }

        let time = countTime / count;

        if (time === 0) {

            return [];
        }

        let result = [];

        for (let i = startTime; i <= endTime; i += time) {

            result.push(i);
        }

        if (!isNumber) {

            for (let i = 0; i < count; i++) {

                result[i] = new Date(result[i]);
            }
        }

        return result;

    }

    return function(startDate, endDate, count, isNumber = true) {





        return main.call(this, startDate, endDate, count, isNumber);
    };

})();

exports['src::string.format'] = (() => {










    /**
     * 
     * 字符串格式化
     * 
     * @param {string} format 格式字符串
     * 
     * @param {mixed} [...args] 格式参数
     * 
     * @return {string} 格式化后的字符串 
     * 
     */

    let formatRe = /\{(\d+)\}/g;

    function main(format, ...args) {

        return format.replace(formatRe, (match, index) => args[index]);
    }

    return function(format, ...args) {





        return main.call(this, format, ...args);
    };

})();

exports['src::date.parse'] = (() => {

    let doFormat;

    let var_init_locked_1562145554035;





    function main(data, regex, format) {

        /**
         * 
         * 将字符串转换成日期
         * 
         * @import doFormat from string.format
         * 
         * @param {string} data 字符串
         * 
         * @param {Regex} regex 正则表达式
         * 
         * @param {string} format 日期格式
         * 
         * @return {Date} 日期对象 
         * 
         */

        let args = data.match(regex);

        if (args) {

            return new Date(doFormat(format, ...args));
        }



    }

    return function(data, regex, format) {


        if (!var_init_locked_1562145554035) {

            doFormat = include('string.format');

            var_init_locked_1562145554035 = true;
        }




        return main.call(this, data, regex, format);
    };

})();

exports['src::map.set.multi'] = (() => {

    let isArray;

    let var_init_locked_1562145554037;





    function main(map, ...values) {


        /**
         * 
         * 设置复合值
         * 
         * @import is.array
         * 
         * @param {Map} map Map 对象
         * 
         * @param {array} [...values] 包含多维键，以及相应值
         * 
         * @return {Map} 返回 Map 对象引用
         * 
         */

        let {
            length
        } = values;

        if (length >= 2) {

            let key = values.slice(0, length - 1),
                value = values[length - 1],
                oldValues = map.get(...key);

            if (isArray(oldValues)) {

                if (!oldValues.includes(value)) {

                    oldValues.push(value);
                }

            } else {

                oldValues = [
                    value
                ];
            }

            map.set(...key, oldValues);
        }

        return map;



    }

    return function(map, ...values) {


        if (!var_init_locked_1562145554037) {

            isArray = include('is.array');

            var_init_locked_1562145554037 = true;
        }




        return main.call(this, map, ...values);
    };

})();

exports['src::week.days'] = (() => {









    function main(startDay) {


        /**
         * 
         * 获得一周周期排列
         * 
         * @param {number} [startDay = 0] 确定起始周几
         * 
         * @return {array} 一周周期排列数字集合
         * 
         */

        let result = [
            startDay
        ];

        while (result.length < 7) {

            startDay++;

            if (startDay <= 6) {

                result.push(startDay);

            } else {

                result.push(startDay = 0);
            }
        }

        return result;


    }

    return function(startDay = 0) {





        return main.call(this, startDay);
    };

})();

exports['src::is.date'] = (() => {









    function main(data) {

        /**
         * 
         * 判定数据是否为日期类型
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为日期类型则返回 true , 否则返回 false 
         * 
         */


        return Object.prototype.toString.call(data) === '[object Date]';

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::date.prev'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1562145554045;





    function main(date, step) {

        /**
         * 
         * 基于当前日历向前移一次
         * 
         * @import get from date.get
         * 
         * @import getProperty from date.get.properties
         * 
         * @import is.date
         * 
         * @param {Date} date 基准日期
         * 
         * @param {number} [step = 1] 步长
         * 
         * @return {Date} 移过的日期 
         * 
         */

        if (isDate(date)) {

            date = getProperty(date, [
                'year',
                'month',
                'day'
            ]);
        }

        let {
            day,
            ...other
        } = date;

        day -= step;

        return get({
            day,
            ...other
        });

    }

    return function(date, step = 1) {


        if (!var_init_locked_1562145554045) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1562145554045 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::date.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1562145554049;





    function main(date, step) {

        /**
         * 
         * 基于当前日历向后移一次
         * 
         * @import get from date.get
         * 
         * @import getProperty from date.get.properties
         * 
         * @import is.date
         * 
         * @param {Date | object} date 基准日期
         * 
         * @param {number} [step = 1] 步长
         * 
         * @return {Date} 移过的日期 
         * 
         */

        if (isDate(date)) {

            date = getProperty(date, [
                'year',
                'month',
                'day'
            ]);
        }

        let {
            day,
            ...other
        } = date;

        day += step;

        return get({
            day,
            ...other
        });

    }

    return function(date, step = 1) {


        if (!var_init_locked_1562145554049) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1562145554049 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::month.date.last'] = (() => {

    let get, prev, getLastDate;

    let var_init_locked_1562145554053;





    function main(year, month) {


        /**
         * 
         * 指定月份的最后日期
         * 
         * @import get from date.get
         * 
         * @import prev from date.prev
         * 
         * @import getLastDate from ..last
         * 
         * @param {number} year 年份
         * 
         * @param {number} month 月份
         * 
         * @return {Date} 日期对象 
         * 
         */

        let date = get({
            year,
            month,
            day: 31
        });

        if (month < 1 || month > 12) {

            return getLastDate(date.getFullYear(), date.getMonth() + 1);
        }

        while (date.getMonth() + 1 !== month) {

            date = prev(date);
        }

        return date;


    }

    return function(year, month) {


        if (!var_init_locked_1562145554053) {

            get = include('date.get');
            prev = include('date.prev');
            getLastDate = include('src::month.date.last');

            var_init_locked_1562145554053 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::calendar.month'] = (() => {

    let get, getDays, prev, next, getLastDate;

    let var_init_locked_1562145554059;





    function main(year, month, {
        row,
        weekStartDay,
        day,
        ignoreNotCurrentMonthLastRow
    }) {


        /**
         * 
         * 显示以月份显示的日历数据
         * 
         * @import get from date.get
         * 
         * @import getDays from week.days
         * 
         * @import prev from date.prev
         * 
         * @import next from date.next
         * 
         * @import getLastDate from month.date.last
         * 
         * @param {number} year 年份
         * 
         * @param {number} month 月份
         * 
         * @param {object} [config = {}] 日历构造配置
         * 
         * @param {number} [config.row = 6] 日历显示行数
         * 
         * @param {number} [config.weekStartDay = 1] 每周从周几进行显示
         * 
         * @param {number} [config.day] 指定日期所在周作为日历的第一周
         * 
         * @param {boolean} [config.ignoreNotCurrentMonthLastRow = true] 是否忽略不是本月的尾行
         * 
         * @return {array} 一组日历数据 
         * 
         */


        if (!day) {

            day = 1;

        }

        let lastDay = getLastDate(year, month).getDate();

        if (day > lastDay) {

            day = lastDay;
        }

        let date = get({
            year,
            month,
            day
        });

        let days = getDays(weekStartDay),
            prevCount = days.indexOf(date.getDay()),
            nextCount = 6 - prevCount,
            result = [
                date
            ];

        let currentDate = date;

        while (prevCount-- > 0) {

            result.unshift(date = prev(date));
        }

        date = currentDate;

        while (nextCount-- > 0) {

            result.push(date = next(date));
        }

        let count = (row - 1);

        while (count-- > 0) {

            date = next(date);

            if (ignoreNotCurrentMonthLastRow && date.getMonth() + 1 !== month) {

                break;
            }

            result.push(date);

            for (let i = 0; i < 6; i++) {

                result.push(date = next(date));
            }


        }

        return result;





    }

    return function(year, month, {
        row = 6,
        weekStartDay = 1,
        day,
        ignoreNotCurrentMonthLastRow = true
    } = {}) {


        if (!var_init_locked_1562145554059) {

            get = include('date.get');
            getDays = include('week.days');
            prev = include('date.prev');
            next = include('date.next');
            getLastDate = include('month.date.last');

            var_init_locked_1562145554059 = true;
        }




        return main.call(this, year, month, {
            row,
            weekStartDay,
            day,
            ignoreNotCurrentMonthLastRow
        });
    };

})();

exports['src::calendar.month.view.deselect'] = (() => {









    function main() {


        /**
         * 
         * 清除当前日历所有选定
         * 
         */

        let me = this,
            {
                proxy,
                dates,
                selectedDate
            } = me;

        if (selectedDate) {

            selectedDate.selected = false;

            proxy.call('deselect', dates.indexOf(selectedDate), selectedDate);

        }

        delete me.selectedDate;


    }

    return function() {





        return main.call(this);
    };

})();

exports['src::calendar.month.view.select'] = (() => {

    let deselect, getLastDate, get;

    let var_init_locked_1562145554066;

    let var_current_scope_1562145554066;



    function main(year, month, day) {


        /**
         * 
         * 选定
         * 
         * @import deselect from ..deselect scoped
         * 
         * @import getLastDate from month.date.last
         * 
         * @import get from date.get.properties
         * 
         * @param {number} year 选定年份
         * 
         * @param {number} month 选定月份
         * 
         * @param {number} day 选定日期
         * 
         */

        let me = this,
            {
                proxy,
                selectedDate,
                dates
            } = me;

        deselect();

        let {
            day: lastDay
        } = get(getLastDate(year, month), [
            'day'
        ]);

        if (day > lastDay) {

            day = lastDay;
        }

        let count = -1;

        for (let date of dates) {

            let {
                year: itemYear,
                month: itemMonth,
                day: itemDay
            } = date;

            count++;

            if (itemYear === year && itemMonth === month && itemDay === day) {

                me.selectedDate = date;

                date.selected = true;

                proxy.call('select', count, date);

                break;
            }
        }







    }

    return function(year, month, day) {


        if (!var_init_locked_1562145554066) {

            getLastDate = include('month.date.last');
            get = include('date.get.properties');

            var_init_locked_1562145554066 = true;
        }



        if (!var_current_scope_1562145554066 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);

            var_current_scope_1562145554066 = this;
        }


        return main.call(this, year, month, day);
    };

})();

exports['src::calendar.month.view.selectMonth'] = (() => {

    let getDates, deselect, select, getProperty;

    let var_init_locked_1562145554072;

    let var_current_scope_1562145554072;



    function main(year, month) {


        /**
         * 
         * 选定月份
         * 
         * @import getDates from ......month
         * 
         * @import deselect from ..deselect scoped
         * 
         * @import select from ..select scoped
         * 
         * @import getProperty from date.get.properties
         * 
         * @param {number} year 年份
         * 
         * @param {number} month 月份
         * 
         */

        let me = this,
            {
                selectedDate,
                weekStartDay,
                viewConfig
            } = me;

        deselect();

        let fields = [
                'year',
                'month',
                'day'
            ],
            dates = me.dates = getDates(year, month, {
                ...viewConfig,
                weekStartDay
            }).map(date => {

                let {
                    year: itemYear,
                    month: itemMonth,
                    day
                } = getProperty(date, fields),
                    activate = year === itemYear && month === itemMonth;

                return {
                    activate,
                    year: itemYear,
                    month: itemMonth,
                    day,
                    selected: false,
                    key: date.getTime()
                };

            });

        me.year = year;

        me.month = month;

        me.proxy.call('load', year, month, dates);

        if (selectedDate) {

            let {
                day
            } = selectedDate, {
                year,
                month
            } = me;

            select(year, month, day);
        }

    }

    return function(year, month) {


        if (!var_init_locked_1562145554072) {

            getDates = include('src::calendar.month');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554072 = true;
        }



        if (!var_current_scope_1562145554072 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554072 = this;
        }


        return main.call(this, year, month);
    };

})();

exports['src::calendar.month.view.constructor'] = (() => {

    let getProxy, selectMonth, select, getProperty;

    let var_init_locked_1562145554077;

    let var_current_scope_1562145554077;



    function main(target, {
        selectedDate,
        weekStartDay,
        viewConfig
    }) {


        /**
         * 
         * 构建一个月基日历
         * 
         * @import getProxy from object.proxy
         * 
         * @import selectMonth from ..selectMonth scoped
         * 
         * @import select from ..select scoped
         * 
         * @import getProperty from date.get.properties
         * 
         * @param {mixed} target 可提供日历显示的套件
         * 
         * @param {object} [config = {}] 初始化配置
         * 
         * @param {object} [config.selectedDate] 初始化选择日期
         * 
         * @param {number} [config.weekStartDay = 0] 默认从星期天进行计算
         * 
         * @param {object} [config.viewConfig = {}] 日历视图设置
         * 
         */

        let me = this;

        me.viewConfig = viewConfig;

        me.weekStartDay = weekStartDay;

        me.proxy = getProxy(target);

        me.selectedDates = [];

        me.dates = [];

        if (!selectedDate) {

            selectedDate = getProperty(new Date(), [
                'year',
                'month',
                'day'
            ]);
        }

        let {
            year,
            month,
            day
        } = selectedDate;

        selectMonth(year, month);

        select(year, month, day);

    }

    return function(target, {
        selectedDate,
        weekStartDay = 0,
        viewConfig = {}
    } = {}) {


        if (!var_init_locked_1562145554077) {

            getProxy = include('object.proxy');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554077 = true;
        }



        if (!var_current_scope_1562145554077 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554077 = this;
        }


        return main.call(this, target, {
            selectedDate,
            weekStartDay,
            viewConfig
        });
    };

})();

exports['src::is.week.day.first'] = (() => {









    function main(date, weekStartDay) {


        /**
         * 
         * 判断指定日期是否为一周的第一天
         * 
         * @param {Date} date 校验日期
         * 
         * @param {number} [weekStartDay = 1] 确认一周是从周几算起
         *  
         * @return {boolean} 如果是第一天的话，则返回 true , 否则返回 false
         * 
         */

        return date.getDay() === weekStartDay;



    }

    return function(date, weekStartDay = 1) {





        return main.call(this, date, weekStartDay);
    };

})();

exports['src::month.prev'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1562145554084;





    function main(date) {

        /**
         * 
         * 获得指定月份的上一个月份
         * 
         * @import get from date.get
         * 
         * @import getProperty from date.get.properties
         * 
         * @import is.date
         * 
         * @param {Date | object} date 包括月份的日期对象 
         * 
         * @return {Date} 上一个月份 
         * 
         */

        if (isDate(date)) {

            date = getProperty(date, [
                'year',
                'month'
            ]);
        }

        let {
            month,
            ...other
        } = date;

        month--;

        console.log(month, get({
            month,
            ...other
        }).toJSON());

        return get({
            month,
            ...other
        });

    }

    return function(date) {


        if (!var_init_locked_1562145554084) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1562145554084 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectPrevMonth'] = (() => {

    let prev, getProperty, selectMonth;

    let var_init_locked_1562145554089;

    let var_current_scope_1562145554089;



    function main() {


        /**
         * 
         * 向上移动月份
         * 
         * @import prev from month.prev
         * 
         * @import getProperty from date.get.properties
         * 
         * @import selectMonth from ..selectMonth scoped
         * 
         */

        let me = this,
            {
                year,
                month
            } = me,
            {
                year: selectedYear,
                month: selectedMonth
            } = getProperty(prev({
                year,
                month
            }), [
                'year',
                'month'
            ]);

        selectMonth(selectedYear, selectedMonth);

    }

    return function() {


        if (!var_init_locked_1562145554089) {

            prev = include('month.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554089 = true;
        }



        if (!var_current_scope_1562145554089 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1562145554089 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectLeft'] = (() => {

    let isFirst, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1562145554095;

    let var_current_scope_1562145554095;



    function main() {

        /**
         * 
         * 向左移一个格
         * 
         * @import isFirst from is.week.day.first
         * 
         * @import get from date.get
         * 
         * @import prevMonth from ..selectPrevMonth scoped
         * 
         * @import prevDate from date.prev
         * 
         * @import getProperty from date.get.properties
         * 
         * @import select from ..select scoped
         * 
         */

        let {
            selectedDate,
            weekStartDay,
            month
        } = this;

        if (selectedDate) {

            let date = get(selectedDate);

            if (isFirst(date, weekStartDay)) {

                prevMonth();

            } else {

                date = prevDate(date);

                let {
                    year: prevYearValue,
                    month: prevMonthValue,
                    day
                } = getProperty(date, [
                    'year',
                    'month',
                    'day'
                ]);

                if (prevMonthValue !== month) {

                    prevMonth();
                }

                select(prevYearValue, prevMonthValue, day);
            }
        }

    }

    return function() {


        if (!var_init_locked_1562145554095) {

            isFirst = include('is.week.day.first');
            get = include('date.get');
            prevDate = include('date.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554095 = true;
        }



        if (!var_current_scope_1562145554095 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554095 = this;
        }


        return main.call(this);
    };

})();

exports['src::is.week.day.last'] = (() => {

    let getDays;

    let var_init_locked_1562145554101;





    function main(date, weekStartDay) {


        /**
         * 
         * 判断指定日期是否为一周的最后一天
         * 
         * @import getDays from week.days
         * 
         * @param {Date} date 校验日期
         * 
         * @param {number} [weekStartDay = 1] 确认一周是从周几算起
         *  
         * @return {boolean} 如果是最后一天的话，则返回 true , 否则返回 false
         * 
         */

        let days = getDays(weekStartDay);

        return date.getDay() === days[days.length - 1];

    }

    return function(date, weekStartDay = 1) {


        if (!var_init_locked_1562145554101) {

            getDays = include('week.days');

            var_init_locked_1562145554101 = true;
        }




        return main.call(this, date, weekStartDay);
    };

})();

exports['src::month.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1562145554103;





    function main(date) {

        /**
         * 
         * 获得指定月份的下一个月份
         * 
         * @import get from date.get
         * 
         * @import getProperty from date.get.properties
         * 
         * @import is.date
         * 
         * @param {Date | object} date 包括月份的日期对象 
         * 
         * @return {Date} 下一个月份 
         * 
         */

        if (isDate(date)) {

            date = getProperty(date, [
                'year',
                'month'
            ]);
        }

        let {
            month,
            ...other
        } = date;

        month++;

        return get({
            month,
            ...other
        });

    }

    return function(date) {


        if (!var_init_locked_1562145554103) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1562145554103 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectNextMonth'] = (() => {

    let next, getProperty, selectMonth;

    let var_init_locked_1562145554107;

    let var_current_scope_1562145554107;



    function main() {


        /**
         * 
         * 向下移动月份
         * 
         * @import next from month.next
         * 
         * @import getProperty from date.get.properties
         * 
         * @import selectMonth from ..selectMonth scoped
         * 
         */

        let me = this,
            {
                year,
                month
            } = me,
            {
                year: selectedYear,
                month: selectedMonth
            } = getProperty(next({
                year,
                month
            }), [
                'year',
                'month'
            ]);


        selectMonth(selectedYear, selectedMonth);

    }

    return function() {


        if (!var_init_locked_1562145554107) {

            next = include('month.next');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554107 = true;
        }



        if (!var_current_scope_1562145554107 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1562145554107 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectRight'] = (() => {

    let isLast, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1562145554112;

    let var_current_scope_1562145554112;



    function main() {


        /**
         * 
         * 向右移一个格日期
         * 
         * @import isLast from is.week.day.last
         * 
         * @import get from date.get
         * 
         * @import nextMonth from ..selectNextMonth scoped
         * 
         * @import nextDate from date.next
         * 
         * @import getProperty from date.get.properties
         * 
         * @import select from ..select scoped
         * 
         */


        let {
            selectedDate,
            weekStartDay,
            month
        } = this;

        if (selectedDate) {

            let date = get(selectedDate);

            if (isLast(date, weekStartDay)) {

                nextMonth();

            } else {

                date = nextDate(date);

                let {
                    year: nextYearValue,
                    month: nextMonthValue,
                    day
                } = getProperty(date, [
                    'year',
                    'month',
                    'day'
                ]);

                if (nextMonthValue !== month) {

                    nextMonth();
                }

                select(nextYearValue, nextMonthValue, day);
            }
        }

    }

    return function() {


        if (!var_init_locked_1562145554112) {

            isLast = include('is.week.day.last');
            get = include('date.get');
            nextDate = include('date.next');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554112 = true;
        }



        if (!var_current_scope_1562145554112 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554112 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.date.first'] = (() => {

    let get;

    let var_init_locked_1562145554117;





    function main(year, month) {


        /**
         * 
         * 指定月份的第一个日期
         * 
         * @import get from date.get
         * 
         * @param {number} year 年份
         * 
         * @param {number} month 月份
         * 
         * @return {Date} 日期对象 
         * 
         */

        return get({
            year,
            month,
            day: 1
        });

    }

    return function(year, month) {


        if (!var_init_locked_1562145554117) {

            get = include('date.get');

            var_init_locked_1562145554117 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::month.dates.week.first'] = (() => {

    let getDays, getFirstDate, next;

    let var_init_locked_1562145554120;





    function main(year, month, weekStartDay) {


        /**
         * 
         * 获得指定月份的第一周的所有日期
         * 
         * @import getDays from week.days
         * 
         * @import getFirstDate from month.date.first
         * 
         * @import next from date.next
         * 
         * @param {number} year 年份 
         * 
         * @param {number} month 月份
         * 
         * @param {number} [weekStartDay = 1] 确定一周从周几进行计算
         * 
         * @return {Date[]} 一周里所有的日期 
         * 
         */

        let days = getDays(weekStartDay),
            date = getFirstDate(year, month),
            firstIndex = days.indexOf(date.getDay()),
            result = [
                date
            ];

        for (let i = firstIndex + 1; i < 7; i++) {

            result.push(date = next(date));
        }

        return result;





    }

    return function(year, month, weekStartDay = 1) {


        if (!var_init_locked_1562145554120) {

            getDays = include('week.days');
            getFirstDate = include('month.date.first');
            next = include('date.next');

            var_init_locked_1562145554120 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.prev.week'] = (() => {

    let prev;

    let var_init_locked_1562145554123;





    function main(date) {


        /**
         * 
         * 基于当前日期的上一周的日期
         * 
         * @import prev from date.prev
         * 
         * @param {Date | object} date 基准日期
         * 
         * @return {Date} 移过的日期 
         * 
         */

        return prev(date, 7);


    }

    return function(date) {


        if (!var_init_locked_1562145554123) {

            prev = include('date.prev');

            var_init_locked_1562145554123 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectUp'] = (() => {

    let getFirstWeekDates, includes, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1562145554127;

    let var_current_scope_1562145554127;



    function main() {


        /**
         * 
         * 向上移一格日期
         * 
         * @import getFirstWeekDates from month.dates.week.first
         * 
         * @import includes from array.dates.includes
         * 
         * @import get from date.get
         * 
         * @import prevMonth from ..selectPrevMonth scoped
         * 
         * @import prevDate from date.prev.week
         * 
         * @import getProperty from date.get.properties
         * 
         * @import select from ..select scoped
         * 
         */

        let {
            selectedDate,
            weekStartDay,
            year,
            month
        } = this;

        if (selectedDate) {

            let dates = getFirstWeekDates(year, month, weekStartDay),
                date = get(selectedDate);

            if (includes(dates, date)) {

                prevMonth();

            } else {

                date = prevDate(date);

                let {
                    year: prevYearValue,
                    month: prevMonthValue,
                    day
                } = getProperty(date, [
                    'year',
                    'month',
                    'day'
                ]);

                if (prevMonthValue !== month) {

                    prevMonth();
                }

                select(prevYearValue, prevMonthValue, day);
            }
        }

    }

    return function() {


        if (!var_init_locked_1562145554127) {

            getFirstWeekDates = include('month.dates.week.first');
            includes = include('array.dates.includes');
            get = include('date.get');
            prevDate = include('date.prev.week');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554127 = true;
        }



        if (!var_current_scope_1562145554127 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554127 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.dates.week.last'] = (() => {

    let getDays, getLastDate, prev;

    let var_init_locked_1562145554134;





    function main(year, month, weekStartDay) {


        /**
         * 
         * 获得指定月份的最后一周的所有日期
         * 
         * @import getDays from week.days
         * 
         * @import getLastDate from month.date.last
         * 
         * @import prev from date.prev
         * 
         * @param {number} year 年份 
         * 
         * @param {number} month 月份
         * 
         * @param {number} [weekStartDay = 1] 确定一周从周几进行计算
         * 
         * @return {Date[]} 一周里所有的日期 
         * 
         */

        let days = getDays(weekStartDay),
            date = getLastDate(year, month),
            lastIndex = days.indexOf(date.getDay()),
            result = [
                date
            ];

        for (let i = lastIndex - 1; i >= 0; i--) {

            result.push(date = prev(date));
        }

        return result;

    }

    return function(year, month, weekStartDay = 1) {


        if (!var_init_locked_1562145554134) {

            getDays = include('week.days');
            getLastDate = include('month.date.last');
            prev = include('date.prev');

            var_init_locked_1562145554134 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.next.week'] = (() => {

    let next;

    let var_init_locked_1562145554137;





    function main(date) {


        /**
         * 
         * 基于当前日期的下一周的日期
         * 
         * @import next from date.next
         * 
         * @param {Date | object} date 基准日期
         * 
         * @return {Date} 移过的日期 
         * 
         */

        return next(date, 7);



    }

    return function(date) {


        if (!var_init_locked_1562145554137) {

            next = include('date.next');

            var_init_locked_1562145554137 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectDown'] = (() => {

    let getLastWeekDates, includes, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1562145554141;

    let var_current_scope_1562145554141;



    function main() {


        /**
         * 
         * 向下移一格日期
         * 
         * @import getLastWeekDates from month.dates.week.last
         * 
         * @import includes from array.dates.includes
         * 
         * @import get from date.get
         * 
         * @import nextMonth from ..selectNextMonth scoped
         * 
         * @import nextDate from date.next.week
         * 
         * @import getProperty from date.get.properties
         * 
         * @import select from ..select scoped
         * 
         */

        let {
            selectedDate,
            weekStartDay,
            year,
            month
        } = this;

        if (selectedDate) {

            let dates = getLastWeekDates(year, month, weekStartDay),
                date = get(selectedDate);

            if (includes(dates, date)) {

                nextMonth();

            } else {

                date = nextDate(date);

                let {
                    year: nextYearValue,
                    month: nextMonthValue,
                    day
                } = getProperty(date, [
                    'year',
                    'month',
                    'day'
                ]);

                if (nextMonthValue !== month) {

                    nextMonth();
                }

                select(nextYearValue, nextMonthValue, day);
            }
        }



    }

    return function() {


        if (!var_init_locked_1562145554141) {

            getLastWeekDates = include('month.dates.week.last');
            includes = include('array.dates.includes');
            get = include('date.get');
            nextDate = include('date.next.week');
            getProperty = include('date.get.properties');

            var_init_locked_1562145554141 = true;
        }



        if (!var_current_scope_1562145554141 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1562145554141 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view'] = (() => {

    let extend, constructor, method_select, method_selectLeft, method_selectRight, method_selectUp, method_selectDown, method_selectMonth, method_selectNextMonth, method_selectPrevMonth, method_deselect;

    let var_init_locked_1562145554147;

    let var_class_1562145554147;



    return function(target, config) {


        if (!var_init_locked_1562145554147) {

            extend = include('class.empty')();
            constructor = include('src::calendar.month.view.constructor');
            method_select = include('src::calendar.month.view.select');
            method_selectLeft = include('src::calendar.month.view.selectLeft');
            method_selectRight = include('src::calendar.month.view.selectRight');
            method_selectUp = include('src::calendar.month.view.selectUp');
            method_selectDown = include('src::calendar.month.view.selectDown');
            method_selectMonth = include('src::calendar.month.view.selectMonth');
            method_selectNextMonth = include('src::calendar.month.view.selectNextMonth');
            method_selectPrevMonth = include('src::calendar.month.view.selectPrevMonth');
            method_deselect = include('src::calendar.month.view.deselect');

            var_init_locked_1562145554147 = true;
        }



        if (!var_class_1562145554147) {

            class main {





                constructor(...args) {



                    constructor.apply(this, args);

                }

                select(...args) {

                    return method_select.apply(this, args);

                }
                selectLeft(...args) {

                    return method_selectLeft.apply(this, args);

                }
                selectRight(...args) {

                    return method_selectRight.apply(this, args);

                }
                selectUp(...args) {

                    return method_selectUp.apply(this, args);

                }
                selectDown(...args) {

                    return method_selectDown.apply(this, args);

                }
                selectMonth(...args) {

                    return method_selectMonth.apply(this, args);

                }
                selectNextMonth(...args) {

                    return method_selectNextMonth.apply(this, args);

                }
                selectPrevMonth(...args) {

                    return method_selectPrevMonth.apply(this, args);

                }
                deselect(...args) {

                    return method_deselect.apply(this, args);

                }



            }

            var_class_1562145554147 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145554147;
                }

            };
        }


        return new var_class_1562145554147(target, config);
    };

})();

exports['src::browser.global.listener.map'] = (() => {

    let map;

    let var_init_locked_1562145554157;



    let var_once_value_1562145554157;

    function main() {


        /**
         * 
         * 维护全局事件监听对象
         * 
         * @import map value
         * 
         * @return {Map} 集合对象 
         * 
         * @once
         * 
         */

        return map;

    }

    return function() {


        if (!var_init_locked_1562145554157) {

            map = include('map')();

            var_init_locked_1562145554157 = true;
        }





        if (var_once_value_1562145554157) {

            return var_once_value_1562145554157;

        }
        return var_once_value_1562145554157 = main.call(this);

    };

})();

exports['src::browser.selector.is'] = (() => {









    function main(el, selector) {


        /**
         * 
         * 判断元素是否匹配选择器
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} selector 选择器字符串
         * 
         * @return {boolean} 如果元素匹配选择器则返回 true , 否则返回 false 
         * 
         */

        let {
            ownerDocument
        } = el;

        let els = Array.from(ownerDocument.querySelectorAll(selector));

        return els.includes(el);

    }

    return function(el, selector) {





        return main.call(this, el, selector);
    };

})();

exports['src::browser.selector.parent'] = (() => {

    let is;

    let var_init_locked_1562145554162;





    function main(el, selector) {


        /**
         * 
         * 判断元素及其元素父祖级元素是否匹配选择器
         * 
         * @import is from ..is
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} selector 选择器
         * 
         * @return {boolean} 如果匹配则返回 true , 否则返回 false 
         * 
         */

        while (el) {

            if (is(el, selector)) {

                return el;
            }

            el = el.parentElement;
        }

    }

    return function(el, selector) {


        if (!var_init_locked_1562145554162) {

            is = include('src::browser.selector.is');

            var_init_locked_1562145554162 = true;
        }




        return main.call(this, el, selector);
    };

})();

exports['src::browser.global.listener.add'] = (() => {

    let getMap, is;

    let var_init_locked_1562145554165;





    function main(event, fn, selector) {


        /**
         * 
         * 监听全局事件
         * 
         * @import getMap from ..map
         * 
         * @import is from browser.selector.parent
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * @param {string} selector 选择器
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let map = getMap(),
            listenerFn = e => {

                let {
                    target
                } = e;

                if (selector) {

                    if (is(target, selector)) {

                        fn(e);
                    }

                } else {

                    fn(e);
                }
            };

        map.set(event, fn, selector, listenerFn);

        window.addEventListener(event, listenerFn);




    }

    return function(event, fn, selector) {


        if (!var_init_locked_1562145554165) {

            getMap = include('src::browser.global.listener.map');
            is = include('browser.selector.parent');

            var_init_locked_1562145554165 = true;
        }




        return main.call(this, event, fn, selector);
    };

})();

exports['src::browser.global.listener.remove'] = (() => {

    let getMap;

    let var_init_locked_1562145554169;





    function main(event, fn, selector) {


        /**
         * 
         * 去除监听全局事件
         * 
         * @import getMap from ..map
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * @param {string} selector 选择器
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let map = getMap(),
            listenerFn = map.get(event, fn, selector);

        if (listenerFn) {

            window.removeEventListener(event, listenerFn);
        }

    }

    return function(event, fn, selector) {


        if (!var_init_locked_1562145554169) {

            getMap = include('src::browser.global.listener.map');

            var_init_locked_1562145554169 = true;
        }




        return main.call(this, event, fn, selector);
    };

})();

exports['src::browser.event.key'] = (() => {










    /**
     * 
     * 得到对应代码的值键值 
     * 
     * @param {Event} event 键事件对象
     * 
     * @return {mixed} 键值 
     * 
     */

    const KEY_CODES = {
        39: 'DIRECTION::RIGHT',
        37: 'DIRECTION::LEFT',
        38: 'DIRECTION::UP',
        40: 'DIRECTION::DOWN',
        13: 'ENTER',
        46: 'DELETE',
        9: 'TAB',
        107: '+',
        187: '=',
        27: 'ESC'
    };

    function main({
        shiftKey,
        keyCode
    }) {

        return {
            shift: shiftKey,
            key: KEY_CODES[keyCode],
            code: keyCode
        };
    }

    return function(event) {





        return main.call(this, event);
    };

})();

exports['src::browser.event.single'] = (() => {









    function main(e, name) {


        /**
         * 
         * 获得单一的事件对象
         * 
         * @param {Event} e 事件对象
         * 
         * @param {string} name 事件名称
         *  
         * @return {mixed} 事件对象 
         * 
         */

        let touches;

        switch (name) {

            case 'start':
            case 'move':

                touches = e.touches;

                break;

            case 'end':

                touches = e.changedTouches;
        }

        if (touches) {

            return touches[0];
        }

        return e;

    }

    return function(e, name) {





        return main.call(this, e, name);
    };

})();

exports['src::browser.event.touches'] = (() => {









    function main(e) {


        /**
         * 
         * 如果当前设备处于多点触控时返回，其它时候返回空
         * 
         * @param {Event} e 事件对象
         * 
         */

        let touches;

        switch (name) {

            case 'start':
            case 'move':

                touches = e.touches;

                break;

            case 'end':

                touches = e.changedTouches
        }

        if (touches && touches.length > 1) {

            return touches;
        }

    }

    return function(e) {





        return main.call(this, e);
    };

})();

exports['src::browser.event.stop'] = (() => {









    function main(e) {


        /**
         * 
         * 停止事件
         * 
         * @param {Event} e 事件对象
         * 
         */

        e.preventDefault();

        e.stopPropagation();

    }

    return function(e) {





        return main.call(this, e);
    };

})();

exports['src::is.browser.support.pointer'] = (() => {







    let var_once_value_1562145554181;

    function main() {


        /**
         * 
         * 判断当前浏览器是否支持点触
         * 
         * @return {boolean} 如果是支持点触则返回 true ，否则返回 false 
         * 
         * @once
         * 
         */

        return window.hasOwnProperty('onpointerdown');

    }

    return function() {






        if (var_once_value_1562145554181) {

            return var_once_value_1562145554181;

        }
        return var_once_value_1562145554181 = main.call(this);

    };

})();

exports['src::is.browser.support.touch'] = (() => {







    let var_once_value_1562145554183;

    function main() {


        /**
         * 
         * 判断当前浏览器是否支持触摸
         * 
         * @return {boolean} 如果是支持触摸则返回 true ，否则返回 false 
         * 
         * @once
         * 
         */

        return window.hasOwnProperty('ontouchstart');

    }

    return function() {






        if (var_once_value_1562145554183) {

            return var_once_value_1562145554183;

        }
        return var_once_value_1562145554183 = main.call(this);

    };

})();

exports['src::browser.event.name.single'] = (() => {

    let isSupportPointer, isSupportTouch;

    let var_init_locked_1562145554185;





    function main(name) {


        /**
         * 
         * 获取事件名称
         * 
         * @import isSupportPointer from is.browser.support.pointer
         * 
         * @import isSupportTouch from is.browser.support.touch
         * 
         * @param {string} name 事件名称
         * 
         * @return {mixed} 返回说明 
         * 
         */

        if (isSupportPointer()) {

            switch (name) {

                case 'start':

                    name = 'down';

                    break;

                case 'end':

                    name = 'up';
            }

            return `pointer${name}`;

        } else if (isSupportTouch()) {

            return `touch${name}`;
        }

        return `mouse${name}`;



    }

    return function(name) {


        if (!var_init_locked_1562145554185) {

            isSupportPointer = include('is.browser.support.pointer');
            isSupportTouch = include('is.browser.support.touch');

            var_init_locked_1562145554185 = true;
        }




        return main.call(this, name);
    };

})();

exports['src::os.name'] = (() => {







    let var_once_value_1562145554188;

    function main() {

        /**
         * 
         * 返回当前操作系统的名称
         * 
         * @once
         * 
         * @return {string} 操作系统的名称
         * 
         */

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






        if (var_once_value_1562145554188) {

            return var_once_value_1562145554188;

        }
        return var_once_value_1562145554188 = main.call(this);

    };

})();

exports['src::browser.scale'] = (() => {

    let osName;

    let var_init_locked_1562145554191;





    function main() {

        /**
         * 
         * 获得当前浏览器的缩放比率
         * 
         * @import os.name
         * 
         * @return {number} 缩放比率
         * 
         */

        switch (osName) {

            case 'iOS':
            case 'Android':

                return 1;
        }

        return window.devicePixelRatio;


    }

    return function() {


        if (!var_init_locked_1562145554191) {

            osName = include('os.name');

            var_init_locked_1562145554191 = true;
        }




        return main.call(this);
    };

})();

exports['config::event.tap'] = (() => {

    let get;

    let var_init_locked_1562145554194;





    const config = {
        "timeout": 100,
        "moveDistance": 8
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1562145554194) {

            get = include('object.value.get');

            var_init_locked_1562145554194 = true;
        }




        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.tap.move'] = (() => {

    let getEvent, getDistance, getScale, stop, moveDistance;

    let var_init_locked_1562145554198;





    function main(e) {


        /**
         * 
         * 移动事件监听
         * 
         *  @import getEvent from browser.event.single
         * 
         * @import getDistance from math.point.distance
         * 
         * @import getScale from browser.scale
         * 
         * @import stop from browser.event.stop
         * 
         * @config moveDistance from event.tap...moveDistance
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        let me = this,
            {
                pageX,
                pageY
            } = getEvent(e, 'move'),
            {
                startPoint,
                el
            } = me;

        if (Math.round(getDistance({
                x: pageX,
                y: pageY
            }, startPoint)) * getScale() >= moveDistance) {

            dispatch(el, 'gesture:tapcancel');

            disabled();
        }

    }

    return function(e) {


        if (!var_init_locked_1562145554198) {

            getEvent = include('browser.event.single');
            getDistance = include('math.point.distance');
            getScale = include('browser.scale');
            stop = include('browser.event.stop');
            moveDistance = config('event.tap', 'moveDistance');

            var_init_locked_1562145554198 = true;
        }




        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1562145554202;





    function main() {


        /**
         * 
         * 取消监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import un from browser.global.listener.remove
         * 
         */

        let me = this,
            {
                onStart,
                onMove,
                onEnd
            } = me;

        un(getName('start'), onStart);

        un(getName('move'), onMove);

        un(getName('end'), onEnd);

        delete me.onStart;

        delete me.onMove;

        delete me.onEnd;



    }

    return function() {


        if (!var_init_locked_1562145554202) {

            getName = include('browser.event.name.single');
            un = include('browser.global.listener.remove');

            var_init_locked_1562145554202 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.dispatch'] = (() => {









    function main(el, name, detail) {


        /**
         * 
         * 触发一个自定义事件
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} name 自定义事件名称
         * 
         * @param {mixed} detail 基于自定义事件传递的数据
         * 
         */

        el.dispatchEvent(new CustomEvent(name, {
            bubbles: true,
            detail
        }));


    }

    return function(el, name, detail) {





        return main.call(this, el, name, detail);
    };

})();

exports['src::browser.event.gesture.tap.end'] = (() => {

    let disabled, stop, dispatch;

    let var_init_locked_1562145554209;

    let var_current_scope_1562145554209;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import stop from browser.event.stop
         * 
         * @import dispatch from browser.event.dispatch scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        dispatch(this.el, 'gesture:tap');

        disabled();



    }

    return function(e) {


        if (!var_init_locked_1562145554209) {

            stop = include('browser.event.stop');

            var_init_locked_1562145554209 = true;
        }



        if (!var_current_scope_1562145554209 !== this) {

            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);
            dispatch = include('browser.event.dispatch').bind(this);

            var_current_scope_1562145554209 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.start.global'] = (() => {

    let getTouchEvents, stop, disabled;

    let var_init_locked_1562145554214;

    let var_current_scope_1562145554214;



    function main(e) {


        /**
         * 
         * 全局监听按下事件
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import stop from browser.event.stop
         * 
         * @import disabled from ..disabled scoped
         * 
         * @param {Event} e 事件
         * 
         */

        stop(e);

        if (getTouchEvents(e)) {

            disabled();
        }


    }

    return function(e) {


        if (!var_init_locked_1562145554214) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');

            var_init_locked_1562145554214 = true;
        }



        if (!var_current_scope_1562145554214 !== this) {

            disabled = include('src::browser.event.gesture.tap.start.disabled').bind(this);

            var_current_scope_1562145554214 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.enabled'] = (() => {

    let getName, onMove, onEnd, onStart, on;

    let var_init_locked_1562145554216;

    let var_current_scope_1562145554216;



    function main() {


        /**
         * 
         * 监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import onMove from ..move scoped
         * 
         * @import onEnd from ..end scoped
         * 
         * @import onStart from ..start.global scoped
         * 
         * @import on from browser.global.listener.add
         * 
         */

        let me = this;

        on(getName('start'), me.onStart = onStart);

        on(getName('move'), me.onMove = onMove);

        on(getName('end'), me.onEnd = onEnd);



    }

    return function() {


        if (!var_init_locked_1562145554216) {

            getName = include('browser.event.name.single');
            on = include('browser.global.listener.add');

            var_init_locked_1562145554216 = true;
        }



        if (!var_current_scope_1562145554216 !== this) {

            onMove = include('src::browser.event.gesture.tap.move').bind(this);
            onEnd = include('src::browser.event.gesture.tap.end').bind(this);
            onStart = include('src::browser.event.gesture.tap.start.global').bind(this);

            var_current_scope_1562145554216 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.start'] = (() => {

    let getEvent, getTouchEvents, stop, enabled, disabled, timeout;

    let var_init_locked_1562145554224;

    let var_current_scope_1562145554224;



    function main(e) {


        /**
         * 
         * 开始事件监听
         * 
         * @import getEvent from browser.event.single
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import stop from browser.event.stop
         * 
         * @import enabled from ..enabled scoped
         * 
         * @import disabled from ..disabled scoped
         * 
         * @config timeout from event.tap...timeout
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        if (getTouchEvents(e)) {

            return;

        }

        let me = this,
            {
                pageX: x,
                pageY: y
            } = getEvent(e, 'start');

        me.startPoint = {
            x,
            y
        };

        enabled();


    }

    return function(e) {


        if (!var_init_locked_1562145554224) {

            getEvent = include('browser.event.single');
            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            timeout = config('event.tap', 'timeout');

            var_init_locked_1562145554224 = true;
        }



        if (!var_current_scope_1562145554224 !== this) {

            enabled = include('src::browser.event.gesture.tap.enabled').bind(this);
            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1562145554224 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.name.start'] = (() => {

    let getName;

    let var_init_locked_1562145554232;





    function main(name) {


        /**
         * 
         * 获得手势事件启动的原生事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @param {string} name 手势事件名称
         * 
         * @return {string} 原生事件名称 
         * 
         */

        switch (name) {

            case 'tap':

                return getName('start');
        }

    }

    return function(name) {


        if (!var_init_locked_1562145554232) {

            getName = include('browser.event.name.single');

            var_init_locked_1562145554232 = true;
        }




        return main.call(this, name);
    };

})();

exports['src::browser.event.gesture.manager.dom'] = (() => {

    let getName, createMap;

    let var_init_locked_1562145554235;

    let var_class_1562145554235;

    let var_once_value_1562145554235;

    return function() {


        if (!var_init_locked_1562145554235) {

            getName = include('src::browser.event.gesture.name.start');
            createMap = include('map');

            var_init_locked_1562145554235 = true;
        }



        if (!var_class_1562145554235) {


            /**
             * 
             * 传统事件管理
             * 
             * @import getName from ....name.start
             * 
             * @import createMap from map
             * 
             * @once
             * 
             */

            class main {

                constructor() {

                    let me = this;

                    me.events = createMap();

                }

                install(el, name) {

                    let {
                        events
                    } = this,
                    listener = include(`browser.event.gesture.${name}.start`).bind({
                        el
                    });

                    el.addEventListener(getName(name), listener);

                    events.set(el, name, listener);
                }

                uninstall(el, name) {

                    let {
                        events
                    } = this,
                    listener = events.get(el, name);

                    if (listener) {

                        el.removeEventListener(getName(name), listener);

                        events.delete(el, name);
                    }


                }
            }

            var_class_1562145554235 = class extends main {

                static get ZBEE_CLASS() {

                    return true;
                }

                get ZBEE_CURRENT_CLASS() {

                    return var_class_1562145554235;
                }

            };
        }



        if (var_once_value_1562145554235) {

            return var_once_value_1562145554235;

        }

        return var_once_value_1562145554235 = new var_class_1562145554235();

    };

})();

exports['src::number.format'] = (() => {









    function main(data, count) {


        /**
         * 
         * 格式化数字
         * 
         * @param {mixed} data 数值
         * 
         * @param {number} count 数值
         * 
         * @return {number} 格式化后的数字字符串 
         * 
         */

        return String(data).padStart(count, '0');

    }

    return function(data, count) {





        return main.call(this, data, count);
    };

})();

exports['src::miniprogram.page'] = (() => {

    let empty, isFunction, get;

    let var_init_locked_1562145554242;






    /**
     * 
     * 针对小程序的页面进行封装
     * 
     * @import empty from function.empty value
     * 
     * @import is.function
     * 
     * @import get from object.value.get
     * 
     * @param {object} config 页面设置
     * 
     * @return {object} 封装后的页面配置 
     * 
     */

    function main({

        onLoad = empty,

        computed = {},

        ...options

    }) {

        return {

            onLoad(query) {

                let me = this,
                    {
                        setData: nativeSetData,
                        data
                    } = me;

                data = new Data(me, {
                    computed,
                    setData: nativeSetData
                });

                me.setData = values => nativeSetData.call(me, values, () => refresh.call(data));

                onLoad.call(me, query);
            },

            ...options
        };
    }

    class Data {

        constructor(program, {
            computed,
            setData
        }) {

            let me = this;

            me.program = program;

            me.computed = computed;

            me.setData = setData;
        }

        get(name) {

            let me = this,
                {
                    computed,
                    program
                } = me,
                {
                    data
                } = program;

            if (computed.hasOwnProperty(name)) {

                return computed[name](me);
            }

            return get(data, name);

        }
    }

    function refresh() {

        let me = this,
            {
                program,
                setData,
                computed
            } = me,
            {
                data
            } = program,
            names = Object.keys(computed);

        for (let name of names) {

            data[name] = computed[name](me);
        }

        setData.call(program, data);
    }


    return function(config) {


        if (!var_init_locked_1562145554242) {

            empty = include('function.empty')();
            isFunction = include('is.function');
            get = include('object.value.get');

            var_init_locked_1562145554242 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::json.stringify'] = (() => {









    function main(data) {


        /**
         * 
         * JSON 序列化
         * 
         * @param {mixed} data 数据
         * 
         * @return {string} JSON 序列化后的字符串 
         * 
         */

        try {

            return JSON.stringify(data);

        } catch (e) {

        }

        return false;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::is.directory'] = (() => {









    function main(path) {


        /**
         * 
         * 判断路径是否为文件夹路径
         * 
         * @param {string} path 路径
         * 
         * @return {boolean} 路径是文件夹则返回 true , 否则返回 false
         * 
         */

        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isDirectory();


    }

    return function(path) {





        return main.call(this, path);
    };

})();

exports['src::is.file'] = (() => {









    function main(path) {


        /**
         * 
         * 判断路径是否为文件路径
         * 
         * @param {string} path 路径
         * 
         * @return {boolean} 路径是文件则返回 true , 否则返回 false
         * 
         */

        const {
            existsSync,
            statSync
        } = require('fs');

        return existsSync(path) && statSync(path).isFile();


    }

    return function(path) {





        return main.call(this, path);
    };

})();

exports['src::directory.readAllFilePaths'] = (() => {

    let isDirectory, isFile;

    let var_init_locked_1562145554251;






    /**
     * 
     * 读取目录下所有文件的路径
     * 
     * @import is.directory
     * 
     * @import is.file
     * 
     * @param {string} path 文件夹目录路径
     * 
     * @param {RegExp} [testRe] 路径匹配正则表达式
     * 
     * @return {array} 多个文件路径
     * 
     */

    function main(path, testRe) {

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

                    if (testRe && !testRe.test(targetPath)) {

                        continue;
                    }

                    paths.push(targetPath);

                } else {

                    paths.push(...main(targetPath, testRe));
                }
            }

            return paths;
        }

        return [];
    }

    return function(path, testRe) {


        if (!var_init_locked_1562145554251) {

            isDirectory = include('is.directory');
            isFile = include('is.file');

            var_init_locked_1562145554251 = true;
        }




        return main.call(this, path, testRe);
    };

})();

exports['src::file.read'] = (() => {

    let isFile;

    let var_init_locked_1562145554253;





    function main(path) {

        /**
         * 
         * 读取文件
         * 
         * @import is.file
         * 
         * @param {string} path 文本文件路径
         * 
         * @return {ArrayBuffer} 原生文件内容
         * 
         */

        const {
            readFileSync
        } = require('fs');

        if (isFile(path)) {

            return readFileSync(path);
        }

    }

    return function(path) {


        if (!var_init_locked_1562145554253) {

            isFile = include('is.file');

            var_init_locked_1562145554253 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::file.read.text'] = (() => {

    let read;

    let var_init_locked_1562145554256;





    function main(path) {

        /**
         * 
         * 读取文本文件
         * 
         * @import read from file.read
         * 
         * @param {string} path 文本文件路径
         * 
         * @return {string} 文本文件内容
         * 
         */

        let data = read(path);

        if (data) {

            return data.toString('utf8');
        }

    }

    return function(path) {


        if (!var_init_locked_1562145554256) {

            read = include('file.read');

            var_init_locked_1562145554256 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::json.parse'] = (() => {









    function main(data) {


        /**
         * 
         * 将 JSON 字符串转换成 JSON 数据
         * 
         * @param {string} data JSON 字符串
         * 
         * @return {mixed} JSON 数据 
         * 
         */

        try {

            return JSON.parse(data);

        } catch (err) {


        }

        return {};

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::file.read.json'] = (() => {

    let read, parse;

    let var_init_locked_1562145554262;





    function main(path) {


        /**
         * 
         * 读取 JSON 文件
         * 
         * @import read from file.read.text
         * 
         * @import parse from json.parse
         * 
         * @param {string} path JSON文件存储路径
         * 
         * @return {mixed} JSON数据 
         * 
         */

        let data = read(path);

        if (data) {

            return parse(data);
        }


    }

    return function(path) {


        if (!var_init_locked_1562145554262) {

            read = include('file.read.text');
            parse = include('json.parse');

            var_init_locked_1562145554262 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::directory.create'] = (() => {

    let isDirectory;

    let var_init_locked_1562145554265;






    /**
     * 
     * 创建不存在的目录，如果存在的话，则维持现状
     * 
     * @import is.directory
     * 
     * @param {string} path 目录路径
     * 
     * @return {mixed} 返回说明 
     * 
     * @scoped
     * 
     */

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


        if (!var_init_locked_1562145554265) {

            isDirectory = include('is.directory');

            var_init_locked_1562145554265 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::file.write'] = (() => {

    let create;

    let var_init_locked_1562145554267;





    function main(path, data) {


        /**
         * 
         * 保存文件
         * 
         * @import create from directory.create
         * 
         * @param {string} path 保存文件路径
         * 
         * @param {mixed} data 保存文件内容
         * 
         * 
         */

        const {
            writeFileSync
        } = require('fs'), {
            dirname
        } = require('path');

        create(dirname(path));

        writeFileSync(path, data);

    }

    return function(path, data) {


        if (!var_init_locked_1562145554267) {

            create = include('directory.create');

            var_init_locked_1562145554267 = true;
        }




        return main.call(this, path, data);
    };

})();