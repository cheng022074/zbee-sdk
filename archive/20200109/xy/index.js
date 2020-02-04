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

    let var_init_locked_1578559752255;





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


        if (!var_init_locked_1578559752255) {

            isType = include('is.type');

            var_init_locked_1578559752255 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.empty'] = (() => {

    let isArray;

    let var_init_locked_1578559752259;





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


        if (!var_init_locked_1578559752259) {

            isArray = include('is.array');

            var_init_locked_1578559752259 = true;
        }




        return main.call(this, data, allowEmptyString);
    };

})();

exports['src::is.string'] = (() => {

    let isType;

    let var_init_locked_1578559752262;





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


        if (!var_init_locked_1578559752262) {

            isType = include('is.type');

            var_init_locked_1578559752262 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::array.from'] = (() => {

    let isEmpty, isString;

    let var_init_locked_1578559752266;





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


        if (!var_init_locked_1578559752266) {

            isEmpty = include('is.empty');
            isString = include('is.string');

            var_init_locked_1578559752266 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::date.get.properties'] = (() => {

    let from;

    let var_init_locked_1578559752275;





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


        if (!var_init_locked_1578559752275) {

            from = include('array.from');

            var_init_locked_1578559752275 = true;
        }




        return main.call(this, date, names);
    };

})();

exports['src::array.dates.includes'] = (() => {

    let get;

    let var_init_locked_1578559752281;





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


        if (!var_init_locked_1578559752281) {

            get = include('date.get.properties');

            var_init_locked_1578559752281 = true;
        }




        return main.call(this, dates, date, fields);
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

exports['src::is.number'] = (() => {

    let isType;

    let var_init_locked_1578559752287;





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


        if (!var_init_locked_1578559752287) {

            isType = include('is.type');

            var_init_locked_1578559752287 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.boolean'] = (() => {

    let isType;

    let var_init_locked_1578559752289;





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


        if (!var_init_locked_1578559752289) {

            isType = include('is.type');

            var_init_locked_1578559752289 = true;
        }




        return main.call(this, data);
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

exports['src::data.type'] = (() => {

    let isObject, isArray, isString, isNumber, isBoolean, isDate;

    let var_init_locked_1578559752295;





    function main(data) {

        /**
         * 
         * 返回数据类型描述
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.array
         * 
         * @import is.string
         * 
         * @import is.number
         * 
         * @import is.boolean
         * 
         * @import is.date
         * 
         * @import is.string
         * 
         * @param {mixed} data 数据
         * 
         * @return {string} 数据类型描述 
         * 
         */

        if (isObject(data)) {

            return 'object';
        }

        if (isArray(data)) {

            return 'array';
        }

        if (isString(data)) {

            return 'string';
        }

        if (isNumber(data)) {

            return 'number';
        }

        if (isBoolean(data)) {

            return 'boolean';
        }

        if (isDate(data)) {

            return 'date';

        }

        return 'other';

    }

    return function(data) {


        if (!var_init_locked_1578559752295) {

            isObject = include('is.object.simple');
            isArray = include('is.array');
            isString = include('is.string');
            isNumber = include('is.number');
            isBoolean = include('is.boolean');
            isDate = include('is.date');
            isString = include('is.string');

            var_init_locked_1578559752295 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.equals'] = (() => {

    let getType;

    let var_init_locked_1578559752302;





    /**
     * 
     * 匹配两个对象数据是否匹配
     * 
     * @import getType from data.type
     * 
     * @param {mixed} value1 第一个对象数据
     * 
     * @param {mixeds} value2 第二个对象数据
     * 
     * @return {boolean} 如果对象数据匹配则返回 true ， 否则返回 false
     * 
     */

    function main(value1, value2) {

        if (value1 === value2) {

            return true;
        }

        let type1 = getType(value1),
            type2 = getType(value2);

        if (type1 === type2) {

            if (value1 === value2) {

                return true;
            }

            switch (type1) {

                case 'object':

                    return object_equals(value1, value2);

                case 'array':

                    return array_equals(value1, value2);

                case 'date':

                    return date_equals(value1, value2);
            }
        }

        return false;
    }

    const {
        keys
    } = Object;

    function object_equals(value1, value2) {

        let names1 = keys(value1),
            names2 = keys(value2);

        if (names1.length !== names2.length) {

            return false;
        }

        for (let name of names1) {

            if (!names2.includes(name)) {

                return false;
            }

            if (!main(value1[name], value2[name])) {

                return false;
            }
        }

        return true;
    }

    function array_equals(value1, value2) {

        if (value1.length !== value2.length) {

            return false;

        }

        let len = value1.length;

        for (let i = 0; i < len; i++) {

            if (!main(value1[i], value2[i])) {

                return false;
            }
        }

        return true;
    }

    function date_equals(value1, value2) {

        return value1.getTime() === value2.getTime();
    }

    return function(value1, value2) {


        if (!var_init_locked_1578559752302) {

            getType = include('data.type');

            var_init_locked_1578559752302 = true;
        }




        return main.call(this, value1, value2);
    };

})();

exports['src::array.indexOf'] = (() => {

    let equals;

    let var_init_locked_1578559752307;





    function main(data, checkItem) {


        /**
         * 
         * 返回指定项目对应的下标
         * 
         * @import equals from data.equals
         * 
         * @param {mixed} data 数组
         * 
         * @param {mixed} checkItem 检测项
         * 
         * @return {Number} 数组下标
         * 
         */

        let {
            length
        } = data;

        for (let i = 0; i < length; i++) {

            if (equals(data[i], checkItem)) {

                return i;
            }
        }

        return -1;

    }

    return function(data, checkItem) {


        if (!var_init_locked_1578559752307) {

            equals = include('data.equals');

            var_init_locked_1578559752307 = true;
        }




        return main.call(this, data, checkItem);
    };

})();

exports['src::array.includes'] = (() => {

    let indexOf;

    let var_init_locked_1578559752311;





    function main(data, checkItem) {


        /**
         * 
         * 函数实现说明
         * 
         * @import indexOf from array.indexOf
         * 
         * @param {mixed} data 数组
         * 
         * @param {mixed} checkItem 检测项
         * 
         * @return {boolean} 如果检测项存在数组中则返回 true , 否则返回 false
         * 
         */

        return indexOf(data, checkItem) !== -1;

    }

    return function(data, checkItem) {


        if (!var_init_locked_1578559752311) {

            indexOf = include('array.indexOf');

            var_init_locked_1578559752311 = true;
        }




        return main.call(this, data, checkItem);
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

exports['src::array.remove.all'] = (() => {

    let remove, indexOf;

    let var_init_locked_1578559752327;





    function main(data, item) {


        /**
         * 
         * 在数组中去除所有指定项目
         * 
         * @import remove from ..index
         * 
         * @import indexOf from ....indexOf
         * 
         * @param {array} data 数组
         * 
         * @param {mixed} item 项目
         * 
         */

        while (true) {

            let index = indexOf(data, item);

            if (index !== -1) {

                remove(data, index);

            } else {

                break;
            }
        }

    }

    return function(data, item) {


        if (!var_init_locked_1578559752327) {

            remove = include('src::array.remove.index');
            indexOf = include('src::array.indexOf');

            var_init_locked_1578559752327 = true;
        }




        return main.call(this, data, item);
    };

})();

exports['src::array.remove'] = (() => {

    let remove, indexOf;

    let var_init_locked_1578559752331;





    function main(data, ...items) {


        /**
         * 
         * 在数组中去除项目
         * 
         * @import remove from array.remove.index
         * 
         * @import indexOf from array.indexOf
         * 
         * @param {array} data 数组
         * 
         * @param {mixed} [...items] 项目
         * 
         */

        for (let item of items) {

            remove(data, indexOf(data, item));
        }

    }

    return function(data, ...items) {


        if (!var_init_locked_1578559752331) {

            remove = include('array.remove.index');
            indexOf = include('array.indexOf');

            var_init_locked_1578559752331 = true;
        }




        return main.call(this, data, ...items);
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

exports['src::data.connection.accept'] = (() => {

    let isDefined;

    let var_init_locked_1578559752341;





    function main(...args) {


        /**
         * 
         * 接收消息数据
         * 
         * @import is.defined
         * 
         * @param {mixed} [...args] 可选参数
         * 
         * @return {object} 消息体 
         * 
         */

        let me = this,
            message = me.processMessage(...args),
            {
                subscribers,
                matchOnlyOnce
            } = me;

        if (isDefined(message)) {

            subscribers = subscribers.values();

            for (let subscriber of subscribers) {

                if (!subscriber.closed && me.validateMessage(subscriber, message)) {

                    let processedData = me.processData(subscriber, message);

                    if (isDefined(processedData)) {

                        subscriber.accept(processedData);

                        if (matchOnlyOnce) {

                            break;
                        }
                    }



                }
            }

        }

    }

    return function(...args) {


        if (!var_init_locked_1578559752341) {

            isDefined = include('is.defined');

            var_init_locked_1578559752341 = true;
        }




        return main.call(this, ...args);
    };

})();

exports['src::data.connection.activate'] = (() => {

    let includes;

    let var_init_locked_1578559752343;





    function main() {


        /**
         * 
         * 激活
         * 
         * @import includes from array.includes
         * 
         */

        let me = this,
            {
                subscribeParamList
            } = me;

        for (let params of subscribeParamList) {

            me.doSubscriberOpen(...params);
        }

    }

    return function() {


        if (!var_init_locked_1578559752343) {

            includes = include('array.includes');

            var_init_locked_1578559752343 = true;
        }




        return main.call(this);
    };

})();

exports['src::url.append'] = (() => {

    let isString;

    let var_init_locked_1578559752352;





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


        if (!var_init_locked_1578559752352) {

            isString = include('is.string');

            var_init_locked_1578559752352 = true;
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

    let var_init_locked_1578559752361;





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


        if (!var_init_locked_1578559752361) {

            isInt = include('regexp.int');

            var_init_locked_1578559752361 = true;
        }




        return main.call(this, url, data);
    };

})();

exports['src::data.connection.ajax.request'] = (() => {

    let append, apply, isObject;

    let var_init_locked_1578559752366;





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


        if (!var_init_locked_1578559752366) {

            append = include('url.append');
            apply = include('url.template.apply');
            isObject = include('is.object.simple');

            var_init_locked_1578559752366 = true;
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

    let var_init_locked_1578559752372;





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


        if (!var_init_locked_1578559752372) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1578559752372 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::data.connection.ajax.request.miniprogram'] = (() => {

    let request;

    let var_init_locked_1578559752381;





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


        if (!var_init_locked_1578559752381) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1578559752381 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::is.function'] = (() => {

    let isType;

    let var_init_locked_1578559752387;





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

        return isType(data, 'function') && !data.__ZBEE_IS_CLASS__;

    }

    return function(data) {


        if (!var_init_locked_1578559752387) {

            isType = include('is.type');

            var_init_locked_1578559752387 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.empty'] = (() => {







    let var_once_value_1578559752390;

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






        if (var_once_value_1578559752390) {

            return var_once_value_1578559752390;

        }
        return var_once_value_1578559752390 = main.call(this);

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

exports['src::map.size'] = (() => {









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

    let equals;

    let var_init_locked_1578559752399;





    function main(keys) {


        /**
         * 
         * 判断指定组合键是否存在
         * 
         * @import equals from data.equals
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

                    if (!equals(groupKeys[i], keys[i])) {

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


        if (!var_init_locked_1578559752399) {

            equals = include('data.equals');

            var_init_locked_1578559752399 = true;
        }




        return main.call(this, keys);
    };

})();

exports['src::map.set'] = (() => {

    let find;

    let var_init_locked_1578559752404;

    let var_current_scope_1578559752404;



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




        if (!var_current_scope_1578559752404 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1578559752404 = this;
        }


        return main.call(this, ...values);
    };

})();

exports['src::map.get'] = (() => {

    let find;

    let var_init_locked_1578559752408;

    let var_current_scope_1578559752408;



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




        if (!var_current_scope_1578559752408 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1578559752408 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.has'] = (() => {

    let find;

    let var_init_locked_1578559752412;

    let var_current_scope_1578559752412;



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




        if (!var_current_scope_1578559752412 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1578559752412 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.delete'] = (() => {

    let find;

    let var_init_locked_1578559752417;

    let var_current_scope_1578559752417;



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




        if (!var_current_scope_1578559752417 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1578559752417 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.for'] = (() => {









    function main(fn) {


        /**
         * 
         * 循环
         * 
         * @param {function} fn 
         * 
         */

        let {
            map
        } = this;

        map.forEach(fn);

    }

    return function(fn) {





        return main.call(this, fn);
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

exports['src::map.find.fuzzy'] = (() => {

    let isDefined;

    let var_init_locked_1578559752428;





    function main(...keys) {


        /**
         * 
         * 以模糊寻找方式匹配键值
         * 
         * @import is.defined
         * 
         * @param {array} [...keys] 匹配键值
         * 
         * @return {array} 搜索结果 
         * 
         */

        let me = this,
            {
                map
            } = me,
            currentKeys = map.keys(),
            {
                length
            } = keys,
            result = [];

        for (let groupKeys of currentKeys) {

            let isMatch = true;

            for (let i = 0; i < length; i++) {

                let key = keys[i];

                if (!isDefined(key)) {

                    continue;
                }

                if (groupKeys[i] !== key) {

                    isMatch = false;

                    break;
                }
            }

            if (isMatch) {

                result.push({
                    key: groupKeys,
                    value: map.get(groupKeys)
                });
            }
        }

        return result;

    }

    return function(...keys) {


        if (!var_init_locked_1578559752428) {

            isDefined = include('is.defined');

            var_init_locked_1578559752428 = true;
        }




        return main.call(this, ...keys);
    };

})();

exports['src::map'] = (() => {

    let extend, constructor, get_size, method_set, method_get, method_has, method_delete, method_forEach, method_clear, method_find, isObject;

    let var_init_locked_1578559752432;

    let var_class_1578559752432;



    return function() {


        if (!var_init_locked_1578559752432) {

            extend = include('class.empty')();
            constructor = include('src::map.constructor');
            get_size = include('map.size');
            method_set = include('src::map.set');
            method_get = include('src::map.get');
            method_has = include('src::map.has');
            method_delete = include('src::map.delete');
            method_forEach = include('map.for');
            method_clear = include('src::map.clear');
            method_find = include('map.find.fuzzy');
            isObject = include('is.object.simple');

            var_init_locked_1578559752432 = true;
        }



        if (!var_class_1578559752432) {

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
                find(...args) {

                    return method_find.apply(this, args);

                }

                get size() {

                    return get_size.call(this);

                }

            }

            var_class_1578559752432 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752432;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::map';
                }

            };
        }


        return new var_class_1578559752432();
    };

})();

exports['src::event.listeners'] = (() => {

    let map;

    let var_init_locked_1578559752439;



    let var_once_value_1578559752439;

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


        if (!var_init_locked_1578559752439) {

            map = include('map')();

            var_init_locked_1578559752439 = true;
        }





        if (var_once_value_1578559752439) {

            return var_once_value_1578559752439;

        }
        return var_once_value_1578559752439 = main.call(this);

    };

})();

exports['src::event.listener.native.remove'] = (() => {









    function main(target, name, fn) {


        /**
         * 
         * 适配事件主体对象的移除事件的方法
         * 
         * @param {mixed} target 事件主体
         * 
         * @param {string} name 事件名称
         * 
         * @param {function} fn 事件监听函数
         * 
         */

        const remove = target.removeEventListener || target.un || target.off;

        remove.call(target, name, fn);

    }

    return function(target, name, fn) {





        return main.call(this, target, name, fn);
    };

})();

exports['src::event.listener.remove'] = (() => {

    let isString, isObject, remove, listeners, native;

    let var_init_locked_1578559752452;





    function main(target, name, fn, {
        scope
    }) {

        /**
         * 
         * 移除事件监听
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @import remove from ..remove
         * 
         * @import listeners from ....listeners value
         * 
         * @import native from .native.remove
         * 
         * @param {mixed} target 事件主体
         * 
         * @param {string} name 事件名称
         * 
         * @param {mixed} fn 事件回调
         * 
         * @param {object} [options = {}] 事件配置
         * 
         * @param {mixed} [options.scope] 事件作用域
         * 
         */

        scope = scope || target;

        if (isString(name)) {

            let listener = listeners.get(target, name, fn, scope);

            if (listener) {

                native(target, name, listener);

                listeners.delete(target, name, fn, scope);
            }

        } else if (isObject(name)) {

            let {
                scope,
                ...listeners
            } = name,
            names = Object.keys(listeners);

            for (let name of names) {

                remove(target, name, listeners[name]);
            }

        }

    }

    return function(target, name, fn, {
        scope
    } = {}) {


        if (!var_init_locked_1578559752452) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            remove = include('src::event.listener.remove');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.remove');

            var_init_locked_1578559752452 = true;
        }




        return main.call(this, target, name, fn, {
            scope
        });
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

    let var_init_locked_1578559752464;





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


        if (!var_init_locked_1578559752464) {

            isString = include('is.string');
            isFunction = include('is.function');
            empty = include('function.empty');

            var_init_locked_1578559752464 = true;
        }




        return main.call(this, fn, scope);
    };

})();

exports['src::event.listener.native.add'] = (() => {









    function main(target, name, fn) {


        /**
         * 
         * 适配事件主体对象的添加事件的方法
         * 
         * @param {mixed} target 事件主体
         * 
         * @param {string} name 事件名称
         * 
         * @param {function} fn 事件监听函数
         * 
         */

        const add = target.addEventListener || target.on;

        add.call(target, name, fn);

    }

    return function(target, name, fn) {





        return main.call(this, target, name, fn);
    };

})();

exports['src::event.listener.add'] = (() => {

    let isString, isObject, add, remove, get, listeners, native, isArray;

    let var_init_locked_1578559752472;





    function main(target, name, fn, {
        once,
        scope
    }) {

        /**
         * 
         * 添加事件监听
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @import add from ..add
         * 
         * @import remove from ..remove
         * 
         * @import get from function.get
         * 
         * @import listeners from ....listeners value
         * 
         * @import native from .native.add
         * 
         * @import is.array
         * 
         * @param {mixed} target 事件主体
         * 
         * @param {string|object} name 事件名称
         * 
         * @param {mixed} fn 事件回调
         * 
         * @param {object} [options = {}] 事件配置
         * 
         * @param {boolean} [options.once = false] 只监听一次
         * 
         * @param {mixed} [options.scope] 事件作用域
         * 
         */

        scope = scope || target;

        if (isString(name)) {

            if (listeners.has(target, name, fn, scope)) {

                return;
            }

            let listener,
                listenerFn = get(fn, scope);

            if (listenerFn) {

                if (once) {

                    listener = function(...args) {

                        listenerFn(args);

                        remove(target, name, fn, {
                            scope
                        });
                    };

                } else {

                    listener = listenerFn;
                }

                native(target, name, listener);

                listeners.set(target, name, fn, scope, listener);
            }

        } else if (isObject(name)) {

            let {
                scope,
                ...listeners
            } = name,
            names = Object.keys(listeners);

            for (let name of names) {

                let listener = listeners[name];

                if (isObject(listener)) {

                    let {
                        fn,
                        ...options
                    } = listener;

                    options.scope = options.scope || scope;

                    add(target, name, fn, options);

                } else {

                    add(target, name, listeners[name], {
                        scope
                    });
                }
            }

        } else if (isArray(name)) {

            for (let config of name) {

                add(target, config);
            }
        }

    }

    return function(target, name, fn, {
        once = false,
        scope
    } = {}) {


        if (!var_init_locked_1578559752472) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            get = include('function.get');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.add');
            isArray = include('is.array');

            var_init_locked_1578559752472 = true;
        }




        return main.call(this, target, name, fn, {
            once,
            scope
        });
    };

})();

exports['src::mixin.observable.constructor'] = (() => {

    let add, isObject, isArray;

    let var_init_locked_1578559752480;






    /**
     * 
     * 初始化观察者
     * 
     * @import add from event.listener.add
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.array
     * 
     * @param {object} options 配置
     * 
     */

    const EventEmitter = require('events');

    function main({
        listeners
    }) {

        let me = this,
            emitter = me.emitter = new EventEmitter();

        emitter.setMaxListeners(Number.MAX_VALUE);

        me.$suspendEvents = false;

        if (isObject(listeners) || isArray(listeners)) {

            add(me, listeners);

        }
    }



    return function(options) {


        if (!var_init_locked_1578559752480) {

            add = include('event.listener.add');
            isObject = include('is.object.simple');
            isArray = include('is.array');

            var_init_locked_1578559752480 = true;
        }




        return main.call(this, options);
    };

})();

exports['src::mixin.observable.listener.add'] = (() => {









    function main(event, fn) {


        /**
         * 
         * 添加事件监听
         * 
         * @param {string} event 事件名称
         * 
         * @param {mixed} fn 事件回调函数
         * 
         */

        let {
            emitter
        } = this;

        emitter.addListener(event, fn);

    }

    return function(event, fn) {





        return main.call(this, event, fn);
    };

})();

exports['src::mixin.observable.listener.has'] = (() => {









    function main(event) {


        /**
         * 
         * 判断是否拥有事件监听
         * 
         * @param {string} event 事件
         * 
         * @return {boolean} 如果拥有事件监则返回 true , 否则返回 false
         * 
         */

        let {
            emitter
        } = this;

        return emitter.listenerCount(event) !== 0;

    }

    return function(event) {





        return main.call(this, event);
    };

})();

exports['src::mixin.observable.listener.remove'] = (() => {









    function main(event, fn) {


        /**
         * 
         * 移除事件监听
         * 
         * @param {string} event 事件名称
         * 
         * @param {function} fn 事件回调函数
         * 
         * 
         */

        let {
            emitter
        } = this;

        emitter.removeListener(event, fn);


    }

    return function(event, fn) {





        return main.call(this, event, fn);
    };

})();

exports['src::mixin.observable.event.fire'] = (() => {

    let isArray;

    let var_init_locked_1578559752497;






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
                $bubbleTarget,
                emitter
            } = me;

        emitter.emit(event, target, ...args);

        if ($bubbleTarget) {

            doFireBubbleEvent.call($bubbleTarget, event, target, ...args);
        }
    }

    return function(event, ...args) {


        if (!var_init_locked_1578559752497) {

            isArray = include('is.array');

            var_init_locked_1578559752497 = true;
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

    let constructor, method_addListener, method_hasListener, method_removeListener, method_fireEvent, method_suspendEvents, method_resumeEvents, isObject;

    let var_init_locked_1578559752508;





    function main(extend) {

        return class extends extend {





            constructor(options) {

                super(options);

                if (isObject(options)) {

                    constructor.call(this, options);

                } else {

                    constructor.call(this, {});
                }

            }

            addListener(...args) {

                return method_addListener.apply(this, args);

            }
            on(...args) {

                return this.addListener(...args);

            }
            hasListener(...args) {

                return method_hasListener.apply(this, args);

            }
            removeListener(...args) {

                return method_removeListener.apply(this, args);

            }
            un(...args) {

                return this.removeListener(...args);

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



        }

    }

    return function(extend) {


        if (!var_init_locked_1578559752508) {

            constructor = include('src::mixin.observable.constructor');
            method_addListener = include('src::mixin.observable.listener.add');
            method_hasListener = include('src::mixin.observable.listener.has');
            method_removeListener = include('src::mixin.observable.listener.remove');
            method_fireEvent = include('src::mixin.observable.event.fire');
            method_suspendEvents = include('src::mixin.observable.events.suspend');
            method_resumeEvents = include('src::mixin.observable.events.resume');
            isObject = include('is.object.simple');

            var_init_locked_1578559752508 = true;
        }




        return main.call(this, extend);
    };

})();

exports['src::data.subscriber.constructor'] = (() => {

    let get, add, emptyFn, from;

    let var_init_locked_1578559752522;





    function main(connection, name, {
        fullName,
        processData,
        listeners,
        params,
        autoOpen,
        extraParams,
        defaultParams,
        fn,
        once,
        scope,
        namespace,
        processAcceptData,
        cacheAcceptData,
        getCacheData
    }) {

        /**
         * 
         * 初始化订阅器
         * 
         * @import get from function.get
         * 
         * @import add from event.listener.add
         * 
         * @import emptyFn from function.empty value
         * 
         * @import from from array.from
         * 
         * @param {data.connection} connection 当前订阅器所在的连接对象
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {string} config.fullName 订阅器全称
         * 
         * @param {function} [config.processData] 处理数据方法
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
         * @param {boolean} [config.once = false] 仅订阅一次即取消
         * 
         * @param {mixed} [config.scope] 订阅函数作用域
         * 
         * @param {string} [config.namespace] 命名空间
         * 
         * @param {function} [config.processAcceptData] 处理接收数据的方法
         * 
         * @param {function} [config.cacheAcceptData] 缓存接收数据方法
         * 
         * @param {function} [config.getCacheData] 获取缓存数据 
         * 
         */


        let me = this;

        me.name = name;

        me.fullName = fullName;

        me.connection = connection;

        me.$bubbleTarget = connection;

        me.processData = processData || (({
            data
        }) => data);

        me.cacheAcceptData = cacheAcceptData || emptyFn;

        me.processAcceptData = processAcceptData || (data => data);

        me.getCacheData = getCacheData || (data => data);

        me.extraParams = extraParams;

        me.defaultParams = defaultParams;

        me.bindFn = get(fn, scope) || emptyFn;

        add(me, {
            ...listeners,
            scope
        });

        if (autoOpen) {

            me.open(params);
        }

        if (once === true) {

            add(me, 'data', () => connection.unsubscribe(name, namespace), {
                once: true
            });
        }


    }

    return function(connection, name, {
        fullName,
        processData,
        listeners = {},
        params,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        once = false,
        scope,
        namespace,
        processAcceptData,
        cacheAcceptData,
        getCacheData
    }) {


        if (!var_init_locked_1578559752522) {

            get = include('function.get');
            add = include('event.listener.add');
            emptyFn = include('function.empty')();
            from = include('array.from');

            var_init_locked_1578559752522 = true;
        }




        return main.call(this, connection, name, {
            fullName,
            processData,
            listeners,
            params,
            autoOpen,
            extraParams,
            defaultParams,
            fn,
            once,
            scope,
            namespace,
            processAcceptData,
            cacheAcceptData,
            getCacheData
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

exports['src::data.subscriber.open.prev'] = (() => {









    function main() {


        /**
         * 
         * 打开之前的订阅
         * 
         */

        let me = this,
            {
                closed,
                prevParams
            } = me;

        if (closed) {

            me.open(prevParams);
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.subscriber.accept.data'] = (() => {

    let isDefined;

    let var_init_locked_1578559752535;





    function main(data) {

        /**
         * 
         * 将推送数据传递给绑定函数
         * 
         * @import is.defined
         * 
         * @param {mixed} data 推送过来的数据
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let me = this,
            {
                bindFn,
                closed,
                params,
                cache,
                getCacheData
            } = me;

        if (!closed) {

            if (isDefined(cache)) {

                bindFn(getCacheData(cache), params);

            } else {

                bindFn(data, params);
            }

            me.fireEvent('data', data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1578559752535) {

            isDefined = include('is.defined');

            var_init_locked_1578559752535 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.subscriber.accept'] = (() => {

    let isDefined, setData;

    let var_init_locked_1578559752540;

    let var_current_scope_1578559752540;



    function main(data) {


        /**
         * 
         * 接收数据
         * 
         * @import is.defined
         * 
         * @import setData from .accept.data scoped
         * 
         * @param {mixed} data 数据
         * 
         * 
         */

        let me = this,
            {
                closed,
                cache,
                processAcceptData,
                cacheAcceptData
            } = me;

        if (closed) {

            return;
        }

        data = processAcceptData(data);

        if (isDefined(data)) {

            me.cache = cacheAcceptData(data, cache);

            setData(data);
        }

    }

    return function(data) {


        if (!var_init_locked_1578559752540) {

            isDefined = include('is.defined');

            var_init_locked_1578559752540 = true;
        }



        if (!var_current_scope_1578559752540 !== this) {

            setData = include('src::data.subscriber.accept.data').bind(this);

            var_current_scope_1578559752540 = this;
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

exports['src::is.object'] = (() => {

    let isType;

    let var_init_locked_1578559752545;





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

        return data instanceof Object;

    }

    return function(data) {


        if (!var_init_locked_1578559752545) {

            isType = include('is.type');

            var_init_locked_1578559752545 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::object.assign'] = (() => {

    let isObject;

    let var_init_locked_1578559752548;






    /**
     * 
     * 积极深度合并
     * 
     * @import isObject from is.object
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

        if (isObject(dest) && isObject(source)) {

            let names = Object.keys(source);

            for (let name of names) {

                dest[name] = assign(dest[name], source[name]);
            }
        }

        return source;
    }

    function main(dest, ...sources) {

        for (let source of sources) {

            assign(dest, source);
        }

        return dest;

    }

    return function(dest, ...sources) {


        if (!var_init_locked_1578559752548) {

            isObject = include('is.object');

            var_init_locked_1578559752548 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::data.subscriber.open'] = (() => {

    let isDefined, equals, assign, setData;

    let var_init_locked_1578559752551;

    let var_current_scope_1578559752551;



    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import is.defined
         * 
         * @import equals from data.equals
         * 
         * @import assign from object.assign
         * 
         * @import setData from .accept.data scoped
         * 
         * @param {object} [params = {}] 订阅参数
         * 
         */

        let me = this,
            {
                name,
                extraParams,
                defaultParams,
                params: oldParams,
                connection
            } = me;

        params = assign({}, defaultParams, params, extraParams);

        if (!oldParams || !equals(params, oldParams)) {

            me.close();

            me.params = params;

            me.fireEvent('open', params, oldParams);

            let subscriber = connection.findOpenedSubscriberByName(name, me);

            if (subscriber) {

                let {
                    cache
                } = subscriber;

                if (isDefined(cache)) {

                    me.cache = cahce;

                    setData();
                }
            }
        }

    }

    return function(params = {}) {


        if (!var_init_locked_1578559752551) {

            isDefined = include('is.defined');
            equals = include('data.equals');
            assign = include('object.assign');

            var_init_locked_1578559752551 = true;
        }



        if (!var_current_scope_1578559752551 !== this) {

            setData = include('src::data.subscriber.accept.data').bind(this);

            var_current_scope_1578559752551 = this;
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

        me.prevParams = me.params;

        delete me.params;

        delete me.cache;

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::event.listener.remove.all'] = (() => {

    let listeners, remove;

    let var_init_locked_1578559752559;





    function main(target) {


        /**
         * 
         * 去除所有事件监听
         * 
         * @import listeners from ......listeners value
         * 
         * @import remove from ....native.remove
         * 
         * @param {mixed} target 事件主体
         * 
         */

        let result = listeners.find(target);

        for (let {
                key,
                value
            } of result) {

            remove(target, key[1], value);
        }

    }

    return function(target) {


        if (!var_init_locked_1578559752559) {

            listeners = include('src::event.listeners')();
            remove = include('src::event.listener.native.remove');

            var_init_locked_1578559752559 = true;
        }




        return main.call(this, target);
    };

})();

exports['src::data.subscriber.destroy'] = (() => {

    let removeAll;

    let var_init_locked_1578559752566;





    function main() {


        /**
         * 
         * 销毁
         * 
         * @import removeAll from event.listener.remove.all
         * 
         */

        let me = this,
            {
                connection
            } = me;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        removeAll(me);

        connection.subscribers.delete(me.fullName);

        delete me.fullName;

    }

    return function() {


        if (!var_init_locked_1578559752566) {

            removeAll = include('event.listener.remove.all');

            var_init_locked_1578559752566 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.subscriber'] = (() => {

    let mixin_1578559751585__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1578559752575;

    let var_class_1578559752575;



    return function() {


        if (!var_init_locked_1578559752575) {

            mixin_1578559751585__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_prevOpen = include('src::data.subscriber.open.prev');
            method_accept = include('src::data.subscriber.accept');
            method_reopen = include('src::data.subscriber.reopen');
            method_open = include('src::data.subscriber.open');
            method_close = include('src::data.subscriber.close');
            method_destroy = include('src::data.subscriber.destroy');
            isObject = include('is.object.simple');

            var_init_locked_1578559752575 = true;
        }



        if (!var_class_1578559752575) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                prevOpen(...args) {

                    return method_prevOpen.apply(this, args);

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

            var_class_1578559752575 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752575;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.subscriber';
                }

            };
        }


        return var_class_1578559752575;
    };

})();

exports['src::is.class'] = (() => {

    let isType;

    let var_init_locked_1578559752588;





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

        return isType(data, 'function') && data.__ZBEE_IS_CLASS__;

    }

    return function(data) {


        if (!var_init_locked_1578559752588) {

            isType = include('is.type');

            var_init_locked_1578559752588 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.create'] = (() => {

    let isString, isFunction, isClass;

    let var_init_locked_1578559752591;





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


        if (!var_init_locked_1578559752591) {

            isString = include('is.string');
            isFunction = include('is.function');
            isClass = include('is.class');

            var_init_locked_1578559752591 = true;
        }




        return main.call(this, baseClass, ...args);
    };

})();

exports['src::data.connection.subscribe.name'] = (() => {









    function main(name, namespace) {


        /**
         * 
         * 获取订阅器名称
         * 
         * @param {string} name 订阅器名称
         * 
         * @param {string} [namespace] 命名空间s
         * 
         * @return {string} 订阅器名称
         * 
         */

        if (namespace) {

            return `${name}<${namespace}>`;
        }

        return name;

    }

    return function(name, namespace) {





        return main.call(this, name, namespace);
    };

})();

exports['src::data.connection.base'] = (() => {

    let isObject, isString, isFunction, isBoolean, isArray, Subscriber, get, create, includes, remove, getName, Observable, add, equals;

    let var_init_locked_1578559752601;

    let var_class_1578559752601;



    return function() {


        if (!var_init_locked_1578559752601) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            isBoolean = include('is.boolean');
            isArray = include('is.array');
            Subscriber = include('data.subscriber')();
            get = include('function.get');
            create = include('class.create');
            includes = include('array.includes');
            remove = include('array.remove');
            getName = include('src::data.connection.subscribe.name');
            Observable = include('mixin.observable');
            add = include('event.listener.add');
            equals = include('data.equals');

            var_init_locked_1578559752601 = true;
        }



        if (!var_class_1578559752601) {

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
             * @import includes from array.includes
             * 
             * @import remove from array.remove
             * 
             * @import getName from .subscribe.name
             * 
             * @import Observable from mixin.observable
             * 
             * @import add from event.listener.add
             * 
             * @import equals from data.equals
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

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    subscriber = Subscriber,
                    rules = [],
                    matchOnlyOnce = false,
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.subscriber = subscriber;

                    me.subscribers = new Map();

                    me.rules = createRules(rules);

                    me.subscribeParamList = [];

                    me.matchOnlyOnce = matchOnlyOnce;

                    add(me, {
                        ...me.subscriberListeners,
                        scope: me
                    });
                }

                processMessage(...args) {

                    return {};
                }

                processData(subscriber, message) {

                    return subscriber.processData(message);
                }

                validateMessage(subscriber, message) {

                    return true;
                }


                processSubscribeParams(subscriber, params) {

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

                    return create(subscriber, me, name, options);
                }

                onCreateSubscriber(subscriber) {


                }

                get subscriberListeners() {

                    return {
                        open: 'onSubscriberOpen',
                        close: 'onSubscriberClose'
                    };
                }

                onSubscriberOpen(subscriber, params) {

                    let me = this;

                    params = me.processSubscribeParams(subscriber, params);

                    if (isArray(params)) {

                        if (me.validSubscriberOpenParams(params)) {

                            me.doSubscriberOpen(...params);

                            me.subscribeParamList.push(params);
                        }
                    }
                }

                validSubscriberOpenParams(params) {

                    let {
                        subscribeParamList
                    } = this;

                    if (!includes(subscribeParamList, params)) {

                        return true;
                    }

                    return false;
                }

                doSubscriberOpen(...args) {


                }

                onSubscriberClose(subscriber, params) {

                    let me = this;

                    params = me.processSubscribeParams(subscriber, params);

                    if (isArray(params)) {

                        if (me.validSubscriberCloseParams(params)) {

                            me.doSubscriberClose(...params);

                            remove(me.subscribeParamList, params);
                        }
                    }

                }

                validSubscriberCloseParams(params) {

                    let subscribers = this.subscribers.values();

                    for (let {
                            closed,
                            params: subscribeParams
                        } of subscribers) {

                        if (!closed && equals(params, subscribeParams)) {

                            return false;
                        }
                    }

                    return true;
                }

                doSubscriberClose(...args) {


                }

                getSubscriber(name, namespace) {

                    return this.subscribers.get(getName(name, namespace));
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

            var_class_1578559752601 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752601;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.base';
                }

            };
        }


        return var_class_1578559752601;
    };

})();

exports['src::data.connection.subscribed'] = (() => {

    let getName;

    let var_init_locked_1578559752616;





    function main(name, connectionId) {


        /**
         * 
         * 判定是否订阅
         * 
         * @import getName from .subscribe.name
         * 
         * @param {string} name 订阅名称
         * 
         * @param {string} [connectionId] 连接编号
         * 
         * @return {boolean} 如果已订阅则返回 true ， 否则返回 false
         * 
         */

        let me = this,
            {
                subscribers
            } = me;

        return subscribers.has(getName(name, connectionId));



    }

    return function(name, connectionId) {


        if (!var_init_locked_1578559752616) {

            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1578559752616 = true;
        }




        return main.call(this, name, connectionId);
    };

})();

exports['src::data.connection.subscribe.once'] = (() => {

    let assign;

    let var_init_locked_1578559752619;





    function main(name, options) {


        /**
         * 
         * 订阅后获取数据后立即取消订阅，并返回获得数据
         * 
         * @import assign from object.assign
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} [options = {}] 订阅配置
         * 
         * @return {Promise}
         * 
         */

        let me = this;

        return new Promise(fn => me.subscribe(name, {
            ...options,
            fn,
            once: true
        }));

    }

    return function(name, options = {}) {


        if (!var_init_locked_1578559752619) {

            assign = include('object.assign');

            var_init_locked_1578559752619 = true;
        }




        return main.call(this, name, options);
    };

})();

exports['src::function.defer'] = (() => {

    let get;

    let var_init_locked_1578559752621;





    function main(fn, {
        scope,
        defer
    }) {


        /**
         * 
         * 延时执行函数
         * 
         * @import get from function.get
         * 
         * @param {mixed} fn 函数
         * 
         * @param {object} [config = {}] 函数配置
         * 
         * @param {mixed} [config.scope] 函数作用域
         * 
         * @param {mixed} [config.defer = 0] 延时时间
         * 
         */

        setTimeout(() => get(fn, scope)(), defer);

    }

    return function(fn, {
        scope,
        defer = 0
    } = {}) {


        if (!var_init_locked_1578559752621) {

            get = include('function.get');

            var_init_locked_1578559752621 = true;
        }




        return main.call(this, fn, {
            scope,
            defer
        });
    };

})();

exports['src::data.pusher'] = (() => {

    let isDefined, clear, defer;

    let var_init_locked_1578559752625;

    let var_class_1578559752625;



    return function(onOpen, onClose) {


        if (!var_init_locked_1578559752625) {

            isDefined = include('is.defined');
            clear = include('array.clear');
            defer = include('function.defer');

            var_init_locked_1578559752625 = true;
        }



        if (!var_class_1578559752625) {


            /**
             * 
             * 数据推送器
             * 
             * @import is.defined
             * 
             * @import clear from array.clear
             * 
             * @import defer from function.defer
             * 
             * @param {function} onOpen 当开始推送时回调函数
             * 
             * @param {function} onClose 当开始推送时回调函数
             * 
             */

            class main {

                constructor(onOpen, onClose) {

                    let me = this;

                    me.onOpen = onOpen;

                    me.onClose = onClose;

                    me.callbacks = [];

                    defer(open, {
                        scope: me
                    });
                }

                close() {

                    let {
                        callbacks,
                        onClose
                    } = this;

                    clear(callbacks);

                    onClose();
                }

                push(callback) {

                    let me = this,
                        {
                            callbacks
                        } = me;

                    callbacks.push(callback);

                    return me;
                }
            }

            function open() {

                let me = this,
                    {
                        callbacks,
                        onOpen
                    } = me;

                onOpen(data => {

                    for (let callback of callbacks) {

                        let result = callback(data);

                        if (isDefined(result)) {

                            data = result;
                        }
                    }

                });
            }

            var_class_1578559752625 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752625;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.pusher';
                }

            };
        }


        return new var_class_1578559752625(onOpen, onClose);
    };

})();

exports['src::data.connection.subscribe.push'] = (() => {

    let assign, createPusher;

    let var_init_locked_1578559752629;





    function main(name, options) {


        /**
         * 
         * 订阅后进行推送
         * 
         * @import assign from object.assign
         * 
         * @import createPusher from data.pusher
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} [options = {}] 订阅配置
         * 
         * @return {Promise}
         * 
         */

        let me = this,
            subscriber;

        return createPusher(fn => subscriber = me.subscribe(name, {
            ...options,
            fn
        }), () => {

            subscriber.destroy();

            subscriber = null;
        });

    }

    return function(name, options = {}) {


        if (!var_init_locked_1578559752629) {

            assign = include('object.assign');
            createPusher = include('data.pusher');

            var_init_locked_1578559752629 = true;
        }




        return main.call(this, name, options);
    };

})();

exports['src::data.connection.find.subscriber.opened.name'] = (() => {









    function main(name, ignoreSubscriber) {


        /**
         * 
         * 获得一个指定名称的缴活订阅器
         * 
         * @param {string} name 订阅器名称
         * 
         * @param {data.Subscriber} [ignoreSubscriber] 忽略的订阅器
         * 
         * @return {data.Subscriber} 订阅器 
         * 
         */

        let subscribers = this.subscribers.values();

        for (let subscriber of subscribers) {

            let {
                name: subscriberName
            } = subscriber;

            if (subscriberName === name && subscriber !== ignoreSubscriber) {

                return subscriber;
            }
        }

    }

    return function(name, ignoreSubscriber) {





        return main.call(this, name, ignoreSubscriber);
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

exports['src::data.connection.subscribe.namespace.generate'] = (() => {

    let generate, getName;

    let var_init_locked_1578559752640;





    function main(name) {


        /**
         * 
         * 生成可用的命名空间
         * 
         * @import generate from id.generate
         * 
         * @import getName from ....name
         * 
         * @param {string} name 订阅名称
         * 
         * @return {string} 命名空间 
         * 
         */

        let {
            subscribers
        } = this,
        fullName;

        do {

            fullName = getName(name, generate('connection-'));

        } while (subscribers.has(fullName));

        return fullName;



    }

    return function(name) {


        if (!var_init_locked_1578559752640) {

            generate = include('id.generate');
            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1578559752640 = true;
        }




        return main.call(this, name);
    };

})();

exports['src::data.connection.subscribe'] = (() => {

    let assign, getName, generate;

    let var_init_locked_1578559752643;

    let var_current_scope_1578559752643;



    /**
     * 
     * 单次订阅
     * 
     * @import assign from object.assign
     * 
     * @import getName from .subscribe.name
     * 
     * @import generate from .subscribe.namespace.generate scoped
     * 
     * @param {string} name 订阅名称
     * 
     * @param {object} [options = {}] 订阅配置
     * 
     */

    function main(name, options) {

        let me = this,
            {
                subscribers,
                forceSubscribe
            } = me,
            {
                namespace
            } = options;

        if (me.isSubscribed(name, namespace)) {

            namespace = generate(name);

        }

        let fullName = getName(name, namespace),
            subscriber = me.createSubscriber(name, assign({}, convertNameToSubscriberOptions.call(me, name), {
                ...options,
                fullName
            }));

        subscribers.set(fullName, subscriber);

        me.onCreateSubscriber(subscriber);

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


        if (!var_init_locked_1578559752643) {

            assign = include('object.assign');
            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1578559752643 = true;
        }



        if (!var_current_scope_1578559752643 !== this) {

            generate = include('src::data.connection.subscribe.namespace.generate').bind(this);

            var_current_scope_1578559752643 = this;
        }


        return main.call(this, name, options);
    };

})();

exports['src::data.connection.unsubscribe'] = (() => {

    let getName;

    let var_init_locked_1578559752647;





    function main(name, namespace) {


        /**
         * 
         * 取消单次订阅
         * 
         * @import getName from .subscribe.name
         * 
         * @param {string} name 订阅名称
         * 
         * @param {string} [namespace] 命名空间
         * 
         */

        let me = this,
            {
                subscribers
            } = me,
            fullNames = [];

        if (namespace) {

            fullNames.push(getName(name, namespace));

        } else {

            let subscriberNames = subscribers.keys(),
                namespaceRe = /\<[^\<\>]+\>$/;

            for (let subscriberName of subscriberNames) {

                if (subscriberName.replace(namespaceRe, '') === name) {

                    fullNames.push(subscriberName);
                }
            }
        }

        for (let fullName of fullNames) {

            me.doSubscriberMethod(fullName, 'destroy');
        }



    }

    return function(name, namespace) {


        if (!var_init_locked_1578559752647) {

            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1578559752647 = true;
        }




        return main.call(this, name, namespace);
    };

})();

exports['src::data.connection.subscribes'] = (() => {

    let isString, isFunction, isObject, get;

    let var_init_locked_1578559752651;





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
            namespace,
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
                    namespace,
                    scope
                });

            } else if (isObject(target)) {

                subscriber = me.subscribe(name, {
                    ...target,
                    namespace,
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


        if (!var_init_locked_1578559752651) {

            isString = include('is.string');
            isFunction = include('is.function');
            isObject = include('is.object.simple');
            get = include('function.get');

            var_init_locked_1578559752651 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::data.connection.unsubscribes'] = (() => {









    function main(names, namespace) {


        /**
         * 
         * 批量取消订阅
         * 
         * @param {string[]} names 批量订阅配置
         * 
         * @param {string} [namespace] 命名空间
         * 
         */

        let me = this;

        for (let name of names) {

            me.unsubscribe(name, namespace);
        }

    }

    return function(names, namespace) {





        return main.call(this, names, namespace);
    };

})();

exports['src::data.connection.deactivate'] = (() => {

    let includes;

    let var_init_locked_1578559752657;





    function main() {


        /**
         * 
         * 冻结
         * 
         * @import includes from array.includes
         * 
         */

        let me = this,
            {
                subscribeParamList
            } = me;

        for (let params of subscribeParamList) {

            me.doSubscriberClose(...params);
        }

    }

    return function() {


        if (!var_init_locked_1578559752657) {

            includes = include('array.includes');

            var_init_locked_1578559752657 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.connection'] = (() => {

    let extend, method_acceptMessage, method_isSubscribed, method_subscribeOnce, method_subscribePush, method_findOpenedSubscriberByName, method_subscribe, method_unsubscribe, method_subscribes, method_unsubscribes, method_activate, method_deactivate, isObject;

    let var_init_locked_1578559752662;

    let var_class_1578559752662;



    return function() {


        if (!var_init_locked_1578559752662) {

            extend = include('src::data.connection.base')();
            method_acceptMessage = include('src::data.connection.accept');
            method_isSubscribed = include('src::data.connection.subscribed');
            method_subscribeOnce = include('src::data.connection.subscribe.once');
            method_subscribePush = include('src::data.connection.subscribe.push');
            method_findOpenedSubscriberByName = include('src::data.connection.find.subscriber.opened.name');
            method_subscribe = include('src::data.connection.subscribe');
            method_unsubscribe = include('src::data.connection.unsubscribe');
            method_subscribes = include('src::data.connection.subscribes');
            method_unsubscribes = include('src::data.connection.unsubscribes');
            method_activate = include('src::data.connection.activate');
            method_deactivate = include('src::data.connection.deactivate');
            isObject = include('is.object.simple');

            var_init_locked_1578559752662 = true;
        }



        if (!var_class_1578559752662) {

            class main extends mixins({
                extend,
                mixins: []
            }) {







                acceptMessage(...args) {

                    return method_acceptMessage.apply(this, args);

                }
                isSubscribed(...args) {

                    return method_isSubscribed.apply(this, args);

                }
                subscribeOnce(...args) {

                    return method_subscribeOnce.apply(this, args);

                }
                subscribePush(...args) {

                    return method_subscribePush.apply(this, args);

                }
                findOpenedSubscriberByName(...args) {

                    return method_findOpenedSubscriberByName.apply(this, args);

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
                activate(...args) {

                    return method_activate.apply(this, args);

                }
                deactivate(...args) {

                    return method_deactivate.apply(this, args);

                }



            }

            var_class_1578559752662 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752662;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection';
                }

            };
        }


        return var_class_1578559752662;
    };

})();

exports['src::data.connection.ajax'] = (() => {

    let Connection;

    let var_init_locked_1578559752679;

    let var_class_1578559752679;



    return function(options) {


        if (!var_init_locked_1578559752679) {

            Connection = include('data.connection')();

            var_init_locked_1578559752679 = true;
        }



        if (!var_class_1578559752679) {


            /**
             * 
             * 基于 AJAX 进行数据交互
             * 
             * @import Connection from data.connection value
             * 
             * @require url-join
             * 
             * @param {object}  options 配置
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


            var_class_1578559752679 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752679;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.ajax';
                }

            };
        }


        return new var_class_1578559752679(options);
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

exports['src::data.connection.channel.port'] = (() => {

    let isPromise, isSubscriber, Subscriber;

    let var_init_locked_1578559752701;

    let var_class_1578559752701;



    return function(connection, name, options) {


        if (!var_init_locked_1578559752701) {

            isPromise = include('is.promise');
            isSubscriber = include('is.subscriber');
            Subscriber = include('data.subscriber')();

            var_init_locked_1578559752701 = true;
        }



        if (!var_class_1578559752701) {

            /**
             * 
             * 消息发送器
             * 
             * @import is.promise
             * 
             * @import is.subscriber
             * 
             * @import Subscriber from data.subscriber value
             * 
             * @param {data.Connection} connection 连接对象
             * 
             * @param {string} name 消息地址
             * 
             * @param {object} options 消息配置
             * 
             */


            class main extends Subscriber {

                accept(data) {

                    let me = this,
                        {
                            connection
                        } = me;

                    if (data.hasOwnProperty('id') && data.hasOwnProperty('params')) {

                        let {
                            id,
                            params
                        } = data,
                        result = super.accept(params);

                        if (isPromise(result)) {

                            result.then(result => connection.resolve(id, result)).catch(error => connection.reject(id, error));

                        } else if (isSubscriber(result)) {

                            connection.registerSubscriber(id, result);

                            result.bindFn = result => connection.resolve(id, result);

                        } else {

                            connection.resolve(id, result);
                        }

                    } else {

                        super.accept(data);
                    }
                }
            }

            var_class_1578559752701 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752701;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.channel.port';
                }

            };
        }


        return new var_class_1578559752701(connection, name, options);
    };

})();

exports['src::data.connection.channel'] = (() => {

    let Connection, add, generate, MultiPromise, equals, remove, createPort;

    let var_init_locked_1578559752716;

    let var_class_1578559752716;



    return function() {


        if (!var_init_locked_1578559752716) {

            Connection = include('data.connection')();
            add = include('event.listener.add');
            generate = include('id.generate');
            MultiPromise = include('promise.multi')();
            equals = include('data.equals');
            remove = include('array.remove.index');
            createPort = include('data.connection.channel.port');

            var_init_locked_1578559752716 = true;
        }



        if (!var_class_1578559752716) {

            /**
             * 
             * Socket 通信
             * 
             * @import Connection from data.connection value
             * 
             * @import add from event.listener.add
             * 
             * @import generate from id.generate
             * 
             * @import MultiPromise from promise.multi value
             * 
             * @import equals from data.equals
             * 
             * @import remove from array.remove.index
             * 
             * @import createPort from data.connection.channel.port
             * 
             * @class
             * 
             */

            const pushOffRe = /^push\-off\-(.+)$/;

            class main extends Connection {

                constructor({
                    receiver,
                    sender,
                    ...options
                }) {

                    super({
                        ...options,
                        subscriber: createPort,
                        rules: [{
                            test: '^.+$',
                            use(command) {

                                return {
                                    extraParams: {
                                        command
                                    }
                                };
                            }
                        }]
                    });

                    let me = this;

                    me.doAcceptMessage(receiver);

                    me.sender = sender;

                    me.commands = {};

                    me.registerSubscribers = {};
                }

                doAcceptMessage(receiver) {

                    let me = this;

                    add(receiver, 'message', data => me.acceptMessage(data));
                }

                doSendMessage(sender, message) {

                    sender.postMessage(message);
                }

                unregisterSubscriber(id) {

                    let {
                        registerSubscribers
                    } = this;

                    registerSubscribers.get(id).destroy();

                    registerSubscribers.delete(id);
                }

                registerSubscriber(id, subscriber) {

                    let {
                        registerSubscribers
                    } = this;

                    registerSubscribers.set(id, subscriber);
                }

                processMessage(data) {

                    let {
                        command
                    } = data,
                    result = command.match(pushOffRe);

                    if (result) {

                        connection.unregisterSubscriber(id);

                    } else {

                        return data;
                    }
                }

                validateMessage({
                    params
                }, {
                    command
                }) {

                    return params.command === command;
                }

                call(command, params) {

                    let me = this,
                        {
                            sender
                        } = me;

                    return new Promise((resolve, reject) => {

                        let id = generate('call-');

                        me.subscribeOnce(id).then(data => {

                            let {
                                type
                            } = data;

                            switch (type) {

                                case 'resolve':

                                    resolve(data.result);

                                    break;

                                case 'reject':

                                    reject(data.error);
                            }

                            me.removeReplyId(command, params);

                        });

                        me.doSendMessage(sender, {
                            command: `call-${command}`,
                            data: {
                                id,
                                params
                            }
                        });
                    });
                }

                pushOn(command, params) {

                    let me = this,
                        {
                            sender
                        } = me,
                        id = generate('push-');

                    me.doSendMessage(sender, {
                        command: `call-${command}`,
                        data: {
                            id,
                            params
                        }
                    });

                    return me.subscribe(id, {
                        fn(data) {

                            let {
                                type
                            } = data;

                            switch (type) {

                                case 'resolve':

                                    resolve(data.result);

                                    break;

                                case 'reject':

                                    reject(data.error);
                            }
                        }
                    });
                }

                pushOff(id) {

                    let me = this;

                    me.unsubscribe(id);

                    me.doSendMessage(sender, {
                        command: `push-off-${id}`
                    });
                }

                reject(id, error) {

                    let me = this,
                        {
                            sender
                        } = me;

                    me.doSendMessage(sender, {
                        command: id,
                        data: {
                            type: 'reject',
                            error
                        }
                    });
                }

                resolve(id, result) {

                    let me = this,
                        {
                            sender
                        } = me;

                    me.doSendMessage(sender, {
                        command: id,
                        data: {
                            type: 'resolve',
                            result
                        }
                    });
                }

                function(command, fn, scope) {

                    this.subscribe(`call-${command}`, {
                        fn,
                        scope
                    });
                }



            }



            var_class_1578559752716 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752716;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.channel';
                }

            };
        }


        return var_class_1578559752716;
    };

})();

exports['src::data.connection.deploy'] = (() => {

    let generate, isObject, isArray, isFunction, isString, empty;

    let var_init_locked_1578559752737;





    function main(connections, subscriberMap, getConnectionId) {

        /**
         * 
         * 实现部署
         * 
         * @import generate from id.generate
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.array
         * 
         * @import is.function
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @import empty from function.empty value
         * 
         * @param {array} connections 连接实例集合
         * 
         * @param {object} subscriberMap 订阅器定义集合
         * 
         * @param {function} [getConnectionId] 获得连接编号
         * 
         * @return {object}
         * 
         */

        let {
            keys
        } = Object;

        getConnectionId = getConnectionId || empty;

        let defaultConnectionId = generate('connection-');

        function isMounted() {

            return this.hasOwnProperty('$connectionId');
        }

        return {

            mounted() {

                let scope = this;

                if (isMounted.call(scope)) {

                    return;
                }

                let names = keys(subscriberMap),
                    namespace = scope.$connectionId = getConnectionId.call(scope) || defaultConnectionId;

                for (let name of names) {

                    let {
                        varName,
                        connection,
                        subscribers
                    } = subscriberMap[name];

                    scope[varName] = new Proxy(connection.subscribes({
                        ...subscribers,
                        namespace,
                        scope
                    }), {

                        set(subscribers, name, config) {

                            if (!subscribers.hasOwnProperty(name)) {

                                let subscriber = connection.subscribes({
                                    [name]: config,
                                    namespace,
                                    scope
                                })[name];

                                if (subscriber) {

                                    subscribers[name] = subscriber;
                                }
                            }

                            return subscribers;

                        },

                        get(subscribers, name) {

                            return subscribers[name];
                        },

                        deleteProperty(subscribers, name) {

                            if (subscribers.hasOwnProperty(name)) {

                                connection.unsubscribe(name, namespace);

                                delete subscribers[name];
                            }

                            return subscribers;
                        },

                        ownKeys(subscribers) {

                            return Object.keys(subscribers);
                        }

                    });
                }

            },

            unmounted() {

                let scope = this;

                if (!isMounted.call(scope)) {

                    return;
                }

                let names = keys(subscriberMap),
                    {
                        $connectionId: namespace
                    } = scope;

                for (let name of names) {

                    let {
                        varName,
                        connection,
                    } = subscriberMap[name];

                    connection.unsubscribes(keys(scope[varName]), namespace);

                    delete scope[varName];
                }

                delete scope.$connectionId;
            }

        };

    }

    return function(connections, subscriberMap, getConnectionId) {


        if (!var_init_locked_1578559752737) {

            generate = include('id.generate');
            isObject = include('is.object.simple');
            isArray = include('is.array');
            isFunction = include('is.function');
            isString = include('is.string');
            isObject = include('is.object.simple');
            empty = include('function.empty')();

            var_init_locked_1578559752737 = true;
        }




        return main.call(this, connections, subscriberMap, getConnectionId);
    };

})();

exports['src::data.connection.deploy.lifecycle'] = (() => {

    let deploy;

    let var_init_locked_1578559752742;





    function main(connections, component, getConnectionId) {


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
         * @param {function} [getConnectionId] 获得连接编号
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        let names = Object.keys(connections),
            config = {};

        for (let name of names) {

            let field = name === 'default' ? 'subscribers' : `${name}_subscribers`,
                subscribers = component[field],
                varName = `$${field}`,
                connection = connections[name];

            if (subscribers) {

                config[name] = {
                    varName,
                    connection,
                    subscribers
                };

                delete component[field];

            } else {

                config[name] = {
                    varName,
                    connection,
                    subscribers: {}
                };
            }
        }

        return deploy(connections, config, getConnectionId);

    }

    return function(connections, component, getConnectionId) {


        if (!var_init_locked_1578559752742) {

            deploy = include('src::data.connection.deploy');

            var_init_locked_1578559752742 = true;
        }




        return main.call(this, connections, component, getConnectionId);
    };

})();

exports['src::data.connection.socket'] = (() => {

    let Connection, observable, add, Manager;

    let var_init_locked_1578559752746;

    let var_class_1578559752746;



    return function() {


        if (!var_init_locked_1578559752746) {

            Connection = include('data.connection')();
            observable = include('mixin.observable');
            add = include('event.listener.add');
            Manager = include('src::data.connection.socket.manager')();

            var_init_locked_1578559752746 = true;
        }



        if (!var_class_1578559752746) {



            /**
             * 
             * Socket 通信
             * 
             * @import Connection from data.connection value
             * 
             * @import observable from mixin.observable
             * 
             * @import add from event.listener.add
             * 
             * @import Manager from .socket.manager value
             * 
             * @class
             * 
             */

            class main extends Connection {

                constructor({
                    socket,
                    ...superOptions
                }) {

                    super(superOptions);

                    let me = this;

                    let {
                        url,
                        ...options
                    } = socket, {
                        reconnection = true,
                        reconnectionDelay = 1000,
                        autoConnect = true,
                        ...otherOptions
                    } = options;

                    me.initialize(url, otherOptions);

                    if (autoConnect) {

                        Manager.connect(me);
                    }

                    if (reconnection) {

                        add(me, {
                            lostconnect: 'onReconnect',
                            connecttimeout: 'onReconnect',
                            scope: me
                        });
                    }

                    add(me, 'connect', () => me.activate());

                    me.reconnectionDelay = reconnectionDelay;
                }

                onReconnect() {

                    let me = this,
                        {
                            reconnectionDelay
                        } = me;

                    setTimeout(() => {

                        Manager.disconnect(me);

                        Manager.connect(me);

                    }, reconnectionDelay);

                }

                initialize(url, options) {


                }

                get isConnecting() {

                    return isState.call(this, 0);
                }

                get isConnected() {

                    return isState.call(this, 1);
                }

                get isDisconnecting() {

                    return isState.call(this, 2);
                }

                get isDisconnected() {

                    return isState.call(this, 3);
                }

                connect() {

                    let me = this,
                        {
                            isDisconnected
                        } = me;

                    if (isDisconnected) {

                        me.doConnect();
                    }
                }

                doConnect() {

                }

                disconnect() {

                    let me = this,
                        {
                            isDisconnected,
                            isDisconnecting
                        } = me;

                    if (!isDisconnected || !isDisconnecting) {

                        me.disconnectingState = true;

                        me.deactivate();

                        me.doDisconnect();
                    }
                }

                doDisconnect() {

                }

                validateMessage({
                    params: baseParams
                }, {
                    params: equalParams
                }) {

                    let names = Object.keys(equalParams);

                    for (let name of names) {

                        if (baseParams[name] !== equalParams[name]) {

                            return false;
                        }
                    }

                    return true;
                }
            }

            function isState(state) {

                let {
                    socket
                } = this;

                if (!socket) {

                    return state === 3;
                }

                return socket.readyState === state;
            }

            var_class_1578559752746 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752746;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket';
                }

            };
        }


        return var_class_1578559752746;
    };

})();

exports['src::data.connection.socket.manager'] = (() => {

    let Socket, add, remove;

    let var_init_locked_1578559752767;

    let var_class_1578559752767;

    let var_once_value_1578559752767;

    return function() {


        if (!var_init_locked_1578559752767) {

            Socket = include('data.connection.socket');
            add = include('event.listener.add');
            remove = include('event.listener.remove');

            var_init_locked_1578559752767 = true;
        }



        if (!var_class_1578559752767) {


            /**
             * 
             * 管理多个 WebSocket 推送器开关
             * 
             * @import Socket from data.connection.socket
             * 
             * @import add from event.listener.add
             * 
             * @import remove from event.listener.remove
             * 
             * @once
             * 
             */

            const processQueue = [];

            let isProcessorStarted = false,
                previousSocket;

            class main {

                isSocket(socket) {

                    return socket instanceof Socket();
                }

                isConnected(socket) {

                    return this.isSocket(socket) && socket.isConnected;
                }

                connect(socket) {

                    todo.call(this, socket, 'connect');
                }

                disconnect(socket) {

                    todo.call(this, socket, 'disconnect');
                }
            }

            function todo(socket, action) {

                if (this.isSocket(socket)) {

                    processQueue.push({
                        socket,
                        action
                    });

                    start();
                }
            }

            function start() {

                if (!isProcessorStarted) {

                    isProcessorStarted = true;

                    doSetTimeoutProcessing();
                }
            }

            function doSetTimeoutProcessing() {

                setTimeout(doProcessing, 0);
            }

            function doProcessing() {

                let [
                    process
                ] = processQueue;

                if (process) {

                    let {
                        socket,
                        action
                    } = process;

                    let {
                        isDisconnected,
                        isConnected,
                        isDisconnecting,
                        isConnecting
                    } = socket;

                    if (previousSocket) {

                        remove(previousSocket, {
                            lostconnect: doSetTimeoutProcessing,
                            disconnect: doSetTimeoutProcessing,
                            connect: doSetTimeoutProcessing
                        });
                    }

                    if (isDisconnected || isConnected) {

                        previousSocket = socket;

                        processQueue.shift();

                        add(socket, 'lostconnect', doSetTimeoutProcessing);

                        switch (action) {

                            case 'connect':

                                if (isDisconnected) {

                                    add(socket, 'connect', doSetTimeoutProcessing, {
                                        once: true
                                    });

                                    socket.connect();

                                } else {

                                    doSetTimeoutProcessing();
                                }

                                break;

                            case 'disconnect':

                                if (isConnected) {

                                    add(socket, 'disconnect', doSetTimeoutProcessing, {
                                        once: true
                                    });

                                    socket.disconnect();

                                } else {

                                    doSetTimeoutProcessing();
                                }
                        }

                    } else if (isDisconnecting) {

                        add(socket, 'disconnect', doSetTimeoutProcessing, {
                            once: true
                        });

                    } else if (isConnecting) {

                        add(socket, 'connect', doSetTimeoutProcessing, {
                            once: true
                        });
                    }

                } else {

                    previousSocket = null;

                    isProcessorStarted = false;
                }
            }

            var_class_1578559752767 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752767;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.manager';
                }

            };
        }



        if (var_once_value_1578559752767) {

            return var_once_value_1578559752767;

        }

        return var_once_value_1578559752767 = new var_class_1578559752767();

    };

})();

exports['src::data.connection.deploy.miniprogram'] = (() => {

    let Manager, empty, deploy;

    let var_init_locked_1578559752788;





    function main(connections, component, defaultConnectionNames) {


        /**
         * 
         * 基于数据连接的小程序封装
         * 
         * @import Manager from data.connection.socket.manager value
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from ..lifecycle
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} component 组件定义对象
         * 
         * @param {array} [defaultConnectionNames = []] 默认连接名称集合
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        const {
            onLoad: originLoad = empty,
            onShow: originShow = empty,
            onHide: originHide = empty,
            onUnload: originUnload = empty,
            connections: connectionNames = defaultConnectionNames,
            ...options
        } = component;

        let {
            mounted,
            unmounted,
            subscribe,
            unsubscribe
        } = deploy(connections, component);

        function initSockets() {

            if (!this.hasOwnProperty('$connectionId')) {

                let names = Object.keys(connections);

                for (let name of names) {

                    if (!connectionNames.includes(name)) {

                        Manager.disconnect(connections[name]);

                    }
                }

                for (let name of names) {

                    if (connectionNames.includes(name)) {

                        Manager.connect(connections[name]);
                    }
                }
            }
        }

        return {
            ...options,
            onLoad(options) {

                let me = this;

                initSockets.call(me);

                mounted.call(me);

                originLoad.call(me, options);

            },

            onShow() {

                let me = this;

                initSockets.call(me);

                mounted.call(me);

                originShow.call(me, options);
            },

            onHide() {

                let me = this;

                originHide.call(me);

                unmounted.call(me);
            },

            onUnload() {

                let me = this;

                originUnload.call(me);

                unmounted.call(me);
            },
            subscribe,
            unsubscribe
        };

    }

    return function(connections, component, defaultConnectionNames = []) {


        if (!var_init_locked_1578559752788) {

            Manager = include('data.connection.socket.manager')();
            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1578559752788 = true;
        }




        return main.call(this, connections, component, defaultConnectionNames);
    };

})();

exports['src::data.connection.deploy.module'] = (() => {

    let empty, deploy;

    let var_init_locked_1578559752806;





    function main(connections, module) {


        /**
         * 
         * 基于数据连接的模块封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from ..lifecycle
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} module 组件定义对象
         * 
         * @return {object} 增加订阅功能的组件定义对象
         * 
         */

        let {
            mounted
        } = deploy(connections, module);

        mounted.call(module);

        return module;

    }

    return function(connections, module) {


        if (!var_init_locked_1578559752806) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1578559752806 = true;
        }




        return main.call(this, connections, module);
    };

})();

exports['src::data.connection.deploy.vue'] = (() => {

    let empty, deploy;

    let var_init_locked_1578559752815;





    function main(connections, component) {


        /**
         * 
         * 基于数据连接的 VUE 封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from ..lifecycle
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
        } = deploy(connections, component, function() {

            return this.connectionId;

        });

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


        if (!var_init_locked_1578559752815) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1578559752815 = true;
        }




        return main.call(this, connections, component);
    };

})();

exports['src::data.connection.flow'] = (() => {

    let isObject, isString, isFunction, isArray, isPromise, isDefined, generate, get;

    let var_init_locked_1578559752823;

    let var_class_1578559752823;



    return function(message, flows, methods, callback, scoped) {


        if (!var_init_locked_1578559752823) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            isArray = include('is.array');
            isPromise = include('is.promise');
            isDefined = include('is.defined');
            generate = include('id.generate');
            get = include('function.get');

            var_init_locked_1578559752823 = true;
        }



        if (!var_class_1578559752823) {

            /**
             * 
             * 流程
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.string
             * 
             * @import is.function
             * 
             * @import is.array
             * 
             * @import is.promise
             * 
             * @import is.defined
             * 
             * @import generate from id.generate
             * 
             * @import get from function.get
             * 
             * @param {data.connection.Mesage} message 消息机
             * 
             * @param {object} flows 流程定义
             * 
             * @param {object} methods 流程节点定义
             * 
             * @param {mixed} callback 回调函数
             * 
             * @param {mixed} scoped 回调函数作用域
             * 
             */

            class main {

                constructor(message, flows, methods, context) {

                    let me = this;

                    me.flows = flows;

                    let currentMethods = me.methods = {},
                        innerContext = {},
                        {
                            next
                        } = me,
                        names = me.methodNames = Object.keys(methods);

                    for (let name of names) {

                        let method = methods[name];

                        if (isFunction(method)) {

                            currentMethods[name] = ({
                                data
                            }) => {

                                let result = method.call(innerContext, data, context);

                                if (isPromise(result)) {

                                    result.then(next.bind(me, name));

                                } else {

                                    next.call(me, name, result);
                                }

                            };
                        }
                    }

                    me.message = message;

                    me.started = false;
                }

                getFullAddress(name) {

                    return `${name}<${this.flowId}>`;
                }

                send(name, value) {

                    let me = this,
                        {
                            message
                        } = me;

                    message.send(me.getFullAddress(name), value);
                }

                start(value, name = 'start') {

                    let me = this;

                    let {
                        started
                    } = me;

                    if (!started) {

                        me.started = true;

                        let {
                            methods
                        } = me;

                        message.subscribes({
                            ...methods,
                            connectionId: me.flowId = generate('flow-')
                        });

                        me.send(name, value);

                    } else {

                        me.end();

                        me.start(value, name);
                    }
                }

                end() {

                    let me = this,
                        {
                            started
                        } = me;

                    if (started) {

                        let {
                            message,
                            methodNames,
                            flowId
                        } = me;

                        message.unsubscribes(methodNames, flowId);

                        me.started = false;
                    }
                }

                next(name, value) {

                    let me = this,
                        {
                            flows,
                            message
                        } = me,
                        next = flows[name];

                    if (isString(next)) {

                        me.send(next, value);

                    } else if (isObject(next)) {

                        let {
                            external,
                            next: from
                        } = next;

                        message.send({
                            from: me.getFullAddress(from),
                            to: external
                        }, value);

                    } else if (isArray(next)) {

                        let defaultNext;

                        for (let {
                                value: caseValue,
                                type,
                                next: caseNext
                            } of next) {

                            if (!isDefined(caseValue) && !isDefined(type)) {

                                defaultNext = caseNext;

                                continue;
                            }

                            if (type) {

                                if (typeof value === type) {

                                    me.send(caseNext, value);

                                    break;
                                }

                                continue;
                            }

                            if (caseValue === value) {

                                me.send(caseNext, value);

                                break;
                            }
                        }

                        if (defaultNext) {

                            me.send(defaultNext, value);
                        }

                    }
                }
            }

            var_class_1578559752823 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752823;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.flow';
                }

            };
        }


        return new var_class_1578559752823(message, flows, methods, callback, scoped);
    };

})();

exports['src::data.Subscriber.constructor'] = (() => {

    let get, add, emptyFn, from;

    let var_init_locked_1578559752828;





    function main(connection, name, {
        fullName,
        processData,
        listeners,
        params,
        autoOpen,
        extraParams,
        defaultParams,
        fn,
        once,
        scope,
        namespace,
        processAcceptData,
        cacheAcceptData,
        getCacheData
    }) {

        /**
         * 
         * 初始化订阅器
         * 
         * @import get from function.get
         * 
         * @import add from event.listener.add
         * 
         * @import emptyFn from function.empty value
         * 
         * @import from from array.from
         * 
         * @param {data.connection} connection 当前订阅器所在的连接对象
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {string} config.fullName 订阅器全称
         * 
         * @param {function} [config.processData] 处理数据方法
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
         * @param {boolean} [config.once = false] 仅订阅一次即取消
         * 
         * @param {mixed} [config.scope] 订阅函数作用域
         * 
         * @param {string} [config.namespace] 命名空间
         * 
         * @param {function} [config.processAcceptData] 处理接收数据的方法
         * 
         * @param {function} [config.cacheAcceptData] 缓存接收数据方法
         * 
         * @param {function} [config.getCacheData] 获取缓存数据 
         * 
         */


        let me = this;

        me.name = name;

        me.fullName = fullName;

        me.connection = connection;

        me.$bubbleTarget = connection;

        me.processData = processData || (({
            data
        }) => data);

        me.cacheAcceptData = cacheAcceptData || emptyFn;

        me.processAcceptData = processAcceptData || (data => data);

        me.getCacheData = getCacheData || (data => data);

        me.extraParams = extraParams;

        me.defaultParams = defaultParams;

        me.bindFn = get(fn, scope) || emptyFn;

        add(me, {
            ...listeners,
            scope
        });

        if (autoOpen) {

            me.open(params);
        }

        if (once === true) {

            add(me, 'data', () => connection.unsubscribe(name, namespace), {
                once: true
            });
        }


    }

    return function(connection, name, {
        fullName,
        processData,
        listeners = {},
        params,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        once = false,
        scope,
        namespace,
        processAcceptData,
        cacheAcceptData,
        getCacheData
    }) {


        if (!var_init_locked_1578559752828) {

            get = include('function.get');
            add = include('event.listener.add');
            emptyFn = include('function.empty')();
            from = include('array.from');

            var_init_locked_1578559752828 = true;
        }




        return main.call(this, connection, name, {
            fullName,
            processData,
            listeners,
            params,
            autoOpen,
            extraParams,
            defaultParams,
            fn,
            once,
            scope,
            namespace,
            processAcceptData,
            cacheAcceptData,
            getCacheData
        });
    };

})();

exports['src::data.Subscriber.accept.data'] = (() => {

    let isDefined;

    let var_init_locked_1578559752837;





    function main(data) {

        /**
         * 
         * 将推送数据传递给绑定函数
         * 
         * @import is.defined
         * 
         * @param {mixed} data 推送过来的数据
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let me = this,
            {
                bindFn,
                closed,
                params,
                cache,
                getCacheData
            } = me;

        if (!closed) {

            if (isDefined(cache)) {

                bindFn(getCacheData(cache), params);

            } else {

                bindFn(data, params);
            }

            me.fireEvent('data', data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1578559752837) {

            isDefined = include('is.defined');

            var_init_locked_1578559752837 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.Subscriber.accept'] = (() => {

    let isDefined, setData;

    let var_init_locked_1578559752840;

    let var_current_scope_1578559752840;



    function main(data) {


        /**
         * 
         * 接收数据
         * 
         * @import is.defined
         * 
         * @import setData from .accept.data scoped
         * 
         * @param {mixed} data 数据
         * 
         * 
         */

        let me = this,
            {
                closed,
                cache,
                processAcceptData,
                cacheAcceptData
            } = me;

        if (closed) {

            return;
        }

        data = processAcceptData(data);

        if (isDefined(data)) {

            me.cache = cacheAcceptData(data, cache);

            setData(data);
        }

    }

    return function(data) {


        if (!var_init_locked_1578559752840) {

            isDefined = include('is.defined');

            var_init_locked_1578559752840 = true;
        }



        if (!var_current_scope_1578559752840 !== this) {

            setData = include('src::data.Subscriber.accept.data').bind(this);

            var_current_scope_1578559752840 = this;
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

    let isDefined, equals, assign, setData;

    let var_init_locked_1578559752846;

    let var_current_scope_1578559752846;



    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import is.defined
         * 
         * @import equals from data.equals
         * 
         * @import assign from object.assign
         * 
         * @import setData from .accept.data scoped
         * 
         * @param {object} [params = {}] 订阅参数
         * 
         */

        let me = this,
            {
                name,
                extraParams,
                defaultParams,
                params: oldParams,
                connection
            } = me;

        params = assign({}, defaultParams, params, extraParams);

        if (!oldParams || !equals(params, oldParams)) {

            me.close();

            me.params = params;

            me.fireEvent('open', params, oldParams);

            let subscriber = connection.findOpenedSubscriberByName(name, me);

            if (subscriber) {

                let {
                    cache
                } = subscriber;

                if (isDefined(cache)) {

                    me.cache = cahce;

                    setData();
                }
            }
        }

    }

    return function(params = {}) {


        if (!var_init_locked_1578559752846) {

            isDefined = include('is.defined');
            equals = include('data.equals');
            assign = include('object.assign');

            var_init_locked_1578559752846 = true;
        }



        if (!var_current_scope_1578559752846 !== this) {

            setData = include('src::data.Subscriber.accept.data').bind(this);

            var_current_scope_1578559752846 = this;
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

        me.prevParams = me.params;

        delete me.params;

        delete me.cache;

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.Subscriber.destroy'] = (() => {

    let removeAll;

    let var_init_locked_1578559752853;





    function main() {


        /**
         * 
         * 销毁
         * 
         * @import removeAll from event.listener.remove.all
         * 
         */

        let me = this,
            {
                connection
            } = me;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        removeAll(me);

        connection.subscribers.delete(me.fullName);

        delete me.fullName;

    }

    return function() {


        if (!var_init_locked_1578559752853) {

            removeAll = include('event.listener.remove.all');

            var_init_locked_1578559752853 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.Subscriber'] = (() => {

    let mixin_1578559751724__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1578559752861;

    let var_class_1578559752861;



    return function() {


        if (!var_init_locked_1578559752861) {

            mixin_1578559751724__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.Subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_prevOpen = include('src::data.subscriber.open.prev');
            method_accept = include('src::data.Subscriber.accept');
            method_reopen = include('src::data.Subscriber.reopen');
            method_open = include('src::data.Subscriber.open');
            method_close = include('src::data.Subscriber.close');
            method_destroy = include('src::data.Subscriber.destroy');
            isObject = include('is.object.simple');

            var_init_locked_1578559752861 = true;
        }



        if (!var_class_1578559752861) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                prevOpen(...args) {

                    return method_prevOpen.apply(this, args);

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

            var_class_1578559752861 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752861;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.Subscriber';
                }

            };
        }


        return var_class_1578559752861;
    };

})();

exports['src::data.connection.message.address'] = (() => {

    let Subscriber, isDefined;

    let var_init_locked_1578559752873;

    let var_class_1578559752873;



    return function(name, options) {


        if (!var_init_locked_1578559752873) {

            Subscriber = include('data.Subscriber')();
            isDefined = include('is.defined');

            var_init_locked_1578559752873 = true;
        }



        if (!var_class_1578559752873) {


            /**
             * 
             * 消息地址
             * 
             * @import Subscriber from data.Subscriber value
             * 
             * @import is.defined
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
                        result = super.accept(data),
                        {
                            from
                        } = data;

                    if (from) {

                        if (isDefined(result)) {

                            if (result instanceof Promise) {

                                result.then(data => me.send(from, data));

                            } else {

                                me.send(from, result);
                            }
                        }
                    }
                }
            }



            var_class_1578559752873 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752873;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message.address';
                }

            };
        }


        return new var_class_1578559752873(name, options);
    };

})();

exports['src::data.connection.message'] = (() => {

    let Connection, isObject, isString, createAddress, isDefined, assign, from;

    let var_init_locked_1578559752887;

    let var_class_1578559752887;



    return function() {


        if (!var_init_locked_1578559752887) {

            Connection = include('data.connection')();
            isObject = include('is.object.simple');
            isString = include('is.string');
            createAddress = include('data.connection.message.address');
            isDefined = include('is.defined');
            assign = include('object.assign');
            from = include('array.from');

            var_init_locked_1578559752887 = true;
        }



        if (!var_class_1578559752887) {

            /**
             * 
             * 消息订阅
             * 
             * @import Connection from data.connection value
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.string
             * 
             * @import createAddress from data.connection.message.address
             * 
             * @import is.defined
             * 
             * @import assign from object.assign
             * 
             * @import from from array.from
             * 
             * @singleton
             * 
             */

            const exactAddressRe = /^[^<>]+<[^<>]+>$/;

            class main extends Connection {

                constructor() {

                    super({
                        subscriber: createAddress
                    });

                    this.resendMessages = [];
                }

                processMessage(message) {

                    return message;
                }

                processData(subscriber, {
                    from,
                    data
                }) {

                    return {
                        from,
                        data
                    };
                }

                hasAddress(name) {

                    let {
                        subscribers
                    } = this;

                    return subscribers.has(name);
                }

                validateMessage({
                    name
                }, {
                    to
                }) {

                    return to.test(name);
                }

                get subscriberListeners() {

                    return {
                        ...super.subscriberListeners,
                        send: 'onMessageSend'
                    };
                }

                onMessageSend(address, message) {

                    this.send(message);
                }

                onCreateSubscriber() {

                    let me = this,
                        {
                            resendMessages
                        } = me,
                        messages = from(resendMessages);

                    resendMessages.length = 0;

                    for (let message of messages) {

                        me.send(message);
                    }
                }

                send(address, data) {

                    if (isString(address)) {

                        address = {
                            to: address,
                            data
                        };
                    }

                    if (isObject(address)) {

                        if (!address.hasOwnProperty('data')) {

                            address = {
                                ...address,
                                data
                            };
                        }

                        address.getResendMessages = address.getResendMessages || default_get_resend_messages;

                        let {
                            to,
                            getResendMessages
                        } = address;

                        if (isString(to)) {

                            if (exactAddressRe.test(to)) {

                                to = new RegExp(to);

                            } else {

                                to = new RegExp(`^${to}(?:<[^<>]+>)?$`);
                            }
                        }

                        if (to instanceof RegExp) {

                            address.to = to;

                            let {
                                reSendMessages
                            } = this;

                            reSendMessages.push(...from(getResendMessages(address, me.acceptMessage(address))));
                        }
                    }
                }
            }

            function default_get_resend_messages(message, subscribers) {

                if (subscribers.length !== 0) {

                    return message;
                }
            }

            var_class_1578559752887 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752887;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message';
                }

            };
        }


        return new var_class_1578559752887();
    };

})();

exports['src::socket.io.ws'] = (() => {









    function main(socket) {


        /**
         * 
         * 获取 socket.io 内置的 socket 原生对象
         * 
         * @param {mixed} socket socket.io 对象
         * 
         * @return {mixed} 原生 socket 对象 
         * 
         */

        let {
            engine
        } = socket.io;

        if (engine) {

            return engine.transport.ws;
        }

    }

    return function(socket) {





        return main.call(this, socket);
    };

})();

exports['src::data.connection.socket.io'] = (() => {

    let Connection, add, getWS, Manager, removeAll;

    let var_init_locked_1578559752911;

    let var_class_1578559752911;



    return function() {


        if (!var_init_locked_1578559752911) {

            Connection = include('data.connection.socket')();
            add = include('event.listener.add');
            getWS = include('socket.io.ws');
            Manager = include('src::data.connection.socket.manager')();
            removeAll = include('event.listener.remove.all');

            var_init_locked_1578559752911 = true;
        }



        if (!var_class_1578559752911) {

            /**
             * 
             * 基于 socket.io 标准进行开发
             * 
             * @import Connection from data.connection.socket value
             * 
             * @import add from event.listener.add
             * 
             * @import getWS from socket.io.ws
             * 
             * @import Manager from ..manager value
             * 
             * @import removeAll from event.listener.remove.all
             * 
             * @require socket.io-client
             * 
             * @class
             * 
             */

            const IO = require('socket.io-client');

            class main extends Connection {

                initialize(url, options) {

                    let me = this;

                    me.socketURL = url;

                    me.socketOptions = options;
                }

                get socket() {

                    let {
                        io
                    } = this;

                    if (io) {

                        return getWS(this.io);
                    }
                }

                onSocketTimeout() {

                    this.fireEvent('connecttimeout');
                }

                onSocketMessage(...args) {

                    this.acceptMessage(...args);
                }

                onSocketDisconnect() {

                    let me = this,
                        {
                            isDisconnected,
                            socket
                        } = me;

                    if (!isDisconnected && socket) {

                        add(socket, 'close', 'onSocketDisconnect', {
                            scope: me,
                            once: true
                        });

                    } else {

                        let me = this,
                            {
                                disconnectingState,
                                io
                            } = me;

                        removeAll(io);

                        delete me.io;

                        delete me.disconnectingState;

                        if (disconnectingState) {

                            me.fireEvent('disconnect');

                        } else {

                            me.fireEvent('lostconnect');
                        }
                    }
                }

                onSocketError() {

                    let me = this,
                        {
                            isDisconnected,
                            onSocketError
                        } = me;

                    if (isDisconnected) {

                        me.onSocketDisconnect();

                    } else {

                        setTimeout(onSocketError.bind(me), 0);
                    }
                }

                onSocketConnect() {

                    this.fireEvent('connect');
                }

                doConnect() {

                    let me = this,
                        {
                            socketURL,
                            socketOptions,
                            messageEventName,
                            subscribeResponseEventName
                        } = me;

                    add(me.io = IO(socketURL, {
                        forceNew: true,
                        transports: [
                            'websocket'
                        ],
                        reconnection: false,
                        ...socketOptions
                    }), {
                        connect_error: 'onSocketError',
                        connect: 'onSocketConnect',
                        disconnect: 'onSocketDisconnect',
                        connect_timeout: 'onSocketTimeout',
                        [messageEventName]: 'onSocketMessage',
                        [subscribeResponseEventName]: 'onSocketSubscribeResponse',
                        scope: me
                    });
                }

                onSocketSubscribeResponse() {


                }

                doDisconnect() {

                    this.io.disconnect();
                }

                get subscribeEventName() {

                    return 'sub'
                }

                get messageEventName() {

                    return 'msg';
                }


                get subscribeResponseEventName() {

                    return 'subresp';
                }

                get unsubscribeEventName() {

                    return 'unsub';
                }

                emit(event, ...params) {

                    let me = this,
                        {
                            isConnected,
                            io
                        } = me;

                    if (isConnected) {

                        io.emit(event, ...params);
                    }

                }

                doSubscriberOpen(...args) {

                    let me = this,
                        {
                            subscribeEventName
                        } = me;

                    me.emit(subscribeEventName, ...args);
                }

                doSubscriberClose(...args) {

                    let me = this,
                        {
                            unsubscribeEventName
                        } = me;

                    me.emit(unsubscribeEventName, ...args);
                }
            }

            var_class_1578559752911 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752911;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.io';
                }

            };
        }


        return var_class_1578559752911;
    };

})();

exports['src::is.url.absolute'] = (() => {









    function main(url) {


        /**
         * 
         * 判断当前链接是否为绝对路径
         * 
         * @param {string} url 链接路径
         * 
         * @return {boolean} 如果链接为绝对路径则返回 true , 否则返回 false
         * 
         */

        return /^https?\:\/{2}/.test(url);


    }

    return function(url) {





        return main.call(this, url);
    };

})();

exports['src::url.join'] = (() => {

    let isAbsolute;

    let var_init_locked_1578559752931;





    /**
     * 
     * 将多个链接进行拼接并返回
     * 
     * @import isAbsolute from is.url.absolute
     * 
     * @param {string[]} [...urls] 多个 URL 链接
     * 
     * @return {string} 拼接后的拼接
     * 
     * @scoped
     * 
     */

    const urlSuffixRe = /^\/|\/$/;

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


        if (!var_init_locked_1578559752931) {

            isAbsolute = include('is.url.absolute');

            var_init_locked_1578559752931 = true;
        }




        return main.call(this, ...urls);
    };

})();

exports['src::timer.constructor'] = (() => {









    function main({
        interval,
        duration,
        autoStart
    }) {


        /**
         * 
         * 初始化计时器
         * 
         * @param {object} [config = {}] 参数
         * 
         * @param {number} [config.interval = 1000] time 触发周期时长，默认为一秒种 
         * 
         * @param {number} [config.duration = 60000] 计时时长，默认为一分钟
         * 
         * @param {boolean} [config.autoStart = true] 是否自动启动，默认为自动启动
         * 
         */

        let me = this;

        me.interval = interval;

        me.duration = duration;

        if (autoStart) {

            me.start();
        }

    }

    return function({
        interval = 1000,
        duration = 60000,
        autoStart = true
    } = {}) {





        return main.call(this, {
            interval,
            duration,
            autoStart
        });
    };

})();

exports['src::timer.reset'] = (() => {

    let isDefined;

    let var_init_locked_1578559752936;





    function main() {


        /**
         * 
         * 重置
         * 
         * @import is.defined
         * 
         */

        let me = this,
            {
                intervalId
            } = me;

        if (isDefined(intervalId)) {

            clearInterval(intervalId);

            clearTimeout(intervalId);

            delete me.intervalId;

            delete me.onInterval;
        }

    }

    return function() {


        if (!var_init_locked_1578559752936) {

            isDefined = include('is.defined');

            var_init_locked_1578559752936 = true;
        }




        return main.call(this);
    };

})();

exports['src::timer.end'] = (() => {

    let reset;

    let var_init_locked_1578559752938;

    let var_current_scope_1578559752938;



    function main() {


        /**
         * 
         * 结束计时
         * 
         * @import reset from ..reset scoped
         *
         */

        reset();

        this.fireEvent('timeend');

    }

    return function() {




        if (!var_current_scope_1578559752938 !== this) {

            reset = include('src::timer.reset').bind(this);

            var_current_scope_1578559752938 = this;
        }


        return main.call(this);
    };

})();

exports['src::timer.start'] = (() => {

    let isNumber, end, reset;

    let var_init_locked_1578559752941;

    let var_current_scope_1578559752941;




    /**
     * 
     * 启动计时
     * 
     * @import is.number
     * 
     * @import end from ..end scoped
     * 
     * @import reset from ..reset
     * 
     */

    function onInterval(duration, startTime) {

        let me = this,
            {
                interval,
                onInterval
            } = me,
            remainDuration = duration - (Date.now() - startTime);

        if (remainDuration > 0) {

            me.fireEvent('time');

            if (remainDuration < interval) {

                reset.call(me);

                me.intervalId = setTimeout(onInterval, remainDuration);
            }

        } else {

            reset.call(me);

            me.fireEvent('timeout');
        }
    }

    function main() {

        let me = this,
            {
                interval,
                duration
            } = me;

        end();

        me.fireEvent('timestart');

        me.intervalId = setInterval(me.onInterval = onInterval.bind(me, duration, Date.now()), interval);
    }

    return function() {


        if (!var_init_locked_1578559752941) {

            isNumber = include('is.number');
            reset = include('src::timer.reset');

            var_init_locked_1578559752941 = true;
        }



        if (!var_current_scope_1578559752941 !== this) {

            end = include('src::timer.end').bind(this);

            var_current_scope_1578559752941 = this;
        }


        return main.call(this);
    };

})();

exports['src::timer'] = (() => {

    let mixin_1578559751814__1, extend, constructor, method_start, method_end, isObject;

    let var_init_locked_1578559752944;

    let var_class_1578559752944;



    return function(config) {


        if (!var_init_locked_1578559752944) {

            mixin_1578559751814__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::timer.constructor');
            method_start = include('src::timer.start');
            method_end = include('src::timer.end');
            isObject = include('is.object.simple');

            var_init_locked_1578559752944 = true;
        }



        if (!var_class_1578559752944) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                start(...args) {

                    return method_start.apply(this, args);

                }
                end(...args) {

                    return method_end.apply(this, args);

                }



            }

            var_class_1578559752944 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752944;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::timer';
                }

            };
        }


        return new var_class_1578559752944(config);
    };

})();

exports['src::data.connection.socket.standard'] = (() => {

    let Connection, join, createTimer, add, removeAll, Manager, emptyFn;

    let var_init_locked_1578559752956;

    let var_class_1578559752956;



    return function() {


        if (!var_init_locked_1578559752956) {

            Connection = include('data.connection.socket')();
            join = include('url.join');
            createTimer = include('timer');
            add = include('event.listener.add');
            removeAll = include('event.listener.remove.all');
            Manager = include('src::data.connection.socket.manager')();
            emptyFn = include('function.empty')();

            var_init_locked_1578559752956 = true;
        }



        if (!var_class_1578559752956) {

            /**
             * 
             * 标准推送
             * 
             * @import Connection from data.connection.socket value
             * 
             * @import join from url.join
             * 
             * @import createTimer from timer
             * 
             * @import add from event.listener.add
             * 
             * @import removeAll from event.listener.remove.all
             * 
             * @import Manager from ..manager value
             * 
             * @import emptyFn from function.empty value
             * 
             * @require ws
             * 
             * @class
             * 
             * 
             */

            const WebSocket = require('ws');

            class main extends Connection {

                initialize(url, {
                    path,
                    timeout = 20000
                }) {

                    let me = this;

                    if (path) {

                        url = join(url, path);
                    }

                    me.socketURL = url;

                    me.socketTimeoutTimer = createTimer({
                        duration: timeout,
                        autoStart: false,
                        listeners: {
                            timeout: 'onSocketTimeout',
                            scope: me
                        }
                    });
                }

                onSocketTimeout() {

                    this.fireEvent('connecttimeout');
                }

                onSocketOpen() {

                    let me = this,
                        {
                            socketTimeoutTimer
                        } = me;

                    socketTimeoutTimer.end();

                    me.fireEvent('connect');
                }

                onSocketError() {

                    let me = this,
                        {
                            socket,
                            socketTimeoutTimer
                        } = me;

                    socketTimeoutTimer.end();

                    removeAll(socket);

                    delete me.socket;

                    delete me.disconnectingState;

                    me.fireEvent('lostconnect');
                }

                onSocketClose() {

                    let me = this,
                        {
                            socket,
                            socketTimeoutTimer,
                            disconnectingState
                        } = me;

                    socketTimeoutTimer.end();

                    removeAll(socket);

                    delete me.socket;

                    delete me.disconnectingState;

                    if (disconnectingState) {

                        me.fireEvent('disconnect');

                    } else {

                        me.fireEvent('lostconnect');
                    }
                }

                onSocketMessage({
                    data
                }) {

                    this.acceptMessage(data);
                }

                doConnect() {

                    let me = this,
                        {
                            socketTimeoutTimer,
                            socketURL
                        } = me;

                    socketTimeoutTimer.start();

                    add(me.socket = new WebSocket(socketURL), {
                        open: 'onSocketOpen',
                        close: 'onSocketClose',
                        error: 'onSocketError',
                        message: 'onSocketMessage',
                        scope: me
                    });
                }

                doDisconnect() {

                    this.socket.close();
                }

                send(message) {

                    let me = this,
                        {
                            socket,
                            isConnected
                        } = me;

                    if (isConnected) {

                        socket.send(message);
                    }
                }
            }


            var_class_1578559752956 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752956;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard';
                }

            };
        }


        return var_class_1578559752956;
    };

})();

exports['src::miniprogram.socket'] = (() => {

    let get;

    let var_init_locked_1578559752975;

    let var_class_1578559752975;



    return function() {


        if (!var_init_locked_1578559752975) {

            get = include('function.get');

            var_init_locked_1578559752975 = true;
        }



        if (!var_class_1578559752975) {


            /**
             * 
             * 小程序 socket 类实现
             * 
             * @import get from function.get
             * 
             * @class
             *
             */

            const EventEmitter = require('events');

            function onOpen() {

                this.emit('open');
            }

            function onMessage({
                data
            }) {

                this.emit('message', data);
            }

            function onError() {

                this.emit('error');
            }

            function onClose() {

                this.emit('close');
            }

            function on(name, fn) {

                let me = this;

                me.removeAllListeners(name);

                me.on(name, fn);
            }

            class main extends EventEmitter {

                constructor(url, protocols) {

                    super();

                    let socket = wx.connectSocket({
                            url,
                            protocols
                        }),
                        me = this;

                    socket.onOpen(get(onOpen, me));

                    socket.onMessage(get(onMessage, me));

                    socket.onError(get(onError, me));

                    socket.onClose(get(onClose, me));

                    me.socket = socket;
                }

                get readyState() {

                    return this.socket.readyState;
                }

                set onopen(fn) {

                    on.call(this, 'open', fn);
                }

                set onmessage(fn) {

                    on.call(this, 'message', fn);
                }

                set onerror(fn) {

                    on.call(this, 'error', fn);
                }

                set onclose(fn) {

                    on.call(this, 'close', fn);
                }

                send(data) {

                    this.socket.send({
                        data
                    });
                }

                close() {

                    this.socket.close();
                }

            }

            var_class_1578559752975 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752975;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::miniprogram.socket';
                }

            };
        }


        return var_class_1578559752975;
    };

})();

exports['src::data.connection.socket.standard.miniprogram'] = (() => {

    let Connection, WebSocket;

    let var_init_locked_1578559752977;

    let var_class_1578559752977;



    return function() {


        if (!var_init_locked_1578559752977) {

            Connection = include('data.connection.socket.standard')();
            WebSocket = include('miniprogram.socket')();

            var_init_locked_1578559752977 = true;
        }



        if (!var_class_1578559752977) {

            /**
             * 
             * 基于小程序进行开发
             * 
             * @import Connection from data.connection.socket.standard value
             *
             * @import WebSocket from miniprogram.socket value
             * 
             * @class
             * 
             */

            class main extends Connection {

                get WebSocket() {

                    return WebSocket;
                }
            }

            var_class_1578559752977 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752977;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.miniprogram';
                }

            };
        }


        return var_class_1578559752977;
    };

})();

exports['src::data.connection.socket.standard.normal'] = (() => {

    let Connection;

    let var_init_locked_1578559752996;

    let var_class_1578559752996;



    return function() {


        if (!var_init_locked_1578559752996) {

            Connection = include('data.connection.socket.standard')();

            var_init_locked_1578559752996 = true;
        }



        if (!var_class_1578559752996) {

            /**
             * 
             * 基于标准 WebSocket 进行开发
             * 
             * @import Connection from data.connection.socket.standard value
             * 
             * @require ws
             * 
             * @class
             * 
             */

            const WebSocket = require('ws');

            class main extends Connection {

                get WebSocket() {

                    return WebSocket;
                }


            }

            var_class_1578559752996 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559752996;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.normal';
                }

            };
        }


        return var_class_1578559752996;
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

exports['src::data.reader'] = (() => {

    let isDefined, isArray, isObject, from, isString, empty, isFunction;

    let var_init_locked_1578559753022;

    let var_class_1578559753022;



    return function() {


        if (!var_init_locked_1578559753022) {

            isDefined = include('is.defined');
            isArray = include('is.array');
            isObject = include('is.object.simple');
            from = include('array.from');
            isString = include('is.string');
            empty = include('function.empty')();
            isFunction = include('is.function');

            var_init_locked_1578559753022 = true;
        }



        if (!var_class_1578559753022) {

            /**
             * 
             * 数据读取器
             * 
             * @import is.defined
             * 
             * @import is.array
             * 
             * @import isObject from is.object.simple
             * 
             * @import from from array.from
             * 
             * @import is.string
             * 
             * @import empty from function.empty value
             * 
             * @import is.function
             * 
             * @class
             * 
             */

            class main {

                constructor({
                    root = '.',
                    fields = []
                }) {

                    let me = this;

                    me.rootProperty = root;

                    me.fields = getFields.call(me, fields);
                }

                read(data) {

                    let me = this,
                        rows = getRows.call(me, data),
                        records = [],
                        count = 0;

                    for (let row of rows) {

                        records.push(getRecord.call(me, row, rows, count++, data));
                    }

                    return records;
                }
            }

            function getRows(data) {

                let {
                    rootProperty,
                    getData
                } = this;

                return from(getData(data, rootProperty));
            }

            function getRecord(row, rows, index, data) {

                let {
                    fields
                } = this,
                record = {};

                for (let {
                        name,
                        convert
                    } of fields) {

                    record[name] = convert(row, rows, index, data);
                }

                return record;
            }

            function getFields(fields) {

                let result = [],
                    me = this;

                if (isObject(fields)) {

                    let names = Object.keys(fields);

                    for (let name of names) {

                        let config = fields[name];

                        if (isString(config)) {

                            config = {
                                name,
                                mapping: config
                            }
                        }

                        if (isObject(config)) {

                            result.push(getField.call(me, {
                                ...config,
                                name
                            }));
                        }
                    }

                } else if (isArray(fields)) {

                    for (let field of fields) {

                        if (isString(field)) {

                            field = {
                                name: field,
                                mapping: field
                            };
                        }

                        if (isObject(field)) {

                            result.push(getField.call(me, field));
                        }
                    }
                }

                return result;
            }

            function getField({
                name,
                type,
                mapping,
                convert,
                defaultValue,
                ...options
            }) {

                let {
                    getData
                } = this;

                return {
                    name,
                    convert(data, ...args) {

                        if (isFunction(convert)) {

                            data = convert(data, ...args);

                        } else {

                            if (isString(mapping)) {

                                data = getData(data, mapping);

                            } else {

                                data = getData(data, name);
                            }

                            if (isString(type)) {

                                data = include(`data.convert.${type}`)(data, options);
                            }

                        }

                        return isDefined(data) ? data : defaultValue;
                    }
                };
            }

            var_class_1578559753022 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753022;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.reader';
                }

            };
        }


        return var_class_1578559753022;
    };

})();

exports['src::string.split'] = (() => {

    let isEmpty;

    let var_init_locked_1578559753026;






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


        if (!var_init_locked_1578559753026) {

            isEmpty = include('is.empty');

            var_init_locked_1578559753026 = true;
        }




        return main.call(this, target, splitRe);
    };

})();

exports['src::object.value.get'] = (() => {

    let split, isObject, isArray;

    let var_init_locked_1578559753030;





    function main(data, key) {


        /**
         * 
         * 获得一个对象的键值
         * 
         * @import split from string.split
         * 
         * @import is.object
         * 
         * @import is.array
         * 
         * @param {object} data 对象数据
         * 
         * @param {string} [key = '.'] 对象键值
         * 
         * @return {mixed} 对应对象数据的键值的数据 
         * 
         */

        if (key === '.') {

            return data;
        }

        const arrayItemRe1 = /^(\w+)\[(\d+)\]$/,
            arrayItemRe2 = /^\[(\d+)\]$/;

        if (isObject(data) || isArray(data)) {

            let keys = split(key, /\./),
                result;

            for (let key of keys) {

                if (arrayItemRe1.test(key) || arrayItemRe2.test(key)) {

                    {
                        let keyMatch = key.match(arrayItemRe1);

                        if (keyMatch) {

                            result = data[keyMatch[1]][Number(keyMatch[2])];

                        }
                    }

                    {
                        let keyMatch = key.match(arrayItemRe2);

                        if (keyMatch) {

                            result = data[Number(keyMatch[1])];

                        }
                    }

                } else {

                    result = data[key];
                }

                if (isObject(result) || isArray(result)) {

                    data = result;

                } else {

                    break;
                }
            }

            return result;
        }

    }

    return function(data, key = '.') {


        if (!var_init_locked_1578559753030) {

            split = include('string.split');
            isObject = include('is.object');
            isArray = include('is.array');

            var_init_locked_1578559753030 = true;
        }




        return main.call(this, data, key);
    };

})();

exports['src::data.reader.json'] = (() => {

    let Reader, get;

    let var_init_locked_1578559753035;

    let var_class_1578559753035;



    return function(model) {


        if (!var_init_locked_1578559753035) {

            Reader = include('data.reader')();
            get = include('object.value.get');

            var_init_locked_1578559753035 = true;
        }



        if (!var_class_1578559753035) {

            /**
             * 
             * JSON 数据读取器
             * 
             * @import Reader from data.reader value
             * 
             * @import get from object.value.get
             * 
             * @param {object} model 模型配置
             * 
             */

            class main extends Reader {

                getData(data, path) {

                    return get(data, path);
                }

            }

            var_class_1578559753035 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753035;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.reader.json';
                }

            };
        }


        return new var_class_1578559753035(model);
    };

})();

exports['src::data.proxy.constructor'] = (() => {

    let createProxy, createReader;

    let var_init_locked_1578559753040;





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


        if (!var_init_locked_1578559753040) {

            createProxy = include('object.proxy');
            createReader = include('data.reader.json');

            var_init_locked_1578559753040 = true;
        }




        return main.call(this, {
            reader,
            model
        });
    };

})();

