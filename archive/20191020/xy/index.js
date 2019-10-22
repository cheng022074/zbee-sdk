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

    let var_init_locked_1571573339265;





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


        if (!var_init_locked_1571573339265) {

            isType = include('is.type');

            var_init_locked_1571573339265 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.empty'] = (() => {

    let isArray;

    let var_init_locked_1571573339269;





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


        if (!var_init_locked_1571573339269) {

            isArray = include('is.array');

            var_init_locked_1571573339269 = true;
        }




        return main.call(this, data, allowEmptyString);
    };

})();

exports['src::is.string'] = (() => {

    let isType;

    let var_init_locked_1571573339271;





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


        if (!var_init_locked_1571573339271) {

            isType = include('is.type');

            var_init_locked_1571573339271 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::array.from'] = (() => {

    let isEmpty, isString;

    let var_init_locked_1571573339275;





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


        if (!var_init_locked_1571573339275) {

            isEmpty = include('is.empty');
            isString = include('is.string');

            var_init_locked_1571573339275 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::date.get.properties'] = (() => {

    let from;

    let var_init_locked_1571573339282;





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


        if (!var_init_locked_1571573339282) {

            from = include('array.from');

            var_init_locked_1571573339282 = true;
        }




        return main.call(this, date, names);
    };

})();

exports['src::array.dates.includes'] = (() => {

    let get;

    let var_init_locked_1571573339287;





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


        if (!var_init_locked_1571573339287) {

            get = include('date.get.properties');

            var_init_locked_1571573339287 = true;
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

    let var_init_locked_1571573339292;





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


        if (!var_init_locked_1571573339292) {

            isType = include('is.type');

            var_init_locked_1571573339292 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.boolean'] = (() => {

    let isType;

    let var_init_locked_1571573339294;





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


        if (!var_init_locked_1571573339294) {

            isType = include('is.type');

            var_init_locked_1571573339294 = true;
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

    let var_init_locked_1571573339299;





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


        if (!var_init_locked_1571573339299) {

            isObject = include('is.object.simple');
            isArray = include('is.array');
            isString = include('is.string');
            isNumber = include('is.number');
            isBoolean = include('is.boolean');
            isDate = include('is.date');
            isString = include('is.string');

            var_init_locked_1571573339299 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.equals'] = (() => {

    let getType;

    let var_init_locked_1571573339306;





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

            switch (type1) {

                case 'object':

                    return object_equals(value1, value2);

                case 'array':

                    return array_equals(value1, value2);

                case 'date':

                    return date_equals(value1, value2);

                default:

                    return base_equals(value1, value2);
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

    function base_equals(value1, value2) {

        return value1 === value2;
    }

    return function(value1, value2) {


        if (!var_init_locked_1571573339306) {

            getType = include('data.type');

            var_init_locked_1571573339306 = true;
        }




        return main.call(this, value1, value2);
    };

})();

exports['src::array.indexOf'] = (() => {

    let equals;

    let var_init_locked_1571573339310;





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


        if (!var_init_locked_1571573339310) {

            equals = include('data.equals');

            var_init_locked_1571573339310 = true;
        }




        return main.call(this, data, checkItem);
    };

})();

exports['src::array.includes'] = (() => {

    let indexOf;

    let var_init_locked_1571573339313;





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


        if (!var_init_locked_1571573339313) {

            indexOf = include('array.indexOf');

            var_init_locked_1571573339313 = true;
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

    let var_init_locked_1571573339327;





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


        if (!var_init_locked_1571573339327) {

            remove = include('src::array.remove.index');
            indexOf = include('src::array.indexOf');

            var_init_locked_1571573339327 = true;
        }




        return main.call(this, data, item);
    };

})();

exports['src::array.remove'] = (() => {

    let remove, indexOf;

    let var_init_locked_1571573339331;





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


        if (!var_init_locked_1571573339331) {

            remove = include('array.remove.index');
            indexOf = include('array.indexOf');

            var_init_locked_1571573339331 = true;
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

    let var_init_locked_1571573339339;





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
                data
            } = me,
            acceptedSubscribers = [];

        if (isDefined(message)) {

            subscribers.forEach(subscriber => {

                if (!subscriber.closed && me.validateMessage(subscriber, message)) {

                    let processedData = me.processData(subscriber, message);

                    if (processedData) {

                        subscriber.accept(processedData);

                        acceptedSubscribers.push(subscriber);
                    }
                }

            });
        }

        return acceptedSubscribers;

    }

    return function(...args) {


        if (!var_init_locked_1571573339339) {

            isDefined = include('is.defined');

            var_init_locked_1571573339339 = true;
        }




        return main.call(this, ...args);
    };

})();

exports['src::data.connection.activate'] = (() => {

    let includes;

    let var_init_locked_1571573339343;





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
            } = me,
            subscribedParamList = [];

        for (let params of subscribeParamList) {

            if (!includes(subscribedParamList, params)) {

                subscribedParamList.push(params);

                me.doSubscriberOpen(...params);
            }
        }

    }

    return function() {


        if (!var_init_locked_1571573339343) {

            includes = include('array.includes');

            var_init_locked_1571573339343 = true;
        }




        return main.call(this);
    };

})();

exports['src::url.append'] = (() => {

    let isString;

    let var_init_locked_1571573339349;





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


        if (!var_init_locked_1571573339349) {

            isString = include('is.string');

            var_init_locked_1571573339349 = true;
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

    let var_init_locked_1571573339355;





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


        if (!var_init_locked_1571573339355) {

            isInt = include('regexp.int');

            var_init_locked_1571573339355 = true;
        }




        return main.call(this, url, data);
    };

})();

exports['src::data.connection.ajax.request'] = (() => {

    let append, apply, isObject;

    let var_init_locked_1571573339360;





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


        if (!var_init_locked_1571573339360) {

            append = include('url.append');
            apply = include('url.template.apply');
            isObject = include('is.object.simple');

            var_init_locked_1571573339360 = true;
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

    let var_init_locked_1571573339367;





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


        if (!var_init_locked_1571573339367) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1571573339367 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::data.connection.ajax.request.miniprogram'] = (() => {

    let request;

    let var_init_locked_1571573339377;





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


        if (!var_init_locked_1571573339377) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1571573339377 = true;
        }




        return main.call(this, url, config);
    };

})();

exports['src::is.function'] = (() => {

    let isType;

    let var_init_locked_1571573339381;





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


        if (!var_init_locked_1571573339381) {

            isType = include('is.type');

            var_init_locked_1571573339381 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.empty'] = (() => {







    let var_once_value_1571573339383;

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






        if (var_once_value_1571573339383) {

            return var_once_value_1571573339383;

        }
        return var_once_value_1571573339383 = main.call(this);

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

    let var_init_locked_1571573339397;

    let var_current_scope_1571573339397;



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




        if (!var_current_scope_1571573339397 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1571573339397 = this;
        }


        return main.call(this, ...values);
    };

})();

exports['src::map.get'] = (() => {

    let find;

    let var_init_locked_1571573339402;

    let var_current_scope_1571573339402;



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




        if (!var_current_scope_1571573339402 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1571573339402 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.has'] = (() => {

    let find;

    let var_init_locked_1571573339405;

    let var_current_scope_1571573339405;



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




        if (!var_current_scope_1571573339405 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1571573339405 = this;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map.delete'] = (() => {

    let find;

    let var_init_locked_1571573339408;

    let var_current_scope_1571573339408;



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




        if (!var_current_scope_1571573339408 !== this) {

            find = include('src::map.find').bind(this);

            var_current_scope_1571573339408 = this;
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

exports['src::map.find.fuzzy'] = (() => {

    let isDefined;

    let var_init_locked_1571573339416;





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


        if (!var_init_locked_1571573339416) {

            isDefined = include('is.defined');

            var_init_locked_1571573339416 = true;
        }




        return main.call(this, ...keys);
    };

})();

exports['src::map'] = (() => {

    let extend, constructor, get_size, method_set, method_get, method_has, method_delete, method_forEach, method_clear, method_find, isObject;

    let var_init_locked_1571573339420;

    let var_class_1571573339420;



    return function() {


        if (!var_init_locked_1571573339420) {

            extend = include('class.empty')();
            constructor = include('src::map.constructor');
            get_size = include('map.size');
            method_set = include('src::map.set');
            method_get = include('src::map.get');
            method_has = include('src::map.has');
            method_delete = include('src::map.delete');
            method_forEach = include('src::map.forEach');
            method_clear = include('src::map.clear');
            method_find = include('map.find.fuzzy');
            isObject = include('is.object.simple');

            var_init_locked_1571573339420 = true;
        }



        if (!var_class_1571573339420) {

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

            var_class_1571573339420 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339420;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::map';
                }

            };
        }


        return new var_class_1571573339420();
    };

})();

exports['src::event.listeners'] = (() => {

    let map;

    let var_init_locked_1571573339425;



    let var_once_value_1571573339425;

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


        if (!var_init_locked_1571573339425) {

            map = include('map')();

            var_init_locked_1571573339425 = true;
        }





        if (var_once_value_1571573339425) {

            return var_once_value_1571573339425;

        }
        return var_once_value_1571573339425 = main.call(this);

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

    let var_init_locked_1571573339435;





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


        if (!var_init_locked_1571573339435) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            remove = include('src::event.listener.remove');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.remove');

            var_init_locked_1571573339435 = true;
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

    let var_init_locked_1571573339443;





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


        if (!var_init_locked_1571573339443) {

            isString = include('is.string');
            isFunction = include('is.function');
            empty = include('function.empty');

            var_init_locked_1571573339443 = true;
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

    let var_init_locked_1571573339453;





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

                        remove(target, name, listener);
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


        if (!var_init_locked_1571573339453) {

            isString = include('is.string');
            isObject = include('is.object.simple');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            get = include('function.get');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.add');
            isArray = include('is.array');

            var_init_locked_1571573339453 = true;
        }




        return main.call(this, target, name, fn, {
            once,
            scope
        });
    };

})();

exports['src::mixin.observable.constructor'] = (() => {

    let add, isObject, isArray;

    let var_init_locked_1571573339462;






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


        if (!var_init_locked_1571573339462) {

            add = include('event.listener.add');
            isObject = include('is.object.simple');
            isArray = include('is.array');

            var_init_locked_1571573339462 = true;
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

    let var_init_locked_1571573339473;






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


        if (!var_init_locked_1571573339473) {

            isArray = include('is.array');

            var_init_locked_1571573339473 = true;
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

    let constructor, method_addListener, method_removeListener, method_fireEvent, method_suspendEvents, method_resumeEvents, isObject;

    let var_init_locked_1571573339479;





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


        if (!var_init_locked_1571573339479) {

            constructor = include('src::mixin.observable.constructor');
            method_addListener = include('src::mixin.observable.listener.add');
            method_removeListener = include('src::mixin.observable.listener.remove');
            method_fireEvent = include('src::mixin.observable.event.fire');
            method_suspendEvents = include('src::mixin.observable.events.suspend');
            method_resumeEvents = include('src::mixin.observable.events.resume');
            isObject = include('is.object.simple');

            var_init_locked_1571573339479 = true;
        }




        return main.call(this, extend);
    };

})();

exports['src::data.subscriber.constructor'] = (() => {

    let get, add, emptyFn;

    let var_init_locked_1571573339487;





    function main(connection, name, {
        processData,
        listeners,
        params,
        cache,
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
         * @import add from event.listener.add
         * 
         * @import emptyFn from function.empty value
         * 
         * @param {data.connection} connection 当前订阅器所在的连接对象
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {function} [config.processData] 处理数据方法
         *  
         * @param {object} [config.listeners = {}] 来自古地外部事件监听
         * 
         * @param {mixed} [config.params] 默认打开的订阅参数
         * 
         * @param {boolean} [config.cache = false] 默认不缓存 
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

        me.connection = connection;

        me.$bubbleTarget = connection;

        me.cache = cache;

        me.processData = processData || (({
            data
        }) => data);

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


    }

    return function(connection, name, {
        processData,
        listeners = {},
        params,
        cache = false,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        scope
    }) {


        if (!var_init_locked_1571573339487) {

            get = include('function.get');
            add = include('event.listener.add');
            emptyFn = include('function.empty')();

            var_init_locked_1571573339487 = true;
        }




        return main.call(this, connection, name, {
            processData,
            listeners,
            params,
            cache,
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

exports['src::data.subscriber.accept'] = (() => {

    let isDefined;

    let var_init_locked_1571573339497;





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
                params,
                connection,
                name
            } = me;

        if (closed) {

            return;
        }

        if (!isDefined(data)) {

            return;
        }

        me.fireEvent('data', data, params);

        if (bindFn) {

            return bindFn(data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1571573339497) {

            isDefined = include('is.defined');

            var_init_locked_1571573339497 = true;
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

exports['src::object.assign'] = (() => {

    let isObject;

    let var_init_locked_1571573339502;






    /**
     * 
     * 积极深度合并
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


        if (!var_init_locked_1571573339502) {

            isObject = include('is.object.simple');

            var_init_locked_1571573339502 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::data.subscriber.open'] = (() => {

    let equals, assign;

    let var_init_locked_1571573339504;





    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import equals from data.equals
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


        if (!var_init_locked_1571573339504) {

            equals = include('data.equals');
            assign = include('object.assign');

            var_init_locked_1571573339504 = true;
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

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::event.listener.remove.all'] = (() => {

    let listeners, remove;

    let var_init_locked_1571573339512;





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


        if (!var_init_locked_1571573339512) {

            listeners = include('src::event.listeners')();
            remove = include('src::event.listener.native.remove');

            var_init_locked_1571573339512 = true;
        }




        return main.call(this, target);
    };

})();

exports['src::data.subscriber.destroy'] = (() => {

    let removeAll;

    let var_init_locked_1571573339517;





    function main() {


        /**
         * 
         * 销毁
         * 
         * @import removeAll from event.listener.remove.all
         * 
         */

        let me = this;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        removeAll(me);

    }

    return function() {


        if (!var_init_locked_1571573339517) {

            removeAll = include('event.listener.remove.all');

            var_init_locked_1571573339517 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.subscriber'] = (() => {

    let mixin_1571573338701__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1571573339522;

    let var_class_1571573339522;



    return function() {


        if (!var_init_locked_1571573339522) {

            mixin_1571573338701__1 = include('mixin.observable');
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

            var_init_locked_1571573339522 = true;
        }



        if (!var_class_1571573339522) {

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

            var_class_1571573339522 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339522;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.subscriber';
                }

            };
        }


        return var_class_1571573339522;
    };

})();

exports['src::is.class'] = (() => {

    let isType;

    let var_init_locked_1571573339531;





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


        if (!var_init_locked_1571573339531) {

            isType = include('is.type');

            var_init_locked_1571573339531 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::class.create'] = (() => {

    let isString, isFunction, isClass;

    let var_init_locked_1571573339533;





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


        if (!var_init_locked_1571573339533) {

            isString = include('is.string');
            isFunction = include('is.function');
            isClass = include('is.class');

            var_init_locked_1571573339533 = true;
        }




        return main.call(this, baseClass, ...args);
    };

})();

exports['src::data.connection.subscribe.name'] = (() => {









    function main(name, instanceId) {


        /**
         * 
         * 获取订阅器名称
         * 
         * @param {string} name 订阅器名称
         * 
         * @param {string} [instanceId] 对象标识
         * 
         * @return {string} 订阅器名称
         * 
         */

        if (instanceId) {

            return `${name}<${instanceId}>`;
        }

        return name;

    }

    return function(name, instanceId) {





        return main.call(this, name, instanceId);
    };

})();

exports['src::data.connection.base'] = (() => {

    let isObject, isString, isFunction, isBoolean, isArray, Subscriber, get, create, includes, indexOf, remove, getName, Observable, add;

    let var_init_locked_1571573339544;

    let var_class_1571573339544;



    return function() {


        if (!var_init_locked_1571573339544) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            isBoolean = include('is.boolean');
            isArray = include('is.array');
            Subscriber = include('data.subscriber')();
            get = include('function.get');
            create = include('class.create');
            includes = include('array.includes');
            indexOf = include('array.indexOf');
            remove = include('array.remove.index');
            getName = include('src::data.connection.subscribe.name');
            Observable = include('mixin.observable');
            add = include('event.listener.add');

            var_init_locked_1571573339544 = true;
        }



        if (!var_class_1571573339544) {

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
             * @import indexOf from array.indexOf
             * 
             * @import remove from array.remove.index
             * 
             * @import getName from .subscribe.name
             * 
             * @import Observable from mixin.observable
             * 
             * @import add from event.listener.add
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
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.subscriber = subscriber;

                    me.subscribers = new Map();

                    me.rules = createRules(rules);

                    me.subscribeParamList = [];

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

                        let {
                            subscribeParamList
                        } = me;

                        if (!includes(subscribeParamList, params)) {

                            me.doSubscriberOpen(...params);
                        }

                        subscribeParamList.push(params);

                    }
                }

                doSubscriberOpen(...args) {


                }

                onSubscriberClose(subscriber, params) {

                    let me = this;

                    params = me.processSubscribeParams(subscriber, params);

                    if (isArray(params)) {

                        let {
                            subscribeParamList
                        } = me,
                        index = indexOf(subscribeParamList, params);

                        if (index === -1) {

                            return;
                        }

                        remove(subscribeParamList, index);

                        if (!includes(subscribeParamList, params)) {

                            me.doSubscriberClose(...params);
                        }
                    }

                }

                doSubscriberClose(...args) {


                }

                getSubscribers(names, instanceId) {

                    let subscribers = [],
                        me = this;

                    for (let name of names) {

                        let subscriber = me.getSubscriber(name, instanceId);

                        if (subscriber) {

                            subscribers.push(subscriber);
                        }
                    }

                    return subscribers;
                }

                hasSubscriber(name, instanceId) {

                    return !!this.getSubscriber(name, instanceId);
                }

                getSubscriber(name, instanceId) {

                    return this.subscribers.get(getName(name, instanceId));
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

            var_class_1571573339544 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339544;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.base';
                }

            };
        }


        return var_class_1571573339544;
    };

})();

exports['src::data.connection.subscribe'] = (() => {

    let assign, getName;

    let var_init_locked_1571573339560;






    /**
     * 
     * 单次订阅
     * 
     * @import assign from object.assign
     * 
     * @import getName from .subscribe.name
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

        name = getName(name, instanceId);

        let subscriber = me.createSubscriber(name, options);

        subscribers.set(name, subscriber);

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


        if (!var_init_locked_1571573339560) {

            assign = include('object.assign');
            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1571573339560 = true;
        }




        return main.call(this, name, options);
    };

})();

exports['src::data.connection.unsubscribe'] = (() => {

    let getName;

    let var_init_locked_1571573339563;





    function main(name, instanceId) {


        /**
         * 
         * 取消单次订阅
         * 
         * @import getName from .subscribe.name
         * 
         * @param {string} name 订阅名称
         * 
         * @param {string} [instanceId] 实例编号
         * 
         */

        name = getName(name, instanceId);

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


        if (!var_init_locked_1571573339563) {

            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1571573339563 = true;
        }




        return main.call(this, name, instanceId);
    };

})();

exports['src::data.connection.subscribes'] = (() => {

    let isString, isFunction, isObject, get;

    let var_init_locked_1571573339566;





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


        if (!var_init_locked_1571573339566) {

            isString = include('is.string');
            isFunction = include('is.function');
            isObject = include('is.object.simple');
            get = include('function.get');

            var_init_locked_1571573339566 = true;
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

exports['src::data.connection.deactivate'] = (() => {

    let includes;

    let var_init_locked_1571573339571;





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
            } = me,
            subscribedParamList = [];

        for (let params of subscribeParamList) {

            if (!includes(subscribedParamList, params)) {

                subscribedParamList.push(params);

                me.doSubscriberClose(...params);
            }
        }

    }

    return function() {


        if (!var_init_locked_1571573339571) {

            includes = include('array.includes');

            var_init_locked_1571573339571 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.connection'] = (() => {

    let extend, method_acceptMessage, method_subscribe, method_unsubscribe, method_subscribes, method_unsubscribes, method_activate, method_deactivate, isObject;

    let var_init_locked_1571573339575;

    let var_class_1571573339575;



    return function() {


        if (!var_init_locked_1571573339575) {

            extend = include('src::data.connection.base')();
            method_acceptMessage = include('src::data.connection.accept');
            method_subscribe = include('src::data.connection.subscribe');
            method_unsubscribe = include('src::data.connection.unsubscribe');
            method_subscribes = include('src::data.connection.subscribes');
            method_unsubscribes = include('src::data.connection.unsubscribes');
            method_activate = include('src::data.connection.activate');
            method_deactivate = include('src::data.connection.deactivate');
            isObject = include('is.object.simple');

            var_init_locked_1571573339575 = true;
        }



        if (!var_class_1571573339575) {

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
                activate(...args) {

                    return method_activate.apply(this, args);

                }
                deactivate(...args) {

                    return method_deactivate.apply(this, args);

                }



            }

            var_class_1571573339575 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339575;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection';
                }

            };
        }


        return var_class_1571573339575;
    };

})();

exports['src::data.connection.ajax'] = (() => {

    let Connection;

    let var_init_locked_1571573339590;

    let var_class_1571573339590;



    return function(options) {


        if (!var_init_locked_1571573339590) {

            Connection = include('data.connection')();

            var_init_locked_1571573339590 = true;
        }



        if (!var_class_1571573339590) {


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


            var_class_1571573339590 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339590;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.ajax';
                }

            };
        }


        return new var_class_1571573339590(options);
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

exports['src::data.connection.socket'] = (() => {

    let Connection, observable, add, Manager;

    let var_init_locked_1571573339605;

    let var_class_1571573339605;



    return function() {


        if (!var_init_locked_1571573339605) {

            Connection = include('data.connection')();
            observable = include('mixin.observable');
            add = include('event.listener.add');
            Manager = include('src::data.connection.socket.manager')();

            var_init_locked_1571573339605 = true;
        }



        if (!var_class_1571573339605) {



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

                get isConnected() {

                    return isState.call(this, 1);
                }

                get isConnecting() {

                    return isState.call(this, 0);
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
                            socket,
                            isDisconnected,
                            isDisconnecting
                        } = me;

                    if (!isDisconnected || !isDisconnecting) {

                        me.disconnectingState = true;

                        me.doDisconnect();

                        add(socket, 'close', () => delete me.disconnectingState, {
                            once: true
                        });
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

            var_class_1571573339605 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339605;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket';
                }

            };
        }


        return var_class_1571573339605;
    };

})();

exports['src::data.connection.socket.manager'] = (() => {

    let Socket, add, remove;

    let var_init_locked_1571573339618;

    let var_class_1571573339618;

    let var_once_value_1571573339618;

    return function() {


        if (!var_init_locked_1571573339618) {

            Socket = include('data.connection.socket');
            add = include('event.listener.add');
            remove = include('event.listener.remove');

            var_init_locked_1571573339618 = true;
        }



        if (!var_class_1571573339618) {


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

                connect(socket) {

                    todo(socket, 'connect');
                }

                disconnect(socket) {

                    todo(socket, 'disconnect');
                }
            }

            function todo(socket, action) {

                if (socket instanceof Socket()) {

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

                    doProcessing();
                }
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

                        remove(socket, {
                            lostconnect: doProcessing,
                            disconnect: doProcessing,
                            connect: doProcessing
                        });
                    }

                    if (isDisconnected || isConnected) {

                        processQueue.shift();

                        previousSocket = socket;

                        add(socket, 'lostconnect', doProcessing);

                        switch (action) {

                            case 'connect':

                                if (isDisconnected) {

                                    add(socket, 'connect', doProcessing, {
                                        once: true
                                    });

                                    socket.connect();

                                } else {

                                    doProcessing();
                                }

                                break;

                            case 'disconnect':

                                if (isConnected) {

                                    add(socket, 'disconnect', doProcessing, {
                                        once: true
                                    });

                                    socket.disconnect();

                                } else {

                                    doProcessing();
                                }
                        }

                    } else if (isDisconnecting) {

                        add(socket, 'disconnect', doProcessing, {
                            once: true
                        });

                    } else if (isConnecting) {

                        add(socket, 'connect', doProcessing, {
                            once: true
                        });
                    }

                } else {

                    previousSocket = null;

                    isProcessorStarted = false;
                }
            }

            var_class_1571573339618 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339618;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.manager';
                }

            };
        }



        if (var_once_value_1571573339618) {

            return var_once_value_1571573339618;

        }

        return var_once_value_1571573339618 = new var_class_1571573339618();

    };

})();

exports['src::data.connection.deploy'] = (() => {

    let generate, isObject, isArray, Manager;

    let var_init_locked_1571573339634;





    function main(connectionNames, connectionsVarName, connections, subscriberMap) {

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
         * @import Manager from data.connection.socket.manager
         * 
         * @param {array} connectionNames 连接名称集合
         * 
         * @param {string} connectionsVarName 连接实例集合名称
         * 
         * @param {array} connections 连接实例集合
         * 
         * @param {object} subscriberMap 订阅器定义集合
         * 
         * @return {object}
         * 
         */

        let {
            keys
        } = Object;

        function isMounted() {

            return !!this[connectionsVarName];
        }

        return {

            mounted() {

                let scope = this;

                if (isMounted.call(scope)) {

                    return;
                }

                scope[connectionsVarName] = connections;

                if (connectionNames) {

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

                let names = keys(subscriberMap),
                    instanceId = scope.connectionId || generate('connection-');

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

            unsubscribe(name, connectionName) {

                let {
                    subscribers
                } = subscriberMap[connectionName];

                delete subscribers[name];

                connections[connectionName].unsubscribe(name, this.connectionId);
            },

            subscribe(name, options) {

                let scope = this,
                    connectionName,
                    subscriber;

                if (isObject(options)) {

                    let {
                        connection = 'default',
                            ...params
                    } = options;

                    connectionName = connection;

                    subscriber = params;

                } else {

                    name = 'default';

                    subscriber = {
                        fn: options
                    };
                }

                connections[connectionName].subscribe(name, {
                    ...subscriber,
                    instanceId: scope.connectionId,
                    scope
                });

                let {
                    subscribers
                } = subscriberMap[connectionName];

                subscribers[name] = subscriber;
            },

            unmounted() {

                let scope = this;

                if (!isMounted.call(scope)) {

                    return;
                }

                let names = keys(subscriberMap);

                for (let name of names) {

                    let {
                        varName,
                        connection,
                        subscribers
                    } = subscriberMap[name];

                    connection.unsubscribes(keys(subscribers), scope.connectionId);

                    delete scope[varName];
                }

                delete scope[connectionsVarName];
            }

        };

    }

    return function(connectionNames, connectionsVarName, connections, subscriberMap) {


        if (!var_init_locked_1571573339634) {

            generate = include('id.generate');
            isObject = include('is.object.simple');
            isArray = include('is.array');
            Manager = include('data.connection.socket.manager');

            var_init_locked_1571573339634 = true;
        }




        return main.call(this, connectionNames, connectionsVarName, connections, subscriberMap);
    };

})();

exports['src::data.connection.deploy.lifecycle'] = (() => {

    let deploy;

    let var_init_locked_1571573339646;





    function main(connectionNames, connections, component, prefix) {


        /**
         * 
         * 对象版部署封装
         * 
         * @import deploy from ....deploy
         * 
         * @param {array} connectionNames 订阅对象名称集合
         * 
         * @param {object} connections 订阅对象
         * 
         * @param {object} component 组件定义对象
         * 
         * @param {string} [prefix = '$'] 订阅器变量前缀
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
                    varName: `${prefix}${field}`,
                    connection: connections[name],
                    subscribers
                };

                delete component[field];
            }
        }

        return deploy(connectionNames, `${prefix}connections`, connections, config);

    }

    return function(connectionNames, connections, component, prefix = '$') {


        if (!var_init_locked_1571573339646) {

            deploy = include('src::data.connection.deploy');

            var_init_locked_1571573339646 = true;
        }




        return main.call(this, connectionNames, connections, component, prefix);
    };

})();

exports['src::data.connection.deploy.miniprogram'] = (() => {

    let empty, deploy;

    let var_init_locked_1571573339661;





    function main(connections, component, defaultConnectionNames) {


        /**
         * 
         * 基于数据连接的小程序封装
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
        } = deploy(connectionNames, connections, component);

        async function onLoad(options) {

            let me = this;

            await mounted.call(me);

            originLoad.call(me, options);

        }

        async function onShow() {

            let me = this;

            await mounted.call(me);

            originShow.call(me, options);
        }

        return {
            ...options,
            onLoad(options) {

                onLoad.call(this, options);

            },

            onShow() {

                onShow.call(this);
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


        if (!var_init_locked_1571573339661) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1571573339661 = true;
        }




        return main.call(this, connections, component, defaultConnectionNames);
    };

})();

exports['src::data.connection.deploy.module'] = (() => {

    let empty, deploy;

    let var_init_locked_1571573339673;





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


        if (!var_init_locked_1571573339673) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1571573339673 = true;
        }




        return main.call(this, connections, module);
    };

})();

exports['src::data.connection.deploy.vue'] = (() => {

    let empty, deploy;

    let var_init_locked_1571573339702;





    async function main(connections, component) {


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
        } = deploy(false, connections, component);

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

            async destroyed() {

                let me = this;

                await originUnmounted.call(me);

                unmounted.call(me);
            },

            ...options
        };

    }

    return async function(connections, component) {


        if (!var_init_locked_1571573339702) {

            empty = include('function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1571573339702 = true;
        }




        return await main.call(this, connections, component);
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

exports['src::data.connection.flow'] = (() => {

    let isObject, isString, isFunction, isArray, isPromise, isDefined, generate, get;

    let var_init_locked_1571573339723;

    let var_class_1571573339723;



    return function(message, flows, methods, callback, scoped) {


        if (!var_init_locked_1571573339723) {

            isObject = include('is.object.simple');
            isString = include('is.string');
            isFunction = include('is.function');
            isArray = include('is.array');
            isPromise = include('is.promise');
            isDefined = include('is.defined');
            generate = include('id.generate');
            get = include('function.get');

            var_init_locked_1571573339723 = true;
        }



        if (!var_class_1571573339723) {

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
                            instanceId: me.flowId = generate('flow-')
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

            var_class_1571573339723 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339723;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.flow';
                }

            };
        }


        return new var_class_1571573339723(message, flows, methods, callback, scoped);
    };

})();

exports['src::data.Subscriber.constructor'] = (() => {

    let get, add, emptyFn;

    let var_init_locked_1571573339728;





    function main(connection, name, {
        processData,
        listeners,
        params,
        cache,
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
         * @import add from event.listener.add
         * 
         * @import emptyFn from function.empty value
         * 
         * @param {data.connection} connection 当前订阅器所在的连接对象
         * 
         * @param {string} name 订阅名称
         * 
         * @param {object} config 订阅器配置
         * 
         * @param {function} [config.processData] 处理数据方法
         *  
         * @param {object} [config.listeners = {}] 来自古地外部事件监听
         * 
         * @param {mixed} [config.params] 默认打开的订阅参数
         * 
         * @param {boolean} [config.cache = false] 默认不缓存 
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

        me.connection = connection;

        me.$bubbleTarget = connection;

        me.cache = cache;

        me.processData = processData || (({
            data
        }) => data);

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


    }

    return function(connection, name, {
        processData,
        listeners = {},
        params,
        cache = false,
        autoOpen = true,
        extraParams = {},
        defaultParams = {},
        fn,
        scope
    }) {


        if (!var_init_locked_1571573339728) {

            get = include('function.get');
            add = include('event.listener.add');
            emptyFn = include('function.empty')();

            var_init_locked_1571573339728 = true;
        }




        return main.call(this, connection, name, {
            processData,
            listeners,
            params,
            cache,
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

    let var_init_locked_1571573339735;





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
                params,
                connection,
                name
            } = me;

        if (closed) {

            return;
        }

        if (!isDefined(data)) {

            return;
        }

        me.fireEvent('data', data, params);

        if (bindFn) {

            return bindFn(data, params);
        }

    }

    return function(data) {


        if (!var_init_locked_1571573339735) {

            isDefined = include('is.defined');

            var_init_locked_1571573339735 = true;
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

    let var_init_locked_1571573339740;





    function main(params) {


        /**
         * 
         * 打开订阅器
         * 
         * @import equals from data.equals
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


        if (!var_init_locked_1571573339740) {

            equals = include('data.equals');
            assign = include('object.assign');

            var_init_locked_1571573339740 = true;
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

        me.fireEvent('close', params);

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::data.Subscriber.destroy'] = (() => {

    let removeAll;

    let var_init_locked_1571573339749;





    function main() {


        /**
         * 
         * 销毁
         * 
         * @import removeAll from event.listener.remove.all
         * 
         */

        let me = this;

        me.close();

        delete me.bindFn;

        delete me.extraParams;

        delete me.defaultParams;

        me.fireEvent('destroy');

        removeAll(me);

    }

    return function() {


        if (!var_init_locked_1571573339749) {

            removeAll = include('event.listener.remove.all');

            var_init_locked_1571573339749 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.Subscriber'] = (() => {

    let mixin_1571573338845__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1571573339754;

    let var_class_1571573339754;



    return function() {


        if (!var_init_locked_1571573339754) {

            mixin_1571573338845__1 = include('mixin.observable');
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

            var_init_locked_1571573339754 = true;
        }



        if (!var_class_1571573339754) {

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

            var_class_1571573339754 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339754;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.Subscriber';
                }

            };
        }


        return var_class_1571573339754;
    };

})();

exports['src::data.connection.message.address'] = (() => {

    let Subscriber, isDefined;

    let var_init_locked_1571573339764;

    let var_class_1571573339764;



    return function(name, options) {


        if (!var_init_locked_1571573339764) {

            Subscriber = include('data.Subscriber')();
            isDefined = include('is.defined');

            var_init_locked_1571573339764 = true;
        }



        if (!var_class_1571573339764) {


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



            var_class_1571573339764 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339764;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message.address';
                }

            };
        }


        return new var_class_1571573339764(name, options);
    };

})();

exports['src::data.connection.message'] = (() => {

    let Connection, isObject, isString, createAddress, isDefined, assign, from;

    let var_init_locked_1571573339775;

    let var_class_1571573339775;



    return function() {


        if (!var_init_locked_1571573339775) {

            Connection = include('data.connection')();
            isObject = include('is.object.simple');
            isString = include('is.string');
            createAddress = include('data.connection.message.address');
            isDefined = include('is.defined');
            assign = include('object.assign');
            from = include('array.from');

            var_init_locked_1571573339775 = true;
        }



        if (!var_class_1571573339775) {

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

            var_class_1571573339775 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339775;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message';
                }

            };
        }


        return new var_class_1571573339775();
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

    let var_init_locked_1571573339791;

    let var_class_1571573339791;



    return function() {


        if (!var_init_locked_1571573339791) {

            Connection = include('data.connection.socket')();
            add = include('event.listener.add');
            getWS = include('socket.io.ws');
            Manager = include('src::data.connection.socket.manager')();
            removeAll = include('event.listener.remove.all');

            var_init_locked_1571573339791 = true;
        }



        if (!var_class_1571573339791) {

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

            var_class_1571573339791 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339791;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.io';
                }

            };
        }


        return var_class_1571573339791;
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

    let var_init_locked_1571573339806;





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


        if (!var_init_locked_1571573339806) {

            isAbsolute = include('is.url.absolute');

            var_init_locked_1571573339806 = true;
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

        me.defaultDuration = duration;

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

exports['src::timer.end'] = (() => {









    function main() {


        /**
         * 
         * 结束计时
         *
         */

        let me = this,
            {
                intervalId
            } = me;

        if (intervalId) {

            clearInterval(intervalId);

            clearTimeout(intervalId);

            delete me.intervalId;

            me.fireEvent('timeend');

        }

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::timer.reset'] = (() => {

    let isDefined;

    let var_init_locked_1571573339813;





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
        }

    }

    return function() {


        if (!var_init_locked_1571573339813) {

            isDefined = include('is.defined');

            var_init_locked_1571573339813 = true;
        }




        return main.call(this);
    };

})();

exports['src::timer.start'] = (() => {

    let isNumber, end, reset;

    let var_init_locked_1571573339815;

    let var_current_scope_1571573339815;




    /**
     * 
     * 启动计时
     * 
     * @import is.number
     * 
     * @import end from ..end scoped
     * 
     * @import reset from ..reset scoped
     * 
     * @param {number} [duration] 计时时长
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

                reset();

                me.intervalId = setTimeout(onInterval, remainDuration);
            }

        } else {

            reset();

            me.fireEvent('timeout');
        }
    }

    function main(duration) {

        let me = this,
            {
                interval,
                defaultDuration
            } = me;

        me.end();

        duration = isNumber(duration) ? duration : defaultDuration;

        me.fireEvent('timestart');

        me.intervalId = setInterval(me.onInterval = onInterval.bind(me, duration, Date.now()), interval);
    }

    return function(duration) {


        if (!var_init_locked_1571573339815) {

            isNumber = include('is.number');

            var_init_locked_1571573339815 = true;
        }



        if (!var_current_scope_1571573339815 !== this) {

            end = include('src::timer.end').bind(this);
            reset = include('src::timer.reset').bind(this);

            var_current_scope_1571573339815 = this;
        }


        return main.call(this, duration);
    };

})();

exports['src::timer.restart'] = (() => {









    function main() {


        /**
         * 
         * 重新启动计时
         * 
         */

        let me = this;

        me.end();

        me.start();

    }

    return function() {





        return main.call(this);
    };

})();

exports['src::timer'] = (() => {

    let mixin_1571573338918__1, extend, constructor, method_start, method_restart, method_end, isObject;

    let var_init_locked_1571573339820;

    let var_class_1571573339820;



    return function(config) {


        if (!var_init_locked_1571573339820) {

            mixin_1571573338918__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::timer.constructor');
            method_start = include('src::timer.start');
            method_restart = include('src::timer.restart');
            method_end = include('src::timer.end');
            isObject = include('is.object.simple');

            var_init_locked_1571573339820 = true;
        }



        if (!var_class_1571573339820) {

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
                restart(...args) {

                    return method_restart.apply(this, args);

                }
                end(...args) {

                    return method_end.apply(this, args);

                }



            }

            var_class_1571573339820 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339820;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::timer';
                }

            };
        }


        return new var_class_1571573339820(config);
    };

})();