exports['src::data.proxy.read'] = (() => {

    let isPromise;

    let var_init_locked_1578559753045;






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


        if (!var_init_locked_1578559753045) {

            isPromise = include('is.promise');

            var_init_locked_1578559753045 = true;
        }




        return main.call(this, options);
    };

})();

exports['src::data.proxy'] = (() => {

    let mixin_1578559751884__1, extend, constructor, method_read, isObject;

    let var_init_locked_1578559753047;

    let var_class_1578559753047;



    return function() {


        if (!var_init_locked_1578559753047) {

            mixin_1578559751884__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.proxy.constructor');
            method_read = include('src::data.proxy.read');
            isObject = include('is.object.simple');

            var_init_locked_1578559753047 = true;
        }



        if (!var_class_1578559753047) {

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

            var_class_1578559753047 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753047;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy';
                }

            };
        }


        return var_class_1578559753047;
    };

})();

exports['src::data.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1578559753059;

    let var_class_1578559753059;



    return function(options) {


        if (!var_init_locked_1578559753059) {

            Proxy = include('data.proxy')();

            var_init_locked_1578559753059 = true;
        }



        if (!var_class_1578559753059) {


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

            var_class_1578559753059 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753059;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy.memory';
                }

            };
        }


        return new var_class_1578559753059(options);
    };

})();

exports['src::data.store.create'] = (() => {









    function main(model) {


        /**
         * 
         * 创建新的数据存储器
         * 
         * @param {object} model 数据模型定义
         * 
         * @return {data.Store} 创建后的数据存储器
         * 
         */

    }

    return function(model) {





        return main.call(this, model);
    };

})();

exports['src::object.clear'] = (() => {









    function main(data) {


        /**
         * 
         * 清除指定对象的所有键
         * 
         * @param {object} data 对象数据
         * 
         */

        let keys = Object.keys(data);

        for (let key of keys) {

            delete data[key];
        }


    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::object.clone'] = (() => {

    let assign;

    let var_init_locked_1578559753075;





    function main(target) {


        /**
         * 
         * 拷贝对象
         * 
         * @import assign from ..assign
         * 
         * @param {object} target 目标数据
         * 
         * @return {object} 拷贝后的对象
         * 
         */

        return assign({}, target);

    }

    return function(target) {


        if (!var_init_locked_1578559753075) {

            assign = include('src::object.assign');

            var_init_locked_1578559753075 = true;
        }




        return main.call(this, target);
    };

})();

exports['src::math.round'] = (() => {









    function main(data, digit) {


        /**
         * 
         * 实现四舍五入
         * 
         * @param {number} data 数值
         * 
         * @param {number} [digit = 0] 保留小数点位数
         * 
         * @return {number} 四舍五入后的数值
         * 
         */

        if (digit === 0) {

            return Math.round(data);
        }

        return Math.round(data * Math.pow(10, digit)) / Math.pow(10, digit);

    }

    return function(data, digit = 0) {





        return main.call(this, data, digit);
    };

})();

exports['src::math.truncation'] = (() => {









    function main(data, digit) {


        /**
         * 
         * 实现小数点后截断
         * 
         * @param {number} data 数值
         * 
         * @param {number} [digit = 0] 保留小数点位数
         * 
         * @return {number} 截断后的数据
         * 
         */

        if (digit === 0) {

            return Math.trunc(data);
        }

        return Math.trunc(data * Math.pow(10, digit)) / Math.pow(10, digit);

    }

    return function(data, digit = 0) {





        return main.call(this, data, digit);
    };

})();

exports['src::math.digit'] = (() => {









    function main(data) {

        /*
         * 
         * 获取数字的实际小数位数
         * 
         * @param {number} data 数字
         * 
         * @return {number} 小数位数
         * 
         */

        /\.(\d+)$/.exec(String(data));

        return RegExp.$1.length;

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::data.convert.number'] = (() => {

    let isString, isDate, round, truncation, getDigit, isNumber;

    let var_init_locked_1578559753085;





    function main(data, {
        digit,
        keepMode,
        keepDigitRightZero
    }) {


        /**
         * 
         * 将指定数据转换成数值
         * 
         * @import is.string
         * 
         * @import is.date
         * 
         * @import round from math.round
         * 
         * @import truncation from math.truncation
         * 
         * @import getDigit from math.digit
         * 
         * @import is.number
         * 
         * @param {mixed} data 数据
         * 
         * @param {object} [config = {}] 配置
         * 
         * @param {number} [config.digit = 0] 保留的小数点位数
         * 
         * @param {string} [config.keepMode = 'round'] 保留小数法
         * 
         * @param {boolean} [config.keepDigitRightZero = false] 是否保留小数点左边的
         * 
         * @return {number|string} 转换后的数值 
         * 
         */

        if (isString(data)) {

            data = Number(data);
        }

        if (isDate(data)) {

            data = data.getTime();
        }

        if (isNumber(data)) {

            switch (keepMode) {

                case 'round':

                    data = round(data, digit);

                case 'truncation':

                    data = truncation(data, digit);
            }

            if (keepDigitRightZero) {

                let realDigit = getDigit(data);

                data = String(data);

                if (realDigit < digit) {

                    return data.padEnd(data.length + (digit - realDigit), '0');
                }

                return data;
            }

            return data;

        }

        const {
            NEGATIVE_INFINITY,
            POSITIVE_INFINITY
        } = Number;

        if (data === NEGATIVE_INFINITY || data === POSITIVE_INFINITY) {

            return data;
        }

        return NaN;





    }

    return function(data, {
        digit = 0,
        keepMode = 'round',
        keepDigitRightZero = false
    } = {}) {


        if (!var_init_locked_1578559753085) {

            isString = include('is.string');
            isDate = include('is.date');
            round = include('math.round');
            truncation = include('math.truncation');
            getDigit = include('math.digit');
            isNumber = include('is.number');

            var_init_locked_1578559753085 = true;
        }




        return main.call(this, data, {
            digit,
            keepMode,
            keepDigitRightZero
        });
    };

})();

exports['src::data.store'] = (() => {

    let Observable, aclear, oclear, aClone, oClone, from, isObject, isFunction, isNumber, empty, add, remove, generate, isEmpty, isString, insert, toNumber, createReader;

    let var_init_locked_1578559753095;

    let var_class_1578559753095;



    return function() {


        if (!var_init_locked_1578559753095) {

            Observable = include('mixin.observable');
            aclear = include('array.clear');
            oclear = include('object.clear');
            aClone = include('array.clone');
            oClone = include('object.clone');
            from = include('array.from');
            isObject = include('is.object.simple');
            isFunction = include('is.function');
            isNumber = include('is.number');
            empty = include('function.empty')();
            add = include('event.listener.add');
            remove = include('event.listener.remove');
            generate = include('id.generate');
            isEmpty = include('is.empty');
            isObject = include('is.object.simple');
            isFunction = include('is.function');
            isString = include('is.string');
            insert = include('array.insert');
            toNumber = include('data.convert.number');
            createReader = include('data.reader.json');

            var_init_locked_1578559753095 = true;
        }



        if (!var_class_1578559753095) {

            /**
             * 
             * 数据存储器类
             * 
             * @import Observable from mixin.observable
             * 
             * @import aclear from array.clear
             * 
             * @import oclear from object.clear
             * 
             * @import aClone from array.clone
             * 
             * @import oClone from object.clone
             * 
             * @import from from array.from
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.function
             * 
             * @import is.number
             * 
             * @import empty from function.empty value
             * 
             * @import add from event.listener.add
             * 
             * @import remove from event.listener.remove
             * 
             * @import generate from id.generate
             * 
             * @import is.empty
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.function
             * 
             * @import is.string
             * 
             * @import insert from array.insert
             * 
             * @import toNumber from data.convert.number
             * 
             * @import createReader from data.reader.json
             * 
             * @param {object} config 配置
             * 
             * @class
             * 
             */

            function defaultRecordId(record, me) {

                let {
                    idField
                } = me;

                if (!record.hasOwnProperty(idField)) {

                    Object.defineProperty(record, idField, {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value: generate('record-')
                    });
                }

                return record[idField];
            }

            function defaultRecordMerge(record) {

                return record;
            }

            function defaultRecordValid() {

                return true;
            }

            function createFixedRecordPositions(sorts) {

                let results = [];

                for (let sort of sorts) {

                    if (isString(sort)) {

                        sort = {
                            field: sort
                        };
                    }

                    if (isObject(sort)) {

                        let {
                            field,
                            direction = 'asc'
                        } = sort;

                        switch (direction) {

                            case 'asc':

                                sort = (record, appendRecord) => toNumber(record[field]) <= toNumber(appendRecord[field]);

                                break;

                            case 'desc':

                                sort = (record, appendRecord) => toNumber(record[field]) >= toNumber(appendRecord[field]);
                        }
                    }

                    if (isFunction(sort)) {

                        results.push(sort);
                    }
                }

                return results;
            }

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    idField = '_id',
                    id = defaultRecordId,
                    merge = defaultRecordMerge,
                    valid = defaultRecordValid,
                    reader = {},
                    sorts = [],
                    properties = {},
                    isEmpty = false,
                    ...options
                } = {}) {

                    super(options);

                    if (isEmpty === true) {

                        return;
                    }

                    let me = this;

                    me.idField = idField;

                    me.doRecordMerge = merge;

                    me.doRecordId = id;

                    me.doRecordValid = valid;

                    me.data = [];

                    me.ids = {};

                    me.reader = createReader(reader);

                    let names = Object.keys(properties),
                        orginProperties = {},
                        store = this;

                    for (let name of names) {

                        let property = properties[name];

                        if (isFunction(property)) {

                            orginProperties[name] = {
                                enumerable: true,
                                get() {

                                    return property(this, store);
                                }
                            };

                        } else if (isObject(property)) {

                            let {
                                set = empty,
                                    get = empty
                            } = property;

                            orginProperties[name] = {
                                enumerable: true,
                                get() {

                                    return get(this, store);
                                },

                                set(value) {

                                    set(value, this, store);
                                }
                            };
                        }
                    }

                    me.properties = orginProperties;

                    me.fixedRecordPositions = createFixedRecordPositions(sorts);
                }

                clone() {

                    let target = new main({
                            isEmpty: true
                        }),
                        {
                            doRecordMerge,
                            doRecordId,
                            doRecordValid,
                            data,
                            ids,
                            reader,
                            properties,
                            fixedRecordPositions
                        } = this;

                    target.doRecordMerge = doRecordMerge;

                    target.doRecordId = doRecordId;

                    target.doRecordValid = doRecordValid;

                    target.data = aClone(data);

                    target.ids = oClone(ids);

                    target.reader = reader;

                    target.properties = properties;

                    target.fixedRecordPositions = fixedRecordPositions;

                    return target;
                }

                get isEmpty() {

                    return this.data.length === 0;
                }

                pipe(store) {

                    let me = this;

                    me.pipeStore = store;

                    let onPipeStoreLoad = () => {

                            let {
                                pipeData
                            } = this;

                            if (!isEmpty(pipeData)) {

                                store.load(pipeData);
                            }

                        },
                        onPipeStoreChange = () => {

                            let {
                                pipeData
                            } = this;

                            if (!isEmpty(pipeData)) {

                                store.append(pipeData);
                            }

                        };

                    add(me, {
                        load: onPipeStoreLoad,
                        change: onPipeStoreChange
                    });

                    me.onPipeStoreLoad = onPipeStoreLoad;

                    me.onPipeStoreChange = onPipeStoreChange;

                    return store;
                }

                unpipe() {

                    let me = this,
                        {
                            pipeStore,
                            onPipeStoreLoad,
                            onPipeStoreChange
                        } = me;

                    if (pipeStore) {

                        remove(me, {
                            load: onPipeStoreLoad,
                            change: onPipeStoreChange
                        });

                        delete me.pipeStore;

                        delete me.onPipeStoreLoad;

                        delete me.onPipeStoreChange;
                    }
                }

                getRecordById(id) {

                    let me = this,
                        {
                            ids,
                            data
                        } = me;

                    if (ids.hasOwnProperty(id)) {

                        return data[ids[id]];
                    }
                }

                indexOf(record) {

                    let me = this,
                        {
                            doRecordId,
                            ids
                        } = me,
                        index = ids[doRecordId(record, me)];

                    return isNumber(index) ? index : -1;
                }

                getPreviousRecord(record) {

                    let me = this,
                        {
                            data
                        } = me,
                        index = me.indexOf(record);

                    if (index > 0) {

                        return data[index - 1];
                    }
                }

                get last() {

                    let {
                        data,
                        isEmpty
                    } = this;

                    if (!isEmpty) {

                        return data[data.length - 1];
                    }
                }

                append(data, isFireEvent = true) {

                    let me = this,
                        {
                            data: records,
                            doRecordMerge,
                            doRecordValid,
                            doRecordId,
                            reader,
                            properties
                        } = me;

                    data = reader.read(data);

                    let updates = [],
                        appends = [],
                        all = [];

                    for (let record of data) {

                        if (!doRecordValid(record, me)) {

                            continue;
                        }

                        if (properties) {

                            Object.defineProperties(record, properties);
                        }

                        let id = doRecordId(record, me),
                            oldRecord = me.getRecordById(id);

                        if (oldRecord) {

                            record = records[me.indexOf(oldRecord)] = doRecordMerge(record, oldRecord, me);

                            updates.push(record);

                            all.push(record);

                        } else {

                            me.doAppend(record);

                            appends.push(record);

                            all.push(record);

                        }
                    }

                    if (appends.length && isFireEvent) {

                        me.fireEvent('append', appends);

                    }

                    if (updates.length && isFireEvent) {

                        me.fireEvent('update', updates);
                    }

                    if (all.length && isFireEvent) {

                        me.fireEvent('change', all);

                        me.fireEvent('pipedata', all);
                    }

                    return {
                        updates,
                        appends,
                        all
                    };
                }

                getAppendRecordIndex(record) {

                    let me = this,
                        {
                            data,
                            fixedRecordPositions
                        } = me,
                        {
                            length: len
                        } = data,
                        fixedRecordPosition = 0,
                        fixedRecordPositionIndex = 0;

                    for (let i = len - 1; i >= 0; i--) {

                        let item = data[i],
                            j = 0;

                        for (let doFixedRecordPosition of fixedRecordPositions) {

                            if (j > fixedRecordPositionIndex) {

                                break;
                            }

                            if (!doFixedRecordPosition(item, record, me)) {

                                break;
                            }

                            j++;
                        }


                        if (j > fixedRecordPositionIndex) {

                            fixedRecordPositionIndex++;

                            fixedRecordPosition = i + 1;

                        } else if (fixedRecordPositionIndex !== 0) {

                            break;
                        }
                    }

                    if (fixedRecordPositions.length) {

                        return fixedRecordPosition;
                    }

                    return len;
                }

                doAppend(record) {

                    let me = this,
                        {
                            data,
                            ids,
                            doRecordId
                        } = me,
                        id = doRecordId(record, me),
                        index = me.getAppendRecordIndex(record);

                    insert(data, index, record);

                    ids[id] = index;
                }

                load(data) {

                    let me = this;

                    me.clear();

                    me.append(data, false);

                    let {
                        data: realData
                    } = me;

                    me.fireEvent('load', realData);

                    me.fireEvent('pipedata', realData);
                }

                refresh() {

                    let me = this,
                        {
                            ids,
                            doRecordId,
                            data
                        } = me;

                    let count = 0;

                    for (let record of data) {

                        ids[doRecordId(record, me)] = count++;
                    }

                }

                clear() {

                    let me = this,
                        {
                            data,
                            ids
                        } = me;

                    aclear(data);

                    oclear(ids);

                    me.fireEvent('clear');
                }

                get pipeData() {

                    return this.data;
                }
            }

            var_class_1578559753095 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753095;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store';
                }

            };
        }


        return var_class_1578559753095;
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

    let var_init_locked_1578559753113;





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


        if (!var_init_locked_1578559753113) {

            isDefined = include('is.defined');

            var_init_locked_1578559753113 = true;
        }




        return main.call(this, xy, anchor);
    };

})();