exports['src::data.connection.socket.standard'] = (() => {

    let Connection, join, createTimer, add, removeAll, Manager, emptyFn;

    let var_init_locked_1571573339830;

    let var_class_1571573339830;



    return function() {


        if (!var_init_locked_1571573339830) {

            Connection = include('data.connection.socket')();
            join = include('url.join');
            createTimer = include('timer');
            add = include('event.listener.add');
            removeAll = include('event.listener.remove.all');
            Manager = include('src::data.connection.socket.manager')();
            emptyFn = include('function.empty')();

            var_init_locked_1571573339830 = true;
        }



        if (!var_class_1571573339830) {

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

                    if (disconnectingState) {

                        me.fireEvent('disconnect');

                    } else {

                        me.fireEvent('lostconnect');
                    }
                }

                onSocketMessage(data) {

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
                        error: emptyFn,
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


            var_class_1571573339830 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339830;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard';
                }

            };
        }


        return var_class_1571573339830;
    };

})();

exports['src::miniprogram.socket'] = (() => {

    let get;

    let var_init_locked_1571573339845;

    let var_class_1571573339845;



    return function() {


        if (!var_init_locked_1571573339845) {

            get = include('function.get');

            var_init_locked_1571573339845 = true;
        }



        if (!var_class_1571573339845) {


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

            var_class_1571573339845 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339845;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::miniprogram.socket';
                }

            };
        }


        return var_class_1571573339845;
    };

})();