exports['src::mixin.region'] = (() => {

    let method_getAnchorXY, method_setAnchorXY, isObject;

    let var_init_locked_1578559753116;





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


        if (!var_init_locked_1578559753116) {

            method_getAnchorXY = include('src::mixin.region.xy.anchor.get');
            method_setAnchorXY = include('src::mixin.region.xy.anchor.set');
            isObject = include('is.object.simple');

            var_init_locked_1578559753116 = true;
        }




        return main.call(this, extend);
    };

})();

exports['src::data.structure.property.define.parent'] = (() => {









    function main(structure, parentStructure) {


        /**
         * 
         * 定义父级数据属性
         * 
         * @param {mixed} structure 数据结构
         * 
         * @param {mixed} parentStructure 父级数据结构
         * 
         */

        Object.defineProperty(structure, '__ZBEE_DATA_PARENT__', {
            value: parentStructure,
            writable: true
        });

    }

    return function(structure, parentStructure) {





        return main.call(this, structure, parentStructure);
    };

})();

exports['src::data.structure.property.define.id'] = (() => {

    let isFunction, generate, from, get, isString;

    let var_init_locked_1578559753123;





    function main(structure, id) {


        /**
         * 
         * 定义数据结构的编号
         * 
         * @import is.function
         * 
         * @import generate from id.generate
         * 
         * @import from from array.from
         * 
         * @import get from object.value.get
         * 
         * @import is.string
         * 
         * @param {mixed} structure 数据结构
         * 
         * @param {mixed} id 编号策略
         * 
         */

        const {
            defineProperty
        } = Object,
        NAME = '__ZBEE_DATA_ID__';

        if (isString(id)) {

            defineProperty(structure, NAME, {
                get() {

                    return get(structure, id);
                }
            });

        } else if (isFunction(id)) {

            defineProperty(structure, NAME, {
                get: id.bind(structure)
            });

        } else {

            id = generate('data-');

            defineProperty(structure, NAME, {
                value: generate('data-')
            });
        }

    }

    return function(structure, id) {


        if (!var_init_locked_1578559753123) {

            isFunction = include('is.function');
            generate = include('id.generate');
            from = include('array.from');
            get = include('object.value.get');
            isString = include('is.string');

            var_init_locked_1578559753123 = true;
        }




        return main.call(this, structure, id);
    };

})();

exports['src::data.structure.property.define.inner'] = (() => {









    function main(structure, raw) {


        /**
         * 
         * 定义内部数据
         * 
         * @param {mixed} structure 数据结构
         * 
         * @param {object} raw 原始数据
         * 
         */

        Object.defineProperty(structure, '__ZBEE_DATA_INNER__', {
            value: {}
        });

    }

    return function(structure, raw) {





        return main.call(this, structure, raw);
    };

})();

exports['src::data.structure.property.define.model'] = (() => {









    function main(structure, model) {


        /**
         * 
         * 定义模型属性
         * 
         * @param {mixed} structure 数据结构
         * 
         * @param {object} model 模型
         * 
         */

        Object.defineProperty(structure, '__ZBEE_DATA_MODEL__', {
            value: model
        });

    }

    return function(structure, model) {





        return main.call(this, structure, model);
    };

})();

exports['src::data.reader.create'] = (() => {

    let get, emptyFn, isFunction, generate, createReader, defineParentProperty, defineIdProperty, defineInnerProperty, defineModelProperty;

    let var_init_locked_1578559753133;





    function main(model, {
        getRootData,
        defineRecordProperty
    }) {

        /**
         * 
         * 生成数据读取器
         * 
         * @import get from object.value.get
         * 
         * @import emptyFn from function.empty value
         * 
         * @import is.function
         * 
         * @import generate from id.generate
         * 
         * @import createReader from data.reader.create
         * 
         * @import defineParentProperty from data.structure.property.define.parent
         * 
         * @import defineIdProperty from data.structure.property.define.id
         * 
         * @import defineInnerProperty from data.structure.property.define.inner
         * 
         * @import defineModelProperty from data.structure.property.define.model
         * 
         * @param {object} model 数据模型定义
         * 
         * @param {object} plugins 插件
         * 
         * @param {function} [plugins.getRootData = data => data] 获得数据
         * 
         * @param {function} plugins.defineRecordProperty 数据字段处理函数
         * 
         * @return {data.Reader} 数据读取对象 
         * 
         */

        const {
            keys,
            defineProperty
        } = Object, {
            root = '.',
            id,
            properties = []
        } = model;

        return {
            read(data) {

                let items = getRootData(data, root),
                    records = [];

                defineParentProperty(records);

                defineModelProperty(records, model);

                for (let item of items) {

                    let record = {},
                        names = keys(properties);

                    defineParentProperty(record, records);

                    defineIdProperty(record, id);

                    defineInnerProperty(record);

                    defineModelProperty(record, model);

                    for (let name of names) {

                        defineRecordProperty(record, name, properties[name], item);
                    }

                    records.push(record);
                }

                return records;
            }
        }

    }

    return function(model, {
        getRootData = data => data,
        defineRecordProperty
    }) {


        if (!var_init_locked_1578559753133) {

            get = include('object.value.get');
            emptyFn = include('function.empty')();
            isFunction = include('is.function');
            generate = include('id.generate');
            createReader = include('data.reader.create');
            defineParentProperty = include('data.structure.property.define.parent');
            defineIdProperty = include('data.structure.property.define.id');
            defineInnerProperty = include('data.structure.property.define.inner');
            defineModelProperty = include('data.structure.property.define.model');

            var_init_locked_1578559753133 = true;
        }




        return main.call(this, model, {
            getRootData,
            defineRecordProperty
        });
    };

})();

exports['src::data.model'] = (() => {

    let createReader;

    let var_init_locked_1578559753138;

    let var_class_1578559753138;



    return function(model) {


        if (!var_init_locked_1578559753138) {

            createReader = include('data.reader.create');

            var_init_locked_1578559753138 = true;
        }



        if (!var_class_1578559753138) {


            /**
             * 
             * 数据模型类
             * 
             * @import createReader from data.reader.create
             * 
             * @param {object} model 数据模型定义
             * 
             * @return {data.Model} 数据模型对象 
             * 
             */

            class main {

                constructor(model) {

                    let me = this;

                    me.reader = createReader(model);

                    me.data = {};
                }

                load(data) {

                    let me = this,
                        {
                            reader
                        } = me;

                    let result = reader.read(data);

                    if (result.length) {

                        me.data = result[0];
                    }
                }
            }

            var_class_1578559753138 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753138;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model';
                }

            };
        }


        return new var_class_1578559753138(model);
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

exports['src::string.capitalize'] = (() => {









    function main(data) {


        /**
         * 
         * 实现首字母大写
         * 
         * @param {string} data 字符串
         * 
         * @return {string} 首字母大写的字符串 
         * 
         */

        return `${data.charAt(0).toUpperCase()}${data.substr(1)}`;


    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::object.property.prefix'] = (() => {







    let var_once_value_1578559753148;

    function main() {

        /**
         * 
         * 生成缓存私有的字段前缀
         * 
         * @once
         * 
         */

        return `$private-${Date.now()}-`;

    }

    return function() {






        if (var_once_value_1578559753148) {

            return var_once_value_1578559753148;

        }
        return var_once_value_1578559753148 = main.call(this);

    };

})();

exports['src::object.property.define'] = (() => {

    let capitalize, getPrefix, isDefined, isFunction;

    let var_init_locked_1578559753151;





    function main(target, name, {
        value,
        writeOnce
    }) {

        /**
         * 
         * 定义一个缓存属性
         * 
         * @import capitalize from string.capitalize
         * 
         * @import getPrefix from object.property.prefix
         * 
         * @import is.defined
         * 
         * @import is.function
         * 
         * @param {object} target 目标对象
         * 
         * @param {string} name 属性名称
         * 
         * @param {object} [options = {}] 属性配置
         * 
         * @param {string} [options.value = false] 属性是否是值类型
         * 
         * @param {string} [options.writeOnce = false] 属性只能被写一次
         * 
         */

        let prefix = getPrefix(),
            optionValue = value;


        Object.defineProperty(target, name, {
            configurable: true,
            enumerable: true,
            set(value) {

                let me = this,
                    innerName = `${prefix}${name}`;

                if (writeOnce) {

                    let oldValue = me[innerName];

                    if (isDefined(oldValue)) {

                        return;
                    }
                }

                if (optionValue) {

                    me[innerName] = value;

                } else {

                    let methodName = `set${capitalize(name)}`;

                    if (methodName in me) {

                        me[propertyName] = me[methodName](value);
                    }
                }
            },
            get() {

                let me = this,
                    innerName = `${prefix}${name}`,
                    method = me[`get${capitalize(name)}`];

                if (optionValue) {

                    return me[innerName];
                }

                if (!me.hasOwnProperty(innerName) && method) {

                    if (isFunction(method) && method.length === 0) {

                        return me[innerName] = method.call(me);
                    }
                }

                return me[innerName];
            }
        });

    }

    return function(target, name, {
        value = false,
        writeOnce = false
    } = {}) {


        if (!var_init_locked_1578559753151) {

            capitalize = include('string.capitalize');
            getPrefix = include('object.property.prefix');
            isDefined = include('is.defined');
            isFunction = include('is.function');

            var_init_locked_1578559753151 = true;
        }




        return main.call(this, target, name, {
            value,
            writeOnce
        });
    };

})();

exports['src::object.properties.define'] = (() => {

    let defineProperty, isArray;

    let var_init_locked_1578559753155;





    function main(target, config) {

        /**
         * 
         * 定义一组缓存属性
         * 
         * @import defineProperty from object.property.define
         *
         * @import is.array
         * 
         * @param {object} target 目标对象
         * 
         * @param {string[]|object} config 属性名称
         * 
         */

        if (isArray(config)) {

            for (let name of config) {

                defineProperty(target, name);
            }

        } else {

            let names = Object.keys(config);

            for (let name of names) {

                defineProperty(target, name, config[name]);
            }
        }

    }

    return function(target, config) {


        if (!var_init_locked_1578559753155) {

            defineProperty = include('object.property.define');
            isArray = include('is.array');

            var_init_locked_1578559753155 = true;
        }




        return main.call(this, target, config);
    };

})();

exports['src::object.property.reset'] = (() => {

    let getPrefix;

    let var_init_locked_1578559753158;





    function main(target, name) {

        /**
         * 
         * 重置属性值
         * 
         * @import getPrefix from object.property.prefix
         * 
         * @param {object} target 目标对象
         * 
         * @param {string} name 属性名称
         * 
         */

        delete target[`${getPrefix()}${name}`];

    }

    return function(target, name) {


        if (!var_init_locked_1578559753158) {

            getPrefix = include('object.property.prefix');

            var_init_locked_1578559753158 = true;
        }




        return main.call(this, target, name);
    };

})();

exports['src::object.properties.reset'] = (() => {

    let resetProperty;

    let var_init_locked_1578559753161;





    function main(target, names) {

        /**
         * 
         * 重置一组缓存属性
         * 
         * @import resetProperty from object.property.reset
         *
         * @param {object} target 目标对象
         * 
         * @param {string[]} names 属性名称
         * 
         */

        for (let name of names) {

            resetProperty(target, name);
        }

    }

    return function(target, names) {


        if (!var_init_locked_1578559753161) {

            resetProperty = include('object.property.reset');

            var_init_locked_1578559753161 = true;
        }




        return main.call(this, target, names);
    };

})();

exports['src::data.model.node.tree.base'] = (() => {

    let Model, insert, remove, region, isEmpty, defineProperties, from, resetProperties;

    let var_init_locked_1578559753166;

    let var_class_1578559753166;



    return function() {


        if (!var_init_locked_1578559753166) {

            Model = include('data.model')();
            insert = include('array.insert');
            remove = include('array.remove');
            region = include('mixin.region');
            isEmpty = include('is.object.empty');
            defineProperties = include('object.properties.define');
            from = include('array.from');
            resetProperties = include('object.properties.reset');

            var_init_locked_1578559753166 = true;
        }



        if (!var_class_1578559753166) {


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
             * @import defineProperties from object.properties.define
             * 
             * @import from from array.from
             * 
             * @import resetProperties from object.properties.reset
             * 
             * @param {mixed} data 数据
             * 
             * @class
             * 
             */

            class main extends Model {

                constructor(config) {

                    super(config);

                    defineProperties(this, [
                        'parentNode',
                        'children',
                        'leafNodes',
                        'depth'
                    ]);
                }

                resetProperties(names) {

                    resetProperties(this, from(names));
                }

                resetAncestorProperties(names) {

                    let node = this;

                    while (node = node.parentNode) {

                        console.log('删除', node.id, names);

                        node.resetProperties(names);

                    }
                }

                getDepth() {

                    let node = this,
                        parentNode,
                        depth = 0;

                    while (parentNode = node.parentNode) {

                        node = parentNode;

                        depth++;
                    }

                    return depth;
                }

                getLeafNodes() {

                    let me = this,
                        {
                            expanded,
                            hidden
                        } = me;

                    if (hidden) {

                        return [];
                    }

                    if (!expanded) {

                        return [
                            me
                        ];

                    }

                    let leafNodes = [],
                        {
                            children
                        } = me;

                    if (children.length === 0) {

                        return [
                            me
                        ];
                    }

                    for (let childNode of children) {

                        leafNodes.push(...childNode.leafNodes);
                    }

                    return leafNodes;
                }

                /**
                 * 
                 * 返回父节点
                 * 
                 * @return {data.model.node.Tree} 父节点
                 * 
                 */
                getParentNode() {

                    let me = this,
                        {
                            store
                        } = me;

                    return store.getById(me.get('parentId'));
                }
                /**
                 * 
                 * 返回子节点
                 * 
                 * @return {array} 父节点
                 * 
                 */
                getChildren() {

                    let {
                        store,
                        id
                    } = this;

                    return store.findRecords('parentId', id);
                }
            }

            var_class_1578559753166 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753166;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree.base';
                }

            };
        }


        return var_class_1578559753166;
    };

})();