exports['src::data.connection.socket.standard.miniprogram'] = (() => {

    let Connection, WebSocket;

    let var_init_locked_1571573339847;

    let var_class_1571573339847;



    return function() {


        if (!var_init_locked_1571573339847) {

            Connection = include('data.connection.socket.standard')();
            WebSocket = include('miniprogram.socket')();

            var_init_locked_1571573339847 = true;
        }



        if (!var_class_1571573339847) {

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

            var_class_1571573339847 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339847;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.miniprogram';
                }

            };
        }


        return var_class_1571573339847;
    };

})();

exports['src::data.connection.socket.standard.normal'] = (() => {

    let Connection;

    let var_init_locked_1571573339863;

    let var_class_1571573339863;



    return function() {


        if (!var_init_locked_1571573339863) {

            Connection = include('data.connection.socket.standard')();

            var_init_locked_1571573339863 = true;
        }



        if (!var_class_1571573339863) {

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

            var_class_1571573339863 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339863;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.normal';
                }

            };
        }


        return var_class_1571573339863;
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

exports['src::string.split'] = (() => {

    let isEmpty;

    let var_init_locked_1571573339881;






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


        if (!var_init_locked_1571573339881) {

            isEmpty = include('is.empty');

            var_init_locked_1571573339881 = true;
        }




        return main.call(this, target, splitRe);
    };

})();