exports['src::data.model.node.tree.configurations'] = (() => {









    function main() {


        /**
         * 
         * 字段配置
         * 
         * @return {array} 
         * 
         */

        return [
            'id',
            'parentId',
            {
                name: 'expanded',
                persistent: true,
                defaultValue: false
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

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.selected'] = (() => {









    function main() {


        /**
         * 
         * 节点选定状态
         * 
         * @return {boolean} 如果节点选定，则返回 true , 否则返回 false 
         * 
         */

        return this.get('selected');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.sibling'] = (() => {









    function main(node, offset) {


        /**
         * 
         * 返回兄弟节点
         * 
         * @param {data.model.node.Tree} node 节点
         * 
         * @param {number} offset 偏移量
         * 
         * @return {data.model.node.Tree} 节点 
         * 
         */

        let me = this,
            {
                parentNode
            } = me;

        if (parentNode) {

            let {
                children
            } = parentNode;

            return children[children.indexOf(me) + offset];
        }

    }

    return function(node, offset) {





        return main.call(this, node, offset);
    };

})();

exports['src::data.model.node.tree.node.sibling.previous'] = (() => {

    let getSiblingNode;

    let var_init_locked_1578559753182;

    let var_current_scope_1578559753182;



    function main() {


        /**
         * 
         * 上同级节点
         * 
         * @import getSiblingNode from ....sibling scoped
         * 
         * @return {data.model.node.Tree} 节点
         * 
         */

        return getSiblingNode(this, -1);

    }

    return function() {




        if (!var_current_scope_1578559753182 !== this) {

            getSiblingNode = include('src::data.model.node.tree.node.sibling').bind(this);

            var_current_scope_1578559753182 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.sibling.next'] = (() => {

    let getSiblingNode;

    let var_init_locked_1578559753184;

    let var_current_scope_1578559753184;



    function main() {


        /**
         * 
         * 下同级节点
         * 
         * @import getSiblingNode from ....sibling scoped
         * 
         * @return {data.model.node.Tree} 节点
         * 
         */

        return getSiblingNode(this, 1);

    }

    return function() {




        if (!var_current_scope_1578559753184 !== this) {

            getSiblingNode = include('src::data.model.node.tree.node.sibling').bind(this);

            var_current_scope_1578559753184 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.first'] = (() => {









    function main() {


        /**
         * 
         * 首个子节点
         * 
         * @return {data.model.node.Tree} 节点引用 
         * 
         */

        let {
            children
        } = this;

        if (children.length) {

            return children[0];
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.last'] = (() => {









    function main() {


        /**
         * 
         * 返回最后一个子节点
         * 
         * @return {data.model.node.Tree} 节点引用 
         * 
         */

        let {
            children
        } = this;

        if (children.length) {

            return children[children.length - 1];
        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.expanded'] = (() => {









    function main() {


        /**
         * 
         * 节点展开状态
         * 
         * @return {boolean} 如果节点展开则返回 true , 否则返回 false 
         * 
         */

        return this.get('expanded');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.synchronized'] = (() => {









    function main() {


        /**
         * 
         * 当前节点是否同步
         * 
         * @return {boolean} 如果返回 true , 则表示已同步，否则表示未同步 
         * 
         */

        let {
            isLeaf,
            children
        } = this;

        if (isLeaf) {

            return true;
        }

        return children.length !== 0;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.is.root'] = (() => {









    function main() {


        /**
         * 
         * 是否是根节点
         * 
         * @return {boolean} 如果为根节点则返回 true , 如果不是则返回 false 
         * 
         */

        return !this.parentNode;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.is.leaf'] = (() => {









    function main() {


        /**
         * 
         * 是否为叶子节点
         * 
         * @return {boolean} 如果是叶子节点则返回 true , 否则返回 false 
         * 
         */

        return this.get('leaf');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.hidden'] = (() => {









    function main() {


        /**
         * 
         * 隐藏状态
         * 
         * @return {boolean} 如果返回 true ，则表示隐藏，如果返回 false , 则表示显示 
         * 
         */

        return this.get('hidden');

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::math.region'] = (() => {

    let region;

    let var_init_locked_1578559753203;

    let var_class_1578559753203;



    return function({
        x,
        y,
        width,
        height
    }) {


        if (!var_init_locked_1578559753203) {

            region = include('mixin.region');

            var_init_locked_1578559753203 = true;
        }



        if (!var_class_1578559753203) {


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



            var_class_1578559753203 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753203;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::math.region';
                }

            };
        }


        return new var_class_1578559753203({
            x,
            y,
            width,
            height
        });
    };

})();

exports['src::data.model.node.tree.region'] = (() => {

    let createRegion;

    let var_init_locked_1578559753207;





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


        if (!var_init_locked_1578559753207) {

            createRegion = include('math.region');

            var_init_locked_1578559753207 = true;
        }




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

        let me = this,
            {
                expanded
            } = me;

        if (!expanded) {

            return 0;
        }

        let countHeight = 0,
            {
                children,
                store
            } = this;

        for (let {
                scopeHeight
            } of children) {

            countHeight += scopeHeight;
        }

        countHeight += store.marginBottom * (children.length - 1);

        return countHeight;

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
                expanded
            } = me;

        if (!expanded) {

            return height;
        }

        let {
            childCountScopeHeight,
        } = me;

        return Math.max(height, childCountScopeHeight);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.descendant'] = (() => {









    function main() {


        /**
         * 
         * 获得所有子孙节点
         * 
         * @return {array} 节点集合 
         * 
         */

        let me = this,
            {
                expanded
            } = me;

        if (!expanded) {

            return [];
        }

        let {
            children
        } = me,
        result = [];

        for (let childNode of children) {

            result.push(childNode, ...childNode.descendantNodes);

        }

        return result;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.descendant.first'] = (() => {









    function main() {


        /**
         * 
         * 上边缘子孙节点
         * 
         * @return {array} 节点集合 
         * 
         */

        let node = this,
            {
                expanded,
                hidden
            } = node;

        if (hidden) {

            return [];
        }

        if (!expanded) {

            return [
                node
            ];
        }

        let nodes = [];

        while (true) {

            let {
                firstChildNode
            } = node;

            if (firstChildNode) {

                if (firstChildNode.hidden) {

                    break;
                }

            } else {

                break;
            }

            nodes.push(firstChildNode);

            node = firstChildNode;

        }

        return nodes;

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.model.node.tree.nodes.descendant.last'] = (() => {









    function main() {


        /**
         * 
         * 下边缘子孙节点
         * 
         * @return {array} 节点集合 
         * 
         */

        let node = this,
            {
                expanded,
                hidden
            } = node;

        if (hidden) {

            return [];
        }

        if (!expanded) {

            return [
                node
            ];
        }

        let nodes = [];

        while (true) {

            let {
                lastChildNode
            } = node;

            if (lastChildNode) {

                if (lastChildNode.hidden) {

                    break;
                }

            } else {

                break;
            }

            nodes.push(lastChildNode);

            node = lastChildNode;

        }

        return nodes;

    }

    return function() {





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

exports['src::data.model.node.tree.show'] = (() => {









    function main(isPassive) {


        /**
         * 
         * 显示节点
         * 
         * @param {boolean} [isPassive = false] 是否被动显示
         * 
         */

        let me = this,
            {
                children,
                store,
                expanded
            } = me,
            {
                selectedNode
            } = store;


        me.set('hidden', false);

        me.resetProperties([
            'leafNodes'
        ]);

        if (!isPassive) {

            me.resetAncestorProperties([
                'leafNodes'
            ]);
        }

        if (expanded) {

            for (let childNode of children) {

                childNode.show(true);
            }
        }

    }

    return function(isPassive = false) {





        return main.call(this, isPassive);
    };

})();

exports['src::data.model.node.tree.hide'] = (() => {









    function main(isPassive) {


        /**
         * 
         * 隐藏节点
         * 
         * @param {boolean} [isPassive = false] 是否被动隐藏
         * 
         */

        let me = this,
            {
                children,
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

        me.set({
            hidden: true,
            x: 0,
            y: 0
        });

        me.resetProperties([
            'leafNodes'
        ]);

        if (!isPassive) {

            me.resetAncestorProperties([
                'leafNodes'
            ]);
        }


        for (let childNode of children) {

            childNode.hide(true);
        }

    }

    return function(isPassive = false) {





        return main.call(this, isPassive);
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
                expanded
            } = me;

        if (!expanded) {

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

        let startY = centerY - childCountScopeHeight / 2,
            {
                children
            } = me;

        x += marginRight;

        for (let childNode of children) {

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

                me.synchronize(await store.synchronize(me));
            }

            me.set('expanded', true);

            let {
                children
            } = me;

            for (let childNode of children) {

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
                children
            } = me;

        if (expanded) {

            for (let childNode of children) {

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
                hidden,
                parentNode
            } = me;

        if (!selected) {

            if (!hidden) {

                let {
                    selectedNode
                } = store;

                if (selectedNode) {

                    selectedNode.deselect();
                }

                me.set('selected', true);

                store.selectedNode = me;

                me.fireEvent('select');

            } else if (parentNode) {

                parentNode.select();
            }
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

exports['src::data.model.node.tree.nodes.synchronize'] = (() => {









    function main(nodes) {


        /**
         * 
         * 同步
         * 
         * @param {array} [nodes = []] 同步的子节点
         * 
         */

        let me = this;

        if (!me.synchronized) {

            if (nodes.length === 0) {

                me.set('leaf', true);

            } else {

                me.suspendEvents();

                nodes = me.appendChild(nodes);

                me.resumeEvents();
            }

            me.fireEvent('synchronize', nodes);
        }

    }

    return function(nodes = []) {





        return main.call(this, nodes);
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

    let var_init_locked_1578559753254;

    let var_current_scope_1578559753254;



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




        if (!var_current_scope_1578559753254 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1578559753254 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.select.down'] = (() => {

    let select;

    let var_init_locked_1578559753257;

    let var_current_scope_1578559753257;



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




        if (!var_current_scope_1578559753257 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1578559753257 = this;
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

    let var_init_locked_1578559753266;





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


        if (!var_init_locked_1578559753266) {

            getDistance = include('math.point.distance');

            var_init_locked_1578559753266 = true;
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

            nodes.push(...childNode.getDepthNodes(depth));
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

        me.resetProperties([
            'children',
            'leafNode'
        ]);

        me.fireEvent('append', nodes);

        return nodes;


    }

    return function(node) {





        return main.call(this, node);
    };

})();

exports['src::data.model.node.tree.insert.after'] = (() => {

    let resetProperty;

    let var_init_locked_1578559753278;





    function main(node, existNode) {


        /**
         * 
         * 在指定节点之前插入
         * 
         * @import resetProperty from object.property.reset
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

            me.resetProperties([
                'children',
                'leafNode'
            ]);

            me.fireEvent('insertafter', nodes, existNode);
        }

    }

    return function(node, existNode) {


        if (!var_init_locked_1578559753278) {

            resetProperty = include('object.property.reset');

            var_init_locked_1578559753278 = true;
        }




        return main.call(this, node, existNode);
    };

})();

exports['src::data.model.node.tree.remove'] = (() => {









    function main(node) {


        /**
         * 
         * 删除子节点
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

            me.resetProperties([
                'children',
                'leafNode'
            ]);

            if (children.length === 0) {

                me.set('leaf', true);
            }
        }

    }

    return function(node) {





        return main.call(this, node);
    };

})();

exports['src::data.model.node.tree.contains'] = (() => {









    function main(node) {


        /**
         * 
         * 判断指定节点是否被当前节点所包含
         * 
         * @param {data.model.node.Tree} node  节点
         * 
         * @return {boolean} 如果指定节点为当前节点所包含则返回 true , 否则返回 false  
         * 
         */

        return this.descendantNodes.includes(node);

    }

    return function(node) {





        return main.call(this, node);
    };

})();

exports['src::data.model.node.tree'] = (() => {

    let mixin_1578559751917__1, extend, static_get_fieldConfigurations, get_selected, get_previousSiblingNode, get_nextSiblingNode, get_firstChildNode, get_lastChildNode, get_expanded, get_synchronized, get_isRoot, get_isLeaf, get_hidden, get_region, get_childCountScopeHeight, get_scopeHeight, get_descendantNodes, get_firstDescendantNodes, get_lastDescendantNodes, get_lastLeafNode, method_show, method_hide, method_layout, method_expand, method_collapse, method_select, method_deselect, method_synchronize, method_selectUp, method_selectDown, method_selectLeft, method_selectRight, method_getDepthNodes, method_appendChild, method_insertAfter, method_removeChild, method_contains, isObject;

    let var_init_locked_1578559753289;

    let var_class_1578559753289;



    return function() {


        if (!var_init_locked_1578559753289) {

            mixin_1578559751917__1 = include('mixin.region');
            extend = include('src::data.model.node.tree.base')();
            static_get_fieldConfigurations = include('src::data.model.node.tree.configurations');
            get_selected = include('src::data.model.node.tree.node.selected');
            get_previousSiblingNode = include('src::data.model.node.tree.node.sibling.previous');
            get_nextSiblingNode = include('src::data.model.node.tree.node.sibling.next');
            get_firstChildNode = include('src::data.model.node.tree.node.first');
            get_lastChildNode = include('src::data.model.node.tree.node.last');
            get_expanded = include('src::data.model.node.tree.expanded');
            get_synchronized = include('src::data.model.node.tree.nodes.synchronized');
            get_isRoot = include('src::data.model.node.tree.is.root');
            get_isLeaf = include('src::data.model.node.tree.is.leaf');
            get_hidden = include('src::data.model.node.tree.hidden');
            get_region = include('src::data.model.node.tree.region');
            get_childCountScopeHeight = include('src::data.model.node.tree.height.scope.child');
            get_scopeHeight = include('src::data.model.node.tree.height.scope');
            get_descendantNodes = include('src::data.model.node.tree.nodes.descendant');
            get_firstDescendantNodes = include('src::data.model.node.tree.nodes.descendant.first');
            get_lastDescendantNodes = include('src::data.model.node.tree.nodes.descendant.last');
            get_lastLeafNode = include('src::data.model.node.tree.node.leaf.last');
            method_show = include('src::data.model.node.tree.show');
            method_hide = include('src::data.model.node.tree.hide');
            method_layout = include('src::data.model.node.tree.layout');
            method_expand = include('src::data.model.node.tree.expand');
            method_collapse = include('src::data.model.node.tree.collapse');
            method_select = include('src::data.model.node.tree.select');
            method_deselect = include('src::data.model.node.tree.deselect');
            method_synchronize = include('src::data.model.node.tree.nodes.synchronize');
            method_selectUp = include('src::data.model.node.tree.select.up');
            method_selectDown = include('src::data.model.node.tree.select.down');
            method_selectLeft = include('src::data.model.node.tree.select.left');
            method_selectRight = include('src::data.model.node.tree.select.right');
            method_getDepthNodes = include('src::data.model.node.tree.nodes.depth');
            method_appendChild = include('src::data.model.node.tree.append');
            method_insertAfter = include('src::data.model.node.tree.insert.after');
            method_removeChild = include('src::data.model.node.tree.remove');
            method_contains = include('src::data.model.node.tree.contains');
            isObject = include('is.object.simple');

            var_init_locked_1578559753289 = true;
        }



        if (!var_class_1578559753289) {

            class main extends mixins({
                extend,
                mixins: [include('mixin.region')]
            }) {



                static get fieldConfigurations() {

                    return static_get_fieldConfigurations.call(this);

                }



                show(...args) {

                    return method_show.apply(this, args);

                }
                hide(...args) {

                    return method_hide.apply(this, args);

                }
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
                synchronize(...args) {

                    return method_synchronize.apply(this, args);

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
                contains(...args) {

                    return method_contains.apply(this, args);

                }

                get selected() {

                    return get_selected.call(this);

                }
                get previousSiblingNode() {

                    return get_previousSiblingNode.call(this);

                }
                get nextSiblingNode() {

                    return get_nextSiblingNode.call(this);

                }
                get firstChildNode() {

                    return get_firstChildNode.call(this);

                }
                get lastChildNode() {

                    return get_lastChildNode.call(this);

                }
                get expanded() {

                    return get_expanded.call(this);

                }
                get synchronized() {

                    return get_synchronized.call(this);

                }
                get isRoot() {

                    return get_isRoot.call(this);

                }
                get isLeaf() {

                    return get_isLeaf.call(this);

                }
                get hidden() {

                    return get_hidden.call(this);

                }
                get region() {

                    return get_region.call(this);

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
                get firstDescendantNodes() {

                    return get_firstDescendantNodes.call(this);

                }
                get lastDescendantNodes() {

                    return get_lastDescendantNodes.call(this);

                }
                get lastLeafNode() {

                    return get_lastLeafNode.call(this);

                }

            }

            var_class_1578559753289 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753289;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree';
                }

            };
        }


        return var_class_1578559753289;
    };

})();

exports['src::data.model.node.tree.mind'] = (() => {

    let Model, isEmpty;

    let var_init_locked_1578559753307;

    let var_class_1578559753307;



    return function() {


        if (!var_init_locked_1578559753307) {

            Model = include('src::data.model.node.tree')();
            isEmpty = include('is.object.empty');

            var_init_locked_1578559753307 = true;
        }



        if (!var_class_1578559753307) {


            /**
             * 
             * 脑图节点
             * 
             * @import Model from ....tree value
             * 
             * @import isEmpty from is.object.empty
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
                        ...super.fieldConfigurations,
                        {
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
                        }
                    ];
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

                /**
                 * 
                 * 获取宽度
                 * 
                 * @return {Number}
                 * 
                 */
                get width() {

                    return this.get('width');
                }

                /**
                 * 
                 * 获得高度
                 * 
                 * @return {Number}
                 * 
                 */
                get height() {

                    return this.get('height');
                }
            }

            var_class_1578559753307 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753307;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree.mind';
                }

            };
        }


        return var_class_1578559753307;
    };

})();

exports['src::data.store.tree.base'] = (() => {

    let Store, Model, define, from;

    let var_init_locked_1578559753325;

    let var_class_1578559753325;



    return function() {


        if (!var_init_locked_1578559753325) {

            Store = include('data.store')();
            Model = include('data.model.node.tree.mind')();
            define = include('class.define');
            from = include('array.from');

            var_init_locked_1578559753325 = true;
        }



        if (!var_class_1578559753325) {


            /**
             * 
             * 树型数据存储器
             * 
             * @import Store from data.store value
             * 
             * @import Model from data.model.node.tree.mind value
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
                    rootConfig,
                    synchronize,
                    listeners = {},
                    ...options
                }) {

                    let currentModel;

                    if (fields) {

                        currentModel = define(class extends Model {

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
                        model: currentModel,
                        listeners: [{
                            load: 'onLoad',
                            expand: 'onExpand',
                            collapse: 'onCollapse'
                        }, listeners]
                    });

                    let me = this;

                    me.rootConfig = rootConfig || {};

                    me.synchronize = synchronize || (() => []);
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

                            me.fireEvent('root', node);

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

            var_class_1578559753325 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753325;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.base';
                }

            };
        }


        return var_class_1578559753325;
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

    let var_init_locked_1578559753355;





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


        if (!var_init_locked_1578559753355) {

            from = include('array.from');

            var_init_locked_1578559753355 = true;
        }




        return main.call(this, nodes);
    };

})();

exports['src::data.store.tree'] = (() => {

    let extend, method_insert, method_remove, isObject;

    let var_init_locked_1578559753359;

    let var_class_1578559753359;



    return function() {


        if (!var_init_locked_1578559753359) {

            extend = include('src::data.store.tree.base')();
            method_insert = include('src::data.store.tree.insert');
            method_remove = include('src::data.store.tree.remove');
            isObject = include('is.object.simple');

            var_init_locked_1578559753359 = true;
        }



        if (!var_class_1578559753359) {

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



            }

            var_class_1578559753359 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753359;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree';
                }

            };
        }


        return var_class_1578559753359;
    };

})();

exports['src::data.store.tree.mind'] = (() => {

    let Store;

    let var_init_locked_1578559753386;

    let var_class_1578559753386;



    return function(options) {


        if (!var_init_locked_1578559753386) {

            Store = include('data.store.tree')();

            var_init_locked_1578559753386 = true;
        }



        if (!var_class_1578559753386) {


            /**
             * 
             * 获取脑图实例
             * 
             * @import Store from data.store.tree value
             * 
             * @param {object} options 脑图配置
             * 
             */

            class main extends Store {

                constructor({
                    margin = {},
                    lineOffsetX = 0,
                    ...options
                }) {

                    super(options);

                    let me = this,
                        {
                            bottom: marginBottom = 0,
                            right: marginRight = 0
                        } = margin;

                    me.marginBottom = marginBottom;

                    me.marginRight = marginRight;

                    me.lineOffsetX = lineOffsetX;
                }

                get region() {

                    let {
                        rootNode
                    } = this, {
                        x,
                        y,
                        firstDescendantNodes,
                        lastDescendantNodes,
                        leafNodes
                    } = rootNode;

                    for (let node of firstDescendantNodes) {

                        let {
                            y: nodeY
                        } = node.getAnchorXY('tr');

                        if (y > nodeY) {

                            y = nodeY;
                        }
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

                    let {
                        x: right
                    } = rootNode.getAnchorXY('r');

                    for (let leafNode of leafNodes) {

                        let {
                            x
                        } = leafNode.getAnchorXY('r');

                        if (right < x) {

                            right = x;
                        }
                    }

                    const {
                        min,
                        abs
                    } = Math;

                    x = min(x, 0),
                        y = min(y, 0);

                    return {
                        x: abs(x),
                        y: abs(y),
                        width: right,
                        height: bottom
                    };
                }

                layout() {

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
                            lineOffsetX
                        } = me;

                        me.fireEvent('layout', records, lines(records, region, lineOffsetX));
                    }
                }

                get columns() {

                    let {
                        leafNodes
                    } = this.rootNode;

                    return Math.max(...leafNodes.map(node => node.depth)) + 1;
                }

                get rows() {

                    let {
                        leafNodes
                    } = this.rootNode;

                    return leafNodes.length;
                }
            }

            function lines(nodes, {
                x,
                y
            }, lineOffsetX) {

                let lines = [];

                for (let node of nodes) {

                    if (node.hidden) {

                        continue;
                    }

                    let {
                        x: startX,
                        y: startY
                    } = node.getAnchorXY('r'), {
                        children
                    } = node;

                    startX += lineOffsetX;

                    for (let childNode of children) {

                        if (!nodes.includes(childNode)) {

                            continue;
                        }

                        let {
                            x: endX,
                            y: endY
                        } = childNode.getAnchorXY('l'),
                            points = [
                                startX + x,
                                startY + y,
                                startX + x,
                                endY + y,
                                startX + x,
                                endY + y,
                                endX + x,
                                endY + y
                            ];

                        lines.push({
                            start: node,
                            end: childNode,
                            points
                        });
                    }
                }

                return lines;
            }

            var_class_1578559753386 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753386;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.mind';
                }

            };
        }


        return new var_class_1578559753386(options);
    };

})();

exports['src::data.convert.boolean'] = (() => {

    let isBoolean, isString, isNumber;

    let var_init_locked_1578559753411;





    function main(data) {


        /**
         * 
         * 将指定数据转换成布尔型
         * 
         * @import is.boolean
         * 
         * @import is.string
         * 
         * @import is.number
         *
         * @param {mixed} data 数据
         * 
         * @return {boolean} 转换后的布尔型 
         * 
         */

        if (isBoolean(data)) {

            return data;

        } else if (isString(data)) {

            switch (data) {

                case 'true':

                    return true;

                case 'false':

                    return false;
            }

        } else if (isNumber(data)) {

            return Boolean(data);
        }

        return data !== undefined && data !== null;

    }

    return function(data) {


        if (!var_init_locked_1578559753411) {

            isBoolean = include('is.boolean');
            isString = include('is.string');
            isNumber = include('is.number');

            var_init_locked_1578559753411 = true;
        }




        return main.call(this, data);
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

    let var_init_locked_1578559753416;





    /**
     * 
     * 将字符串转换成日期
     * 
     * @import doFormat from string.format
     * 
     * @param {string} data 字符串
     * 
     * @param {string} [format = 'YYYY-MM-DD'] 日期格式
     * 
     * @return {Date} 日期对象 
     * 
     * @require date-and-time
     * 
     */

    const {
        parse
    } = require('date-and-time');

    function main(data, format) {

        return parse(data, format);
    }



    return function(data, format = 'YYYY-MM-DD') {


        if (!var_init_locked_1578559753416) {

            doFormat = include('string.format');

            var_init_locked_1578559753416 = true;
        }




        return main.call(this, data, format);
    };

})();

exports['src::data.convert.date'] = (() => {

    let isNumber, isString, parse;

    let var_init_locked_1578559753419;





    function main(data, {
        format
    }) {


        /**
         * 
         * 将指定数据转换成日期对象
         * 
         * @import is.number
         * 
         * @import is.string
         * 
         * @import parse from date.parse
         * 
         * @param {mixed} data 数据
         * 
         * @param {object} [config = {}] 配置
         * 
         * @param {string} [config.format] 日期格式字符串
         * 
         * @return {Date} 转换后的日期对象
         * 
         */

        if (isNumber(data)) {

            return new Date(data);
        }

        if (isString(data)) {

            if (/^\d+$/.test(data)) {

                return new Date(Number(data));

            } else if (/^\d{4}\-\d{2}-\d{2}T\d{2}\:\d{2}\:[\d\.]+Z$/.test(data)) {

                return new Date(data);
            }

            return parse(data, format);
        }

        return null;

    }

    return function(data, {
        format
    } = {}) {


        if (!var_init_locked_1578559753419) {

            isNumber = include('is.number');
            isString = include('is.string');
            parse = include('date.parse');

            var_init_locked_1578559753419 = true;
        }




        return main.call(this, data, {
            format
        });
    };

})();

exports['src::browser.canvas.begin'] = (() => {









    function main(context, independent) {


        /**
         * 
         * 图形开始
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {boolean} [independent = true] 是否为独立图形
         * 
         */

        if (independent) {

            context.beginPath();
        }

    }

    return function(context, independent = true) {





        return main.call(this, context, independent);
    };

})();

exports['src::browser.canvas.clear'] = (() => {

    let isNumber;

    let var_init_locked_1578559753424;





    function main(context, {
        x,
        y,
        width,
        height
    }) {


        /**
         * 
         * 清空画板
         * 
         * @import is.number
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {number} [config.x = 0] 清空起始横坐标 
         * 
         * @param {number} [config.y = 0] 清空起始纵坐标
         * 
         * @param {number} config.width 清空宽度
         * 
         * @param {number} config.height 清空高度
         * 
         */

        let {
            canvas
        } = context;

        if (!isNumber(width)) {

            width = canvas.width;
        }

        if (!isNumber(height)) {

            height = canvas.height;
        }

        context.clearRect(x, y, width, height);

    }

    return function(context, {
        x = 0,
        y = 0,
        width,
        height
    } = {}) {


        if (!var_init_locked_1578559753424) {

            isNumber = include('is.number');

            var_init_locked_1578559753424 = true;
        }




        return main.call(this, context, {
            x,
            y,
            width,
            height
        });
    };

})();

exports['src::browser.canvas.data.get'] = (() => {

    let isNumber;

    let var_init_locked_1578559753427;





    function main(context, {
        x,
        y,
        width,
        height
    }) {


        /**
         * 
         * 获取画布数据
         * 
         * @import is.number
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 绘制配置
         * 
         * @param {number} [config.x = 0] 截图横坐标
         * 
         * @param {number} [config.y = 0] 截图纵坐标
         * 
         * @param {number} [config.width] 截图横坐标
         * 
         * @param {number} [config.height] 截图纵坐标
         * 
         * 
         */

        let {
            canvas
        } = context;

        if (!isNumber(width)) {

            width = canvas.width;
        }

        if (!isNumber(height)) {

            height = canvas.height;
        }

        return context.getImageData(x, y, width, height);

    }

    return function(context, {
        x = 0,
        y = 0,
        width,
        height
    } = {}) {


        if (!var_init_locked_1578559753427) {

            isNumber = include('is.number');

            var_init_locked_1578559753427 = true;
        }




        return main.call(this, context, {
            x,
            y,
            width,
            height
        });
    };

})();

exports['src::browser.canvas.data.insert'] = (() => {

    let isNumber;

    let var_init_locked_1578559753429;





    function main(context, {
        data,
        x,
        y
    }) {


        /**
         * 
         * 函数实现说明
         * 
         * @import is.number
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 绘制配置
         * 
         * @param {ImageData} config.data 截图数据
         * 
         * @param {number} [config.x = 0] 截图横坐标
         * 
         * @param {number} [config.y = 0] 截图纵坐标
         * 
         */

        context.putImageData(data, x, y);

    }

    return function(context, {
        data,
        x = 0,
        y = 0
    } = {}) {


        if (!var_init_locked_1578559753429) {

            isNumber = include('is.number');

            var_init_locked_1578559753429 = true;
        }




        return main.call(this, context, {
            data,
            x,
            y
        });
    };

})();

exports['src::browser.canvas.data.set'] = (() => {

    let clear, insert;

    let var_init_locked_1578559753431;





    function main(context, {
        data
    }) {


        /**
         * 
         * 设置画布数据
         * 
         * @import clear from browser.canvas.clear
         * 
         * @import insert from browser.canvas.data.insert
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 绘制配置
         * 
         * @param {ImageData} config.data 截图数据
         * 
         * 
         */

        clear(context);

        insert(context, {
            data
        });

    }

    return function(context, {
        data
    } = {}) {


        if (!var_init_locked_1578559753431) {

            clear = include('browser.canvas.clear');
            insert = include('browser.canvas.data.insert');

            var_init_locked_1578559753431 = true;
        }




        return main.call(this, context, {
            data
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

exports['src::browser.canvas.end'] = (() => {









    function main(context, clip) {

        /**
         * 
         * 图形结束
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {boolean} [clip = false] 是否为剪切路径
         * 
         * 
         */

        if (clip) {

            context.clip();

        } else {

            context.stroke();
        }

    }

    return function(context, clip = false) {





        return main.call(this, context, clip);
    };

})();

exports['src::browser.scale'] = (() => {







    let var_once_value_1578559753440;

    function main() {

        /**
         * 
         * 获得当前浏览器的缩放比率
         * 
         * @return {number} 缩放比率
         * 
         * @once
         * 
         */

        return window.devicePixelRatio;


    }

    return function() {






        if (var_once_value_1578559753440) {

            return var_once_value_1578559753440;

        }
        return var_once_value_1578559753440 = main.call(this);

    };

})();

exports['src::browser.canvas.draw.line.arc'] = (() => {

    let assign, degree2radian, doBegin, doEnd, scale;

    let var_init_locked_1578559753442;





    function main(context, {
        x,
        y,
        r,
        start,
        end,
        counterclockwise,
        independent,
        clip,
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
         * @import doBegin from browser.canvas.begin
         * 
         * @import doEnd from browser.canvas.end
         * 
         * @import scale from browser.scale value
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
         * @param {boolean} [config.independent = true] 是否为独立图形
         * 
         * @param {boolean} [config.clip = false] 是否为剪切路径
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        doBegin(context, independent);

        assign(context, styles);

        context.arc(x * scale, y * scale, r * scale, degree2radian(start), degree2radian(end), counterclockwise);

        doEnd(context, clip);

    }

    return function(context, {
        x,
        y,
        r,
        start = -90,
        end,
        counterclockwise = false,
        independent = true,
        clip = false,
        ...styles
    } = {}) {


        if (!var_init_locked_1578559753442) {

            assign = include('object.assign');
            degree2radian = include('math.degree2radian');
            doBegin = include('browser.canvas.begin');
            doEnd = include('browser.canvas.end');
            scale = include('browser.scale')();

            var_init_locked_1578559753442 = true;
        }




        return main.call(this, context, {
            x,
            y,
            r,
            start,
            end,
            counterclockwise,
            independent,
            clip,
            ...styles
        });
    };

})();

exports['src::browser.canvas.draw.line.bezierCurve'] = (() => {

    let assign, scale;

    let var_init_locked_1578559753447;





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
         * @import scale from browser.scale value
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

            let newPoints = [];

            for (let point of points) {

                newPoints.push(point * scale);
            }

            context.moveTo(...newPoints.slice(0, 2));

            context.bezierCurveTo(...newPoints.slice(2));

            context.stroke();
        }

    }

    return function(context, {
        points = [],
        ...styles
    } = {}) {


        if (!var_init_locked_1578559753447) {

            assign = include('object.assign');
            scale = include('browser.scale')();

            var_init_locked_1578559753447 = true;
        }




        return main.call(this, context, {
            points,
            ...styles
        });
    };

})();

exports['src::browser.canvas.draw.line'] = (() => {

    let assign, scale, doBegin, doEnd;

    let var_init_locked_1578559753450;





    function main(context, {
        points,
        independent,
        clip,
        ...styles
    }) {


        /**
         * 
         * 绘制直线
         * 
         * @import assign from object.assign
         * 
         * @import scale from browser.scale value
         * 
         * @import doBegin from browser.canvas.begin
         * 
         * @import doEnd from browser.canvas.end
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {array} [config.points = []] 画线点集合
         * 
         * @param {boolean} [config.independent = true] 是否为独立图形
         * 
         * @param {boolean} [config.clip = false] 是否为剪切路径
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        if (points.length === 4) {

            doBegin(context, independent);

            assign(context, styles);

            let newPoints = [];

            for (let point of points) {

                newPoints.push(point * scale);
            }

            context.moveTo(...newPoints.slice(0, 2));

            context.lineTo(...newPoints.slice(2));

            doEnd(context, clip);
        }

    }

    return function(context, {
        points = [],
        independent = true,
        clip = false,
        ...styles
    } = {}) {


        if (!var_init_locked_1578559753450) {

            assign = include('object.assign');
            scale = include('browser.scale')();
            doBegin = include('browser.canvas.begin');
            doEnd = include('browser.canvas.end');

            var_init_locked_1578559753450 = true;
        }




        return main.call(this, context, {
            points,
            independent,
            clip,
            ...styles
        });
    };

})();

exports['src::browser.canvas.draw.word'] = (() => {

    let assign, scale;

    let var_init_locked_1578559753454;





    function main(context, {
        text,
        x,
        y,
        ...styles
    }) {


        /**
         * 
         * 绘制文本
         * 
         * @import assign from object.assign
         * 
         * @import scale from browser.scale value
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} config = {} 绘制配置
         * 
         * @param {string} config.text 绘制文本 
         * 
         * @param {number} config.x 画线横坐标
         * 
         * @param {number} config.y 画线纵坐标
         * 
         * @param {object} [...config.styles] 文本样式
         * 
         */

        assign(context, styles);

        context.fillText(text, x * scale, y * scale);

    }

    return function(context, {
        text,
        x,
        y,
        ...styles
    }) {


        if (!var_init_locked_1578559753454) {

            assign = include('object.assign');
            scale = include('browser.scale')();

            var_init_locked_1578559753454 = true;
        }




        return main.call(this, context, {
            text,
            x,
            y,
            ...styles
        });
    };

})();

exports['src::browser.canvas.init'] = (() => {

    let scale;

    let var_init_locked_1578559753457;





    function main(canvas) {


        /**
         * 
         * 初始化画板
         * 
         * @import scale from browser.scale value
         * 
         * @param {HTMLElement} canvas 画板元素
         * 
         * 
         */

        let {
            clientWidth,
            clientHeight
        } = canvas;

        canvas.width = clientWidth * scale;

        canvas.height = clientHeight * scale;



    }

    return function(canvas) {


        if (!var_init_locked_1578559753457) {

            scale = include('browser.scale')();

            var_init_locked_1578559753457 = true;
        }




        return main.call(this, canvas);
    };

})();

exports['src::browser.canvas.player.engine'] = (() => {

    let Observable, isNumber, add;

    let var_init_locked_1578559753460;

    let var_class_1578559753460;



    return function(player) {


        if (!var_init_locked_1578559753460) {

            Observable = include('mixin.observable');
            isNumber = include('is.number');
            add = include('event.listener.add');

            var_init_locked_1578559753460 = true;
        }



        if (!var_class_1578559753460) {


            /**
             * 
             * 播放器引擎
             * 
             * @import Observable from mixin.observable
             * 
             * @import is.number
             * 
             * @import add from event.listener.add
             * 
             * @param {browser.canvas.Player} player 播放器
             * 
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    player,
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.player = player;

                    add(player, 'add', 'onPlayerAdd', {
                        scope: me
                    });
                }

                onPlayerAdd(player, user) {

                    this.start(user);
                }

                get isRunning() {

                    return this.hasOwnProperty('runId');
                }

                start(user) {

                    let me = this,
                        {
                            isRunning,
                            player
                        } = me;

                    if (!isRunning) {

                        user = user || player.activeUser;

                        if (user) {

                            launch.call(me, user);
                        }
                    }
                }

                end() {

                    let me = this,
                        {
                            runId
                        } = me;

                    if (isNumber(runId)) {

                        clearTimeout(runId);
                    }

                    delete me.runId;
                }
            }

            function launch(user) {

                let me = this,
                    {
                        player
                    } = me,
                    {
                        cursor,
                        records
                    } = user;

                let record = records[cursor];

                if (record) {

                    let {
                        api,
                        params,
                        delay
                    } = record;

                    user.cursor = cursor + 1;

                    if (isNumber(delay)) {

                        me.runId = setTimeout(() => {

                            include(`browser.canvas.record.api.${api}`).call(player, params);

                            launch.call(me, user);

                        }, delay);

                    } else {

                        me.runId = null;

                        include(`browser.canvas.record.api.${api}`).call(player, params);

                        launch.call(me, user);
                    }

                } else {

                    me.end();

                    me.start();
                }
            }

            var_class_1578559753460 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753460;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.player.engine';
                }

            };
        }


        return new var_class_1578559753460(player);
    };

})();

exports['src::browser.canvas.player'] = (() => {

    let isObject, isString, isFunction, Observable, getData, setData, createEngine, removeAll;

    let var_init_locked_1578559753474;

    let var_class_1578559753474;



    return function(context) {


        if (!var_init_locked_1578559753474) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            Observable = include('mixin.observable');
            getData = include('browser.canvas.data.get');
            setData = include('browser.canvas.data.set');
            createEngine = include('src::browser.canvas.player.engine');
            removeAll = include('array.remove.all');

            var_init_locked_1578559753474 = true;
        }



        if (!var_class_1578559753474) {

            /**
             * 
             * 画板播放机
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.string
             * 
             * @import is.function
             * 
             * @import Observable from mixin.observable
             * 
             * @import getData from browser.canvas.data.get
             * 
             * @import setData from browser.canvas.data.set
             * 
             * @import createEngine from .player.engine
             * 
             * @import removeAll from array.remove.all
             * 
             * @param {canvas.Context} context 画板的上下文对象
             * 
             */

            const {
                keys
            } = Object;


            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    context,
                    user,
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.context = context;

                    me.users = {};

                    tryCreateUser.call(me, {
                        [user]({
                            delay,
                            ...params
                        }) {

                            return params;
                        }
                    });

                    me.engine = createEngine({
                        player: me
                    });

                    me.activeUsers = [];

                }

                saveData() {

                    let me = this,
                        {
                            context
                        } = me;

                    me.data = getData(context);
                }

                redrawData() {

                    let {
                        data,
                        context
                    } = this;

                    setData(context, {
                        data
                    });
                }

                get activeUser() {

                    let {
                        activeUsers
                    } = this,
                    [
                        user
                    ] = activeUsers;

                    if (user) {

                        removeAll(activeUsers, user);

                        return user;
                    }
                }

                add({
                    user,
                    ...record
                }) {

                    let me = this,
                        {
                            users,
                            activeUsers
                        } = me;

                    tryCreateUser.call(me, user);

                    user = users[user];

                    let {
                        records,
                        convert
                    } = user;

                    records.push(convert(record));

                    activeUsers.push(user);

                    me.fireEvent('add', user, record);
                }
            }

            function tryCreateUser(user) {

                let {
                    users
                } = this;

                if (isString(user)) {

                    user = {
                        [user]: {
                            covnert: record => record
                        }
                    };
                }

                console.log(user);

                if (isObject(user)) {

                    let names = keys(user);

                    for (let name of names) {

                        if (!users.hasOwnProperty(name)) {

                            let config = user[name];

                            if (isFunction(config)) {

                                config = {
                                    convert: config
                                };
                            }

                            if (isObject(config)) {

                                users[name] = {
                                    ...config,
                                    cursor: 0,
                                    records: []
                                };
                            }
                        }
                    }
                }
            }


            var_class_1578559753474 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753474;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.player';
                }

            };
        }


        return new var_class_1578559753474(context);
    };

})();

exports['src::browser.canvas.record.api.brush.move'] = (() => {

    let assign, scale;

    let var_init_locked_1578559753486;





    function main({
        x,
        y,
        ...styles
    }) {


        /**
         * 
         * 画笔移动
         * 
         * @import assign from object.assign
         * 
         * @import scale from browser.scale value
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {number} config.x 画线横坐标
         * 
         * @param {number} config.y 画线纵坐标
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        let {
            context
        } = this;

        assign(context, styles);

        context.lineTo(x * scale, y * scale);

        context.stroke();

    }

    return function({
        x,
        y,
        ...styles
    } = {}) {


        if (!var_init_locked_1578559753486) {

            assign = include('object.assign');
            scale = include('browser.scale')();

            var_init_locked_1578559753486 = true;
        }




        return main.call(this, {
            x,
            y,
            ...styles
        });
    };

})();

exports['src::browser.canvas.record.api.brush.end'] = (() => {

    let move;

    let var_init_locked_1578559753489;

    let var_current_scope_1578559753489;



    function main(config) {


        /**
         * 
         * 画笔终止
         * 
         * @import move from ..move scoped
         * 
         * @param {object} [config] 画线配置
         * 
         */

        move(config);

    }

    return function(config) {




        if (!var_current_scope_1578559753489 !== this) {

            move = include('src::browser.canvas.record.api.brush.move').bind(this);

            var_current_scope_1578559753489 = this;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.brush.start'] = (() => {

    let assign, scale;

    let var_init_locked_1578559753492;





    function main({
        x,
        y,
        ...styles
    }) {


        /**
         * 
         * 画笔开始
         * 
         * @import assign from object.assign
         * 
         * @import scale from browser.scale value
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {number} config.x 画笔开始横坐标
         * 
         * @param {number} config.y 画笔开始纵坐标
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        let {
            context
        } = this;

        context.beginPath();

        assign(context, styles);

        context.moveTo(x * scale, y * scale);

    }

    return function({
        x,
        y,
        ...styles
    } = {}) {


        if (!var_init_locked_1578559753492) {

            assign = include('object.assign');
            scale = include('browser.scale')();

            var_init_locked_1578559753492 = true;
        }




        return main.call(this, {
            x,
            y,
            ...styles
        });
    };

})();

exports['src::browser.canvas.record.api.brush'] = (() => {

    let draw, scale;

    let var_init_locked_1578559753495;





    function main(config) {


        /**
         * 
         * 画笔
         * 
         * @import draw from browser.canvas.draw.line
         * 
         * @import scale from browser.scale value
         * 
         * @param {object} [config] 画线配置
         * 
         * 
         */

        let {
            context
        } = this;

        draw(context, config);

    }

    return function(config) {


        if (!var_init_locked_1578559753495) {

            draw = include('browser.canvas.draw.line');
            scale = include('browser.scale')();

            var_init_locked_1578559753495 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser.move'] = (() => {

    let arc, clear;

    let var_init_locked_1578559753498;





    function main({
        x,
        y,
        size
    }) {


        /**
         * 
         * 橡皮擦移动
         * 
         * @import arc from browser.canvas.draw.line.arc
         * 
         * @import clear from browser.canvas.clear
         * 
         * @param {object} [config = {}] 擦除配置
         * 
         * @param {number} config.x 擦除横坐标
         * 
         * @param {number} config.y 擦除纵坐标
         * 
         * @param {number} config.size 橡皮擦大小
         * 
         */

        let {
            context
        } = this;

        context.save();

        arc(context, {
            x,
            y,
            r: size / 2,
            end: 270,
            clip: true
        });

        clear(context);

        context.restore();

    }

    return function({
        x,
        y,
        size
    } = {}) {


        if (!var_init_locked_1578559753498) {

            arc = include('browser.canvas.draw.line.arc');
            clear = include('browser.canvas.clear');

            var_init_locked_1578559753498 = true;
        }




        return main.call(this, {
            x,
            y,
            size
        });
    };

})();

exports['src::browser.canvas.record.api.eraser.end'] = (() => {

    let move;

    let var_init_locked_1578559753502;

    let var_current_scope_1578559753502;



    function main(config) {


        /**
         * 
         * 橡皮擦移动
         * 
         * @import move from ..move scoped
         * 
         * @param {object} [config] 擦除配置
         * 
         **/

        move(config);

    }

    return function(config) {




        if (!var_current_scope_1578559753502 !== this) {

            move = include('src::browser.canvas.record.api.eraser.move').bind(this);

            var_current_scope_1578559753502 = this;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser.start'] = (() => {

    let move;

    let var_init_locked_1578559753506;

    let var_current_scope_1578559753506;



    function main(config) {


        /**
         * 
         * 橡皮擦开始
         * 
         * @import move from ..move scoped
         * 
         * @param {object} [config] 擦除配置
         * 
         */

        move(config);

    }

    return function(config) {




        if (!var_current_scope_1578559753506 !== this) {

            move = include('src::browser.canvas.record.api.eraser.move').bind(this);

            var_current_scope_1578559753506 = this;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser'] = (() => {

    let arc, clear;

    let var_init_locked_1578559753511;





    function main({
        points,
        size
    }) {


        /**
         * 
         * 橡皮擦
         * 
         * @import arc from browser.canvas.draw.line.arc
         * 
         * @import clear from browser.canvas.clear
         * 
         * @param {object} [config = {}] 擦除配置
         * 
         * @param {array} [config.points = []] 擦除点集合
         * 
         * @param {number} config.size 橡皮擦大小
         * 
         */

        let {
            context
        } = this;

        context.save();

        let {
            length
        } = points;

        for (let i = 0; i < length; i += 2) {

            let x = points[i];

            arc(context, {
                x,
                y: x + 1,
                r: size / 2,
                end: 270,
                clip: true
            });
        }

        clear(context);

        context.restore();

    }

    return function({
        points = [],
        size
    } = {}) {


        if (!var_init_locked_1578559753511) {

            arc = include('browser.canvas.draw.line.arc');
            clear = include('browser.canvas.clear');

            var_init_locked_1578559753511 = true;
        }




        return main.call(this, {
            points,
            size
        });
    };

})();

exports['src::browser.canvas.record.api.word.end'] = (() => {









    function main() {


        /**
         * 
         * 绘制文字结束
         * 
         * 
         */

        this.saveData();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::browser.canvas.record.api.word.input'] = (() => {

    let draw;

    let var_init_locked_1578559753517;





    function main(config) {


        /**
         * 
         * 绘制文字中
         * 
         * @import draw from browser.canvas.draw.word
         * 
         * @param {object} [config] 文字配置
         * 
         */

        let me = this,
            {
                context
            } = me;

        me.redrawData();

        draw(context, config);

    }

    return function(config) {


        if (!var_init_locked_1578559753517) {

            draw = include('browser.canvas.draw.word');

            var_init_locked_1578559753517 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.word.start'] = (() => {









    function main() {


        /**
         * 
         * 绘制文字开始
         * 
         */

        this.saveData();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::browser.canvas.record.api.word'] = (() => {

    let draw;

    let var_init_locked_1578559753522;





    function main(config) {


        /**
         * 
         * 绘制文字
         * 
         * @import draw from browser.canvas.draw.word
         * 
         * @param {object} [config] 文字配置
         * 
         */

        let {
            context
        } = this;

        draw(context, config);

    }

    return function(config) {


        if (!var_init_locked_1578559753522) {

            draw = include('browser.canvas.draw.word');

            var_init_locked_1578559753522 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.canvas.recorder'] = (() => {

    let Observable, arrayClear;

    let var_init_locked_1578559753525;

    let var_class_1578559753525;



    return function(context) {


        if (!var_init_locked_1578559753525) {

            Observable = include('mixin.observable');
            arrayClear = include('array.clear');

            var_init_locked_1578559753525 = true;
        }



        if (!var_class_1578559753525) {


            /**
             * 
             * 画板录制机
             * 
             * @import Observable from mixin.observable
             * 
             * @import array.clear
             * 
             * @param {canvas.Context} context 画板的上下文对象
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    user,
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.user = user;
                }

                begin(api, params) {

                    record.call(this, api, params, 'start', false);
                }

                record(api, params) {

                    record.call(this, api, params, 'process');
                }

                end(api, params) {

                    record.call(this, api, params, 'end', false);
                }
            }

            function record(api, params, type, isCalcDelay = true) {

                let me = this,
                    {
                        user,
                        previousTime
                    } = me,
                    record = {
                        type,
                        user,
                        api,
                        params
                    };

                if (isCalcDelay) {

                    record.delay = Date.now() - previousTime;
                }

                me.previousTime = Date.now();

                me.fireEvent('record', record);
            }

            var_class_1578559753525 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753525;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.recorder';
                }

            };
        }


        return new var_class_1578559753525(context);
    };

})();

exports['src::browser.canvas.word.width'] = (() => {









    function main(context, text) {


        /**
         * 
         * 获得文本的宽度
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {string} text 文本
         * 
         */

        let {
            width
        } = context.measureText(text);

        return width;

    }

    return function(context, text) {





        return main.call(this, context, text);
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

exports['src::is.null'] = (() => {

    let isType;

    let var_init_locked_1578559753539;





    function main(data) {

        /**
         * 
         * 判断给定数据是否定义
         * 
         * @import is.type
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果数据定义则返回 true , 否则返回 false
         * 
         */

        return data === null;

    }

    return function(data) {


        if (!var_init_locked_1578559753539) {

            isType = include('is.type');

            var_init_locked_1578559753539 = true;
        }




        return main.call(this, data);
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

exports['src::directory.paths.file.all'] = (() => {

    let isDirectory, isFile;

    let var_init_locked_1578559753544;






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


        if (!var_init_locked_1578559753544) {

            isDirectory = include('is.directory');
            isFile = include('is.file');

            var_init_locked_1578559753544 = true;
        }




        return main.call(this, path, testRe);
    };

})();

exports['src::directory.create'] = (() => {

    let isDirectory;

    let var_init_locked_1578559753547;






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


        if (!var_init_locked_1578559753547) {

            isDirectory = include('is.directory');

            var_init_locked_1578559753547 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::directory.copy'] = (() => {

    let isDirectory, getAllFilePaths, createDirectory;

    let var_init_locked_1578559753549;





    function main(src, dest) {


        /**
         * 
         * 拷贝文件夹
         * 
         * @import is.directory
         * 
         * @import getAllFilePaths from .paths.file.all
         * 
         * @import createDirectory from directory.create
         * 
         * @param {string} src 拷贝的源文件夹目录
         * 
         * @param {string} dest 目标文件夹目录
         * 
         */

        const {
            copyFileSync
        } = require('fs'), {
            dirname
        } = require('path');

        if (isDirectory(src)) {

            let paths = getAllFilePaths(src),
                destPaths = [];

            for (let path of paths) {

                let destPath = path.replace(dirname(src), dest);

                createDirectory(dirname(destPath));

                copyFileSync(path, destPath);

                destPaths.push(destPath);
            }
        }

    }

    return function(src, dest) {


        if (!var_init_locked_1578559753549) {

            isDirectory = include('is.directory');
            getAllFilePaths = include('src::directory.paths.file.all');
            createDirectory = include('directory.create');

            var_init_locked_1578559753549 = true;
        }




        return main.call(this, src, dest);
    };

})();

exports['src::date.get'] = (() => {

    let isDefined;

    let var_init_locked_1578559753554;





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


        if (!var_init_locked_1578559753554) {

            isDefined = include('is.defined');

            var_init_locked_1578559753554 = true;
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

exports['src::date.format'] = (() => {










    /**
     * 
     * 日期时间格式化
     * 
     * @param {Date} date 日期时间对象
     * 
     * @param {string} [format = 'yyyy-mm-dd'] 日期时间格式化字符串
     * 
     * @return {string} 根据格式化字符串输出的日期数据
     * 
     * @require date-and-time
     *
     * @scoped
     *  
     */

    const {
        format: doFormat
    } = require('date-and-time');

    function main(date, format) {

        return doFormat(date, format);
    }



    return function(date, format = 'yyyy-mm-dd') {





        return main.call(this, date, format);
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

exports['src::date.prev'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1578559753564;





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


        if (!var_init_locked_1578559753564) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1578559753564 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::date.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1578559753568;





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


        if (!var_init_locked_1578559753568) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1578559753568 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::month.date.last'] = (() => {

    let get, prev, getLastDate;

    let var_init_locked_1578559753573;





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


        if (!var_init_locked_1578559753573) {

            get = include('date.get');
            prev = include('date.prev');
            getLastDate = include('src::month.date.last');

            var_init_locked_1578559753573 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::calendar.month'] = (() => {

    let get, getDays, prev, next, getLastDate;

    let var_init_locked_1578559753578;





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


        if (!var_init_locked_1578559753578) {

            get = include('date.get');
            getDays = include('week.days');
            prev = include('date.prev');
            next = include('date.next');
            getLastDate = include('month.date.last');

            var_init_locked_1578559753578 = true;
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

    let var_init_locked_1578559753586;

    let var_current_scope_1578559753586;



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


        if (!var_init_locked_1578559753586) {

            getLastDate = include('month.date.last');
            get = include('date.get.properties');

            var_init_locked_1578559753586 = true;
        }



        if (!var_current_scope_1578559753586 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);

            var_current_scope_1578559753586 = this;
        }


        return main.call(this, year, month, day);
    };

})();

exports['src::calendar.month.view.selectMonth'] = (() => {

    let getDates, deselect, select, getProperty;

    let var_init_locked_1578559753591;

    let var_current_scope_1578559753591;



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


        if (!var_init_locked_1578559753591) {

            getDates = include('src::calendar.month');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753591 = true;
        }



        if (!var_current_scope_1578559753591 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753591 = this;
        }


        return main.call(this, year, month);
    };

})();

exports['src::calendar.month.view.constructor'] = (() => {

    let getProxy, selectMonth, select, getProperty;

    let var_init_locked_1578559753596;

    let var_current_scope_1578559753596;



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


        if (!var_init_locked_1578559753596) {

            getProxy = include('object.proxy');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753596 = true;
        }



        if (!var_current_scope_1578559753596 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753596 = this;
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

    let var_init_locked_1578559753606;





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


        if (!var_init_locked_1578559753606) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1578559753606 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectPrevMonth'] = (() => {

    let prev, getProperty, selectMonth;

    let var_init_locked_1578559753610;

    let var_current_scope_1578559753610;



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


        if (!var_init_locked_1578559753610) {

            prev = include('month.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753610 = true;
        }



        if (!var_current_scope_1578559753610 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1578559753610 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectLeft'] = (() => {

    let isFirst, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1578559753616;

    let var_current_scope_1578559753616;



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


        if (!var_init_locked_1578559753616) {

            isFirst = include('is.week.day.first');
            get = include('date.get');
            prevDate = include('date.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753616 = true;
        }



        if (!var_current_scope_1578559753616 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753616 = this;
        }


        return main.call(this);
    };

})();

exports['src::is.week.day.last'] = (() => {

    let getDays;

    let var_init_locked_1578559753622;





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


        if (!var_init_locked_1578559753622) {

            getDays = include('week.days');

            var_init_locked_1578559753622 = true;
        }




        return main.call(this, date, weekStartDay);
    };

})();

exports['src::month.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1578559753624;





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


        if (!var_init_locked_1578559753624) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1578559753624 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectNextMonth'] = (() => {

    let next, getProperty, selectMonth;

    let var_init_locked_1578559753628;

    let var_current_scope_1578559753628;



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


        if (!var_init_locked_1578559753628) {

            next = include('month.next');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753628 = true;
        }



        if (!var_current_scope_1578559753628 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1578559753628 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectRight'] = (() => {

    let isLast, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1578559753634;

    let var_current_scope_1578559753634;



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


        if (!var_init_locked_1578559753634) {

            isLast = include('is.week.day.last');
            get = include('date.get');
            nextDate = include('date.next');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753634 = true;
        }



        if (!var_current_scope_1578559753634 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753634 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.date.first'] = (() => {

    let get;

    let var_init_locked_1578559753640;





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


        if (!var_init_locked_1578559753640) {

            get = include('date.get');

            var_init_locked_1578559753640 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::month.dates.week.first'] = (() => {

    let getDays, getFirstDate, next;

    let var_init_locked_1578559753643;





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


        if (!var_init_locked_1578559753643) {

            getDays = include('week.days');
            getFirstDate = include('month.date.first');
            next = include('date.next');

            var_init_locked_1578559753643 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.prev.week'] = (() => {

    let prev;

    let var_init_locked_1578559753647;





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


        if (!var_init_locked_1578559753647) {

            prev = include('date.prev');

            var_init_locked_1578559753647 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectUp'] = (() => {

    let getFirstWeekDates, includes, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1578559753652;

    let var_current_scope_1578559753652;



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


        if (!var_init_locked_1578559753652) {

            getFirstWeekDates = include('month.dates.week.first');
            includes = include('array.dates.includes');
            get = include('date.get');
            prevDate = include('date.prev.week');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753652 = true;
        }



        if (!var_current_scope_1578559753652 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753652 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.dates.week.last'] = (() => {

    let getDays, getLastDate, prev;

    let var_init_locked_1578559753658;





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


        if (!var_init_locked_1578559753658) {

            getDays = include('week.days');
            getLastDate = include('month.date.last');
            prev = include('date.prev');

            var_init_locked_1578559753658 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.next.week'] = (() => {

    let next;

    let var_init_locked_1578559753662;





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


        if (!var_init_locked_1578559753662) {

            next = include('date.next');

            var_init_locked_1578559753662 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectDown'] = (() => {

    let getLastWeekDates, includes, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1578559753667;

    let var_current_scope_1578559753667;



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


        if (!var_init_locked_1578559753667) {

            getLastWeekDates = include('month.dates.week.last');
            includes = include('array.dates.includes');
            get = include('date.get');
            nextDate = include('date.next.week');
            getProperty = include('date.get.properties');

            var_init_locked_1578559753667 = true;
        }



        if (!var_current_scope_1578559753667 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1578559753667 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view'] = (() => {

    let extend, constructor, method_select, method_selectLeft, method_selectRight, method_selectUp, method_selectDown, method_selectMonth, method_selectNextMonth, method_selectPrevMonth, method_deselect, isObject;

    let var_init_locked_1578559753674;

    let var_class_1578559753674;



    return function(target, config) {


        if (!var_init_locked_1578559753674) {

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
            isObject = include('is.object.simple');

            var_init_locked_1578559753674 = true;
        }



        if (!var_class_1578559753674) {

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

            var_class_1578559753674 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753674;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::calendar.month.view';
                }

            };
        }


        return new var_class_1578559753674(target, config);
    };

})();

exports['src::browser.event.listeners'] = (() => {

    let map;

    let var_init_locked_1578559753683;



    let var_once_value_1578559753683;

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


        if (!var_init_locked_1578559753683) {

            map = include('map')();

            var_init_locked_1578559753683 = true;
        }





        if (var_once_value_1578559753683) {

            return var_once_value_1578559753683;

        }
        return var_once_value_1578559753683 = main.call(this);

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

    let var_init_locked_1578559753692;





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


        if (!var_init_locked_1578559753692) {

            is = include('src::browser.selector.is');

            var_init_locked_1578559753692 = true;
        }




        return main.call(this, el, selector);
    };

})();

exports['src::browser.event.stop'] = (() => {

    let isObject;

    let var_init_locked_1578559753695;





    function main(e) {


        /**
         * 
         * 停止事件
         * 
         * @import isObject from is.object.simple
         * 
         * @param {Event} e 事件对象
         * 
         */

        e.stopPropagation();

    }

    return function(e) {


        if (!var_init_locked_1578559753695) {

            isObject = include('is.object.simple');

            var_init_locked_1578559753695 = true;
        }




        return main.call(this, e);
    };

})();

exports['src::browser.event.prevent'] = (() => {









    function main(e) {


        /**
         * 
         * 禁用默认事件
         * 
         * @param {Event} e 事件对象
         * 
         */

        e.preventDefault();

    }

    return function(e) {





        return main.call(this, e);
    };

})();

exports['src::browser.event.listener.add'] = (() => {

    let listeners, is, stopEvent, preventEvent, add;

    let var_init_locked_1578559753700;





    function main(target, event, fn, {
        selector,
        stop,
        prevent,
        once
    }) {


        /**
         * 
         * 监听事件
         * 
         * @import listeners from ....listeners value
         * 
         * @import is from browser.selector.parent
         * 
         * @import stopEvent from ....stop
         * 
         * @import preventEvent from ....prevent
         * 
         * @import add from event.listener.add
         * 
         * @param {mixed} target 目标
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {mixed} fn 目标监听回调
         * 
         * @param {object} [config = {}] 配置
         * 
         * @param {string} [config.selector] 选择器
         * 
         * @param {boolean} [config.stop = false] 停止冒泡
         * 
         * @param {boolean} [config.prevent = false] 禁用默认浏览器行为
         * 
         * @param {boolean} [config.once = false] 是否只监听一次
         * 
         * @return {mixed} 返回说明 
         * 
         */

        if (listeners.has(target, event, fn)) {

            return;
        }

        let listener = e => {

            let {
                target
            } = e;

            if (stop) {

                stopEvent(e);
            }

            if (prevent) {

                preventEvent(e);
            }

            if (selector) {

                if (is(target, selector)) {

                    fn(e);
                }

            } else {

                fn(e);
            }
        };

        listeners.set(target, event, fn, listener);

        add(target, event, listener, {
            once
        });

    }

    return function(target, event, fn, {
        selector,
        stop = false,
        prevent = false,
        once = false
    } = {}) {


        if (!var_init_locked_1578559753700) {

            listeners = include('src::browser.event.listeners')();
            is = include('browser.selector.parent');
            stopEvent = include('src::browser.event.stop');
            preventEvent = include('src::browser.event.prevent');
            add = include('event.listener.add');

            var_init_locked_1578559753700 = true;
        }




        return main.call(this, target, event, fn, {
            selector,
            stop,
            prevent,
            once
        });
    };

})();

exports['src::browser.event.listener.global.add'] = (() => {

    let add;

    let var_init_locked_1578559753709;





    function main(event, fn, config) {


        /**
         * 
         * 监听全局事件
         * 
         * @import add from ....add
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * @param {object} [config] 配置
         * 
         * 
         */

        add(window, event, fn, config);

    }

    return function(event, fn, config) {


        if (!var_init_locked_1578559753709) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1578559753709 = true;
        }




        return main.call(this, event, fn, config);
    };

})();

exports['src::browser.event.listener.remove'] = (() => {

    let listeners, remove;

    let var_init_locked_1578559753719;





    function main(target, event, fn) {


        /**
         * 
         * 去除监听事件
         * 
         * @import listeners from ....listeners value
         * 
         * @import remove from event.listener.remove
         * 
         * @param {mixed} target
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {mixed} fn 目标监听回调
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let listener = listeners.get(target, event, fn);

        if (listener) {

            remove(target, event, listener);

            listeners.delete(target, event, fn);
        }

    }

    return function(target, event, fn) {


        if (!var_init_locked_1578559753719) {

            listeners = include('src::browser.event.listeners')();
            remove = include('event.listener.remove');

            var_init_locked_1578559753719 = true;
        }




        return main.call(this, target, event, fn);
    };

})();

exports['src::browser.event.listener.global.remove'] = (() => {

    let remove;

    let var_init_locked_1578559753726;





    function main(event, fn) {


        /**
         * 
         * 去除监听全局事件
         * 
         * @import remove from ....remove
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * 
         */

        remove(window, event, fn);

    }

    return function(event, fn) {


        if (!var_init_locked_1578559753726) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1578559753726 = true;
        }




        return main.call(this, event, fn);
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









    function main(e, name) {


        /**
         * 
         * 如果当前设备处于多点触控时返回，其它时候返回空
         * 
         * @param {Event} e 事件对象
         * 
         * @param {string} name 事件名称
         * 
         * @return {mixed} 触摸事件集合
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

        if (touches && touches.length > 1) {

            return touches;
        }

    }

    return function(e, name) {





        return main.call(this, e, name);
    };

})();

exports['src::is.browser.support.pointer'] = (() => {







    let var_once_value_1578559753740;

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

        return global.hasOwnProperty('onpointerdown');

    }

    return function() {






        if (var_once_value_1578559753740) {

            return var_once_value_1578559753740;

        }
        return var_once_value_1578559753740 = main.call(this);

    };

})();

exports['src::is.browser.support.touch'] = (() => {







    let var_once_value_1578559753742;

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

        return global.hasOwnProperty('ontouchstart');

    }

    return function() {






        if (var_once_value_1578559753742) {

            return var_once_value_1578559753742;

        }
        return var_once_value_1578559753742 = main.call(this);

    };

})();

exports['src::browser.event.name.single'] = (() => {

    let isSupportPointer, isSupportTouch;

    let var_init_locked_1578559753744;





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
        if (isSupportTouch()) {

            return `touch${name}`;

        } else {

            switch (name) {

                case 'start':

                    name = 'down';

                    break;

                case 'end':

                    name = 'up';
            }

            if (isSupportPointer()) {

                return `pointer${name}`;
            }

            return `mouse${name}`;
        }



    }

    return function(name) {


        if (!var_init_locked_1578559753744) {

            isSupportPointer = include('is.browser.support.pointer');
            isSupportTouch = include('is.browser.support.touch');

            var_init_locked_1578559753744 = true;
        }




        return main.call(this, name);
    };

})();

exports['src::browser.event.gesture.tap.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1578559753747;





    function main() {


        /**
         * 
         * 取消监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import un from browser.event.listener.global.remove
         * 
         */

        let me = this,
            {
                onMove,
                onEnd
            } = me;

        un(getName('move'), onMove);

        un(getName('end'), onEnd);

        delete me.onMove;

        delete me.onEnd;



    }

    return function() {


        if (!var_init_locked_1578559753747) {

            getName = include('browser.event.name.single');
            un = include('browser.event.listener.global.remove');

            var_init_locked_1578559753747 = true;
        }




        return main.call(this);
    };

})();

exports['config::event.tap'] = (() => {

    let get;

    let var_init_locked_1578559753755;





    const config = {
        "timeout": 100,
        "moveDistance": 8
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1578559753755) {

            get = include('object.value.get');

            var_init_locked_1578559753755 = true;
        }




        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.tap.move'] = (() => {

    let getEvent, getDistance, getScale, disabled, moveDistance;

    let var_init_locked_1578559753758;

    let var_current_scope_1578559753758;



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
         * @import disabled from ..disabled scoped
         * 
         * @config moveDistance from event.tap...moveDistance
         * 
         * @param {Event} e 事件对象
         * 
         */

        let me = this,
            {
                pageX,
                pageY
            } = getEvent(e, 'move'),
            {
                startPoint,
                dispatch
            } = this;

        if (Math.round(getDistance({
                x: pageX,
                y: pageY
            }, startPoint)) * getScale() >= moveDistance) {

            dispatch('tapcancel');

            disabled();
        }

    }

    return function(e) {


        if (!var_init_locked_1578559753758) {

            getEvent = include('browser.event.single');
            getDistance = include('math.point.distance');
            getScale = include('browser.scale');
            moveDistance = config('event.tap', 'moveDistance');

            var_init_locked_1578559753758 = true;
        }



        if (!var_current_scope_1578559753758 !== this) {

            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1578559753758 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.end'] = (() => {

    let getEvent, disabled, stop;

    let var_init_locked_1578559753767;

    let var_current_scope_1578559753767;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import getEvent from browser.event.single
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import stop from browser.event.stop
         * 
         * @param {Event} e 事件对象
         * 
         */

        this.dispatch('tap', {
            nativeEvent: getEvent(e, 'end')
        });

        disabled();



    }

    return function(e) {


        if (!var_init_locked_1578559753767) {

            getEvent = include('browser.event.single');
            stop = include('browser.event.stop');

            var_init_locked_1578559753767 = true;
        }



        if (!var_current_scope_1578559753767 !== this) {

            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1578559753767 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.enabled'] = (() => {

    let getName, onMove, onEnd, on;

    let var_init_locked_1578559753776;

    let var_current_scope_1578559753776;



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
         * @import on from browser.event.listener.global.add
         * 
         */

        let me = this;

        on(getName('move'), me.onMove = onMove);

        on(getName('end'), me.onEnd = onEnd);



    }

    return function() {


        if (!var_init_locked_1578559753776) {

            getName = include('browser.event.name.single');
            on = include('browser.event.listener.global.add');

            var_init_locked_1578559753776 = true;
        }



        if (!var_current_scope_1578559753776 !== this) {

            onMove = include('src::browser.event.gesture.tap.move').bind(this);
            onEnd = include('src::browser.event.gesture.tap.end').bind(this);

            var_current_scope_1578559753776 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.start.name'] = (() => {

    let getName;

    let var_init_locked_1578559753788;





    function main() {

        /**
         * 
         * 获得启动监听事件名称
         * 
         * @import getName from browser.event.name.single
         * 
         * @return {string}
         * 
         */

        return getName('start');


    }

    return function() {


        if (!var_init_locked_1578559753788) {

            getName = include('browser.event.name.single');

            var_init_locked_1578559753788 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.start'] = (() => {

    let getEvent, getTouchEvents, stop, enabled, disabled, srcBrowserEventGestureTapStartName;

    let var_init_locked_1578559753791;

    let var_current_scope_1578559753791;



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
         * @import .start.name
         *
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        if (getTouchEvents(e, 'start')) {

            disabled();

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


        if (!var_init_locked_1578559753791) {

            getEvent = include('browser.event.single');
            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            srcBrowserEventGestureTapStartName = include('src::browser.event.gesture.tap.start.name');

            var_init_locked_1578559753791 = true;
        }



        if (!var_current_scope_1578559753791 !== this) {

            enabled = include('src::browser.event.gesture.tap.enabled').bind(this);
            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1578559753791 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::move.drag'] = (() => {









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

exports['src::browser.event.gesture.drag.info.update'] = (() => {









    function main(axis, updatePrevious) {


        /**
         * 
         * 刷新拖放信息
         * 
         * @param {string} axis 轴名称
         * 
         * @param {boolean} updatePrevious 是否更新上一次信息
         * 
         */

        let {
            info,
            startPoint,
            previousPoint,
            lastPoint,
            startTime
        } = this;


        let time = Date.now(),
            value = lastPoint[axis],
            previousValue = previousPoint[axis],
            startValue = startPoint[axis],
            delta = value - startValue,
            direction = info.direction,
            capAxis = axis.toUpperCase(),
            previousFlick = info.previous[axis],
            previousDelta;

        previousDelta = info.delta[axis];
        info.delta[axis] = delta;
        info.absDelta[axis] = Math.abs(delta);

        if (updatePrevious && value !== previousFlick && value !== info[axis] && time - info.previousTime[axis] >= 50) {

            info.previous[axis] = info[axis];

            info.previousTime[axis] = info.time;
        }

        info[axis] = value;

        if (value > previousValue) {

            direction[axis] = 1;
        } else if (value < previousValue) {

            direction[axis] = -1;
        }

        info['start' + capAxis] = startPoint[axis];
        info['previous' + capAxis] = info.previous[axis];
        info['page' + capAxis] = info[axis];
        info['delta' + capAxis] = info.delta[axis];
        info['absDelta' + capAxis] = info.absDelta[axis];
        info['previousDelta' + capAxis] = previousDelta;
        info.startTime = startTime;

    }

    return function(axis, updatePrevious) {





        return main.call(this, axis, updatePrevious);
    };

})();

exports['src::browser.event.gesture.drag.end.axis'] = (() => {









    function main(axis, info) {


        /**
         * 
         * 计算拖放速度
         * 
         * @param {string} axis 轴信息
         * 
         * @param {object} info 拖放信息
         * 
         */

        let duration = info.time - info.previousTime[axis];

        if (duration > 0) {

            info.flick.velocity[axis] = (info[axis] - info.previous[axis]) / duration;
        }

    }

    return function(axis, info) {





        return main.call(this, axis, info);
    };

})();

exports['src::browser.event.gesture.drag.end'] = (() => {

    let prevent, getEvent, updateInfo, onAxisEnd, disabled;

    let var_init_locked_1578559753813;

    let var_current_scope_1578559753813;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import prevent from browser.event.prevent
         * 
         * @import getEvent from browser.event.single
         * 
         * @import updateInfo from ..info.update scoped
         * 
         * @import onAxisEnd from .end.axis scoped
         * 
         * @import disabled from ..disabled scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        prevent(e);

        let me = this,
            {
                info,
                dispatch
            } = me,
            {
                pageX: x,
                pageY: y
            } = getEvent(e, 'end');

        me.lastPoint = {
            x,
            y
        };

        updateInfo('x');

        updateInfo('y');

        info.time = Date.now();

        onAxisEnd('x', info);

        onAxisEnd('y', info);

        dispatch('dragend', info);

        disabled();



    }

    return function(e) {


        if (!var_init_locked_1578559753813) {

            prevent = include('browser.event.prevent');
            getEvent = include('browser.event.single');

            var_init_locked_1578559753813 = true;
        }



        if (!var_current_scope_1578559753813 !== this) {

            updateInfo = include('src::browser.event.gesture.drag.info.update').bind(this);
            onAxisEnd = include('src::browser.event.gesture.drag.end.axis').bind(this);
            disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

            var_current_scope_1578559753813 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.disabled'] = (() => {

    let getName, onMove, onEnd, un;

    let var_init_locked_1578559753823;

    let var_current_scope_1578559753823;



    function main() {


        /**
         * 
         * 禁用监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import onMove from move.drag scoped
         * 
         * @import onEnd from ..end scoped
         * 
         * @import un from browser.event.listener.global.remove
         * 
         */

        let me = this,
            {
                onStart,
                onMove,
                onEnd
            } = me;

        un(getName('move'), onStart);

        un(getName('move'), onMove);

        un(getName('end'), onEnd);

        delete me.onStart;

        delete me.onMove;

        delete me.onEnd;

        delete me.info;

        delete me.startTime;

        delete me.startPoint;

    }

    return function() {


        if (!var_init_locked_1578559753823) {

            getName = include('browser.event.name.single');
            un = include('browser.event.listener.global.remove');

            var_init_locked_1578559753823 = true;
        }



        if (!var_current_scope_1578559753823 !== this) {

            onMove = include('move.drag').bind(this);
            onEnd = include('src::browser.event.gesture.drag.end').bind(this);

            var_current_scope_1578559753823 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.drag.move.drag'] = (() => {

    let prevent, getEvent, updateInfo;

    let var_init_locked_1578559753834;

    let var_current_scope_1578559753834;



    function main(e) {


        /**
         * 
         * 拖动事件监听
         * 
         * @import prevent from browser.event.prevent
         * 
         * @import getEvent from browser.event.single
         * 
         * @import updateInfo from ....info.update scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        prevent(e);

        let me = this,
            {
                pageX: x,
                pageY: y
            } = getEvent(e, 'move'),
            {
                lastPoint,
                dispatch
            } = me;

        if (lastPoint) {

            me.previousPoint = lastPoint;
        }

        me.lastPoint = {
            x,
            y
        };

        updateInfo('x', true);

        updateInfo('y', true);

        let {
            info
        } = me;

        info.time = Date.now();

        dispatch('drag', info);

    }

    return function(e) {


        if (!var_init_locked_1578559753834) {

            prevent = include('browser.event.prevent');
            getEvent = include('browser.event.single');

            var_init_locked_1578559753834 = true;
        }



        if (!var_current_scope_1578559753834 !== this) {

            updateInfo = include('src::browser.event.gesture.drag.info.update').bind(this);

            var_current_scope_1578559753834 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.enabled'] = (() => {

    let getName, onMove, onEnd, on;

    let var_init_locked_1578559753837;

    let var_current_scope_1578559753837;



    function main() {


        /**
         * 
         * 启用监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import onMove from .move.drag scoped
         * 
         * @import onEnd from ..end scoped
         * 
         * @import on from browser.event.listener.global.add
         * 
         */

        let me = this;

        on(getName('move'), me.onMove = onMove);

        on(getName('end'), me.onEnd = onEnd);


    }

    return function() {


        if (!var_init_locked_1578559753837) {

            getName = include('browser.event.name.single');
            on = include('browser.event.listener.global.add');

            var_init_locked_1578559753837 = true;
        }



        if (!var_current_scope_1578559753837 !== this) {

            onMove = include('src::browser.event.gesture.drag.move.drag').bind(this);
            onEnd = include('src::browser.event.gesture.drag.end').bind(this);

            var_current_scope_1578559753837 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.drag.info.reset'] = (() => {









    function main(axis) {


        /**
         * 
         * 刷新拖放信息
         * 
         * @param {string} axis 轴名称
         * 
         */

        let {
            info,
            startPoint,
            lastPoint,
            startTime
        } = this;

        let value = lastPoint[axis],
            startValue = startPoint[axis],
            delta = value - startValue,
            capAxis = axis.toUpperCase();

        info.delta[axis] = delta;
        info.absDelta[axis] = Math.abs(delta);

        info.previousTime[axis] = startTime;
        info.previous[axis] = startValue;
        info[axis] = value;
        info.direction[axis] = 0;

        info['start' + capAxis] = startPoint[axis];
        info['previous' + capAxis] = info.previous[axis];
        info['page' + capAxis] = info[axis];
        info['delta' + capAxis] = info.delta[axis];
        info['absDelta' + capAxis] = info.absDelta[axis];
        info['previousDelta' + capAxis] = 0;
        info.startTime = startTime;

    }

    return function(axis) {





        return main.call(this, axis);
    };

})();

exports['config::event.drag'] = (() => {

    let get;

    let var_init_locked_1578559753852;





    const config = {
        "minDistance": 8
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1578559753852) {

            get = include('object.value.get');

            var_init_locked_1578559753852 = true;
        }




        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.drag.move.start'] = (() => {

    let prevent, getEvent, getName, enabled, scale, resetInfo, getDistance, un, minDistance;

    let var_init_locked_1578559753857;

    let var_current_scope_1578559753857;



    function main(e) {

        /**
         * 
         * 检查是否启用拖曳事件
         * 
         * @import prevent from browser.event.prevent
         * 
         * @import getEvent from browser.event.single
         * 
         * @import getName from browser.event.name.single
         * 
         * @import enabled from ....enabled scoped
         * 
         * @import scale from browser.scale
         * 
         * @import resetInfo from ....info.reset scoped
         * 
         * @import getDistance from math.point.distance
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @config minDistance from event.drag...minDistance
         * 
         * @param {Event} e 事件对象
         * 
         */


        prevent(e);

        let me = this,
            {
                pageX: x,
                pageY: y
            } = getEvent(e, 'move'),
            {
                startPoint,
                info,
                dispatch
            } = me,
            point = {
                x,
                y
            };

        if (Math.round(getDistance(startPoint, point)) * scale() >= minDistance) {

            me.previousPoint = point;

            me.lastPoint = point;

            resetInfo('x');

            resetInfo('y');

            info.time = Date.now();

            dispatch('dragstart', info);

            un(getName('move'), me.onStart);

            un(getName('end'), me.onEnd);

            enabled();
        }

    }

    return function(e) {


        if (!var_init_locked_1578559753857) {

            prevent = include('browser.event.prevent');
            getEvent = include('browser.event.single');
            getName = include('browser.event.name.single');
            scale = include('browser.scale');
            getDistance = include('math.point.distance');
            un = include('browser.event.listener.global.remove');
            minDistance = config('event.drag', 'minDistance');

            var_init_locked_1578559753857 = true;
        }



        if (!var_current_scope_1578559753857 !== this) {

            enabled = include('src::browser.event.gesture.drag.enabled').bind(this);
            resetInfo = include('src::browser.event.gesture.drag.info.reset').bind(this);

            var_current_scope_1578559753857 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.start.name'] = (() => {

    let getName;

    let var_init_locked_1578559753870;





    function main() {

        /**
         * 
         * 获得启动监听事件名称
         * 
         * @import getName from browser.event.name.single
         * 
         * @return {string}
         * 
         */

        return getName('start');

    }

    return function() {


        if (!var_init_locked_1578559753870) {

            getName = include('browser.event.name.single');

            var_init_locked_1578559753870 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.drag.start'] = (() => {

    let prevent, stop, getTouchEvents, getEvent, disabled, getName, on, onStart, srcBrowserEventGestureDragStartName;

    let var_init_locked_1578559753874;

    let var_current_scope_1578559753874;



    function main(e) {


        /**
         * 
         * 启动事件监听
         * 
         * @import prevent from browser.event.prevent
         * 
         * @import stop from browser.event.stop
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import getEvent from browser.event.single
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import getName from browser.event.name.single
         * 
         * @import on from browser.event.listener.global.add
         * 
         * @import onStart from ..move.start scoped
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import .start.name
         * 
         * @param {Event} e 事件对象
         * 
         */

        prevent(e);

        stop(e);

        if (getTouchEvents(e, 'start')) {

            disabled();

            return;

        }

        let me = this,
            {
                pageX: x,
                pageY: y
            } = getEvent(e, 'start');

        me.info = {
            previous: {
                x: 0,
                y: 0
            },
            x: 0,
            y: 0,
            delta: {
                x: 0,
                y: 0
            },
            absDelta: {
                x: 0,
                y: 0
            },
            flick: {
                velocity: {
                    x: 0,
                    y: 0
                }
            },
            direction: {
                x: 0,
                y: 0
            },
            time: 0,
            previousTime: {
                x: 0,
                y: 0
            }
        };

        me.startTime = Date.now();

        me.startPoint = {
            x,
            y
        };

        on(getName('move'), me.onStart = onStart);

        on(getName('end'), me.onEnd = disabled, {
            once: true
        });

    }

    return function(e) {


        if (!var_init_locked_1578559753874) {

            prevent = include('browser.event.prevent');
            stop = include('browser.event.stop');
            getTouchEvents = include('browser.event.touches');
            getEvent = include('browser.event.single');
            getName = include('browser.event.name.single');
            on = include('browser.event.listener.global.add');
            srcBrowserEventGestureDragStartName = include('src::browser.event.gesture.drag.start.name');

            var_init_locked_1578559753874 = true;
        }



        if (!var_current_scope_1578559753874 !== this) {

            disabled = include('src::browser.event.gesture.drag.disabled').bind(this);
            onStart = include('src::browser.event.gesture.drag.move.start').bind(this);
            disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

            var_current_scope_1578559753874 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.move.pinch'] = (() => {

    let getTouchEvents, stop, getDistance, un, onMove;

    let var_init_locked_1578559753889;

    let var_current_scope_1578559753889;



    function main(e) {

        /**
         * 
         * 缩放进行事件监听
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import stop from browser.event.stop
         * 
         * @import getDistance from math.point.distance
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @import onMove from .pinch scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        let touches = getTouchEvents(e, 'move'),
            [
                firstTouch,
                lastTouch
            ] = touches,
            distance = getDistance({
                x: firstTouch.pageX,
                y: firstTouch.pageY
            }, {
                x: lastTouch.pageX,
                y: lastTouch.pageY
            }),
            {
                startDistance,
                dispatch
            } = this;

        dispatch('pinch', {
            distance,
            scale: distance / startDistance
        });

    }

    return function(e) {


        if (!var_init_locked_1578559753889) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            getDistance = include('math.point.distance');
            un = include('browser.event.listener.global.remove');

            var_init_locked_1578559753889 = true;
        }



        if (!var_current_scope_1578559753889 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

            var_current_scope_1578559753889 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.move.start'] = (() => {

    let getTouchEvents, stop, getDistance, un, on, onMove;

    let var_init_locked_1578559753898;

    let var_current_scope_1578559753898;



    function main(e) {

        /**
         * 
         * 缩放开始事件监听
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import stop from browser.event.stop
         * 
         * @import getDistance from math.point.distance
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @import on from browser.event.listener.global.add
         * 
         * @import onMove from .pinch scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        let touches = getTouchEvents(e, 'move'),
            [
                firstTouch,
                lastTouch
            ] = touches,
            distance = getDistance({
                x: firstTouch.pageX,
                y: firstTouch.pageY
            }, {
                x: lastTouch.pageX,
                y: lastTouch.pageY
            }),
            me = this;

        if (distance === 0) {

            return;
        }

        let {
            el,
            dispatch
        } = me;

        me.startDistance = distance;

        dispatch('pinchstart', {
            distance,
            scale: 1
        });

        un('touchmove', me.onStart);

        on('touchmove', me.onMove = onMove);

    }

    return function(e) {


        if (!var_init_locked_1578559753898) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            getDistance = include('math.point.distance');
            un = include('browser.event.listener.global.remove');
            on = include('browser.event.listener.global.add');

            var_init_locked_1578559753898 = true;
        }



        if (!var_current_scope_1578559753898 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

            var_current_scope_1578559753898 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.disabled'] = (() => {

    let un;

    let var_init_locked_1578559753909;





    function main() {

        /**
         * 
         * 禁用事件
         * 
         * @import un from browser.event.listener.global.remove
         * 
         */

        let me = this,
            {
                onStart,
                onMove,
                onEnd
            } = me;

        un('touchmove', onStart);

        un('touchmove', onMove);

        un('touchend', onEnd);

        delete me.onStart;

        delete me.onMove;

        delete me.onEnd;

        delete me.startDistance;


    }

    return function() {


        if (!var_init_locked_1578559753909) {

            un = include('browser.event.listener.global.remove');

            var_init_locked_1578559753909 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.pinch.end'] = (() => {

    let stop, disabled;

    let var_init_locked_1578559753916;

    let var_current_scope_1578559753916;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import stop from browser.event.stop
         * 
         * @import disabled from ..disabled scoped
         * 
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        let me = this,
            {
                dispatch
            } = me;

        disabled();

        dispatch('pinchend');


    }

    return function(e) {


        if (!var_init_locked_1578559753916) {

            stop = include('browser.event.stop');

            var_init_locked_1578559753916 = true;
        }



        if (!var_current_scope_1578559753916 !== this) {

            disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

            var_current_scope_1578559753916 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.enabled'] = (() => {

    let on, onMove, onEnd;

    let var_init_locked_1578559753925;

    let var_current_scope_1578559753925;



    function main() {

        /**
         * 
         * 启用事件
         * 
         * @import on from browser.event.listener.global.add
         * 
         * @import onMove from .move.start scoped
         * 
         * @import onEnd from .end scoped
         * 
         */

        let me = this;

        on('touchmove', me.onStart = onMove);

        on('touchend', me.onEnd = onEnd);

    }

    return function() {


        if (!var_init_locked_1578559753925) {

            on = include('browser.event.listener.global.add');

            var_init_locked_1578559753925 = true;
        }



        if (!var_current_scope_1578559753925 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.start').bind(this);
            onEnd = include('src::browser.event.gesture.pinch.end').bind(this);

            var_current_scope_1578559753925 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.pinch.start.name'] = (() => {









    function main() {

        /**
         * 
         * 获得启动监听事件名称
         * 
         * @return {string}
         * 
         */

        return 'touchstart';


    }

    return function() {





        return main.call(this);
    };

})();

exports['src::browser.event.gesture.pinch.start'] = (() => {

    let getTouchEvents, stop, on, enabled, disabled, srcBrowserEventGesturePinchStartName;

    let var_init_locked_1578559753939;

    let var_current_scope_1578559753939;



    function main(e) {


        /**
         * 
         * 开始事件监听
         * 
         * @import getTouchEvents from browser.event.touches
         * 
         * @import stop from browser.event.stop
         * 
         * @import on from browser.event.listener.global.add
         * 
         * @import enabled from ..enabled scoped
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import .start.name
         *
         * @param {Event} e 事件对象
         * 
         */

        stop(e);

        let me = this;

        if (me.onStart) {

            disabled();
        }

        let touches = getTouchEvents(e, 'start');

        if (touches) {

            enabled();
        }


    }

    return function(e) {


        if (!var_init_locked_1578559753939) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            on = include('browser.event.listener.global.add');
            srcBrowserEventGesturePinchStartName = include('src::browser.event.gesture.pinch.start.name');

            var_init_locked_1578559753939 = true;
        }



        if (!var_current_scope_1578559753939 !== this) {

            enabled = include('src::browser.event.gesture.pinch.enabled').bind(this);
            disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

            var_current_scope_1578559753939 = this;
        }


        return main.call(this, e);
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

exports['src::browser.event.gesture.manager.dom'] = (() => {

    let createMap, doDispatch;

    let var_init_locked_1578559753954;

    let var_class_1578559753954;

    let var_once_value_1578559753954;

    return function() {


        if (!var_init_locked_1578559753954) {

            createMap = include('map');
            doDispatch = include('browser.event.dispatch');

            var_init_locked_1578559753954 = true;
        }



        if (!var_class_1578559753954) {


            /**
             * 
             * 传统事件管理
             * 
             * @import createMap from map
             * 
             * @import doDispatch from browser.event.dispatch
             * 
             * @once
             * 
             */

            const nameRe = /(?:start|end)$/;

            function dispatch(event, params) {

                doDispatch(this, `gesture:${event}`, params);
            }

            function getName(name) {

                return include(`browser.event.gesture.${name}.start.name`)();
            }

            class main {

                constructor() {

                    let me = this;

                    me.events = createMap();

                }

                install(el, name) {

                    let {
                        events
                    } = this;

                    name = name.replace(nameRe, '');

                    if (events.has(el, name)) {

                        return;
                    }


                    let listener = include(`browser.event.gesture.${name}.start`).bind({
                        dispatch: dispatch.bind(el)
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

            var_class_1578559753954 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559753954;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.event.gesture.manager.dom';
                }

            };
        }



        if (var_once_value_1578559753954) {

            return var_once_value_1578559753954;

        }

        return var_once_value_1578559753954 = new var_class_1578559753954();

    };

})();

exports['src::browser.event.listener.element.add'] = (() => {

    let add;

    let var_init_locked_1578559753961;





    function main(el, event, fn, config) {


        /**
         * 
         * 监听元素事件
         * 
         * @import add from ....add
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * @param {object} [config] 配置
         * 
         */

        add(el, event, fn, config);

    }

    return function(el, event, fn, config) {


        if (!var_init_locked_1578559753961) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1578559753961 = true;
        }




        return main.call(this, el, event, fn, config);
    };

})();

exports['src::browser.event.listener.element.remove'] = (() => {

    let remove;

    let var_init_locked_1578559753969;





    function main(el, event, fn) {


        /**
         * 
         * 去除监听元素事件
         * 
         * @import remove from ....remove
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * 
         */

        remove(el, event, fn);

    }

    return function(el, event, fn) {


        if (!var_init_locked_1578559753969) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1578559753969 = true;
        }




        return main.call(this, el, event, fn);
    };

})();

exports['src::browser.event.gesture.vue'] = (() => {

    let generate, EventDom, isObject, isFunction, on, un;

    let var_init_locked_1578559753978;





    function main(Vue) {


        /**
         * 
         * 初始化 VUE 触摸指令
         * 
         * @import generate from id.generate
         * 
         * @import EventDom from browser.event.gesture.manager.dom value
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.function
         * 
         * @import on from browser.event.listener.element.add
         * 
         * @import un from browser.event.listener.element.remove
         * 
         * @param {mixed} Vue VUE 实例
         * 
         * 
         */

        Vue.directive('gesture', {

            bind(el, {
                arg: name,
                value: fn
            }) {

                EventDom.install(el, name);

                addEventListener(el, name, fn);

            },

            update(el, {
                arg: name,
                value: fn,
                oldValue: oldFn
            }) {

                removeEventListener(el, name, oldFn);

                addEventListener(el, name, fn);
            },

            unbind(el, {
                arg: name,
                value: fn
            }) {

                removeEventListener(el, name, fn);

                EventDom.uninstall(el, name);

            }
        });

        function addEventListener(el, name, fn) {

            let event = `gesture:${name}`;

            if (isObject(fn)) {

                let {
                    fn: listenerFn,
                    ...options
                } = fn;

                on(el, event, listenerFn, options);

            } else {

                on(el, event, fn);
            }
        }

        function removeEventListener(el, name, fn) {

            let event = `gesture:${name}`;

            if (isObject(fn)) {

                un(el, event, fn.fn);

            } else if (isFunction(fn)) {

                un(el, event, fn);
            }
        }

    }

    return function(Vue) {


        if (!var_init_locked_1578559753978) {

            generate = include('id.generate');
            EventDom = include('browser.event.gesture.manager.dom')();
            isObject = include('is.object.simple');
            isFunction = include('is.function');
            on = include('browser.event.listener.element.add');
            un = include('browser.event.listener.element.remove');

            var_init_locked_1578559753978 = true;
        }




        return main.call(this, Vue);
    };

})();

exports['src::browser.event.gesture.manager.jsx'] = (() => {

    let capitalize;

    let var_init_locked_1578559753989;






    /**
     * 
     * 基于 JSX 的事件管理
     * 
     * @import capitalize from string.capitalize
     * 
     * @param {object} config 未经识别的事件集合
     * 
     * @return {object} 已识别事件属性集合
     * 
     */

    const eventSuffixRe = /(?:start|end)$/,
        eventPropertyRe = /^on/,
        {
            keys
        } = Object;

    function getEventImplName(event) {

        return event.replace(eventSuffixRe, '');
    }

    function isGestureImplName(event) {

        try {

            include(`browser.event.gesture.${event}.start.name`);

            return true;

        } catch (err) {

        }

        return false;
    }

    function getGestureImplStartEventName(event) {

        switch (include(`browser.event.gesture.${event}.start.name`)()) {

            case 'pointerdown':

                return 'onPointerDown';

            case 'mousedown':

                return 'onMouseDown';

            case 'touchstart':

                return 'onTouchStart';
        }

    }

    function getGestureImplStartEventListener(event, listeners) {

        return include(`browser.event.gesture.${event}.start`).bind({
            dispatch(event, params) {

                if (listeners.hasOwnProperty(event)) {

                    listeners[event](params);
                }
            }
        });
    }

    function addListener(listeners, event, fn) {

        if (listeners.hasOwnProperty(event)) {

            listeners[event] = (...args) => {

                listeners[event](...args);

                fn(...args);
            };

        } else {

            listeners[event] = fn;
        }
    }

    function getEventProperties(listeners) {

        let events = keys(listeners),
            properties = {};

        for (let event of events) {

            if (eventPropertyRe.test(event)) {

                properties[event] = listeners[event];
            }
        }

        return properties;
    }

    function main(config) {

        let events = keys(config),
            listeners = {},
            gestureEvents = [];

        for (let event of events) {

            let eventImpl = getEventImplName(event);

            if (isGestureImplName(eventImpl) && !gestureEvents.includes(eventImpl)) {

                gestureEvents.push(eventImpl);

                addListener(listeners, getGestureImplStartEventName(eventImpl), getGestureImplStartEventListener(eventImpl, listeners));

            }

            addListener(listeners, event, config[event]);
        }

        return getEventProperties(listeners);
    }

    return function(config) {


        if (!var_init_locked_1578559753989) {

            capitalize = include('string.capitalize');

            var_init_locked_1578559753989 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.event.gesture.react'] = (() => {

    let jsx;

    let var_init_locked_1578559753991;





    function main(config) {


        /**
         * 
         * 基于 React 的手势事件实现
         * 
         * @import jsx from browser.event.gesture.manager.jsx
         * 
         * @param {object} config 未经识别的事件集合
         * 
         * @return {object} 已识别事件属性集合
         * 
         */

        return jsx(config);

    }

    return function(config) {


        if (!var_init_locked_1578559753991) {

            jsx = include('browser.event.gesture.manager.jsx');

            var_init_locked_1578559753991 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.event.touch.init'] = (() => {










    /**
     * 
     * 实始化事件应用环境
     * 
     * @param {HTMLElement} target 事件应用环境元素
     * 
     */

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


    return function(target) {





        return main.call(this, target);
    };

})();

exports['src::browser.event.visibility.init'] = (() => {

    let dispatch;

    let var_init_locked_1578559753995;





    function main() {


        /**
         * 
         * 初始化页面隐藏/关闭事件
         * 
         * @import dispatch from ....dispatch
         * 
         */

        document.addEventListener('visibilitychange', () => dispatch(document, document.visibilityState));

    }

    return function() {


        if (!var_init_locked_1578559753995) {

            dispatch = include('src::browser.event.dispatch');

            var_init_locked_1578559753995 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.environment'] = (() => {







    let var_once_value_1578559753998;

    function main() {

        /**
         * 
         * 返回当前浏览器的环境名称
         * 
         * @once
         * 
         * @return {string} 浏览器的名称
         * 
         */

        const NAMES = {
            micromessenger: 'WeiXin',
            ue4: 'UE4',
            unity: 'Unity',
            electron: 'Electron'
        };

        return NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity|electron/) || ['other'])[0]];

    }

    return function() {






        if (var_once_value_1578559753998) {

            return var_once_value_1578559753998;

        }
        return var_once_value_1578559753998 = main.call(this);

    };

})();

exports['src::miniprogram.storage'] = (() => {





    let var_class_1578559754000;

    let var_once_value_1578559754000;

    return function(data) {




        if (!var_class_1578559754000) {


            /**
             * 
             * 存储器
             * 
             * @param {mixed} data 参数说明
             * 
             * @return {mixed} 返回说明 
             * 
             * @once
             * 
             */

            class main {

                setItem(name, value) {

                    wx.setStorageSync(name, value);
                }

                getItem(name) {

                    return wx.getStorageSync(name);
                }

                removeItem(name) {

                    wx.removeStorageSync(name);
                }

                clear() {

                    wx.clearStorageSync();
                }
            }

            var_class_1578559754000 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559754000;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::miniprogram.storage';
                }

            };
        }



        if (var_once_value_1578559754000) {

            return var_once_value_1578559754000;

        }

        return var_once_value_1578559754000 = new var_class_1578559754000(data);

    };

})();

exports['src::os.name'] = (() => {







    let var_once_value_1578559754003;

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






        if (var_once_value_1578559754003) {

            return var_once_value_1578559754003;

        }
        return var_once_value_1578559754003 = main.call(this);

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

exports['src::json.clone'] = (() => {









    function main(data) {


        /**
         * 
         * 拷贝
         * 
         * @param {mixed} data 需要深拷贝的数据
         * 
         * @return {mixed} 拷贝后的数据
         * 
         */

        const {
            stringify,
            parse
        } = JSON;

        return parse(stringify(data));

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::file.read'] = (() => {

    let isFile;

    let var_init_locked_1578559754013;





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


        if (!var_init_locked_1578559754013) {

            isFile = include('is.file');

            var_init_locked_1578559754013 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::file.read.text'] = (() => {

    let read;

    let var_init_locked_1578559754016;





    /**
     * 
     * 读取文本文件
     * 
     * @require chokidar
     * 
     * @import read from file.read
     * 
     * @param {string} path 文本文件路径
     * 
     * @param {function} [watchFn] 是否以监听方式获取文件内容
     * 
     * @return {string} 文本文件内容
     * 
     */

    const chokidar = require('chokidar'),
        cacheFiles = {};

    function main(path, watchFn) {

        if (!watchFn) {

            return getText(path);

        } else {

            if (cacheFiles.hasOwnProperty(path)) {

                watchFn(cacheFiles[path]);

            } else {

                chokidar.watch(path).on('change', path => setTimeout(() => watchFn(cacheFiles[path] = getText(path), 1)));

                watchFn(cacheFiles[path] = getText(path));
            }
        }
    }

    function getText(path) {

        let data = read(path);

        if (data) {

            return data.toString('utf8');
        }
    }


    return function(path, watchFn) {


        if (!var_init_locked_1578559754016) {

            read = include('file.read');

            var_init_locked_1578559754016 = true;
        }




        return main.call(this, path, watchFn);
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

    }

    return function(data) {





        return main.call(this, data);
    };

})();

exports['src::file.read.json'] = (() => {

    let read, parse;

    let var_init_locked_1578559754022;






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
     *  @param {function} [watchFn] 是否以监听方式获取文件内容
     * 
     * @return {mixed} JSON数据 
     * 
     */

    function main(path, watchFn) {

        if (watchFn) {

            read(path, data => watchFn(getJSON(data)));

        } else {

            return getJSON(read(path));

        }
    }

    function getJSON(data) {

        if (data) {

            return parse(data);
        }
    }






    return function(path, watchFn) {


        if (!var_init_locked_1578559754022) {

            read = include('file.read.text');
            parse = include('json.parse');

            var_init_locked_1578559754022 = true;
        }




        return main.call(this, path, watchFn);
    };

})();

exports['src::file.write'] = (() => {

    let create;

    let var_init_locked_1578559754025;





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


        if (!var_init_locked_1578559754025) {

            create = include('directory.create');

            var_init_locked_1578559754025 = true;
        }




        return main.call(this, path, data);
    };

})();

exports['src::webpack.dev.server.self'] = (() => {

    let isFunction, isObject, isDefined;

    let var_init_locked_1578559754028;





    function main(app, {
        port,
        services,
        crossDomain
    }) {


        /**
         * 
         * 单独的测试服务器配置
         * 
         * @require body-parser
         * 
         * @import is.function
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.defined
         * 
         * @param {mixed} app express 对象
         * 
         * @param {object} config 配置
         * 
         * @param {number} config.port 测试监听端口
         * 
         * @param {object} [config.services = {}] Express 服务配置
         * 
         * @param {boolean} [config.crossDomain = false] 是否进行跨域配置
         * 
         * @return {mixed} 返回说明 
         * 
         */

        const bodyParser = require('body-parser');

        app.use(bodyParser.json({
            limit: '50mb'
        }));


        let urls = Object.keys(services);

        for (let url of urls) {

            let service = services[url],
                method,
                fn;

            if (isFunction(service)) {

                method = 'get';

                fn = service;

            } else if (isObject(service)) {

                method = service.method;

                fn = service.fn;
            }

            if (isDefined(method)) {

                app[method](url, (req, res) => {

                    if (crossDomain) {

                        res.header('Access-Control-Allow-Origin', '*');
                    }

                    res.end(fn(req.body));

                });
            }
        }

        app.listen(port);

    }

    return function(app, {
        port,
        services = {},
        crossDomain = false
    }) {


        if (!var_init_locked_1578559754028) {

            isFunction = include('is.function');
            isObject = include('is.object.simple');
            isDefined = include('is.defined');

            var_init_locked_1578559754028 = true;
        }




        return main.call(this, app, {
            port,
            services,
            crossDomain
        });
    };

})();

exports['src::webpack.dev.server'] = (() => {

    let start;

    let var_init_locked_1578559754032;





    function main({
        webpackConfig,
        entry,
        port,
        services
    }) {


        /**
         * 
         * Webpack 测试服务器
         * 
         * @require webpack
         * 
         * @require webpack-dev-middleware
         * 
         * @require webpack-hot-middleware
         * 
         * @require webpack-merge
         * 
         * @require express
         * 
         * @import start from .server.self
         * 
         * @param {object} config 配置
         * 
         * @param {object} config.webpackConfig Webpack 配置
         * 
         * @param {array} config.entry 引导脚本路径
         * 
         * @param {number} config.port 测试监听端口
         * 
         * @param {object} [config.services = {}] Express 服务配置
         * 
         */

        const webpack = require('webpack'),
            devMiddleware = require('webpack-dev-middleware'),
            hotMiddleware = require('webpack-hot-middleware'),
            merge = require('webpack-merge'),
            compiler = webpack(merge(webpackConfig, {
                entry: [
                    'webpack-hot-middleware/client?noInfo=true&reload=true',
                    ...entry
                ],
                mode: 'development',
                plugins: [
                    new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoEmitOnErrorsPlugin()
                ]
            })),
            express = require('express');

        let app = express();

        app.use(devMiddleware(compiler));

        app.use(hotMiddleware(compiler));

        start(app, {
            port,
            services
        });

    }

    return function({
        webpackConfig,
        entry,
        port,
        services = {}
    }) {


        if (!var_init_locked_1578559754032) {

            start = include('src::webpack.dev.server.self');

            var_init_locked_1578559754032 = true;
        }




        return main.call(this, {
            webpackConfig,
            entry,
            port,
            services
        });
    };

})();

exports['src::webpack.recorder.client'] = (() => {

    let join, append;

    let var_init_locked_1578559754035;





    function main(name, data, port) {


        /**
         * 
         * 记录器在浏览器端实现
         * 
         * @import join from url.join
         * 
         * @import append from url.append
         * 
         * @require axios
         * 
         * @param {string} name 记录名称
         * 
         * @param {mixed} data 记录数据
         * 
         * @param {number} [port] 设置请求端口号
         * 
         */

        if (process.env.NODE_ENV === 'development') {

            const axios = require('axios');

            let url = `/recorder/${name}`;

            if (port) {

                url = append(join(`http://${location.hostname}:${port}`, url), {
                    _dc: Date.now()
                });
            }

            axios.post(url, data);
        }

    }

    return function(name, data, port) {


        if (!var_init_locked_1578559754035) {

            join = include('url.join');
            append = include('url.append');

            var_init_locked_1578559754035 = true;
        }




        return main.call(this, name, data, port);
    };

})();

exports['src::webpack.recorder.server.markdown'] = (() => {

    let read, write;

    let var_init_locked_1578559754040;





    function main(name, templateFn) {


        /**
         * 
         * 生成 Markdown 文档
         * 
         * @import read from file.read.json
         * 
         * @import write from file.write
         * 
         * @param {string} name 文档名称
         * 
         * @param {function} templateFn 模板函数
         * 
         */

        const {
            join
        } = require('path'),
            path = join(process.cwd(), `doc/${name}`),
            jsonPath = `${path}.json`,
            mdPath = `${path}.md`;

        read(jsonPath, data => {

            if (data) {

                let content = templateFn(data);

                if (content) {

                    write(mdPath, content);
                }

            }
        });

    }

    return function(name, templateFn) {


        if (!var_init_locked_1578559754040) {

            read = include('file.read.json');
            write = include('file.write');

            var_init_locked_1578559754040 = true;
        }




        return main.call(this, name, templateFn);
    };

})();

exports['src::file.write.json'] = (() => {

    let write;

    let var_init_locked_1578559754045;





    function main(path, data) {


        /**
         * 
         * 保存JSON文件
         * 
         * @import write from file.write
         * 
         * @param {string} path 保存文件路径
         * 
         * @param {mixed} data 保存文件内容
         * 
         */

        write(path, JSON.stringify(data, null, 2));

    }

    return function(path, data) {


        if (!var_init_locked_1578559754045) {

            write = include('file.write');

            var_init_locked_1578559754045 = true;
        }




        return main.call(this, path, data);
    };

})();

exports['src::object.assign.if'] = (() => {

    let isObject;

    let var_init_locked_1578559754048;






    /**
     * 
     * 懒惰深度合并
     * 
     * @import isObject from is.object.simple
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

        if (isObject(dest) && isObject(source)) {

            let names = Object.keys(source);

            for (let name of names) {

                if (!dest.hasOwnProperty(name)) {

                    dest[name] = source[name];

                } else {

                    assign(dest[name], source[name]);
                }
            }
        }

        return source;
    }

    function main(dest, ...sources) {

        for (let source of sources) {

            assign(dest, source);
        }

        return dest;

    }

    return function(dest, ...sources) {


        if (!var_init_locked_1578559754048) {

            isObject = include('is.object.simple');

            var_init_locked_1578559754048 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::webpack.recorder.server'] = (() => {

    let read, writeJSON, merge, isObject;

    let var_init_locked_1578559754051;





    function main(name, processFn, path) {


        /**
         * 
         * 记录器在测试服务器端实现
         * 
         * @import read from file.read.json
         * 
         * @import writeJSON from file.write.json
         * 
         * @import merge from object.assign.if
         * 
         * @import isObject from is.object.simple
         * 
         * @param {string} name 记录名称
         * 
         * @param {function} processFn 处理函数
         * 
         * @param {string} path 数据合并的路径
         * 
         * @return {object} 服务配置
         * 
         */

        path = `${path}.json`;

        let doc = {};

        read(path, data => {

            if (data) {

                doc = data;
            }

        });

        return {
            [`/recorder/${name}`]: {
                method: 'post',
                fn(data) {

                    let result = processFn(data);

                    if (isObject(result)) {

                        merge(doc, {
                            [name]: result
                        });

                        writeJSON(path, doc);
                    }
                }
            }
        };




    }

    return function(name, processFn, path) {


        if (!var_init_locked_1578559754051) {

            read = include('file.read.json');
            writeJSON = include('file.write.json');
            merge = include('object.assign.if');
            isObject = include('is.object.simple');

            var_init_locked_1578559754051 = true;
        }




        return main.call(this, name, processFn, path);
    };

})();

exports['src::webpack.recorder.server.service'] = (() => {

    let recorder;

    let var_init_locked_1578559754056;





    function main(name, processFn) {


        /**
         * 
         * 服务记录器
         * 
         * @import recorder from webpack.recorder.server
         * 
         * @param {string} name 文档名称
         * 
         * @param {function} processFn 处理函数
         * 
         * @return {object} 服务配置 
         * 
         */

        const {
            join
        } = require('path');

        return recorder('service', processFn, join(process.cwd(), `doc/${name}`));

    }

    return function(name, processFn) {


        if (!var_init_locked_1578559754056) {

            recorder = include('webpack.recorder.server');

            var_init_locked_1578559754056 = true;
        }




        return main.call(this, name, processFn);
    };

})();

exports['src::object.key.join'] = (() => {

    let isString;

    let var_init_locked_1578559754060;






    /**
     * 
     * 将多个键值连接起来
     * 
     * @import is.string
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

            if (isString(key)) {

                key = key.replace(suffixRe, '');

                if (key) {

                    result.push(key);
                }
            }
        }

        return result.join('.').trim();
    }



    return function(...keys) {


        if (!var_init_locked_1578559754060) {

            isString = include('is.string');

            var_init_locked_1578559754060 = true;
        }




        return main.call(this, ...keys);
    };

})();

exports['src::object.flat'] = (() => {

    let join, isObject;

    let var_init_locked_1578559754062;






    /**
     * 
     * 将对象扁平化处理
     * 
     * @import join from object.key.join
     * 
     * @import isObject from is.object.simple
     * 
     * @param {object} data 对象
     * 
     * @return {object} 扁平化后的对象 
     * 
     */

    function main(data) {

        return flat(data);
    }

    function flat(data, rootKey) {

        let result = {};

        if (isObject(data)) {

            let keys = Object.keys(data);

            for (let key of keys) {

                Object.assign(result, flat(data[key], join(rootKey, key)));
            }

        } else if (rootKey) {

            result[rootKey] = data;
        }

        return result;
    }



    return function(data) {


        if (!var_init_locked_1578559754062) {

            join = include('object.key.join');
            isObject = include('is.object.simple');

            var_init_locked_1578559754062 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::object.keys'] = (() => {

    let isObject, join;

    let var_init_locked_1578559754065;





    /**
     * 
     * 获取对象的键值组合
     * 
     * @import isObject from is.object.simple
     * 
     * @import join from object.key.join
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

    function get_keys(data, rootKey) {

        let result = [];

        if (isObject(data)) {

            let keys = Object.keys(data);

            for (let key of keys) {

                result.push(...get_keys(data[key], join(rootKey, key)));
            }

        } else if (rootKey) {

            result.push(rootKey);
        }

        return result;
    }


    return function(data) {


        if (!var_init_locked_1578559754065) {

            isObject = include('is.object.simple');
            join = include('object.key.join');

            var_init_locked_1578559754065 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::file.stream.write'] = (() => {

    let create;

    let var_init_locked_1578559754068;





    function main(path, options) {


        /**
         * 
         * 创建写入流
         * 
         * @import create from directory.create
         * 
         * @param {string} path 路径
         * 
         * @param {object} [options] 流配置
         * 
         * @return {fs.WriteStream} 写入流 
         * 
         */

        const {
            dirname
        } = require('path'), {
            createWriteStream
        } = require('fs');

        create(dirname(path));

        return createWriteStream(path, options);




    }

    return function(path, options) {


        if (!var_init_locked_1578559754068) {

            create = include('directory.create');

            var_init_locked_1578559754068 = true;
        }




        return main.call(this, path, options);
    };

})();

exports['src::log.node'] = (() => {

    let format, createStream;

    let var_init_locked_1578559754072;

    let var_class_1578559754072;



    return function(path) {


        if (!var_init_locked_1578559754072) {

            format = include('date.format');
            createStream = include('file.stream.write');

            var_init_locked_1578559754072 = true;
        }



        if (!var_class_1578559754072) {


            /**
             * 
             * Node 版 日志
             *
             * @import format from date.format
             * 
             * @import createStream from file.stream.write
             * 
             * @param {string} path 日志路径
             * 
             */

            const {
                Console
            } = require('console'), {
                join
            } = require('path');

            class main {

                constructor(path) {

                    this.console = new Console(createStream(join(path, `${format(new Date() , 'YYYYMMDD')}.log`), {
                        flags: 'a'
                    }));
                }

                log(...args) {

                    doMethod.call(this, 'log', ...args);
                }
            }

            function doMethod(method, ...args) {

                let {
                    console
                } = this;

                console[method](format(new Date(), 'YYYY-MM-DD HH:mm:ss'), ...args);
            }

            var_class_1578559754072 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559754072;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::log.node';
                }

            };
        }


        return new var_class_1578559754072(path);
    };

})();

exports['src::class.name'] = (() => {

    let isObject;

    let var_init_locked_1578559754075;





    function main(data) {


        /**
         * 
         * 获得类名称
         * 
         * @import is.object
         * 
         * @param {mixed} data 类对象
         * 
         * @return {string} 类名称 
         * 
         */

        if (isObject(data)) {

            return data.__ZBEE_CLASS_NAME__;
        }

    }

    return function(data) {


        if (!var_init_locked_1578559754075) {

            isObject = include('is.object');

            var_init_locked_1578559754075 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::process'] = (() => {

    let Observable, add;

    let var_init_locked_1578559754079;

    let var_class_1578559754079;



    return function() {


        if (!var_init_locked_1578559754079) {

            Observable = include('mixin.observable');
            add = include('event.listener.add');

            var_init_locked_1578559754079 = true;
        }



        if (!var_class_1578559754079) {


            /**
             * 
             * 进程管理器
             * 
             * @import Observable from mixin.observable
             * 
             * @import add from event.listener.add
             * 
             * @class
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor(options = {}) {

                    super(options);

                    let me = this;

                    me.options = options;

                    let {
                        autoStart = true,
                            reStart = true,
                    } = options;

                    if (autoStart) {

                        me.start();
                    }

                    if (reStart) {

                        add(me, 'crash', () => me.start());
                    }
                }

                get started() {

                    return true;
                }

                onStart() {

                    this.fireEvent('start');
                }

                onEnd(isNormal) {

                    let me = this;

                    if (isNormal) {

                        me.fireEvent('end');

                    } else {

                        me.fireEvent('crash');
                    }

                    me.fireEvent('exit');
                }

                start() {

                    let me = this,
                        {
                            started
                        } = me;

                    if (!started) {

                        me.doStart();
                    }
                }

                doStart() {


                }

                end() {

                    let me = this,
                        {
                            started
                        } = me;

                    if (started) {

                        me.doEnd();
                    }
                }

                doEnd() {


                }
            }

            var_class_1578559754079 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559754079;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::process';
                }

            };
        }


        return var_class_1578559754079;
    };

})();

exports['src::process.spawn'] = (() => {

    let Process, add, removeAll;

    let var_init_locked_1578559754089;

    let var_class_1578559754089;



    return function(options) {


        if (!var_init_locked_1578559754089) {

            Process = include('process')();
            add = include('event.listener.add');
            removeAll = include('event.listener.remove.all');

            var_init_locked_1578559754089 = true;
        }



        if (!var_class_1578559754089) {


            /**
             * 
             * 基于 spawn 进程实现
             * 
             * @import Process from ....process value
             * 
             * @import add from event.listener.add
             * 
             * @import removeAll from event.listener.remove.all
             * 
             * @param {object} options 配置
             * 
             */

            const {
                spawn
            } = require('child_process');

            class main extends Process {

                doStart() {

                    let me = this,
                        {
                            command
                        } = me.options,
                        process = spawn(command),
                        {
                            stdout
                        } = process;

                    add(stdout, 'data', 'onStart', {
                        scope: me,
                        once: true
                    });

                    add(process, {
                        exit: 'onEnd',
                        error: 'onEnd',
                        scope: me
                    });

                    me.process = process;
                }

                get started() {

                    return this.hasOwnProperty('process');
                }

                onEnd(code, signal) {

                    let me = this,
                        {
                            process
                        } = me;

                    removeAll(process);

                    removeAll(process.stdout);

                    delete me.process;

                    super.onEnd(signal === 'NORMAL');
                }

                doEnd() {

                    let {
                        process
                    } = this;

                    process.kill('NORMAL');
                }
            }

            var_class_1578559754089 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1578559754089;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::process.spawn';
                }

            };
        }


        return new var_class_1578559754089(options);
    };

})();