exports['src::is.object'] = (() => {

    let isType;

    let var_init_locked_1571573339883;





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


        if (!var_init_locked_1571573339883) {

            isType = include('is.type');

            var_init_locked_1571573339883 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::object.value.get'] = (() => {

    let split, isObject, isArray;

    let var_init_locked_1571573339886;





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
         * @scoped
         * 
         */

        if (key === '.') {

            return data;
        }

        const arrayItemRe = /(\w+)\[(\d+)\]/;

        if (isObject(data)) {

            let keys = split(key, /\./),
                result;

            for (let key of keys) {

                let keyMatch = key.match(arrayItemRe);

                if (keyMatch) {

                    result = data[keyMatch[1]][Number(keyMatch[2])];

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


        if (!var_init_locked_1571573339886) {

            split = include('string.split');
            isObject = include('is.object');
            isArray = include('is.array');

            var_init_locked_1571573339886 = true;
        }




        return main.call(this, data, key);
    };

})();

exports['src::data.model'] = (() => {

    let get, isString, isFunction, isObject, isArray;

    let var_init_locked_1571573339892;

    let var_class_1571573339892;



    return function() {


        if (!var_init_locked_1571573339892) {

            get = include('object.value.get');
            isString = include('is.string');
            isFunction = include('is.function');
            isObject = include('is.object.simple');
            isArray = include('is.array');

            var_init_locked_1571573339892 = true;
        }



        if (!var_class_1571573339892) {

            /**
             * 
             * 数据模型类
             * 
             * @import get from object.value.get
             * 
             * @import is.string
             * 
             * @import is.function
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.array
             * 
             * @param {object} model 数据模型定义
             * 
             * @class
             * 
             */

            const propertyNameRe = /^[^\_]\w+$/;

            class main {

                constructor({
                    root = '.',
                    id,
                    properties
                }) {

                    let innerProperties = [],
                        innerPropertyMap = {};

                    if (isObject(properties)) {

                        let names = Object.keys(properties);

                        for (let name of names) {

                            let property = properties[name];

                            if (isString(name)) {

                                property = {
                                    name,
                                    mapping: property
                                };

                            } else if (isObject(property)) {

                                property = {
                                    ...property,
                                    name
                                };
                            }

                            innerPropertyMap[name] = property;

                            innerProperties.push(property);
                        }

                    } else if (isArray(properties)) {

                        for (let property of properties) {

                            if (isString(property)) {

                                property = {
                                    name: property,
                                    mapping: property
                                };
                            }

                            innerPropertyMap[name] = property;

                            innerProperties.push(property);
                        }
                    }

                    let model = {
                        root,
                        id,
                        properties: innerProperties,
                        propertyMap: innerPropertyMap
                    };

                    Object.defineProperties(this, {
                        readRawData: generate_read_raw_data(model),
                        readData: () => {},
                        getData: () => {},
                        saveData: () => {}
                    });
                }
            }

            {
                function get_data(data, path, rootData) {

                    if (isFunction(path)) {

                        return path(data, rootData);

                    } else if (isString(path)) {

                        return get(data, path);
                    }
                }

                function generate_read_raw_data({
                    root,
                    properties
                }) {

                    return data => {

                        let items = from(get_data(data, root)),
                            records = [];

                        for (let item of items) {

                            let record = {};

                            for (let {
                                    name,
                                    mapping
                                } of properties) {

                                record[name] = get_data(item, mapping, data);
                            }

                            records.push(record);
                        }

                        return records;
                    };
                }
            }

            {
                function get_id(data, id) {

                    if (isFunction(id)) {

                        return id(data);

                    } else if (isString(id)) {

                        return data[id];
                    }
                }

                function get_property(data, get) {

                    if (!isFunction(get)) {

                        return data[name];

                    }

                    return get(data);
                }

                function set_property(data, name, set, value) {

                    if (!isFunction(get)) {

                        data[name] = value;

                    } else {

                        set(data, value);
                    }
                }

                function generate_read_data({
                    id,
                    propertyMap
                }) {

                    return data => {

                        let items = from(data);

                        for (let item of items) {

                            new Proxy({
                                data: item,
                                privates: {
                                    id: get_id(record, id),
                                    caches: {}
                                }
                            }, {

                                set({
                                    data
                                }, name, value) {

                                    if (propertyMap.hasOwnProperty(name)) {

                                        let {
                                            set
                                        } = propertyMap[name];

                                        set_property(data, name, set, value);
                                    }

                                },

                                get({
                                    data,
                                    privates
                                }, name) {

                                    switch (name) {

                                        case '_id':

                                            return privates.id;

                                        default:

                                            if (propertyMap.hasOwnProperty(name)) {

                                                let {
                                                    cache,
                                                    get
                                                } = propertyMap[name];

                                                if (cache === true) {

                                                    let {
                                                        caches
                                                    } = privates;

                                                    if (!caches.hasOwnProperty(name)) {

                                                        caches[name] = get_property(data, get);
                                                    }

                                                    return cache[name];
                                                }

                                                return get_property(data, get);
                                            }
                                    }
                                }

                            });

                            for (let name of names) {

                                let property = properties[name];

                                if (!isObject(property)) {

                                    descriptor.set = ({})

                                } else {

                                    record[name] = get_data(item, property.mapping, data);
                                }
                            }
                        }
                    };
                }
            }

            var_class_1571573339892 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339892;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model';
                }

            };
        }


        return var_class_1571573339892;
    };

})();

exports['src::is.class.from'] = (() => {

    let isClass, isString;

    let var_init_locked_1571573339899;





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


        if (!var_init_locked_1571573339899) {

            isClass = include('is.class');
            isString = include('is.string');

            var_init_locked_1571573339899 = true;
        }




        return main.call(this, data, baseClass);
    };

})();

exports['src::is.data.model.class'] = (() => {

    let dataModel, isClass;

    let var_init_locked_1571573339901;





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


        if (!var_init_locked_1571573339901) {

            dataModel = include('data.model');
            isClass = include('is.class.from');

            var_init_locked_1571573339901 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.model.get'] = (() => {

    let Model, isModelClass, isString, isFunction;

    let var_init_locked_1571573339905;





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


        if (!var_init_locked_1571573339905) {

            Model = include('data.model')();
            isModelClass = include('is.data.model.class');
            isString = include('is.string');
            isFunction = include('is.function');

            var_init_locked_1571573339905 = true;
        }




        return main.call(this, model);
    };

})();

exports['src::data.reader.json'] = (() => {

    let objectValueGet, isString, isFunction, arrayFrom, isEmpty, getModel;

    let var_init_locked_1571573339911;





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


        if (!var_init_locked_1571573339911) {

            objectValueGet = include('object.value.get');
            isString = include('is.string');
            isFunction = include('is.function');
            arrayFrom = include('array.from');
            isEmpty = include('is.empty');
            getModel = include('data.model.get');

            var_init_locked_1571573339911 = true;
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

    let var_init_locked_1571573339916;





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


        if (!var_init_locked_1571573339916) {

            createProxy = include('object.proxy');
            createReader = include('data.reader.json');

            var_init_locked_1571573339916 = true;
        }




        return main.call(this, {
            reader,
            model
        });
    };

})();

exports['src::data.proxy.read'] = (() => {

    let isPromise;

    let var_init_locked_1571573339921;






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


        if (!var_init_locked_1571573339921) {

            isPromise = include('is.promise');

            var_init_locked_1571573339921 = true;
        }




        return main.call(this, options);
    };

})();

exports['src::data.proxy'] = (() => {

    let mixin_1571573338966__1, extend, constructor, method_read, isObject;

    let var_init_locked_1571573339923;

    let var_class_1571573339923;



    return function() {


        if (!var_init_locked_1571573339923) {

            mixin_1571573338966__1 = include('mixin.observable');
            extend = include('class.empty')();
            constructor = include('src::data.proxy.constructor');
            method_read = include('src::data.proxy.read');
            isObject = include('is.object.simple');

            var_init_locked_1571573339923 = true;
        }



        if (!var_class_1571573339923) {

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

            var_class_1571573339923 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339923;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy';
                }

            };
        }


        return var_class_1571573339923;
    };

})();

exports['src::data.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1571573339931;

    let var_class_1571573339931;



    return function(options) {


        if (!var_init_locked_1571573339931) {

            Proxy = include('data.proxy')();

            var_init_locked_1571573339931 = true;
        }



        if (!var_class_1571573339931) {


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

            var_class_1571573339931 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573339931;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy.memory';
                }

            };
        }


        return new var_class_1571573339931(options);
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

    let var_init_locked_1571573339945;





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


        if (!var_init_locked_1571573339945) {

            isFunction = include('is.function');
            generate = include('id.generate');
            from = include('array.from');
            get = include('object.value.get');
            isString = include('is.string');

            var_init_locked_1571573339945 = true;
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

    let var_init_locked_1571573339956;





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


        if (!var_init_locked_1571573339956) {

            get = include('object.value.get');
            emptyFn = include('function.empty')();
            isFunction = include('is.function');
            generate = include('id.generate');
            createReader = include('data.reader.create');
            defineParentProperty = include('data.structure.property.define.parent');
            defineIdProperty = include('data.structure.property.define.id');
            defineInnerProperty = include('data.structure.property.define.inner');
            defineModelProperty = include('data.structure.property.define.model');

            var_init_locked_1571573339956 = true;
        }




        return main.call(this, model, {
            getRootData,
            defineRecordProperty
        });
    };

})();

exports['src::is.data.structure'] = (() => {

    let isObject, isArray;

    let var_init_locked_1571573339961;





    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据结构
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.array
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        return (isObject(data) || isArray(data)) && data.hasOwnProperty('__ZBEE_DATA_MODEL__');

    }

    return function(data) {


        if (!var_init_locked_1571573339961) {

            isObject = include('is.object.simple');
            isArray = include('is.array');

            var_init_locked_1571573339961 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::is.data.record'] = (() => {

    let isObject, is;

    let var_init_locked_1571573339963;





    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据记录
         * 
         * @import isObject from is.object.simple
         * 
         * @import is from ..structure
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        return is(data) && isObject(data);

    }

    return function(data) {


        if (!var_init_locked_1571573339963) {

            isObject = include('is.object.simple');
            is = include('src::is.data.structure');

            var_init_locked_1571573339963 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.record.property.define'] = (() => {

    let is, isFunction, isDefined, emptyFn;

    let var_init_locked_1571573339966;





    /**
     * 
     * 定义数据记录的属性
     * 
     * @import is from is.data.record
     * 
     * @import is.function
     * 
     * @import is.defined
     * 
     * @import emptyFn from function.empty value
     * 
     * @param {object} record 数据记录
     * 
     * @param {string} name 属性名称
     * 
     * @param {object} descriptor 属性描述
     * 
     * @param {string} [descriptor.cache = false] 缓存属性值
     * 
     * @param {function} [descriptor.set] 设置属性值方法
     * 
     * @param {function} [descriptor.get] 获取属性值方法
     * 
     * @param {mixed} [descriptor.value] 属性值
     * 
     * @param {string} [descriptor.mode = 'readwrite'] 属性读写模式
     * 
     */

    const {
        defineProperty
    } = Object;

    function main(record, name, {
        cache,
        set,
        get,
        value,
        mode
    }) {

        if (is(record)) {

            let setFn,
                getFn;

            if (isFunction(get) || isFunction(set)) {

                if (cache) {

                    getFn = () => {

                        let {
                            __ZBEE_DATA_INNER__: data
                        } = record;

                        if (data.hasOwnProperty(name)) {

                            return data[name];
                        }

                        return data[name] = get.call(record, name);
                    };

                } else {

                    getFn = get;
                }

                setFn = setFn;

            } else if (isDefined(value)) {

                record.__ZBEE_DATA_INNER__[name] = value;

                switch (mode) {

                    case 'writeonly':
                    case 'readwrite':

                        setFn = value => {

                            record.__ZBEE_DATA_INNER__[name] = value;
                        };
                }

                switch (mode) {

                    case 'readonly':
                    case 'readwrite':

                        getFn = () => {

                            return record.__ZBEE_DATA_INNER__[name];
                        };
                }

            }

            defineProperty(record, name, {
                enumerable: true,
                configurable: true,
                set: setFn || emptyFn,
                get: getFn || emptyFn
            });
        }
    }

    return function(record, name, {
        cache = false,
        set,
        get,
        value,
        mode = 'readwrite'
    }) {


        if (!var_init_locked_1571573339966) {

            is = include('is.data.record');
            isFunction = include('is.function');
            isDefined = include('is.defined');
            emptyFn = include('function.empty')();

            var_init_locked_1571573339966 = true;
        }




        return main.call(this, record, name, {
            cache,
            set,
            get,
            value,
            mode
        });
    };

})();

exports['src::data.record.empty'] = (() => {

    let define;

    let var_init_locked_1571573339970;





    function main(model) {


        /**
         * 
         * 创建一个空的数据记录
         * 
         * @import define from data.structure.property.define.model
         * 
         * @param {object} model 模型
         * 
         * @return {data.Record} 数据记录 
         * 
         */

        let record = {};

        define(record, model);

        return Object.freeze(record);

    }

    return function(model) {


        if (!var_init_locked_1571573339970) {

            define = include('data.structure.property.define.model');

            var_init_locked_1571573339970 = true;
        }




        return main.call(this, model);
    };

})();

exports['src::data.reader.create.raw'] = (() => {

    let createReader, isString, get, isDefined, define, createEmpty, from, isObject, isFunction;

    let var_init_locked_1571573339974;





    /**
     * 
     * 读取外部数据
     * 
     * @import createReader from ....create
     * 
     * @import is.string
     * 
     * @import get from object.value.get
     * 
     * @import is.defined
     * 
     * @import define from data.record.property.define
     * 
     * @import createEmpty from data.record.empty
     * 
     * @import from from array.from
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.function
     * 
     * @param {object} model 数据模型定义
     * 
     * @return {data.Reader} 数据模型对象 
     * 
     */

    function getRootData(data, root) {

        if (isString(root)) {

            return from(get(data, root));

        } else if (isFunction(root)) {

            return from(root(data));
        }

        return from(data);
    }

    function getMappingData(data, mapping) {

        if (isString(mapping)) {

            return get(data, mapping);

        } else if (isFunction(mapping)) {

            return mapping(data);
        }
    }

    function defineRecordProperty(record, name, property, raw) {

        if (isString(property) || isFunction(property)) {

            property = {
                mapping: property
            };
        }

        if (isObject(property)) {

            let {
                mapping,
                defaultValue,
                mode,
                model,
                multi = true,
                set: setFn,
                get: getFn
            } = property;

            if (mapping) {

                let value = getMappingData(raw, mapping);

                if (!isDefined(value)) {

                    value = defaultValue;
                }

                define(record, name, {
                    mode,
                    value
                });

            } else if (model) {

                let result = main(model).read(raw);

                if (multi === false) {

                    if (result.length) {

                        result = result[0];

                    } else {

                        result = createEmpty(model);
                    }

                }

                result.__ZBEE_DATA_PARENT__ = record;

                define(record, name, {
                    mode,
                    value: result
                });

            } else if (setFn || getFn) {

                define(record, name, {
                    set: setFn,
                    get: getFn
                });
            }
        }
    }

    function main(model) {

        return createReader(model, {
            getRootData,
            defineRecordProperty
        });

    }



    return function(model) {


        if (!var_init_locked_1571573339974) {

            createReader = include('src::data.reader.create');
            isString = include('is.string');
            get = include('object.value.get');
            isDefined = include('is.defined');
            define = include('data.record.property.define');
            createEmpty = include('data.record.empty');
            from = include('array.from');
            isObject = include('is.object.simple');
            isFunction = include('is.function');

            var_init_locked_1571573339974 = true;
        }




        return main.call(this, model);
    };

})();

exports['src::data.reader.create.data'] = (() => {

    let createReader, isString, isFunction;

    let var_init_locked_1571573339981;






    /**
     * 
     * 读取内部数据
     * 
     * @import createReader from ....create
     * 
     * @import is.string
     * 
     * @import is.function
     * 
     * @param {object} model 数据模型定义
     * 
     * @return {data.Reader} 数据模型对象 
     * 
     */

    const {
        keys,
        defineProperty
    } = Object;

    function defineRecordProperty(record, name, property, raw) {

        if (isString(property) || isFunction(property)) {

            property = {
                mapping: true
            };
        }

        if (isObject(property)) {

            let {
                mapping,
                mode,
                model,
                multi = true,
                set: setFn,
                get: getFn
            } = property;

            if (mapping) {

                define(record, name, {
                    mode,
                    value: raw[name]
                });

            } else if (model) {

                let result = main(model).read(raw);

                if (multi === false) {

                    if (result.length) {

                        result = result[0];

                    }

                }

                result.__ZBEE_DATA_PARENT__ = record;

                define(record, name, {
                    mode,
                    value: result
                });

            } else if (setFn || getFn) {

                define(record, name, {
                    set: setFn,
                    get: getFn
                });
            }
        }
    }

    function main(model) {

        return createReader(model, {
            defineRecordProperty
        });

    }

    return function(model) {


        if (!var_init_locked_1571573339981) {

            createReader = include('src::data.reader.create');
            isString = include('is.string');
            isFunction = include('is.function');

            var_init_locked_1571573339981 = true;
        }




        return main.call(this, model);
    };

})();

exports['src::is.data.recordset'] = (() => {

    let isArray, is;

    let var_init_locked_1571573339986;





    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据记录集合
         * 
         * @import is.array
         * 
         * @import is from ..structure
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        return is(data) && isArray(data);

    }

    return function(data) {


        if (!var_init_locked_1571573339986) {

            isArray = include('is.array');
            is = include('src::is.data.structure');

            var_init_locked_1571573339986 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.writer.create'] = (() => {

    let isRecord, isRecordset, isDefined;

    let var_init_locked_1571573339989;





    /**
     * 
     * 生成数据写出器
     * 
     * @import isRecord from is.data.record
     * 
     * @import isRecordset from is.data.recordset
     * 
     * @import is.defined
     * 
     * @param {object} plugins 插件
     * 
     * @param {function} plugins.writeRecord  输出数据
     *
     * @return {data.Writer} 数据写出对象 
     * 
     */

    function writeRecordset(writeRecord, recordset, properties) {

        let result = [];

        for (let record of recordset) {

            result.push(writeRecord(record, properties));
        }

        return result;
    }

    function main({
        writeRecord
    }) {

        return {
            write(data) {

                if (isRecord(data)) {

                    return writeRecord(data, get_properties(data));

                } else if (isRecordset(data)) {

                    return writeRecordset(writeRecord, data, get_properties(data));
                }
            }
        }
    }

    function get_properties(structure) {

        let {
            properties = []
        } = structure.__ZBEE_DATA_MODEL__;

        return properties;
    }

    return function({
        writeRecord
    }) {


        if (!var_init_locked_1571573339989) {

            isRecord = include('is.data.record');
            isRecordset = include('is.data.recordset');
            isDefined = include('is.defined');

            var_init_locked_1571573339989 = true;
        }




        return main.call(this, {
            writeRecord
        });
    };

})();

exports['src::is.data.record.empty'] = (() => {

    let isRecord;

    let var_init_locked_1571573339992;





    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据记录
         * 
         * @import isRecord from is.data.record
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        if (isRecord(data)) {

            return !data.hasOwnProperty('__ZBEE_DATA_ID__');
        }

        return false;

    }

    return function(data) {


        if (!var_init_locked_1571573339992) {

            isRecord = include('is.data.record');

            var_init_locked_1571573339992 = true;
        }




        return main.call(this, data);
    };

})();

exports['src::data.writer.create.data'] = (() => {

    let createWriter, isString, isObject, isEmpty, isDefined;

    let var_init_locked_1571573339994;





    /**
     * 
     * 写出应用程序数据
     * 
     * @import createWriter from ....create
     * 
     * @import is.string
     * 
     * @import isObject from is.object.simple
     * 
     * @import isEmpty from is.data.record.empty
     * 
     * @import is.defined
     * 
     * @return {data.Writer} 数据写出对象 
     * 
     */

    const {
        keys,
        defineProperty
    } = Object;

    function writeRecord(record, properties) {

        if (isEmpty(record)) {

            return {};
        }

        let result = {},
            names = keys(properties);

        for (let name of names) {

            let value = record[name],
                property = properties[name];

            if (isObject(property)) {

                let {
                    private = false,
                        mode,
                        model
                } = property;

                if (private || mode === 'writeonly') {

                    continue;
                }

                if (model) {

                    value = main(model).write(value);
                }
            }

            if (isDefined(value)) {

                result[name] = value;
            }
        }

        return result;


    }

    function main() {

        return createWriter({
            writeRecord
        });
    }

    return function() {


        if (!var_init_locked_1571573339994) {

            createWriter = include('src::data.writer.create');
            isString = include('is.string');
            isObject = include('is.object.simple');
            isEmpty = include('is.data.record.empty');
            isDefined = include('is.defined');

            var_init_locked_1571573339994 = true;
        }




        return main.call(this);
    };

})();

exports['src::data.writer.create.storage'] = (() => {

    let createWriter, isString, isObject, isEmpty, isDefined;

    let var_init_locked_1571573339998;





    /**
     * 
     * 写出存储数据
     * 
     * @import createWriter from ....create
     * 
     * @import is.string
     * 
     * @import isObject from is.object.simple
     * 
     * @import isEmpty from is.data.record.empty
     * 
     * @import is.defined
     * 
     * @return {data.Writer} 数据写出对象 
     * 
     */

    const {
        keys,
        defineProperty
    } = Object;

    function writeRecord(record, properties) {

        if (isEmpty(record)) {

            return {};
        }

        let result = {},
            names = keys(properties);

        for (let name of names) {

            let value = record[name],
                property = properties[name];

            if (isObject(property)) {

                let {
                    mode,
                    model
                } = property;

                if (mode === 'writeonly') {

                    value = record.__ZBEE_DATA_INNER__[name];
                }

                if (model) {

                    value = main(model).write(value);
                }
            }

            if (isDefined(value)) {

                result[name] = value;
            }
        }

        return result;


    }

    function main() {

        return createWriter({
            writeRecord
        });
    }

    return function() {


        if (!var_init_locked_1571573339998) {

            createWriter = include('src::data.writer.create');
            isString = include('is.string');
            isObject = include('is.object.simple');
            isEmpty = include('is.data.record.empty');
            isDefined = include('is.defined');

            var_init_locked_1571573339998 = true;
        }




        return main.call(this);
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

exports['src::data.store'] = (() => {

    let createRawReader, createDataReader, createDataWriter, createStorageWriter, Observable, clear;

    let var_init_locked_1571573340008;

    let var_class_1571573340008;



    return function() {


        if (!var_init_locked_1571573340008) {

            createRawReader = include('data.reader.create.raw');
            createDataReader = include('data.reader.create.data');
            createDataWriter = include('data.writer.create.data');
            createStorageWriter = include('data.writer.create.storage');
            Observable = include('mixin.observable');
            clear = include('object.clear');

            var_init_locked_1571573340008 = true;
        }



        if (!var_class_1571573340008) {


            /**
             * 
             * 数据存储器类
             * 
             * @import createRawReader from data.reader.create.raw
             * 
             * @import createDataReader from data.reader.create.data
             * 
             * @import createDataWriter from data.writer.create.data
             * 
             * @import createStorageWriter from data.writer.create.storage
             * 
             * @import Observable from mixin.observable
             * 
             * @import clear from object.clear
             * 
             * @class
             * 
             * @param {object} model 数据模型定义
             * 
             * @return {data.Model} 数据存储器对象 
             * 
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    model,
                    data,
                    ...options
                }) {

                    super(options);

                    let me = this;

                    me.rawReader = createRawReader(model);

                    me.dataReader = createDataReader(model);

                    me.dataWriter = createDataWriter();

                    me.storageWriter = createStorageWriter();

                    me.ids = {};

                    if (data) {

                        me.data = me.dataReader.read(data);
                    }
                }

                get hasData() {

                    return !!this.data;
                }

                save() {

                    let me = this,
                        {
                            hasData,
                            storageWriter,
                            data
                        } = me;

                    if (hasData) {

                        me.fireEvent('save', storageWriter.write(data));
                    }
                }

                load(data) {

                    let me = this,
                        {
                            rawReader,
                            dataWriter
                        } = me;

                    me.fireEvent('load', dataWriter.write(me.data = rawReader.read(data)));
                }

                append(data) {

                    let me = this,
                        {
                            rawReader
                        } = me;

                    add.call(me, ...rawReader.read(data));

                    console.log('增量载入数据', $data);

                    // 触发 add 事件
                }

                onReplaceRecord(record, oldRecord) {

                    return record;
                }
            }

            function add(...records) {

                let me = this,
                    {
                        ids,
                        data
                    } = me;

                for (let record of records) {

                    let {
                        __ZBEE_DATA_ID__: id
                    } = record;

                    if (id) {

                        if (ids.hasOwnProperty(id)) {

                            let index = ids[id];

                            data[index] = me.onReplaceRecord(record, data[index]);

                        } else {

                            data.push(record);

                            ids[id] = data.length - 1;
                        }
                    }
                }
            }

            var_class_1571573340008 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340008;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store';
                }

            };
        }


        return var_class_1571573340008;
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

    let var_init_locked_1571573340025;





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


        if (!var_init_locked_1571573340025) {

            isDefined = include('is.defined');

            var_init_locked_1571573340025 = true;
        }




        return main.call(this, xy, anchor);
    };

})();

exports['src::mixin.region'] = (() => {

    let method_getAnchorXY, method_setAnchorXY, isObject;

    let var_init_locked_1571573340028;





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


        if (!var_init_locked_1571573340028) {

            method_getAnchorXY = include('src::mixin.region.xy.anchor.get');
            method_setAnchorXY = include('src::mixin.region.xy.anchor.set');
            isObject = include('is.object.simple');

            var_init_locked_1571573340028 = true;
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







    let var_once_value_1571573340035;

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






        if (var_once_value_1571573340035) {

            return var_once_value_1571573340035;

        }
        return var_once_value_1571573340035 = main.call(this);

    };

})();

exports['src::object.property.define'] = (() => {

    let capitalize, getPrefix, isDefined, isFunction;

    let var_init_locked_1571573340040;





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


        if (!var_init_locked_1571573340040) {

            capitalize = include('string.capitalize');
            getPrefix = include('object.property.prefix');
            isDefined = include('is.defined');
            isFunction = include('is.function');

            var_init_locked_1571573340040 = true;
        }




        return main.call(this, target, name, {
            value,
            writeOnce
        });
    };

})();

exports['src::object.properties.define'] = (() => {

    let defineProperty, isArray;

    let var_init_locked_1571573340043;





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


        if (!var_init_locked_1571573340043) {

            defineProperty = include('object.property.define');
            isArray = include('is.array');

            var_init_locked_1571573340043 = true;
        }




        return main.call(this, target, config);
    };

})();

exports['src::object.property.reset'] = (() => {

    let getPrefix;

    let var_init_locked_1571573340046;





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


        if (!var_init_locked_1571573340046) {

            getPrefix = include('object.property.prefix');

            var_init_locked_1571573340046 = true;
        }




        return main.call(this, target, name);
    };

})();

exports['src::object.properties.reset'] = (() => {

    let resetProperty;

    let var_init_locked_1571573340048;





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


        if (!var_init_locked_1571573340048) {

            resetProperty = include('object.property.reset');

            var_init_locked_1571573340048 = true;
        }




        return main.call(this, target, names);
    };

})();

exports['src::data.model.node.tree.base'] = (() => {

    let Model, insert, remove, region, isEmpty, defineProperties, from, resetProperties;

    let var_init_locked_1571573340053;

    let var_class_1571573340053;



    return function() {


        if (!var_init_locked_1571573340053) {

            Model = include('data.model')();
            insert = include('array.insert');
            remove = include('array.remove');
            region = include('mixin.region');
            isEmpty = include('is.object.empty');
            defineProperties = include('object.properties.define');
            from = include('array.from');
            resetProperties = include('object.properties.reset');

            var_init_locked_1571573340053 = true;
        }



        if (!var_class_1571573340053) {


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

            var_class_1571573340053 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340053;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree.base';
                }

            };
        }


        return var_class_1571573340053;
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

    let var_init_locked_1571573340066;

    let var_current_scope_1571573340066;



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




        if (!var_current_scope_1571573340066 !== this) {

            getSiblingNode = include('src::data.model.node.tree.node.sibling').bind(this);

            var_current_scope_1571573340066 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.node.sibling.next'] = (() => {

    let getSiblingNode;

    let var_init_locked_1571573340068;

    let var_current_scope_1571573340068;



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




        if (!var_current_scope_1571573340068 !== this) {

            getSiblingNode = include('src::data.model.node.tree.node.sibling').bind(this);

            var_current_scope_1571573340068 = this;
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

    let var_init_locked_1571573340083;

    let var_class_1571573340083;



    return function({
        x,
        y,
        width,
        height
    }) {


        if (!var_init_locked_1571573340083) {

            region = include('mixin.region');

            var_init_locked_1571573340083 = true;
        }



        if (!var_class_1571573340083) {


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



            var_class_1571573340083 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340083;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::math.region';
                }

            };
        }


        return new var_class_1571573340083({
            x,
            y,
            width,
            height
        });
    };

})();

exports['src::data.model.node.tree.region'] = (() => {

    let createRegion;

    let var_init_locked_1571573340087;





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


        if (!var_init_locked_1571573340087) {

            createRegion = include('math.region');

            var_init_locked_1571573340087 = true;
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

    let var_init_locked_1571573340133;

    let var_current_scope_1571573340133;



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




        if (!var_current_scope_1571573340133 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1571573340133 = this;
        }


        return main.call(this);
    };

})();

exports['src::data.model.node.tree.select.down'] = (() => {

    let select;

    let var_init_locked_1571573340135;

    let var_current_scope_1571573340135;



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




        if (!var_current_scope_1571573340135 !== this) {

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1571573340135 = this;
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

    let var_init_locked_1571573340142;





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


        if (!var_init_locked_1571573340142) {

            getDistance = include('math.point.distance');

            var_init_locked_1571573340142 = true;
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

    let var_init_locked_1571573340151;





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


        if (!var_init_locked_1571573340151) {

            resetProperty = include('object.property.reset');

            var_init_locked_1571573340151 = true;
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

    let mixin_1571573339005__1, extend, static_get_fieldConfigurations, get_selected, get_previousSiblingNode, get_nextSiblingNode, get_firstChildNode, get_lastChildNode, get_expanded, get_synchronized, get_isRoot, get_isLeaf, get_hidden, get_region, get_childCountScopeHeight, get_scopeHeight, get_descendantNodes, get_firstDescendantNodes, get_lastDescendantNodes, get_lastLeafNode, method_show, method_hide, method_layout, method_expand, method_collapse, method_select, method_deselect, method_synchronize, method_selectUp, method_selectDown, method_selectLeft, method_selectRight, method_getDepthNodes, method_appendChild, method_insertAfter, method_removeChild, method_contains, isObject;

    let var_init_locked_1571573340167;

    let var_class_1571573340167;



    return function() {


        if (!var_init_locked_1571573340167) {

            mixin_1571573339005__1 = include('mixin.region');
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

            var_init_locked_1571573340167 = true;
        }



        if (!var_class_1571573340167) {

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

            var_class_1571573340167 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340167;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree';
                }

            };
        }


        return var_class_1571573340167;
    };

})();

exports['src::data.model.node.tree.mind'] = (() => {

    let Model, isEmpty;

    let var_init_locked_1571573340181;

    let var_class_1571573340181;



    return function() {


        if (!var_init_locked_1571573340181) {

            Model = include('src::data.model.node.tree')();
            isEmpty = include('is.object.empty');

            var_init_locked_1571573340181 = true;
        }



        if (!var_class_1571573340181) {


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

            var_class_1571573340181 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340181;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model.node.tree.mind';
                }

            };
        }


        return var_class_1571573340181;
    };

})();

exports['src::data.store.tree.base'] = (() => {

    let Store, Model, define, from;

    let var_init_locked_1571573340194;

    let var_class_1571573340194;



    return function() {


        if (!var_init_locked_1571573340194) {

            Store = include('data.store')();
            Model = include('data.model.node.tree.mind')();
            define = include('class.define');
            from = include('array.from');

            var_init_locked_1571573340194 = true;
        }



        if (!var_class_1571573340194) {


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

            var_class_1571573340194 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340194;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.base';
                }

            };
        }


        return var_class_1571573340194;
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

    let var_init_locked_1571573340218;





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


        if (!var_init_locked_1571573340218) {

            from = include('array.from');

            var_init_locked_1571573340218 = true;
        }




        return main.call(this, nodes);
    };

})();

exports['src::data.store.tree'] = (() => {

    let extend, method_insert, method_remove, isObject;

    let var_init_locked_1571573340221;

    let var_class_1571573340221;



    return function() {


        if (!var_init_locked_1571573340221) {

            extend = include('src::data.store.tree.base')();
            method_insert = include('src::data.store.tree.insert');
            method_remove = include('src::data.store.tree.remove');
            isObject = include('is.object.simple');

            var_init_locked_1571573340221 = true;
        }



        if (!var_class_1571573340221) {

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

            var_class_1571573340221 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340221;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree';
                }

            };
        }


        return var_class_1571573340221;
    };

})();

exports['src::data.store.tree.mind'] = (() => {

    let Store;

    let var_init_locked_1571573340243;

    let var_class_1571573340243;



    return function(options) {


        if (!var_init_locked_1571573340243) {

            Store = include('data.store.tree')();

            var_init_locked_1571573340243 = true;
        }



        if (!var_class_1571573340243) {


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

            var_class_1571573340243 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340243;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.mind';
                }

            };
        }


        return new var_class_1571573340243(options);
    };

})();

exports['src::canvas.draw.line.bezierCurve'] = (() => {

    let assign;

    let var_init_locked_1571573340263;





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


        if (!var_init_locked_1571573340263) {

            assign = include('object.assign');

            var_init_locked_1571573340263 = true;
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

    let var_init_locked_1571573340267;





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


        if (!var_init_locked_1571573340267) {

            assign = include('object.assign');
            degree2radian = include('math.degree2radian');

            var_init_locked_1571573340267 = true;
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

    let var_init_locked_1571573340271;





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


        if (!var_init_locked_1571573340271) {

            isType = include('is.type');

            var_init_locked_1571573340271 = true;
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

    let var_init_locked_1571573340274;






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


        if (!var_init_locked_1571573340274) {

            isDirectory = include('is.directory');
            isFile = include('is.file');

            var_init_locked_1571573340274 = true;
        }




        return main.call(this, path, testRe);
    };

})();

exports['src::directory.create'] = (() => {

    let isDirectory;

    let var_init_locked_1571573340277;






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


        if (!var_init_locked_1571573340277) {

            isDirectory = include('is.directory');

            var_init_locked_1571573340277 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::directory.copy'] = (() => {

    let isDirectory, getAllFilePaths, createDirectory;

    let var_init_locked_1571573340280;





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


        if (!var_init_locked_1571573340280) {

            isDirectory = include('is.directory');
            getAllFilePaths = include('src::directory.paths.file.all');
            createDirectory = include('directory.create');

            var_init_locked_1571573340280 = true;
        }




        return main.call(this, src, dest);
    };

})();

exports['src::date.get'] = (() => {

    let isDefined;

    let var_init_locked_1571573340283;





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


        if (!var_init_locked_1571573340283) {

            isDefined = include('is.defined');

            var_init_locked_1571573340283 = true;
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

    let var_init_locked_1571573340291;





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


        if (!var_init_locked_1571573340291) {

            doFormat = include('string.format');

            var_init_locked_1571573340291 = true;
        }




        return main.call(this, data, regex, format);
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

    let var_init_locked_1571573340295;





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


        if (!var_init_locked_1571573340295) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1571573340295 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::date.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1571573340301;





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


        if (!var_init_locked_1571573340301) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1571573340301 = true;
        }




        return main.call(this, date, step);
    };

})();

exports['src::month.date.last'] = (() => {

    let get, prev, getLastDate;

    let var_init_locked_1571573340305;





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


        if (!var_init_locked_1571573340305) {

            get = include('date.get');
            prev = include('date.prev');
            getLastDate = include('src::month.date.last');

            var_init_locked_1571573340305 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::calendar.month'] = (() => {

    let get, getDays, prev, next, getLastDate;

    let var_init_locked_1571573340310;





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


        if (!var_init_locked_1571573340310) {

            get = include('date.get');
            getDays = include('week.days');
            prev = include('date.prev');
            next = include('date.next');
            getLastDate = include('month.date.last');

            var_init_locked_1571573340310 = true;
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

    let var_init_locked_1571573340317;

    let var_current_scope_1571573340317;



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


        if (!var_init_locked_1571573340317) {

            getLastDate = include('month.date.last');
            get = include('date.get.properties');

            var_init_locked_1571573340317 = true;
        }



        if (!var_current_scope_1571573340317 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);

            var_current_scope_1571573340317 = this;
        }


        return main.call(this, year, month, day);
    };

})();

exports['src::calendar.month.view.selectMonth'] = (() => {

    let getDates, deselect, select, getProperty;

    let var_init_locked_1571573340321;

    let var_current_scope_1571573340321;



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


        if (!var_init_locked_1571573340321) {

            getDates = include('src::calendar.month');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340321 = true;
        }



        if (!var_current_scope_1571573340321 !== this) {

            deselect = include('src::calendar.month.view.deselect').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340321 = this;
        }


        return main.call(this, year, month);
    };

})();

exports['src::calendar.month.view.constructor'] = (() => {

    let getProxy, selectMonth, select, getProperty;

    let var_init_locked_1571573340326;

    let var_current_scope_1571573340326;



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


        if (!var_init_locked_1571573340326) {

            getProxy = include('object.proxy');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340326 = true;
        }



        if (!var_current_scope_1571573340326 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340326 = this;
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

    let var_init_locked_1571573340332;





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


        if (!var_init_locked_1571573340332) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1571573340332 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectPrevMonth'] = (() => {

    let prev, getProperty, selectMonth;

    let var_init_locked_1571573340335;

    let var_current_scope_1571573340335;



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


        if (!var_init_locked_1571573340335) {

            prev = include('month.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340335 = true;
        }



        if (!var_current_scope_1571573340335 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1571573340335 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectLeft'] = (() => {

    let isFirst, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1571573340341;

    let var_current_scope_1571573340341;



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


        if (!var_init_locked_1571573340341) {

            isFirst = include('is.week.day.first');
            get = include('date.get');
            prevDate = include('date.prev');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340341 = true;
        }



        if (!var_current_scope_1571573340341 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340341 = this;
        }


        return main.call(this);
    };

})();

exports['src::is.week.day.last'] = (() => {

    let getDays;

    let var_init_locked_1571573340346;





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


        if (!var_init_locked_1571573340346) {

            getDays = include('week.days');

            var_init_locked_1571573340346 = true;
        }




        return main.call(this, date, weekStartDay);
    };

})();

exports['src::month.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1571573340348;





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


        if (!var_init_locked_1571573340348) {

            get = include('date.get');
            getProperty = include('date.get.properties');
            isDate = include('is.date');

            var_init_locked_1571573340348 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectNextMonth'] = (() => {

    let next, getProperty, selectMonth;

    let var_init_locked_1571573340352;

    let var_current_scope_1571573340352;



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


        if (!var_init_locked_1571573340352) {

            next = include('month.next');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340352 = true;
        }



        if (!var_current_scope_1571573340352 !== this) {

            selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

            var_current_scope_1571573340352 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectRight'] = (() => {

    let isLast, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1571573340356;

    let var_current_scope_1571573340356;



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


        if (!var_init_locked_1571573340356) {

            isLast = include('is.week.day.last');
            get = include('date.get');
            nextDate = include('date.next');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340356 = true;
        }



        if (!var_current_scope_1571573340356 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340356 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.date.first'] = (() => {

    let get;

    let var_init_locked_1571573340361;





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


        if (!var_init_locked_1571573340361) {

            get = include('date.get');

            var_init_locked_1571573340361 = true;
        }




        return main.call(this, year, month);
    };

})();

exports['src::month.dates.week.first'] = (() => {

    let getDays, getFirstDate, next;

    let var_init_locked_1571573340363;





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


        if (!var_init_locked_1571573340363) {

            getDays = include('week.days');
            getFirstDate = include('month.date.first');
            next = include('date.next');

            var_init_locked_1571573340363 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.prev.week'] = (() => {

    let prev;

    let var_init_locked_1571573340367;





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


        if (!var_init_locked_1571573340367) {

            prev = include('date.prev');

            var_init_locked_1571573340367 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectUp'] = (() => {

    let getFirstWeekDates, includes, get, prevMonth, prevDate, getProperty, select;

    let var_init_locked_1571573340371;

    let var_current_scope_1571573340371;



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


        if (!var_init_locked_1571573340371) {

            getFirstWeekDates = include('month.dates.week.first');
            includes = include('array.dates.includes');
            get = include('date.get');
            prevDate = include('date.prev.week');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340371 = true;
        }



        if (!var_current_scope_1571573340371 !== this) {

            prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340371 = this;
        }


        return main.call(this);
    };

})();

exports['src::month.dates.week.last'] = (() => {

    let getDays, getLastDate, prev;

    let var_init_locked_1571573340376;





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


        if (!var_init_locked_1571573340376) {

            getDays = include('week.days');
            getLastDate = include('month.date.last');
            prev = include('date.prev');

            var_init_locked_1571573340376 = true;
        }




        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::date.next.week'] = (() => {

    let next;

    let var_init_locked_1571573340380;





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


        if (!var_init_locked_1571573340380) {

            next = include('date.next');

            var_init_locked_1571573340380 = true;
        }




        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectDown'] = (() => {

    let getLastWeekDates, includes, get, nextMonth, nextDate, getProperty, select;

    let var_init_locked_1571573340385;

    let var_current_scope_1571573340385;



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


        if (!var_init_locked_1571573340385) {

            getLastWeekDates = include('month.dates.week.last');
            includes = include('array.dates.includes');
            get = include('date.get');
            nextDate = include('date.next.week');
            getProperty = include('date.get.properties');

            var_init_locked_1571573340385 = true;
        }



        if (!var_current_scope_1571573340385 !== this) {

            nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
            select = include('src::calendar.month.view.select').bind(this);

            var_current_scope_1571573340385 = this;
        }


        return main.call(this);
    };

})();

exports['src::calendar.month.view'] = (() => {

    let extend, constructor, method_select, method_selectLeft, method_selectRight, method_selectUp, method_selectDown, method_selectMonth, method_selectNextMonth, method_selectPrevMonth, method_deselect, isObject;

    let var_init_locked_1571573340390;

    let var_class_1571573340390;



    return function(target, config) {


        if (!var_init_locked_1571573340390) {

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

            var_init_locked_1571573340390 = true;
        }



        if (!var_class_1571573340390) {

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

            var_class_1571573340390 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340390;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::calendar.month.view';
                }

            };
        }


        return new var_class_1571573340390(target, config);
    };

})();

exports['src::browser.event.listeners'] = (() => {

    let map;

    let var_init_locked_1571573340399;



    let var_once_value_1571573340399;

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


        if (!var_init_locked_1571573340399) {

            map = include('map')();

            var_init_locked_1571573340399 = true;
        }





        if (var_once_value_1571573340399) {

            return var_once_value_1571573340399;

        }
        return var_once_value_1571573340399 = main.call(this);

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

    let var_init_locked_1571573340405;





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


        if (!var_init_locked_1571573340405) {

            is = include('src::browser.selector.is');

            var_init_locked_1571573340405 = true;
        }




        return main.call(this, el, selector);
    };

})();

exports['src::browser.event.stop'] = (() => {

    let isObject;

    let var_init_locked_1571573340407;





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


        if (!var_init_locked_1571573340407) {

            isObject = include('is.object.simple');

            var_init_locked_1571573340407 = true;
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

    let var_init_locked_1571573340411;





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


        if (!var_init_locked_1571573340411) {

            listeners = include('src::browser.event.listeners')();
            is = include('browser.selector.parent');
            stopEvent = include('src::browser.event.stop');
            preventEvent = include('src::browser.event.prevent');
            add = include('event.listener.add');

            var_init_locked_1571573340411 = true;
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

    let var_init_locked_1571573340417;





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


        if (!var_init_locked_1571573340417) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1571573340417 = true;
        }




        return main.call(this, event, fn, config);
    };

})();

exports['src::browser.event.listener.remove'] = (() => {

    let listeners, remove;

    let var_init_locked_1571573340424;





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


        if (!var_init_locked_1571573340424) {

            listeners = include('src::browser.event.listeners')();
            remove = include('event.listener.remove');

            var_init_locked_1571573340424 = true;
        }




        return main.call(this, target, event, fn);
    };

})();

exports['src::browser.event.listener.global.remove'] = (() => {

    let remove;

    let var_init_locked_1571573340431;





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


        if (!var_init_locked_1571573340431) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1571573340431 = true;
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







    let var_once_value_1571573340441;

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






        if (var_once_value_1571573340441) {

            return var_once_value_1571573340441;

        }
        return var_once_value_1571573340441 = main.call(this);

    };

})();

exports['src::is.browser.support.touch'] = (() => {







    let var_once_value_1571573340443;

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






        if (var_once_value_1571573340443) {

            return var_once_value_1571573340443;

        }
        return var_once_value_1571573340443 = main.call(this);

    };

})();

exports['src::browser.event.name.single'] = (() => {

    let isSupportPointer, isSupportTouch;

    let var_init_locked_1571573340445;





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


        if (!var_init_locked_1571573340445) {

            isSupportPointer = include('is.browser.support.pointer');
            isSupportTouch = include('is.browser.support.touch');

            var_init_locked_1571573340445 = true;
        }




        return main.call(this, name);
    };

})();

exports['src::os.name'] = (() => {







    let var_once_value_1571573340448;

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






        if (var_once_value_1571573340448) {

            return var_once_value_1571573340448;

        }
        return var_once_value_1571573340448 = main.call(this);

    };

})();

exports['src::browser.scale'] = (() => {

    let osName;

    let var_init_locked_1571573340449;





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


        if (!var_init_locked_1571573340449) {

            osName = include('os.name');

            var_init_locked_1571573340449 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1571573340451;





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


        if (!var_init_locked_1571573340451) {

            getName = include('browser.event.name.single');
            un = include('browser.event.listener.global.remove');

            var_init_locked_1571573340451 = true;
        }




        return main.call(this);
    };

})();

exports['config::event.tap'] = (() => {

    let get;

    let var_init_locked_1571573340457;





    const config = {
        "timeout": 100,
        "moveDistance": 8
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1571573340457) {

            get = include('object.value.get');

            var_init_locked_1571573340457 = true;
        }




        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.tap.move'] = (() => {

    let getEvent, getDistance, getScale, disabled, moveDistance;

    let var_init_locked_1571573340460;

    let var_current_scope_1571573340460;



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


        if (!var_init_locked_1571573340460) {

            getEvent = include('browser.event.single');
            getDistance = include('math.point.distance');
            getScale = include('browser.scale');
            moveDistance = config('event.tap', 'moveDistance');

            var_init_locked_1571573340460 = true;
        }



        if (!var_current_scope_1571573340460 !== this) {

            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1571573340460 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.end'] = (() => {

    let disabled, stop;

    let var_init_locked_1571573340467;

    let var_current_scope_1571573340467;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import disabled from ..disabled scoped
         * 
         * @import stop from browser.event.stop
         * 
         * @param {Event} e 事件对象
         * 
         */

        this.dispatch('tap');

        disabled();



    }

    return function(e) {


        if (!var_init_locked_1571573340467) {

            stop = include('browser.event.stop');

            var_init_locked_1571573340467 = true;
        }



        if (!var_current_scope_1571573340467 !== this) {

            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1571573340467 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.enabled'] = (() => {

    let getName, onMove, onEnd, on;

    let var_init_locked_1571573340475;

    let var_current_scope_1571573340475;



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


        if (!var_init_locked_1571573340475) {

            getName = include('browser.event.name.single');
            on = include('browser.event.listener.global.add');

            var_init_locked_1571573340475 = true;
        }



        if (!var_current_scope_1571573340475 !== this) {

            onMove = include('src::browser.event.gesture.tap.move').bind(this);
            onEnd = include('src::browser.event.gesture.tap.end').bind(this);

            var_current_scope_1571573340475 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.start.name'] = (() => {

    let getName;

    let var_init_locked_1571573340484;





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


        if (!var_init_locked_1571573340484) {

            getName = include('browser.event.name.single');

            var_init_locked_1571573340484 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.start'] = (() => {

    let getEvent, getTouchEvents, stop, enabled, disabled, srcBrowserEventGestureTapStartName;

    let var_init_locked_1571573340487;

    let var_current_scope_1571573340487;



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


        if (!var_init_locked_1571573340487) {

            getEvent = include('browser.event.single');
            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            srcBrowserEventGestureTapStartName = include('src::browser.event.gesture.tap.start.name');

            var_init_locked_1571573340487 = true;
        }



        if (!var_current_scope_1571573340487 !== this) {

            enabled = include('src::browser.event.gesture.tap.enabled').bind(this);
            disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

            var_current_scope_1571573340487 = this;
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

exports['src::browser.event.gesture.drag.end'] = (() => {

    let prevent, getEvent, updateInfo, onAxisEnd, disabled;

    let var_init_locked_1571573340498;

    let var_current_scope_1571573340498;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import prevent from browser.event.prevent
         * 
         * @import getEvent from browser.event.single
         * 
         * @import updateInfo from ....info.update scoped
         * 
         * @import onAxisEnd from end.axis scoped
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


        if (!var_init_locked_1571573340498) {

            prevent = include('browser.event.prevent');
            getEvent = include('browser.event.single');

            var_init_locked_1571573340498 = true;
        }



        if (!var_current_scope_1571573340498 !== this) {

            updateInfo = include('src::browser.event.gesture.info.update').bind(this);
            onAxisEnd = include('end.axis').bind(this);
            disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

            var_current_scope_1571573340498 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.disabled'] = (() => {

    let getName, onMove, onEnd, un;

    let var_init_locked_1571573340502;

    let var_current_scope_1571573340502;



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
         * @import un from browser.global.listener.remove
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


        if (!var_init_locked_1571573340502) {

            getName = include('browser.event.name.single');
            un = include('browser.global.listener.remove');

            var_init_locked_1571573340502 = true;
        }



        if (!var_current_scope_1571573340502 !== this) {

            onMove = include('move.drag').bind(this);
            onEnd = include('src::browser.event.gesture.drag.end').bind(this);

            var_current_scope_1571573340502 = this;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.drag.enabled'] = (() => {

    let getName, onMove, onEnd, on;

    let var_init_locked_1571573340505;

    let var_current_scope_1571573340505;



    function main() {


        /**
         * 
         * 启用监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import onMove from move.drag scoped
         * 
         * @import onEnd from ..end scoped
         * 
         * @import on from browser.global.listener.add
         * 
         */

        let me = this;

        on(getName('move'), me.onMove = onMove);

        on(getName('end'), me.onEnd = onEnd);


    }

    return function() {


        if (!var_init_locked_1571573340505) {

            getName = include('browser.event.name.single');
            on = include('browser.global.listener.add');

            var_init_locked_1571573340505 = true;
        }



        if (!var_current_scope_1571573340505 !== this) {

            onMove = include('move.drag').bind(this);
            onEnd = include('src::browser.event.gesture.drag.end').bind(this);

            var_current_scope_1571573340505 = this;
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

exports['src::browser.event.gesture.drag.move.start'] = (() => {

    let prevent, getEvent, getName, enabled, scale, resetInfo, un, minDistance;

    let var_init_locked_1571573340511;

    let var_current_scope_1571573340511;



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
         * @import un from browser.global.listener.remove
         * 
         * @config minDistance from gesture.drag...minDistance
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

        if (Math.round(startPoint, point) * scale() >= minDistance) {

            me.previousPoint = point;

            me.lastPoint = point;

            resetInfo('x');

            resetInfo('y');

            info.time = Date.now();

            dispatch('dragstart', info);

            un(getName('move'), me.onStart);

            enabled();
        }

    }

    return function(e) {


        if (!var_init_locked_1571573340511) {

            prevent = include('browser.event.prevent');
            getEvent = include('browser.event.single');
            getName = include('browser.event.name.single');
            scale = include('browser.scale');
            un = include('browser.global.listener.remove');
            minDistance = config('gesture.drag', 'minDistance');

            var_init_locked_1571573340511 = true;
        }



        if (!var_current_scope_1571573340511 !== this) {

            enabled = include('src::browser.event.gesture.drag.enabled').bind(this);
            resetInfo = include('src::browser.event.gesture.drag.info.reset').bind(this);

            var_current_scope_1571573340511 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.start.name'] = (() => {

    let getName;

    let var_init_locked_1571573340515;





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


        if (!var_init_locked_1571573340515) {

            getName = include('browser.event.name.single');

            var_init_locked_1571573340515 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.drag.start'] = (() => {

    let prevent, stop, getTouchEvents, getEvent, disabled, getName, on, onStart, srcBrowserEventGestureDragStartName;

    let var_init_locked_1571573340520;

    let var_current_scope_1571573340520;



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
         * @import on from browser.global.listener.add
         * 
         * @import onStart from ..move.start scoped
         * 
         * @import .start.name
         * 
         * @param {Event} e 事件对象
         * 
         */

        prevent(e);

        stop(e);

        if (getTouchEvents(e)) {

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

    }

    return function(e) {


        if (!var_init_locked_1571573340520) {

            prevent = include('browser.event.prevent');
            stop = include('browser.event.stop');
            getTouchEvents = include('browser.event.touches');
            getEvent = include('browser.event.single');
            getName = include('browser.event.name.single');
            on = include('browser.global.listener.add');
            srcBrowserEventGestureDragStartName = include('src::browser.event.gesture.drag.start.name');

            var_init_locked_1571573340520 = true;
        }



        if (!var_current_scope_1571573340520 !== this) {

            disabled = include('src::browser.event.gesture.drag.disabled').bind(this);
            onStart = include('src::browser.event.gesture.drag.move.start').bind(this);

            var_current_scope_1571573340520 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.move.pinch'] = (() => {

    let getTouchEvents, stop, getDistance, un, onMove;

    let var_init_locked_1571573340530;

    let var_current_scope_1571573340530;



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


        if (!var_init_locked_1571573340530) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            getDistance = include('math.point.distance');
            un = include('browser.event.listener.global.remove');

            var_init_locked_1571573340530 = true;
        }



        if (!var_current_scope_1571573340530 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

            var_current_scope_1571573340530 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.move.start'] = (() => {

    let getTouchEvents, stop, getDistance, un, on, onMove;

    let var_init_locked_1571573340540;

    let var_current_scope_1571573340540;



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


        if (!var_init_locked_1571573340540) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            getDistance = include('math.point.distance');
            un = include('browser.event.listener.global.remove');
            on = include('browser.event.listener.global.add');

            var_init_locked_1571573340540 = true;
        }



        if (!var_current_scope_1571573340540 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

            var_current_scope_1571573340540 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.disabled'] = (() => {

    let un;

    let var_init_locked_1571573340556;





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


        if (!var_init_locked_1571573340556) {

            un = include('browser.event.listener.global.remove');

            var_init_locked_1571573340556 = true;
        }




        return main.call(this);
    };

})();

exports['src::browser.event.gesture.pinch.end'] = (() => {

    let stop, disabled;

    let var_init_locked_1571573340567;

    let var_current_scope_1571573340567;



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


        if (!var_init_locked_1571573340567) {

            stop = include('browser.event.stop');

            var_init_locked_1571573340567 = true;
        }



        if (!var_current_scope_1571573340567 !== this) {

            disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

            var_current_scope_1571573340567 = this;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.enabled'] = (() => {

    let on, onMove, onEnd;

    let var_init_locked_1571573340577;

    let var_current_scope_1571573340577;



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


        if (!var_init_locked_1571573340577) {

            on = include('browser.event.listener.global.add');

            var_init_locked_1571573340577 = true;
        }



        if (!var_current_scope_1571573340577 !== this) {

            onMove = include('src::browser.event.gesture.pinch.move.start').bind(this);
            onEnd = include('src::browser.event.gesture.pinch.end').bind(this);

            var_current_scope_1571573340577 = this;
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

    let var_init_locked_1571573340598;

    let var_current_scope_1571573340598;



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


        if (!var_init_locked_1571573340598) {

            getTouchEvents = include('browser.event.touches');
            stop = include('browser.event.stop');
            on = include('browser.event.listener.global.add');
            srcBrowserEventGesturePinchStartName = include('src::browser.event.gesture.pinch.start.name');

            var_init_locked_1571573340598 = true;
        }



        if (!var_current_scope_1571573340598 !== this) {

            enabled = include('src::browser.event.gesture.pinch.enabled').bind(this);
            disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

            var_current_scope_1571573340598 = this;
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

    let var_init_locked_1571573340609;

    let var_class_1571573340609;

    let var_once_value_1571573340609;

    return function() {


        if (!var_init_locked_1571573340609) {

            createMap = include('map');
            doDispatch = include('browser.event.dispatch');

            var_init_locked_1571573340609 = true;
        }



        if (!var_class_1571573340609) {


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

            var_class_1571573340609 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return var_class_1571573340609;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.event.gesture.manager.dom';
                }

            };
        }



        if (var_once_value_1571573340609) {

            return var_once_value_1571573340609;

        }

        return var_once_value_1571573340609 = new var_class_1571573340609();

    };

})();

exports['src::browser.event.listener.element.add'] = (() => {

    let add;

    let var_init_locked_1571573340613;





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


        if (!var_init_locked_1571573340613) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1571573340613 = true;
        }




        return main.call(this, el, event, fn, config);
    };

})();

exports['src::browser.event.listener.element.remove'] = (() => {

    let remove;

    let var_init_locked_1571573340620;





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


        if (!var_init_locked_1571573340620) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1571573340620 = true;
        }




        return main.call(this, el, event, fn);
    };

})();

exports['src::browser.event.gesture.vue'] = (() => {

    let generate, EventDom, isObject, isFunction, on, un;

    let var_init_locked_1571573340627;





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


        if (!var_init_locked_1571573340627) {

            generate = include('id.generate');
            EventDom = include('browser.event.gesture.manager.dom')();
            isObject = include('is.object.simple');
            isFunction = include('is.function');
            on = include('browser.event.listener.element.add');
            un = include('browser.event.listener.element.remove');

            var_init_locked_1571573340627 = true;
        }




        return main.call(this, Vue);
    };

})();

exports['src::browser.event.gesture.manager.jsx'] = (() => {

    let capitalize;

    let var_init_locked_1571573340635;






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


        if (!var_init_locked_1571573340635) {

            capitalize = include('string.capitalize');

            var_init_locked_1571573340635 = true;
        }




        return main.call(this, config);
    };

})();

exports['src::browser.event.gesture.react'] = (() => {

    let jsx;

    let var_init_locked_1571573340637;





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


        if (!var_init_locked_1571573340637) {

            jsx = include('browser.event.gesture.manager.jsx');

            var_init_locked_1571573340637 = true;
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

    let var_init_locked_1571573340642;





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


        if (!var_init_locked_1571573340642) {

            dispatch = include('src::browser.event.dispatch');

            var_init_locked_1571573340642 = true;
        }




        return main.call(this);
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

    let var_init_locked_1571573340647;






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


        if (!var_init_locked_1571573340647) {

            empty = include('function.empty')();
            isFunction = include('is.function');
            get = include('object.value.get');

            var_init_locked_1571573340647 = true;
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

exports['src::file.read'] = (() => {

    let isFile;

    let var_init_locked_1571573340652;





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


        if (!var_init_locked_1571573340652) {

            isFile = include('is.file');

            var_init_locked_1571573340652 = true;
        }




        return main.call(this, path);
    };

})();

exports['src::file.read.text'] = (() => {

    let read;

    let var_init_locked_1571573340655;





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


        if (!var_init_locked_1571573340655) {

            read = include('file.read');

            var_init_locked_1571573340655 = true;
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

    let var_init_locked_1571573340659;






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


        if (!var_init_locked_1571573340659) {

            read = include('file.read.text');
            parse = include('json.parse');

            var_init_locked_1571573340659 = true;
        }




        return main.call(this, path, watchFn);
    };

})();

exports['src::file.write'] = (() => {

    let create;

    let var_init_locked_1571573340662;





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


        if (!var_init_locked_1571573340662) {

            create = include('directory.create');

            var_init_locked_1571573340662 = true;
        }




        return main.call(this, path, data);
    };

})();

exports['src::webpack.dev.server.self'] = (() => {

    let isFunction, isObject, isDefined;

    let var_init_locked_1571573340665;





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


        if (!var_init_locked_1571573340665) {

            isFunction = include('is.function');
            isObject = include('is.object.simple');
            isDefined = include('is.defined');

            var_init_locked_1571573340665 = true;
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

    let var_init_locked_1571573340668;





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


        if (!var_init_locked_1571573340668) {

            start = include('src::webpack.dev.server.self');

            var_init_locked_1571573340668 = true;
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

    let var_init_locked_1571573340670;





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


        if (!var_init_locked_1571573340670) {

            join = include('url.join');
            append = include('url.append');

            var_init_locked_1571573340670 = true;
        }




        return main.call(this, name, data, port);
    };

})();

exports['src::webpack.recorder.server.markdown'] = (() => {

    let read, write;

    let var_init_locked_1571573340673;





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


        if (!var_init_locked_1571573340673) {

            read = include('file.read.json');
            write = include('file.write');

            var_init_locked_1571573340673 = true;
        }




        return main.call(this, name, templateFn);
    };

})();

exports['src::file.write.json'] = (() => {

    let write;

    let var_init_locked_1571573340676;





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


        if (!var_init_locked_1571573340676) {

            write = include('file.write');

            var_init_locked_1571573340676 = true;
        }




        return main.call(this, path, data);
    };

})();

exports['src::object.assign.if'] = (() => {

    let isObject;

    let var_init_locked_1571573340678;






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


        if (!var_init_locked_1571573340678) {

            isObject = include('is.object.simple');

            var_init_locked_1571573340678 = true;
        }




        return main.call(this, dest, ...sources);
    };

})();

exports['src::webpack.recorder.server'] = (() => {

    let read, writeJSON, merge, isObject;

    let var_init_locked_1571573340682;





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


        if (!var_init_locked_1571573340682) {

            read = include('file.read.json');
            writeJSON = include('file.write.json');
            merge = include('object.assign.if');
            isObject = include('is.object.simple');

            var_init_locked_1571573340682 = true;
        }




        return main.call(this, name, processFn, path);
    };

})();

exports['src::webpack.recorder.server.service'] = (() => {

    let recorder;

    let var_init_locked_1571573340685;





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


        if (!var_init_locked_1571573340685) {

            recorder = include('webpack.recorder.server');

            var_init_locked_1571573340685 = true;
        }




        return main.call(this, name, processFn);
    };

})();

exports['src::object.key.join'] = (() => {

    let isString;

    let var_init_locked_1571573340688;






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


        if (!var_init_locked_1571573340688) {

            isString = include('is.string');

            var_init_locked_1571573340688 = true;
        }




        return main.call(this, ...keys);
    };

})();

exports['src::object.flat'] = (() => {

    let join, isObject;

    let var_init_locked_1571573340690;






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


        if (!var_init_locked_1571573340690) {

            join = include('object.key.join');
            isObject = include('is.object.simple');

            var_init_locked_1571573340690 = true;
        }




        return main.call(this, data);
    };

})();