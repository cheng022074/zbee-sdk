exports['src::error'] = (() => {







    function main(exception, options) {

        /**
         * 
         * 抛出一个异常
         * 
         * @param {string} exception 异常名称
         * 
         * @param {object} [options = {}] 异常参数
         * 
         */

        return {
            exception,
            ...options
        };

    }

    return function(exception, options = {}) {



        return main.call(this, exception, options);
    };

})();

exports['src::array.add.sort'] = (() => {








    /**
     * 
     * 以排序的形式添加数组项
     * 
     * @param {array} data 数组
     * 
     * @param {mixed} item 添加项
     * 
     * @param {function} sortFn 排序函数
     * 
     */

    function main(data, item, sortFn) {

        let {
            length
        } = data;

        if (length === 0) {

            data.push(item);

        } else {

            data.splice(getInsertIndex(data, item, sortFn, 0, data.length - 1), 0, item);
        }
    }

    function getInsertIndex(data, item, sortFn, start, end) {

        let index;

        if (start === end) {

            index = start;

        } else {

            index = start + Math.round((end - start) / 2);
        }

        let currentItem = data[index],
            value = sortFn(currentItem, item);

        if (value <= 0) {

            start = index + 1;

            if (start > end || sortFn(data[start], item) > 0) {

                return index + 1;

            }

        } else if (value > 0) {

            end = index - 1;

            if (start > end) {

                return index === 0 ? index : index - 1;
            }
        }

        return getInsertIndex(data, item, sortFn, start, end);
    }

    return function(data, item, sortFn) {



        return main.call(this, data, item, sortFn);
    };

})();

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

    let clone;

    let var_init_locked_1608956297266;



    function main(data) {


        /**
         * 
         * 对于数组进行拷贝
         * 
         * @import clone from data.clone
         * 
         * @param {array} data 数组
         * 
         * 
         */

        let result = [];

        for (let item of data) {

            result.push(clone(item));
        }

        return result;

    }

    return function(data) {


        if (!var_init_locked_1608956297266) {

            clone = include('src::data.clone');

            var_init_locked_1608956297266 = true;
        }


        return main.call(this, data);
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

exports['src::object.assign'] = (() => {

    let isObject, clone;

    let var_init_locked_1608956297284;




    /**
     * 
     * 积极深度合并
     * 
     * @import isObject from is.object.simple
     * 
     * @import clone from data.clone
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

                dest[name] = clone(source[name]);
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


        if (!var_init_locked_1608956297284) {

            isObject = include('src::is.object.simple');
            clone = include('src::data.clone');

            var_init_locked_1608956297284 = true;
        }


        return main.call(this, dest, ...sources);
    };

})();

exports['src::date.clone'] = (() => {







    function main(date) {

        /**
         * 
         * 复制日期
         * 
         * @param {Date} date 日期
         * 
         * @return {Date} 复制了与指定日期
         * 
         */

        return new Date(date.valueOf());

    }

    return function(date) {



        return main.call(this, date);
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

    let var_init_locked_1608956297291;



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


        if (!var_init_locked_1608956297291) {

            isType = include('src::is.type');

            var_init_locked_1608956297291 = true;
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

exports['src::data.clone'] = (() => {

    let isObject, assign, arrayClone, dateClone, isArray, isDate, clone;

    let var_init_locked_1608956297274;



    function main(data) {


        /**
         * 
         * 数据拷贝
         * 
         * @import isObject from is.object.simple
         * 
         * @import assign from object.assign
         * 
         * @import array.clone
         * 
         * @import date.clone
         * 
         * @import is.array
         * 
         * @import is.date
         * 
         * @import clone from .clone
         * 
         * @param {mixed} data 数据
         * 
         * @return {mixed} 拷贝后的数据 
         * 
         */

        if (isObject(data)) {

            return assign({}, data);

        } else if (isArray(data)) {

            return arrayClone(data);

        } else if (isDate(data)) {

            return dateClone(data);
        }

        return data;

    }

    return function(data) {


        if (!var_init_locked_1608956297274) {

            isObject = include('src::is.object.simple');
            assign = include('src::object.assign');
            arrayClone = include('src::array.clone');
            dateClone = include('src::date.clone');
            isArray = include('src::is.array');
            isDate = include('src::is.date');
            clone = include('src::data.clone');

            var_init_locked_1608956297274 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::array.dates.includes'] = (() => {

    let get;

    let var_init_locked_1608956297303;



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


        if (!var_init_locked_1608956297303) {

            get = include('src::date.get.properties');

            var_init_locked_1608956297303 = true;
        }


        return main.call(this, dates, date, fields);
    };

})();

exports['src::is.empty'] = (() => {

    let isArray;

    let var_init_locked_1608956297321;



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


        if (!var_init_locked_1608956297321) {

            isArray = include('src::is.array');

            var_init_locked_1608956297321 = true;
        }


        return main.call(this, data, allowEmptyString);
    };

})();

exports['src::is.string'] = (() => {

    let isType;

    let var_init_locked_1608956297325;



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


        if (!var_init_locked_1608956297325) {

            isType = include('src::is.type');

            var_init_locked_1608956297325 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::array.from'] = (() => {

    let isEmpty, isString;

    let var_init_locked_1608956297317;



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


        if (!var_init_locked_1608956297317) {

            isEmpty = include('src::is.empty');
            isString = include('src::is.string');

            var_init_locked_1608956297317 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::date.get.properties'] = (() => {

    let from;

    let var_init_locked_1608956297310;



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


        if (!var_init_locked_1608956297310) {

            from = include('src::array.from');

            var_init_locked_1608956297310 = true;
        }


        return main.call(this, date, names);
    };

})();

exports['src::array.includes'] = (() => {

    let indexOf;

    let var_init_locked_1608956297328;



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


        if (!var_init_locked_1608956297328) {

            indexOf = include('src::array.indexOf');

            var_init_locked_1608956297328 = true;
        }


        return main.call(this, data, checkItem);
    };

})();

exports['src::is.number'] = (() => {

    let isType;

    let var_init_locked_1608956297350;



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


        if (!var_init_locked_1608956297350) {

            isType = include('src::is.type');

            var_init_locked_1608956297350 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.boolean'] = (() => {

    let isType;

    let var_init_locked_1608956297353;



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


        if (!var_init_locked_1608956297353) {

            isType = include('src::is.type');

            var_init_locked_1608956297353 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.function'] = (() => {

    let isType;

    let var_init_locked_1608956297356;



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


        if (!var_init_locked_1608956297356) {

            isType = include('src::is.type');

            var_init_locked_1608956297356 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.type'] = (() => {

    let isObject, isArray, isString, isNumber, isBoolean, isDate, isFunction;

    let var_init_locked_1608956297346;



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
         * @import is.function
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

        if (isFunction(data)) {

            return 'function';
        }

        return 'other';

    }

    return function(data) {


        if (!var_init_locked_1608956297346) {

            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            isString = include('src::is.string');
            isNumber = include('src::is.number');
            isBoolean = include('src::is.boolean');
            isDate = include('src::is.date');
            isString = include('src::is.string');
            isFunction = include('src::is.function');

            var_init_locked_1608956297346 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.equals'] = (() => {

    let getType;

    let var_init_locked_1608956297338;



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


        if (!var_init_locked_1608956297338) {

            getType = include('src::data.type');

            var_init_locked_1608956297338 = true;
        }


        return main.call(this, value1, value2);
    };

})();

exports['src::array.indexOf'] = (() => {

    let equals;

    let var_init_locked_1608956297332;



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


        if (!var_init_locked_1608956297332) {

            equals = include('src::data.equals');

            var_init_locked_1608956297332 = true;
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

exports['src::array.object.property'] = (() => {







    function main(data, name) {


        /**
         * 
         * 获取数组项对象中的属性形成新的数组
         * 
         * @param {array} data 数组
         * 
         * @param {string} name 属性名称
         * 
         * @return {array} 数组
         * 
         */

        let result = [];

        for (let item of data) {

            result.push(item[name]);
        }

        return result;

    }

    return function(data, name) {



        return main.call(this, data, name);
    };

})();

exports['src::array.proxy'] = (() => {

    let createProxy, from;

    let var_init_locked_1608956297380;




    /**
     * 
     * 数组代理
     * 
     * @import createProxy from object.proxy
     * 
     * @import from from array.from
     * 
     * @param {mixed} target 需要代理的对象
     * 
     * @return {array.Proxy} 代理对象引用 
     * 
     */

    function main(target) {

        return new Proxy(target);
    }

    class Proxy extends Array {

        constructor(target) {

            super();

            this.push(...from(target));
        }

        includes(target) {

            let proxies = this;

            for (let proxy of proxies) {

                if (proxy.target === target) {

                    return true;
                }
            }

            return false;
        }

        push(...items) {

            let proxies = [];

            for (let item of items) {

                proxies.push(createProxy(item));
            }

            super.push(...proxies);
        }

        call(...args) {

            return doExecute(this, 'call', ...args);
        }
    }

    function doExecute(proxies, method, ...args) {

        let result = [];

        for (let proxy of proxies) {

            result.push(proxy[method](...args));
        }

        return result;
    }

    return function(target) {


        if (!var_init_locked_1608956297380) {

            createProxy = include('src::object.proxy');
            from = include('src::array.from');

            var_init_locked_1608956297380 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::class.empty'] = (() => {





    let var_once_value_1608956297450;

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




        if (var_once_value_1608956297450) {

            return var_once_value_1608956297450;

        }
        return var_once_value_1608956297450 = main.call(this);

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

    let var_init_locked_1608956297473;



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


        if (!var_init_locked_1608956297473) {

            equals = include('src::data.equals');

            var_init_locked_1608956297473 = true;
        }


        return main.call(this, keys);
    };

})();

exports['src::map.set'] = (() => {







    const var_current_scope_1608956297464 = new Map();

    return function(...values) {





        if (!var_current_scope_1608956297464.has(this)) {

            var_current_scope_1608956297464.set(this, (() => {
                const find = include('src::map.find').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297464.get(this);



        return main.call(this, ...values);
    };

})();

exports['src::map.get'] = (() => {







    const var_current_scope_1608956297479 = new Map();

    return function(...keys) {





        if (!var_current_scope_1608956297479.has(this)) {

            var_current_scope_1608956297479.set(this, (() => {
                const find = include('src::map.find').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297479.get(this);



        return main.call(this, ...keys);
    };

})();

exports['src::map.has'] = (() => {







    const var_current_scope_1608956297483 = new Map();

    return function(...keys) {





        if (!var_current_scope_1608956297483.has(this)) {

            var_current_scope_1608956297483.set(this, (() => {
                const find = include('src::map.find').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297483.get(this);



        return main.call(this, ...keys);
    };

})();

exports['src::map.delete'] = (() => {







    const var_current_scope_1608956297487 = new Map();

    return function(...keys) {





        if (!var_current_scope_1608956297487.has(this)) {

            var_current_scope_1608956297487.set(this, (() => {
                const find = include('src::map.find').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297487.get(this);



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

exports['src::map.find.fuzzy'] = (() => {

    let isDefined;

    let var_init_locked_1608956297498;



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


        if (!var_init_locked_1608956297498) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297498 = true;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::map'] = (() => {

    let extend, constructor, get_size, method_set, method_get, method_has, method_delete, method_forEach, method_clear, method_find, isObject;

    let var_init_locked_1608956297446;

    let var_class_1608956297446;



    let var_global_main_1608956297446;

    return function() {


        if (!var_init_locked_1608956297446) {

            extend = include('src::class.empty')();
            constructor = include('src::map.constructor');
            get_size = include('src::map.size');
            method_set = include('src::map.set');
            method_get = include('src::map.get');
            method_has = include('src::map.has');
            method_delete = include('src::map.delete');
            method_forEach = include('src::map.for');
            method_clear = include('src::map.clear');
            method_find = include('src::map.find.fuzzy');
            isObject = include('src::is.object.simple');

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

            var_class_1608956297446 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297446;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::map';
                }

            };

            main = var_class_1608956297446;

            var_global_main_1608956297446 = main;

            var_init_locked_1608956297446 = true;
        }


        return new var_global_main_1608956297446();
    };

})();

exports['src::event.listeners'] = (() => {

    let map;

    let var_init_locked_1608956297430;

    let var_once_value_1608956297430;

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


        if (!var_init_locked_1608956297430) {

            map = include('src::map')();

            var_init_locked_1608956297430 = true;
        }



        if (var_once_value_1608956297430) {

            return var_once_value_1608956297430;

        }
        return var_once_value_1608956297430 = main.call(this);

    };

})();

exports['src::event.listener.native.remove'] = (() => {







    function main(target, name, fn, options) {


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
         * @param {object} [options] 事件监听函数配置
         * 
         */

        if (target.removeEventListener) {

            target.removeEventListener(name, fn, options);

        } else {

            const remove = target.off || target.un;

            remove.call(target, name, fn);
        }



    }

    return function(target, name, fn, options) {



        return main.call(this, target, name, fn, options);
    };

})();

exports['src::event.listener.remove'] = (() => {

    let isString, isObject, isArray, remove, listeners, native;

    let var_init_locked_1608956297426;



    function main(target, name, fn, scope) {

        /**
         * 
         * 移除事件监听
         * 
         * @import is.string
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.array
         * 
         * @import remove from .remove
         * 
         * @import listeners from ..listeners value
         * 
         * @import native from .native.remove
         * 
         * @param {mixed} target 事件主体
         * 
         * @param {string|object|array} name 事件名称
         * 
         * @param {mixed} fn 事件回调
         * 
         * @param {mixed} [scope] 事件作用域
         * 
         */

        scope = scope || target;

        if (isString(name)) {

            if (fn) {

                let listener = listeners.get(target, name, fn, scope);

                if (listener) {

                    let {
                        fn: listenersFn,
                        options
                    } = listener;

                    native(target, name, listenersFn, options);

                    listeners.delete(target, name, fn, scope);
                }

            } else {

                let result = listeners.find(target, name);

                for (let {
                        key
                    } of result) {

                    remove(target, name, key[2], key[3]);
                }
            }

        } else if (isObject(name)) {

            let {
                scope,
                ...listeners
            } = name,
            names = Object.keys(listeners);

            for (let name of names) {

                remove(target, name, listeners[name], scope);
            }

        } else if (isArray(name)) {

            let names = name;

            for (let name of names) {

                remove(target, name);
            }
        }

    }

    return function(target, name, fn, scope) {


        if (!var_init_locked_1608956297426) {

            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            remove = include('src::event.listener.remove');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.remove');

            var_init_locked_1608956297426 = true;
        }


        return main.call(this, target, name, fn, scope);
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

    let var_init_locked_1608956297512;



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

                try {

                    fn = include(fn);

                } catch (err) {


                }


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


        if (!var_init_locked_1608956297512) {

            isString = include('src::is.string');
            isFunction = include('src::is.function');
            empty = include('src::function.empty');

            var_init_locked_1608956297512 = true;
        }


        return main.call(this, fn, scope);
    };

})();

exports['src::event.listener.native.add'] = (() => {







    function main(target, name, fn, options) {


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
         * @param {object} [options] 事件参数
         * 
         */

        if (target.addEventListener) {

            target.addEventListener(name, fn, options);

        } else {

            target.on(name, fn);
        }

    }

    return function(target, name, fn, options) {



        return main.call(this, target, name, fn, options);
    };

})();

exports['src::event.listener.add'] = (() => {

    let isString, isObject, add, remove, get, listeners, native, isArray;

    let var_init_locked_1608956297408;



    function main(target, name, fn, {
        once,
        options,
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
         * @import add from .add
         * 
         * @import remove from .remove
         * 
         * @import get from function.get
         * 
         * @import listeners from ..listeners value
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
         * @param {object} [options.options] 浏览器事件监听所需要参数
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

                        listenerFn(...args);

                        remove(target, name, fn, {
                            scope
                        });
                    };

                } else {

                    listener = listenerFn;
                }

                native(target, name, listener, options);

                listeners.set(target, name, fn, scope, {
                    fn: listener,
                    options
                });
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
        options,
        scope
    } = {}) {


        if (!var_init_locked_1608956297408) {

            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            get = include('src::function.get');
            listeners = include('src::event.listeners')();
            native = include('src::event.listener.native.add');
            isArray = include('src::is.array');

            var_init_locked_1608956297408 = true;
        }


        return main.call(this, target, name, fn, {
            once,
            options,
            scope
        });
    };

})();

exports['src::object.proxy'] = (() => {

    let add, remove, isFunction;

    let var_init_locked_1608956297391;




    /**
     * 
     * 对象代理，如果对象没有需要的方法或者属性时，则会抛出异常
     * 
     * @import add from event.listener.add
     * 
     * @import remove from event.listener.remove
     * 
     * @import is.function
     * 
     * @param {mixed} target 需要代理的对象
     * 
     * @param {mixed} [interceptor = {}] 需要代理的对象
     * 
     * @return {object.Proxy} 代理对象引用 
     * 
     */

    function main(target, interceptor) {

        return new Proxy(target, interceptor);
    }

    class Proxy {

        constructor(target, interceptor) {

            let me = this;

            me.target = target;

            me.interceptor = interceptor;
        }

        call(method, ...args) {

            return call.call(this, true, method, ...args);
        }

        callIf(method, ...args) {

            return call.call(this, false, method, ...args);
        }

        set(name, value) {

            set.call(this, true, name, value);
        }

        setIf(name, value) {

            set.call(this, false, name, value);
        }

        get(name) {

            return get.call(this, true, name);
        }

        getIf(name) {

            return get.call(this, false, name);
        }

        fireEvent(name, ...args) {

            this.callIf('fireEvent', name, ...args);
        }

        on(...args) {

            add(this.target, ...args);
        }

        off(...args) {

            remove(this.target, ...args);
        }
    }

    function call(isThrowError, method, ...args) {

        let me = this,
            {
                target
            } = me;

        if (method in target) {

            if (doIntercept.call(me, method, ...args)) {

                return;
            }

            return target[method](...args);

        } else if (isThrowError) {

            throw new ProxyMethodNotFoundError(target, method);
        }
    }

    function set(isThrowError, name, value) {

        let {
            target
        } = this;

        if (name in target) {

            if (doIntercept.call(me, name, value)) {

                return;
            }

            target[name] = value;

        } else if (isThrowError) {

            throw new ProxyPropertyNotFoundError(target, name, 'set');
        }
    }

    function get(isThrowError, name) {

        let {
            target
        } = this;

        if (name in target) {

            return target[name];

        } else if (isThrowError) {

            throw new ProxyPropertyNotFoundError(target, name, 'get');
        }
    }

    function doIntercept(method, ...args) {

        let {
            target,
            interceptor
        } = this;

        if (isFunction(interceptor)) {

            return interceptor(target, method, ...args) === false;
        }

        if (method in interceptor) {

            return interceptor[method](target, ...args) === false;
        }

        return false;
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

    return function(target, interceptor = {}) {


        if (!var_init_locked_1608956297391) {

            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            isFunction = include('src::is.function');

            var_init_locked_1608956297391 = true;
        }


        return main.call(this, target, interceptor);
    };

})();

exports['src::array.remove.all'] = (() => {

    let remove, indexOf;

    let var_init_locked_1608956297523;



    function main(data, item) {


        /**
         * 
         * 在数组中去除所有指定项目
         * 
         * @import remove from .index
         * 
         * @import indexOf from ..indexOf
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


        if (!var_init_locked_1608956297523) {

            remove = include('src::array.remove.index');
            indexOf = include('src::array.indexOf');

            var_init_locked_1608956297523 = true;
        }


        return main.call(this, data, item);
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

    let remove, indexOf;

    let var_init_locked_1608956297535;



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


        if (!var_init_locked_1608956297535) {

            remove = include('src::array.remove.index');
            indexOf = include('src::array.indexOf');

            var_init_locked_1608956297535 = true;
        }


        return main.call(this, data, ...items);
    };

})();

exports['src::data.channel.axios'] = (() => {

    let Channel, on, off, axios;

    let var_init_locked_1613308339852;

    let var_class_1613308339852;



    let var_global_main_1613308339852;

    return function() {


        if (!var_init_locked_1613308339852) {

            Channel = include('src::data.channel')();
            on = include('src::event.listener.add');
            off = include('src::event.listener.remove');
            axios = include('src::axios');


            /**
             * 
             * 基于 axios 通用客户端单向数据通道
             * 
             * @import Channel from data.channel value
             * 
             * @import on from event.listener.add
             * 
             * @import off from event.listener.remove
             * 
             * @import axios
             * 
             * @class
             * 
             */

            class main extends Channel {

                constructor(receivers) {

                    super(receivers);

                    let me = this;

                    me.receiveConnected();

                    me.cancelTokens = {};
                }

                send(params) {

                    return super.send(null, params);
                }

                processSendParams(params) {

                    return params;
                }

                processReceiveData(data) {

                    return data;
                }

                doSend({
                    type,
                    id,
                    params
                }) {

                    let me = this,
                        {
                            cancelTokens
                        } = me;

                    switch (type) {

                        case 'send':

                            cancelTokens[id] = axios(me.processSendParams(params), (isSuccess, data, response) => {

                                if (isSuccess) {

                                    me.receiveReplyValue({
                                        id,
                                        value: me.processReceiveData(data, response)
                                    });

                                } else {

                                    me.receiveError({
                                        id,
                                        error: data
                                    });
                                }

                            });

                            break;

                        case 'cancel-send':

                            if (cancelTokens.hasOwnProperty(id)) {

                                cancelTokens[id]();

                                delete cancelTokens[id];
                            }
                    }
                }


            }

            var_class_1613308339852 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613308339852;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel.axios';
                }

            };

            main = var_class_1613308339852;

            var_global_main_1613308339852 = main;

            var_init_locked_1613308339852 = true;
        }


        return var_global_main_1613308339852;
    };

})();

exports['src::id.zbee'] = (() => {





    let var_once_value_1608956297588;

    function main() {


        /**
         * 
         * ZBEE 标识
         * 
         * @return {string} 标识 
         * 
         * @once
         * 
         */

        return `ZBEE${Date.now()}`;

    }

    return function() {




        if (var_once_value_1608956297588) {

            return var_once_value_1608956297588;

        }
        return var_once_value_1608956297588 = main.call(this);

    };

})();

exports['src::object.property.inner.name'] = (() => {

    let id;

    let var_init_locked_1608956297586;



    function main(name) {


        /**
         * 
         * 返回属性内部名称
         * 
         * @import id from id.zbee value
         * 
         * @param {string} name 属性名称
         * 
         * @return {string} 属性内部名称
         * 
         */

        return `__${id}_OBJECT_INNER_PROPERTY_${name}__`;

    }

    return function(name) {


        if (!var_init_locked_1608956297586) {

            id = include('src::id.zbee')();

            var_init_locked_1608956297586 = true;
        }


        return main.call(this, name);
    };

})();

exports['src::object.property.inner.define'] = (() => {

    let innerName, isObject;

    let var_init_locked_1608956297582;



    function main(target, name, value) {


        /**
         * 
         * 定义内部属性
         * 
         * @import innerName from .name
         * 
         * @import isObject from is.object.simple
         * 
         * @param {object} target  定义内部属性的宿主
         * 
         * @param {string|object} name 内部属性名称
         * 
         * @param {mixed} value 内部属性值
         * 
         */

        if (isObject(name)) {

            let properties = name,
                names = Object.keys(properties),
                innerProperties = {};

            for (let name of names) {

                innerProperties[innerName(name)] = {
                    value: properties[name],
                    configurable: true,
                    writable: true
                }
            }

            Object.defineProperties(target, innerProperties);

        } else {

            Object.defineProperty(target, innerName(name), {
                value,
                configurable: true,
                writable: true
            });
        }

    }

    return function(target, name, value) {


        if (!var_init_locked_1608956297582) {

            innerName = include('src::object.property.inner.name');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956297582 = true;
        }


        return main.call(this, target, name, value);
    };

})();

exports['src::mixin.observable.constructor'] = (() => {

    let add, isObject, isArray, define;

    let var_init_locked_1608956297578;




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
     * @import define from object.property.inner.define
     * 
     * @param {object} options 配置
     * 
     */

    const EventEmitter = require('events');

    function main({
        listeners
    }) {

        let me = this,
            emitter = new EventEmitter();

        emitter.setMaxListeners(Infinity);

        define(me, {
            emitter,
            suspendEvents: false
        });

        if (isObject(listeners) || isArray(listeners)) {

            add(me, listeners);

        }


    }



    return function(options) {


        if (!var_init_locked_1608956297578) {

            add = include('src::event.listener.add');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            define = include('src::object.property.inner.define');

            var_init_locked_1608956297578 = true;
        }


        return main.call(this, options);
    };

})();

exports['src::object.property.inner.get'] = (() => {

    let innerName;

    let var_init_locked_1608956297593;



    function main(target, name) {


        /**
         * 
         * 获取内部属性的值
         * 
         * @import innerName from .name
         * 
         * @param {object} target  定义内部属性的宿主
         * 
         * @param {string} name 内部属性名称
         * 
         * @return {mixed} 内部属性值
         * 
         * 
         */

        return target[innerName(name)];



    }

    return function(target, name) {


        if (!var_init_locked_1608956297593) {

            innerName = include('src::object.property.inner.name');

            var_init_locked_1608956297593 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::mixin.observable.listener.add'] = (() => {

    let get;

    let var_init_locked_1608956297591;



    function main(event, fn) {


        /**
         * 
         * 添加事件监听
         * 
         * @import get from object.property.inner.get
         * 
         * @param {string} event 事件名称
         * 
         * @param {mixed} fn 事件回调函数
         * 
         */

        get(this, 'emitter').addListener(event, fn);

    }

    return function(event, fn) {


        if (!var_init_locked_1608956297591) {

            get = include('src::object.property.inner.get');

            var_init_locked_1608956297591 = true;
        }


        return main.call(this, event, fn);
    };

})();

exports['src::mixin.observable.listener.has'] = (() => {

    let get;

    let var_init_locked_1608956297596;



    function main(event) {


        /**
         * 
         * 判断是否拥有事件监听
         * 
         * @import get from object.property.inner.get
         * 
         * @param {string} event 事件
         * 
         * @return {boolean} 如果拥有事件监则返回 true , 否则返回 false
         * 
         */

        return get(this, 'emitter').listenerCount(event) !== 0;

    }

    return function(event) {


        if (!var_init_locked_1608956297596) {

            get = include('src::object.property.inner.get');

            var_init_locked_1608956297596 = true;
        }


        return main.call(this, event);
    };

})();

exports['src::mixin.observable.listener.remove'] = (() => {

    let get;

    let var_init_locked_1608956297598;



    function main(event, fn) {


        /**
         * 
         * 移除事件监听
         * 
         * @import get from object.property.inner.get
         * 
         * @param {string} event 事件名称
         * 
         * @param {function} fn 事件回调函数
         * 
         * 
         */

        get(this, 'emitter').removeListener(event, fn);


    }

    return function(event, fn) {


        if (!var_init_locked_1608956297598) {

            get = include('src::object.property.inner.get');

            var_init_locked_1608956297598 = true;
        }


        return main.call(this, event, fn);
    };

})();

exports['src::mixin.observable.event.fire'] = (() => {

    let isArray, get;

    let var_init_locked_1608956297602;




    /**
     *
     * 触发事件
     * 
     * @import is.array
     * 
     * @import get from object.property.inner.get
     *
     * @param {string} event 事件名称
     *
     * @param {mixed} [...args] 事件参数
     *
     */

    function main(event, ...args) {

        let me = this,
            isSuspendEvents = get(me, 'suspendEvents');

        if (isSuspendEvents === true || isArray(isSuspendEvents) && isSuspendEvents.includes(event)) {

            return;
        }

        doFireBubbleEvent.call(me, event, me, ...args);
    }

    function doFireBubbleEvent(event, target, ...args) {

        let me = this;

        get(me, 'emitter').emit(event, target, ...args);

        let bubbleTarget = get(me, 'bubbleTarget');

        if (bubbleTarget) {

            doFireBubbleEvent.call(bubbleTarget, event, target, ...args);
        }
    }

    return function(event, ...args) {


        if (!var_init_locked_1608956297602) {

            isArray = include('src::is.array');
            get = include('src::object.property.inner.get');

            var_init_locked_1608956297602 = true;
        }


        return main.call(this, event, ...args);
    };

})();

exports['src::object.property.inner.set'] = (() => {

    let innerName;

    let var_init_locked_1608956297608;



    function main(target, name, value) {


        /**
         * 
         * 设置内部属性的值
         * 
         * @import innerName from .name
         * 
         * @param {object} target  定义内部属性的宿主
         * 
         * @param {string} name 内部属性名称
         * 
         * @param {mixed} value 内部属性值
         * 
         */

        return target[innerName(name)] = value;



    }

    return function(target, name, value) {


        if (!var_init_locked_1608956297608) {

            innerName = include('src::object.property.inner.name');

            var_init_locked_1608956297608 = true;
        }


        return main.call(this, target, name, value);
    };

})();

exports['src::mixin.observable.events.suspend'] = (() => {

    let set;

    let var_init_locked_1608956297605;



    function main(events) {


        /**
         * 
         * @import set from object.property.inner.set
         * 
         * @param {mixed} [events = true] 需要暂停的事件名称
         * 
         * 暂停事件监听
         * 
         */

        set(this, 'suspendEvents', events);

    }

    return function(events = true) {


        if (!var_init_locked_1608956297605) {

            set = include('src::object.property.inner.set');

            var_init_locked_1608956297605 = true;
        }


        return main.call(this, events);
    };

})();

exports['src::mixin.observable.events.resume'] = (() => {

    let set;

    let var_init_locked_1608956297612;



    function main() {


        /**
         * 
         * @import set from object.property.inner.set
         * 
         * 恢复事件监听
         * 
         */

        set(this, 'suspendEvents', false);

    }

    return function() {


        if (!var_init_locked_1608956297612) {

            set = include('src::object.property.inner.set');

            var_init_locked_1608956297612 = true;
        }


        return main.call(this);
    };

})();

exports['src::mixin.observable.listeners.remove'] = (() => {

    let get;

    let var_init_locked_1608956297614;



    function main() {


        /**
         * 
         * 清除所有事件监听
         * 
         * @import get from object.property.inner.get
         * 
         */

        get(this, 'emitter').removeAllListeners();

    }

    return function() {


        if (!var_init_locked_1608956297614) {

            get = include('src::object.property.inner.get');

            var_init_locked_1608956297614 = true;
        }


        return main.call(this);
    };

})();

exports['src::mixin.observable'] = (() => {

    let constructor, method_addListener, method_hasListener, method_removeListener, method_fireEvent, method_suspendEvents, method_resumeEvents, method_removeAllListeners, isObject;

    let var_init_locked_1608956297572;



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
            removeAllListeners(...args) {

                return method_removeAllListeners.apply(this, args);

            }



        }

    }

    return function(extend) {


        if (!var_init_locked_1608956297572) {

            constructor = include('src::mixin.observable.constructor');
            method_addListener = include('src::mixin.observable.listener.add');
            method_hasListener = include('src::mixin.observable.listener.has');
            method_removeListener = include('src::mixin.observable.listener.remove');
            method_fireEvent = include('src::mixin.observable.event.fire');
            method_suspendEvents = include('src::mixin.observable.events.suspend');
            method_resumeEvents = include('src::mixin.observable.events.resume');
            method_removeAllListeners = include('src::mixin.observable.listeners.remove');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956297572 = true;
        }


        return main.call(this, extend);
    };

})();

exports['src::environment.name'] = (() => {





    let var_once_value_1608956297622;

    function main() {


        /**
         * 
         * 检测当前环境，返回值有 browser、zbee、node
         * 
         * @return {string} 环境名称 
         * 
         * @once
         * 
         */

        const {
            toString
        } = Object.prototype,
            BROWSER_NAMES = {
                micromessenger: 'weixin-browser',
                ue4: 'ue4-browser',
                unity: 'unity-browser',
                electron: 'electron-browser',
                browser: 'browser'
            };

        if (typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]') {

            return BROWSER_NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity|electron/) || ['browser'])[0]];

        } else if (typeof process === 'object' && typeof global === 'object' && typeof require === 'function') {

            try {

                let [
                    path
                ] = process.argv;

                return /electron\.exe$/.test(path);

            } catch (err) {

            }

            return 'node';
        }

        return 'other';

    }

    return function() {




        if (var_once_value_1608956297622) {

            return var_once_value_1608956297622;

        }
        return var_once_value_1608956297622 = main.call(this);

    };

})();

exports['src::id.generate'] = (() => {

    let getName;

    let var_init_locked_1608956297617;




    /**
     * 
     * 生成唯一的编号
     * 
     * @import getName from environment.name
     * 
     * @param {string} prefix 编号前缀
     * 
     * @return {string} 生成后的唯一编号
     * 
     * @require uuid
     * 
     */

    let count = 1;

    function main(prefix = 'zb-') {

        return `${prefix}${count ++}`;

    }

    return function(prefix) {


        if (!var_init_locked_1608956297617) {

            getName = include('src::environment.name');

            var_init_locked_1608956297617 = true;
        }


        return main.call(this, prefix);
    };

})();

exports['src::is.object'] = (() => {

    let isType;

    let var_init_locked_1608956297625;



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

        return typeof data === 'object';

    }

    return function(data) {


        if (!var_init_locked_1608956297625) {

            isType = include('src::is.type');

            var_init_locked_1608956297625 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.channel'] = (() => {

    let Observable, generate, on, off, isObject, isFunction;

    let var_init_locked_1613308339869;

    let var_class_1613308339869;



    let var_global_main_1613308339869;

    return function() {


        if (!var_init_locked_1613308339869) {

            Observable = include('src::mixin.observable');
            generate = include('src::id.generate');
            on = include('src::event.listener.add');
            off = include('src::event.listener.remove');
            isObject = include('src::is.object');
            isFunction = include('src::is.function');


            /**
             * 
             * 数据通信 
             * 
             * @import Observable from mixin.observable
             * 
             * @import generate from id.generate
             * 
             * @import on from event.listener.add
             * 
             * @import off from event.listener.remove
             * 
             * @import is.object
             * 
             * @import is.function
             * 
             * @class
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor(receivers = {}) {

                    super();

                    let me = this;

                    me.connected = false;

                    me.receivers = receivers;

                    me.connectState = 3;

                    me.cancelSendFunctions = {};
                }

                connect() {

                    let me = this,
                        {
                            connectState
                        } = me;

                    switch (connectState) {

                        case 2:

                            on(me, 'disconnect', () => me.connect(), {
                                once: true
                            });

                            break;

                        case 3:

                            me.connectState = 0;

                            me.doConnect();
                    }
                }

                disconnect() {

                    let me = this,
                        {
                            connectState
                        } = me;

                    switch (connectState) {

                        case 0:

                            on(me, 'connect', () => me.disconnect(), {
                                once: true
                            });

                            break;

                        case 1:

                            me.connectState = 2;

                            me.doDisconnect();
                    }
                }

                generateCallID() {

                    return generate(Date.now());
                }

                receiveConnected() {

                    this.receiveConnectState(2);
                }

                receiveDisconnected() {

                    this.receiveConnectState(3);
                }

                receiveConnectState(state) {

                    let me = this;

                    me.connectState = state;

                    switch (state) {

                        case 2:

                            me.connected = true;

                            me.fireEvent('connect');

                            break;

                        case 3:

                            me.fireEvent('disconnect');
                    }

                }

                receiveData(data) {

                    if (isObject(data)) {

                        let {
                            type,
                            ...options
                        } = data,
                        me = this;

                        switch (type) {

                            case 'send':

                                me.receiveSendInstruction(options);

                                break;

                            case 'reply':

                                me.receiveReplyValue(options);

                            case 'cancel-send':

                                me.receiveCancelSendData(options);
                        }
                    }
                }

                receiveCancelSendData({
                    id
                }) {

                    let {
                        cancelSendFunctions
                    } = this;

                    if (cancelSendFunctions.hasOwnProperty(id)) {

                        cancelSendFunctions[id]();

                        delete cancelSendFunctions[id];
                    }
                }

                async receiveSendInstruction({
                    id,
                    name,
                    params
                }) {

                    let me = this,
                        {
                            receivers,
                            cancelSendFunctions
                        } = me;

                    if (receivers.hasOwnProperty(name)) {

                        let reply = value => me.reply(id, value),
                            result = receivers[name].call(me, params, reply);

                        if (isFunction(result)) {

                            cancelSendFunctions[id] = result;

                        } else {

                            reply(await result);
                        }
                    }
                }

                receiveReplyValue({
                    id,
                    value
                }) {

                    this.fireEvent(id, value);
                }

                receiveError({
                    id,
                    error
                }) {

                    this.fireEvent(`${id}-error`, error);
                }

                reply(id, value) {

                    this.doReply({
                        type: 'reply',
                        id,
                        value
                    });
                }

                cancelSend(id) {

                    let me = this;

                    me.doSend({
                        type: 'cancel-send',
                        id
                    });

                    off(me, id);
                }

                async send(name, params, callback) {

                    let me = this,
                        {
                            connected
                        } = me;

                    if (connected) {

                        let id = me.generateCallID();

                        me.doSend({
                            type: 'send',
                            id,
                            name,
                            params
                        });

                        if (isFunction(callback)) {

                            on(me, id, (channel, data) => callback.call(channel, data));

                            return id;
                        }

                        return await new Promise((resolve, reject) => {

                            let
                                onResolve = (channel, data) => {

                                    channel.cancelSend(id);

                                    off(me, `${id}-error`, onReject);

                                    resolve(data);

                                },
                                onReject = (channel, error) => {

                                    channel.cancelSend(id);

                                    off(me, id, onResolve);

                                    reject(error);

                                };

                            on(me, id, onResolve, {
                                once: true
                            });

                            on(me, `${id}-error`, onReject, {
                                once: true
                            });

                        });

                    }

                    return await new Promise(resolve => on(me, 'connect', async () => resolve(await me.send(name, params, callback)), {
                        once: true
                    }));
                }

                doSend(data) {


                }

                doReply(data) {


                }

                doConnect() {


                }

                doDisconnect() {

                }
            }

            var_class_1613308339869 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613308339869;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel';
                }

            };

            main = var_class_1613308339869;

            var_global_main_1613308339869 = main;

            var_init_locked_1613308339869 = true;
        }


        return var_global_main_1613308339869;
    };

})();

exports['src::axios'] = (() => {

    let from, generate, isFunction, isString;

    let var_init_locked_1608956297630;




    /**
     * 
     * 基于 axios 的再封装
     * 
     * @import from from array.from
     * 
     * @import generate from id.generate
     * 
     * @import is.function
     * 
     * @import is.string
     * 
     * @param {object} params 请求参数
     * 
     * @param {function} [callback] 请求回调
     * 
     * @return {function} 取消请求函数  
     * 
     * @require axios
     * 
     * @require fs
     * 
     */

    const
        axios = require('axios'),
        {
            stringify
        } = require('qs'),
        CancelToken = axios.CancelToken;

    function main(params, callback) {

        if (isFunction(callback)) {

            let source = CancelToken.source();

            axios({
                    ...processParams(params),
                    cancelToken: source.token
                })
                .then(response => callback(true, response.data, response))
                .catch(error => {

                    if (!axios.isCancel(error)) {

                        callback(false, error.message, error);
                    }

                });

            return () => source.cancel();
        }

        return new Promise((resolve, reject) => axios(processParams(params))
            .then(({
                data
            }) => resolve(data))
            .catch(error => reject(error)));
    }

    function processMethod(method) {

        if (isString(method)) {

            return method.toUpperCase();
        }

        return 'GET';
    }

    function processParams({
        form = false,
        params,
        files,
        ...options
    }) {

        options.method = processMethod(options.method);

        if (form && options.method !== 'GET') {

            return processForm(options, params);
        }

        if (files) {

            return processUpload(options, from(files));
        }

        return {
            params,
            ...options
        };
    }

    function processForm(options, params) {

        return {
            ...options,
            data: stringify(params)
        };
    }

    function processUpload(options, files) {

        let data = new FormData();

        for (let file of files) {

            data.append(generate('file-'), file);
        }

        options.method = 'POST';

        return {
            ...options,
            data
        };
    }

    return function(params, callback) {


        if (!var_init_locked_1608956297630) {

            from = include('src::array.from');
            generate = include('src::id.generate');
            isFunction = include('src::is.function');
            isString = include('src::is.string');

            var_init_locked_1608956297630 = true;
        }


        return main.call(this, params, callback);
    };

})();

exports['src::data.channel.client.axios'] = (() => {

    let Channel;

    let var_init_locked_1608956297634;

    let var_class_1608956297634;



    let var_global_main_1608956297634;

    return function() {


        if (!var_init_locked_1608956297634) {

            Channel = include('src::data.channel.client')();


            /**
             * 
             * 基于 Axios 数据通道客户端实现
             * 
             * @import Channel from ..client value
             * 
             * @require axios
             * 
             * @class
             * 
             */

            const axios = require('axios');

            class main extends Channel {

                doSend(params, fireDataEvent, fireErrorEvent) {

                    axios(params)
                        .then(({
                            data
                        }) => fireDataEvent(data))
                        .catch(({
                            status,
                            data
                        }) => fireErrorEvent({
                            status,
                            data
                        }));
                }

                processSendParams(params) {

                    return params;
                }

                processReceiveData(data) {

                    return data;
                }
            }

            var_class_1608956297634 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297634;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel.client.axios';
                }

            };

            main = var_class_1608956297634;

            var_global_main_1608956297634 = main;

            var_init_locked_1608956297634 = true;
        }


        return var_global_main_1608956297634;
    };

})();

exports['src::data.channel.client'] = (() => {

    let Observable, isDefined, on, off;

    let var_init_locked_1608956297640;

    let var_class_1608956297640;



    let var_global_main_1608956297640;

    return function() {


        if (!var_init_locked_1608956297640) {

            Observable = include('src::mixin.observable');
            isDefined = include('src::is.defined');
            on = include('src::event.listener.add');
            off = include('src::event.listener.remove');


            /**
             * 
             * 数据通道客户端基本实现
             * 
             * @import Observable from mixin.observable
             * 
             * @import is.defined
             * 
             * @import on from event.listener.add
             * 
             * @import off from event.listener.remove
             * 
             * @class
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                getEventNameBySendParams(params) {

                    return JSON.stringify(params);
                }

                getEventNameByReceiveParams() {

                }

                processSendParams(params) {

                    return params;
                }

                processReceiveData() {

                    return {};
                }

                send(params, isReturnData = false) {

                    let me = this,
                        eventName = me.getEventNameBySendParams(params),
                        dataEvent = eventName,
                        errorEvent = `${eventName}-error`,
                        fireDataEvent = (...params) => {

                            let receiveData = me.processReceiveData(...params);

                            let receiveDataEvent = me.getEventNameByReceiveParams(receiveData);

                            if (isDefined(receiveDataEvent) && receiveDataEvent !== dataEvent) {

                                return;
                            }

                            me.fireEvent(dataEvent, receiveData);

                        },
                        fireErrorEvent = data => me.fireEvent(errorEvent, data);

                    params = me.processSendParams(params);

                    if (isReturnData) {

                        return new Promise((resolve, reject) => {

                            let listeners = {
                                [dataEvent](client, data) {

                                    off(me, listeners);

                                    resolve(data);
                                },
                                [errorEvent](client, data) {

                                    off(me, listeners);

                                    reject(data);
                                }
                            };

                            on(me, listeners);

                            me.doSend(params, fireDataEvent, fireErrorEvent);

                        });
                    }

                    me.doSend(params, fireDataEvent, fireErrorEvent);
                }

                doSend() {


                }

            }

            var_class_1608956297640 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297640;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel.client';
                }

            };

            main = var_class_1608956297640;

            var_global_main_1608956297640 = main;

            var_init_locked_1608956297640 = true;
        }


        return var_global_main_1608956297640;
    };

})();

exports['src::data.channel.client.socket.io'] = (() => {

    let Channel, Observable, createSocket, add, from;

    let var_init_locked_1608956297645;

    let var_class_1608956297645;



    let var_global_main_1608956297645;

    return function() {


        if (!var_init_locked_1608956297645) {

            Channel = include('src::data.channel.client')();
            Observable = include('src::mixin.observable');
            createSocket = include('src::socket.io');
            add = include('src::event.listener.add');
            from = include('src::array.from');


            /**
             * 
             * 基于 Socket.io 数据通道客户端实现
             * 
             * @import Channel from ....client value
             * 
             * @import Observable from mixin.observable
             * 
             * @import createSocket from socket.io
             * 
             * @import add from event.listener.add
             * 
             * @import from from array.from
             * 
             * @class
             * 
             */


            class main extends Channel {

                doSend({
                    event,
                    params,
                    ...options
                }, fireDataEvent, fireErrorEvent) {

                    getSocket.call(this, {
                        ...options,
                        fireDataEvent,
                        fireErrorEvent
                    }).emit(event, ...from(params));
                }
            }

            const sockets = new Map();

            function getSocket({
                url,
                path = '/socket.io',
                fireDataEvent,
                fireErrorEvent,
                ...options
            }) {

                let key = `${url}:${path}`;

                if (!sockets.has(key)) {

                    let socket = createSocket({
                        url,
                        path,
                        ...options
                    });

                    add(socket, {
                        data(client, ...params) {

                            fireDataEvent(...params);

                        },
                        connect_error: fireErrorEvent
                    });

                    sockets.set(key, socket);
                }

                return sockets.get(key);
            }

            var_class_1608956297645 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297645;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel.client.socket.io';
                }

            };

            main = var_class_1608956297645;

            var_global_main_1608956297645 = main;

            var_init_locked_1608956297645 = true;
        }


        return var_global_main_1608956297645;
    };

})();

exports['src::socket.parser'] = (() => {





    let var_once_value_1608956297672;

    function main() {

        /**
         * 
         * 修复 socket.io 解析器无法连接的问题
         * 
         * @once
         * 
         */

        const {
            Encoder,
            BINARY_EVENT,
            BINARY_ACK,
            ERROR
        } = require('socket.io-parser');

        function stringify(data) {

            try {

                return JSON.stringify(data);

            } catch (e) {

            }

            return false;
        }

        const {
            encode
        } = Encoder.prototype;

        Encoder.prototype.encode = function(obj, callback) {

            let {
                type
            } = obj;

            switch (type) {

                case BINARY_EVENT:
                case BINARY_ACK:

                    encode.call(this, obj, callback);

                    break;

                default:

                    callback([
                        encodeAsString(obj)
                    ]);
            }
        };

        function encodeAsString(obj) {

            let {
                type,
                nsp,
                id,
                data,
                attachments
            } = obj;

            let str = `${type}`;

            switch (type) {

                case BINARY_EVENT:
                case BINARY_ACK:

                    str += attachments + '-';
            }

            if (nsp && '/' !== nsp) {

                str += `${nsp}`;

            }

            if (id || data) {

                str += ',';
            }

            if (null != id) {

                str += id;

            }

            if (null != data) {

                let payload = stringify(data);

                if (payload !== false) {

                    str += payload;

                } else {

                    return `${ERROR}"encode error"`;
                }
            }

            return str;
        }

    }

    return function() {




        if (var_once_value_1608956297672) {

            return var_once_value_1608956297672;

        }
        return var_once_value_1608956297672 = main.call(this);

    };

})();

exports['src::socket.io'] = (() => {

    let add, remove, environment, Observable, socketParser, isDefined, isNumber, isObject;

    let var_init_locked_1608956297660;

    let var_class_1608956297660;



    let var_global_main_1608956297660;

    return function(options) {


        if (!var_init_locked_1608956297660) {

            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            environment = include('src::environment.name')();
            Observable = include('src::mixin.observable');
            socketParser = include('src::socket.parser')();
            isDefined = include('src::is.defined');
            isNumber = include('src::is.number');
            isObject = include('src::is.object.simple');


            /**
             * 
             * 针对 Socket.io 再封装
             * 
             * @import add from event.listener.add
             * 
             * @import remove from event.listener.remove
             * 
             * @import environment from environment.name value
             * 
             * @import Observable from mixin.observable
             * 
             * @import .parser value
             * 
             * @import is.defined
             * 
             * @import is.number
             * 
             * @import isObject from is.object.simple
             * 
             * @param {object} options Socket.io 配置
             * 
             * @require socket.io-client
             * 
             */

            const IO = require('socket.io-client');

            const browserRe = /browser$/;

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor({
                    url,
                    path,
                    dataEventName = 'data',
                    reconnection = true
                }) {

                    super();

                    let me = this;

                    me.dataEventName = dataEventName;

                    me.reconnectionMax = Number.MAX_VALUE;

                    if (isDefined(reconnection)) {

                        if (reconnection === true) {

                            me.reconnectionDelay = 1000;

                        } else if (isNumber(reconnection)) {

                            me.reconnectionDelay = reconnection;

                        } else if (isObject(reconnection)) {

                            let {
                                delay = 1000,
                                    max = 5000
                            } = reconnection;

                            me.reconnectionDelay = delay;

                            me.reconnectionMax = max;
                        }
                    }

                    me.url = url;

                    me.path = path;

                    me.state = 3;

                    me.connect();

                    if (browserRe.test(environment)) {

                        add(window, {
                            offline: 'onOffline',
                            online: 'onOnline',
                            visibilitychange: 'onVisibilityChange',
                            scope: me
                        });
                    }
                }

                onOnline() {

                    this.connect();
                }

                onOffline() {

                    this.disconnect();
                }

                onVisibilityChange() {

                    let me = this;

                    if (document.visibilityState) {

                        me.connect();

                    } else {

                        me.disconnect();
                    }
                }

                isDisconnected() {

                    return this.state === 3;
                }

                isConnected() {

                    return this.state === 1;
                }

                isConnecting() {

                    return this.state = 0;
                }

                isDisconnecting() {

                    return this.state === 2;
                }

                async connect() {

                    let me = this;

                    if (me.isConnected()) {

                        return;
                    }

                    if (me.isDisconnected()) {

                        me.state = 0;

                        createSocket.call(me);

                        return await (me.transitionState = new Promise(callback => add(me, 'connect', () => callback(), {
                            once: true
                        })));

                    }

                    await me.transitionState;

                    if (me.isDisconnected()) {

                        await me.connect();
                    }
                }

                async disconnect() {

                    let me = this;

                    if (me.isDisconnected()) {

                        return;
                    }

                    if (me.isConnected()) {

                        me.state = 2;

                        me.socket.disconnect();

                        return await (me.transitionState = new Promise(callback => add(me, 'disconnect', () => callback(), {
                            once: true
                        })));
                    }

                    await me.transitionState;

                    if (me.isConnected()) {

                        await me.disconnect();
                    }
                }

                onConnect() {

                    let me = this;

                    me.state = 1;

                    delete me.transitionState;

                    me.fireEvent('connect');
                }

                onDisconnect() {

                    let me = this,
                        {
                            state: oldState
                        } = me;

                    me.state = 3;

                    delete me.transitionState;

                    if (oldState === 2) {

                        me.fireEvent('disconnect');

                    } else {

                        me.autoReconnect();
                    }
                }

                autoReconnect() {

                    let me = this,
                        {
                            reconnectionCount = 0,
                            reconnectionMax,
                            reconnectionDelay
                        } = me;

                    if (!isDefined(reconnectionDelay)) {

                        me.fireEvent('connect_error');

                        return;
                    }

                    reconnectionCount++;

                    if (reconnectionCount > reconnectionMax) {

                        delete me.reconnectionCount;

                        me.fireEvent('connect_error');

                    } else {

                        me.reconnectionCount = reconnectionCount;

                        setTimeout(() => {

                            me.connect();

                            me.fireEvent('reconnecting', reconnectionCount);

                        }, reconnectionDelay);
                    }
                }

                onData(...params) {

                    this.fireEvent('data', ...params);
                }

                onError() {

                    let me = this,
                        {
                            state
                        } = me;

                    if (state === 0) {

                        me.onDisconnect();
                    }
                }

                async emit(event, ...params) {

                    let me = this,
                        {
                            socket
                        } = me;

                    if (me.isConnected()) {

                        socket.emit(event, ...params);

                    } else {

                        await me.connect();

                        me.emit(event, ...params);
                    }
                }
            }

            function createSocket() {

                let me = this,
                    {
                        url,
                        path,
                        socket,
                        dataEventName
                    } = me;

                if (socket) {

                    remove(socket, {
                        connect: 'onConnect',
                        disconnect: 'onDisconnect',
                        connect_error: 'onError',
                        scope: me
                    });
                }

                add(me.socket = IO(url, {
                    path,
                    forceNew: true,
                    transports: [
                        'websocket'
                    ],
                    reconnection: false
                }), {
                    connect: 'onConnect',
                    disconnect: 'onDisconnect',
                    connect_error: 'onError',
                    [dataEventName]: 'onData',
                    scope: me
                });
            }

            var_class_1608956297660 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297660;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::socket.io';
                }

            };

            main = var_class_1608956297660;

            var_global_main_1608956297660 = main;

            var_init_locked_1608956297660 = true;
        }


        return new var_global_main_1608956297660(options);
    };

})();

exports['src::data.channel.message.client'] = (() => {







    function main() {



    }

    return function() {



        return main.call(this);
    };

})();

exports['src::data.channel.message.server'] = (() => {







    function main() {



    }

    return function() {



        return main.call(this);
    };

})();

exports['src::data.channel.window'] = (() => {

    let Channel, on, off;

    let var_init_locked_1613308339886;

    let var_class_1613308339886;



    let var_global_main_1613308339886;

    return function() {


        if (!var_init_locked_1613308339886) {

            Channel = include('src::data.channel')();
            on = include('src::event.listener.add');
            off = include('src::event.listener.remove');


            /**
             * 
             * 窗口之间的数据通道
             * 
             * @import Channel from data.channel value
             * 
             * @import on from event.listener.add
             * 
             * @import off from event.listener.remove
             * 
             * @class
             * 
             */

            class main extends Channel {

                constructor(name, target, receivers) {

                    super(receivers);

                    let me = this;

                    on(window, 'message', ({
                        data,
                        ports
                    }) => {

                        let {
                            receivePort
                        } = me;

                        if (data === `${name}-connect` && !receivePort) {

                            let port = ports[0];

                            port.onmessage = ({
                                data
                            }) => me.receiveData(data);

                            port.postMessage(`${name}-connected`);

                            me.receivePort = port;

                            me.connect();

                        } else if (data === `${name}-disconnect` && receivePort) {

                            let {
                                receivePort
                            } = me;

                            receivePort.postMessage(`${name}-disconnected`);

                            receivePort.close();

                            delete me.receivePort;

                            me.disconnect();

                        }
                    });

                    me.target = target;

                    me.name = name;
                }

                doConnect() {

                    let me = this,
                        {
                            name,
                            target
                        } = me,
                        {
                            port1,
                            port2
                        } = new MessageChannel();

                    port1.onmessage = ({
                        data
                    }) => {

                        if (data === `${name}-connected`) {

                            me.receiveConnected();

                        } else if (data === `${name}-disconnected`) {

                            me.sendPort.close();

                            delete me.sendPort;

                            me.receiveDisconnected();

                        } else {

                            me.receiveData(data);
                        }
                    };

                    me.sendPort = port1;

                    target.postMessage(`${name}-connect`, '*', [
                        port2
                    ]);
                }

                doDisconnect() {

                    let {
                        name,
                        target
                    } = this;

                    target.postMessage(`${name}-disconnect`, '*');
                }

                doSend(data) {

                    this.sendPort.postMessage(data);
                }

                doReply(data) {

                    this.receivePort.postMessage(data);
                }
            }

            var_class_1613308339886 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613308339886;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.channel.window';
                }

            };

            main = var_class_1613308339886;

            var_global_main_1613308339886 = main;

            var_init_locked_1613308339886 = true;
        }


        return var_global_main_1613308339886;
    };

})();

exports['src::data.connection.accept'] = (() => {

    let isDefined;

    let var_init_locked_1608956297690;



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


        if (!var_init_locked_1608956297690) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297690 = true;
        }


        return main.call(this, ...args);
    };

})();

exports['src::data.connection.activate'] = (() => {

    let includes;

    let var_init_locked_1608956297693;



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


        if (!var_init_locked_1608956297693) {

            includes = include('src::array.includes');

            var_init_locked_1608956297693 = true;
        }


        return main.call(this);
    };

})();

exports['src::data.connection.ajax.request.browser'] = (() => {

    let request;

    let var_init_locked_1608956297698;



    function main(url, config) {


        /**
         * 
         * 基于浏览器的 AJAX 请求实现
         * 
         * @import request from ..request
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


        if (!var_init_locked_1608956297698) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1608956297698 = true;
        }


        return main.call(this, url, config);
    };

})();

exports['src::url.append'] = (() => {

    let isString;

    let var_init_locked_1608956297710;



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


        if (!var_init_locked_1608956297710) {

            isString = include('src::is.string');

            var_init_locked_1608956297710 = true;
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

    let var_init_locked_1608956297713;



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


        if (!var_init_locked_1608956297713) {

            isInt = include('src::regexp.int');

            var_init_locked_1608956297713 = true;
        }


        return main.call(this, url, data);
    };

})();

exports['src::data.connection.ajax.request'] = (() => {

    let append, apply, isObject;

    let var_init_locked_1608956297701;



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


        if (!var_init_locked_1608956297701) {

            append = include('src::url.append');
            apply = include('src::url.template.apply');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956297701 = true;
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

exports['src::data.connection.ajax.request.miniprogram'] = (() => {

    let request;

    let var_init_locked_1608956297720;



    function main(url, config) {


        /**
         * 
         * 基于小程序的 AJAX 请求实现
         * 
         * @import request from ..request
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


        if (!var_init_locked_1608956297720) {

            request = include('src::data.connection.ajax.request');

            var_init_locked_1608956297720 = true;
        }


        return main.call(this, url, config);
    };

})();

exports['src::data.connection.ajax'] = (() => {

    let Connection;

    let var_init_locked_1608956297723;

    let var_class_1608956297723;



    let var_global_main_1608956297723;

    return function(options) {


        if (!var_init_locked_1608956297723) {

            Connection = include('src::data.connection')();


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


            var_class_1608956297723 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297723;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.ajax';
                }

            };

            main = var_class_1608956297723;

            var_global_main_1608956297723 = main;

            var_init_locked_1608956297723 = true;
        }


        return new var_global_main_1608956297723(options);
    };

})();

exports['src::data.subscriber.constructor'] = (() => {

    let get, add, emptyFn, from;

    let var_init_locked_1608956297745;



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


        if (!var_init_locked_1608956297745) {

            get = include('src::function.get');
            add = include('src::event.listener.add');
            emptyFn = include('src::function.empty')();
            from = include('src::array.from');

            var_init_locked_1608956297745 = true;
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

    let var_init_locked_1608956297760;



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


        if (!var_init_locked_1608956297760) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297760 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.subscriber.accept'] = (() => {

    let isDefined;

    let var_init_locked_1608956297757;



    const var_current_scope_1608956297757 = new Map();

    return function(data) {


        if (!var_init_locked_1608956297757) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297757 = true;
        }




        if (!var_current_scope_1608956297757.has(this)) {

            var_current_scope_1608956297757.set(this, (() => {
                const setData = include('src::data.subscriber.accept.data').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297757.get(this);



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

exports['src::data.subscriber.open'] = (() => {

    let isDefined, equals, assign;

    let var_init_locked_1608956297767;



    const var_current_scope_1608956297767 = new Map();

    return function(params = {}) {


        if (!var_init_locked_1608956297767) {

            isDefined = include('src::is.defined');
            equals = include('src::data.equals');
            assign = include('src::object.assign');

            var_init_locked_1608956297767 = true;
        }




        if (!var_current_scope_1608956297767.has(this)) {

            var_current_scope_1608956297767.set(this, (() => {
                const setData = include('src::data.subscriber.accept.data').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297767.get(this);



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

    let var_init_locked_1608956297776;



    function main(target) {


        /**
         * 
         * 去除所有事件监听
         * 
         * @import listeners from ....listeners value
         * 
         * @import remove from ..remove
         * 
         * @param {mixed} target 事件主体
         * 
         */

        let result = listeners.find(target);

        for (let {
                key
            } of result) {

            remove(target, key[1], key[2], key[3]);
        }

    }

    return function(target) {


        if (!var_init_locked_1608956297776) {

            listeners = include('src::event.listeners')();
            remove = include('src::event.listener.remove');

            var_init_locked_1608956297776 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::data.subscriber.destroy'] = (() => {

    let removeAll;

    let var_init_locked_1608956297773;



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


        if (!var_init_locked_1608956297773) {

            removeAll = include('src::event.listener.remove.all');

            var_init_locked_1608956297773 = true;
        }


        return main.call(this);
    };

})();

exports['src::data.subscriber'] = (() => {

    let mixin_1608956297740__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1608956297740;

    let var_class_1608956297740;



    let var_global_main_1608956297740;

    return function() {


        if (!var_init_locked_1608956297740) {

            mixin_1608956297740__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::data.subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_prevOpen = include('src::data.subscriber.open.prev');
            method_accept = include('src::data.subscriber.accept');
            method_reopen = include('src::data.subscriber.reopen');
            method_open = include('src::data.subscriber.open');
            method_close = include('src::data.subscriber.close');
            method_destroy = include('src::data.subscriber.destroy');
            isObject = include('src::is.object.simple');

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

            var_class_1608956297740 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297740;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.subscriber';
                }

            };

            main = var_class_1608956297740;

            var_global_main_1608956297740 = main;

            var_init_locked_1608956297740 = true;
        }


        return var_global_main_1608956297740;
    };

})();

exports['src::is.class'] = (() => {

    let isType;

    let var_init_locked_1608956297782;



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


        if (!var_init_locked_1608956297782) {

            isType = include('src::is.type');

            var_init_locked_1608956297782 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::class.create'] = (() => {

    let isString, isFunction, isClass;

    let var_init_locked_1608956297779;



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


        if (!var_init_locked_1608956297779) {

            isString = include('src::is.string');
            isFunction = include('src::is.function');
            isClass = include('src::is.class');

            var_init_locked_1608956297779 = true;
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

    let var_init_locked_1608956297735;

    let var_class_1608956297735;



    let var_global_main_1608956297735;

    return function() {


        if (!var_init_locked_1608956297735) {

            isObject = include('src::is.object.simple');
            isString = include('src::is.string');
            isFunction = include('src::is.function');
            isBoolean = include('src::is.boolean');
            isArray = include('src::is.array');
            Subscriber = include('src::data.subscriber')();
            get = include('src::function.get');
            create = include('src::class.create');
            includes = include('src::array.includes');
            remove = include('src::array.remove');
            getName = include('src::data.connection.subscribe.name');
            Observable = include('src::mixin.observable');
            add = include('src::event.listener.add');
            equals = include('src::data.equals');

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

                    let me = this,
                        subscribers = me.subscribers.values();

                    for (let subscriber of subscribers) {

                        let {
                            closed,
                            params: subscribeParams
                        } = subscriber;

                        if (!closed && equals(params, me.processSubscribeParams(subscriber, subscribeParams))) {

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

            var_class_1608956297735 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297735;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.base';
                }

            };

            main = var_class_1608956297735;

            var_global_main_1608956297735 = main;

            var_init_locked_1608956297735 = true;
        }


        return var_global_main_1608956297735;
    };

})();

exports['src::data.connection.subscribed'] = (() => {

    let getName;

    let var_init_locked_1608956297786;



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


        if (!var_init_locked_1608956297786) {

            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1608956297786 = true;
        }


        return main.call(this, name, connectionId);
    };

})();

exports['src::data.connection.subscribe.once'] = (() => {

    let assign;

    let var_init_locked_1608956297789;



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


        if (!var_init_locked_1608956297789) {

            assign = include('src::object.assign');

            var_init_locked_1608956297789 = true;
        }


        return main.call(this, name, options);
    };

})();

exports['src::function.defer'] = (() => {

    let get;

    let var_init_locked_1608956297801;



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

        return setTimeout(() => get(fn, scope)(), defer);

    }

    return function(fn, {
        scope,
        defer = 0
    } = {}) {


        if (!var_init_locked_1608956297801) {

            get = include('src::function.get');

            var_init_locked_1608956297801 = true;
        }


        return main.call(this, fn, {
            scope,
            defer
        });
    };

})();

exports['src::data.pusher'] = (() => {

    let isDefined, clear, defer;

    let var_init_locked_1608956297795;

    let var_class_1608956297795;



    let var_global_main_1608956297795;

    return function(onOpen, onClose) {


        if (!var_init_locked_1608956297795) {

            isDefined = include('src::is.defined');
            clear = include('src::array.clear');
            defer = include('src::function.defer');


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

            var_class_1608956297795 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297795;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.pusher';
                }

            };

            main = var_class_1608956297795;

            var_global_main_1608956297795 = main;

            var_init_locked_1608956297795 = true;
        }


        return new var_global_main_1608956297795(onOpen, onClose);
    };

})();

exports['src::data.connection.subscribe.push'] = (() => {

    let assign, createPusher;

    let var_init_locked_1608956297792;



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


        if (!var_init_locked_1608956297792) {

            assign = include('src::object.assign');
            createPusher = include('src::data.pusher');

            var_init_locked_1608956297792 = true;
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

exports['src::data.connection.subscribe.namespace.generate'] = (() => {

    let generate, getName;

    let var_init_locked_1608956297816;



    function main(name) {


        /**
         * 
         * 生成可用的命名空间
         * 
         * @import generate from id.generate
         * 
         * @import getName from ..name
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


        if (!var_init_locked_1608956297816) {

            generate = include('src::id.generate');
            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1608956297816 = true;
        }


        return main.call(this, name);
    };

})();

exports['src::data.connection.subscribe'] = (() => {

    let assign, getName;

    let var_init_locked_1608956297813;



    const var_current_scope_1608956297813 = new Map();

    return function(name, options = {}) {


        if (!var_init_locked_1608956297813) {

            assign = include('src::object.assign');
            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1608956297813 = true;
        }




        if (!var_current_scope_1608956297813.has(this)) {

            var_current_scope_1608956297813.set(this, (() => {
                const generate = include('src::data.connection.subscribe.namespace.generate').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297813.get(this);



        return main.call(this, name, options);
    };

})();

exports['src::data.connection.unsubscribe'] = (() => {

    let getName;

    let var_init_locked_1608956297819;



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


        if (!var_init_locked_1608956297819) {

            getName = include('src::data.connection.subscribe.name');

            var_init_locked_1608956297819 = true;
        }


        return main.call(this, name, namespace);
    };

})();

exports['src::data.connection.subscribes'] = (() => {

    let isString, isFunction, isObject, get;

    let var_init_locked_1608956297825;



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


        if (!var_init_locked_1608956297825) {

            isString = include('src::is.string');
            isFunction = include('src::is.function');
            isObject = include('src::is.object.simple');
            get = include('src::function.get');

            var_init_locked_1608956297825 = true;
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

    let var_init_locked_1608956297833;



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


        if (!var_init_locked_1608956297833) {

            includes = include('src::array.includes');

            var_init_locked_1608956297833 = true;
        }


        return main.call(this);
    };

})();

exports['src::data.connection'] = (() => {

    let extend, method_acceptMessage, method_isSubscribed, method_subscribeOnce, method_subscribePush, method_findOpenedSubscriberByName, method_subscribe, method_unsubscribe, method_subscribes, method_unsubscribes, method_activate, method_deactivate, isObject;

    let var_init_locked_1608956297727;

    let var_class_1608956297727;



    let var_global_main_1608956297727;

    return function() {


        if (!var_init_locked_1608956297727) {

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
            isObject = include('src::is.object.simple');

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

            var_class_1608956297727 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297727;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection';
                }

            };

            main = var_class_1608956297727;

            var_global_main_1608956297727 = main;

            var_init_locked_1608956297727 = true;
        }


        return var_global_main_1608956297727;
    };

})();

exports['src::data.connection.deploy.lifecycle'] = (() => {

    let deploy;

    let var_init_locked_1608956297837;



    function main(connections, component, getConnectionId) {


        /**
         * 
         * 对象版部署封装
         * 
         * @import deploy from ..deploy
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


        if (!var_init_locked_1608956297837) {

            deploy = include('src::data.connection.deploy');

            var_init_locked_1608956297837 = true;
        }


        return main.call(this, connections, component, getConnectionId);
    };

})();

exports['src::data.connection.deploy'] = (() => {

    let generate, isObject, isArray, isFunction, isString, empty;

    let var_init_locked_1608956297844;



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


        if (!var_init_locked_1608956297844) {

            generate = include('src::id.generate');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            isFunction = include('src::is.function');
            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            empty = include('src::function.empty')();

            var_init_locked_1608956297844 = true;
        }


        return main.call(this, connections, subscriberMap, getConnectionId);
    };

})();

exports['src::data.connection.deploy.miniprogram'] = (() => {

    let Manager, empty, deploy;

    let var_init_locked_1608956297851;



    function main(connections, component, defaultConnectionNames) {


        /**
         * 
         * 基于数据连接的小程序封装
         * 
         * @import Manager from data.connection.socket.manager value
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from .lifecycle
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


        if (!var_init_locked_1608956297851) {

            Manager = include('src::data.connection.socket.manager')();
            empty = include('src::function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1608956297851 = true;
        }


        return main.call(this, connections, component, defaultConnectionNames);
    };

})();

exports['src::data.connection.socket'] = (() => {

    let Connection, observable, add, Manager, getName;

    let var_init_locked_1608956297868;

    let var_class_1608956297868;



    let var_global_main_1608956297868;

    return function() {


        if (!var_init_locked_1608956297868) {

            Connection = include('src::data.connection')();
            observable = include('src::mixin.observable');
            add = include('src::event.listener.add');
            Manager = include('src::data.connection.socket.manager')();
            getName = include('src::environment.name');



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
             * @import getName from environment.name
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

                    if (getName() === 'browser') {

                        let isDoReconnect = false;

                        add(window, {
                            offline() {

                                if (me.isConnected) {

                                    isDoReconnect = true;
                                }
                            },
                            online() {

                                if (me.isConnected && isDoReconnect) {

                                    me.onReconnect();
                                }

                                isDoReconnect = false;
                            },
                            scope: me
                        });
                    }
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

            var_class_1608956297868 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297868;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket';
                }

            };

            main = var_class_1608956297868;

            var_global_main_1608956297868 = main;

            var_init_locked_1608956297868 = true;
        }


        return var_global_main_1608956297868;
    };

})();

exports['src::data.connection.socket.manager'] = (() => {

    let Socket, add, remove;

    let var_init_locked_1608956297855;

    let var_class_1608956297855;

    let var_once_value_1608956297855;

    let var_global_main_1608956297855;

    return function() {


        if (!var_init_locked_1608956297855) {

            Socket = include('src::data.connection.socket');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');


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

            var_class_1608956297855 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297855;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.manager';
                }

            };

            main = var_class_1608956297855;

            var_global_main_1608956297855 = main;

            var_init_locked_1608956297855 = true;
        }



        if (var_once_value_1608956297855) {

            return var_once_value_1608956297855;

        }
        return var_once_value_1608956297855 = new var_global_main_1608956297855();

    };

})();

exports['src::data.connection.deploy.module'] = (() => {

    let empty, deploy;

    let var_init_locked_1608956297873;



    function main(connections, module) {


        /**
         * 
         * 基于数据连接的模块封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from .lifecycle
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


        if (!var_init_locked_1608956297873) {

            empty = include('src::function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1608956297873 = true;
        }


        return main.call(this, connections, module);
    };

})();

exports['src::data.connection.deploy.vue'] = (() => {

    let empty, deploy;

    let var_init_locked_1608956297882;



    function main(connections, component) {


        /**
         * 
         * 基于数据连接的 VUE 封装
         * 
         * @import empty from function.empty value
         * 
         * @import deploy from .lifecycle
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


        if (!var_init_locked_1608956297882) {

            empty = include('src::function.empty')();
            deploy = include('src::data.connection.deploy.lifecycle');

            var_init_locked_1608956297882 = true;
        }


        return main.call(this, connections, component);
    };

})();

exports['src::data.connection.flow'] = (() => {

    let isObject, isString, isFunction, isArray, isPromise, isDefined, generate, get;

    let var_init_locked_1608956297886;

    let var_class_1608956297886;



    let var_global_main_1608956297886;

    return function(message, flows, methods, callback, scoped) {


        if (!var_init_locked_1608956297886) {

            isObject = include('src::is.object.simple');
            isString = include('src::is.string');
            isFunction = include('src::is.function');
            isArray = include('src::is.array');
            isPromise = include('src::is.promise');
            isDefined = include('src::is.defined');
            generate = include('src::id.generate');
            get = include('src::function.get');

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

            var_class_1608956297886 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297886;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.flow';
                }

            };

            main = var_class_1608956297886;

            var_global_main_1608956297886 = main;

            var_init_locked_1608956297886 = true;
        }


        return new var_global_main_1608956297886(message, flows, methods, callback, scoped);
    };

})();

exports['src::promise.create.processive'] = (() => {

    let isFunction, remove, includes, isEmpty, isDefined;

    let var_init_locked_1608956297896;

    let var_class_1608956297896;



    let var_global_main_1608956297896;

    return function() {


        if (!var_init_locked_1608956297896) {

            isFunction = include('src::is.function');
            remove = include('src::array.remove');
            includes = include('src::array.includes');
            isEmpty = include('src::is.empty');
            isDefined = include('src::is.defined');


            /**
             * 
             * 创建持续性 Promise
             * 
             * @import is.function
             * 
             * @import remove from array.remove
             * 
             * @import includes from array.includes
             * 
             * @import is.empty
             * 
             * @import is.defined
             * 
             * @param {function} onInit 实始化 Promise 引用
             * 
             * @param {function} onCancel 取消 Promise 时调用
             * 
             * @class
             * 
             * @return {promise.Processive} 持续性 Promise 
             * 
             */

            class main {

                constructor(onInit, onCancel) {

                    let me = this;

                    me.resolveCallbacks = [];

                    me.rejectCallbacks = [];

                    let {
                        resolve,
                        reject
                    } = me;

                    me.onCancelResult = onInit(resolve.bind(me), reject.bind(me));

                    me.onCancel = onCancel;
                }

                async cancel(callback) {

                    let {
                        onCancelResult,
                        onCancel,
                        resolveCallbacks
                    } = this;

                    if (isFunction(callback)) {

                        if (includes(resolveCallbacks, callback)) {

                            remove(resolveCallbacks, callback);
                        }

                        if (isEmpty(resolveCallbacks)) {

                            await onCancel(onCancelResult);
                        }

                    } else {

                        await onCancel(onCancelResult);
                    }
                }

                resolve(data) {

                    let {
                        resolveCallbacks
                    } = this;

                    for (let resolveCallback of resolveCallbacks) {

                        let result = resolveCallback(data);

                        if (isDefined(result)) {

                            data = result;
                        }
                    }
                }

                reject(error) {

                    let {
                        rejectCallbacks
                    } = this;

                    for (let rejectCallback of rejectCallbacks) {

                        rejectCallback(error);
                    }
                }

                then(callback) {

                    let me = this,
                        {
                            resolveCallbacks
                        } = me;

                    resolveCallbacks.push(callback);

                    return me;
                }

                catch (callback) {

                    let me = this,
                        {
                            rejectCallbacks
                        } = me;

                    rejectCallbacks.push(callback);

                    return me;
                }
            }

            var_class_1608956297896 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297896;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::promise.create.processive';
                }

            };

            main = var_class_1608956297896;

            var_global_main_1608956297896 = main;

            var_init_locked_1608956297896 = true;
        }


        return var_global_main_1608956297896;
    };

})();

exports['src::is.promise.processive'] = (() => {

    let ProcessivePromise;

    let var_init_locked_1608956297893;



    function main(data) {


        /**
         * 
         * 判定是否为持续 Promise 对象
         * 
         * @import ProcessivePromise from promise.create.processive value
         * 
         * @param {mixed} data 数据
         * 
         * @return {boolean}  如果为持续 Promise 对象，则返回 true , 否则返回 false 
         * 
         */

        return data instanceof ProcessivePromise;


    }

    return function(data) {


        if (!var_init_locked_1608956297893) {

            ProcessivePromise = include('src::promise.create.processive')();

            var_init_locked_1608956297893 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.promise.native'] = (() => {







    function main(data) {


        /**
         * 
         * 判断数据是否为原始 Promise 对象
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

exports['src::is.promise'] = (() => {

    let isProcessive, isNative;

    let var_init_locked_1608956297891;



    function main(data) {


        /**
         * 
         * 判断数据是否为 Promise 对象
         * 
         * @import isProcessive from .promise.processive
         * 
         * @import isNative from .promise.native
         * 
         * @param {mixed} data 测试数据
         * 
         * @return {boolean} 如果是 Promise 则返回 true , 否则返回 false
         * 
         */

        return isNative(data) || isProcessive(data);

    }

    return function(data) {


        if (!var_init_locked_1608956297891) {

            isProcessive = include('src::is.promise.processive');
            isNative = include('src::is.promise.native');

            var_init_locked_1608956297891 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.connection.message.address'] = (() => {

    let Subscriber, isDefined;

    let var_init_locked_1608956297901;

    let var_class_1608956297901;



    let var_global_main_1608956297901;

    return function(name, options) {


        if (!var_init_locked_1608956297901) {

            Subscriber = include('src::data.Subscriber')();
            isDefined = include('src::is.defined');


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



            var_class_1608956297901 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297901;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message.address';
                }

            };

            main = var_class_1608956297901;

            var_global_main_1608956297901 = main;

            var_init_locked_1608956297901 = true;
        }


        return new var_global_main_1608956297901(name, options);
    };

})();

exports['src::data.Subscriber.constructor'] = (() => {

    let get, add, emptyFn, from;

    let var_init_locked_1608956297909;



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


        if (!var_init_locked_1608956297909) {

            get = include('src::function.get');
            add = include('src::event.listener.add');
            emptyFn = include('src::function.empty')();
            from = include('src::array.from');

            var_init_locked_1608956297909 = true;
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

    let var_init_locked_1608956297915;



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


        if (!var_init_locked_1608956297915) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297915 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.Subscriber.accept'] = (() => {

    let isDefined;

    let var_init_locked_1608956297912;



    const var_current_scope_1608956297912 = new Map();

    return function(data) {


        if (!var_init_locked_1608956297912) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297912 = true;
        }




        if (!var_current_scope_1608956297912.has(this)) {

            var_current_scope_1608956297912.set(this, (() => {
                const setData = include('src::data.Subscriber.accept.data').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297912.get(this);



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

    let isDefined, equals, assign;

    let var_init_locked_1608956297920;



    const var_current_scope_1608956297920 = new Map();

    return function(params = {}) {


        if (!var_init_locked_1608956297920) {

            isDefined = include('src::is.defined');
            equals = include('src::data.equals');
            assign = include('src::object.assign');

            var_init_locked_1608956297920 = true;
        }




        if (!var_current_scope_1608956297920.has(this)) {

            var_current_scope_1608956297920.set(this, (() => {
                const setData = include('src::data.Subscriber.accept.data').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956297920.get(this);



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

    let var_init_locked_1608956297925;



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


        if (!var_init_locked_1608956297925) {

            removeAll = include('src::event.listener.remove.all');

            var_init_locked_1608956297925 = true;
        }


        return main.call(this);
    };

})();

exports['src::data.Subscriber'] = (() => {

    let mixin_1608956297904__1, extend, constructor, get_closed, method_prevOpen, method_accept, method_reopen, method_open, method_close, method_destroy, isObject;

    let var_init_locked_1608956297904;

    let var_class_1608956297904;



    let var_global_main_1608956297904;

    return function() {


        if (!var_init_locked_1608956297904) {

            mixin_1608956297904__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::data.Subscriber.constructor');
            get_closed = include('src::data.subscriber.closed');
            method_prevOpen = include('src::data.subscriber.open.prev');
            method_accept = include('src::data.Subscriber.accept');
            method_reopen = include('src::data.Subscriber.reopen');
            method_open = include('src::data.Subscriber.open');
            method_close = include('src::data.Subscriber.close');
            method_destroy = include('src::data.Subscriber.destroy');
            isObject = include('src::is.object.simple');

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

            var_class_1608956297904 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297904;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.Subscriber';
                }

            };

            main = var_class_1608956297904;

            var_global_main_1608956297904 = main;

            var_init_locked_1608956297904 = true;
        }


        return var_global_main_1608956297904;
    };

})();

exports['src::data.connection.message'] = (() => {

    let Connection, isObject, isString, createAddress, isDefined, assign, from;

    let var_init_locked_1608956297929;

    let var_class_1608956297929;



    let var_global_main_1608956297929;

    return function() {


        if (!var_init_locked_1608956297929) {

            Connection = include('src::data.connection')();
            isObject = include('src::is.object.simple');
            isString = include('src::is.string');
            createAddress = include('src::data.connection.message.address');
            isDefined = include('src::is.defined');
            assign = include('src::object.assign');
            from = include('src::array.from');

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

            var_class_1608956297929 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297929;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.message';
                }

            };

            main = var_class_1608956297929;

            var_global_main_1608956297929 = main;

            var_init_locked_1608956297929 = true;
        }


        return new var_global_main_1608956297929();
    };

})();

exports['src::data.connection.socket.io'] = (() => {

    let Connection, add, getWS, Manager, removeAll;

    let var_init_locked_1608956297937;

    let var_class_1608956297937;



    let var_global_main_1608956297937;

    return function() {


        if (!var_init_locked_1608956297937) {

            Connection = include('src::data.connection.socket')();
            add = include('src::event.listener.add');
            getWS = include('src::socket.io.ws');
            Manager = include('src::data.connection.socket.manager')();
            removeAll = include('src::event.listener.remove.all');

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
             * @import Manager from .manager value
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

            var_class_1608956297937 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297937;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.io';
                }

            };

            main = var_class_1608956297937;

            var_global_main_1608956297937 = main;

            var_init_locked_1608956297937 = true;
        }


        return var_global_main_1608956297937;
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

exports['src::data.connection.socket.standard.miniprogram'] = (() => {

    let Connection, WebSocket;

    let var_init_locked_1608956297943;

    let var_class_1608956297943;



    let var_global_main_1608956297943;

    return function() {


        if (!var_init_locked_1608956297943) {

            Connection = include('src::data.connection.socket.standard')();
            WebSocket = include('src::miniprogram.socket')();

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

            var_class_1608956297943 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297943;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.miniprogram';
                }

            };

            main = var_class_1608956297943;

            var_global_main_1608956297943 = main;

            var_init_locked_1608956297943 = true;
        }


        return var_global_main_1608956297943;
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

    let var_init_locked_1608956297952;



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


        if (!var_init_locked_1608956297952) {

            isAbsolute = include('src::is.url.absolute');

            var_init_locked_1608956297952 = true;
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

    let var_init_locked_1608956297969;



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


        if (!var_init_locked_1608956297969) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956297969 = true;
        }


        return main.call(this);
    };

})();

exports['src::timer.end'] = (() => {







    const var_current_scope_1608956297967 = new Map();

    return function() {





        if (!var_current_scope_1608956297967.has(this)) {

            var_current_scope_1608956297967.set(this, (() => {
                const reset = include('src::timer.reset').bind(this);

                function main() {


                    /**
                     * 
                     * 结束计时
                     * 
                     * @import reset from .reset scoped
                     *
                     */

                    reset();

                    this.fireEvent('timeend');

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956297967.get(this);



        return main.call(this);
    };

})();

exports['src::timer.start'] = (() => {

    let isNumber, reset;

    let var_init_locked_1608956297964;



    const var_current_scope_1608956297964 = new Map();

    return function() {


        if (!var_init_locked_1608956297964) {

            isNumber = include('src::is.number');
            reset = include('src::timer.reset');

            var_init_locked_1608956297964 = true;
        }




        if (!var_current_scope_1608956297964.has(this)) {

            var_current_scope_1608956297964.set(this, (() => {
                const end = include('src::timer.end').bind(this);


                /**
                 * 
                 * 启动计时
                 * 
                 * @import is.number
                 * 
                 * @import end from .end scoped
                 * 
                 * @import reset from .reset
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

                return main;

            })());
        }

        const main = var_current_scope_1608956297964.get(this);



        return main.call(this);
    };

})();

exports['src::timer'] = (() => {

    let mixin_1608956297959__1, extend, constructor, method_start, method_end, isObject;

    let var_init_locked_1608956297959;

    let var_class_1608956297959;



    let var_global_main_1608956297959;

    return function(config) {


        if (!var_init_locked_1608956297959) {

            mixin_1608956297959__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::timer.constructor');
            method_start = include('src::timer.start');
            method_end = include('src::timer.end');
            isObject = include('src::is.object.simple');

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

            var_class_1608956297959 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297959;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::timer';
                }

            };

            main = var_class_1608956297959;

            var_global_main_1608956297959 = main;

            var_init_locked_1608956297959 = true;
        }


        return new var_global_main_1608956297959(config);
    };

})();

exports['src::data.connection.socket.standard'] = (() => {

    let Connection, join, createTimer, add, removeAll, Manager, emptyFn;

    let var_init_locked_1608956297947;

    let var_class_1608956297947;



    let var_global_main_1608956297947;

    return function() {


        if (!var_init_locked_1608956297947) {

            Connection = include('src::data.connection.socket')();
            join = include('src::url.join');
            createTimer = include('src::timer');
            add = include('src::event.listener.add');
            removeAll = include('src::event.listener.remove.all');
            Manager = include('src::data.connection.socket.manager')();
            emptyFn = include('src::function.empty')();

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
             * @import Manager from .manager value
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


            var_class_1608956297947 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297947;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard';
                }

            };

            main = var_class_1608956297947;

            var_global_main_1608956297947 = main;

            var_init_locked_1608956297947 = true;
        }


        return var_global_main_1608956297947;
    };

})();

exports['src::miniprogram.socket'] = (() => {

    let get;

    let var_init_locked_1608956297972;

    let var_class_1608956297972;



    let var_global_main_1608956297972;

    return function() {


        if (!var_init_locked_1608956297972) {

            get = include('src::function.get');


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

            var_class_1608956297972 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297972;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::miniprogram.socket';
                }

            };

            main = var_class_1608956297972;

            var_global_main_1608956297972 = main;

            var_init_locked_1608956297972 = true;
        }


        return var_global_main_1608956297972;
    };

})();

exports['src::data.connection.socket.standard.normal'] = (() => {

    let Connection;

    let var_init_locked_1608956297975;

    let var_class_1608956297975;



    let var_global_main_1608956297975;

    return function() {


        if (!var_init_locked_1608956297975) {

            Connection = include('src::data.connection.socket.standard')();

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

            var_class_1608956297975 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956297975;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.connection.socket.standard.normal';
                }

            };

            main = var_class_1608956297975;

            var_global_main_1608956297975 = main;

            var_init_locked_1608956297975 = true;
        }


        return var_global_main_1608956297975;
    };

})();

exports['src::data.convert.boolean'] = (() => {

    let isBoolean, isString, isNumber;

    let var_init_locked_1608956297977;



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


        if (!var_init_locked_1608956297977) {

            isBoolean = include('src::is.boolean');
            isString = include('src::is.string');
            isNumber = include('src::is.number');

            var_init_locked_1608956297977 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.convert.date'] = (() => {

    let isNumber, isString, parse;

    let var_init_locked_1608956297980;



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


        if (!var_init_locked_1608956297980) {

            isNumber = include('src::is.number');
            isString = include('src::is.string');
            parse = include('src::date.parse');

            var_init_locked_1608956297980 = true;
        }


        return main.call(this, data, {
            format
        });
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

    let var_init_locked_1608956297986;



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


        if (!var_init_locked_1608956297986) {

            doFormat = include('src::string.format');

            var_init_locked_1608956297986 = true;
        }


        return main.call(this, data, format);
    };

})();

exports['src::data.convert.number'] = (() => {

    let isString, isDate, round, truncation, getDigit, isNumber;

    let var_init_locked_1608956297991;



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


        if (!var_init_locked_1608956297991) {

            isString = include('src::is.string');
            isDate = include('src::is.date');
            round = include('src::math.round');
            truncation = include('src::math.truncation');
            getDigit = include('src::math.digit');
            isNumber = include('src::is.number');

            var_init_locked_1608956297991 = true;
        }


        return main.call(this, data, {
            digit,
            keepMode,
            keepDigitRightZero
        });
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

exports['src::data.message.channel.concat'] = (() => {

    let from;

    let var_init_locked_1608956298003;



    function main(channels) {


        /**
         * 
         * 与其它消息通道完成互联
         * 
         * @import from from array.from
         * 
         * @param {mixed} channels 其它的对接的消息通道对象
         * 
         */

        channels = from(channels);

        let me = this,
            {
                concatenateChannels
            } = me;

        for (let channel of channels) {

            if (!concatenateChannels.includes(channel)) {

                concatenateChannels.push(channel);

                channel.concat(me);

            }
        }

    }

    return function(channels) {


        if (!var_init_locked_1608956298003) {

            from = include('src::array.from');

            var_init_locked_1608956298003 = true;
        }


        return main.call(this, channels);
    };

})();

exports['src::data.message.channel.connect'] = (() => {







    const var_current_scope_1608956298005 = new Map();

    return function(address, params, config = {}) {





        if (!var_current_scope_1608956298005.has(this)) {

            var_current_scope_1608956298005.set(this, (() => {
                const send = include('src::data.message.channel.send').bind(this);
                const connect = include('src::data.message.processive.connect').bind(this);

                function main(address, params, config) {


                    /**
                     * 
                     * 连接
                     * 
                     * @import send from .send scoped
                     * 
                     * @import connect from data.message.processive.connect scoped
                     * 
                     * @param {mixed} address 接收消息地址
                     * 
                     * @param {mixed} params 发送的数据
                     * 
                     * @param {object} [config = {}] 发送配置
                     * 
                     */

                    let {
                        body,
                        promise
                    } = send(address, params, {
                        ...config,
                        processive: true,
                        returnMessage: true
                    }), {
                        id
                    } = body;

                    connect(id);

                    let {
                        messages
                    } = this;

                    if (messages[id].connectCount === 1) {

                        return promise;
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298005.get(this);



        return main.call(this, address, params, config);
    };

})();

exports['src::promise.create'] = (() => {

    let isFunction, ProcessivePromise;

    let var_init_locked_1608956298020;



    function main(onInit, onCancel) {


        /**
         * 
         * 创建 Promise 对象
         * 
         * @import is.function
         * 
         * @import ProcessivePromise from promise.create.processive value
         * 
         * @param {function} onInit 实始化 Promise 引用
         * 
         * @param {function} [onCancel] 取消 Promise 时调用
         * 
         * @return {Promise} 创建后的 Promise
         * 
         */

        if (isFunction(onCancel)) {

            return new ProcessivePromise(onInit, onCancel);
        }

        return new Promise(onInit);

    }

    return function(onInit, onCancel) {


        if (!var_init_locked_1608956298020) {

            isFunction = include('src::is.function');
            ProcessivePromise = include('src::promise.create.processive')();

            var_init_locked_1608956298020 = true;
        }


        return main.call(this, onInit, onCancel);
    };

})();

exports['src::data.message.create'] = (() => {

    let generate, createPromise, add, remove;

    let var_init_locked_1608956298017;



    function main(channel, address, params, {
        reconnection,
        fromAddress,
        processive
    }) {

        /**
         * 
         * 创建一个消息
         * 
         * @import generate from id.generate
         * 
         * @import createPromise from promise.create
         * 
         * @import add from event.listener.add
         * 
         * @import remove from event.listener.remove
         * 
         * @param {data.message.Channel} channel 消息通道对象
         * 
         * @param {mixed} address 接收消息地址
         * 
         * @param {mixed} params 发送的数据
         * 
         * @param {object} [config = {}] 发送配置
         * 
         * @param {boolean} [config.reconnection = false] 在发送失败后是否重发 
         * 
         * @param {string} [config.fromAddress] 发送消息地址
         * 
         * @param {boolean} [config.processive = false] 是否为持续消息
         * 
         */

        let me = this,
            {
                messages
            } = channel,
            id = generate('message-', true);

        return messages[id] = {
            ...(processive ? {
                connectCount: 0,
                count: 0
            } : {}),
            promise: createPromise((resolve, reject) => {

                if (processive) {

                    let listeners = {
                        [`message-${id}`](channel, data) {

                            resolve(data);

                        },
                        [`messageerror-${id}`]: {
                            fn(channel, message) {

                                reject(message);

                            },
                            once: true
                        }
                    };

                    add(channel, listeners);

                    return listeners;

                } else {

                    let onMessageError = (channel, message) => {

                            reject(message);

                            remove(channel, `message-${id}`, onMessage);

                        },
                        onMessage = (channel, data) => {

                            resolve(data);

                            remove(channel, `messageerror-${id}`, onMessageError);

                        };

                    add(channel, {
                        [`message-${id}`]: {
                            fn: onMessage,
                            once: true
                        },
                        [`messageerror-${id}`]: {
                            fn: onMessageError,
                            once: true
                        }
                    });
                }

            }, processive ? async (listeners) => await channel.disconnect(address, params, {
                reconnection,
                fromAddress,
                processive
            }): false),
            body: {
                id,
                from: fromAddress,
                to: address,
                params,
                reconnection,
                processive
            }
        };

    }

    return function(channel, address, params, {
        reconnection = false,
        fromAddress,
        processive = false
    } = {}) {


        if (!var_init_locked_1608956298017) {

            generate = include('src::id.generate');
            createPromise = include('src::promise.create');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');

            var_init_locked_1608956298017 = true;
        }


        return main.call(this, channel, address, params, {
            reconnection,
            fromAddress,
            processive
        });
    };

})();

exports['src::object.copy'] = (() => {







    function main(dest, source, fields) {


        /**
         * 
         * 复制
         * 
         * @param {object} dest 目标对象
         * 
         * @param {object} source 来源对象
         * 
         * @param {string[]} [fields = []] 拷贝字段集合 
         * 
         * @return {object} 目标对象引用
         * 
         */

        for (let field of fields) {

            dest[field] = source[field];
        }

        return dest;

    }

    return function(dest, source, fields = []) {



        return main.call(this, dest, source, fields);
    };

})();

exports['src::data.message.get'] = (() => {

    let equals, isObject, copy, isPromise, createPromise;

    let var_init_locked_1608956298013;



    const var_current_scope_1608956298013 = new Map();

    return function(channel, address, params, {
        reconnection = false,
        fromAddress,
        processive = false,
        autoCreate = true
    } = {}) {


        if (!var_init_locked_1608956298013) {

            equals = include('src::data.equals');
            isObject = include('src::is.object.simple');
            copy = include('src::object.copy');
            isPromise = include('src::is.promise.processive');
            createPromise = include('src::promise.create');

            var_init_locked_1608956298013 = true;
        }




        if (!var_current_scope_1608956298013.has(this)) {

            var_current_scope_1608956298013.set(this, (() => {
                const create = include('src::data.message.create').bind(this);

                function main(channel, address, params, {
                    reconnection,
                    fromAddress,
                    processive,
                    autoCreate
                }) {


                    /**
                     * 
                     * 获取消息
                     * 
                     * @import create from .create scoped
                     * 
                     * @import equals from data.equals
                     * 
                     * @import isObject from is.object.simple
                     * 
                     * @import copy from object.copy
                     * 
                     * @import isPromise from is.promise.processive
                     * 
                     * @import createPromise from promise.create
                     * 
                     * @param {data.message.Channel} channel 消息通道对象
                     * 
                     * @param {mixed} address 接收消息地址
                     * 
                     * @param {mixed} params 发送的数据
                     * 
                     * @param {object} [config = {}] 发送配置
                     * 
                     * @param {boolean} [config.reconnection = false] 在发送失败后是否重发 
                     * 
                     * @param {string} [config.fromAddress] 发送消息地址
                     * 
                     * @param {boolean} [config.processive = false] 是否为持续消息
                     * 
                     * @param {boolean} [config.autoCreate = true] 当前 autoCreate 设置为 true 时，如果消息不存在时则创建
                     * 
                     */

                    let me = this,
                        {
                            rootAddress,
                            messages
                        } = channel;

                    fromAddress = rootAddress;

                    messages = Object.values(messages);

                    for (let message of messages) {

                        let {
                            body,
                            promise
                        } = message, {
                            from,
                            to,
                            params: messageParams,
                            processive: messageProcessive,
                            cancel
                        } = body;

                        if (cancel === true) {

                            continue;
                        }

                        if (
                            from === fromAddress &&
                            to === address &&
                            equals(params, messageParams) &&
                            messageProcessive === processive
                        ) {

                            return {
                                created: false,
                                promise,
                                body
                            };
                        }
                    }

                    if (autoCreate) {

                        return {
                            ...create(channel, address, params, {
                                reconnection,
                                fromAddress,
                                processive
                            }),
                            created: true
                        };
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298013.get(this);



        return main.call(this, channel, address, params, {
            reconnection,
            fromAddress,
            processive,
            autoCreate
        });
    };

})();

exports['src::data.message.channel.send.body'] = (() => {







    function main(body) {


        /**
         * 
         * 发送消息主体
         * 
         * @param {object} body 消息主体
         * 
         */

        let me = this,
            {
                proxy,
                addresses,
                rootAddress
            } = me,
            {
                to
            } = body;

        if (addresses.hasOwnProperty(to)) {

            me.receive(body);

        } else {

            proxy.call('doSend', {
                ...body,
                channels: [
                    rootAddress
                ]
            });
        }

    }

    return function(body) {



        return main.call(this, body);
    };

})();

exports['src::data.message.channel.send'] = (() => {

    let get;

    let var_init_locked_1608956298008;



    const var_current_scope_1608956298008 = new Map();

    return function(address, params, config = {}) {


        if (!var_init_locked_1608956298008) {

            get = include('src::data.message.get');

            var_init_locked_1608956298008 = true;
        }




        if (!var_current_scope_1608956298008.has(this)) {

            var_current_scope_1608956298008.set(this, (() => {
                const send = include('src::data.message.channel.send.body').bind(this);

                function main(address, params, config) {


                    /**
                     * 
                     * 发送消息
                     * 
                     * @import get from data.message.get
                     * 
                     * @import send from .send.body scoped
                     * 
                     * @param {mixed} address 接收消息地址
                     * 
                     * @param {mixed} params 发送的参数
                     * 
                     * @param {object} [config = {}] 发送配置
                     * 
                     */

                    let {
                        returnMessage = false
                    } = config,
                    message = get(this, address, params, config), {
                        promise,
                        body,
                        created
                    } = message;

                    if (created) {

                        send(body);

                    }

                    if (returnMessage === true) {

                        return message;
                    }

                    return promise;

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298008.get(this);



        return main.call(this, address, params, config);
    };

})();

exports['src::data.message.processive.connect'] = (() => {







    function main(id) {


        /**
         * 
         * 持续消息连接
         * 
         * @param {string} id 消息编号
         * 
         */

        let {
            messages
        } = this;

        if (messages.hasOwnProperty(id)) {

            messages[id].connectCount++;
        }

    }

    return function(id) {



        return main.call(this, id);
    };

})();

exports['src::data.message.channel.constructor'] = (() => {

    let createProxy, createArrayProxy, generate, empty;

    let var_init_locked_1608956298032;



    function main({
        reSendDelay,
        rootAddress,
        rootAddressConfig,
        addresses,
        initFn
    }) {


        /**
         * 
         * 初始化消息通道
         * 
         * @param {object} [config = {}] 消息通道配置
         * 
         * @param {boolean} [config.reSendDelay = 0] 重发消息延迟
         * 
         * @param {string} [config.rootAddress] 根地址
         * 
         * @param {mixed} [config.rootAddressConfig] 根地址配置
         * 
         * @param {object} [config.addresses] 地址配置
         * 
         * @param {function} [config.initFn] 初始化函数
         * 
         * @import createProxy from object.proxy
         * 
         * @import createArrayProxy from array.proxy
         * 
         * @import generate from id.generate
         * 
         * @import empty from function.empty value
         * 
         */

        let me = this,
            proxy = createProxy(me);

        initFn = initFn || empty;

        me.proxy = proxy;

        me.addresses = {};

        me.register(me.rootAddress = rootAddress, rootAddressConfig);

        me.register(addresses);

        me.reSendDelay = reSendDelay;

        me.concatenateChannels = createArrayProxy();

        me.processivePromises = {};

        me.messages = {};

        initFn.call(me);

        proxy.call('doReceive', me.receive.bind(me));

    }

    return function({
        reSendDelay = 0,
        rootAddress,
        rootAddressConfig,
        addresses,
        initFn
    } = {}) {


        if (!var_init_locked_1608956298032) {

            createProxy = include('src::object.proxy');
            createArrayProxy = include('src::array.proxy');
            generate = include('src::id.generate');
            empty = include('src::function.empty')();

            var_init_locked_1608956298032 = true;
        }


        return main.call(this, {
            reSendDelay,
            rootAddress,
            rootAddressConfig,
            addresses,
            initFn
        });
    };

})();

exports['src::data.message.channel.destroy'] = (() => {

    let clear1, clear2;

    let var_init_locked_1608956298034;



    function main() {


        /**
         * 
         * 销毁消息通道
         * 
         * @import clear1 from object.clear
         * 
         * @import clear2 from array.clear
         * 
         */

        let {
            addresses,
            concatenateChannels
        } = this;

        clear1(addresses);

        clear2(concatenateChannels);

    }

    return function() {


        if (!var_init_locked_1608956298034) {

            clear1 = include('src::object.clear');
            clear2 = include('src::array.clear');

            var_init_locked_1608956298034 = true;
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

exports['src::data.message.channel.disconnect.all'] = (() => {







    const var_current_scope_1608956298039 = new Map();

    return function() {





        if (!var_current_scope_1608956298039.has(this)) {

            var_current_scope_1608956298039.set(this, (() => {
                const disconnect = include('src::data.message.channel.disconnect').bind(this);

                function main() {


                    /**
                     * 
                     * 断开所有连接
                     * 
                     * @import disconnect from ..disconnect scoped
                     * 
                     */

                    let {
                        messages
                    } = this;

                    messages = Object.values(messages);

                    let results = [];

                    for (let message of messages) {

                        if (message.hasOwnProperty('connectCount')) {

                            message.connectCount = 0;

                            results.push(disconnect(message));
                        }
                    }

                    return Promise.all(results);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298039.get(this);



        return main.call(this);
    };

})();

exports['src::data.message.processive.disconnect'] = (() => {







    function main(id) {


        /**
         * 
         * 持续消息断开
         * 
         * @param {string} id 消息编号
         * 
         */

        let {
            messages
        } = this;

        if (messages.hasOwnProperty(id)) {

            let message = messages[id],
                {
                    connectCount
                } = message;

            if (connectCount > 0) {

                message.connectCount--;
            }
        }

    }

    return function(id) {



        return main.call(this, id);
    };

})();

exports['src::data.message.processive.disconnect.is'] = (() => {







    function main(id) {


        /**
         * 
         * 判断持续消息是否可真实断开
         * 
         * @param {string} id 消息编号
         * 
         * @return {boolean} 如果持续消息可以断开则返回 true , 否则返回 false
         * 
         */

        let {
            messages
        } = this;

        if (messages.hasOwnProperty(id)) {

            let message = messages[id];

            return message.connectCount === 0 && message.body.cancel !== true;
        }

        return false;

    }

    return function(id) {



        return main.call(this, id);
    };

})();

exports['src::data.message.channel.disconnect'] = (() => {

    let get, add, remove, isString, isObject;

    let var_init_locked_1608956298048;



    const var_current_scope_1608956298048 = new Map();

    return function(address, params, config = {}) {


        if (!var_init_locked_1608956298048) {

            get = include('src::data.message.get');
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            isString = include('src::is.string');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956298048 = true;
        }




        if (!var_current_scope_1608956298048.has(this)) {

            var_current_scope_1608956298048.set(this, (() => {
                const send = include('src::data.message.channel.send.body').bind(this);
                const disconnect = include('src::data.message.processive.disconnect').bind(this);
                const is = include('src::data.message.processive.disconnect.is').bind(this);

                function main(address, params, config) {


                    /**
                     * 
                     * 连接
                     * 
                     * @import get from data.message.get
                     * 
                     * @import send from .send.body scoped
                     * 
                     * @import add from event.listener.add
                     * 
                     * @import remove from event.listener.remove
                     * 
                     * @import disconnect from data.message.processive.disconnect scoped
                     * 
                     * @import is from data.message.processive.disconnect.is scoped
                     * 
                     * @import is.string
                     * 
                     * @import isObject from is.object.simple
                     * 
                     * @param {mixed} address 接收消息地址
                     * 
                     * @param {mixed} params 发送的数据
                     * 
                     * @param {object} [config = {}] 发送配置
                     * 
                     */

                    let me = this,
                        message;

                    if (isString(address)) {

                        message = get(me, address, params, {
                            ...config,
                            processive: true,
                            autoCreate: false
                        });

                    } else if (isObject(address)) {

                        message = address;
                    }

                    if (message) {

                        let {
                            body
                        } = message, {
                            id
                        } = body;

                        disconnect(id);

                        if (is(id)) {

                            remove(me, [
                                `messagestart-${id}`,
                                `message-${id}`,
                                `messageend-${id}`,
                                `messageerror-${id}`,
                            ]);

                            body.cancel = true;

                            send(body);

                            return new Promise(resolve => add(me, `messageend-${id}`, resolve, {
                                once: true
                            }));

                        }
                    }

                    return Promise.resolve();

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298048.get(this);



        return main.call(this, address, params, config);
    };

})();

exports['src::data.message.channel.electron.main'] = (() => {

    let from, isArray, is, Channel;

    let var_init_locked_1608956298058;

    let var_class_1608956298058;



    let var_global_main_1608956298058;

    return function(config) {


        if (!var_init_locked_1608956298058) {

            from = include('src::array.from');
            isArray = include('src::is.array');
            is = include('src::is.message');
            Channel = include('src::data.message.channel')();


            /**
             * 
             * 消息通道 Electron 主进程版
             * 
             * @import from from array.from
             * 
             * @import is.array
             * 
             * @import is from is.message
             * 
             * @import Channel from data.message.channel value
             *
             * @param {object} config 配置 
             * 
             */

            class main extends Channel {

                constructor({
                    window,
                    ...options
                }) {

                    super({
                        ...options,
                        initFn() {

                            this.webContents = window.webContents;
                        }
                    });
                }

                doReceive(receive) {

                    let {
                        webContents
                    } = this;

                    webContents.on('ipc-message', (event, id, message) => {

                        if (isArray(id)) {

                            message = id[1];
                        }

                        if (is(message)) {

                            receive(message);
                        }

                    });
                }

                doSend(message) {

                    let {
                        webContents
                    } = this;

                    if (!webContents.isDestroyed()) {

                        webContents.send('ipc-message', message);
                    }
                }
            }

            var_class_1608956298058 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298058;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel.electron.main';
                }

            };

            main = var_class_1608956298058;

            var_global_main_1608956298058 = main;

            var_init_locked_1608956298058 = true;
        }


        return new var_global_main_1608956298058(config);
    };

})();

exports['src::is.message'] = (() => {

    let isObject;

    let var_init_locked_1608956298061;



    function main(data) {


        /**
         * 
         * 是否为消息体
         * 
         * @import isObject from is.object.simple
         * 
         * @param {mixed} data 校验数据 
         * 
         * @return {boolean} 如果是消息体则返回 true , 否则返回 false 
         * 
         */

        if (isObject(data)) {

            return data.hasOwnProperty('id') && data.hasOwnProperty('from') && data.hasOwnProperty('to');
        }


    }

    return function(data) {


        if (!var_init_locked_1608956298061) {

            isObject = include('src::is.object.simple');

            var_init_locked_1608956298061 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.message.channel.fire'] = (() => {







    function main(event, message, ...args) {


        /**
         * 
         * 触发事件
         * 
         * @param {string} event 事件名称
         * 
         * @param {data.Message} message 消息包
         * 
         * @param {mixed} [...args] 事件参数
         * 
         */

        let {
            id
        } = message;

        this.fireEvent(`${event}-${id}`, ...args, message);


    }

    return function(event, message, ...args) {



        return main.call(this, event, message, ...args);
    };

})();

exports['src::data.message.is.forwarded'] = (() => {







    function main(message, channel) {


        /**
         * 
         * 判断消息是否已经被指定消息通道转发过
         * 
         * @param {object} message 消息
         * 
         * @param {data.message.Channel} channel 消息通道
         * 
         * @return {boolean} 如果消息是被消息通道转发过则返回 true , 否则返回 false 
         * 
         */

        let {
            channels
        } = message, {
            rootAddress
        } = channel;

        return channels.includes(rootAddress);

    }

    return function(message, channel) {



        return main.call(this, message, channel);
    };

})();

exports['src::data.message.forward'] = (() => {







    function main(message, channel) {


        /**
         * 
         * 消息登记转发消息通道
         * 
         * @param {object} message 消息
         * 
         * @param {data.message.Channel} channel 消息通道
         * 
         */

        let {
            channels
        } = message, {
            rootAddress
        } = channel;

        return channels.push(rootAddress);

    }

    return function(message, channel) {



        return main.call(this, message, channel);
    };

})();

exports['src::data.message.channel.forward'] = (() => {

    let isForwarded, forward;

    let var_init_locked_1608956298071;



    function main(message) {


        /**
         * 
         * 转发消息
         * 
         * @import isForwarded from data.message.is.forwarded
         * 
         * @import forward from data.message.forward
         * 
         * @param {data.Message} message 消息体
         * 
         * @return {boolean} 如果转发成功则返回 true , 否则返回 false
         * 
         */


        let me = this,
            {
                proxy
            } = me;

        if (!isForwarded(message, me)) {

            forward(message, me);

            proxy.call('doSend', message);

            return true;
        }

        return false;

    }

    return function(message) {


        if (!var_init_locked_1608956298071) {

            isForwarded = include('src::data.message.is.forwarded');
            forward = include('src::data.message.forward');

            var_init_locked_1608956298071 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.send'] = (() => {

    let is;

    let var_init_locked_1608956298088;



    function main(message) {


        /**
         * 
         * 判断是否是发送消息
         * 
         * @import is from ..message
         * 
         * @param {object} message 消息 
         * 
         * @return {boolean}  如果是发送消息，则返回 true , 否则返回 false
         * 
         */

        return is(message) && !message.hasOwnProperty('received');

    }

    return function(message) {


        if (!var_init_locked_1608956298088) {

            is = include('src::is.message');

            var_init_locked_1608956298088 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.send.processive'] = (() => {

    let is;

    let var_init_locked_1608956298090;



    function main(message) {


        /**
         * 
         * 判断是否为发送持续消息
         * 
         * @import is from ..send
         * 
         * @param {object} message 参数说明
         * 
         * @return {boolean} 如果为发送持续消息则返回 true , 否则返回 false 
         * 
         */

        return is(message) && message.processive === true;

    }

    return function(message) {


        if (!var_init_locked_1608956298090) {

            is = include('src::is.message.send');

            var_init_locked_1608956298090 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.send.processive.cancel'] = (() => {

    let is;

    let var_init_locked_1608956298092;



    function main(message) {


        /**
         * 
         * 判断是否为发送取消持续消息
         * 
         * @import is from ..processive
         * 
         * @param {object} message 参数说明
         * 
         * @return {boolean} 如果为发送持续消息则返回 true , 否则返回 false 
         * 
         */

        return is(message) && message.cancel === true;

    }

    return function(message) {


        if (!var_init_locked_1608956298092) {

            is = include('src::is.message.send.processive');

            var_init_locked_1608956298092 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.reply'] = (() => {

    let is;

    let var_init_locked_1608956298094;



    function main(message) {


        /**
         * 
         * 判断是否是回复消息
         * 
         * @import is from ..message
         * 
         * @param {object} message 消息 
         * 
         * @return {boolean}  如果是回复消息，则返回 true , 否则返回 false
         * 
         */

        return is(message) && message.hasOwnProperty('received');

    }

    return function(message) {


        if (!var_init_locked_1608956298094) {

            is = include('src::is.message');

            var_init_locked_1608956298094 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.reply.success'] = (() => {

    let is;

    let var_init_locked_1608956298097;



    function main(message) {


        /**
         * 
         * 判断是否是回复成功消息
         * 
         * @import is from ..reply
         * 
         * @param {object} message 消息 
         * 
         * @return {boolean}  如果是回复成功消息，则返回 true , 否则返回 false
         * 
         */

        return is(message) && message.received === true;

    }

    return function(message) {


        if (!var_init_locked_1608956298097) {

            is = include('src::is.message.reply');

            var_init_locked_1608956298097 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.reply.success.processive'] = (() => {

    let is;

    let var_init_locked_1608956298101;



    function main(message) {


        /**
         * 
         * 判断回复信息是否为持续信息
         * 
         * @import is from ..success
         * 
         * @param {object} message 消息
         * 
         * @return {boolean} 如果回复信息是持续信息则返回 true , 否则返回 false 
         * 
         */

        return is(message) && message.processive === true;

    }

    return function(message) {


        if (!var_init_locked_1608956298101) {

            is = include('src::is.message.reply.success');

            var_init_locked_1608956298101 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.reply.success.processive.cancel'] = (() => {

    let is;

    let var_init_locked_1608956298099;



    function main(message) {


        /**
         * 
         * 判断回复信息为取消持续信息
         * 
         * @import is from ..processive
         * 
         * @param {object} message 消息
         * 
         * @return {boolean} 如果回复信息是取消持续信息则返回 true , 否则返回 false 
         * 
         */

        return is(message) && message.cancel === true;

    }

    return function(message) {


        if (!var_init_locked_1608956298099) {

            is = include('src::is.message.reply.success.processive');

            var_init_locked_1608956298099 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::is.message.reply.failure'] = (() => {

    let is;

    let var_init_locked_1608956298102;



    function main(message) {


        /**
         * 
         * 判断是否是回复失败消息
         * 
         * @import is from ..reply
         * 
         * @param {object} message 消息 
         * 
         * @return {boolean}  如果是回复失败消息，则返回 true , 否则返回 false
         * 
         */

        return is(message) && message.received === false;

    }

    return function(message) {


        if (!var_init_locked_1608956298102) {

            is = include('src::is.message.reply');

            var_init_locked_1608956298102 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::data.message.channel.receive'] = (() => {

    let isBoolean, isDefined, isSendMessage, isSendProcessiveMessage, isSendCancelProcessiveMessage, isReplyMessage, isReplySuccessMessage, isReplySuccessCancelProcessiveMessage, isReplySuccessProcessiveMessage, isReplyFailureMessage, isPromise, isProcessivePromise;

    let var_init_locked_1608956298084;



    function main(message) {


        /**
         * 
         * 接收消息
         * 
         * @import is.boolean
         * 
         * @import is.defined
         * 
         * @import isSendMessage from is.message.send
         * 
         * @import isSendProcessiveMessage from is.message.send.processive
         * 
         * @import isSendCancelProcessiveMessage from is.message.send.processive.cancel
         * 
         * @import isReplyMessage from is.message.reply
         * 
         * @import isReplySuccessMessage from is.message.reply.success
         * 
         * @import isReplySuccessCancelProcessiveMessage from is.message.reply.success.processive.cancel
         * 
         * @import isReplySuccessProcessiveMessage from is.message.reply.success.processive
         * 
         * @import isReplyFailureMessage from is.message.reply.failure
         * 
         * @import is.promise
         * 
         * @import isProcessivePromise from is.promise.processive
         * 
         * @param {data.Message} message 消息对象
         * 
         */

        let me = this,
            {
                addresses,
                reSendDelay,
                concatenateChannels,
                processivePromises,
                messages,
                rootAddress
            } = me,
            {
                id,
                from,
                to
            } = message;

        message.channels.push(rootAddress);

        if (isSendMessage(message)) {

            if (addresses.hasOwnProperty(to)) {

                if (isSendCancelProcessiveMessage(message)) {

                    if (processivePromises.hasOwnProperty(id)) {

                        processivePromises[id].cancel();

                        delete processivePromises[id];
                    }

                    me.replySuccess(message);

                } else {

                    let result = addresses[to].receive(message.params, message);

                    if (isPromise(result)) {

                        result.then(result => me.replySuccess(message, result));

                        if (isProcessivePromise(result)) {

                            if (isSendProcessiveMessage(message)) {

                                processivePromises[id] = result;

                            } else {

                                result.then(() => result.cancel());
                            }
                        }

                    } else {

                        me.replySuccess(message, result);
                    }
                }

            } else if (!concatenateChannels.call('forward', message).includes(true)) {

                //me.replyFailure(message) ;
            }

        } else if (isReplyMessage(message)) {

            if (isReplySuccessMessage(message)) {

                if (messages.hasOwnProperty(id)) {

                    let result = addresses[from].reply(message.result, message);

                    if (!isReplySuccessProcessiveMessage(message)) {

                        delete messages[id];

                    } else {

                        if (message.count === 0) {

                            me.fire('messagestart', message);
                        }

                        message.count++;
                    }

                    if (isReplySuccessCancelProcessiveMessage(message)) {

                        me.fire('messageend', message);

                    } else {

                        me.fire('message', message, result);
                    }

                } else {

                    concatenateChannels.call('forward', message);
                }

            } else if (isReplyFailureMessage(message)) {

                if (messages.hasOwnProperty(id)) {

                    let {
                        reconnection,
                        processive
                    } = message;

                    if (reconnection) {

                        let method = processive ? 'connect' : 'send';

                        setTimeout(() => me[method](message), reSendDelay);

                    } else {

                        delete messages[id];

                        me.fire('messageerror', message);
                    }

                } else {

                    concatenateChannels.call('forward', message);
                }
            }
        }

    }

    return function(message) {


        if (!var_init_locked_1608956298084) {

            isBoolean = include('src::is.boolean');
            isDefined = include('src::is.defined');
            isSendMessage = include('src::is.message.send');
            isSendProcessiveMessage = include('src::is.message.send.processive');
            isSendCancelProcessiveMessage = include('src::is.message.send.processive.cancel');
            isReplyMessage = include('src::is.message.reply');
            isReplySuccessMessage = include('src::is.message.reply.success');
            isReplySuccessCancelProcessiveMessage = include('src::is.message.reply.success.processive.cancel');
            isReplySuccessProcessiveMessage = include('src::is.message.reply.success.processive');
            isReplyFailureMessage = include('src::is.message.reply.failure');
            isPromise = include('src::is.promise');
            isProcessivePromise = include('src::is.promise.processive');

            var_init_locked_1608956298084 = true;
        }


        return main.call(this, message);
    };

})();

exports['src::data.message.channel.register'] = (() => {

    let isObject, isFunction, get, isString, emptyFn;

    let var_init_locked_1608956298105;




    /**
     * 
     * 登记地址
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.function
     * 
     * @import get from function.get
     * 
     * @import is.string
     * 
     * @import isObject from is.object.simple
     * 
     * @import emptyFn from function.empty value
     * 
     * @param {string|object} address 地址
     * 
     * @param {mixed} fn 地址所绑定的函数
     * 
     * @param {mixed} scope 绑定函数的作用域
     * 
     * @return {data.message.Address} 消息地址
     * 
     */

    function main(address, fn, scope) {

        let me = this;

        if (isString(address)) {

            return register.call(me, address, fn, scope);

        } else if (isObject(address)) {

            let names = Object.keys(address),
                result = {};

            for (let name of names) {

                result[name] = register.call(me, name, address[name]);
            }

            return result;
        }
    }

    function register(address, fn, scope) {

        let me = this,
            {
                addresses
            } = me;

        if (!addresses.hasOwnProperty(address)) {

            let resignerConfig;

            if (isObject(fn)) {

                let config = fn;

                {
                    let {
                        receive = emptyFn,
                            reply = result => result,
                            scope
                    } = config;

                    resignerConfig = {
                        receive: get(receive, scope),
                        reply: get(reply, scope)
                    };
                }

            } else if (isFunction(fn)) {

                resignerConfig = {
                    receive: get(fn, scope),
                    reply: get(fn, scope)
                };

            } else {

                resignerConfig = {
                    receive() {},
                    reply(result) {

                        return result;
                    }
                };
            }

            addresses[address] = {
                ...resignerConfig,
                send(address, params, config = {}) {

                    return me.send(address, params, {
                        ...config,
                        fromAddress: address
                    });
                }
            };
        }

        return addresses[address];
    }

    return function(address, fn, scope) {


        if (!var_init_locked_1608956298105) {

            isObject = include('src::is.object.simple');
            isFunction = include('src::is.function');
            get = include('src::function.get');
            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            emptyFn = include('src::function.empty')();

            var_init_locked_1608956298105 = true;
        }


        return main.call(this, address, fn, scope);
    };

})();

exports['src::data.message.channel.unregister'] = (() => {







    function main(address) {


        /**
         * 
         * 注销地址
         * 
         * @param {string|array} address 地址
         * 
         */

        let {
            addresses
        } = this;

        delete addresses[address];

    }

    return function(address) {



        return main.call(this, address);
    };

})();

exports['src::data.message.channel.reply'] = (() => {







    function main(message) {


        /**
         * 
         * 回复消息
         * 
         * @param {data.Message} message 消息
         * 
         */

        let me = this,
            {
                rootAddress
            } = me;

        me.proxy.call('doSend', {
            ...message,
            channels: [
                rootAddress
            ]
        });

    }

    return function(message) {



        return main.call(this, message);
    };

})();

exports['src::data.message.channel.reply.success'] = (() => {







    const var_current_scope_1608956298110 = new Map();

    return function(message, result) {





        if (!var_current_scope_1608956298110.has(this)) {

            var_current_scope_1608956298110.set(this, (() => {
                const reply = include('src::data.message.channel.reply').bind(this);

                function main(message, result) {


                    /**
                     * 
                     * 回复消息发送成功
                     * 
                     * @import reply from ..reply scoped
                     * 
                     * @param {data.Message} message 消息
                     * 
                     * @param {mixed} result 回复结果
                     * 
                     */

                    reply({
                        ...message,
                        received: true,
                        result
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298110.get(this);



        return main.call(this, message, result);
    };

})();

exports['src::data.message.channel.reply.failure'] = (() => {







    const var_current_scope_1608956298115 = new Map();

    return function(message) {





        if (!var_current_scope_1608956298115.has(this)) {

            var_current_scope_1608956298115.set(this, (() => {
                const reply = include('src::data.message.channel.reply').bind(this);

                function main(message) {


                    /**
                     * 
                     * 回复消息发送失败
                     * 
                     * @import reply from ..reply scoped
                     * 
                     * @param {data.Message} message 消息
                     *
                     */

                    reply({
                        ...message,
                        received: false
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298115.get(this);



        return main.call(this, message);
    };

})();

exports['src::data.message.channel'] = (() => {

    let mixin_1608956298065__1, extend, constructor, method_fire, method_forward, method_send, method_connect, method_disconnect, method_disconnectAll, method_receive, method_register, method_unregister, method_destroy, method_replySuccess, method_replyFailure, method_concat, isObject;

    let var_init_locked_1608956298065;

    let var_class_1608956298065;



    let var_global_main_1608956298065;

    return function() {


        if (!var_init_locked_1608956298065) {

            mixin_1608956298065__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::data.message.channel.constructor');
            method_fire = include('src::data.message.channel.fire');
            method_forward = include('src::data.message.channel.forward');
            method_send = include('src::data.message.channel.send');
            method_connect = include('src::data.message.channel.connect');
            method_disconnect = include('src::data.message.channel.disconnect');
            method_disconnectAll = include('src::data.message.channel.disconnect.all');
            method_receive = include('src::data.message.channel.receive');
            method_register = include('src::data.message.channel.register');
            method_unregister = include('src::data.message.channel.unregister');
            method_destroy = include('src::data.message.channel.destroy');
            method_replySuccess = include('src::data.message.channel.reply.success');
            method_replyFailure = include('src::data.message.channel.reply.failure');
            method_concat = include('src::data.message.channel.concat');
            isObject = include('src::is.object.simple');

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                fire(...args) {

                    return method_fire.apply(this, args);

                }
                forward(...args) {

                    return method_forward.apply(this, args);

                }
                send(...args) {

                    return method_send.apply(this, args);

                }
                connect(...args) {

                    return method_connect.apply(this, args);

                }
                disconnect(...args) {

                    return method_disconnect.apply(this, args);

                }
                disconnectAll(...args) {

                    return method_disconnectAll.apply(this, args);

                }
                receive(...args) {

                    return method_receive.apply(this, args);

                }
                register(...args) {

                    return method_register.apply(this, args);

                }
                unregister(...args) {

                    return method_unregister.apply(this, args);

                }
                destroy(...args) {

                    return method_destroy.apply(this, args);

                }
                replySuccess(...args) {

                    return method_replySuccess.apply(this, args);

                }
                replyFailure(...args) {

                    return method_replyFailure.apply(this, args);

                }
                concat(...args) {

                    return method_concat.apply(this, args);

                }



            }

            var_class_1608956298065 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298065;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel';
                }

            };

            main = var_class_1608956298065;

            var_global_main_1608956298065 = main;

            var_init_locked_1608956298065 = true;
        }


        return var_global_main_1608956298065;
    };

})();

exports['src::data.message.channel.electron.renderer.webview'] = (() => {

    let from, isArray, is, Channel, add;

    let var_init_locked_1608956298120;

    let var_class_1608956298120;



    let var_global_main_1608956298120;

    return function(config) {


        if (!var_init_locked_1608956298120) {

            from = include('src::array.from');
            isArray = include('src::is.array');
            is = include('src::is.message');
            Channel = include('src::data.message.channel')();
            add = include('src::event.listener.add');


            /**
             * 
             * 消息通道 Electron 渲染 WebView 版
             * 
             * @import from from array.from
             * 
             * @import is.array
             * 
             * @import is from is.message
             * 
             * @import Channel from data.message.channel value
             * 
             * @import add from event.listener.add
             *
             * @param {object} config 配置 
             * 
             * @require electron
             * 
             */
            class main extends Channel {

                constructor({
                    webview,
                    ...options
                }) {

                    super({
                        ...options,
                        initFn() {

                            this.webview = webview;
                        }
                    });

                    this.isDestroyed = false;
                }

                doReceive(receive) {

                    let me = this,
                        {
                            webview
                        } = me;

                    add(webview, 'ipc-message', ({
                        channel,
                        args
                    }) => {

                        let message = args[0];

                        if (channel === 'ipc-message' && is(message)) {

                            receive(message);
                        }
                    });

                    add(webview, 'destroyed', () => me.isDestroyed = true);
                }

                doSend(message) {

                    let {
                        webview,
                        isDestroyed
                    } = this;

                    if (!isDestroyed) {

                        webview.send('ipc-message', message);
                    }
                }
            }

            var_class_1608956298120 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298120;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel.electron.renderer.webview';
                }

            };

            main = var_class_1608956298120;

            var_global_main_1608956298120 = main;

            var_init_locked_1608956298120 = true;
        }


        return new var_global_main_1608956298120(config);
    };

})();

exports['src::data.message.channel.electron.renderer'] = (() => {

    let Channel;

    let var_init_locked_1608956298126;

    let var_class_1608956298126;



    let var_global_main_1608956298126;

    return function(config) {


        if (!var_init_locked_1608956298126) {

            Channel = include('src::data.message.channel')();


            /**
             * 
             * 消息通道Electron 渲染进程版
             * 
             * @import Channel from data.message.channel value
             *
             * @param {object} config 配置 
             * 
             */

            const {
                ipcRenderer
            } = require('electron');

            class main extends Channel {

                constructor({
                    isWebview = false,
                    ...options
                }) {

                    super(options);

                    this.isWebview = isWebview;
                }

                doReceive(receive) {

                    ipcRenderer.on('ipc-message', (event, message) => receive(message));
                }

                doSend(message) {

                    let {
                        isWebview
                    } = this;

                    ipcRenderer[isWebview ? 'sendToHost' : 'send']('ipc-message', message);
                }
            }

            var_class_1608956298126 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298126;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel.electron.renderer';
                }

            };

            main = var_class_1608956298126;

            var_global_main_1608956298126 = main;

            var_init_locked_1608956298126 = true;
        }


        return new var_global_main_1608956298126(config);
    };

})();

exports['src::data.message.channel.process.child'] = (() => {

    let Channel;

    let var_init_locked_1608956298130;

    let var_class_1608956298130;



    let var_global_main_1608956298130;

    return function(config) {


        if (!var_init_locked_1608956298130) {

            Channel = include('src::data.message.channel')();


            /**
             * 
             * 消息通道子进程版
             * 
             * @import Channel from data.message.channel value
             *
             * @param {object} config 配置 
             * 
             */

            class main extends Channel {

                doReceive(receive) {

                    process.on('message', receive);
                }

                doSend(message) {

                    if (process.connected) {

                        process.send(message);
                    }
                }
            }

            var_class_1608956298130 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298130;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel.process.child';
                }

            };

            main = var_class_1608956298130;

            var_global_main_1608956298130 = main;

            var_init_locked_1608956298130 = true;
        }


        return new var_global_main_1608956298130(config);
    };

})();

exports['src::data.message.channel.process.main'] = (() => {

    let from, isObject, Channel;

    let var_init_locked_1608956298133;

    let var_class_1608956298133;



    let var_global_main_1608956298133;

    return function(config) {


        if (!var_init_locked_1608956298133) {

            from = include('src::array.from');
            isObject = include('src::is.object.simple');
            Channel = include('src::data.message.channel')();


            /**
             * 
             * 消息通道主进程版
             * 
             * @import from from array.from
             * 
             * @import isObject from is.object.simple
             * 
             * @import Channel from data.message.channel value
             *
             * @param {object} config 配置 
             * 
             */

            const {
                fork
            } = require('child_process');

            class main extends Channel {

                constructor({
                    childProcess,
                    ...options
                }) {

                    super({
                        ...options,
                        initFn() {

                            if (isObject(childProcess)) {

                                let {
                                    path,
                                    args,
                                    ...options
                                } = childProcess;

                                childProcess = fork(path, args, options);
                            }

                            this.childProcess = childProcess;
                        }
                    });
                }

                doReceive(receive) {

                    let {
                        childProcess
                    } = this;

                    childProcess.on('message', message => receive(message));
                }

                doSend(message) {

                    let {
                        childProcess
                    } = this;

                    if (childProcess.connected) {

                        childProcess.send(message);
                    }
                }
            }

            var_class_1608956298133 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298133;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.message.channel.process.main';
                }

            };

            main = var_class_1608956298133;

            var_global_main_1608956298133 = main;

            var_init_locked_1608956298133 = true;
        }


        return new var_global_main_1608956298133(config);
    };

})();

exports['src::data.model'] = (() => {

    let createReader;

    let var_init_locked_1608956298135;

    let var_class_1608956298135;



    let var_global_main_1608956298135;

    return function(model) {


        if (!var_init_locked_1608956298135) {

            createReader = include('src::data.reader.create');


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

            var_class_1608956298135 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298135;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.model';
                }

            };

            main = var_class_1608956298135;

            var_global_main_1608956298135 = main;

            var_init_locked_1608956298135 = true;
        }


        return new var_global_main_1608956298135(model);
    };

})();

exports['src::data.observable'] = (() => {

    let Observable, define, get, set, isItem, isRecord, isRecordset;

    let var_init_locked_1608956298138;

    let var_class_1608956298138;



    let var_global_main_1608956298138;

    return function() {


        if (!var_init_locked_1608956298138) {

            Observable = include('src::mixin.observable');
            define = include('src::object.property.inner.define');
            get = include('src::object.property.inner.get');
            set = include('src::object.property.inner.set');
            isItem = include('src::is.data.item');
            isRecord = include('src::is.data.record');
            isRecordset = include('src::is.data.recordset');


            /**
             * 
             * 创建数据记录观察器
             * 
             * @import Observable from mixin.observable
             * 
             * @import define from object.property.inner.define
             * 
             * @import get from object.property.inner.get
             * 
             * @import set from object.property.inner.set
             * 
             * @import isItem from is.data.item
             * 
             * @import isRecord from is.data.record
             * 
             * @import isRecordset from is.data.recordset
             * 
             * @return {data.Observable} 数据观察者对象 
             * 
             */

            class main extends mixins({
                mixins: [
                    Observable
                ]
            }) {

                constructor() {

                    super();

                    define(this, 'bubbleTarget');
                }

                get belongToObservable() {

                    return get(this, 'bubbleTarget');
                }

                belongTo(dataItem) {

                    let me = this;

                    if (me.isIndependent && isItem(dataItem)) {

                        set(me, 'bubbleTarget', get(dataItem, 'observable'));
                    }
                }

                get isIndependent() {

                    return !get(this, 'bubbleTarget');
                }

                independent() {

                    let me = this,
                        {
                            isIndependent
                        } = me;

                    if (isIndependent) {

                        return;
                    }

                    set(me, 'bubbleTarget', null);
                }
            }

            var_class_1608956298138 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298138;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.observable';
                }

            };

            main = var_class_1608956298138;

            var_global_main_1608956298138 = main;

            var_init_locked_1608956298138 = true;
        }


        return new var_global_main_1608956298138();
    };

})();

exports['src::is.data.item'] = (() => {

    let isObject, get;

    let var_init_locked_1608956298142;



    function main(data) {


        /**
         * 
         * 判断是否为数据项
         * 
         * @import is.object
         * 
         * @import get from object.property.inner.get
         * 
         * @param {mixed} data 数据
         * 
         * @return {boolean} 判断结果 
         * 
         */

        return isObject(data) && get(data, 'DATA_RECORD') === true;

    }

    return function(data) {


        if (!var_init_locked_1608956298142) {

            isObject = include('src::is.object');
            get = include('src::object.property.inner.get');

            var_init_locked_1608956298142 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.data.record'] = (() => {

    let isObject, is;

    let var_init_locked_1608956298144;



    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据记录
         * 
         * @import isObject from is.object.simple
         * 
         * @import is from .item
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        return is(data) && isObject(data);

    }

    return function(data) {


        if (!var_init_locked_1608956298144) {

            isObject = include('src::is.object.simple');
            is = include('src::is.data.item');

            var_init_locked_1608956298144 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.data.recordset'] = (() => {

    let isArray, is;

    let var_init_locked_1608956298147;



    function main(data) {


        /**
         * 
         * 判定指定数据是否为数据记录集合
         * 
         * @import is.array
         * 
         * @import is from .item
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果为数据记录则返回 true , 否则返回 false 
         * 
         */

        return is(data) && isArray(data);

    }

    return function(data) {


        if (!var_init_locked_1608956298147) {

            isArray = include('src::is.array');
            is = include('src::is.data.item');

            var_init_locked_1608956298147 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::data.proxy.constructor'] = (() => {

    let createProxy, createReader;

    let var_init_locked_1608956298149;



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


        if (!var_init_locked_1608956298149) {

            createProxy = include('src::object.proxy');
            createReader = include('src::data.reader.json');

            var_init_locked_1608956298149 = true;
        }


        return main.call(this, {
            reader,
            model
        });
    };

})();

exports['src::data.reader.fields'] = (() => {

    let isDefined, isArray, isObject, isString, isNumber, empty, isFunction, createReader;

    let var_init_locked_1608956298161;




    /**
     * 
     * 数据读取器字段配置
     * 
     * @import is.defined
     * 
     * @import is.array
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.string
     * 
     * @import is.number
     * 
     * @import empty from function.empty value
     * 
     * @import is.function
     * 
     * @import is.defined
     * 
     * @import isObject from is.object.simple
     * 
     * @import createReader from data.reader
     * 
     * @param {mixed} fields 字段配置
     * 
     * @return {mixed} 封装后的字段配置 
     * 
     */

    function main(fields) {

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

                } else if (isFunction(config)) {

                    config = {
                        name,
                        convert: config
                    };
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

    function processDefaultValue(defaultValue) {

        if (isFunction(defaultValue)) {

            return defaultValue;
        }

        return () => defaultValue;
    }

    function getField({
        name,
        type,
        mapping,
        convert,
        local = false,
        equals,
        set,
        afterSet,
        get,
        defaultValue,
        reader,
        mode = 'readonly',
        ...options
    }) {

        const me = this,
            {
                getData
            } = me;

        defaultValue = processDefaultValue(defaultValue);

        let field = {
            name,
            mode,
            equals,
            get,
            defaultValue,
            afterSet
        };

        if (isString(type) && !isFunction(set)) {

            field.set = value => include(`data.convert.${type}`)(value, options);

        } else {

            field.set = set;

        }

        if (!local) {

            field.convert = (raw, raws, index, data) => {

                if (isDefined(reader)) {

                    if (isFunction(reader)) {

                        return me.read(data, data => reader(data, raw, raws, index));

                    } else if (isString(reader)) {

                        return me.read(data, reader);

                    } else if (isObject(reader)) {

                        let {
                            fields,
                            root,
                            addFields,
                            ...options
                        } = reader,
                        rootProperty;

                        if (isFunction(root)) {

                            rootProperty = data => root(data, raw, raws, index);

                        } else {

                            rootProperty = root;
                        }

                        let readConfig = {
                            root: rootProperty,
                            ...options
                        };

                        if (fields) {

                            return createReader(fields, addFields).read(data, readConfig);
                        }

                        return me.read(data, readConfig);
                    }

                    return [];

                } else if (isFunction(convert)) {

                    raw = convert(raw, raws, index, data);

                } else {

                    if (isString(mapping)) {

                        raw = getData(raw, mapping);

                    } else {

                        raw = getData(raw, name);
                    }

                    if (isString(type)) {

                        raw = include(`data.convert.${type}`)(raw, options);
                    }

                }

                if (isDefined(raw)) {

                    if (typeof raw === 'number' && isNaN(raw)) {

                        return defaultValue();
                    }

                    return raw;
                }

                return defaultValue();

            };

        } else {

            field.convert = () => defaultValue();
        }

        return field;
    }

    return function(fields) {


        if (!var_init_locked_1608956298161) {

            isDefined = include('src::is.defined');
            isArray = include('src::is.array');
            isObject = include('src::is.object.simple');
            isString = include('src::is.string');
            isNumber = include('src::is.number');
            empty = include('src::function.empty')();
            isFunction = include('src::is.function');
            isDefined = include('src::is.defined');
            isObject = include('src::is.object.simple');
            createReader = include('src::data.reader');

            var_init_locked_1608956298161 = true;
        }


        return main.call(this, fields);
    };

})();

exports['src::object.property.inner.has'] = (() => {

    let innerName;

    let var_init_locked_1608956298175;



    function main(target, name) {


        /**
         * 
         * 判断是否拥有内置属性
         * 
         *  @import innerName from .name
         * 
         * @param {object} target  定义内部属性的宿主
         * 
         * @param {string} name 内部属性名称
         * 
         * @return {boolean} 如果拥有指定内部属性则返回 true , 否则返回 false
         * 
         */

        return target.hasOwnProperty(innerName(name));

    }

    return function(target, name) {


        if (!var_init_locked_1608956298175) {

            innerName = include('src::object.property.inner.name');

            var_init_locked_1608956298175 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::object.property.define.set'] = (() => {

    let isFunction, equals, get, set, has;

    let var_init_locked_1608956298173;



    function main(name, onSet, onAfterSet, isEquals) {


        /**
         * 
         * 设置属性
         * 
         * @import is.function
         * 
         * @import equals from data.equals
         * 
         * @import get from ..inner.get
         * 
         * @import set from ..inner.set
         * 
         * @import has from ..inner.has
         * 
         * @param {string} name 属性名称
         * 
         * @param {function} [onSet] 设置属性值
         * 
         * @param {function} [onAfterSet] 设置属性值之后调用
         * 
         * @param {function} [isEquals] 属性值判断是否相等，只在启动改变属性事件有效
         * 
         */

        isEquals = isEquals || equals;

        return function(value) {

            let me = this,
                oldValue = get(me, name);

            if (!isEquals.call(me, value, oldValue)) {

                if (isFunction(onSet)) {

                    value = onSet.call(me, value, oldValue);
                }

                set(me, name, value);

                if (isFunction(onAfterSet)) {

                    value = onAfterSet.call(me, value);
                }
            }
        };

    }

    return function(name, onSet, onAfterSet, isEquals) {


        if (!var_init_locked_1608956298173) {

            isFunction = include('src::is.function');
            equals = include('src::data.equals');
            get = include('src::object.property.inner.get');
            set = include('src::object.property.inner.set');
            has = include('src::object.property.inner.has');

            var_init_locked_1608956298173 = true;
        }


        return main.call(this, name, onSet, onAfterSet, isEquals);
    };

})();

exports['src::object.property.define.get'] = (() => {

    let isFunction, get;

    let var_init_locked_1608956298177;



    function main(name, onGet) {


        /**
         * 
         * 获取属性
         * 
         * @import is.function
         * 
         * @import get from ..inner.get
         * 
         * @param {string} name 属性名称
         * 
         * @param {function} onGet 获取属性值
         * 
         */

        return function() {

            let me = this,
                value = get(me, name);

            if (isFunction(onGet)) {

                return onGet.call(me, value);
            }

            return value;
        };

    }

    return function(name, onGet) {


        if (!var_init_locked_1608956298177) {

            isFunction = include('src::is.function');
            get = include('src::object.property.inner.get');

            var_init_locked_1608956298177 = true;
        }


        return main.call(this, name, onGet);
    };

})();

exports['src::object.property.define'] = (() => {

    let innerDefine, isFunction, doSet, doGet, isObject, define;

    let var_init_locked_1608956298170;



    function main(target, name, {
        mode,
        value,
        equals,
        set,
        afterSet,
        get
    }) {

        /**
         * 
         * 定义一个缓存属性
         * 
         * @import innerDefine from .inner.define
         * 
         * @import is.function
         * 
         * @import doSet from .define.set
         * 
         * @import doGet from .define.get
         * 
         * @import isObject from is.object.simple
         * 
         * @import define from .define
         * 
         * @param {object} target 目标对象
         * 
         * @param {string|object} name 属性名称
         * 
         * @param {object} [options = {}] 属性配置
         * 
         * @param {boolean} options.mode 读写模式
         * 
         * @param {string} [options.value] 属性初始始化值
         * 
         * @param {boolean} [options.equals] 判断属性值是否相等
         * 
         * @param {function} [options.set] 设置值
         * 
         * @param {function} [options.afterSet] 设置值之后调用
         * 
         * @param {function} [options.get] 获取值
         * 
         */

        if (isObject(name)) {

            let properties = name;

            let names = Object.keys(properties);

            for (let name of names) {

                define(target, name, properties[name]);
            }

        } else {

            switch (mode) {

                case 'readonly':

                    if (isFunction(get)) {

                        Object.defineProperty(target, name, {
                            get: doGet(name, get),
                            configurable: true,
                            enumerable: true
                        });

                        innerDefine(target, name, value);

                    } else {

                        Object.defineProperty(target, name, {
                            value,
                            configurable: true,
                            enumerable: true
                        });
                    }

                    break;

                case 'writeonly':

                    Object.defineProperty(target, name, {
                        set: doSet(name, set, afterSet, equals),
                        configurable: true,
                        enumerable: true
                    });

                    innerDefine(target, name, value);

                    break;

                case 'readwrite':

                    Object.defineProperty(target, name, {
                        set: doSet(name, set, afterSet, equals),
                        get: doGet(name, get),
                        configurable: true,
                        enumerable: true
                    });

                    innerDefine(target, name, value);

            }
        }

    }

    return function(target, name, {
        mode,
        value,
        equals,
        set,
        afterSet,
        get
    } = {}) {


        if (!var_init_locked_1608956298170) {

            innerDefine = include('src::object.property.inner.define');
            isFunction = include('src::is.function');
            doSet = include('src::object.property.define.set');
            doGet = include('src::object.property.define.get');
            isObject = include('src::is.object.simple');
            define = include('src::object.property.define');

            var_init_locked_1608956298170 = true;
        }


        return main.call(this, target, name, {
            mode,
            value,
            equals,
            set,
            afterSet,
            get
        });
    };

})();

exports['src::data.reader.record'] = (() => {

    let generate, define, innerDefine, is, isDefined, isArray, getFields;

    let var_init_locked_1608956298165;




    /**
     * 
     * 根据获取原始数据转换后正式数据
     * 
     * @import generate from id.generate
     * 
     * @import define from object.property.define
     * 
     * @import innerDefine from object.property.inner.define
     * 
     * @import is from is.data.item
     * 
     * @import is.defined
     * 
     * @import is.array
     * 
     * @import getFields from .fields
     * 
     * @param {mixed} record 数据记录 
     * 
     * @param {mixed} raw 行级原始数据
     * 
     * @param {array} raws 一组行级原始数据
     * 
     * @param {number} index 原始数据下标
     * 
     * @param {mixed} data 原始数据
     * 
     * @param {function} [addFields = () => {}] 自定义数据记录
     * 
     * @return {object} 正式数据
     * 
     */

    function main(record, raw, raws, index, data, addFields) {

        let me = this,
            {
                fields
            } = me,
            isConvert = isDefined(raw) && isDefined(raws) && isDefined(index) && isDefined(data);

        record = record || {};

        innerDefine(record, 'DATA_RECORD', true);

        processFields(isConvert, record, fields, raw, raws, index, data);

        let additionalFields = addFields(record);

        if (isDefined(additionalFields)) {

            additionalFields = getFields.call(me, additionalFields);

            processFields(isConvert, record, additionalFields, raw, raws, index, data);
        }

        return record;
    }

    function processFields(isConvert, record, fields, raw, raws, index, data) {

        for (let {
                name,
                convert,
                mode,
                equals,
                set,
                afterSet,
                get,
                defaultValue
            } of fields) {

            if (record.hasOwnProperty(name)) {

                continue;
            }

            if (isConvert) {

                let value = convert(raw, raws, index, data);

                define(record, name, {
                    mode,
                    equals,
                    set,
                    afterSet,
                    get,
                    value
                });

            } else {

                let config = {
                    mode,
                    equals,
                    set,
                    afterSet,
                    get
                };

                if (raw) {

                    let value = raw[name];

                    config.value = isDefined(value) ? value : defaultValue();

                } else {

                    config.value = defaultValue();
                }

                define(record, name, config);
            }
        }
    }

    return function(record, raw, raws, index, data, addFields = () => {}) {


        if (!var_init_locked_1608956298165) {

            generate = include('src::id.generate');
            define = include('src::object.property.define');
            innerDefine = include('src::object.property.inner.define');
            is = include('src::is.data.item');
            isDefined = include('src::is.defined');
            isArray = include('src::is.array');
            getFields = include('src::data.reader.fields');

            var_init_locked_1608956298165 = true;
        }


        return main.call(this, record, raw, raws, index, data, addFields);
    };

})();

exports['src::data.reader.raws'] = (() => {

    let isFunction, from;

    let var_init_locked_1608956298180;



    function main(data, root) {


        /**
         * 
         * 获取一组原始数据用来解析数据记录
         * 
         * @import is.function
         * 
         * @import from from array.from
         * 
         * @param {mixed} data 原始数据
         * 
         * @param {string} root 根遍历路径
         * 
         * @return {array} 一组原始数据 
         * 
         */

        let {
            getData
        } = this,
        raws;

        if (isFunction(root)) {

            raws = root(data);

        } else {

            raws = getData(data, root);
        }

        return from(raws);

    }

    return function(data, root) {


        if (!var_init_locked_1608956298180) {

            isFunction = include('src::is.function');
            from = include('src::array.from');

            var_init_locked_1608956298180 = true;
        }


        return main.call(this, data, root);
    };

})();

exports['src::data.reader.names'] = (() => {

    let isFunction;

    let var_init_locked_1608956298185;



    function main(fields) {


        /**
         * 
         * 根据字段定义获取相关字段名称信息
         * 
         * @import is.function
         * 
         * @param {array} fields 字段集合
         * 
         * @return {object} 名称集合
         * 
         */

        let names = [];

        for (let {
                name
            } of fields) {

            names.push(name);
        }

        return names;

    }

    return function(fields) {


        if (!var_init_locked_1608956298185) {

            isFunction = include('src::is.function');

            var_init_locked_1608956298185 = true;
        }


        return main.call(this, fields);
    };

})();

exports['src::data.reader.data'] = (() => {

    let define, get, clear, clone, isFunction, getFields, isDefined, getNames;

    let var_init_locked_1608956298182;




    /**
     * 
     * 基于数据记录生成一个与之对应的只读数据对象
     * 
     * @import define from object.property.inner.define
     * 
     * @import get from object.property.inner.get
     * 
     * @import clear from object.clear
     * 
     * @import clone from data.clone
     * 
     * @import is.function
     * 
     * @import getFields from .fields
     * 
     * @import is.defined
     * 
     * @import getNames from .names
     * 
     * @param {data.Record} record 数据记录
     * 
     * @param {object} [options = {}] 配置
     * 
     * @return {object} 数据对象
     * 
     */

    const {
        defineProperty
    } = Object;

    function main(record, {
        ignoreFields = [],
        fields = {}
    }) {

        let me = this,
            {
                names
            } = me,
            addNames = getNames(me.getAddFields(record));

        names = [
            ...names,
            ...addNames,
            ...Object.keys(fields)
        ];

        names = Array.from(new Set(names));

        let data = {},
            cache = {};

        for (let name of names) {

            if (ignoreFields.includes(name)) {

                continue;
            }

            defineProperty(data, name, {
                get() {

                    if (cache.hasOwnProperty(name)) {

                        return cache[name];
                    }

                    if (fields.hasOwnProperty(name)) {

                        return cache[name] = clone(fields[name](record));
                    }

                    return cache[name] = clone(record[name]);
                },
                enumerable: true
            });
        }

        return data;
    }

    return function(record, options = {}) {


        if (!var_init_locked_1608956298182) {

            define = include('src::object.property.inner.define');
            get = include('src::object.property.inner.get');
            clear = include('src::object.clear');
            clone = include('src::data.clone');
            isFunction = include('src::is.function');
            getFields = include('src::data.reader.fields');
            isDefined = include('src::is.defined');
            getNames = include('src::data.reader.names');

            var_init_locked_1608956298182 = true;
        }


        return main.call(this, record, options);
    };

})();

exports['src::data.reader'] = (() => {

    let getFields, getRecord, getRaws, isObject, createData, getNames, isDefined;

    let var_init_locked_1608956298154;

    let var_class_1608956298154;



    let var_global_main_1608956298154;

    return function() {


        if (!var_init_locked_1608956298154) {

            getFields = include('src::data.reader.fields');
            getRecord = include('src::data.reader.record');
            getRaws = include('src::data.reader.raws');
            isObject = include('src::is.object.simple');
            createData = include('src::data.reader.data');
            getNames = include('src::data.reader.names');
            isDefined = include('src::is.defined');

            /**
             * 
             * 数据读取器
             * 
             * @import getFields from .reader.fields
             * 
             * @import getRecord from .reader.record
             * 
             * @import getRaws from .reader.raws
             * 
             * @import isObject from is.object.simple
             * 
             * @import createData from .reader.data
             * 
             * @import getNames from .reader.names
             * 
             * @import is.defined
             * 
             * @class
             * 
             */

            class main {

                constructor(fields = [], addFields) {

                    let me = this;

                    fields = getFields.call(me, fields);

                    me.addFields = addFields;

                    let names = getNames(fields);

                    me.names = names;

                    me.fields = fields;
                }

                data(record, options) {

                    return createData.call(this, record, options);
                }

                getAddFieldNames(record) {

                    let {
                        names
                    } = this.getAddFields(record);

                    return names;
                }

                getAddFields(record) {

                    let me = this,
                        {
                            addFields
                        } = me,
                        additionalFields = addFields(record);

                    if (isDefined(additionalFields)) {

                        return getFields.call(me, additionalFields);
                    }

                    return [];
                }

                create(data) {

                    let me = this,
                        {
                            addFields
                        } = me;

                    return getRecord.call(me, undefined, data, undefined, undefined, undefined, addFields);
                }

                read(data, root = '.') {

                    let config = {
                        root: '.',
                        multi: true
                    };

                    if (isObject(root)) {

                        Object.assign(config, root);

                    } else {

                        config.root = root;
                    }

                    root = config.root;

                    let {
                        multi
                    } = config,
                    me = this, {
                            addFields
                        } = me,
                        raws = getRaws.call(me, data, root),
                        records = [],
                        count = 0;

                    if (multi === false && raws.length) {

                        return getRecord.call(me, null, raws[0], raws, count, data, addFields);
                    }

                    for (let raw of raws) {

                        records.push(getRecord.call(me, null, raw, raws, count++, data, addFields));
                    }

                    return records;
                }
            }

            var_class_1608956298154 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298154;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.reader';
                }

            };

            main = var_class_1608956298154;

            var_global_main_1608956298154 = main;

            var_init_locked_1608956298154 = true;
        }


        return var_global_main_1608956298154;
    };

})();

exports['src::string.split'] = (() => {

    let isEmpty;

    let var_init_locked_1608956298190;




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


        if (!var_init_locked_1608956298190) {

            isEmpty = include('src::is.empty');

            var_init_locked_1608956298190 = true;
        }


        return main.call(this, target, splitRe);
    };

})();

exports['src::object.value.get'] = (() => {

    let split, isObject, isArray;

    let var_init_locked_1608956298188;



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


        if (!var_init_locked_1608956298188) {

            split = include('src::string.split');
            isObject = include('src::is.object');
            isArray = include('src::is.array');

            var_init_locked_1608956298188 = true;
        }


        return main.call(this, data, key);
    };

})();

exports['src::data.reader.json'] = (() => {

    let Reader, get;

    let var_init_locked_1608956298151;

    let var_class_1608956298151;



    let var_global_main_1608956298151;

    return function(fields, addFields) {


        if (!var_init_locked_1608956298151) {

            Reader = include('src::data.reader')();
            get = include('src::object.value.get');

            /**
             * 
             * JSON 数据读取器
             * 
             * @import Reader from data.reader value
             * 
             * @import get from object.value.get
             * 
             * @param {object} fields 字段配置
             * 
             * @param {function} addFields 附加字段配置
             * 
             */

            class main extends Reader {

                getData(data, path) {

                    return get(data, path);
                }

            }

            var_class_1608956298151 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298151;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.reader.json';
                }

            };

            main = var_class_1608956298151;

            var_global_main_1608956298151 = main;

            var_init_locked_1608956298151 = true;
        }


        return new var_global_main_1608956298151(fields, addFields);
    };

})();

exports['src::data.proxy.create'] = (() => {

    let create;

    let var_init_locked_1608956298192;



    function main(proxy) {


        /**
         * 
         * 创建新的代理
         * 
         * @import create from class.create.option
         * 
         * @param {mixed} [proxy = 'memory'] 数据代理
         * 
         * @return {mixed} 数据代理 
         * 
         */

        return create('data.proxy', proxy);

    }

    return function(proxy = 'memory') {


        if (!var_init_locked_1608956298192) {

            create = include('src::class.create.option');

            var_init_locked_1608956298192 = true;
        }


        return main.call(this, proxy);
    };

})();

exports['src::class.create.option'] = (() => {

    let isString, isObject, isClass, create, isDefined;

    let var_init_locked_1608956298194;



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


        if (!var_init_locked_1608956298194) {

            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            isClass = include('src::is.class');
            create = include('src::class.create');
            isDefined = include('src::is.defined');

            var_init_locked_1608956298194 = true;
        }


        return main.call(this, namespace, option);
    };

})();

exports['src::data.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1608956298196;

    let var_class_1608956298196;



    let var_global_main_1608956298196;

    return function(options) {


        if (!var_init_locked_1608956298196) {

            Proxy = include('src::data.proxy')();


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

            var_class_1608956298196 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298196;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy.memory';
                }

            };

            main = var_class_1608956298196;

            var_global_main_1608956298196 = main;

            var_init_locked_1608956298196 = true;
        }


        return new var_global_main_1608956298196(options);
    };

})();

exports['src::data.proxy.read'] = (() => {

    let isPromise;

    let var_init_locked_1608956298202;




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


        if (!var_init_locked_1608956298202) {

            isPromise = include('src::is.promise');

            var_init_locked_1608956298202 = true;
        }


        return main.call(this, options);
    };

})();

exports['src::data.proxy'] = (() => {

    let mixin_1608956298199__1, extend, constructor, method_read, isObject;

    let var_init_locked_1608956298200;

    let var_class_1608956298200;



    let var_global_main_1608956298200;

    return function() {


        if (!var_init_locked_1608956298200) {

            mixin_1608956298199__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::data.proxy.constructor');
            method_read = include('src::data.proxy.read');
            isObject = include('src::is.object.simple');

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

            var_class_1608956298200 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298200;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.proxy';
                }

            };

            main = var_class_1608956298200;

            var_global_main_1608956298200 = main;

            var_init_locked_1608956298200 = true;
        }


        return var_global_main_1608956298200;
    };

})();

exports['src::data.recordset'] = (() => {

    let define, get, createObservable, is, isArray, isClass;

    let var_init_locked_1608956298207;




    /**
     * 
     * 创建一个专有于数据读取器的数组
     * 
     * @import define from object.property.inner.define
     * 
     * @import get from object.property.inner.get
     * 
     * @import createObservable from .observable
     * 
     * @import is from is.data.record
     * 
     * @import is.array
     * 
     * @import is.class
     * 
     * @param {data.Reader} reader 数据读取器
     * 
     * @param {array} records 数据记录数组
     * 
     * @return {array} 数组
     * 
     */

    const {
        push
    } = Array.prototype;

    function main(reader, records) {

        let recordset = new Recordset();

        define(recordset, 'reader', reader);

        define(recordset, 'observable', createObservable());

        push.call(recordset, ...createRecords.call(recordset, records));

        return recordset;

    }

    class Recordset extends Array {

        push(...raws) {

            return super.push(...createRecords.call(this, raws));
        }

        unshift(...raws) {

            return super.unshift(...createRecords.call(this, raws));
        }

        splice(index, howMany, ...raws) {

            let me = this,
                {
                    length
                } = me;

            for (let i = 0; i < howMany; i++) {

                let itemIndex = index + i;

                if (itemIndex < length) {

                    get(me[itemIndex], 'observable').independent();
                }
            }

            return super.splice(index, howMany, ...createRecords.call(me, raws));
        }

        pop() {

            let me = this,
                {
                    length
                } = me;

            if (length) {

                get(me[length - 1], 'observable').independent();
            }

            return super.pop();
        }

        shift() {

            let me = this,
                {
                    length
                } = me;

            if (length) {

                get(me[0], 'observable').independent();
            }

            return super.shift();
        }
    }

    function createRecords(raws) {

        let records = [],
            readRaws = [],
            me = this;

        for (let raw of raws) {

            if (is(raw)) {

                let observable = get(raw, 'observable');

                if (observable.isIndependent) {

                    observable.belongTo(me);

                    records.push(raw);
                }

            } else {

                readRaws.push(raw);
            }
        }

        let recordset = get(me, 'reader').read(readRaws, {
            isRecordset: false
        });

        for (let record of recordset) {

            get(record, 'observable').belongTo(me);

            records.push(record);

        }

        return records;
    }

    return function(reader, records) {


        if (!var_init_locked_1608956298207) {

            define = include('src::object.property.inner.define');
            get = include('src::object.property.inner.get');
            createObservable = include('src::data.observable');
            is = include('src::is.data.record');
            isArray = include('src::is.array');
            isClass = include('src::is.class');

            var_init_locked_1608956298207 = true;
        }


        return main.call(this, reader, records);
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

exports['src::data.store.base'] = (() => {

    let get, create, assign, createProxy, isMemoryProxy, createReader;

    let var_init_locked_1608956298214;

    let var_class_1608956298214;



    let var_global_main_1608956298214;

    return function() {


        if (!var_init_locked_1608956298214) {

            get = include('src::data.model.get');
            create = include('src::data.model.create');
            assign = include('src::object.assign');
            createProxy = include('src::data.proxy.create');
            isMemoryProxy = include('src::is.proxy.memory');
            createReader = include('src::data.reader.json');


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



            var_class_1608956298214 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298214;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.base';
                }

            };

            main = var_class_1608956298214;

            var_global_main_1608956298214 = main;

            var_init_locked_1608956298214 = true;
        }


        return var_global_main_1608956298214;
    };

})();

exports['src::is.proxy.memory'] = (() => {

    let Proxy;

    let var_init_locked_1608956298219;



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


        if (!var_init_locked_1608956298219) {

            Proxy = include('src::data.proxy')();

            var_init_locked_1608956298219 = true;
        }


        return main.call(this, data);
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

exports['src::data.store.constructor'] = (() => {

    let create, get, assign, createProxy, isMemoryProxy, createReader, createRecordset, link;

    let var_init_locked_1608956298224;



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

        me.proxy = createProxy(assign({
            type: 'memory',
            model,
            reader: {
                type: 'json'
            },
            listeners: {
                read: 'onProxyRead',
                scope: me
            }
        }, proxy));

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


        if (!var_init_locked_1608956298224) {

            create = include('src::data.model.create');
            get = include('src::data.model.get');
            assign = include('src::object.assign');
            createProxy = include('src::data.proxy.create');
            isMemoryProxy = include('src::is.proxy.memory');
            createReader = include('src::data.reader.json');
            createRecordset = include('src::data.recordset');
            link = include('src::object.link');

            var_init_locked_1608956298224 = true;
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

exports['src::object.link'] = (() => {

    let isFunction;

    let var_init_locked_1608956298227;



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


        if (!var_init_locked_1608956298227) {

            isFunction = include('src::is.function');

            var_init_locked_1608956298227 = true;
        }


        return main.call(this, dest, source, names);
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

exports['src::data.store.destroy'] = (() => {







    function main() {


        /**
         * 
         * 销毁数据存储器
         * 
         */

        let me = this,
            {
                records,
                recordMap
            } = me;

        for (let record of records) {

            record.destroy();

            delete recordMap[record.id];
        }

        records.length = 0;

    }

    return function() {



        return main.call(this);
    };

})();

exports['src::data.store.find.records'] = (() => {

    let isString, isFunction;

    let var_init_locked_1608956298234;



    function main(property, value) {


        /**
         * 
         * 寻找符合查询条件的记录
         * 
         * @import is.string
         * 
         * @import is.function
         * 
         * @param {mixed} property 属性名称
         * 
         * @param {mixed} value 属性值
         * 
         * @return {array} 查询出来的数据记录
         * 
         */

        let {
            recordset
        } = this;

        return recordset.findRecords(property, value);

    }

    return function(property, value) {


        if (!var_init_locked_1608956298234) {

            isString = include('src::is.string');
            isFunction = include('src::is.function');

            var_init_locked_1608956298234 = true;
        }


        return main.call(this, property, value);
    };

})();

exports['src::data.store.get.id'] = (() => {







    function main(id) {


        /**
         * 
         * 根据编号获取记录
         * 
         * @param {mixed} id 记录编号
         * 
         * @return {data.Model} 数据记录 
         * 
         */

        let {
            recordset
        } = this;

        return recordset.getById(id);

    }

    return function(id) {



        return main.call(this, id);
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

exports['src::data.store.remove'] = (() => {

    let remove, from;

    let var_init_locked_1608956298246;



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


        if (!var_init_locked_1608956298246) {

            remove = include('src::array.remove');
            from = include('src::array.from');

            var_init_locked_1608956298246 = true;
        }


        return main.call(this, records, isFireEvent);
    };

})();

exports['src::data.store.tree.base'] = (() => {

    let Store, Model, define, from;

    let var_init_locked_1608956298250;

    let var_class_1608956298250;



    let var_global_main_1608956298250;

    return function() {


        if (!var_init_locked_1608956298250) {

            Store = include('src::data.store')();
            Model = include('src::data.model.node.tree.mind')();
            define = include('src::class.define');
            from = include('src::array.from');


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

            var_class_1608956298250 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298250;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.base';
                }

            };

            main = var_class_1608956298250;

            var_global_main_1608956298250 = main;

            var_init_locked_1608956298250 = true;
        }


        return var_global_main_1608956298250;
    };

})();

exports['src::object.clone'] = (() => {

    let assign;

    let var_init_locked_1608956298270;



    function main(target) {


        /**
         * 
         * 拷贝对象
         * 
         * @import assign from .assign
         * 
         * @param {object} target 目标数据
         * 
         * @return {object} 拷贝后的对象
         * 
         */

        return assign({}, target);

    }

    return function(target) {


        if (!var_init_locked_1608956298270) {

            assign = include('src::object.assign');

            var_init_locked_1608956298270 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::data.store'] = (() => {

    let Observable, aclear, oclear, aClone, oClone, from, isObject, isFunction, isNumber, empty, add, remove, generate, isEmpty, isString, insert, toNumber, createReader;

    let var_init_locked_1608956298264;

    let var_class_1608956298264;



    let var_global_main_1608956298264;

    return function() {


        if (!var_init_locked_1608956298264) {

            Observable = include('src::mixin.observable');
            aclear = include('src::array.clear');
            oclear = include('src::object.clear');
            aClone = include('src::array.clone');
            oClone = include('src::object.clone');
            from = include('src::array.from');
            isObject = include('src::is.object.simple');
            isFunction = include('src::is.function');
            isNumber = include('src::is.number');
            empty = include('src::function.empty')();
            add = include('src::event.listener.add');
            remove = include('src::event.listener.remove');
            generate = include('src::id.generate');
            isEmpty = include('src::is.empty');
            isObject = include('src::is.object.simple');
            isFunction = include('src::is.function');
            isString = include('src::is.string');
            insert = include('src::array.insert');
            toNumber = include('src::data.convert.number');
            createReader = include('src::data.reader.json');

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

            var_class_1608956298264 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298264;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store';
                }

            };

            main = var_class_1608956298264;

            var_global_main_1608956298264 = main;

            var_init_locked_1608956298264 = true;
        }


        return var_global_main_1608956298264;
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

exports['src::data.store.tree.mind'] = (() => {

    let Store;

    let var_init_locked_1608956298279;

    let var_class_1608956298279;



    let var_global_main_1608956298279;

    return function(options) {


        if (!var_init_locked_1608956298279) {

            Store = include('src::data.store.tree')();


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

            var_class_1608956298279 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298279;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree.mind';
                }

            };

            main = var_class_1608956298279;

            var_global_main_1608956298279 = main;

            var_init_locked_1608956298279 = true;
        }


        return new var_global_main_1608956298279(options);
    };

})();

exports['src::data.store.tree.remove'] = (() => {

    let from;

    let var_init_locked_1608956298285;



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


        if (!var_init_locked_1608956298285) {

            from = include('src::array.from');

            var_init_locked_1608956298285 = true;
        }


        return main.call(this, nodes);
    };

})();

exports['src::data.store.tree'] = (() => {

    let extend, method_insert, method_remove, isObject;

    let var_init_locked_1608956298282;

    let var_class_1608956298282;



    let var_global_main_1608956298282;

    return function() {


        if (!var_init_locked_1608956298282) {

            extend = include('src::data.store.tree.base')();
            method_insert = include('src::data.store.tree.insert');
            method_remove = include('src::data.store.tree.remove');
            isObject = include('src::is.object.simple');

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

            var_class_1608956298282 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298282;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::data.store.tree';
                }

            };

            main = var_class_1608956298282;

            var_global_main_1608956298282 = main;

            var_init_locked_1608956298282 = true;
        }


        return var_global_main_1608956298282;
    };

})();

exports['src::is.browser.support.pointer'] = (() => {





    let var_once_value_1608956298294;

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




        if (var_once_value_1608956298294) {

            return var_once_value_1608956298294;

        }
        return var_once_value_1608956298294 = main.call(this);

    };

})();

exports['src::is.browser.support.touch'] = (() => {





    let var_once_value_1608956298296;

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




        if (var_once_value_1608956298296) {

            return var_once_value_1608956298296;

        }
        return var_once_value_1608956298296 = main.call(this);

    };

})();

exports['src::is.class.from'] = (() => {

    let isClass, isString;

    let var_init_locked_1608956298298;



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


        if (!var_init_locked_1608956298298) {

            isClass = include('src::is.class');
            isString = include('src::is.string');

            var_init_locked_1608956298298 = true;
        }


        return main.call(this, data, baseClass);
    };

})();

exports['src::is.data.model.class'] = (() => {

    let dataModel, isClass;

    let var_init_locked_1608956298300;



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


        if (!var_init_locked_1608956298300) {

            dataModel = include('src::data.model');
            isClass = include('src::is.class.from');

            var_init_locked_1608956298300 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.data.model'] = (() => {

    let Model;

    let var_init_locked_1608956298302;



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


        if (!var_init_locked_1608956298302) {

            Model = include('src::data.model')();

            var_init_locked_1608956298302 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.data.record.empty'] = (() => {

    let isRecord;

    let var_init_locked_1608956298304;



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


        if (!var_init_locked_1608956298304) {

            isRecord = include('src::is.data.record');

            var_init_locked_1608956298304 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.data.store'] = (() => {

    let Store;

    let var_init_locked_1608956298306;



    function main(data) {


        /**
         * 
         * 判定数据是否为数据存储器对象
         * 
         * @import Store from data.store value
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果检测为数据存储器则返回 true , 否则返回 false 
         * 
         */

        return data instanceof Store;

    }

    return function(data) {


        if (!var_init_locked_1608956298306) {

            Store = include('src::data.store')();

            var_init_locked_1608956298306 = true;
        }


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
            stat
        } = require('fs');

        return new Promise(resolve => stat(path, (error, stats) => error ? resolve(false) : resolve(stats.isDirectory())));


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
            stat
        } = require('fs');

        return new Promise(resolve => stat(path, (error, stats) => error ? resolve(false) : resolve(stats.isFile())));


    }

    return function(path) {



        return main.call(this, path);
    };

})();

exports['src::is.html.iframe'] = (() => {







    function main(el) {

        /**
         * 
         * 判断给定元素引用是否为 iframe 元素
         * 
         * @param {mixed} el
         * 
         * @return {boolean} 如果元素为 iframe 元素，则返回 true , 否则返回 false
         * 
         */

        return el instanceof HTMLIFrameElement;

    }

    return function(el) {



        return main.call(this, el);
    };

})();

exports['src::is.model.data'] = (() => {

    let model, isClass;

    let var_init_locked_1608956298317;



    function main(data) {


        /**
         * 
         * 判断当前数据是否为数据模型
         * 
         * @import model
         * 
         * @import is.class
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果检测数据为数据模型则返回 true , 否则返回 false 
         * 
         */

        return isClass(data, 'model');

    }

    return function(data) {


        if (!var_init_locked_1608956298317) {

            model = include('src::model');
            isClass = include('src::is.class');

            var_init_locked_1608956298317 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.null'] = (() => {

    let isType;

    let var_init_locked_1608956298320;



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


        if (!var_init_locked_1608956298320) {

            isType = include('src::is.type');

            var_init_locked_1608956298320 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.numeric'] = (() => {







    function main(data) {

        /**
         * 
         * 判定数据是否为数值类型
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为数值类型则返回 true , 否则返回 false 
         * 
         */

        return !isNaN(parseFloat(data)) && isFinite(data);

    }

    return function(data) {



        return main.call(this, data);
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

exports['src::is.object.method'] = (() => {

    let isFunction;

    let var_init_locked_1608956298326;



    function main(target, name) {


        /**
         * 
         * 是否对象方法
         * 
         * @import is.function
         * 
         * @param {mixed} target 对象
         * 
         * @param {string} name 字段名称
         * 
         * @return {boolean} 如果指定字段是函数的话则返回 true , 否则返回 false 
         * 
         */

        let {
            value
        } = Object.getOwnPropertyDescriptor(target, name);

        return isFunction(value);

    }

    return function(target, name) {


        if (!var_init_locked_1608956298326) {

            isFunction = include('src::is.function');

            var_init_locked_1608956298326 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::is.object.property'] = (() => {

    let isFunction;

    let var_init_locked_1608956298329;



    function main(target, name) {


        /**
         * 
         * 是否对象属性
         * 
         * @import is.function
         * 
         * @param {mixed} target 对象
         * 
         * @param {string} name 字段名称
         * 
         * @return {boolean} 如果指定字段是函数的话则返回 true , 否则返回 false 
         * 
         */

        let {
            set,
            get,
            value
        } = Object.getOwnPropertyDescriptor(target, name);

        return isFunction(set) || isFunction(get) || !isFunction(value);

    }

    return function(target, name) {


        if (!var_init_locked_1608956298329) {

            isFunction = include('src::is.function');

            var_init_locked_1608956298329 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::is.pc'] = (() => {

    let name;

    let var_init_locked_1608956298332;

    let var_once_value_1608956298332;

    function main() {


        /**
         * 
         * 判断当前环境是否是电脑
         * 
         * @import name from os.name
         * 
         * @once
         * 
         * @return {boolean} 如果是电脑则返回 true , 否则返回 false 
         * 
         */

        switch (name()) {

            case 'MacOS':
            case 'Windows':
            case 'Linux':

                return true;
        }

        return false;


    }

    return function() {


        if (!var_init_locked_1608956298332) {

            name = include('src::os.name');

            var_init_locked_1608956298332 = true;
        }



        if (var_once_value_1608956298332) {

            return var_once_value_1608956298332;

        }
        return var_once_value_1608956298332 = main.call(this);

    };

})();

exports['src::os.name'] = (() => {





    let var_once_value_1608956298336;

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




        if (var_once_value_1608956298336) {

            return var_once_value_1608956298336;

        }
        return var_once_value_1608956298336 = main.call(this);

    };

})();

exports['src::is.primitive'] = (() => {

    let isNumber, isBoolean, isString;

    let var_init_locked_1608956298338;



    function main(data) {

        /**
         * 
         * 判定数据是否为原始类型
         * 
         * @import is.number
         * 
         * @import is.boolean
         * 
         * @import is.string
         * 
         * @param {mixed} data 检验数据
         * 
         * @return {boolean} 如果给定值为原始类型则返回 true , 否则返回 false 
         * 
         */

        return isNumber(data) || isBoolean(data) || isString(data);

    }

    return function(data) {


        if (!var_init_locked_1608956298338) {

            isNumber = include('src::is.number');
            isBoolean = include('src::is.boolean');
            isString = include('src::is.string');

            var_init_locked_1608956298338 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::is.store.data'] = (() => {

    let store, isClass;

    let var_init_locked_1608956298341;



    function main(data) {


        /**
         * 
         * 判断当前数据是否为数据存储器
         * 
         * @import store
         * 
         * @import is.class
         * 
         * @param {mixed} data 检测数据
         * 
         * @return {boolean} 如果检测数据为数据存储器则返回 true , 否则返回 false 
         * 
         */

        return isClass(data, 'store');


    }

    return function(data) {


        if (!var_init_locked_1608956298341) {

            store = include('src::store');
            isClass = include('src::is.class');

            var_init_locked_1608956298341 = true;
        }


        return main.call(this, data);
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

exports['src::is.week.day.last'] = (() => {

    let getDays;

    let var_init_locked_1608956298346;



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


        if (!var_init_locked_1608956298346) {

            getDays = include('src::week.days');

            var_init_locked_1608956298346 = true;
        }


        return main.call(this, date, weekStartDay);
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

exports['src::directory.copy'] = (() => {

    let isDirectory, getAllFilePaths, createDirectory, emptyFn;

    let var_init_locked_1608956298352;



    function main(src, dest, isCopySrcFolder, fn) {


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
         * @import emptyFn from function.empty value
         * 
         * @param {string} src 拷贝的源文件夹目录
         * 
         * @param {string} dest 目标文件夹目录
         * 
         * @param {boolean} [isCopySrcFolder = true] 是否不拷贝源文件夹目录
         * 
         * @param {fuction} [fn] 回调函数 
         * 
         */

        const {
            copyFileSync
        } = require('fs'), {
                dirname
            } = require('path'),
            destPaths = [];

        fn = fn || emptyFn;

        if (isDirectory(src)) {

            let paths = getAllFilePaths(src);

            for (let path of paths) {

                let destPath = path.replace(isCopySrcFolder ? dirname(src) : src, dest);

                createDirectory(dirname(destPath));

                copyFileSync(path, destPath);

                fn(path, destPath);

                destPaths.push(destPath);
            }
        }

        return destPaths;

    }

    return function(src, dest, isCopySrcFolder = true, fn) {


        if (!var_init_locked_1608956298352) {

            isDirectory = include('src::is.directory');
            getAllFilePaths = include('src::directory.paths.file.all');
            createDirectory = include('src::directory.create');
            emptyFn = include('src::function.empty')();

            var_init_locked_1608956298352 = true;
        }


        return main.call(this, src, dest, isCopySrcFolder, fn);
    };

})();

exports['src::directory.paths.file.all'] = (() => {

    let isDirectory, isFile;

    let var_init_locked_1608956298354;




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


        if (!var_init_locked_1608956298354) {

            isDirectory = include('src::is.directory');
            isFile = include('src::is.file');

            var_init_locked_1608956298354 = true;
        }


        return main.call(this, path, testRe);
    };

})();

exports['src::directory.create'] = (() => {

    let isDirectory;

    let var_init_locked_1608956298357;




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
        mkdir
    } = require('fs'),
        folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

    async function main(path) {

        let folderNames = path.match(folderRe),
            folderPath = '';

        for (let folderName of folderNames) {

            folderPath += folderName;

            if (folderName !== '/' && !await isDirectory(folderPath)) {

                await new Promise((resolve, reject) => mkdir(folderPath, error => error ? reject(error) : resolve()));
            }
        }
    }


    return async function(path) {


        if (!var_init_locked_1608956298357) {

            isDirectory = include('src::is.directory');

            var_init_locked_1608956298357 = true;
        }


        return await main.call(this, path);
    };

})();

exports['src::directory.includes'] = (() => {

    let from, isFile, isDirectory, getFilePaths, ext;

    let var_init_locked_1608956298360;




    /**
     * 
     * 在指定目录下包含下符合包含、排除规则的所有文件
     * 
     * @import from from array.from
     * 
     * @import is.file
     * 
     * @import is.directory
     * 
     * @import getFilePaths from .paths.file.all
     * 
     * @import ext from path.ext
     * 
     * @param {string} path 指定目录路径
     * 
     * @param {object} options 配置
     * 
     * @param {mixed} options.includes 包含资源
     * 
     * @param {mixed} [options.excludes] 排除资源
     * 
     * @param {mixed} [options.suffixes] 文件后缀名
     * 
     * @return {array} 所有符合规则的文件
     * 
     */

    const {
        join
    } = require('path');

    function main(path, {
        includes,
        excludes,
        suffixes
    }) {

        let includeFilePaths = getPaths(path, includes),
            excludeFilePaths = getPaths(path, excludes);

        if (suffixes) {

            suffixes = from(suffixes);
        }

        return includeFilePaths.filter(path => {

            if (!excludeFilePaths.includes(path)) {

                if (suffixes && !suffixes.includes(ext(path))) {

                    return false;
                }

                return true;
            }

            return false;

        });
    }

    function getPaths(path, resources) {

        resources = from(resources);

        let resourcePaths = [];

        for (let resource of resources) {

            let resourcePath = join(path, resource);

            if (isFile(resourcePath)) {

                resourcePaths.push(resourcePath);

            } else if (isDirectory(resourcePath)) {

                resourcePaths.push(...getFilePaths(resourcePath));
            }
        }

        return resourcePaths;

    }






    return function(path, {
        includes,
        excludes,
        suffixes
    }) {


        if (!var_init_locked_1608956298360) {

            from = include('src::array.from');
            isFile = include('src::is.file');
            isDirectory = include('src::is.directory');
            getFilePaths = include('src::directory.paths.file.all');
            ext = include('src::path.ext');

            var_init_locked_1608956298360 = true;
        }


        return main.call(this, path, {
            includes,
            excludes,
            suffixes
        });
    };

})();

exports['src::path.ext'] = (() => {








    /**
     * 
     * 获得路径的后缀名
     * 
     * @param {string} path 路径
     * 
     * @return {string} 后缀名
     * 
     */

    const extRe = /\.[^\/\\]+$/;

    function main(path) {

        let result = path.match(extRe);

        if (result) {

            return result[0];
        }
    }

    return function(path) {



        return main.call(this, path);
    };

})();

exports['src::directory.paths.directory'] = (() => {

    let isDirectory;

    let var_init_locked_1608956298366;



    function main(path) {


        /**
         * 
         * 读取目录下所有的直接文件夹路径
         * 
         * @import is.directory
         * 
         * @param {string} path 文件夹目录路径
         * 
         * @return {array} 多个文件夹路径
         * 
         */

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

                if (isDirectory(targetPath)) {

                    paths.push(targetPath);
                }
            }

            return paths;
        }

        return [];

    }

    return function(path) {


        if (!var_init_locked_1608956298366) {

            isDirectory = include('src::is.directory');

            var_init_locked_1608956298366 = true;
        }


        return main.call(this, path);
    };

})();

exports['src::directory.paths.file'] = (() => {

    let isDirectory, isFile;

    let var_init_locked_1608956298371;



    function main(path) {


        /**
         * 
         * 读取目录下所有的直接文件路径
         * 
         * @import is.directory
         * 
         * @import is.file
         * 
         * @param {string} path 文件夹目录路径
         * 
         * @return {array} 多个文件路径
         * 
         */

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

                    paths.push(targetPath);
                }
            }

            return paths;
        }

        return [];

    }

    return function(path) {


        if (!var_init_locked_1608956298371) {

            isDirectory = include('src::is.directory');
            isFile = include('src::is.file');

            var_init_locked_1608956298371 = true;
        }


        return main.call(this, path);
    };

})();

exports['src::directory.readFilePaths'] = (() => {

    let isDirectory, isFile;

    let var_init_locked_1608956298373;



    function main(path) {


        /**
         * 
         * 读取目录下所有的直接文件路径
         * 
         * @import is.directory
         * 
         * @import is.file
         * 
         * @param {string} path 文件夹目录路径
         * 
         * @return {array} 多个文件路径
         * 
         */

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

                    paths.push(targetPath);
                }
            }

            return paths;
        }

        return [];




    }

    return function(path) {


        if (!var_init_locked_1608956298373) {

            isDirectory = include('src::is.directory');
            isFile = include('src::is.file');

            var_init_locked_1608956298373 = true;
        }


        return main.call(this, path);
    };

})();

exports['src::browser.animationFrame.clear'] = (() => {

    let stop, getMap;

    let var_init_locked_1608956298381;



    function main(animationFrameId) {


        /**
         * 
         * 清除一个连续动画帧
         * 
         * @import stop from browser.animationFrame.stop
         * 
         * @import getMap from browser.animationFrame.map
         * 
         * @alias clearAnimationFrame
         * 
         * @param {number} animationFrameId 动画帧编号
         * 
         * @return {mixed} 返回说明 
         * 
         */

        stop(animationFrameId);

        getMap().delete(animationFrameId);


    }

    return function(animationFrameId) {


        if (!var_init_locked_1608956298381) {

            stop = include('src::browser.animationFrame.stop');
            getMap = include('src::browser.animationFrame.map');

            var_init_locked_1608956298381 = true;
        }


        return main.call(this, animationFrameId);
    };

})();

exports['src::browser.animationFrame.map'] = (() => {





    let var_once_value_1608956298385;

    function main() {


        /**
         * 
         * 构建一个持久 Map 对象
         * 
         * @return {Map} 动画帧维护集合
         * 
         * @once
         * 
         */

        return new Map();


    }

    return function() {




        if (var_once_value_1608956298385) {

            return var_once_value_1608956298385;

        }
        return var_once_value_1608956298385 = main.call(this);

    };

})();

exports['src::browser.animationFrame.stop'] = (() => {

    let getMap;

    let var_init_locked_1608956298383;



    function main(animationFrameId) {


        /**
         * 
         * 清除一个连续动画帧
         * 
         * @import getMap from browser.animationFrame.map
         * 
         * @alias stopAnimationFrame
         * 
         * @param {number} animationFrameId 动画帧编号
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let map = getMap();

        if (map.has(animationFrameId)) {

            map.get(animationFrameId).stop();
        }


    }

    return function(animationFrameId) {


        if (!var_init_locked_1608956298383) {

            getMap = include('src::browser.animationFrame.map');

            var_init_locked_1608956298383 = true;
        }


        return main.call(this, animationFrameId);
    };

})();

exports['src::browser.animationFrame.set'] = (() => {

    let getMap;

    let var_init_locked_1608956298387;




    /**
     * 
     * 创建一个连续动画帧
     * 
     * @import getMap from browser.animationFrame.map
     * 
     * @alias setAnimationFrame
     * 
     * @param {function} fn 动画帧回调函数
     * 
     * @param {mixed} scope 动画帧回调函数作用域
     * 
     * @return {number} 动画帧编号
     * 
     * @scoped
     * 
     */

    let count = 0;

    function main(fn, scope) {

        count++;

        let map = getMap(),
            animationFrame = new AnimationFrame(fn, scope);

        map.set(count, animationFrame);

        animationFrame.start();

        return count;
    }

    class AnimationFrame {

        constructor(fn, scope) {

            let me = this;

            me.fn = fn;

            me.scope = scope;
        }

        start() {

            let me = this,
                {
                    fn,
                    scope
                } = me,
                animationFrame = time => {

                    fn.call(scope, time);

                    me.animationFrameId = requestAnimationFrame(animationFrame);

                };

            me.animationFrameId = requestAnimationFrame(animationFrame);
        }

        stop() {

            cancelAnimationFrame(this.animationFrameId);
        }
    }

    return function(fn, scope) {


        if (!var_init_locked_1608956298387) {

            getMap = include('src::browser.animationFrame.map');

            var_init_locked_1608956298387 = true;
        }


        return main.call(this, fn, scope);
    };

})();

exports['src::browser.animationFrame.start'] = (() => {

    let getMap;

    let var_init_locked_1608956298390;



    function main(animationFrameId) {


        /**
         * 
         * 清除一个连续动画帧
         * 
         * @import getMap from browser.animationFrame.map
         * 
         * @alias startAnimationFrame
         * 
         * @param {number} animationFrameId 动画帧编号
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let map = getMap();

        if (map.has(animationFrameId)) {

            map.get(animationFrameId).start();
        }


    }

    return function(animationFrameId) {


        if (!var_init_locked_1608956298390) {

            getMap = include('src::browser.animationFrame.map');

            var_init_locked_1608956298390 = true;
        }


        return main.call(this, animationFrameId);
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

    let var_init_locked_1608956298394;



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


        if (!var_init_locked_1608956298394) {

            isNumber = include('src::is.number');

            var_init_locked_1608956298394 = true;
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

    let var_init_locked_1608956298397;



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


        if (!var_init_locked_1608956298397) {

            isNumber = include('src::is.number');

            var_init_locked_1608956298397 = true;
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

    let var_init_locked_1608956298399;



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


        if (!var_init_locked_1608956298399) {

            isNumber = include('src::is.number');

            var_init_locked_1608956298399 = true;
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

    let var_init_locked_1608956298400;



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


        if (!var_init_locked_1608956298400) {

            clear = include('src::browser.canvas.clear');
            insert = include('src::browser.canvas.data.insert');

            var_init_locked_1608956298400 = true;
        }


        return main.call(this, context, {
            data
        });
    };

})();

exports['src::browser.canvas.draw.line.arc'] = (() => {

    let assign, degree2radian, doBegin, doEnd;

    let var_init_locked_1608956298402;



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

        context.arc(x * scale, y, r, degree2radian(start), degree2radian(end), counterclockwise);

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


        if (!var_init_locked_1608956298402) {

            assign = include('src::object.assign');
            degree2radian = include('src::math.degree2radian');
            doBegin = include('src::browser.canvas.begin');
            doEnd = include('src::browser.canvas.end');

            var_init_locked_1608956298402 = true;
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

exports['src::browser.canvas.draw.line.bezierCurve'] = (() => {







    function main(context, {
        lineDash,
        points,
        ...styles
    }) {


        /**
         * 
         * 绘制贝赛尔曲线
         * 
         * @param {canvas.Context} context 画板的上下文对象
         * 
         * @param {object} [config = {}] 画线配置
         * 
         * @param {array} [config.lineDash = []] 虚线设置
         * 
         * @param {array} [config.points = []] 画线点集合
         * 
         * @param {object} [...config.styles] 画线样式
         * 
         */

        if (points.length === 8) {

            context.beginPath();

            Object.assign(context, styles);

            context.setLineDash(lineDash);

            context.moveTo(...points.slice(0, 2));

            context.bezierCurveTo(...points.slice(2));

            context.stroke();
        }

    }

    return function(context, {
        lineDash = [],
        points = [],
        ...styles
    } = {}) {



        return main.call(this, context, {
            lineDash,
            points,
            ...styles
        });
    };

})();

exports['src::browser.canvas.draw.line'] = (() => {

    let doBegin, doEnd;

    let var_init_locked_1608956298410;



    function main(context, {
        points,
        lineDash,
        independent,
        clip,
        ...styles
    }) {


        /**
         * 
         * 绘制直线
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
         * @param {array} [config.lineDash = []] 虚线设置
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

            Object.assign(context, styles);

            context.setLineDash(lineDash);

            context.moveTo(...points.slice(0, 2));

            context.lineTo(...points.slice(2));

            doEnd(context, clip);
        }

    }

    return function(context, {
        points = [],
        lineDash = [],
        independent = true,
        clip = false,
        ...styles
    } = {}) {


        if (!var_init_locked_1608956298410) {

            doBegin = include('src::browser.canvas.begin');
            doEnd = include('src::browser.canvas.end');

            var_init_locked_1608956298410 = true;
        }


        return main.call(this, context, {
            points,
            lineDash,
            independent,
            clip,
            ...styles
        });
    };

})();

exports['src::browser.canvas.draw.word'] = (() => {

    let assign, scale;

    let var_init_locked_1608956298416;



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


        if (!var_init_locked_1608956298416) {

            assign = include('src::object.assign');
            scale = include('src::browser.scale')();

            var_init_locked_1608956298416 = true;
        }


        return main.call(this, context, {
            text,
            x,
            y,
            ...styles
        });
    };

})();

exports['src::browser.scale'] = (() => {





    let var_once_value_1608956298418;

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




        if (var_once_value_1608956298418) {

            return var_once_value_1608956298418;

        }
        return var_once_value_1608956298418 = main.call(this);

    };

})();

exports['src::browser.canvas.init'] = (() => {

    let browserScale, OS;

    let var_init_locked_1613308339794;



    function main(canvas, scale) {


        /**
         * 
         * 初始化画板
         * 
         * @import browserScale from browser.scale value
         * 
         * @import OS from os.name value
         * 
         * @param {HTMLElement} canvas 画板元素
         * 
         * @param {number} [scale = 1] 外部传入缩放比例
         * 
         * 
         */

        let {
            clientWidth,
            clientHeight
        } = canvas;

        scale *= browserScale;

        /*switch(OS){

          case 'Android':
          case 'iOS':

             scale = 1 ;
        }*/

        canvas.width = clientWidth * scale;

        canvas.height = clientHeight * scale;

        canvas.getContext('2d').scale(scale, scale);

    }

    return function(canvas, scale = 1) {


        if (!var_init_locked_1613308339794) {

            browserScale = include('src::browser.scale')();
            OS = include('src::os.name')();

            var_init_locked_1613308339794 = true;
        }


        return main.call(this, canvas, scale);
    };

})();

exports['src::browser.canvas.player.engine'] = (() => {

    let Observable, isNumber, add;

    let var_init_locked_1608956298422;

    let var_class_1608956298422;



    let var_global_main_1608956298422;

    return function(player) {


        if (!var_init_locked_1608956298422) {

            Observable = include('src::mixin.observable');
            isNumber = include('src::is.number');
            add = include('src::event.listener.add');


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

            var_class_1608956298422 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298422;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.player.engine';
                }

            };

            main = var_class_1608956298422;

            var_global_main_1608956298422 = main;

            var_init_locked_1608956298422 = true;
        }


        return new var_global_main_1608956298422(player);
    };

})();

exports['src::browser.canvas.player'] = (() => {

    let isObject, isString, isFunction, Observable, getData, setData, createEngine, removeAll;

    let var_init_locked_1608956298428;

    let var_class_1608956298428;



    let var_global_main_1608956298428;

    return function(context) {


        if (!var_init_locked_1608956298428) {

            isObject = include('src::is.object.simple');
            isString = include('src::is.string');
            isFunction = include('src::is.function');
            Observable = include('src::mixin.observable');
            getData = include('src::browser.canvas.data.get');
            setData = include('src::browser.canvas.data.set');
            createEngine = include('src::browser.canvas.player.engine');
            removeAll = include('src::array.remove.all');

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


            var_class_1608956298428 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298428;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.player';
                }

            };

            main = var_class_1608956298428;

            var_global_main_1608956298428 = main;

            var_init_locked_1608956298428 = true;
        }


        return new var_global_main_1608956298428(context);
    };

})();

exports['src::browser.canvas.record.api.brush.end'] = (() => {







    const var_current_scope_1608956298432 = new Map();

    return function(config) {





        if (!var_current_scope_1608956298432.has(this)) {

            var_current_scope_1608956298432.set(this, (() => {
                const move = include('src::browser.canvas.record.api.brush.move').bind(this);

                function main(config) {


                    /**
                     * 
                     * 画笔终止
                     * 
                     * @import move from .move scoped
                     * 
                     * @param {object} [config] 画线配置
                     * 
                     */

                    move(config);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298432.get(this);



        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.brush.move'] = (() => {

    let assign, scale;

    let var_init_locked_1608956298434;



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


        if (!var_init_locked_1608956298434) {

            assign = include('src::object.assign');
            scale = include('src::browser.scale')();

            var_init_locked_1608956298434 = true;
        }


        return main.call(this, {
            x,
            y,
            ...styles
        });
    };

})();

exports['src::browser.canvas.record.api.brush.start'] = (() => {

    let assign, scale;

    let var_init_locked_1608956298436;



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


        if (!var_init_locked_1608956298436) {

            assign = include('src::object.assign');
            scale = include('src::browser.scale')();

            var_init_locked_1608956298436 = true;
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

    let var_init_locked_1608956298438;



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


        if (!var_init_locked_1608956298438) {

            draw = include('src::browser.canvas.draw.line');
            scale = include('src::browser.scale')();

            var_init_locked_1608956298438 = true;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser.end'] = (() => {







    const var_current_scope_1608956298440 = new Map();

    return function(config) {





        if (!var_current_scope_1608956298440.has(this)) {

            var_current_scope_1608956298440.set(this, (() => {
                const move = include('src::browser.canvas.record.api.eraser.move').bind(this);

                function main(config) {


                    /**
                     * 
                     * 橡皮擦移动
                     * 
                     * @import move from .move scoped
                     * 
                     * @param {object} [config] 擦除配置
                     * 
                     **/

                    move(config);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298440.get(this);



        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser.move'] = (() => {

    let arc, clear;

    let var_init_locked_1608956298442;



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


        if (!var_init_locked_1608956298442) {

            arc = include('src::browser.canvas.draw.line.arc');
            clear = include('src::browser.canvas.clear');

            var_init_locked_1608956298442 = true;
        }


        return main.call(this, {
            x,
            y,
            size
        });
    };

})();

exports['src::browser.canvas.record.api.eraser.start'] = (() => {







    const var_current_scope_1608956298444 = new Map();

    return function(config) {





        if (!var_current_scope_1608956298444.has(this)) {

            var_current_scope_1608956298444.set(this, (() => {
                const move = include('src::browser.canvas.record.api.eraser.move').bind(this);

                function main(config) {


                    /**
                     * 
                     * 橡皮擦开始
                     * 
                     * @import move from .move scoped
                     * 
                     * @param {object} [config] 擦除配置
                     * 
                     */

                    move(config);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298444.get(this);



        return main.call(this, config);
    };

})();

exports['src::browser.canvas.record.api.eraser'] = (() => {

    let arc, clear;

    let var_init_locked_1608956298447;



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


        if (!var_init_locked_1608956298447) {

            arc = include('src::browser.canvas.draw.line.arc');
            clear = include('src::browser.canvas.clear');

            var_init_locked_1608956298447 = true;
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

    let var_init_locked_1608956298451;



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


        if (!var_init_locked_1608956298451) {

            draw = include('src::browser.canvas.draw.word');

            var_init_locked_1608956298451 = true;
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

    let var_init_locked_1608956298454;



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


        if (!var_init_locked_1608956298454) {

            draw = include('src::browser.canvas.draw.word');

            var_init_locked_1608956298454 = true;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.canvas.recorder'] = (() => {

    let Observable, arrayClear;

    let var_init_locked_1608956298458;

    let var_class_1608956298458;



    let var_global_main_1608956298458;

    return function(context) {


        if (!var_init_locked_1608956298458) {

            Observable = include('src::mixin.observable');
            arrayClear = include('src::array.clear');


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

            var_class_1608956298458 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298458;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.canvas.recorder';
                }

            };

            main = var_class_1608956298458;

            var_global_main_1608956298458 = main;

            var_init_locked_1608956298458 = true;
        }


        return new var_global_main_1608956298458(context);
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

exports['src::browser.element.class.add'] = (() => {

    let isString, isArray, add;

    let var_init_locked_1608956298462;



    function main(el, cls) {


        /**
         * 
         * 添加样式类 
         * 
         * @import is.string
         * 
         * @import is.array
         * 
         * @import add from .add
         * 
         * @param {HTMLElement} el 添加样式类的元素
         * 
         * @param {mixed} cls 样式类
         * 
         */

        if (isString(cls)) {

            el.classList.add(cls);

        } else if (isArray(cls)) {

            for (let item of cls) {

                add(el, item);
            }
        }

    }

    return function(el, cls) {


        if (!var_init_locked_1608956298462) {

            isString = include('src::is.string');
            isArray = include('src::is.array');
            add = include('src::browser.element.class.add');

            var_init_locked_1608956298462 = true;
        }


        return main.call(this, el, cls);
    };

})();

exports['src::browser.element.class.has'] = (() => {







    function main(el, cls) {


        /**
         * 
         * 判断指定元素是否拥有指定样式类
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} cls 样式类
         * 
         * @return {boolean} 如果元素拥有对应样式类则返回 true , 否则返回 false 
         * 
         */

        return el.classList.contains(cls);

    }

    return function(el, cls) {



        return main.call(this, el, cls);
    };

})();

exports['src::browser.element.class.remove'] = (() => {

    let isString, isArray, remove;

    let var_init_locked_1608956298468;



    function main(el, cls) {


        /**
         * 
         * 移除样式类 
         * 
         * @import is.string
         * 
         * @import is.array
         * 
         * @import remove from .remove
         * 
         * @param {HTMLElement} el 移除样式类的元素
         * 
         * @param {mixed} cls 样式类
         * 
         */

        if (isString(cls)) {

            el.classList.remove(cls);

        } else if (isArray(cls)) {

            for (let item of cls) {

                remove(el, item);
            }
        }

    }

    return function(el, cls) {


        if (!var_init_locked_1608956298468) {

            isString = include('src::is.string');
            isArray = include('src::is.array');
            remove = include('src::browser.element.class.remove');

            var_init_locked_1608956298468 = true;
        }


        return main.call(this, el, cls);
    };

})();

exports['src::browser.element.style'] = (() => {

    let isArray, get;

    let var_init_locked_1608956298470;



    function main(el, name, isNumber) {


        /**
         * 
         * 获得元素的样式
         * 
         * @import is.array
         * 
         * @import get from .style
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string|array} name 样式名称
         * 
         * @param {boolean} [isNumber = false] 是否输出为数字 
         * 
         * @return {mixed} 样式值 
         * 
         */

        if (isArray(name)) {

            let names = name,
                result = {};

            for (let name of names) {

                result[name] = get(el, name, isNumber);
            }

            return result;
        }

        let value = getComputedStyle(el, null)[name];

        if (isNumber) {

            return parseFloat(value);
        }

        return value;

    }

    return function(el, name, isNumber = false) {


        if (!var_init_locked_1608956298470) {

            isArray = include('src::is.array');
            get = include('src::browser.element.style');

            var_init_locked_1608956298470 = true;
        }


        return main.call(this, el, name, isNumber);
    };

})();

exports['src::browser.element.xy'] = (() => {







    function main(el) {


        /**
         * 
         * 获得元素的坐标
         * 
         * @param {HTMLElement} el 元素
         * 
         * @return {object} 坐标信息
         * 
         */

        const {
            round
        } = Math;

        let x = 0,
            y = 0;

        if (el !== document && el !== document.body) {

            let {
                left: bodyLeft,
                top: bodyTop
            } = document.body.getBoundingClientRect(), {
                left,
                top
            } = el.getBoundingClientRect();

            x = left - bodyLeft,
                y = top - bodyTop;
        }

        return {
            x: round(x),
            y: round(y)
        };

    }

    return function(el) {



        return main.call(this, el);
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
            detail,
            bubbles: false,
            cancelable: false
        }));


    }

    return function(el, name, detail) {



        return main.call(this, el, name, detail);
    };

})();

exports['src::browser.event.gesture.contextmenu.contextmenu'] = (() => {

    let prevent;

    let var_init_locked_1608956298476;



    function main(e) {


        /**
         * 
         * 阻止默认右击菜单事件
         * 
         * @import prevent from browser.event.prevent
         * 
         * @param {Event} e 事件对象
         * 
         */

        prevent(e);

    }

    return function(e) {


        if (!var_init_locked_1608956298476) {

            prevent = include('src::browser.event.prevent');

            var_init_locked_1608956298476 = true;
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

exports['src::browser.event.gesture.contextmenu.event'] = (() => {

    let bind, longpress, contextmenu;

    let var_init_locked_1608956298480;



    function main() {


        /**
         * 
         * 右键事件配置
         * 
         * @import bind from function.bind
         * 
         * @import longpress from ..longpress
         * 
         * @import contextmenu from .contextmenu
         *
         * @return {array} 事件配置  
         * 
         */

        return [
            'mouseup',
            {
                event: 'contextmenu',
                listener: contextmenu
            },
            {
                event: 'touchstart',
                listener: bind(longpress, this, [
                    'contextmenu'
                ])
            }
        ];

    }

    return function() {


        if (!var_init_locked_1608956298480) {

            bind = include('src::function.bind');
            longpress = include('src::browser.event.gesture.longpress');
            contextmenu = include('src::browser.event.gesture.contextmenu.contextmenu');

            var_init_locked_1608956298480 = true;
        }


        return main.call(this);
    };

})();

exports['src::function.bind'] = (() => {

    let clone, insert, isNumber;

    let var_init_locked_1608956298482;



    function main(fn, scope, args, appendArgs) {


        /**
         * 
         * 函数绑定作用域
         * 
         * @import clone from array.clone
         * 
         * @import insert from array.insert
         * 
         * @import is.number
         * 
         * @param {function} fn 函数
         * 
         * @param {mixed} [scope] 作用域
         * 
         * @param {mixed[]} [args] 函数参数
         * 
         * @param {mixed} [appendArgs = true] 附加参数位置
         * 
         * @return {function} 绑定作用域的函数
         * 
         */

        if (arguments.length <= 2) {

            return fn.bind(scope);

        }

        return function() {

            let callArgs = args || arguments;

            if (appendArgs === true) {

                callArgs = [
                    ...arguments,
                    ...(args || [])
                ];

            } else if (isNumber(appendArgs)) {

                callArgs = clone(arguments);

                insert(callArgs, appendArgs, args);
            }

            return fn.apply(scope || this, callArgs);
        };

    }

    return function(fn, scope, args, appendArgs = true) {


        if (!var_init_locked_1608956298482) {

            clone = include('src::array.clone');
            insert = include('src::array.insert');
            isNumber = include('src::is.number');

            var_init_locked_1608956298482 = true;
        }


        return main.call(this, fn, scope, args, appendArgs);
    };

})();

exports['src::browser.event.listeners'] = (() => {

    let map;

    let var_init_locked_1608956298497;

    let var_once_value_1608956298497;

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


        if (!var_init_locked_1608956298497) {

            map = include('src::map')();

            var_init_locked_1608956298497 = true;
        }



        if (var_once_value_1608956298497) {

            return var_once_value_1608956298497;

        }
        return var_once_value_1608956298497 = main.call(this);

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

    let var_init_locked_1608956298499;



    function main(el, selector) {


        /**
         * 
         * 判断元素及其元素父祖级元素是否匹配选择器
         * 
         * @import is from .is
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


        if (!var_init_locked_1608956298499) {

            is = include('src::browser.selector.is');

            var_init_locked_1608956298499 = true;
        }


        return main.call(this, el, selector);
    };

})();

exports['src::browser.event.stop'] = (() => {

    let isObject;

    let var_init_locked_1608956298503;



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


        if (!var_init_locked_1608956298503) {

            isObject = include('src::is.object.simple');

            var_init_locked_1608956298503 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.listener.add'] = (() => {

    let listeners, is, stopEvent, preventEvent, doAdd, isObject, get;

    let var_init_locked_1608956298494;




    /**
     * 
     * 监听事件
     * 
     * @import listeners from ..listeners value
     * 
     * @import is from browser.selector.parent
     * 
     * @import stopEvent from ..stop
     * 
     * @import preventEvent from ..prevent
     * 
     * @import doAdd from event.listener.add
     * 
     * @import isObject from is.object.simple
     * 
     * @import get from function.get
     * 
     * @param {mixed} target 目标
     * 
     * @param {mixed} event 目标监听事件
     * 
     * @param {mixed} [fn] 目标监听回调
     * 
     * @param {object} [config = {}] 配置
     * 
     */

    function main(target, event, fn, config) {

        if (isObject(event)) {

            let {
                scope,
                ...listeners
            } = event;

            let names = Object.keys(listeners);

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

        } else {

            add(target, event, fn, config);
        }

    }

    function add(target, event, fn, {
        selector,
        stop = false,
        prevent = false,
        scope,
        ...config
    }) {

        if (listeners.has(target, event, fn, scope)) {

            return;
        }

        let useFn = get(fn, scope),
            listener = e => {

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

                        useFn(e);
                    }

                } else {

                    useFn(e);
                }
            };

        listeners.set(target, event, fn, scope, listener);

        doAdd(target, event, listener, {
            options: {
                passive: false
            },
            ...config
        });
    }



    return function(target, event, fn, config = {}) {


        if (!var_init_locked_1608956298494) {

            listeners = include('src::browser.event.listeners')();
            is = include('src::browser.selector.parent');
            stopEvent = include('src::browser.event.stop');
            preventEvent = include('src::browser.event.prevent');
            doAdd = include('src::event.listener.add');
            isObject = include('src::is.object.simple');
            get = include('src::function.get');

            var_init_locked_1608956298494 = true;
        }


        return main.call(this, target, event, fn, config);
    };

})();

exports['src::browser.event.listener.global.add'] = (() => {

    let add;

    let var_init_locked_1608956298490;



    function main(event, fn, config) {


        /**
         * 
         * 监听全局事件
         * 
         * @import add from ..add
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


        if (!var_init_locked_1608956298490) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1608956298490 = true;
        }


        return main.call(this, event, fn, config);
    };

})();

exports['src::browser.event.name.single'] = (() => {

    let isSupportPointer, isSupportTouch;

    let var_init_locked_1608956298505;



    function main(name, e) {


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
         * @param {PointerEvent} [e] 事件对象
         * 
         * @return {mixed} 返回说明 
         * 
         */

        let isTouch = isSupportTouch();

        if (e) {

            let {
                pointerType,
                touches
            } = e;

            if (pointerType === 'touch' || touches) {

                isTouch = true;
            }
        }

        if (isTouch) {

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

    return function(name, e) {


        if (!var_init_locked_1608956298505) {

            isSupportPointer = include('src::is.browser.support.pointer');
            isSupportTouch = include('src::is.browser.support.touch');

            var_init_locked_1608956298505 = true;
        }


        return main.call(this, name, e);
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

exports['src::browser.event.listener.remove'] = (() => {

    let listeners, doRemove, isObject;

    let var_init_locked_1608956298519;




    /**
     * 
     * 去除监听事件
     * 
     * @import listeners from ..listeners value
     * 
     * @import doRemove from event.listener.remove
     * 
     * @import isObject from is.object.simple
     * 
     * @param {mixed} target
     * 
     * @param {mixed} event 目标监听事件
     * 
     * @param {mixed} fn 目标监听回调
     * 
     * @param {object} [scope] 作用域
     * 
     * @return {mixed} 返回说明 
     * 
     */

    function main(target, event, fn, scope) {

        if (isObject(event)) {

            let names = Object.keys(event);

            for (let name of names) {

                if (name !== 'scope') {

                    let fn,
                        listener = event[name];

                    if (isObject(listener)) {

                        fn = listener.fn;

                        scope = scope || listener.scope;

                    } else {

                        fn = listener;
                    }

                    remove(target, name, fn, scope);
                }
            }

        } else {

            remove(target, event, fn, scope);
        }
    }

    function remove(target, event, fn, scope) {

        let listener = listeners.get(target, event, fn, scope);

        if (listener) {

            doRemove(target, event, listener);

            listeners.delete(target, event, fn, scope);
        }
    }

    return function(target, event, fn, scope) {


        if (!var_init_locked_1608956298519) {

            listeners = include('src::browser.event.listeners')();
            doRemove = include('src::event.listener.remove');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956298519 = true;
        }


        return main.call(this, target, event, fn, scope);
    };

})();

exports['src::browser.event.listener.global.remove'] = (() => {

    let remove;

    let var_init_locked_1608956298517;



    function main(event, fn) {


        /**
         * 
         * 去除监听全局事件
         * 
         * @import remove from ..remove
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


        if (!var_init_locked_1608956298517) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1608956298517 = true;
        }


        return main.call(this, event, fn);
    };

})();

exports['src::browser.event.gesture.longpress.disabled'] = (() => {

    let un, getName;

    let var_init_locked_1608956298515;



    function main(e) {


        /**
         * 
         * 取消监听全局事件
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @import getName from browser.event.name.single
         * 
         * @param {Event} e 事件对象
         * 
         */

        let me = this,
            {
                onEnd,
                onMove,
                timer
            } = me;

        if (timer) {

            clearTimeout(timer);
        }

        un(getName('move', e), onMove);

        un(getName('end', e), onEnd);

        delete me.onMove;

        delete me.onEnd;

        delete me.timer;

        delete me.startPoint;

    }

    return function(e) {


        if (!var_init_locked_1608956298515) {

            un = include('src::browser.event.listener.global.remove');
            getName = include('src::browser.event.name.single');

            var_init_locked_1608956298515 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.longpress.end'] = (() => {







    const var_current_scope_1608956298512 = new Map();

    return function(e) {





        if (!var_current_scope_1608956298512.has(this)) {

            var_current_scope_1608956298512.set(this, (() => {
                const disabled = include('src::browser.event.gesture.longpress.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * @import disabled from .disabled scoped
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    disabled(e);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298512.get(this);



        return main.call(this, e);
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

exports['src::math.point.line.distance'] = (() => {







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

exports['config::event.longpress'] = (() => {

    let get;

    let var_init_locked_1608956298530;



    const config = {
        "minDuration": 600,
        "moveDistance": 30
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1608956298530) {

            get = include('src::object.value.get');

            var_init_locked_1608956298530 = true;
        }


        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.longpress.move'] = (() => {

    let getTouchEvents, getEvent, getDistance, getScale, moveDistance;

    let var_init_locked_1608956298521;



    const var_current_scope_1608956298521 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298521) {

            getTouchEvents = include('src::browser.event.touches');
            getEvent = include('src::browser.event.single');
            getDistance = include('src::math.point.line.distance');
            getScale = include('src::browser.scale');
            moveDistance = config('event.longpress', 'moveDistance');

            var_init_locked_1608956298521 = true;
        }




        if (!var_current_scope_1608956298521.has(this)) {

            var_current_scope_1608956298521.set(this, (() => {
                const disabled = include('src::browser.event.gesture.longpress.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 移动事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getScale from browser.scale
                     * 
                     * @import disabled from .disabled scoped
                     * 
                     * @config moveDistance from event.longpress...moveDistance
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    if (getTouchEvents(e, 'move')) {

                        disabled(e);

                        return;
                    }

                    let me = this,
                        {
                            pageX,
                            pageY
                        } = getEvent(e, 'move'),
                        {
                            startPoint,
                            dispatch
                        } = me;

                    if (Math.round(getDistance({
                            x: pageX,
                            y: pageY
                        }, startPoint)) * getScale() >= moveDistance) {

                        disabled(e);
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298521.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.longpress.enabled'] = (() => {

    let getName, on;

    let var_init_locked_1608956298510;



    const var_current_scope_1608956298510 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298510) {

            getName = include('src::browser.event.name.single');
            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298510 = true;
        }




        if (!var_current_scope_1608956298510.has(this)) {

            var_current_scope_1608956298510.set(this, (() => {
                const onEnd = include('src::browser.event.gesture.longpress.end').bind(this);
                const onMove = include('src::browser.event.gesture.longpress.move').bind(this);

                function main(e) {

                    /**
                     * 
                     * 启用事件
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @import onEnd from .end scoped
                     * 
                     * @import onMove from .move scoped
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this;

                    on(getName('move', e), me.onMove = onMove);

                    on(getName('end', e), me.onEnd = onEnd);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298510.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.longpress.event'] = (() => {

    let getName;

    let var_init_locked_1608956298532;



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


        if (!var_init_locked_1608956298532) {

            getName = include('src::browser.event.name.single');

            var_init_locked_1608956298532 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.longpress'] = (() => {

    let on, getName, getEvent, browserEventGestureLongpressEvent, minDuration;

    let var_init_locked_1608956298485;



    const var_current_scope_1608956298485 = new Map();

    return function(e, event = 'longpress') {


        if (!var_init_locked_1608956298485) {

            on = include('src::browser.event.listener.global.add');
            getName = include('src::browser.event.name.single');
            getEvent = include('src::browser.event.single');
            browserEventGestureLongpressEvent = include('src::browser.event.gesture.longpress.event');
            minDuration = config('event.longpress', 'minDuration');

            var_init_locked_1608956298485 = true;
        }




        if (!var_current_scope_1608956298485.has(this)) {

            var_current_scope_1608956298485.set(this, (() => {
                const enabled = include('src::browser.event.gesture.longpress.enabled').bind(this);
                const disabled = include('src::browser.event.gesture.longpress.disabled').bind(this);

                function main(e, event) {


                    /**
                     * 
                     * 开始事件监听
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import enabled from .longpress.enabled scoped
                     * 
                     * @import disabled from .longpress.disabled scoped
                     * 
                     * @import .longpress.event
                     * 
                     * @config minDuration from event.longpress...minDuration
                     *
                     * @param {Event} e 事件对象
                     * 
                     * @param {string} [event = 'longpress'] 抛出的事件名称
                     * 
                     */

                    let me = this;

                    if (me.startPoint) {

                        return;

                    }

                    let nativeEvent = getEvent(e, 'start'),
                        {
                            pageX: x,
                            pageY: y
                        } = nativeEvent;

                    me.startPoint = {
                        x,
                        y
                    };

                    me.timer = setTimeout(() => {

                        me.dispatch(event, {
                            nativeEvent
                        });

                        disabled(e);

                        if (event === 'longpress') {

                            on(getName('end', e), e => me.dispatch('longpresscancel', {
                                nativeEvent: getEvent(e, 'end')
                            }), {
                                once: true
                            });
                        }

                    }, minDuration);

                    enabled(e);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298485.get(this);



        return main.call(this, e, event);
    };

})();

exports['src::browser.event.gesture.contextmenu'] = (() => {

    let browserEventGestureContextmenuEvent;

    let var_init_locked_1608956298534;



    function main(e) {


        /**
         * 
         * 开始事件监听
         * 
         * @import .contextmenu.event
         *
         * @param {Event} e 事件对象
         * 
         */

        let {
            button
        } = e;

        if (e.button === 2) {

            this.dispatch('contextmenu', {
                nativeEvent: e
            });

        }

    }

    return function(e) {


        if (!var_init_locked_1608956298534) {

            browserEventGestureContextmenuEvent = include('src::browser.event.gesture.contextmenu.event');

            var_init_locked_1608956298534 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1613441962645;



    function main(e) {


        /**
         * 
         * 禁用监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @param {Event} e 事件对象
         * 
         */

        let me = this,
            {
                onStart,
                onMove,
                onEnd
            } = me;

        un(getName('move', e), onStart);

        un(getName('move', e), onMove);

        un(getName('end', e), onEnd);

        delete me.onStart;

        delete me.onMove;

        delete me.onEnd;

        delete me.info;

        delete me.startTime;

        delete me.startPoint;

    }

    return function(e) {


        if (!var_init_locked_1613441962645) {

            getName = include('src::browser.event.name.single');
            un = include('src::browser.event.listener.global.remove');

            var_init_locked_1613441962645 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.enabled'] = (() => {

    let getName, on;

    let var_init_locked_1608956298549;



    const var_current_scope_1608956298549 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298549) {

            getName = include('src::browser.event.name.single');
            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298549 = true;
        }




        if (!var_current_scope_1608956298549.has(this)) {

            var_current_scope_1608956298549.set(this, (() => {
                const onMove = include('src::browser.event.gesture.drag.move.drag').bind(this);
                const onEnd = include('src::browser.event.gesture.drag.end').bind(this);

                function main(e) {


                    /**
                     * 
                     * 启用监听全局事件
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import onMove from .move.drag scoped
                     * 
                     * @import onEnd from .end scoped
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this;

                    on(getName('move', e), me.onMove = onMove);

                    on(getName('end', e), me.onEnd = onEnd);


                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298549.get(this);



        return main.call(this, e);
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

exports['src::browser.event.gesture.drag.move.drag'] = (() => {

    let prevent, getEvent, getTouchEvents;

    let var_init_locked_1608956298553;



    const var_current_scope_1608956298553 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298553) {

            prevent = include('src::browser.event.prevent');
            getEvent = include('src::browser.event.single');
            getTouchEvents = include('src::browser.event.touches');

            var_init_locked_1608956298553 = true;
        }




        if (!var_current_scope_1608956298553.has(this)) {

            var_current_scope_1608956298553.set(this, (() => {
                const updateInfo = include('src::browser.event.gesture.drag.info.update').bind(this);
                const disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 拖动事件监听
                     * 
                     * @import prevent from browser.event.prevent
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import updateInfo from ..info.update scoped
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import disabled from ..disabled scoped
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    prevent(e);

                    if (getTouchEvents(e, 'move')) {

                        disabled(e);

                        return;
                    }

                    let me = this,
                        nativeEvent = getEvent(e, 'move'),
                        {
                            pageX: x,
                            pageY: y
                        } = nativeEvent,
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

                    dispatch('drag', {
                        info,
                        nativeEvent
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298553.get(this);



        return main.call(this, e);
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

    let prevent, getEvent;

    let var_init_locked_1608956298540;



    const var_current_scope_1608956298540 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298540) {

            prevent = include('src::browser.event.prevent');
            getEvent = include('src::browser.event.single');

            var_init_locked_1608956298540 = true;
        }




        if (!var_current_scope_1608956298540.has(this)) {

            var_current_scope_1608956298540.set(this, (() => {
                const updateInfo = include('src::browser.event.gesture.drag.info.update').bind(this);
                const onAxisEnd = include('src::browser.event.gesture.drag.end.axis').bind(this);
                const disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 结束事件监听
                     * 
                     * @import prevent from browser.event.prevent
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import updateInfo from .info.update scoped
                     * 
                     * @import onAxisEnd from .end.axis scoped
                     * 
                     * @import disabled from .disabled scoped
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

                    disabled(e);



                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298540.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.drag.event'] = (() => {

    let getName;

    let var_init_locked_1608956298555;



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


        if (!var_init_locked_1608956298555) {

            getName = include('src::browser.event.name.single');

            var_init_locked_1608956298555 = true;
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

    let getTouchEvents, prevent, getEvent, getName, scale, getDistance, un, minDistance;

    let var_init_locked_1608956298561;



    const var_current_scope_1608956298561 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298561) {

            getTouchEvents = include('src::browser.event.touches');
            prevent = include('src::browser.event.prevent');
            getEvent = include('src::browser.event.single');
            getName = include('src::browser.event.name.single');
            scale = include('src::browser.scale');
            getDistance = include('src::math.point.line.distance');
            un = include('src::browser.event.listener.global.remove');
            minDistance = config('event.drag', 'minDistance');

            var_init_locked_1608956298561 = true;
        }




        if (!var_current_scope_1608956298561.has(this)) {

            var_current_scope_1608956298561.set(this, (() => {
                const enabled = include('src::browser.event.gesture.drag.enabled').bind(this);
                const resetInfo = include('src::browser.event.gesture.drag.info.reset').bind(this);
                const disabled = include('src::browser.event.gesture.drag.disabled').bind(this);

                function main(e) {

                    /**
                     * 
                     * 检查是否启用拖曳事件
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import prevent from browser.event.prevent
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import enabled from ..enabled scoped
                     * 
                     * @import scale from browser.scale
                     * 
                     * @import resetInfo from ..info.reset scoped
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import un from browser.event.listener.global.remove
                     * 
                     * @import disabled from ..disabled scoped
                     * 
                     * @config minDistance from event.drag...minDistance
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */


                    prevent(e);

                    if (getTouchEvents(e, 'move')) {

                        disabled(e);

                        return;
                    }

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

                        let {
                            dragStartNativeEvent
                        } = me;

                        dispatch('dragstart', {
                            nativeEvent: dragStartNativeEvent,
                            info
                        });

                        delete me.dragStartNativeEvent;

                        un(getName('move', e), me.onStart);

                        un(getName('end', e), me.onEnd);

                        enabled(e);
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298561.get(this);



        return main.call(this, e);
    };

})();

exports['config::event.drag'] = (() => {

    let get;

    let var_init_locked_1608956298565;



    const config = {
        "minDistance": 50
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1608956298565) {

            get = include('src::object.value.get');

            var_init_locked_1608956298565 = true;
        }


        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.drag'] = (() => {

    let getEvent, getName, on, browserEventGestureDragEvent;

    let var_init_locked_1608956298568;



    const var_current_scope_1608956298568 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298568) {

            getEvent = include('src::browser.event.single');
            getName = include('src::browser.event.name.single');
            on = include('src::browser.event.listener.global.add');
            browserEventGestureDragEvent = include('src::browser.event.gesture.drag.event');

            var_init_locked_1608956298568 = true;
        }




        if (!var_current_scope_1608956298568.has(this)) {

            var_current_scope_1608956298568.set(this, (() => {
                const disabled = include('src::browser.event.gesture.drag.disabled').bind(this);
                const onStart = include('src::browser.event.gesture.drag.move.start').bind(this);

                function main(e) {


                    /**
                     * 
                     * 启动事件监听
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import disabled from .drag.disabled scoped
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @import onStart from .drag.move.start scoped
                     * 
                     * @import .drag.event
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this;

                    if (me.info) {

                        return;
                    }

                    let {
                        pageX: x,
                        pageY: y,
                        pointerType
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

                    me.dragStartNativeEvent = e;

                    on(getName('move', e), me.onStart = onStart);

                    on(getName('end', e), me.onEnd = () => disabled(e), {
                        once: true
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298568.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.manager.dom'] = (() => {

    let createMap, doDispatch, isString, isObject, isArray, on, off, eventConfig;

    let var_init_locked_1608956298575;

    let var_class_1608956298575;

    let var_once_value_1608956298575;

    let var_global_main_1608956298575;

    return function() {


        if (!var_init_locked_1608956298575) {

            createMap = include('src::map');
            doDispatch = include('src::browser.event.dispatch');
            isString = include('src::is.string');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            on = include('src::browser.event.listener.element.add');
            off = include('src::browser.event.listener.element.remove');
            eventConfig = config('event');


            /**
             * 
             * 传统事件管理
             * 
             * @import createMap from map
             * 
             * @import doDispatch from browser.event.dispatch
             * 
             * @import is.string
             * 
             * @import isObject from is.object.simple
             * 
             * @import is.array
             * 
             * @import on from ....listener.element.add
             * 
             * @import off from ....listener.element.remove
             * 
             * @config eventConfig from event
             * 
             * @once
             * 
             */

            function dispatch(event, params) {

                doDispatch(this, `gesture:${event}`, params);
            }

            function getEvents(name) {

                let events = include(`browser.event.gesture.${name}.event`)();

                if (isString(events)) {

                    return [
                        events
                    ];
                }

                return events;
            }

            function getName(name) {

                return eventConfig[name];
            }

            class main {

                constructor() {

                    let me = this;

                    me.events = createMap();

                }

                install(el, name, options = {}) {

                    let {
                        events
                    } = this;

                    name = getName(name);

                    if (events.has(el, name)) {

                        return;
                    }

                    let scope = {
                            dispatch: dispatch.bind(el)
                        },
                        gestureEvents = getEvents(name),
                        isAddMainListener = false,
                        listeners = [];

                    for (let event of gestureEvents) {

                        if (isString(event) && !isAddMainListener) {

                            let listener = include(`browser.event.gesture.${name}`).bind(scope);

                            listeners.push(listener);

                            on(el, event, listener, options);

                            isAddMainListener = true;

                        } else if (isObject(event)) {

                            let {
                                event: name,
                                listener: fn
                            } = event,
                            listener = fn.bind(scope);

                            listeners.push(listener);

                            on(el, name, listener, options);
                        }
                    }

                    events.set(el, name, listeners);
                }

                uninstall(el, name) {

                    name = getName(name);

                    let {
                        events
                    } = this,
                    listeners = events.get(el, name);

                    if (isArray(listeners)) {

                        let gestureEvents = getEvents(name),
                            {
                                length: len
                            } = gestureEvents;

                        for (let i = 0; i < len; i++) {

                            let event = gestureEvents[i],
                                listener = listeners[i];

                            if (isString(event)) {

                                off(el, event, listener);

                            } else if (isObject(event)) {

                                let {
                                    event: name
                                } = event;

                                off(el, name, listener);
                            }
                        }

                        events.delete(el, name);
                    }


                }
            }

            var_class_1608956298575 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298575;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::browser.event.gesture.manager.dom';
                }

            };

            main = var_class_1608956298575;

            var_global_main_1608956298575 = main;

            var_init_locked_1608956298575 = true;
        }



        if (var_once_value_1608956298575) {

            return var_once_value_1608956298575;

        }
        return var_once_value_1608956298575 = new var_global_main_1608956298575();

    };

})();

exports['src::browser.event.listener.element.add'] = (() => {

    let add;

    let var_init_locked_1608956298578;



    function main(el, event, fn, config) {


        /**
         * 
         * 监听元素事件
         * 
         * @import add from ..add
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


        if (!var_init_locked_1608956298578) {

            add = include('src::browser.event.listener.add');

            var_init_locked_1608956298578 = true;
        }


        return main.call(this, el, event, fn, config);
    };

})();

exports['src::browser.event.listener.element.remove'] = (() => {

    let remove;

    let var_init_locked_1608956298580;



    function main(el, event, fn, scope) {


        /**
         * 
         * 去除监听元素事件
         * 
         * @import remove from ..remove
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} event 目标监听事件
         * 
         * @param {function} fn 目标监听回调
         * 
         * @param {mixed} scope 作用域
         * 
         * 
         */

        remove(el, event, fn, scope);

    }

    return function(el, event, fn, scope) {


        if (!var_init_locked_1608956298580) {

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1608956298580 = true;
        }


        return main.call(this, el, event, fn, scope);
    };

})();

exports['config::event'] = (() => {

    let get;

    let var_init_locked_1608956298582;



    const config = {
        "tap": "tap",
        "dragstart": "drag",
        "drag": "drag",
        "dragend": "drag",
        "singletap": "tap.double",
        "doubletap": "tap.double",
        "longpress": "longpress",
        "longpresscancel": "longpress",
        "pinchstart": "pinch",
        "pinch": "pinch",
        "pinchend": "pinch"
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1608956298582) {

            get = include('src::object.value.get');

            var_init_locked_1608956298582 = true;
        }


        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.manager.jsx'] = (() => {

    let capitalize;

    let var_init_locked_1608956298586;




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

            include(`browser.event.gesture.${event}.event`);

            return true;

        } catch (err) {

        }

        return false;
    }

    function getGestureImplStartEventName(event) {

        switch (include(`browser.event.gesture.${event}.event`)()) {

            case 'pointerdown':

                return 'onPointerDown';

            case 'mousedown':

                return 'onMouseDown';

            case 'touchstart':

                return 'onTouchStart';
        }

    }

    function getGestureImplStartEventListener(event, listeners) {

        return include(`browser.event.gesture.${event}`).bind({
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


        if (!var_init_locked_1608956298586) {

            capitalize = include('src::string.capitalize');

            var_init_locked_1608956298586 = true;
        }


        return main.call(this, config);
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

exports['src::browser.event.gesture.pinch.disabled'] = (() => {

    let un;

    let var_init_locked_1608956298591;



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


        if (!var_init_locked_1608956298591) {

            un = include('src::browser.event.listener.global.remove');

            var_init_locked_1608956298591 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.pinch.enabled'] = (() => {

    let on;

    let var_init_locked_1608956298593;



    const var_current_scope_1608956298593 = new Map();

    return function() {


        if (!var_init_locked_1608956298593) {

            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298593 = true;
        }




        if (!var_current_scope_1608956298593.has(this)) {

            var_current_scope_1608956298593.set(this, (() => {
                const onMove = include('src::browser.event.gesture.pinch.move.start').bind(this);
                const onEnd = include('src::browser.event.gesture.pinch.end').bind(this);

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

                return main;

            })());
        }

        const main = var_current_scope_1608956298593.get(this);



        return main.call(this);
    };

})();

exports['src::math.point.line.center'] = (() => {







    function main(point1, point2) {

        /**
         * 
         * 计算线段的中心点坐标
         * 
         * @param {object} point1 第一个点的位置
         * 
         * @param {object} point2 第二个点的位置
         * 
         * @return {object} 中心点坐标
         * 
         */
        return {
            x: (point1.x + point2.x) / 2,
            y: (point1.y + point2.y) / 2
        };

    }

    return function(point1, point2) {



        return main.call(this, point1, point2);
    };

})();

exports['src::browser.event.gesture.pinch.move.pinch'] = (() => {

    let getTouchEvents, stop, getDistance, getCenterXY, un;

    let var_init_locked_1608956298602;



    const var_current_scope_1608956298602 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298602) {

            getTouchEvents = include('src::browser.event.touches');
            stop = include('src::browser.event.stop');
            getDistance = include('src::math.point.line.distance');
            getCenterXY = include('src::math.point.line.center');
            un = include('src::browser.event.listener.global.remove');

            var_init_locked_1608956298602 = true;
        }




        if (!var_current_scope_1608956298602.has(this)) {

            var_current_scope_1608956298602.set(this, (() => {
                const onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

                function main(e) {

                    /**
                     * 
                     * 缩放进行事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import stop from browser.event.stop
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getCenterXY from math.point.line.center
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
                        startXY = {
                            x: firstTouch.pageX,
                            y: firstTouch.pageY
                        },
                        endXY = {
                            x: lastTouch.pageX,
                            y: lastTouch.pageY
                        },
                        distance = getDistance(startXY, endXY),
                        {
                            startDistance,
                            dispatch
                        } = this;

                    dispatch('pinch', {
                        distance,
                        point: getCenterXY(startXY, endXY),
                        scale: distance / startDistance
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298602.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.move.start'] = (() => {

    let getTouchEvents, stop, getDistance, getCenterXY, un, on;

    let var_init_locked_1608956298595;



    const var_current_scope_1608956298595 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298595) {

            getTouchEvents = include('src::browser.event.touches');
            stop = include('src::browser.event.stop');
            getDistance = include('src::math.point.line.distance');
            getCenterXY = include('src::math.point.line.center');
            un = include('src::browser.event.listener.global.remove');
            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298595 = true;
        }




        if (!var_current_scope_1608956298595.has(this)) {

            var_current_scope_1608956298595.set(this, (() => {
                const onMove = include('src::browser.event.gesture.pinch.move.pinch').bind(this);

                function main(e) {

                    /**
                     * 
                     * 缩放开始事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import stop from browser.event.stop
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getCenterXY from math.point.line.center
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
                        firstXY = {
                            x: firstTouch.pageX,
                            y: firstTouch.pageY
                        },
                        lastXY = {
                            x: lastTouch.pageX,
                            y: lastTouch.pageY
                        },
                        distance = getDistance(firstXY, lastXY),
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
                        point: getCenterXY(firstXY, lastXY)
                    });

                    un('touchmove', me.onStart);

                    on('touchmove', me.onMove = onMove);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298595.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.end'] = (() => {

    let stop;

    let var_init_locked_1608956298608;



    const var_current_scope_1608956298608 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298608) {

            stop = include('src::browser.event.stop');

            var_init_locked_1608956298608 = true;
        }




        if (!var_current_scope_1608956298608.has(this)) {

            var_current_scope_1608956298608.set(this, (() => {
                const disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 结束事件监听
                     * 
                     * @import stop from browser.event.stop
                     * 
                     * @import disabled from .disabled scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956298608.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.pinch.event'] = (() => {







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

exports['src::browser.event.gesture.pinch'] = (() => {

    let getTouchEvents, on, browserEventGesturePinchEvent;

    let var_init_locked_1608956298612;



    const var_current_scope_1608956298612 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298612) {

            getTouchEvents = include('src::browser.event.touches');
            on = include('src::browser.event.listener.global.add');
            browserEventGesturePinchEvent = include('src::browser.event.gesture.pinch.event');

            var_init_locked_1608956298612 = true;
        }




        if (!var_current_scope_1608956298612.has(this)) {

            var_current_scope_1608956298612.set(this, (() => {
                const enabled = include('src::browser.event.gesture.pinch.enabled').bind(this);
                const disabled = include('src::browser.event.gesture.pinch.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 开始事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @import enabled from .pinch.enabled scoped
                     * 
                     * @import disabled from .pinch.disabled scoped
                     * 
                     * @import .pinch.event
                     *
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this;

                    if (me.onStart) {

                        disabled();
                    }

                    let touches = getTouchEvents(e, 'start');

                    if (touches) {

                        enabled();
                    }


                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298612.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.react'] = (() => {

    let jsx;

    let var_init_locked_1608956298614;



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


        if (!var_init_locked_1608956298614) {

            jsx = include('src::browser.event.gesture.manager.jsx');

            var_init_locked_1608956298614 = true;
        }


        return main.call(this, config);
    };

})();

exports['src::browser.event.gesture.swipe.methods.cancel'] = (() => {

    let disabled, dispatch;

    let var_init_locked_1608956298616;



    function main(el, event, e) {

        /**
         * 
         * 取消滑动事件
         * 
         * @import disabled from browser.event.gesture.swipe.methods.disabled
         * 
         * @import dispatch from browser.event.dispatch
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {Event} event 当前可用事件对象
         * 
         * @param {Event} e 原始事件对象
         * 
         */

        disabled(el);

        dispatch(el, 'touch:swipecancel', {
            browserEvent: e,
            event
        });

    }

    return function(el, event, e) {


        if (!var_init_locked_1608956298616) {

            disabled = include('src::browser.event.gesture.swipe.methods.disabled');
            dispatch = include('src::browser.event.dispatch');

            var_init_locked_1608956298616 = true;
        }


        return main.call(this, el, event, e);
    };

})();

exports['src::object.data.name.signature'] = (() => {





    let var_once_value_1608956298631;

    function main() {

        /**
         * 
         * 用于生成当前生命周期唯一签名
         * 
         * @once
         * 
         * @return {string}
         * 
         */

        return `zbee-key-${Date.now()}`;

    }

    return function() {




        if (var_once_value_1608956298631) {

            return var_once_value_1608956298631;

        }
        return var_once_value_1608956298631 = main.call(this);

    };

})();

exports['src::object.data.name'] = (() => {

    let signature;

    let var_init_locked_1608956298628;



    function main(name) {

        /**
         * 
         * 获取可以设置的属性名称
         * 
         * @import signature from object.data.name.signature
         * 
         * @param {string} name 属性名称
         * 
         * @return {string} 可用的属性名称
         * 
         */

        return `${signature()}-${name}`;

    }

    return function(name) {


        if (!var_init_locked_1608956298628) {

            signature = include('src::object.data.name.signature');

            var_init_locked_1608956298628 = true;
        }


        return main.call(this, name);
    };

})();

exports['src::object.data.get'] = (() => {

    let getName;

    let var_init_locked_1608956298627;



    function main(target, name) {


        /**
         * 
         * 获取元素的具体属性值
         * 
         * @import getName from object.data.name
         * 
         * @param {mixed} target 作用对象
         * 
         * @param {string} name 属性名称
         * 
         * @return {mixed} 对于属性名称的值 
         * 
         */

        return target[getName(name)];


    }

    return function(target, name) {


        if (!var_init_locked_1608956298627) {

            getName = include('src::object.data.name');

            var_init_locked_1608956298627 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::object.data.set'] = (() => {

    let getName;

    let var_init_locked_1608956298633;



    function main(target, name, value) {


        /**
         * 
         * 设置基于元素的具名属性值
         * 
         * @import getName from object.data.name
         * 
         * @param {mixed} target 作用对象
         * 
         * @param {string} name 属性名称
         * 
         * @param {mixed} value 属性值
         * 
         * @return {mixed} 设置后的属性值
         * 
         */

        target[getName(name)] = value;

    }

    return function(target, name, value) {


        if (!var_init_locked_1608956298633) {

            getName = include('src::object.data.name');

            var_init_locked_1608956298633 = true;
        }


        return main.call(this, target, name, value);
    };

})();

exports['src::browser.event.gesture.swipe.methods.onMove'] = (() => {

    let getEvent, cancel, get, set, dispatch, removeEventListener, onMove, getMoveEventName, supportTouch, maxDuration, moveDistance, minDistance, maxOffset;

    let var_init_locked_1608956298622;



    function main(e) {


        /**
         * 
         * 移动事件监听
         * 
         * @import getEvent from browser.event.pointer
         * 
         * @import cancel from browser.event.gesture.swipe.methods.cancel
         * 
         * @import get from object.data.get
         * 
         * @import set from object.data.set
         * 
         * @import dispatch from browser.event.dispatch
         * 
         * @import removeEventListener from browser.html.element.removeWindowEventListener
         * 
         * @import onMove from browser.event.gesture.swipe.methods.onMove
         * 
         * @import getMoveEventName from browser.event.pointer.move
         * 
         * @import supportTouch from browser.support.touch
         * 
         * @config maxDuration from gesture.swipe...maxDuration
         * 
         * @config moveDistance from gesture.swipe...moveDistance
         * 
         * @config minDistance from gesture.swipe...minDistance
         * 
         * @config maxOffset from gesture.swipe...maxOffset
         * 
         * @param {Event} e 事件对象
         * 
         * 
         */

        e.preventDefault();

        let el = this,
            event = getEvent(e),
            x = event.pageX,
            y = event.pageY,
            deltaX = x - get(el, 'swipe:startX'),
            deltaY = y - get(el, 'swipe:startY'),
            absDeltaX = Math.abs(deltaX),
            absDeltaY = Math.abs(deltaY),
            duration = Date.now() - get(el, 'swipe:startTime'),
            isHorizontal = get(el, 'swipe:isHorizontal'),
            isVertical = get(el, 'swipe:isVertical'),
            direction,
            distance;

        if ((supportTouch() && (absDeltaX === 0 && absDeltaY === 0)) || (duration > maxDuration)) {

            return cancel(el, event, e);

        }

        if (isHorizontal && absDeltaY > maxOffset) {

            set(el, 'swipe:isHorizontal', isHorizontal = false);
        }

        if (isVertical && absDeltaX > maxOffset) {

            set(el, 'swipe:isVertical', isVertical = false);
        }

        if (!isHorizontal && !isVertical) {

            return cancel(el, event, e);
        }

        if (!isVertical || !isHorizontal) {

            if (isHorizontal && absDeltaX < minDistance) {

                direction = (deltaX < 0) ? 'left' : 'right';

                distance = absDeltaX;

            } else if (isVertical && absDeltaY < minDistance) {

                direction = (deltaY < 0) ? 'up' : 'down';

                distance = absDeltaY;
            }
        }

        if (direction) {

            removeEventListener(el, getMoveEventName(), onMove);

            dispatch(el, 'touch:swipestart', {
                browserEvent: e,
                event,
                direction,
                distance,
                duration
            });
        }

    }

    return function(e) {


        if (!var_init_locked_1608956298622) {

            getEvent = include('src::browser.event.pointer');
            cancel = include('src::browser.event.gesture.swipe.methods.cancel');
            get = include('src::object.data.get');
            set = include('src::object.data.set');
            dispatch = include('src::browser.event.dispatch');
            removeEventListener = include('src::browser.html.element.removeWindowEventListener');
            onMove = include('src::browser.event.gesture.swipe.methods.onMove');
            getMoveEventName = include('src::browser.event.pointer.move');
            supportTouch = include('src::browser.support.touch');
            maxDuration = config('gesture.swipe', 'maxDuration');
            moveDistance = config('gesture.swipe', 'moveDistance');
            minDistance = config('gesture.swipe', 'minDistance');
            maxOffset = config('gesture.swipe', 'maxOffset');

            var_init_locked_1608956298622 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.swipe.methods.onEnd'] = (() => {

    let cancel, disabled, dispatch, getEvent, get, set, maxDuration, moveDistance, minDistance, maxOffset;

    let var_init_locked_1608956298636;



    function main(e) {


        /**
         * 
         * 结束事件监听
         * 
         * @import cancel from browser.event.gesture.swipe.methods.cancel
         * 
         * @import disabled from browser.event.gesture.swipe.methods.disabled
         * 
         * @import dispatch from browser.event.dispatch
         * 
         * @import getEvent from browser.event.pointer
         * 
         * @import get from object.data.get
         * 
         * @import set from object.data.set
         * 
         * @config maxDuration from gesture.swipe...maxDuration
         * 
         * @config moveDistance from gesture.swipe...moveDistance
         * 
         * @config minDistance from gesture.swipe...minDistance
         * 
         * @config maxOffset from gesture.swipe...maxOffset
         * 
         * @param {Event} e 事件对象
         * 
         */

        e.preventDefault();

        let el = this,
            event = getEvent(e),
            x = event.pageX,
            y = event.pageY,
            deltaX = x - get(el, 'swipe:startX'),
            deltaY = y - get(el, 'swipe:startY'),
            absDeltaX = Math.abs(deltaX),
            absDeltaY = Math.abs(deltaY),
            duration = Date.now() - get(el, 'swipe:startTime'),
            isHorizontal = get(el, 'swipe:isHorizontal'),
            isVertical = get(el, 'swipe:isVertical'),
            direction,
            distance;


        if (isVertical && absDeltaY < minDistance) {

            set(el, 'swipe:isVertical', isVertical = false);
        }

        if (isHorizontal && absDeltaX < minDistance) {

            set(el, 'swipe:isHorizontal', isHorizontal = false);
        }

        if (isHorizontal) {

            direction = (deltaX < 0) ? 'left' : 'right';

            distance = absDeltaX;

        } else if (isVertical) {

            direction = (deltaY < 0) ? 'up' : 'down';

            distance = absDeltaY;
        }

        if (!isHorizontal && !isVertical) {

            return cancel(el, event, e);
        }

        disabled(el);

        dispatch(el, 'touch:swipe', {
            browserEvent: e,
            event,
            direction,
            distance,
            duration
        });

    }

    return function(e) {


        if (!var_init_locked_1608956298636) {

            cancel = include('src::browser.event.gesture.swipe.methods.cancel');
            disabled = include('src::browser.event.gesture.swipe.methods.disabled');
            dispatch = include('src::browser.event.dispatch');
            getEvent = include('src::browser.event.pointer');
            get = include('src::object.data.get');
            set = include('src::object.data.set');
            maxDuration = config('gesture.swipe', 'maxDuration');
            moveDistance = config('gesture.swipe', 'moveDistance');
            minDistance = config('gesture.swipe', 'minDistance');
            maxOffset = config('gesture.swipe', 'maxOffset');

            var_init_locked_1608956298636 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::object.data.remove'] = (() => {

    let getName;

    let var_init_locked_1608956298638;



    function main(target, name) {


        /**
         * 
         * 移除元素指定的属性值
         * 
         * @import getName from object.data.name
         * 
         * @param {mixed} target 作用对象
         * 
         * @param {string} name 属性名称
         * 
         */

        delete target[getName(name)];

    }

    return function(target, name) {


        if (!var_init_locked_1608956298638) {

            getName = include('src::object.data.name');

            var_init_locked_1608956298638 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::browser.event.gesture.swipe.methods.disabled'] = (() => {

    let removeEventListener, onMove, onEnd, getMoveEventName, getUpEventName, get, remove;

    let var_init_locked_1608956298618;



    function main(el) {


        /**
         * 
         * 禁用全局监听
         * 
         * @import removeEventListener from browser.html.element.removeWindowEventListener
         * 
         * @import onMove from browser.event.gesture.swipe.methods.onMove
         * 
         * @import onEnd from browser.event.gesture.swipe.methods.onEnd
         * 
         * @import getMoveEventName from browser.event.pointer.move
         * 
         * @import getUpEventName from browser.event.pointer.up
         * 
         * @import get from object.data.get
         * 
         * @import remove from object.data.remove
         * 
         * @param {HTMLElement} el 元素
         * 
         * 
         */

        removeEventListener(el, getMoveEventName(), onMove);

        removeEventListener(el, getUpEventName(), onEnd);

        remove(el, 'swipe:startTime');

        remove(el, 'swipe:isHorizontal');

        remove(el, 'swipe:isVertical');

        remove(el, 'swipe:startX');

        remove(el, 'swipe:startY');

    }

    return function(el) {


        if (!var_init_locked_1608956298618) {

            removeEventListener = include('src::browser.html.element.removeWindowEventListener');
            onMove = include('src::browser.event.gesture.swipe.methods.onMove');
            onEnd = include('src::browser.event.gesture.swipe.methods.onEnd');
            getMoveEventName = include('src::browser.event.pointer.move');
            getUpEventName = include('src::browser.event.pointer.up');
            get = include('src::object.data.get');
            remove = include('src::object.data.remove');

            var_init_locked_1608956298618 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.event.gesture.swipe.methods.enabled'] = (() => {

    let addEventListener, onMove, onEnd, getMoveEventName, getUpEventName;

    let var_init_locked_1608956298640;



    function main(el) {


        /**
         * 
         * 启动全局监听
         * 
         * @import addEventListener from browser.html.element.addWindowEventListener
         * 
         * @import onMove from browser.event.gesture.swipe.methods.onMove
         * 
         * @import onEnd from browser.event.gesture.swipe.methods.onEnd
         * 
         * @import getMoveEventName from browser.event.pointer.move
         * 
         * @import getUpEventName from browser.event.pointer.up
         * 
         * @param {HTMLElement} el 元素
         * 
         * 
         */

        addEventListener(el, getMoveEventName(), onMove);

        addEventListener(el, getUpEventName(), onEnd);

    }

    return function(el) {


        if (!var_init_locked_1608956298640) {

            addEventListener = include('src::browser.html.element.addWindowEventListener');
            onMove = include('src::browser.event.gesture.swipe.methods.onMove');
            onEnd = include('src::browser.event.gesture.swipe.methods.onEnd');
            getMoveEventName = include('src::browser.event.pointer.move');
            getUpEventName = include('src::browser.event.pointer.up');

            var_init_locked_1608956298640 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.event.gesture.swipe.methods.install'] = (() => {

    let onStart, getEventName;

    let var_init_locked_1608956298646;



    function main(el) {


        /**
         * 
         * 安装事件
         * 
         * @import onStart from browser.event.gesture.swipe.methods.onStart
         * 
         * @import getEventName from browser.event.pointer.down
         * 
         * @param {HTMLElement} el 页面元素
         * 
         * 
         */

        el.addEventListener(getEventName(), onStart);


    }

    return function(el) {


        if (!var_init_locked_1608956298646) {

            onStart = include('src::browser.event.gesture.swipe.methods.onStart');
            getEventName = include('src::browser.event.pointer.down');

            var_init_locked_1608956298646 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.event.gesture.swipe.methods.onStart'] = (() => {

    let getEvent, enabled, set;

    let var_init_locked_1608956298648;



    function main(e) {


        /**
         * 
         * 启动事件监听
         * 
         * @import getEvent from browser.event.pointer
         * 
         * @import enabled from browser.event.gesture.swipe.methods.enabled
         * 
         * @import set from object.data.set
         * 
         * @param {Event} e 事件对象
         * 
         */

        e.preventDefault();

        let event = getEvent(e, true);

        if (!event) {

            return;
        }

        let el = this;

        set(el, 'swipe:startTime', Date.now());

        set(el, 'swipe:isHorizontal', true);

        set(el, 'swipe:isVertical', true);

        set(el, 'swipe:startX', event.pageX);

        set(el, 'swipe:startY', event.pageY);

        enabled(el);

    }

    return function(e) {


        if (!var_init_locked_1608956298648) {

            getEvent = include('src::browser.event.pointer');
            enabled = include('src::browser.event.gesture.swipe.methods.enabled');
            set = include('src::object.data.set');

            var_init_locked_1608956298648 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.swipe.methods.uninstall'] = (() => {







    function main(el) {


        /**
         * 
         * 卸载事件
         * 
         * 
         * @param {HTMLElement} el 页面元素
         * 
         * 
         */

        // 代码实现


    }

    return function(el) {



        return main.call(this, el);
    };

})();

exports['src::browser.event.gesture.swipe.properties.handleEvents'] = (() => {





    let var_once_value_1608956298652;

    function main() {


        /**
         * 
         * 支持事件列表
         * 
         * @once
         * 
         */

        return [
            'touch:swipestart',
            'touch:swipe',
            'touch:swipecancel'
        ];


    }

    return function() {




        if (var_once_value_1608956298652) {

            return var_once_value_1608956298652;

        }
        return var_once_value_1608956298652 = main.call(this);

    };

})();

exports['src::browser.event.gesture.tap.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1608956298654;



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
                onEnd,
                timer
            } = me;

        if (timer) {

            clearTimeout(timer);
        }

        un(getName('move'), onMove);

        un(getName('end'), onEnd);

        delete me.timer;

        delete me.onMove;

        delete me.onEnd;



    }

    return function() {


        if (!var_init_locked_1608956298654) {

            getName = include('src::browser.event.name.single');
            un = include('src::browser.event.listener.global.remove');

            var_init_locked_1608956298654 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.double.disabled'] = (() => {

    let getName, un;

    let var_init_locked_1608956298656;



    function main(e) {


        /**
         * 
         * 取消监听全局事件
         * 
         * @import getName from browser.event.name.single
         * 
         * @import un from browser.event.listener.global.remove
         * 
         * @param {Event} e 事件对象
         * 
         */

        let me = this,
            {
                onMove,
                onEnd,
                timer
            } = me;

        if (timer) {

            clearTimeout(timer);

        }

        un(getName('move', e), onMove);

        un(getName('end', e), onEnd);

        delete me.timer;

        delete me.onMove;

        delete me.onEnd;

        delete me.startPoint;

        delete me.startTime;

        delete me.lastTarget;

        delete me.lastTapTime;



    }

    return function(e) {


        if (!var_init_locked_1608956298656) {

            getName = include('src::browser.event.name.single');
            un = include('src::browser.event.listener.global.remove');

            var_init_locked_1608956298656 = true;
        }


        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.double.enabled'] = (() => {

    let getName, on;

    let var_init_locked_1608956298660;



    const var_current_scope_1608956298660 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298660) {

            getName = include('src::browser.event.name.single');
            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298660 = true;
        }




        if (!var_current_scope_1608956298660.has(this)) {

            var_current_scope_1608956298660.set(this, (() => {
                const onMove = include('src::browser.event.gesture.tap.double.move').bind(this);
                const onEnd = include('src::browser.event.gesture.tap.double.end').bind(this);

                function main(e) {


                    /**
                     * 
                     * 监听全局事件
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import onMove from .move scoped
                     * 
                     * @import onEnd from .end scoped
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     * @param {Event} e
                     * 
                     */

                    let me = this;

                    on(getName('move', e), me.onMove = onMove);

                    on(getName('end', e), me.onEnd = onEnd);


                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298660.get(this);



        return main.call(this, e);
    };

})();

exports['config::event.tap'] = (() => {

    let get;

    let var_init_locked_1608956298666;



    const config = {
        "maxDuration": 600,
        "moveDistance": 100
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1608956298666) {

            get = include('src::object.value.get');

            var_init_locked_1608956298666 = true;
        }


        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.tap.double.move'] = (() => {

    let getTouchEvents, getEvent, getDistance, getScale, moveDistance;

    let var_init_locked_1608956298663;



    const var_current_scope_1608956298663 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298663) {

            getTouchEvents = include('src::browser.event.touches');
            getEvent = include('src::browser.event.single');
            getDistance = include('src::math.point.line.distance');
            getScale = include('src::browser.scale');
            moveDistance = config('event.tap', 'moveDistance');

            var_init_locked_1608956298663 = true;
        }




        if (!var_current_scope_1608956298663.has(this)) {

            var_current_scope_1608956298663.set(this, (() => {
                const disabled = include('src::browser.event.gesture.tap.double.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 移动事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getScale from browser.scale
                     * 
                     * @import disabled from .disabled scoped
                     * 
                     * @config moveDistance from event.tap...moveDistance
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    if (getTouchEvents(e, 'move')) {

                        disabled(e);

                        return;
                    }

                    let me = this,
                        {
                            pageX,
                            pageY
                        } = getEvent(e, 'move'),
                        {
                            startPoint,
                            timer
                        } = me;

                    if (timer) {

                        return;
                    }

                    if (Math.round(getDistance({
                            x: pageX,
                            y: pageY
                        }, startPoint)) * getScale() >= moveDistance) {

                        disabled(e);
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298663.get(this);



        return main.call(this, e);
    };

})();

exports['config::event.tap.double'] = (() => {

    let get;

    let var_init_locked_1608956298672;



    const config = {
        "maxDuration": 600,
        "tapDistance": 200
    };

    function main(key) {

        return get(config, key);

    }


    return function(key) {


        if (!var_init_locked_1608956298672) {

            get = include('src::object.value.get');

            var_init_locked_1608956298672 = true;
        }


        return main.call(this, key);
    };

})();

exports['src::browser.event.gesture.tap.double.end'] = (() => {

    let getTouchEvents, getEvent, getDistance, getScale, stop, maxDuration, tapDistance;

    let var_init_locked_1608956298670;



    const var_current_scope_1608956298670 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298670) {

            getTouchEvents = include('src::browser.event.touches');
            getEvent = include('src::browser.event.single');
            getDistance = include('src::math.point.line.distance');
            getScale = include('src::browser.scale');
            stop = include('src::browser.event.stop');
            maxDuration = config('event.tap.double', 'maxDuration');
            tapDistance = config('event.tap.double', 'tapDistance');

            var_init_locked_1608956298670 = true;
        }




        if (!var_current_scope_1608956298670.has(this)) {

            var_current_scope_1608956298670.set(this, (() => {
                const disabled = include('src::browser.event.gesture.tap.double.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 结束事件监听
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getScale from browser.scale
                     * 
                     * @import disabled from .disabled scoped
                     * 
                     * @import stop from browser.event.stop
                     * 
                     * @config maxDuration from event.tap.double...maxDuration
                     * 
                     * @config tapDistance from event.tap.double...tapDistance
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    if (getTouchEvents(e, 'end')) {

                        disabled(e);

                        return;
                    }

                    let me = this,
                        {
                            pointerType,
                            button
                        } = e;

                    if (pointerType === 'mouse') {

                        if (button !== 0) {

                            disabled(e);

                            return;
                        }
                    }

                    let {
                        startTime,
                        lastTapTime,
                        lastTarget,
                        startPoint,
                        dispatch
                    } = me,
                    nativeEvent = getEvent(e, 'end'),
                        time = Date.now();

                    if (lastTapTime) {

                        if (time - lastTapTime <= maxDuration) {

                            let {
                                pageX,
                                pageY
                            } = nativeEvent;

                            if (Math.round(getDistance({
                                    x: pageX,
                                    y: pageY
                                }, startPoint)) * getScale() <= tapDistance) {

                                if (nativeEvent.target === lastTarget) {

                                    dispatch('doubletap', {
                                        nativeEvent
                                    });
                                }

                            }

                        }

                        disabled(e);

                    } else if (time - startTime > maxDuration) {

                        dispatch('singletap', {
                            nativeEvent
                        });

                        disabled(e);

                    } else {

                        me.lastTapTime = time;

                        me.lastTarget = nativeEvent.target;

                        me.timer = setTimeout(() => {

                            dispatch('singletap', {
                                nativeEvent
                            });

                            disabled(e);

                        }, maxDuration);
                    }



                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298670.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.double.event'] = (() => {

    let getName;

    let var_init_locked_1608956298674;



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


        if (!var_init_locked_1608956298674) {

            getName = include('src::browser.event.name.single');

            var_init_locked_1608956298674 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.double'] = (() => {

    let getEvent, browserEventGestureTapDoubleEvent;

    let var_init_locked_1608956298677;



    const var_current_scope_1608956298677 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298677) {

            getEvent = include('src::browser.event.single');
            browserEventGestureTapDoubleEvent = include('src::browser.event.gesture.tap.double.event');

            var_init_locked_1608956298677 = true;
        }




        if (!var_current_scope_1608956298677.has(this)) {

            var_current_scope_1608956298677.set(this, (() => {
                const enabled = include('src::browser.event.gesture.tap.double.enabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 双击事件实现
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import enabled from .double.enabled scoped
                     * 
                     * @import .double.event
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this;

                    if (me.startPoint) {

                        return;

                    }

                    let {
                        timer
                    } = me;

                    if (timer) {

                        clearTimeout(timer);

                        return;
                    }

                    let nativeEvent = getEvent(e, 'start'),
                        {
                            pageX: x,
                            pageY: y
                        } = nativeEvent;

                    me.startPoint = {
                        x,
                        y
                    };

                    me.startTime = Date.now();

                    enabled(e);

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298677.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.enabled'] = (() => {

    let getName, on;

    let var_init_locked_1608956298680;



    const var_current_scope_1608956298680 = new Map();

    return function() {


        if (!var_init_locked_1608956298680) {

            getName = include('src::browser.event.name.single');
            on = include('src::browser.event.listener.global.add');

            var_init_locked_1608956298680 = true;
        }




        if (!var_current_scope_1608956298680.has(this)) {

            var_current_scope_1608956298680.set(this, (() => {
                const onMove = include('src::browser.event.gesture.tap.move').bind(this);
                const onEnd = include('src::browser.event.gesture.tap.end').bind(this);

                function main() {


                    /**
                     * 
                     * 监听全局事件
                     * 
                     * @import getName from browser.event.name.single
                     * 
                     * @import onMove from .move scoped
                     * 
                     * @import onEnd from .end scoped
                     * 
                     * @import on from browser.event.listener.global.add
                     * 
                     */

                    let me = this;

                    on(getName('move'), me.onMove = onMove);

                    on(getName('end'), me.onEnd = onEnd);



                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298680.get(this);



        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap.move'] = (() => {

    let getEvent, getDistance, getScale, moveDistance;

    let var_init_locked_1608956298682;



    const var_current_scope_1608956298682 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298682) {

            getEvent = include('src::browser.event.single');
            getDistance = include('src::math.point.line.distance');
            getScale = include('src::browser.scale');
            moveDistance = config('event.tap', 'moveDistance');

            var_init_locked_1608956298682 = true;
        }




        if (!var_current_scope_1608956298682.has(this)) {

            var_current_scope_1608956298682.set(this, (() => {
                const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 移动事件监听
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getDistance from math.point.line.distance
                     * 
                     * @import getScale from browser.scale
                     * 
                     * @import disabled from .disabled scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956298682.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.end'] = (() => {

    let getEvent, stop;

    let var_init_locked_1608956298685;



    const var_current_scope_1608956298685 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298685) {

            getEvent = include('src::browser.event.single');
            stop = include('src::browser.event.stop');

            var_init_locked_1608956298685 = true;
        }




        if (!var_current_scope_1608956298685.has(this)) {

            var_current_scope_1608956298685.set(this, (() => {
                const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 结束事件监听
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import disabled from .disabled scoped
                     * 
                     * @import stop from browser.event.stop
                     * 
                     * @param {Event} e 事件对象
                     * 
                     */

                    let me = this,
                        {
                            nativeEvent
                        } = me;

                    me.dispatch('tap', {
                        nativeEvent
                    });

                    disabled();



                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298685.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.tap.event'] = (() => {

    let getName;

    let var_init_locked_1608956298687;



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


        if (!var_init_locked_1608956298687) {

            getName = include('src::browser.event.name.single');

            var_init_locked_1608956298687 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.event.gesture.tap'] = (() => {

    let getEvent, getTouchEvents, browserEventGestureTapEvent, stop, maxDuration;

    let var_init_locked_1608956298691;



    const var_current_scope_1608956298691 = new Map();

    return function(e) {


        if (!var_init_locked_1608956298691) {

            getEvent = include('src::browser.event.single');
            getTouchEvents = include('src::browser.event.touches');
            browserEventGestureTapEvent = include('src::browser.event.gesture.tap.event');
            stop = include('src::browser.event.stop');
            maxDuration = config('event.tap', 'maxDuration');

            var_init_locked_1608956298691 = true;
        }




        if (!var_current_scope_1608956298691.has(this)) {

            var_current_scope_1608956298691.set(this, (() => {
                const enabled = include('src::browser.event.gesture.tap.enabled').bind(this);
                const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e) {


                    /**
                     * 
                     * 开始事件监听
                     * 
                     * @import getEvent from browser.event.single
                     * 
                     * @import getTouchEvents from browser.event.touches
                     * 
                     * @import enabled from .tap.enabled scoped
                     * 
                     * @import disabled from .tap.disabled scoped
                     * 
                     * @config maxDuration from event.tap...maxDuration
                     * 
                     * @import .tap.event
                     * 
                     * @import stop from ..stop
                     *
                     * @param {Event} e 事件对象
                     * 
                     */

                    if (getTouchEvents(e, 'start')) {

                        disabled();

                        return;

                    }

                    let me = this,
                        nativeEvent = getEvent(e, 'start'),
                        {
                            pageX: x,
                            pageY: y,
                            pointerType,
                            button
                        } = nativeEvent;

                    if (pointerType === 'mouse') {

                        if (button !== 0) {

                            return;
                        }
                    }

                    me.startPoint = {
                        x,
                        y
                    };

                    me.nativeEvent = nativeEvent;

                    enabled();

                    me.timer = setTimeout(() => disabled(), maxDuration);


                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298691.get(this);



        return main.call(this, e);
    };

})();

exports['src::browser.event.gesture.vue'] = (() => {

    let generate, EventDom, isObject, isFunction, on, un;

    let var_init_locked_1608956298693;




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
     * @param {mixed} [Vue] VUE 实例
     * 
     * 
     */

    const gesture = Object.freeze({

        bind(el, {
            arg: name,
            value: fn
        }) {

            addEventListener(el, name, fn);

        },

        update(el, {
            arg: name,
            value: fn,
            oldValue: oldFn
        }) {

            if (fn !== oldFn) {

                removeEventListener(el, name, oldFn);

                addEventListener(el, name, fn);
            }
        },

        unbind(el, {
            arg: name,
            value: fn
        }) {

            removeEventListener(el, name, fn);

        }
    });

    function main(Vue) {

        if (Vue) {

            Vue.directive('gesture', gesture);

        } else {

            return {
                gesture
            };
        }
    }

    function addEventListener(el, name, fn) {

        let event = `gesture:${name}`;

        if (isObject(fn)) {

            let {
                fn: listenerFn,
                scope,
                ...options
            } = fn;

            EventDom.install(el, name, options);

            on(el, event, listenerFn, {
                scope
            });

        } else {

            EventDom.install(el, name);

            on(el, event, fn);
        }
    }

    function removeEventListener(el, name, fn) {

        let event = `gesture:${name}`;

        if (isObject(fn)) {

            let {
                fn: listenerFn,
                scope
            } = fn;

            un(el, event, listenerFn, scope);

        } else if (isFunction(fn)) {

            un(el, event, fn);
        }

        EventDom.uninstall(el, name);
    }

    return function(Vue) {


        if (!var_init_locked_1608956298693) {

            generate = include('src::id.generate');
            EventDom = include('src::browser.event.gesture.manager.dom')();
            isObject = include('src::is.object.simple');
            isFunction = include('src::is.function');
            on = include('src::browser.event.listener.element.add');
            un = include('src::browser.event.listener.element.remove');

            var_init_locked_1608956298693 = true;
        }


        return main.call(this, Vue);
    };

})();

exports['src::browser.event.init.cancel'] = (() => {

    let listeners, remove;

    let var_init_locked_1608956298696;



    function main(target) {


        /**
         * 
         * 取消实始化事件应用环境
         * 
         * @import listeners from .listeners value
         * 
         * @import remove from browser.event.listener.remove
         * 
         * @param {HTMLElement} target 事件应用环境元素
         * 
         */

        remove(target, listeners);

    }

    return function(target) {


        if (!var_init_locked_1608956298696) {

            listeners = include('src::browser.event.init.listeners')();
            remove = include('src::browser.event.listener.remove');

            var_init_locked_1608956298696 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::browser.event.init.listeners'] = (() => {

    let prevent, stop;

    let var_init_locked_1608956298698;

    let var_once_value_1608956298698;

    function main() {


        /**
         * 
         * 函数实现说明
         * 
         * @import prevent from ..prevent
         * 
         * @import stop from ..stop
         * 
         * @return {object} 初始化事件应用环境所使用到的事件 
         * 
         * @once
         * 
         */

        const doPrevent = e => {

            let {
                target
            } = e;

            switch (target.nodeName) {

                case 'INPUT':
                case 'TEXTAREA':
                case 'SELECT':

                    return;

                default:

                    if (target.contentEditable === 'true') {

                        let {
                            type
                        } = e;

                        switch (type) {

                            case 'touchstart':
                            case 'touchmove':

                                break;

                            default:

                                return;
                        }
                    }
            }

            prevent(e);
        }

        return {
            touchstart: doPrevent,
            touchmove: doPrevent,
            mousedown: doPrevent,
            keydown: doPrevent,
            mousewheel: doPrevent,
            contextmenu(e) {

                stop(e);

                prevent(e);
            }
        };

    }

    return function() {


        if (!var_init_locked_1608956298698) {

            prevent = include('src::browser.event.prevent');
            stop = include('src::browser.event.stop');

            var_init_locked_1608956298698 = true;
        }



        if (var_once_value_1608956298698) {

            return var_once_value_1608956298698;

        }
        return var_once_value_1608956298698 = main.call(this);

    };

})();

exports['src::browser.event.init'] = (() => {

    let listeners, add, os;

    let var_init_locked_1608956298701;



    function main(target) {


        /**
         * 
         * 实始化事件应用环境
         * 
         * @import listeners from .init.listeners value
         * 
         * @import add from browser.event.listener.add
         * 
         * @import os from os.name value
         * 
         * @param {HTMLElement} target 事件应用环境元素
         * 
         */

        switch (os) {

            case 'iOS':
            case 'Android':

                add(window, listeners);

                break;

            default:

                add(target, listeners);
        }

    }

    return function(target) {


        if (!var_init_locked_1608956298701) {

            listeners = include('src::browser.event.init.listeners')();
            add = include('src::browser.event.listener.add');
            os = include('src::os.name')();

            var_init_locked_1608956298701 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::browser.event.key'] = (() => {

    let isDefined;

    let var_init_locked_1608956298703;




    /**
     * 
     * 得到对应代码的值键值 
     * 
     * @import is.defined
     * 
     * @param {Event} event 键事件对象
     * 
     * @return {mixed} 键值 
     * 
     */

    const KEY_CODES = {
        39: 'RIGHT',
        37: 'LEFT',
        38: 'UP',
        40: 'DOWN',
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

        if (isDefined(shiftKey) && isDefined(keyCode)) {

            return {
                shift: shiftKey,
                key: KEY_CODES[keyCode],
                code: keyCode
            };
        }
    }

    return function(event) {


        if (!var_init_locked_1608956298703) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956298703 = true;
        }


        return main.call(this, event);
    };

})();

exports['src::browser.event.visibility.init'] = (() => {

    let dispatch;

    let var_init_locked_1608956298705;



    function main() {


        /**
         * 
         * 初始化页面隐藏/关闭事件
         * 
         * @import dispatch from ..dispatch
         * 
         */

        document.addEventListener('visibilitychange', () => dispatch(document, document.visibilityState));

    }

    return function() {


        if (!var_init_locked_1608956298705) {

            dispatch = include('src::browser.event.dispatch');

            var_init_locked_1608956298705 = true;
        }


        return main.call(this);
    };

})();

exports['src::browser.html.element.box.page'] = (() => {

    let getXY, getSize;

    let var_init_locked_1608956298707;



    function main(el) {

        /**
         * 
         * 获取元素的领域
         * 
         * @import getXY from browser.html.element.getXY
         * 
         * @import getSize from browser.html.element.getSize
         * 
         * @param {HTMLElement} el
         * 
         * @return {object} 高度与宽度的配置
         * 
         */

        let {
            x,
            y
        } = getXY(el), {
            width,
            height
        } = getSize(el);


        return {
            width,
            height,
            left: x,
            top: y,
            right: x + width,
            bottom: y + height
        };

    }

    return function(el) {


        if (!var_init_locked_1608956298707) {

            getXY = include('src::browser.html.element.getXY');
            getSize = include('src::browser.html.element.getSize');

            var_init_locked_1608956298707 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.html.element.getXY'] = (() => {







    function main(el) {


        /**
         * 
         * 获得元素的坐标
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @return {object} 坐标 
         * 
         */

        const {
            round
        } = Math;

        let
            x = 0,
            y = 0,
            {
                body
            } = document;

        if (el !== document && el !== body) {

            try {

                let bodyRect = body.getBoundingClientRect(),
                    rect = el.getBoundingClientRect();

                x = rect.left - bodyRect.left;
                y = rect.top - bodyRect.top;

            } catch (ex) {

            }
        }

        return {
            x: round(x),
            y: round(y)
        };


    }

    return function(el) {



        return main.call(this, el);
    };

})();

exports['src::browser.html.element.getStyle'] = (() => {

    let isArray, getStyle;

    let var_init_locked_1608956298719;



    function main(el, prop, inline) {


        /**
         * 
         * 获得元素元素样式属性值
         * 
         * @import is.array
         * 
         * @import getStyle from browser.html.element.getStyle
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string|array} prop 属性名称
         * 
         * @param {boolean} [inline = false] 是否获取内联样式值
         * 
         * @return {mixed} 样式属性值
         * 
         */

        if (isArray(prop)) {

            let values = {},
                props = prop;

            for (let prop of props) {

                values[prop] = getStyle(el, prop, inline);
            }

            return values;

        }

        if (inline) {

            return el.style.getPropertyValue(prop);

        } else {

            style = window.getComputedStyle(el, null);

            if (style) {

                return style[prop];

            } else {

                return getStyle(el, prop, true);
            }
        }

    }

    return function(el, prop, inline = false) {


        if (!var_init_locked_1608956298719) {

            isArray = include('src::is.array');
            getStyle = include('src::browser.html.element.getStyle');

            var_init_locked_1608956298719 = true;
        }


        return main.call(this, el, prop, inline);
    };

})();

exports['src::browser.html.element.isStyle'] = (() => {

    let getStyle;

    let var_init_locked_1608956298716;



    function main(el, prop, value) {

        /**
         * 
         * 判断元素的样式属性是否为指定值
         * 
         * @import getStyle from browser.html.element.getStyle
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} prop 属性名称
         * 
         * @param {mixed} value 样式属性值
         * 
         * @return {boolean} 如果样式值匹配则返回 true , 否则返回 false
         * 
         */

        return getStyle(el, prop) === value;


    }

    return function(el, prop, value) {


        if (!var_init_locked_1608956298716) {

            getStyle = include('src::browser.html.element.getStyle');

            var_init_locked_1608956298716 = true;
        }


        return main.call(this, el, prop, value);
    };

})();

exports['src::browser.html.element.getWidth'] = (() => {

    let isStyle;

    let var_init_locked_1608956298714;



    function main(el) {


        /**
         * 
         * 获得元素的宽度
         * 
         * @import isStyle from browser.html.element.isStyle
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @return {number} 元素的宽度 
         * 
         */

        if (isStyle(el, 'display', 'none')) {

            return 0;
        }

        try {

            let {
                left,
                right
            } = el.getBoundingClientRect();

            return right - left;

        } catch (err) {


        }

        return el.offsetWidth;



    }

    return function(el) {


        if (!var_init_locked_1608956298714) {

            isStyle = include('src::browser.html.element.isStyle');

            var_init_locked_1608956298714 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.html.element.getHeight'] = (() => {

    let isStyle;

    let var_init_locked_1608956298722;



    function main(el) {


        /**
         * 
         * 获取元素的高度
         * 
         * @import isStyle from browser.html.element.isStyle
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @return {number} 元素的高度 
         * 
         */


        if (isStyle(el, 'display', 'none')) {

            return 0;
        }

        if (el === document.body) {

            return document.body.clientHeight;
        }

        try {

            let {
                top,
                bottom
            } = el.getBoundingClientRect();

            return top - bottom;

        } catch (err) {


        }

        return el.offsetHeight;

    }

    return function(el) {


        if (!var_init_locked_1608956298722) {

            isStyle = include('src::browser.html.element.isStyle');

            var_init_locked_1608956298722 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.html.element.getSize'] = (() => {

    let getWidth, getHeight;

    let var_init_locked_1608956298712;



    function main(el) {


        /**
         * 
         * 获得元素的尺寸
         * 
         * @import getWidth from browser.html.element.getWidth
         * 
         * @import getHeight from browser.html.element.getHeight
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @return {object} 尺寸
         * 
         */

        return {
            width: getWidth(el),
            height: getHeight(el)
        };


    }

    return function(el) {


        if (!var_init_locked_1608956298712) {

            getWidth = include('src::browser.html.element.getWidth');
            getHeight = include('src::browser.html.element.getHeight');

            var_init_locked_1608956298712 = true;
        }


        return main.call(this, el);
    };

})();

exports['src::browser.html.element.position'] = (() => {

    let isStyle, setStyle, isDefined, setXY;

    let var_init_locked_1608956298728;



    function main(el, pos, zIndex, x, y) {


        /**
         * 
         * 设置元素定位方式
         * 
         * @import isStyle from browser.html.element.isStyle
         * 
         * @import setStyle from browser.html.element.setStyle
         * 
         * @import is.defined
         * 
         * @import setXY from browser.html.element.setXY
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {string} [pos] 定位方式
         * 
         * @param {number} [zIndex] 层次设置
         * 
         * @param {number} [x] 横坐标
         * 
         * @param {number} [y] 纵坐标
         * 
         * @return {mixed} 返回说明 
         * 
         */

        if (el !== document && el !== document.body) {

            if (!pos && isStyle(el, 'position', 'static')) {

                setStyle(el, 'position', 'relative');

            } else if (pos) {

                setStyle(el, 'position', pos);
            }

            if (isDefined(zIndex)) {

                setStyle(el, 'zindex', zIndex);
            }

            if (x || y) {

                setXY(el, x || false, y || false);
            }
        }


    }

    return function(el, pos, zIndex, x, y) {


        if (!var_init_locked_1608956298728) {

            isStyle = include('src::browser.html.element.isStyle');
            setStyle = include('src::browser.html.element.setStyle');
            isDefined = include('src::is.defined');
            setXY = include('src::browser.html.element.setXY');

            var_init_locked_1608956298728 = true;
        }


        return main.call(this, el, pos, zIndex, x, y);
    };

})();

exports['src::browser.html.element.setStyle'] = (() => {

    let isString, setStyle;

    let var_init_locked_1608956298731;



    function main(el, prop, value) {


        /**
         * 
         * 设置元素样式
         * 
         * @import is.string
         * 
         * @import setStyle from browser.html.element.setStyle
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {string|object} prop 属性名称
         * 
         * @param {mixed} [value] 属性值
         * 
         */

        if (isString(prop)) {

            el.style.setProperty(prop, value);

        } else {

            let names = Object.keys(prop);

            for (let name of names) {

                setStyle(el, name, prop[name]);
            }
        }

    }

    return function(el, prop, value) {


        if (!var_init_locked_1608956298731) {

            isString = include('src::is.string');
            setStyle = include('src::browser.html.element.setStyle');

            var_init_locked_1608956298731 = true;
        }


        return main.call(this, el, prop, value);
    };

})();

exports['src::browser.html.element.translateXY'] = (() => {

    let getStyle, getXY, isNumber;

    let var_init_locked_1608956298739;



    function main(el, x, y) {


        /**
         * 
         * 转换元素坐标值
         * 
         * @import getStyle from browser.html.element.getStyle
         * 
         * @import getXY from browser.html.element.getXY
         * 
         * @import is.number
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {number} x 横坐标
         * 
         * @param {number} y 纵坐标
         * 
         * @return {object} 转换后的坐标值 
         * 
         */

        let {
            position,
            left,
            top
        } = getStyle(el, [
                'position',
                'top',
                'left'
            ]),
            isRelative = position === 'relative', {
                x: orignX,
                y: orginY
            } = getXY(el);

        left = parseFloat(left);

        top = parseFloat(top);

        if (isNaN(left)) {

            left = isRelative ? 0 : el.offsetLeft;
        }

        if (isNaN(top)) {

            top = isRelative ? 0 : el.offsetTop;
        }

        return {
            x: x - orignX + left,
            y: y - orginY + top
        };

    }

    return function(el, x, y) {


        if (!var_init_locked_1608956298739) {

            getStyle = include('src::browser.html.element.getStyle');
            getXY = include('src::browser.html.element.getXY');
            isNumber = include('src::is.number');

            var_init_locked_1608956298739 = true;
        }


        return main.call(this, el, x, y);
    };

})();

exports['src::browser.html.element.translatePoints'] = (() => {

    let translateXY;

    let var_init_locked_1608956298736;



    function main(el, x, y) {


        /**
         * 
         * 转换元素坐标值
         * 
         * @import translateXY from browser.html.element.translateXY
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {number} x 横坐标
         * 
         * @param {number} y 纵坐标
         * 
         * @return {object} 转换后的坐标值 
         * 
         */

        let {
            x: left,
            y: top
        } = translateXY(el, x, y);

        return {
            left,
            top
        };

    }

    return function(el, x, y) {


        if (!var_init_locked_1608956298736) {

            translateXY = include('src::browser.html.element.translateXY');

            var_init_locked_1608956298736 = true;
        }


        return main.call(this, el, x, y);
    };

})();

exports['src::browser.html.element.setXY'] = (() => {

    let translatePoints, position;

    let var_init_locked_1608956298734;



    function main(el, x, y) {


        /**
         * 
         * 设置元素坐标
         * 
         * @import translatePoints from browser.html.element.translatePoints
         * 
         * @import position from browser.html.element.position
         * 
         * @param {HTMLElement} el 作用元素
         * 
         * @param {number} x 横坐标
         * 
         * @param {number} y 纵坐标
         * 
         */

        let {
            top,
            left
        } = translatePoints(el, x, y), {
                style
            } = el,
            pos;

        position(el);

        style.top = `${top}px`;

        style.left = `${left}px`;

    }

    return function(el, x, y) {


        if (!var_init_locked_1608956298734) {

            translatePoints = include('src::browser.html.element.translatePoints');
            position = include('src::browser.html.element.position');

            var_init_locked_1608956298734 = true;
        }


        return main.call(this, el, x, y);
    };

})();

exports['src::browser.html.element.style.get'] = (() => {







    function main(el, prop) {

        /**
         * 
         * 获得元素元素样式属性值
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} prop 属性名称
         * 
         * @return {mixed} 样式属性值
         * 
         */

        let cs = window.getComputedStyle(el, '');

        if (cs) {

            return cs[prop];
        }

    }

    return function(el, prop) {



        return main.call(this, el, prop);
    };

})();

exports['src::browser.html.element.style.is'] = (() => {

    let get;

    let var_init_locked_1608956298743;



    function main(el, prop, value) {

        /**
         * 
         * 判断元素的样式属性是否为指定值
         * 
         * @import get from browser.html.element.style.get
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} prop 属性名称
         * 
         * @param {mixed} value 样式属性值
         * 
         * @return {boolean} 如果样式值匹配则返回 true , 否则返回 false
         * 
         */

        return get(prop) === value;

    }

    return function(el, prop, value) {


        if (!var_init_locked_1608956298743) {

            get = include('src::browser.html.element.style.get');

            var_init_locked_1608956298743 = true;
        }


        return main.call(this, el, prop, value);
    };

})();

exports['src::browser.html.element.style.set'] = (() => {







    function main(el, prop, value) {

        /**
         * 
         * 设置元素元素样式属性值
         * 
         * @param {HTMLElement} el 元素
         * 
         * @param {string} prop 属性名称
         * 
         * @param {mixed} value 样式属性值
         * 
         * 
         */

        el.style.setProperty(prop, value);

    }

    return function(el, prop, value) {



        return main.call(this, el, prop, value);
    };

})();

exports['src::browser.html.focus.text'] = (() => {







    function main(inputEl, isCursorEnd) {


        /**
         * 
         * 文本类控件获取焦点
         * 
         * @param {HTMLElement} inputEl 文本类控件
         * 
         * @param {boolean} [isCursorEnd = true] 是否将光标置为输入框最后
         * 
         */

        let len = inputEl.value.length;

        inputEl.setSelectionRange(len, len);

        inputEl.focus();


    }

    return function(inputEl, isCursorEnd = true) {



        return main.call(this, inputEl, isCursorEnd);
    };

})();

exports['src::browser.html.iframe'] = (() => {

    let isHtmlIframe;

    let var_init_locked_1608956298752;



    function main(iframeEl) {

        /**
         * 
         * 获得 iframe 的 contentWindow 引用
         * 
         * @import is.html.iframe
         * 
         * @param {HTMLElement} iframeEl iframe元素引用
         * 
         * @return {Window}
         * 
         */

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


        if (!var_init_locked_1608956298752) {

            isHtmlIframe = include('src::is.html.iframe');

            var_init_locked_1608956298752 = true;
        }


        return main.call(this, iframeEl);
    };

})();

exports['src::object.assign.if'] = (() => {

    let isObject;

    let var_init_locked_1608956298757;




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


        if (!var_init_locked_1608956298757) {

            isObject = include('src::is.object.simple');

            var_init_locked_1608956298757 = true;
        }


        return main.call(this, dest, ...sources);
    };

})();

exports['src::object.contains'] = (() => {

    let getKeys;

    let var_init_locked_1608956298764;



    function main(target, item) {

        /**
         * 
         * 判断是否完全包含指定项
         * 
         * @import getKeys from object.keys
         * 
         * @param {object} target 目标对象
         * 
         * @param {object} item 被包含对象
         * 
         * @return {boolean} 被包含对象的所有数据都包含在目标对象中则返回 true , 否则返回 false
         * 
         */

        let keys = getKeys(item),
            targetKeys = getKeys(target);

        for (let key of keys) {

            if (!targetKeys.includes(key) || get(target, key) !== get(item, key)) {

                return false;
            }
        }

        return true;

    }

    return function(target, item) {


        if (!var_init_locked_1608956298764) {

            getKeys = include('src::object.keys');

            var_init_locked_1608956298764 = true;
        }


        return main.call(this, target, item);
    };

})();

exports['src::object.key.join'] = (() => {

    let isString;

    let var_init_locked_1608956298769;




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


        if (!var_init_locked_1608956298769) {

            isString = include('src::is.string');

            var_init_locked_1608956298769 = true;
        }


        return main.call(this, ...keys);
    };

})();

exports['src::object.keys'] = (() => {

    let isObject, join;

    let var_init_locked_1608956298766;



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


        if (!var_init_locked_1608956298766) {

            isObject = include('src::is.object.simple');
            join = include('src::object.key.join');

            var_init_locked_1608956298766 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::object.data.has'] = (() => {

    let getName;

    let var_init_locked_1608956298771;



    function main(target, name) {


        /**
         * 
         * 判断当前元素是否拥有指定的属性值
         * 
         * @import getName from object.data.name
         * 
         * @param {mixed} target 作用对象
         * 
         * @param {string} name 属性名称
         * 
         * @return {boolean} 如果属性值存在则返回 true ，否则返回 false
         * 
         */

        return target.hasOwnProperty(getName(name));


    }

    return function(target, name) {


        if (!var_init_locked_1608956298771) {

            getName = include('src::object.data.name');

            var_init_locked_1608956298771 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::object.flat'] = (() => {

    let join, isObject;

    let var_init_locked_1608956298776;




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


        if (!var_init_locked_1608956298776) {

            join = include('src::object.key.join');
            isObject = include('src::is.object.simple');

            var_init_locked_1608956298776 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::object.freeze'] = (() => {

    let isObject, isArray;

    let var_init_locked_1608956298778;



    /**
     * 
     * 将对象进行冻结
     * 
     * @param {object} data 作用对象
     * 
     * @param {boolean} [deep = false] 是否深层遍历
     * 
     * @return {object} 冻结后的对象
     * 
     * @import isObject from is.object.simple
     * 
     * @import is.array
     * 
     */

    function main(data, deep) {

        if ((isObject(data) || isArray(data)) && !Object.isFrozen(data)) {

            if (deep) {

                let names = Object.keys(data);

                for (let name of names) {

                    main(data[name], keep);
                }
            }
        }

        return data;
    }



    return function(data, deep = false) {


        if (!var_init_locked_1608956298778) {

            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');

            var_init_locked_1608956298778 = true;
        }


        return main.call(this, data, deep);
    };

})();

exports['src::object.property.undefine'] = (() => {

    let innerName;

    let var_init_locked_1608956298787;



    function main(target, name) {

        /**
         * 
         * 取消定义一个属性
         * 
         * @import innerName from .inner.name
         * 
         * @param {object} target 目标对象
         * 
         * @param {string} name 属性名称
         * 
         */

        delete target[name];

        delete target[innerName(name)];



    }

    return function(target, name) {


        if (!var_init_locked_1608956298787) {

            innerName = include('src::object.property.inner.name');

            var_init_locked_1608956298787 = true;
        }


        return main.call(this, target, name);
    };

})();

exports['src::object.proxy.fly'] = (() => {

    let createProxy;

    let var_init_locked_1608956298789;




    /**
     * 
     * 构建一个共享对象代理
     * 
     * @import createProxy from object.proxy
     * 
     * @param {mixed} target 需要代理的对象
     * 
     * @return {object.Proxy} 代理
     * 
     */

    let proxy;

    function main(target) {

        if (!proxy) {

            proxy = createProxy();
        }

        proxy.target = target;

        return proxy;
    }

    return function(target) {


        if (!var_init_locked_1608956298789) {

            createProxy = include('src::object.proxy');

            var_init_locked_1608956298789 = true;
        }


        return main.call(this, target);
    };

})();

exports['src::object.value.set'] = (() => {

    let isObject, split;

    let var_init_locked_1608956298794;



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


        if (!var_init_locked_1608956298794) {

            isObject = include('src::is.object');
            split = include('src::string.split');

            var_init_locked_1608956298794 = true;
        }


        return main.call(this, target, key, value);
    };

})();

exports['src::class.name'] = (() => {

    let isObject;

    let var_init_locked_1608956298797;



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


        if (!var_init_locked_1608956298797) {

            isObject = include('src::is.object');

            var_init_locked_1608956298797 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::date.constructor'] = (() => {

    let isString, discernDateFormatString;

    let var_init_locked_1613308340091;



    function main(data) {


        /**
         * 
         * 初始化日期时间对象
         * 
         * @import is.string
         * 
         * @import discernDateFormatString from date.format.discern
         * 
         * @param {mixed} data 日期时间数据
         * 
         * @require dayjs
         * 
         */

        const dayjs = require('dayjs');

        let me = this,
            dateFormatString = discernDateFormatString(data);

        me.dateFormatString = dateFormatString;

        if (isString(data)) {

            me.date = dayjs(data, dateFormatString);

        } else {

            me.date = dayjs(data);
        }

    }

    return function(data) {


        if (!var_init_locked_1613308340091) {

            isString = include('src::is.string');
            discernDateFormatString = include('src::date.format.discern');

            var_init_locked_1613308340091 = true;
        }


        return main.call(this, data);
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

exports['src::date.get'] = (() => {

    let isDefined;

    let var_init_locked_1608956298802;



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


        if (!var_init_locked_1608956298802) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956298802 = true;
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

exports['src::date.hours'] = (() => {







    function main() {


        /**
         * 
         * 获得小时数
         * 
         * @return {number} 小时数 
         * 
         */

        return this.date.hour();

    }

    return function() {



        return main.call(this);
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

exports['src::date.minute.add'] = (() => {







    function main(value) {


        /**
         * 
         * 分钟增量
         * 
         * @param {number} value 增量值
         * 
         */

        let me = this,
            {
                date
            } = me;

        me.date = date.add(value, 'minute');

    }

    return function(value) {



        return main.call(this, value);
    };

})();

exports['src::date.minutes'] = (() => {







    function main() {


        /**
         * 
         * 获得分钟数
         * 
         * @return {number} 分钟数 
         * 
         */

        return this.date.minute();

    }

    return function() {



        return main.call(this);
    };

})();

exports['src::date.next.week'] = (() => {

    let next;

    let var_init_locked_1608956298807;



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


        if (!var_init_locked_1608956298807) {

            next = include('src::date.next');

            var_init_locked_1608956298807 = true;
        }


        return main.call(this, date);
    };

})();

exports['src::date.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1608956298808;



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


        if (!var_init_locked_1608956298808) {

            get = include('src::date.get');
            getProperty = include('src::date.get.properties');
            isDate = include('src::is.date');

            var_init_locked_1608956298808 = true;
        }


        return main.call(this, date, step);
    };

})();

exports['src::date.prev.week'] = (() => {

    let prev;

    let var_init_locked_1608956298810;



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


        if (!var_init_locked_1608956298810) {

            prev = include('src::date.prev');

            var_init_locked_1608956298810 = true;
        }


        return main.call(this, date);
    };

})();

exports['src::date.prev'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1608956298812;



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


        if (!var_init_locked_1608956298812) {

            get = include('src::date.get');
            getProperty = include('src::date.get.properties');
            isDate = include('src::is.date');

            var_init_locked_1608956298812 = true;
        }


        return main.call(this, date, step);
    };

})();

exports['src::date.string'] = (() => {







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

exports['src::json.convert'] = (() => {







    function main(data) {


        /**
         * 
         * 将指定数据转换成简单的数据
         * 
         * @param {mixed} data 数据
         * 
         * @return {mixed} 简单数据 
         * 
         */

        try {

            return JSON.parse(JSON.stringify(data));

        } catch (err) {


        }

        return {};

    }

    return function(data) {



        return main.call(this, data);
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

exports['src::math.from'] = (() => {







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

exports['src::math.point.rect.anchor'] = (() => {

    let isArray, getAnchor;

    let var_init_locked_1608956298825;



    function main({
        x,
        y
    }, {
        width,
        height
    }, anchor) {


        /**
         * 
         * 根据坐标获得相应方位的坐标
         * 
         * @import is.array
         * 
         * @import getAnchor from math.point.rect.anchor
         * 
         * @param {object} xy 坐标
         * 
         * @param {number} xy.x 横坐标
         * 
         * @param {number} xy.y 纵坐标
         * 
         * @param {object} size 尺寸
         * 
         * @param {number} size.width 宽度
         * 
         * @param {number} size.height 高度
         * 
         * @param {string|array} [anchor='tl'] 方位
         * 
         * @return {object} 方位坐标
         * 
         */

        if (isArray(anchor)) {

            let result = [],
                xy = {
                    x,
                    y
                },
                size = {
                    width,
                    height
                };

            for (let item of anchor) {

                result.push(getAnchor(xy, size, item));
            }

            return result;

        } else {

            switch (anchor) {

                case 'tl':

                    return {
                        x,
                        y
                    };

                case 't':

                    return {
                        x: x + width / 2,
                            y
                    };

                case 'tr':

                    return {
                        x: x + width,
                            y
                    };

                case 'r':

                    return {
                        x: x + width,
                            y: y + height / 2
                    };

                case 'br':

                    return {
                        x: x + width,
                            y: y + height
                    };

                case 'b':

                    return {
                        x: x + width / 2,
                            y: y + height
                    };

                case 'bl':

                    return {
                        x,
                        y: y + height
                    };

                case 'l':

                    return {
                        x,
                        y: y + height / 2
                    };

                case 'c':

                    return {
                        x: x + width / 2,
                            y: y + height / 2
                    };
            }
        }



    }

    return function({
        x,
        y
    }, {
        width,
        height
    }, anchor = 'tl') {


        if (!var_init_locked_1608956298825) {

            isArray = include('src::is.array');
            getAnchor = include('src::math.point.rect.anchor');

            var_init_locked_1608956298825 = true;
        }


        return main.call(this, {
            x,
            y
        }, {
            width,
            height
        }, anchor);
    };

})();

exports['src::math.point.rect.anchorBy'] = (() => {







    function main({
        x,
        y
    }, {
        width,
        height
    }, anchor) {


        /**
         * 
         * 根据方位的坐标推算出真正的坐标
         * 
         * @param {object} xy 坐标
         * 
         * @param {number} xy.x 横坐标
         * 
         * @param {number} xy.y 纵坐标
         * 
         * @param {object} size 尺寸
         * 
         * @param {number} size.width 宽度
         * 
         * @param {number} size.height 高度
         * 
         * @param {string} [anchor='tl'] 方位
         * 
         * @return {object} 坐标
         * 
         */

        switch (anchor) {

            case 'tl':

                return {
                    x,
                    y
                };

            case 't':

                return {
                    x: x - width / 2,
                        y
                };

            case 'tr':

                return {
                    x: x - width,
                        y
                };

            case 'r':

                return {
                    x: x - width,
                        y: y - height / 2
                };

            case 'br':

                return {
                    x: x - width,
                        y: y - height
                };

            case 'b':

                return {
                    x: x - width / 2,
                        y: y - height
                };

            case 'bl':

                return {
                    x,
                    y: y - height
                };

            case 'l':

                return {
                    x,
                    y: y - height / 2
                };

            case 'c':

                return {
                    x: x - width / 2,
                        y: y - height / 2
                };
        }

    }

    return function({
        x,
        y
    }, {
        width,
        height
    }, anchor = 'tl') {



        return main.call(this, {
            x,
            y
        }, {
            width,
            height
        }, anchor);
    };

})();

exports['src::math.points.circle.border'] = (() => {

    let convert;

    let var_init_locked_1608956298833;



    function main({
        x,
        y
    }, radius, startValue, step) {


        /**
         * 
         * 计算圆心坐标边上的一系列坐标集合
         * 
         * @import convert from math.degree2radian
         * 
         * @param {object} xy 圆形坐标
         * 
         * @param {number} xy.x 圆形横坐标
         * 
         * @param {number} xy.y 圆形纵坐标
         * 
         * @param {number} radius 圆的半径
         * 
         * @param {number} [startValue = 0] 起始度数值
         * 
         * @param {number} [step = 1] 圆边上一系列坐标间隔度数的步长
         * 
         * @return {array} 圆边上一系列坐标集合 
         * 
         */

        const {
            sin,
            cos
        } = Math;

        let points = [];

        for (let degree = startValue; degree <= 360; degree += step) {

            let radian = convert(degree);

            points.push({
                degree,
                x: x + cos(radian) * radius,
                y: y + sin(radian) * radius
            });
        }

        return points;

    }

    return function({
        x,
        y
    }, radius, startValue = 0, step = 1) {


        if (!var_init_locked_1608956298833) {

            convert = include('src::math.degree2radian');

            var_init_locked_1608956298833 = true;
        }


        return main.call(this, {
            x,
            y
        }, radius, startValue, step);
    };

})();

exports['src::math.points.ellipse.border'] = (() => {







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

exports['src::math.radian2degree'] = (() => {







    function main(radian) {


        /**
         * 
         * 将弧度转换成角度
         * 
         * @param {number} radian 弧度
         * 
         * @return {number} 角度
         * 
         */

        return 180 / Math.PI * radian;



    }

    return function(radian) {



        return main.call(this, radian);
    };

})();

exports['src::math.random.boolean'] = (() => {







    function main() {


        /**
         * 
         * 生成随机的布尔型值
         * 
         * @return {boolean} 返回随机布尔值 
         * 
         */

        return Math.random() >= 0.5;


    }

    return function() {



        return main.call(this);
    };

})();

exports['src::math.region.contains.x'] = (() => {

    let get;

    let var_init_locked_1613300300121;



    function main(region, position) {


        /**
         * 
         * 判断横坐标是否在范围之内
         * 
         * @import get from ..get
         * 
         * @param {object} region 参照范围
         * 
         * @param {mixed} position 位置
         * 
         * @return {boolean}  如果指定位置在指定区域之内则返回 true , 否则返回 false 
         * 
         */

        let {
            left,
            right
        } = region, {
            left: positionOLeft,
            right: positionRight
        } = get(position);

        return positionOLeft >= left && positionRight <= right;

    }

    return function(region, position) {


        if (!var_init_locked_1613300300121) {

            get = include('src::math.region.get');

            var_init_locked_1613300300121 = true;
        }


        return main.call(this, region, position);
    };

})();

exports['src::math.region.from'] = (() => {

    let isDefined;

    let var_init_locked_1608956298846;



    function main(data) {


        /**
         * 
         * 将数据转换成区域类型的对象
         * 
         * @import is.defined
         * 
         * @param {object} data 数据
         * 
         * @return {object} 区域类型的数据 
         * 
         */

        let {
            x,
            y,
            width,
            height,
            top,
            left,
            bottom,
            right
        } = data, {
            length
        } = Object.keys(data);

        if (isDefined(x) && isDefined(y) && isDefined(width) && isDefined(height)) {

            return {
                top: y,
                left: x,
                right: x + width,
                bottom: y + height
            };

        } else if (isDefined(x) && isDefined(y) && length === 2) {

            return {
                top: y,
                right: x,
                left: x,
                bottom: y
            };

        }

        return {
            top,
            right,
            bottom,
            left
        };



    }

    return function(data) {


        if (!var_init_locked_1608956298846) {

            isDefined = include('src::is.defined');

            var_init_locked_1608956298846 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::math.region.get'] = (() => {

    let isObject, from;

    let var_init_locked_1613261554625;



    function main(data) {


        /**
         * 
         * 获取范围对象
         * 
         * @import is.object
         * 
         * @import from from .from
         * 
         * @param {object} data 拥有范围信息的对象
         * 
         * @return {object} 如果给定对象拥有范围对象的基本属性则直接返回该对象，否则则进行范围对象转换 
         * 
         */

        if (isObject(data) && 'top' in data && 'bottom' in data && 'left' in data && 'right' in data && Object.keys(data).length === 4) {

            return data;
        }

        return from(data);

    }

    return function(data) {


        if (!var_init_locked_1613261554625) {

            isObject = include('src::is.object');
            from = include('src::math.region.from');

            var_init_locked_1613261554625 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::math.region.contains.y'] = (() => {

    let get;

    let var_init_locked_1613300300118;



    function main(region, position) {


        /**
         * 
         * 判断纵坐标是否在范围之内
         * 
         * @import get from ..get
         * 
         * @param {object} region 参照范围
         * 
         * @param {mixed} position 位置
         * 
         * @return {boolean}  如果指定位置在指定区域之内则返回 true , 否则返回 false 
         * 
         */


        let {
            top,
            bottom
        } = region, {
            top: positionTop,
            bottom: positionBottom
        } = get(position);

        return positionTop >= top && positionBottom <= bottom;

    }

    return function(region, position) {


        if (!var_init_locked_1613300300118) {

            get = include('src::math.region.get');

            var_init_locked_1613300300118 = true;
        }


        return main.call(this, region, position);
    };

})();

exports['src::math.region.contains'] = (() => {

    let containsY, containsX, get;

    let var_init_locked_1613300300113;



    function main(region, position) {


        /**
         * 
         * 判断位置是否在指定区域之内
         * 
         * @import containsY from .contains.y
         * 
         * @import containsX from .contains.x
         * 
         * @import get from .get
         * 
         * @param {object} region 参照范围
         * 
         * @param {mixed} position 位置
         * 
         * @return {boolean}  如果指定位置在指定区域之内则返回 true , 否则返回 false 
         * 
         */

        region = get(region);

        position = get(position);

        return containsX(region, position) && containsY(region, position);

    }

    return function(region, position) {


        if (!var_init_locked_1613300300113) {

            containsY = include('src::math.region.contains.y');
            containsX = include('src::math.region.contains.x');
            get = include('src::math.region.get');

            var_init_locked_1613300300113 = true;
        }


        return main.call(this, region, position);
    };

})();

exports['src::math.region.height'] = (() => {

    let get;

    let var_init_locked_1613300300108;



    function main(region) {


        /**
         * 
         * 获得方位高度
         * 
         * @import get from .get
         * 
         * @param {object} region 范围
         * 
         * @return {number} 宽度值 
         * 
         */

        let {
            bottom,
            top
        } = get(region);

        return bottom - top;

    }

    return function(region) {


        if (!var_init_locked_1613300300108) {

            get = include('src::math.region.get');

            var_init_locked_1613300300108 = true;
        }


        return main.call(this, region);
    };

})();

exports['src::math.region.intersect'] = (() => {







    function main(region1, region2) {


        /**
         * 
         * 判断两个范围是否相交
         * 
         * @param {object} region1 范围1
         * 
         * @param {object} region2 范围2
         * 
         * @return {boolean} 如果两者相交则返回 true , 否则返回 false
         * 
         */

        const {
            min,
            max
        } = Math;

        return min(region1.bottom, region2.bottom) > max(region1.top, region2.top) && min(region1.right, region2.right) > max(region1.left, region2.left);

    }

    return function(region1, region2) {



        return main.call(this, region1, region2);
    };

})();

exports['src::math.region.outOfBoundOffset.x'] = (() => {







    function main(region, x) {


        /**
         * 
         * 获取横坐标超出范围的偏移植
         * 
         * @param {object} region 范围
         * 
         * @param {number} x 横坐标 
         * 
         * @return {number} 偏移植
         * 
         */

        let {
            left,
            right
        } = region;

        if (x <= left) {

            return left - x;

        } else if (x >= right) {

            return right - x;

        }

        return 0;

    }

    return function(region, x) {



        return main.call(this, region, x);
    };

})();

exports['src::math.region.outOfBoundOffset.y'] = (() => {







    function main(region, y) {


        /**
         * 
         * 获取纵坐标超出范围的偏移植
         * 
         * @param {object} region 范围
         * 
         * @param {number} y 纵坐标 
         * 
         * @return {number} 偏移植
         * 
         */

        let {
            top,
            bottom
        } = region;

        if (y <= top) {

            return top - y;

        } else if (y >= bottom) {

            return bottom - y;

        }

        return 0;

    }

    return function(region, y) {



        return main.call(this, region, y);
    };

})();

exports['src::math.region.outOfBoundOffset'] = (() => {

    let getOutOfBoundOffsetX, getOutOfBoundOffsetY;

    let var_init_locked_1608956298868;



    function main(baseRegion, {
        left,
        right,
        top,
        bottom
    }) {


        /**
         * 
         * 获取范围超出另外一个范围的偏移植
         * 
         * @import getOutOfBoundOffsetX from  .outOfBoundOffset.x
         * 
         * @import getOutOfBoundOffsetY from .outOfBoundOffset.y
         * 
         * @param {object} baseRegion 参照范围
         * 
         * @param {object} region 范围
         * 
         * @param {number} region.left 范围左
         * 
         * @param {number} region.right  范围右
         * 
         * @param {number} region.top 范围上
         * 
         * @param {number} region.bottom 范围下
         * 
         * @return {object} 偏移植
         * 
         */

        const {
            abs
        } = Math;

        left = getOutOfBoundOffsetX(baseRegion, left);

        right = getOutOfBoundOffsetX(baseRegion, right);

        if (abs(left) < abs(right)) {

            left = right;
        }

        top = getOutOfBoundOffsetY(baseRegion, top);

        bottom = getOutOfBoundOffsetY(baseRegion, bottom);

        if (abs(top) < abs(bottom)) {

            top = bottom;
        }

        return {
            x: left,
            y: top
        };

    }

    return function(baseRegion, {
        left,
        right,
        top,
        bottom
    }) {


        if (!var_init_locked_1608956298868) {

            getOutOfBoundOffsetX = include('src::math.region.outOfBoundOffset.x');
            getOutOfBoundOffsetY = include('src::math.region.outOfBoundOffset.y');

            var_init_locked_1608956298868 = true;
        }


        return main.call(this, baseRegion, {
            left,
            right,
            top,
            bottom
        });
    };

})();

exports['src::math.region.scale.init.out'] = (() => {

    let width, height;

    let var_init_locked_1608956298870;



    function main(container, target) {


        /**
         * 
         * @import width from ....width
         * 
         * @import height from ....height
         * 
         * @param {object} container 容器范围
         * 
         * @param {object} target 目标范围
         * 
         */

        const targetWidth = width(target),
            targetHeight = height(target),
            deltaWidth = width(container) - targetWidth,
            deltaHeight = height(container) - targetHeight;

        if (deltaWidth >= 0 && deltaHeight >= 0) {

            return 1;
        }

        if (deltaWidth < deltaHeight) {

            return 1 + deltaWidth / targetWidth;
        }

        return 1 + deltaHeight / targetHeight;









    }

    return function(container, target) {


        if (!var_init_locked_1608956298870) {

            width = include('src::math.region.width');
            height = include('src::math.region.height');

            var_init_locked_1608956298870 = true;
        }


        return main.call(this, container, target);
    };

})();

exports['src::math.region.width'] = (() => {

    let get;

    let var_init_locked_1613261554617;



    function main(region) {


        /**
         * 
         * 获得方位高度
         * 
         * @import get from .get
         * 
         * @param {object} region 范围
         * 
         * @return {number} 高度值 
         * 
         */

        let {
            right,
            left
        } = get(region);

        return right - left;

    }

    return function(region) {


        if (!var_init_locked_1613261554617) {

            get = include('src::math.region.get');

            var_init_locked_1613261554617 = true;
        }


        return main.call(this, region);
    };

})();

exports['src::math.region.translate'] = (() => {

    let width, height, get;

    let var_init_locked_1613308340341;



    function main(region, {
        x,
        y
    }) {


        /**
         * 
         * 平移
         * 
         * @import width from .width
         * 
         * @import height from .height
         * 
         * @import get from .get
         * 
         * @param {object} region 目标范围
         * 
         * @param {object} xy 坐标
         * 
         * @param {number} [xy.x] 横坐标
         * 
         * @param {number} [xy.y] 纵坐标
         * 
         */

        region = get(region);

        let {
            left,
            right,
            top,
            bottom
        } = region;

        if (x) {

            left = x;

            right = left + width(region);
        }

        if (y) {

            top = y;

            bottom = top + height(region);
        }

        return {
            left,
            right,
            top,
            bottom
        };

    }

    return function(region, {
        x,
        y
    }) {


        if (!var_init_locked_1613308340341) {

            width = include('src::math.region.width');
            height = include('src::math.region.height');
            get = include('src::math.region.get');

            var_init_locked_1613308340341 = true;
        }


        return main.call(this, region, {
            x,
            y
        });
    };

})();

exports['src::math.region.union'] = (() => {







    function main(region1, region2) {


        /**
         * 
         * 范围联合
         * 
         * @param {object} region1 范围1
         * 
         * @param {object} region2 范围2
         * 
         * @return {object} 范围
         * 
         */

        const {
            min,
            max
        } = Math;

        return {
            top: min(region1.top, region2.top),
            bottom: max(region1.bottom, region2.bottom),
            left: min(region1.left, region2.left),
            right: max(region1.right, region2.right)
        };

    }

    return function(region1, region2) {



        return main.call(this, region1, region2);
    };

})();

exports['src::math.region.x.anchor'] = (() => {

    let get, getWidth, isNumber;

    let var_init_locked_1613394695924;



    function main(region, anchor, x) {


        /**
         * 
         * 根据锚定位置设置横坐标
         * 
         * @import get from ..get
         * 
         * @import getWidth from ..width
         * 
         * @import is.number
         * 
         * @param {object} region 范围
         * 
         * @param {string} anchor 锚定位置
         * 
         * @param {number} [x] 纵坐标值
         * 
         */

        region = get(region);

        let width = getWidth(region);

        if (isNumber(x)) {

            switch (anchor) {

                case 'left':

                    region.left = x;

                    break;

                case 'center':

                    region.left = x - width / 2;

                    break;


                case 'right':

                    region.left = y - width;

                    break;
            }

            region.right = region.left + width;

        } else {

            switch (anchor) {

                case 'left':

                    return region.left;

                case 'center':

                    return region.left + width / 2;

                case 'right':

                    return region.right;
            }

        }

    }

    return function(region, anchor, x) {


        if (!var_init_locked_1613394695924) {

            get = include('src::math.region.get');
            getWidth = include('src::math.region.width');
            isNumber = include('src::is.number');

            var_init_locked_1613394695924 = true;
        }


        return main.call(this, region, anchor, x);
    };

})();

exports['src::math.region.xy.anchor'] = (() => {

    let isDefined, doAnchorX, doAnchorY, get;

    let var_init_locked_1613394633664;



    function main(region, anchor, xy) {


        /**
         * 
         * 计算中心点坐标
         * 
         * @import is.defined
         * 
         * @import doAnchorX from ..x.anchor
         * 
         * @import doAnchorY from ..y.anchor
         * 
         * @import get from ..get
         * 
         * @param {object} region 方位信息
         * 
         * @param {string} anchor 锚定位置
         * 
         * @param {object} [xy] 需要设置的中心坐标
         * 
         */

        region = get(region);

        let anchorX,
            anchorY;

        switch (anchor) {

            case 'tl':

                anchorX = 'left';

                anchorY = 'top';

                break;

            case 'tr':

                anchorX = 'right';

                anchorY = 'top';

                break;

            case 'br':

                anchorX = 'right';

                anchorY = 'bottom';

                break;

            case 'bl':

                anchorX = 'left';

                anchorY = 'bottom';

                break;

            case 't':

                anchorX = 'center';

                anchorY = 'top';

                break;

            case 'b':

                anchorX = 'center';

                anchorY = 'bottom';

                break;

            case 'c':

                anchorX = 'center';

                anchorY = 'center';

                break;

            case 'l':

                anchorX = 'left';

                anchorY = 'center';

                break;

            case 'r':

                anchorX = 'right';

                anchorY = 'center';


        }

        if (isDefined(xy)) {

            doAnchorX(region, anchorX, xy.x);

            doAnchorY(region, anchorY, xy.y);

        } else {

            return {
                x: doAnchorX(region, anchorX),
                y: doAnchorY(region, anchorY)
            }

        }



    }

    return function(region, anchor, xy) {


        if (!var_init_locked_1613394633664) {

            isDefined = include('src::is.defined');
            doAnchorX = include('src::math.region.x.anchor');
            doAnchorY = include('src::math.region.y.anchor');
            get = include('src::math.region.get');

            var_init_locked_1613394633664 = true;
        }


        return main.call(this, region, anchor, xy);
    };

})();

exports['src::math.region.y.anchor'] = (() => {

    let get, getHeight, isNumber;

    let var_init_locked_1613392193437;



    function main(region, anchor, y) {


        /**
         * 
         * 根据锚定位置设置纵坐标
         * 
         * @import get from ..get
         * 
         * @import getHeight from ..height
         * 
         * @import is.number
         * 
         * @param {object} region 范围
         * 
         * @param {string} anchor 锚定位置
         * 
         * @param {number} [y] 纵坐标值
         * 
         */

        region = get(region);

        let height = getHeight(region);

        if (isNumber(y)) {

            switch (anchor) {

                case 'top':

                    region.top = y;

                    break;

                case 'center':

                    region.top = y - height / 2;

                    break;


                case 'bottom':

                    region.top = y - height;

                    break;
            }

            region.bottom = region.top + height;

        } else {

            switch (anchor) {

                case 'top':

                    return region.top;

                case 'center':

                    return region.top + height / 2;

                case 'bottom':

                    return region.bottom;
            }

        }

    }

    return function(region, anchor, y) {


        if (!var_init_locked_1613392193437) {

            get = include('src::math.region.get');
            getHeight = include('src::math.region.height');
            isNumber = include('src::is.number');

            var_init_locked_1613392193437 = true;
        }


        return main.call(this, region, anchor, y);
    };

})();

exports['src::math.region.y'] = (() => {

    let getAnchorY;

    let var_init_locked_1613300946857;



    function main(region) {


        /**
         * 
         * 获得范围的纵坐标
         * 
         * @import getAnchorY from .y.anchor
         * 
         * @param {object} region 范围
         * 
         * @return {number} 纵坐标值
         * 
         */

        return getAnchorY(region, 'top');

    }

    return function(region) {


        if (!var_init_locked_1613300946857) {

            getAnchorY = include('src::math.region.y.anchor');

            var_init_locked_1613300946857 = true;
        }


        return main.call(this, region);
    };

})();

exports['src::math.region.zoom'] = (() => {

    let get, width, height;

    let var_init_locked_1613308340356;



    function main(region, scale) {


        /**
         * 
         * 缩放当前目标范围
         * 
         * @import get from .get
         * 
         * @import width from .width
         * 
         * @import height from .height
         * 
         * @param {object} region 目标范围
         * 
         * @param {number} scale 缩放值
         * 
         * @return {object} 缩放后的目标范围
         * 
         */

        region = get(region);

        let {
            left,
            top
        } = region,
        right = left + width(region) * scale,
            bottom = top + height(region) * scale;

        return {
            left,
            right,
            top,
            bottom
        };







    }

    return function(region, scale) {


        if (!var_init_locked_1613308340356) {

            get = include('src::math.region.get');
            width = include('src::math.region.width');
            height = include('src::math.region.height');

            var_init_locked_1613308340356 = true;
        }


        return main.call(this, region, scale);
    };

})();

exports['src::math.region'] = (() => {





    let var_class_1608956298883;



    let var_global_main_1608956298883;

    return function(top, right, bottom, left) {


        if (!var_init_locked_1608956298883) {




            /**
             * 
             * 区域
             * 
             * @param {number} top 上
             * 
             * @param {number} right 右
             * 
             * @param {number} bottom 下
             * 
             * @param {number} left 左
             * 
             */

            const {
                abs
            } = Math;

            class main {

                constructor(top, right, bottom, left) {

                    let me = this;

                    me.top = top;

                    me.right = right;

                    me.bottom = bottom;

                    me.left = left;

                }

                get x() {

                    return this.left;
                }

                get y() {

                    return this.top;
                }

                contains(region) {

                    let {
                        x,
                        y,
                        right,
                        bottom
                    } = this, {
                        x: regionX,
                        y: regionY,
                        right: regionRight,
                        bottom: regionBottom
                    } = region;

                    return (regionX >= x &&
                        (regionRight || regionX) <= right &&
                        regionY >= y &&
                        (regionBottom || regionY) <= bottom);
                }

                getOutOfBoundOffset({
                    x,
                    y,
                    right,
                    bottom
                }) {

                    let me = this;

                    x = me.getOutOfBoundOffsetX(x);

                    right = me.getOutOfBoundOffsetX(right);

                    if (abs(x) < abs(right)) {

                        x = right;
                    }

                    y = me.getOutOfBoundOffsetY(y);

                    bottom = me.getOutOfBoundOffsetY(bottom);

                    if (abs(y) < abs(bottom)) {

                        y = bottom;
                    }

                    return {
                        x,
                        y
                    };
                }

                getOutOfBoundOffsetX(x) {

                    let me = this,
                        {
                            left,
                            right
                        } = me;

                    if (x <= left) {

                        return left - x;

                    } else if (x >= right) {

                        return right - x;

                    }

                    return 0;
                }

                getOutOfBoundOffsetY(y) {

                    let me = this,
                        {
                            top,
                            bottom
                        } = me;

                    if (y <= top) {

                        return top - y;

                    } else if (y >= bottom) {

                        return bottom - y;

                    }

                    return 0;
                }
            }



            var_class_1608956298883 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956298883;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::math.region';
                }

            };

            main = var_class_1608956298883;

            var_global_main_1608956298883 = main;

            var_init_locked_1608956298883 = true;
        }


        return new var_global_main_1608956298883(top, right, bottom, left);
    };

})();

exports['src::math.speed'] = (() => {







    function main(value, unit) {


        /**
         * 
         * 计算出速度值
         * 
         * @param {number} value 移动值
         * 
         * @param {string} [unit = 'ms'] 时间单位
         * 
         * @return {number} 返回说明 
         * 
         */

        switch (unit) {

            case 'ms':

                return value;

            case 's':

                return value / 1000;

            case 'm':

                return value / 1000 / 60;


            case 'h':

                return value / 1000 / 60 / 60;
        }

        return 0;


    }

    return function(value, unit = 'ms') {



        return main.call(this, value, unit);
    };

})();

exports['src::math.sum'] = (() => {

    let isArray, sum;

    let var_init_locked_1608956298888;



    function main(...values) {


        /**
         * 
         * 求和
         * 
         * @import is.array
         * 
         * @import sum from .sum
         * 
         * @param {array} [...values] 一组待求和的值
         * 
         * @return {number} 值
         * 
         */

        let result = 0;

        for (let value of values) {

            if (isArray(value)) {

                result += sum(...value);

            } else {

                result += value;
            }
        }

        return result;

    }

    return function(...values) {


        if (!var_init_locked_1608956298888) {

            isArray = include('src::is.array');
            sum = include('src::math.sum');

            var_init_locked_1608956298888 = true;
        }


        return main.call(this, ...values);
    };

})();

exports['src::file.read.json'] = (() => {

    let read, parse;

    let var_init_locked_1608956298893;




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

    async function main(path, watchFn) {

        if (watchFn) {

            read(path, data => watchFn(getJSON(data)));

        } else {

            return getJSON(await read(path));

        }
    }

    function getJSON(data) {

        if (data) {

            return parse(data);
        }
    }






    return async function(path, watchFn) {


        if (!var_init_locked_1608956298893) {

            read = include('src::file.read.text');
            parse = include('src::json.parse');

            var_init_locked_1608956298893 = true;
        }


        return await main.call(this, path, watchFn);
    };

})();

exports['src::file.read'] = (() => {

    let isFile;

    let var_init_locked_1608956298898;



    async function main(path) {

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
            readFile
        } = require('fs');

        if (await isFile(path)) {

            return new Promise((resolve, reject) => readFile(path, (error, data) => error ? reject(error) : resolve(data)));
        }

    }

    return async function(path) {


        if (!var_init_locked_1608956298898) {

            isFile = include('src::is.file');

            var_init_locked_1608956298898 = true;
        }


        return await main.call(this, path);
    };

})();

exports['src::file.read.text'] = (() => {

    let read;

    let var_init_locked_1608956298895;



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

    async function main(path, watchFn) {

        if (!watchFn) {

            return await getText(path);

        } else {

            if (cacheFiles.hasOwnProperty(path)) {

                watchFn(cacheFiles[path]);

            } else {

                chokidar.watch(path).on('change', async path => watchFn(cacheFiles[path] = await getText(path)));

                watchFn(cacheFiles[path] = await getText(path));
            }
        }
    }

    async function getText(path) {

        let data = await read(path);

        if (data) {

            return data.toString('utf8');
        }
    }


    return async function(path, watchFn) {


        if (!var_init_locked_1608956298895) {

            read = include('src::file.read');

            var_init_locked_1608956298895 = true;
        }


        return await main.call(this, path, watchFn);
    };

})();

exports['src::file.stream.read'] = (() => {

    let create;

    let var_init_locked_1608956298900;



    function main(path, options) {


        /**
         * 
         * 创建读取流
         * 
         * @import create from directory.create
         * 
         * @param {string} path 路径
         * 
         * @param {object} [options] 流配置
         * 
         * @return {fs.WriteStream} 读取流 
         * 
         */

        const {
            createReadStream
        } = require('fs');

        return createReadStream(path, options);




    }

    return function(path, options) {


        if (!var_init_locked_1608956298900) {

            create = include('src::directory.create');

            var_init_locked_1608956298900 = true;
        }


        return main.call(this, path, options);
    };

})();

exports['src::file.stream.write'] = (() => {

    let create;

    let var_init_locked_1608956298902;



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


        if (!var_init_locked_1608956298902) {

            create = include('src::directory.create');

            var_init_locked_1608956298902 = true;
        }


        return main.call(this, path, options);
    };

})();

exports['src::file.write.html'] = (() => {

    let write, format;

    let var_init_locked_1608956298904;



    function main(path, doc) {

        /**
         * 
         * 保存HTML文件
         * 
         * @import write from file.write
         * 
         * @import format from html.format
         * 
         * @param {string} path 保存文件路径
         * 
         * @param {mixed} doc 保存文件内容
         * 
         */

        write(path, format(doc));

    }

    return function(path, doc) {


        if (!var_init_locked_1608956298904) {

            write = include('src::file.write');
            format = include('src::html.format');

            var_init_locked_1608956298904 = true;
        }


        return main.call(this, path, doc);
    };

})();

exports['src::file.write'] = (() => {

    let create;

    let var_init_locked_1608956298907;



    async function main(path, data) {


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
            writeFile
        } = require('fs'), {
            dirname
        } = require('path');

        await create(dirname(path));

        return new Promise((resolve, reject) => writeFile(path, data, error => error ? reject(error) : resolve()));

    }

    return async function(path, data) {


        if (!var_init_locked_1608956298907) {

            create = include('src::directory.create');

            var_init_locked_1608956298907 = true;
        }


        return await main.call(this, path, data);
    };

})();

exports['src::html.format'] = (() => {

    let isString;

    let var_init_locked_1608956298909;



    function main(data) {

        /**
         * 
         * 格式化 HTML 文件内容
         * 
         * @import is.string
         * 
         * @param {mixed} data HTML 文件内容
         * 
         * @return {string} 格式化后的 HTML 文件内容
         * 
         */

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


        if (!var_init_locked_1608956298909) {

            isString = include('src::is.string');

            var_init_locked_1608956298909 = true;
        }


        return main.call(this, data);
    };

})();

exports['src::file.write.json'] = (() => {

    let write;

    let var_init_locked_1608956298911;



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

        return write(path, JSON.stringify(data, null, 2));

    }

    return function(path, data) {


        if (!var_init_locked_1608956298911) {

            write = include('src::file.write');

            var_init_locked_1608956298911 = true;
        }


        return main.call(this, path, data);
    };

})();

exports['src::mindmap'] = (() => {

    let mixin_1613700972894__1, extend, constructor, method_load, method_destroy, method_resize, method_deselect, method_reset, method_focus, method_selectNode, method_collapseNode, method_expandNode, method_getNode, method_setNodeValue, method_deleteNode, method_appendNewNode, method_insertNewNodeBefore, method_insertNewNodeAfter, method_startRestructureNode, method_restructureNode, method_endRestructureNode, isObject;

    let var_init_locked_1613700972895;

    let var_class_1613700972895;



    let var_global_main_1613700972895;

    return function(config) {


        if (!var_init_locked_1613700972895) {

            mixin_1613700972894__1 = include('src::mixin.observable');
            extend = include('src::class.empty')();
            constructor = include('src::mindmap.constructor');
            method_load = include('src::mindmap.load');
            method_destroy = include('src::mindmap.destroy');
            method_resize = include('src::mindmap.resize');
            method_deselect = include('src::mindmap.deselect');
            method_reset = include('src::mindmap.reset');
            method_focus = include('src::mindmap.focus');
            method_selectNode = include('src::mindmap.node.select');
            method_collapseNode = include('src::mindmap.node.collapse');
            method_expandNode = include('src::mindmap.node.expand');
            method_getNode = include('src::mindmap.node.from');
            method_setNodeValue = include('src::mindmap.node.value.set');
            method_deleteNode = include('src::mindmap.node.delete');
            method_appendNewNode = include('src::mindmap.node.append.new');
            method_insertNewNodeBefore = include('src::mindmap.node.insert.new.before');
            method_insertNewNodeAfter = include('src::mindmap.node.insert.new.after');
            method_startRestructureNode = include('src::mindmap.node.restructure.start');
            method_restructureNode = include('src::mindmap.node.restructure');
            method_endRestructureNode = include('src::mindmap.node.restructure.end');
            isObject = include('src::is.object.simple');

            class main extends mixins({
                extend,
                mixins: [include('mixin.observable')]
            }) {





                constructor(...args) {

                    super(...args);

                    constructor.apply(this, args);

                }

                load(...args) {

                    return method_load.apply(this, args);

                }
                destroy(...args) {

                    return method_destroy.apply(this, args);

                }
                resize(...args) {

                    return method_resize.apply(this, args);

                }
                deselect(...args) {

                    return method_deselect.apply(this, args);

                }
                reset(...args) {

                    return method_reset.apply(this, args);

                }
                focus(...args) {

                    return method_focus.apply(this, args);

                }
                selectNode(...args) {

                    return method_selectNode.apply(this, args);

                }
                collapseNode(...args) {

                    return method_collapseNode.apply(this, args);

                }
                expandNode(...args) {

                    return method_expandNode.apply(this, args);

                }
                getNode(...args) {

                    return method_getNode.apply(this, args);

                }
                setNodeValue(...args) {

                    return method_setNodeValue.apply(this, args);

                }
                deleteNode(...args) {

                    return method_deleteNode.apply(this, args);

                }
                appendNewNode(...args) {

                    return method_appendNewNode.apply(this, args);

                }
                insertNewNodeBefore(...args) {

                    return method_insertNewNodeBefore.apply(this, args);

                }
                insertNewNodeAfter(...args) {

                    return method_insertNewNodeAfter.apply(this, args);

                }
                startRestructureNode(...args) {

                    return method_startRestructureNode.apply(this, args);

                }
                restructureNode(...args) {

                    return method_restructureNode.apply(this, args);

                }
                endRestructureNode(...args) {

                    return method_endRestructureNode.apply(this, args);

                }



            }

            var_class_1613700972895 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613700972895;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::mindmap';
                }

            };

            main = var_class_1613700972895;

            var_global_main_1613700972895 = main;

            var_init_locked_1613700972895 = true;
        }


        return new var_global_main_1613700972895(config);
    };

})();

exports['src::mindmap.node.id.generate'] = (() => {

    let generate;

    let var_init_locked_1613621911584;



    function main() {

        /**
         * 
         * 生成节点唯一编号
         * 
         * @import generate from id.generate
         * 
         */

        return generate('node-');

    }

    return function() {


        if (!var_init_locked_1613621911584) {

            generate = include('src::id.generate');

            var_init_locked_1613621911584 = true;
        }


        return main.call(this);
    };

})();

exports['src::mindmap.node.create'] = (() => {

    let generate;

    let var_init_locked_1613634000859;



    function main(node) {


        /**
         * 
         * 创建新节点
         * 
         * @import generate from .id.generate
         * 
         * @param {object} [node = {}] 节点信息
         * 
         * @return {data.Record} 创建出来的新节点 
         * 
         */

        let {
            reader,
            nodes
        } = this;

        delete node.hidden;

        delete node.level;

        let options = {
            text: '',
            ...node,
            id: generate(),
            children: []
        };

        node = reader.create(options);

        nodes.set(node.id, node);

        return node;

    }

    return function(node = {}) {


        if (!var_init_locked_1613634000859) {

            generate = include('src::mindmap.node.id.generate');

            var_init_locked_1613634000859 = true;
        }


        return main.call(this, node);
    };

})();

exports['src::mindmap.node.parent'] = (() => {







    function main(node) {


        /**
         * 
         * 获取指定节点的父节点引用
         * 
         * @param {data.Record} node 节点
         * 
         * @return {data.Record} 父节点 
         * 
         */

        let {
            nodes
        } = this, {
            parentNodeId
        } = node;

        if (parentNodeId) {

            return nodes.get(parentNodeId);

        }



    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.field.hidden.level'] = (() => {







    const var_current_scope_1613382328296 = new Map();

    return function(node, hidden) {





        if (!var_current_scope_1613382328296.has(this)) {

            var_current_scope_1613382328296.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);

                function main(node, hidden) {


                    /**
                     * 
                     * 设置脑图节点层次
                     * 
                     * @import getParentNode from ....parent scoped
                     * 
                     * @param {data.Record} node 节点
                     * 
                     * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
                     * 
                     */

                    if (hidden) {

                        node.level = -1;

                    } else {

                        let parentNode,
                            noLevelNodes = [
                                node
                            ];

                        while (parentNode = getParentNode(node)) {

                            let {
                                level
                            } = parentNode;

                            if (level === -1) {

                                noLevelNodes.unshift(parentNode);

                            } else {

                                for (let noLevelNode of noLevelNodes) {

                                    noLevelNode.level = ++level;
                                }

                                noLevelNodes.length = 0;

                                break;
                            }
                        }

                        if (noLevelNodes.length) {

                            let level = 0;

                            for (let noLevelNode of noLevelNodes) {

                                noLevelNode.level = level++;
                            }
                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613382328296.get(this);



        return main.call(this, node, hidden);
    };

})();

exports['src::mindmap.node.field.hidden'] = (() => {







    const var_current_scope_1613382382813 = new Map();

    return function(node, hidden) {





        if (!var_current_scope_1613382382813.has(this)) {

            var_current_scope_1613382382813.set(this, (() => {
                const level = include('src::mindmap.node.field.hidden.level').bind(this);

                function main(node, hidden) {


                    /**
                     * 
                     * 设置节点隐藏属性
                     * 
                     * @import level from .hidden.level scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
                     * 
                     * @return {boolean} 节点隐藏状态
                     * 
                     */

                    let {
                        id
                    } = node,
                    me = this;

                    level(node, hidden);

                    if (hidden) {

                        node.selected = false;

                        node.width = false;

                        node.height = false;
                    }

                    return hidden;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613382382813.get(this);



        return main.call(this, node, hidden);
    };

})();

exports['src::mindmap.node.field.selected'] = (() => {







    function main(node, selected) {


        /**
         * 
         * 设置选定状态
         * 
         * @param {data.Record} node 节点
         * 
         * @param {boolean} selected 节点选定状态
         * 
         * 
         */

        let me = this,
            {
                selectedNode
            } = me;

        if (selected) {

            if (selectedNode) {

                selectedNode.selected = false;
            }

            me.selectedNode = node;

        } else if (node === selectedNode) {

            delete me.selectedNode;

        }

        return selected;

    }

    return function(node, selected) {



        return main.call(this, node, selected);
    };

})();

exports['src::mindmap.indicated'] = (() => {







    function main(node, indicated) {


        /**
         * 
         * 设置节点指示标识
         * 
         * @param {data.Record} node 节点
         * 
         * @param {boolean} indicated 指示标识值
         * 
         * @return {boolean} 提示标识值 
         * 
         */

        let me = this,
            {
                restructureIndicatedNode
            } = me;

        if (indicated) {

            if (restructureIndicatedNode) {

                restructureIndicatedNode.indicated = false;
            }

            me.restructureIndicatedNode = node;
        }

        return indicated;

    }

    return function(node, indicated) {



        return main.call(this, node, indicated);
    };

})();

exports['src::function.buffer'] = (() => {

    let get;

    let var_init_locked_1608956299059;



    function main(fn, {
        scope,
        buffer
    }) {


        /**
         * 
         * 实现懒执行模式函数
         * 
         * @import get from function.get
         * 
         * @param {mixed} fn 函数
         * 
         * @param {object} [config = {}] 函数配置
         * 
         * @param {mixed} [config.scope] 函数作用域
         * 
         * @param {mixed} [config.buffer = 0] 缓存时间
         * 
         * 
         */

        let bufferId;

        return (...args) => {

            if (bufferId) {

                clearTimeout(bufferId);

                bufferId = null;
            }

            bufferId = setTimeout(() => {

                get(fn, scope)(...args);

                bufferId = null;

            }, buffer);
        };

    }

    return function(fn, {
        scope,
        buffer = 0
    } = {}) {


        if (!var_init_locked_1608956299059) {

            get = include('src::function.get');

            var_init_locked_1608956299059 = true;
        }


        return main.call(this, fn, {
            scope,
            buffer
        });
    };

})();

exports['src::mindmap.node.is.unsized'] = (() => {







    function main(node) {


        /**
         * 
         * 节点是否未设置尺寸
         * 
         * @param {data.Record} node 脑图节点
         * 
         * @return {boolean} 如果没有设置尺寸则返回 true , 否则返回 false 
         * 
         */

        return node.width === false && node.height === false;

    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.data'] = (() => {







    function main(node, fields) {


        /**
         * 
         * 获取节点实际的数据信息
         * 
         * @param {data.Record} node 节点
         * 
         * @param {object} fields 字段信息
         * 
         * @return {object} 数据信息 
         * 
         */

        if (node) {

            return this.reader.data(node, {
                ignoreFields: [
                    'children'
                ],
                fields
            });
        }

    }

    return function(node, fields) {



        return main.call(this, node, fields);
    };

})();

exports['src::mindmap.node.from'] = (() => {

    let isString, isObject, isDefined;

    let var_init_locked_1613542771251;



    const var_current_scope_1613542771251 = new Map();

    return function(node) {


        if (!var_init_locked_1613542771251) {

            isString = include('src::is.string');
            isObject = include('src::is.object');
            isDefined = include('src::is.defined');

            var_init_locked_1613542771251 = true;
        }




        if (!var_current_scope_1613542771251.has(this)) {

            var_current_scope_1613542771251.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);

                function main(node) {


                    /**
                     * 
                     * 根据所提供的标识来获得脑图节点
                     * 
                     * @import is.string
                     * 
                     * @import isObject from is.object
                     * 
                     * @import from from .from scoped
                     * 
                     * @import is.defined
                     * 
                     * @param {mixed} node 脑图节点标识
                     * 
                     * @return {data.Record} 脑图节点 
                     * 
                     */

                    let {
                        nodes,
                        selectedNode
                    } = this;

                    if (isString(node)) {

                        return nodes.get(node);

                    } else if (isObject(node)) {

                        let {
                            id
                        } = node;

                        return from(id);

                    } else if (!isDefined(node)) {

                        return selectedNode;
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613542771251.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.is.root'] = (() => {







    const var_current_scope_1613566322989 = new Map();

    return function(node) {





        if (!var_current_scope_1613566322989.has(this)) {

            var_current_scope_1613566322989.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);

                function main(node) {


                    /**
                     * 
                     * 判断指定脑图节点是否为根节点
                     * 
                     * @import from from ..from scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {boolean} 如果为根节点则返回 true , 否则返回 false 
                     * 
                     */

                    return from(node) === this.rootNode;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613566322989.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.is.leaf'] = (() => {







    function main(node) {


        /**
         * 
         * 判断指定节点是否为叶子节点
         * 
         * @param {data.Record} node 节点
         * 
         * @return {boolean} 如果节点为叶子节点则返回 true , 否则 false
         * 
         */


        let {
            children
        } = node;

        return !children.length;

    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.data'] = (() => {







    const var_current_scope_1613610502109 = new Map();

    return function(node) {





        if (!var_current_scope_1613610502109.has(this)) {

            var_current_scope_1613610502109.set(this, (() => {
                const data = include('src::mindmap.data').bind(this);
                const isRootNode = include('src::mindmap.node.is.root').bind(this);
                const isLeafNode = include('src::mindmap.node.is.leaf').bind(this);

                function main(node) {


                    /**
                     * 
                     * 获取节点参数级数据信息
                     * 
                     * @import data from ..data scoped
                     * 
                     * @import isRootNode from .is.root scoped
                     * 
                     * @import isLeafNode from .is.leaf scoped
                     * 
                     * @param {mixed} node 节点
                     * 
                     * @return {object} 数据信息 
                     * 
                     */

                    return data(node, {

                        root(node) {

                            return isRootNode(node);
                        },

                        leaf(node) {

                            return isLeafNode(node);
                        }
                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502109.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.cache.clear'] = (() => {







    function main() {


        /**
         * 
         * 清除布局缓存
         * 
         */

        delete this.layoutCache;

    }

    return function() {



        return main.call(this);
    };

})();

exports['src::mindmap.layout'] = (() => {







    const var_current_scope_1613641966200 = new Map();

    return function() {





        if (!var_current_scope_1613641966200.has(this)) {

            var_current_scope_1613641966200.set(this, (() => {
                const isUnsized = include('src::mindmap.node.is.unsized').bind(this);
                const getData = include('src::mindmap.node.data').bind(this);
                const clear = include('src::mindmap.layout.cache.clear').bind(this);


                /**
                 * 
                 * 布局
                 * 
                 * @import isUnsized from .node.is.unsized scoped
                 * 
                 * @import getData from .node.data scoped
                 * 
                 * @import clear from .layout.cache.clear scoped
                 * 
                 */

                function main() {

                    let me = this,
                        {
                            isLayouting
                        } = me;

                    if (isLayouting) {

                        return;
                    }

                    me.isLayouting = true;

                    clear();

                    let {
                        pattern: layout,
                        getRootNode,
                        getDescendantNodes,
                        createPositioner
                    } = me.layoutConfig;

                    let rootNode = getRootNode();

                    doBeforeLayout.call(me, me.layoutNodes = [
                        rootNode,
                        ...getDescendantNodes(rootNode)
                    ], () => {

                        me.layoutData = layout(rootNode);

                        me.layoutPositioner = createPositioner(me, me.layoutNodes);

                        me.refresh();

                        me.isLayouting = false;

                    });
                }

                function doBeforeLayout(layoutNodes, callback) {

                    let unsizedNodes = new Map();

                    for (let layoutNode of layoutNodes) {

                        if (isUnsized(layoutNode)) {

                            unsizedNodes.set(layoutNode.id, layoutNode);
                        }
                    }

                    if (unsizedNodes.size) {

                        this.fireEvent('nodeunsized', getDataNodes(unsizedNodes), sizes => {

                            let ids = Object.keys(sizes);

                            for (let id of ids) {

                                let node = unsizedNodes.get(id),
                                    {
                                        width,
                                        height
                                    } = sizes[id];

                                node.width = width;

                                node.height = height;
                            }

                            callback();

                        });

                    } else {

                        callback();
                    }
                }

                function getDataNodes(nodes) {

                    nodes = nodes.values();

                    let result = [];

                    for (let node of nodes) {

                        result.push(getData(node));
                    }

                    return result;
                }

                return main;

            })());
        }

        const main = var_current_scope_1613641966200.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.cache'] = (() => {







    function main(node, cacheName, cacheFn) {


        /**
         * 
         * 布局缓存
         * 
         * @param {data.Record} node 脑图节点
         * 
         * @param {string} cacheName 缓存名称
         * 
         * @param {function} cacheFn 缓存计算函数
         * 
         * @return {mixed} 缓存返回值
         * 
         */

        let me = this;

        if (!me.hasOwnProperty('layoutCache')) {

            me.layoutCache = new Map();
        }

        let {
            layoutCache
        } = me;

        if (!layoutCache.has(node)) {

            layoutCache.set(node, {});
        }

        let cache = layoutCache.get(node);

        if (!cache.hasOwnProperty(cacheName)) {

            cache[cacheName] = cacheFn.call(me, node);
        }

        return cache[cacheName];

    }

    return function(node, cacheName, cacheFn) {



        return main.call(this, node, cacheName, cacheFn);
    };

})();

exports['src::mindmap.layout.node.parent'] = (() => {







    const var_current_scope_1613786076560 = new Map();

    return function(node) {





        if (!var_current_scope_1613786076560.has(this)) {

            var_current_scope_1613786076560.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const cache = include('src::mindmap.layout.cache').bind(this);


                /**
                 * 
                 * 获取父节点
                 * 
                 * @import getParentNode from mindmap.node.parent scoped
                 * 
                 * @import cache from mindmap.layout.cache scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {data.Record} 所获取的父节点
                 * 
                 */

                function main(node) {

                    return cache(node, 'getParentNode', getLayoutedParentNode);

                }

                function getLayoutedParentNode(node) {

                    let {
                        layoutNodes
                    } = this,
                    parentNode = getParentNode(node);

                    if (parentNode && layoutNodes.includes(parentNode)) {

                        return parentNode;
                    }
                }

                return main;

            })());
        }

        const main = var_current_scope_1613786076560.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.is.root'] = (() => {







    const var_current_scope_1613359840570 = new Map();

    return function(node) {





        if (!var_current_scope_1613359840570.has(this)) {

            var_current_scope_1613359840570.set(this, (() => {
                const getParentNode = include('src::mindmap.layout.node.parent').bind(this);

                function main(node) {


                    /**
                     * 
                     * 判断是否为根节点
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {boolean} 如果为根节点则返回 true , 否则返回 false 
                     * 
                     */

                    return !getParentNode(node);

                }

                return main;

            })());
        }

        const main = var_current_scope_1613359840570.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.data'] = (() => {







    const var_current_scope_1613610950999 = new Map();

    return function(node, offset) {





        if (!var_current_scope_1613610950999.has(this)) {

            var_current_scope_1613610950999.set(this, (() => {
                const data = include('src::mindmap.data').bind(this);
                const isRootNode = include('src::mindmap.layout.node.is.root').bind(this);
                const isLeafNode = include('src::mindmap.node.is.leaf').bind(this);

                function main(node, offset) {


                    /**
                     * 
                     * 获取节点参数级数据信息
                     * 
                     * @import data from mindmap.data scoped
                     * 
                     * @import isRootNode from .is.root scoped
                     * 
                     * @import isLeafNode from mindmap.node.is.leaf scoped
                     * 
                     * @param {mixed} node 节点
                     * 
                     * @param {object} offset 坐标偏移值
                     * 
                     * @return {object} 数据信息 
                     * 
                     */

                    return data(node, {

                        root(node) {

                            return isRootNode(node);
                        },

                        leaf(node) {

                            return isLeafNode(node);
                        },

                        x(node) {

                            return node.x + offset.x;
                        },

                        y(node) {

                            return node.y + offset.y;
                        }

                    });

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610950999.get(this);



        return main.call(this, node, offset);
    };

})();

exports['src::mindmap.layout.node.spacing.left'] = (() => {

    let isFunction;

    let var_init_locked_1613610502145;



    const var_current_scope_1613610502145 = new Map();

    return function(node) {


        if (!var_init_locked_1613610502145) {

            isFunction = include('src::is.function');

            var_init_locked_1613610502145 = true;
        }




        if (!var_current_scope_1613610502145.has(this)) {

            var_current_scope_1613610502145.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);

                function main(node) {


                    /**
                     * 
                     * 脑图节点的左侧间距
                     * 
                     * @import is.function
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {number} 间距值
                     * 
                     */

                    let {
                        left
                    } = this.layoutConfig.nodeSpacing;

                    if (isFunction(left)) {

                        return left(data(node));
                    }

                    return left;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502145.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.spacing.right'] = (() => {

    let isFunction;

    let var_init_locked_1613610502150;



    const var_current_scope_1613610502150 = new Map();

    return function(node) {


        if (!var_init_locked_1613610502150) {

            isFunction = include('src::is.function');

            var_init_locked_1613610502150 = true;
        }




        if (!var_current_scope_1613610502150.has(this)) {

            var_current_scope_1613610502150.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);

                function main(node) {


                    /**
                     * 
                     * 脑图节点的右侧间距
                     * 
                     * @import is.function
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {number} 间距值
                     * 
                     */

                    let {
                        right
                    } = this.layoutConfig.nodeSpacing;

                    if (isFunction(right)) {

                        return right(data(node));
                    }

                    return right;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502150.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.spacing.top'] = (() => {

    let isFunction;

    let var_init_locked_1613610502154;



    const var_current_scope_1613610502154 = new Map();

    return function(node) {


        if (!var_init_locked_1613610502154) {

            isFunction = include('src::is.function');

            var_init_locked_1613610502154 = true;
        }




        if (!var_current_scope_1613610502154.has(this)) {

            var_current_scope_1613610502154.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);

                function main(node) {


                    /**
                     * 
                     * 脑图节点的顶部间距
                     * 
                     * @import is.function
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {number} 间距值
                     * 
                     */

                    let {
                        top
                    } = this.layoutConfig.nodeSpacing;

                    if (isFunction(top)) {

                        return top(data(node));
                    }

                    return top;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502154.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.spacing.bottom'] = (() => {

    let isFunction;

    let var_init_locked_1613610502159;



    const var_current_scope_1613610502159 = new Map();

    return function(node) {


        if (!var_init_locked_1613610502159) {

            isFunction = include('src::is.function');

            var_init_locked_1613610502159 = true;
        }




        if (!var_current_scope_1613610502159.has(this)) {

            var_current_scope_1613610502159.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);

                function main(node) {


                    /**
                     * 
                     * 脑图节点的底部间距
                     * 
                     * @import is.function
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {number} 间距值
                     * 
                     */

                    let {
                        bottom
                    } = this.layoutConfig.nodeSpacing;

                    if (isFunction(bottom)) {

                        return bottom(data(node));
                    }

                    return bottom;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502159.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.region.self'] = (() => {







    const var_current_scope_1613740790834 = new Map();

    return function(node) {





        if (!var_current_scope_1613740790834.has(this)) {

            var_current_scope_1613740790834.set(this, (() => {
                const getLeftSpacing = include('src::mindmap.layout.node.spacing.left').bind(this);
                const getRightSpacing = include('src::mindmap.layout.node.spacing.right').bind(this);
                const getTopSpacing = include('src::mindmap.layout.node.spacing.top').bind(this);
                const getBottomSpacing = include('src::mindmap.layout.node.spacing.bottom').bind(this);

                function main(node) {


                    /**
                     * 
                     * 获得脑图节点自身范围
                     * 
                     * @import getLeftSpacing from ..spacing.left scoped
                     * 
                     * @import getRightSpacing from ..spacing.right scoped
                     * 
                     * @import getTopSpacing from ..spacing.top scoped
                     * 
                     * @import getBottomSpacing from ..spacing.bottom scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {object} 范围信息 
                     * 
                     */

                    let {
                        x,
                        y,
                        width,
                        height
                    } = node,
                    top = y - getTopSpacing(node),
                        left = x - getLeftSpacing(node);

                    return {
                        top,
                        bottom: y + height + getBottomSpacing(node),
                        left,
                        right: x + width + getRightSpacing(node)
                    };




                }

                return main;

            })());
        }

        const main = var_current_scope_1613740790834.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.refresh'] = (() => {

    let from, getAnchorXY;

    let var_init_locked_1613610852862;



    const var_current_scope_1613610852862 = new Map();

    return function() {


        if (!var_init_locked_1613610852862) {

            from = include('src::math.region.from');
            getAnchorXY = include('src::math.region.xy.anchor');

            var_init_locked_1613610852862 = true;
        }




        if (!var_current_scope_1613610852862.has(this)) {

            var_current_scope_1613610852862.set(this, (() => {
                const getData = include('src::mindmap.layout.node.data').bind(this);
                const getRegion = include('src::mindmap.layout.node.region.self').bind(this);
                const getParentNode = include('src::mindmap.layout.node.parent').bind(this);


                /**
                 * 
                 * 刷新
                 * 
                 * @import getData from .layout.node.data scoped
                 * 
                 * @import from from math.region.from
                 * 
                 * @import getRegion from .layout.node.region.self scoped
                 * 
                 * @import getAnchorXY from math.region.xy.anchor
                 * 
                 * @import getParentNode from .layout.node.parent scoped
                 * 
                 */

                function main() {

                    let me = this,
                        {
                            layoutNodes,
                            layoutData
                        } = me,
                        {
                            size,
                            offset
                        } = layoutData,
                        {
                            nodes,
                            selectedNode
                        } = getNodeDataset(layoutNodes, offset),
                        {
                            placeholderNode
                        } = me;

                    me.fireEvent('draw', {
                        nodes: getNodes(nodes),
                        lines: getLines(nodes, placeholderNode),
                        selectedNode,
                        selectedNodeRegion: getRegion(selectedNode),
                        canvas: size
                    });
                }

                function getNodes(nodes) {

                    nodes = nodes.values();

                    let result = [];

                    for (let {
                            data
                        } of nodes) {

                        result.push(data);
                    }

                    return result;
                }

                function getLines(nodes, placeholderNode) {

                    let layoutNodes = nodes.keys(),
                        lines = [];

                    for (let layoutNode of layoutNodes) {

                        let parentNode = getParentNode(layoutNode);

                        if (parentNode) {

                            let {
                                data: start,
                                centerXY: startCenterXY,
                                rightXY: startRightXY
                            } = nodes.get(parentNode), {
                                data: end,
                                leftXY: endLeftXY
                            } = nodes.get(layoutNode);

                            lines.push({
                                indicated: layoutNode === placeholderNode,
                                start,
                                startCenterXY,
                                startRightXY,
                                end,
                                endLeftXY
                            });
                        }
                    }

                    return lines;
                }

                function getNodeDataset(nodes, offset) {

                    let result = new Map(),
                        selectedNode;

                    for (let node of nodes) {

                        let data = getData(node, offset),
                            region = from(data);

                        if (data.selected) {

                            selectedNode = data;
                        }

                        result.set(node, {
                            data,
                            centerXY: getAnchorXY(region, 'c'),
                            rightXY: getAnchorXY(region, 'r'),
                            leftXY: getAnchorXY(region, 'l')
                        })
                    }

                    return {
                        nodes: result,
                        selectedNode
                    };
                }





                return main;

            })());
        }

        const main = var_current_scope_1613610852862.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.constructor'] = (() => {

    let createReader, buffer, isObject, isArray, emptyFn, isNumber, isString, get, generate;

    let var_init_locked_1613625470749;



    const var_current_scope_1613625470749 = new Map();

    return function({
        reader,
        readConfig = {},
        nodeSeparationDistance,
        nodeVerticalSeparationDistance = 15,
        nodeHorizontalSeparationDistance = 0,
        nodeHorizontalLineBreakPointOffset = 12.5,
        nodeSpacing = 5,
        placeholderNodeWidth = 60,
        placeholderNodeHeight = 20,
        padding = 5,
        width = 0,
        height = 0,
        placeholderNodeData = {},
        layout,
        api = {}
    }) {


        if (!var_init_locked_1613625470749) {

            createReader = include('src::data.reader.json');
            buffer = include('src::function.buffer');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            emptyFn = include('src::function.empty')();
            isNumber = include('src::is.number');
            isString = include('src::is.string');
            get = include('src::function.get');
            generate = include('src::mindmap.node.id.generate');

            var_init_locked_1613625470749 = true;
        }




        if (!var_current_scope_1613625470749.has(this)) {

            var_current_scope_1613625470749.set(this, (() => {
                const create = include('src::mindmap.node.create').bind(this);
                const setHidden = include('src::mindmap.node.field.hidden').bind(this);
                const setSelected = include('src::mindmap.node.field.selected').bind(this);
                const setIndicated = include('src::mindmap.indicated').bind(this);
                const doLayout = include('src::mindmap.layout').bind(this);
                const doRefresh = include('src::mindmap.refresh').bind(this);

                function main({
                    reader,
                    readConfig,
                    nodeSeparationDistance,
                    nodeVerticalSeparationDistance,
                    nodeHorizontalSeparationDistance,
                    nodeHorizontalLineBreakPointOffset,
                    nodeSpacing,
                    placeholderNodeWidth,
                    placeholderNodeHeight,
                    padding,
                    width,
                    height,
                    placeholderNodeData,
                    layout,
                    api
                }) {


                    /**
                     * 
                     * 初始化脑图
                     * 
                     * @import create from .node.create scoped
                     * 
                     * @import createReader from data.reader.json
                     * 
                     * @import setHidden from .node.field.hidden scoped
                     * 
                     * @import setSelected from .node.field.selected scoped
                     * 
                     * @import setIndicated from .indicated scoped
                     * 
                     * @import buffer from function.buffer
                     * 
                     * @import doLayout from .layout scoped
                     * 
                     * @import doRefresh from .refresh scoped
                     * 
                     * @import isObject from is.object.simple
                     * 
                     * @import is.array
                     * 
                     * @import emptyFn from function.empty value
                     * 
                     * @import is.number
                     * 
                     * @import is.string
                     * 
                     * @import get from function.get
                     * 
                     * @import generate from .node.id.generate
                     * 
                     * @param {object} config 脑图配置
                     * 
                     * @param {data.Reader} config.reader 数据读取配置
                     * 
                     * @param {data.Reader} [config.readConfig = {}] 数据读取根路径设置
                     * 
                     * @param {function} [config.nodeSeparationDistance] 节点间隔距离
                     * 
                     * @param {number} [config.nodeVerticalSeparationDistance = 15] 节点垂直间隔距离
                     * 
                     * @param {number} [config.nodeHorizontalSeparationDistance = 0] 节点水平间隔距离
                     * 
                     * @param {number} [config.nodeHorizontalLineBreakPointOffset = 12.5] 脑图节点之间连线的折点的偏移位置
                     * 
                     * @param {number} [config.nodeSpacing = 5] 节点间隔设置
                     * 
                     * @param {number} [config.placeholderNodeWidth = 60] 占位符宽度
                     * 
                     * @param {number} [config.placeholderNodeHeight = 20] 占位符高度
                     * 
                     * @param {number} [config.padding = 5] 脑图四周填充距离
                     * 
                     * @param {number} [config.width = 0] 脑图宽度
                     * 
                     * @param {number} [config.height = 0] 脑图高度
                     * 
                     * @param {object} [config.placeholderNodeData = {}] 占位脑图节点的其它配置
                     * 
                     * @param {mixed} [config.layout] 布局模式
                     * 
                     * @param {object} [config.api = {}] 附加 API
                     * 
                     */

                    let me = this;

                    {
                        let methods = Object.keys(api);

                        for (let method of methods) {

                            me[method] = get(api[method], me);
                        }
                    }

                    {

                        let layoutConfig = {};

                        if (isString(layout)) {

                            layout = {
                                pattern: layout
                            };

                        } else if (!isObject(layout)) {

                            layout = {};
                        }

                        let {
                            createPositioner = 'mindmap.layout.positioner.logic.right',
                                pattern = 'mindmap.layout.pattern.logic.right',
                                getRootNode = 'mindmap.node.root',
                                getDescendantNodes = 'mindmap.nodes.descendant'
                        } = layout;

                        layoutConfig.createPositioner = get(createPositioner, me);

                        layoutConfig.pattern = get(pattern, me);

                        layoutConfig.getRootNode = get(getRootNode, me);

                        layoutConfig.getDescendantNodes = get(getDescendantNodes, me);

                        if (isNumber(nodeSpacing)) {

                            nodeSpacing = {
                                top: nodeSpacing,
                                bottom: nodeSpacing,
                                left: nodeSpacing,
                                right: nodeSpacing
                            };
                        }

                        if (isObject(nodeSpacing)) {

                            layoutConfig.nodeSpacing = nodeSpacing;

                        }

                        me.layoutConfig = layoutConfig;

                    }

                    me.nodes = new Map();

                    me.unpublishedNodes = new Set();

                    me.nodeSeparationDistance = nodeSeparationDistance;

                    me.nodeVerticalSeparationDistance = nodeVerticalSeparationDistance;

                    if (isObject(nodeHorizontalSeparationDistance)) {

                        let {
                            max = 0,
                                min = 0
                        } = nodeHorizontalSeparationDistance;

                        me.maxNodeHorizontalSeparationDistance = max;

                        me.minNodeHorizontalSeparationDistance = min;

                        nodeHorizontalSeparationDistance = 0;
                    }

                    me.nodeHorizontalSeparationDistance = nodeHorizontalSeparationDistance;

                    if (nodeHorizontalLineBreakPointOffset > nodeHorizontalSeparationDistance) {

                        nodeHorizontalLineBreakPointOffset = nodeHorizontalSeparationDistance / 2;
                    }

                    me.nodeHorizontalLineBreakPointOffset = nodeHorizontalLineBreakPointOffset;

                    if (isNumber(padding)) {

                        me.padding = {
                            top: padding,
                            bottom: padding,
                            left: padding,
                            right: padding
                        };

                    } else if (isObject(padding)) {

                        me.padding = Object.assign({
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }, padding);

                    } else {

                        me.padding = {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        };
                    }

                    me.width = width;

                    me.height = height;

                    let mindmap = me,
                        {
                            fields: readerFields,
                            addFields: readerAddFields = () => {}
                        } = reader;

                    reader = me.reader = createReader({
                        ...readerFields,
                        id: {
                            convert() {

                                return generate();
                            }
                        },
                        parentNodeId: {
                            local: true,
                            mode: 'readwrite'
                        },
                        expanded: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        },
                        hidden: {
                            mode: 'readwrite',
                            local: true,
                            set(hidden) {

                                return setHidden(this, hidden);
                            },
                            defaultValue: true
                        },
                        level: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: -1
                        },
                        width: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        },
                        height: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        },
                        x: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: 0
                        },
                        y: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: 0
                        },
                        selected: {
                            mode: 'readwrite',
                            local: true,
                            set(selected) {

                                return setSelected(this, selected);

                            },
                            defaultValue: false
                        },
                        placeholder: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        },
                        restructuring: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        },
                        indicated: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false,
                            set(indicated) {

                                return setIndicated(this, indicated);
                            }
                        },
                        editing: {
                            mode: 'readwrite',
                            local: true,
                            defaultValue: false
                        }
                    }, readerAddFields.bind(me));

                    me.readConfig = readConfig;

                    let placeholderNode = create(Object.assign({
                        width: placeholderNodeWidth,
                        height: placeholderNodeHeight,
                        placeholder: true
                    }, placeholderNodeData));

                    me.placeholderNode = placeholderNode;


                    me.layout = buffer(doLayout);

                    me.refresh = buffer(doRefresh);

                }

                return main;

            })());
        }

        const main = var_current_scope_1613625470749.get(this);



        return main.call(this, {
            reader,
            readConfig,
            nodeSeparationDistance,
            nodeVerticalSeparationDistance,
            nodeHorizontalSeparationDistance,
            nodeHorizontalLineBreakPointOffset,
            nodeSpacing,
            placeholderNodeWidth,
            placeholderNodeHeight,
            padding,
            width,
            height,
            placeholderNodeData,
            layout,
            api
        });
    };

})();

exports['src::mindmap.load'] = (() => {

    let isDefined;

    let var_init_locked_1613625470783;




    /**
     * 
     * 初始化脑图数据
     * 
     * @import is.defined
     * 
     * @param {mixed} data 数据
     * 
     * @param {mixed} [readAsRoot] 获得脑图节点根读取入口
     * 
     */

    function main(data, readAsRoot) {

        let me = this,
            {
                reader,
                readConfig
            } = me;

        if (isDefined(readAsRoot)) {

            readConfig = Object.assign({}, readConfig, {
                root: readAsRoot
            });
        }

        let rootNode = reader.read(data, {
            ...readConfig,
            multi: false
        });

        if (rootNode) {

            register_node.call(me, rootNode);

            me.rootNode = rootNode;

            return rootNode;

        }
    }

    function register_node(node) {

        let {
            id,
            children
        } = node,
        me = this, {
            nodes
        } = me;

        nodes.set(id, node);

        for (let childNode of children) {

            register_node.call(me, childNode);
        }
    }

    return function(data, readAsRoot) {


        if (!var_init_locked_1613625470783) {

            isDefined = include('src::is.defined');

            var_init_locked_1613625470783 = true;
        }


        return main.call(this, data, readAsRoot);
    };

})();

exports['src::mindmap.node.sibling.previous'] = (() => {







    const var_current_scope_1613566323059 = new Map();

    return function(node) {





        if (!var_current_scope_1613566323059.has(this)) {

            var_current_scope_1613566323059.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);

                function main(node) {


                    /**
                     * 
                     * 返回节点的上兄弟节点
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @param {data.Record} node 
                     * 
                     * @return {data.Record} 上兄弟节点 
                     * 
                     */

                    let parentNode = getParentNode(node);

                    if (parentNode) {

                        let {
                            children
                        } = parentNode;

                        return children[children.indexOf(node) - 1];
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613566323059.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.sibling.next'] = (() => {







    const var_current_scope_1613566323070 = new Map();

    return function(node) {





        if (!var_current_scope_1613566323070.has(this)) {

            var_current_scope_1613566323070.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);

                function main(node) {


                    /**
                     * 
                     * 返回节点的下兄弟节点
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @param {data.Record} node 
                     * 
                     * @return {data.Record} 下兄弟节点 
                     * 
                     */

                    let parentNode = getParentNode(node);

                    if (parentNode) {

                        let {
                            children
                        } = parentNode;

                        return children[children.indexOf(node) + 1];
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613566323070.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.nodes.descendant'] = (() => {








    /**
     * 
     * 获得子孙节点
     * 
     * @param {data.Record} node 脑图节点
     * 
     * @return {array} 子孙节点数组 
     * 
     */

    function main(node) {

        return getDescendantNodes(node);
    }

    function getDescendantNodes({
        expanded,
        children
    }) {

        let result = [];

        if (expanded) {

            for (let childNode of children) {

                result.push(childNode);

                result.push(...getDescendantNodes(childNode));
            }

            return result;
        }

        return result;
    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.nodes.child'] = (() => {







    const var_current_scope_1613370221958 = new Map();

    return function(node) {





        if (!var_current_scope_1613370221958.has(this)) {

            var_current_scope_1613370221958.set(this, (() => {
                const cache = include('src::mindmap.layout.cache').bind(this);


                /**
                 * 
                 * 获得子节点集合
                 * 
                 * @import cache from mindmap.layout.cache scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {array} 子节点集合 
                 * 
                 */

                function main(node) {

                    return cache(node, 'getChildNodes', getChildNodes);
                }

                function getChildNodes(node) {

                    let {
                        children,
                        expanded
                    } = node;

                    if (!expanded) {

                        return [];
                    }

                    let result = [],
                        {
                            layoutNodes
                        } = this;

                    for (let childNode of children) {

                        if (layoutNodes.includes(childNode)) {

                            result.push(childNode);
                        }
                    }

                    return result;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613370221958.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.hide'] = (() => {







    const var_current_scope_1613707334244 = new Map();

    return function(node) {





        if (!var_current_scope_1613707334244.has(this)) {

            var_current_scope_1613707334244.set(this, (() => {
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);
                const hide = include('src::mindmap.node.hide').bind(this);

                function main(node) {


                    /**
                     * 
                     * 显示节点
                     * 
                     * @import getChildNodes from ..layout.nodes.child scoped
                     * 
                     * @import hide from .hide scoped
                     * 
                     * @param {data.Record} node 节点
                     * 
                     */

                    let {
                        hidden
                    } = node;

                    if (hidden) {

                        return;
                    }

                    let childNodes = getChildNodes(node);

                    for (let childNode of childNodes) {

                        hide(childNode);
                    }

                    node.hidden = true;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613707334244.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.show'] = (() => {







    const var_current_scope_1613465726059 = new Map();

    return function(node) {





        if (!var_current_scope_1613465726059.has(this)) {

            var_current_scope_1613465726059.set(this, (() => {
                const isLeaf = include('src::mindmap.node.is.leaf').bind(this);
                const show = include('src::mindmap.node.show').bind(this);

                function main(node) {


                    /**
                     * 
                     * 显示节点
                     * 
                     * @import isLeaf from .is.leaf scoped
                     * 
                     * @import show from .show scoped
                     * 
                     * @param {data.Record} node 节点
                     * 
                     */

                    let {
                        hidden
                    } = node;

                    if (!hidden) {

                        return;
                    }

                    node.hidden = false;

                    let {
                        expanded
                    } = node;

                    if (expanded) {

                        let {
                            children
                        } = node;

                        for (let childNode of children) {

                            show(childNode);
                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613465726059.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.expand'] = (() => {







    const var_current_scope_1613455282102 = new Map();

    return function(node) {





        if (!var_current_scope_1613455282102.has(this)) {

            var_current_scope_1613455282102.set(this, (() => {
                const show = include('src::mindmap.node.show').bind(this);
                const from = include('src::mindmap.node.from').bind(this);

                function main(node) {


                    /**
                     * 
                     * 展开节点
                     * 
                     * @import show from .show scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @param {mixed} node 节点
                     * 
                     * @return {boolean} 如果正确展开则返回 true , 否则返回 false
                     * 
                     */

                    node = from(node);

                    if (node) {

                        let {
                            expanded
                        } = node;

                        if (!expanded) {

                            node.expanded = true;

                            let {
                                children
                            } = node;

                            for (let childNode of children) {

                                show(childNode);
                            }

                            return true;
                        }
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613455282102.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.select'] = (() => {







    const var_current_scope_1613610502168 = new Map();

    return function(node) {





        if (!var_current_scope_1613610502168.has(this)) {

            var_current_scope_1613610502168.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const from = include('src::mindmap.node.from').bind(this);
                const expand = include('src::mindmap.node.expand').bind(this);

                function main(node) {


                    /**
                     * 
                     * 选定节点
                     * 
                     * @import data from .data scoped
                     * 
                     * @import getParentNode from .parent scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @import expand from .expand scoped
                     * 
                     * @param {mixed} node 脑图节点
                     * 
                     * @return {Boolean} 如果成功选定节点则返回 true , 否则返回  false
                     * 
                     */

                    node = from(node);

                    let me = this,
                        {
                            selectedNode
                        } = me;

                    if (node !== selectedNode) {

                        if (node.hidden) {

                            let parentNode,
                                baseNode = node,
                                parentNodes = [];

                            while (parentNode = getParentNode(baseNode)) {

                                parentNodes.unshift(parentNode);

                                if (!parentNode.hidden) {

                                    break;

                                } else {

                                    baseNode = parentNode;
                                }
                            }

                            for (let parentNode of parentNodes) {

                                expand(parentNode);

                            }
                        }

                        node.selected = true;

                        me.fireEvent('nodeselect', data(node), data(selectedNode));

                        return true;

                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613610502168.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.delete'] = (() => {







    const var_current_scope_1613702696682 = new Map();

    return function(node) {





        if (!var_current_scope_1613702696682.has(this)) {

            var_current_scope_1613702696682.set(this, (() => {
                const isRootNode = include('src::mindmap.node.is.root').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const getPreviousNode = include('src::mindmap.node.sibling.previous').bind(this);
                const getNextNode = include('src::mindmap.node.sibling.next').bind(this);
                const data = include('src::mindmap.node.data').bind(this);
                const getDescendantNodes = include('src::mindmap.nodes.descendant').bind(this);
                const hide = include('src::mindmap.node.hide').bind(this);
                const from = include('src::mindmap.node.from').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main(node) {


                    /**
                     * 
                     * 删除节点
                     * 
                     * @import isRootNode from .is.root scoped
                     * 
                     * @import getParentNode from .parent scoped
                     * 
                     * @import getPreviousNode from .sibling.previous scoped
                     * 
                     * @import getNextNode from .sibling.next scoped
                     * 
                     * @import data from .data scoped
                     * 
                     * @import getDescendantNodes from ..nodes.descendant scoped
                     * 
                     * @import hide from .hide scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @import select from .select scoped
                     * 
                     * @param {mixed} node 节点
                     * 
                     * @return {boolean} 删除标识
                     */

                    node = from(node);

                    let parentNode = getParentNode(node);

                    if (!isRootNode(node)) {

                        select(getPreviousNode(node) || getNextNode(node) || parentNode);

                        hide(node);

                        let nodes = [
                                node,
                                ...getDescendantNodes(node)
                            ],
                            me = this,
                            {
                                nodes: originNodes
                            } = me;

                        for (let node of nodes) {

                            node.parentNodeId = null;

                            node.children.length = 0;

                            node.hidden = false;

                            node.selected = false;

                            originNodes.delete(node.id);
                        }

                        let {
                            children
                        } = parentNode;

                        children.splice(children.indexOf(node), 1);

                        me.fireEvent('nodedelete', data(node));

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613702696682.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.destroy'] = (() => {







    const var_current_scope_1613465726067 = new Map();

    return function() {





        if (!var_current_scope_1613465726067.has(this)) {

            var_current_scope_1613465726067.set(this, (() => {
                const remove = include('src::mindmap.node.delete').bind(this);

                function main() {


                    /**
                     * 
                     * 销毁脑图实例
                     * 
                     * @import remove from .node.delete scoped
                     * 
                     */

                    let me = this,
                        {
                            rootNode,
                            nodes,
                            visibilityNodes
                        } = me,
                        {
                            children
                        } = rootNode;

                    me.removeAllListeners();

                    for (let childNode of children) {

                        remove(childNode);
                    }

                    nodes.clear();

                    visibilityNodes.clear();








                }

                return main;

            })());
        }

        const main = var_current_scope_1613465726067.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.resize'] = (() => {







    const var_current_scope_1608956299223 = new Map();

    return function(width, height) {





        if (!var_current_scope_1608956299223.has(this)) {

            var_current_scope_1608956299223.set(this, (() => {
                const layout = include('src::mindmap.layout').bind(this);

                function main(width, height) {


                    /**
                     * 
                     * 重新计算大小
                     * 
                     * @import layout from .layout scoped
                     * 
                     * @param {number} width 宽度
                     * 
                     * @param {number} height 高度
                     * 
                     */
                    let me = this,
                        {
                            width: mindmapWidth,
                            height: mindmapHeight
                        } = me;

                    if (mindmapWidth !== width || mindmapHeight !== height) {

                        me.width = width;

                        me.height = height;

                        delete me.region;

                        layout();

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956299223.get(this);



        return main.call(this, width, height);
    };

})();

exports['src::mindmap.deselect'] = (() => {







    function main() {


        /**
         * 
         * 取消脑图选择
         * 
         */

        let me = this,
            {
                selectedNode
            } = me;

        if (selectedNode) {

            selectedNode.selected = false;

            me.layout();
        }

    }

    return function() {



        return main.call(this);
    };

})();

exports['src::mindmap.node.root'] = (() => {







    function main() {


        /**
         * 
         * 获得实际的根节点
         * 
         * @return {data.Record} 根节点 
         * 
         */

        return this.rootNode;

    }

    return function() {



        return main.call(this);
    };

})();

exports['src::mindmap.nodes.relation.descendant'] = (() => {

    let getDescendantNodes;

    let var_init_locked_1613568804328;



    function main(node, isVisible) {


        /**
         * 
         * 获取所有子孙节点
         * 
         * @import getDescendantNodes from .descendant
         * 
         * @param {data.Reocrd} node 节点
         * 
         * @param {boolean} [isVisible = true] 是否只获取可见的节点
         * 
         * @return {array} 节点集合
         * 
         */

        let {
            descendantNodes
        } = node;

        if (descendantNodes) {

            return descendantNodes;
        }

        let {
            expanded,
            children
        } = node;

        descendantNodes = node.descendantNodes = [];

        if (expanded || !isVisible) {

            for (let childNode of children) {

                descendantNodes.push(childNode, ...getDescendantNodes(childNode, isVisible));
            }

        }

        return descendantNodes;

    }

    return function(node, isVisible = true) {


        if (!var_init_locked_1613568804328) {

            getDescendantNodes = include('src::mindmap.nodes.relation.descendant');

            var_init_locked_1613568804328 = true;
        }


        return main.call(this, node, isVisible);
    };

})();

exports['src::mindmap.node.expand.deep'] = (() => {







    const var_current_scope_1613308340469 = new Map();

    return function(node, level = 1) {





        if (!var_current_scope_1613308340469.has(this)) {

            var_current_scope_1613308340469.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);
                const expand = include('src::mindmap.node.expand').bind(this);


                /**
                 * 
                 * 深度展开节点
                 * 
                 * @import from from ..from scoped
                 * 
                 * @import expand from ..expand scoped
                 * 
                 * @param {mixed} node 脑图节点
                 * 
                 * @param {number} [level = 1] 展开层次
                 * 
                 * @return {boolean} 如果有展开动作则返回 true , 否则返回 false
                 * 
                 */

                function main(node, level) {

                    return doDeepExpand(from(node), 0, level);
                }

                function doDeepExpand(node, level, maxLevel) {

                    node.hidden = false;

                    level++;

                    if (level <= maxLevel) {

                        let isExpand = false;

                        if (expand(node)) {

                            isExpand = true;
                        }

                        let {
                            children
                        } = node;

                        for (let childNode of children) {

                            if (doDeepExpand(childNode, level, maxLevel)) {

                                isExpand = true;
                            }
                        }

                        if (isExpand) {

                            return true;
                        }
                    }

                    return false;
                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340469.get(this);



        return main.call(this, node, level);
    };

})();

exports['src::mindmap.data.node.from'] = (() => {

    let isString, isObject;

    let var_init_locked_1608956298947;



    const var_current_scope_1608956298947 = new Map();

    return function(node) {


        if (!var_init_locked_1608956298947) {

            isString = include('src::is.string');
            isObject = include('src::is.object');

            var_init_locked_1608956298947 = true;
        }




        if (!var_current_scope_1608956298947.has(this)) {

            var_current_scope_1608956298947.set(this, (() => {
                const from = include('src::mindmap.data.node.from').bind(this);

                function main(node) {


                    /**
                     * 
                     * 根据所提供的标识来获得脑图节点
                     * 
                     * @import is.string
                     * 
                     * @import isObject from is.object
                     * 
                     * @import from from .from scoped
                     * 
                     * @param {mixed} node 脑图节点标识
                     * 
                     * @return {data.Record} 脑图节点 
                     * 
                     */

                    let {
                        nodes
                    } = this;

                    if (isString(node)) {

                        return nodes.get(node);

                    } else if (isObject(node)) {

                        let {
                            id
                        } = node;

                        return from(id);
                    }



                }

                return main;

            })());
        }

        const main = var_current_scope_1608956298947.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.data.nodes.descendant'] = (() => {







    const var_current_scope_1613308340390 = new Map();

    return function(node, fn) {





        if (!var_current_scope_1613308340390.has(this)) {

            var_current_scope_1613308340390.set(this, (() => {
                const from = include('src::mindmap.data.node.from').bind(this);


                /**
                 * 
                 * 获得所有的子孙节点
                 * 
                 * @import from from ..node.from scoped
                 * 
                 * @param {mixed} node 脑图节点
                 * 
                 * @param {function} fn 查询条件函数
                 * 
                 * @return {array} 节点集合 
                 * 
                 */

                function main(node, fn) {

                    node = from(node);

                    let nodes = getDescendantNodes(node, fn || (() => ({
                        result: true,
                        next: true
                    })));

                    if (nodes.length && nodes[0].id === node.id) {

                        nodes.shift();
                    }

                    return nodes;
                }

                function getDescendantNodes(node, fn) {

                    let {
                        result,
                        next
                    } = fn(node),
                        nodes = [];

                    if (result) {

                        nodes.push(node);
                    }

                    if (next) {

                        let {
                            children
                        } = node;

                        for (let childNode of children) {

                            nodes.push(...getDescendantNodes(childNode, fn));
                        }
                    }

                    return nodes;
                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340390.get(this);



        return main.call(this, node, fn);
    };

})();

exports['src::mindmap.node.collapse.deep'] = (() => {







    const var_current_scope_1613308340478 = new Map();

    return function(node) {





        if (!var_current_scope_1613308340478.has(this)) {

            var_current_scope_1613308340478.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);
                const getDescendantNodes = include('src::mindmap.data.nodes.descendant').bind(this);

                function main(node) {


                    /**
                     * 
                     * 深度收起
                     * 
                     * @import from from ..from scoped
                     * 
                     * @import getDescendantNodes from ....data.nodes.descendant scoped
                     * 
                     * @param {mixed} node 脑图节点
                     * 
                     * 
                     */

                    node = from(node);

                    if (!node.hidden) {

                        node.expanded = false;

                        let nodes = getDescendantNodes(node),
                            isCollapse = false;

                        for (let node of nodes) {

                            let {
                                children,
                                expanded,
                                hidden
                            } = node;

                            if (!hidden && children.length && expanded) {

                                isCollapse = true;
                            }

                            node.expanded = false;

                            node.hidden = true;
                        }

                        return isCollapse;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340478.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.reset'] = (() => {







    const var_current_scope_1613308340475 = new Map();

    return function(rootNode, level = 1) {





        if (!var_current_scope_1613308340475.has(this)) {

            var_current_scope_1613308340475.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);
                const getDescendantNodes = include('src::mindmap.nodes.relation.descendant').bind(this);
                const expand = include('src::mindmap.node.expand.deep').bind(this);
                const collapse = include('src::mindmap.node.collapse.deep').bind(this);

                function main(rootNode, level) {


                    /**
                     * 
                     * 重置脑图
                     * 
                     * @import from from .from scoped
                     * 
                     * @import getDescendantNodes from ..nodes.relation.descendant scoped
                     * 
                     * @import expand from .expand.deep scoped
                     * 
                     * @import collapse from .collapse.deep scoped
                     * 
                     * @param {mixed} rootNode 脑图节点
                     * 
                     * @param {number} [level = 1] 显示层数
                     * 
                     * @return {boolean} 如果发生重置行为则返回 true , 否则返回 false
                     * 
                     */

                    rootNode = from(rootNode);

                    let {
                        level: maxNodeLevel
                    } = rootNode,
                    isReset = false;

                    if (expand(rootNode, level)) {

                        isReset = true;
                    }

                    maxNodeLevel += level;

                    let nodes = getDescendantNodes(rootNode);

                    for (let node of nodes) {

                        let {
                            level: nodeLevel
                        } = node;

                        if (nodeLevel === maxNodeLevel) {

                            if (collapse(node)) {

                                isReset = true;
                            }
                        }
                    }

                    return isReset;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340475.get(this);



        return main.call(this, rootNode, level);
    };

})();

exports['src::mindmap.reset'] = (() => {







    const var_current_scope_1613308340555 = new Map();

    return function(level) {





        if (!var_current_scope_1613308340555.has(this)) {

            var_current_scope_1613308340555.set(this, (() => {
                const getRootNode = include('src::mindmap.node.root').bind(this);
                const reset = include('src::mindmap.node.reset').bind(this);
                const select = include('src::mindmap.select').bind(this);

                function main(level) {


                    /**
                     * 
                     * 重置脑图
                     * 
                     * @import getRootNode from .node.root scoped
                     * 
                     * @import reset from .node.reset scoped
                     * 
                     * @import select from .select scoped
                     * 
                     * @param {number} [level] 显示层数
                     * 
                     */

                    let rootNode = getRootNode(),
                        isSelect = select(rootNode),
                        isReset = reset(rootNode, level);

                    if (!isSelect && isReset) {

                        this.layout();
                    }





                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340555.get(this);



        return main.call(this, level);
    };

})();

exports['src::mindmap.node.focus'] = (() => {







    const var_current_scope_1613308340473 = new Map();

    return function(node, level) {





        if (!var_current_scope_1613308340473.has(this)) {

            var_current_scope_1613308340473.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);
                const reset = include('src::mindmap.node.reset').bind(this);

                function main(node, level) {


                    /**
                     * 
                     * 聚焦节点
                     * 
                     * @import from from .from scoped
                     * 
                     * @import reset from .reset scoped
                     * 
                     * @param {mixed} node 脑图节点
                     * 
                     * @param {number} [level] 显示层数
                     * 
                     * @return {boolean} 如果聚焦成功则返回 true , 否则返回 false
                     * 
                     */

                    let me = this,
                        {
                            focusNode
                        } = me;

                    node = from(node);

                    if (focusNode !== node) {

                        reset(node, level);

                        me.focusNode = node;

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340473.get(this);



        return main.call(this, node, level);
    };

})();

exports['src::mindmap.focus'] = (() => {







    const var_current_scope_1613308340471 = new Map();

    return function(node, level) {





        if (!var_current_scope_1613308340471.has(this)) {

            var_current_scope_1613308340471.set(this, (() => {
                const getRootNode = include('src::mindmap.node.root').bind(this);
                const select = include('src::mindmap.select').bind(this);
                const focus = include('src::mindmap.node.focus').bind(this);

                function main(node, level) {


                    /**
                     * 
                     * 聚焦节点
                     * 
                     * @import getRootNode from .node.root scoped
                     * 
                     * @import select from .select scoped
                     * 
                     * @import focus from .node.focus scoped
                     * 
                     * @param {mixed} node 脑图节点
                     * 
                     * @param {number} [level] 显示层数
                     * 
                     */

                    let isSelect = select(node),
                        isFocus = focus(node, level);

                    if (!isSelect && isFocus) {

                        this.layout();
                    }



                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340471.get(this);



        return main.call(this, node, level);
    };

})();

exports['src::mindmap.node.collapse'] = (() => {







    const var_current_scope_1613455282110 = new Map();

    return function(node) {





        if (!var_current_scope_1613455282110.has(this)) {

            var_current_scope_1613455282110.set(this, (() => {
                const hide = include('src::mindmap.node.hide').bind(this);
                const select = include('src::mindmap.node.select').bind(this);
                const from = include('src::mindmap.node.from').bind(this);

                function main(node) {


                    /**
                     * 
                     * 收起节点
                     * 
                     * @import hide from .hide scoped
                     * 
                     * @import select from .select scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @param {mixed} node 脑图节点
                     * 
                     * @return {boolean} 如果收起动作执行则返回 true , 否则返回 false
                     * 
                     */

                    node = from(node);

                    let {
                        expanded
                    } = node;

                    if (expanded) {

                        let {
                            children
                        } = node, {
                            selectedNode
                        } = this;

                        for (let childNode of children) {

                            hide(childNode);
                        }

                        node.expanded = false;

                        if (selectedNode.hidden) {

                            select(node);
                        }

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613455282110.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.value.set'] = (() => {

    let equals, clone;

    let var_init_locked_1613640663311;



    const var_current_scope_1613640663311 = new Map();

    return function(field, value, node) {


        if (!var_init_locked_1613640663311) {

            equals = include('src::data.equals');
            clone = include('src::data.clone');

            var_init_locked_1613640663311 = true;
        }




        if (!var_current_scope_1613640663311.has(this)) {

            var_current_scope_1613640663311.set(this, (() => {
                const from = include('src::mindmap.node.from').bind(this);
                const data = include('src::mindmap.node.data').bind(this);

                function main(field, value, node) {

                    /**
                     * 
                     * 设置或获取节点值
                     * 
                     * @import equals from data.equals
                     * 
                     * @import clone from data.clone
                     * 
                     * @import from from ..from scoped
                     * 
                     * @import data from ..data scoped
                     * 
                     * @param {string} field 字段名称
                     * 
                     * @param {mixed} value 字段值
                     * 
                     * @param {mixed} [node] 节点
                     * 
                     */

                    node = from(node);

                    let oldValue = node[field],
                        newValue = node[field] = clone(value),
                        {
                            id
                        } = node;

                    if (!equals(newValue, oldValue)) {

                        node = data(node);

                        let me = this;

                        me.fireEvent(`node${field.toLowerCase()}change`, node, value, oldValue);

                        me.fireEvent('nodechange', node, field, value, oldValue);

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613640663311.get(this);



        return main.call(this, field, value, node);
    };

})();

exports['src::mindmap.node.child.last'] = (() => {







    function main(node) {


        /**
         * 
         * 获取第一个子节点
         * 
         * @param {data.Record} node 节点
         * 
         */

        let {
            children
        } = node, {
            length
        } = children;

        if (length) {

            return children[length - 1];
        }

    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.append'] = (() => {







    const var_current_scope_1613704362235 = new Map();

    return function(node, parentNode) {





        if (!var_current_scope_1613704362235.has(this)) {

            var_current_scope_1613704362235.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);
                const show = include('src::mindmap.node.show').bind(this);
                const getLastChildNode = include('src::mindmap.node.child.last').bind(this);
                const from = include('src::mindmap.node.from').bind(this);

                function main(node, parentNode) {


                    /**
                     * 
                     * 添加子节点
                     * 
                     * @import data from .data scoped
                     * 
                     * @import show from .show scoped
                     * 
                     * @import getLastChildNode from .child.last scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @param {mixed} node 节点配置
                     * 
                     * @param {mixed} parentNode 节点
                     * 
                     * @return {boolean} 添加标识
                     * 
                     */

                    node = from(node);

                    parentNode = from(parentNode);

                    if ((parentNode === node || getLastChildNode(parentNode) === node)) {

                        return false;

                    }

                    if (node.parentNodeId) {

                        let {
                            children
                        } = getParentNode(node);

                        node.parentNodeId = null;

                        node.hidden = true;

                        children.splice(children.indexOf(node), 1);
                    }

                    let {
                        children,
                        hidden,
                        expanded
                    } = parentNode;

                    children.push(node);

                    node.parentNodeId = parentNode.id;

                    if (!hidden && expanded) {

                        show(node);
                    }

                    this.fireEvent('nodeappend', data(node), data(parentNode));

                    return true;



                }

                return main;

            })());
        }

        const main = var_current_scope_1613704362235.get(this);



        return main.call(this, node, parentNode);
    };

})();

exports['src::mindmap.node.append.new'] = (() => {







    const var_current_scope_1613703183716 = new Map();

    return function(parentNode) {





        if (!var_current_scope_1613703183716.has(this)) {

            var_current_scope_1613703183716.set(this, (() => {
                const create = include('src::mindmap.node.create').bind(this);
                const append = include('src::mindmap.node.append').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main(parentNode) {


                    /**
                     * 
                     * 添加新建节点
                     * 
                     * @import create from ..create scoped
                     * 
                     * @import append from ..append scoped
                     * 
                     * @import select from ..select scoped
                     * 
                     * @param {mixed} [parentNode] 参照节点
                     * 
                     * @return {boolea} 添加状态标识
                     * 
                     */

                    let node = create();

                    if (append(node, parentNode)) {

                        select(node);

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613703183716.get(this);



        return main.call(this, parentNode);
    };

})();

exports['src::mindmap.node.insert'] = (() => {







    const var_current_scope_1613700972954 = new Map();

    return function(insertNode, baseNode, region) {





        if (!var_current_scope_1613700972954.has(this)) {

            var_current_scope_1613700972954.set(this, (() => {
                const data = include('src::mindmap.node.data').bind(this);
                const isRootNode = include('src::mindmap.node.is.root').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const getPreviousNode = include('src::mindmap.node.sibling.previous').bind(this);
                const getNextNode = include('src::mindmap.node.sibling.next').bind(this);
                const show = include('src::mindmap.node.show').bind(this);
                const from = include('src::mindmap.node.from').bind(this);

                function main(insertNode, baseNode, region) {


                    /**
                     * 
                     * 插入节点
                     * 
                     * @import data from .data scoped
                     * 
                     * @import isRootNode from .is.root scoped
                     * 
                     * @import getParentNode from .parent scoped
                     * 
                     * @import getPreviousNode from .sibling.previous scoped
                     * 
                     * @import getNextNode from .sibling.next scoped
                     * 
                     * @import show from .show scoped
                     * 
                     * @import from from .from scoped
                     * 
                     * @param {mixed} insertNode 需要插入的节点
                     * 
                     * @param {mixed} baseNode 参照节点
                     * 
                     * @param {string} region 插入偏移位置
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    insertNode = from(insertNode);

                    baseNode = from(baseNode);

                    if (!isRootNode(baseNode)) {

                        if (insertNode) {

                            if (insertNode === baseNode) {

                                return false;
                            }

                            switch (region) {

                                case 'before':

                                    if (getPreviousNode(baseNode) === insertNode) {

                                        return false;
                                    }

                                    break;

                                case 'after':

                                    if (getNextNode(baseNode) === insertNode) {

                                        return false;
                                    }
                            }
                        }

                        if (insertNode.parentNodeId) {

                            let {
                                children
                            } = getParentNode(insertNode);

                            insertNode.parentNodeId = null;

                            insertNode.hidden = true;

                            children.splice(children.indexOf(insertNode), 1);
                        }

                        let parentNode = getParentNode(baseNode),
                            {
                                children
                            } = parentNode,
                            {
                                length
                            } = children;

                        let index = children.indexOf(baseNode);

                        if (region === 'after') {

                            index++;
                        }

                        if (index > length - 1) {

                            index = length;

                        }

                        children.splice(index, 0, insertNode);

                        insertNode.parentNodeId = parentNode.id;

                        if (!baseNode.hidden) {

                            show(insertNode);
                        }

                        this.fireEvent(`nodeinsert${region}`, data(insertNode), data(baseNode), data(parentNode));

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613700972954.get(this);



        return main.call(this, insertNode, baseNode, region);
    };

})();

exports['src::mindmap.node.insert.new'] = (() => {







    const var_current_scope_1613700972942 = new Map();

    return function(baseNode, region) {





        if (!var_current_scope_1613700972942.has(this)) {

            var_current_scope_1613700972942.set(this, (() => {
                const create = include('src::mindmap.node.create').bind(this);
                const insert = include('src::mindmap.node.insert').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main(baseNode, region) {


                    /**
                     * 
                     * 插入新建节点
                     * 
                     * @import create from ..create scoped
                     * 
                     * @import insert from ..insert scoped
                     * 
                     * @import select from ..select scoped
                     * 
                     * @param {mixed} baseNode 参照节点
                     * 
                     * @param {string} region 位置
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    let insertNode = create();

                    if (insert(insertNode, baseNode, region)) {

                        select(insertNode);

                        return true;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613700972942.get(this);



        return main.call(this, baseNode, region);
    };

})();

exports['src::mindmap.node.insert.new.before'] = (() => {







    const var_current_scope_1613634000869 = new Map();

    return function(beforeNode) {





        if (!var_current_scope_1613634000869.has(this)) {

            var_current_scope_1613634000869.set(this, (() => {
                const insert = include('src::mindmap.node.insert.new').bind(this);

                function main(beforeNode) {


                    /**
                     * 
                     * 插入创建节点
                     * 
                     * @import insert from ..new scoped
                     * 
                     * @param {data.Record} beforeNode 参照节点
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    return insert(beforeNode, 'before');

                }

                return main;

            })());
        }

        const main = var_current_scope_1613634000869.get(this);



        return main.call(this, beforeNode);
    };

})();

exports['src::mindmap.node.insert.new.after'] = (() => {







    const var_current_scope_1613634000877 = new Map();

    return function(afterNode) {





        if (!var_current_scope_1613634000877.has(this)) {

            var_current_scope_1613634000877.set(this, (() => {
                const insert = include('src::mindmap.node.insert.new').bind(this);

                function main(afterNode) {


                    /**
                     * 
                     * 插入创建节点
                     * 
                     * @import insert from ..new scoped
                     * 
                     * @param {data.Record} afterNode 参照节点
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    return insert(afterNode, 'after');

                }

                return main;

            })());
        }

        const main = var_current_scope_1613634000877.get(this);



        return main.call(this, afterNode);
    };

})();

exports['src::mindmap.node.restructure.start'] = (() => {

    let getDescendantNodes;

    let var_init_locked_1608956299343;



    const var_current_scope_1608956299343 = new Map();

    return function(id) {


        if (!var_init_locked_1608956299343) {

            getDescendantNodes = include('src::mindmap.nodes.relation.descendant');

            var_init_locked_1608956299343 = true;
        }




        if (!var_current_scope_1608956299343.has(this)) {

            var_current_scope_1608956299343.set(this, (() => {
                const isRootNode = include('src::mindmap.node.is.root').bind(this);
                const fireDrawEvent = include('src::mindmap.fire.draw').bind(this);
                const get = include('src::mindmap.node.get').bind(this);

                function main(id) {


                    /**
                     * 
                     * 开始重组节点
                     * 
                     * @import getDescendantNodes from ....nodes.relation.descendant
                     * 
                     * @import isRootNode from ....node.is.root scoped
                     * 
                     * @import fireDrawEvent from ....fire.draw scoped
                     * 
                     * @import get from ..get scoped
                     * 
                     * @param {string} id 节点编号
                     * 
                     */

                    let me = this,
                        selectedNode = get(id);

                    if (!selectedNode || isRootNode(selectedNode)) {

                        return;
                    }

                    me.restructuring = true;

                    selectedNode.restructuring = true;

                    me.restructuredNode = selectedNode;

                    let nodes = getDescendantNodes(selectedNode);

                    for (let node of nodes) {

                        node.restructuring = true;
                    }

                    fireDrawEvent();

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956299343.get(this);



        return main.call(this, id);
    };

})();

exports['src::mindmap.node.is.visibility'] = (() => {







    function main(node) {


        /**
         * 
         * 是否为可见节点
         * 
         * @param {data.Record}  node
         * 
         * @return {boolean} 如果为可见节点则返回 true , 否则返回 false 
         * 
         */

        return node.hidden === false;

    }

    return function(node) {



        return main.call(this, node);
    };

})();

exports['src::mindmap.node.insert.before'] = (() => {







    const var_current_scope_1613566323036 = new Map();

    return function(insertNode, beforeNode) {





        if (!var_current_scope_1613566323036.has(this)) {

            var_current_scope_1613566323036.set(this, (() => {
                const insert = include('src::mindmap.node.insert').bind(this);

                function main(insertNode, beforeNode) {


                    /**
                     * 
                     * 插入节点
                     * 
                     * @import insert from ..insert scoped
                     * 
                     * @param {data.Record} insertNode 需要插入的节点
                     * 
                     * @param {data.Record} beforeNode 参照节点
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    return insert(insertNode, beforeNode, 'before');

                }

                return main;

            })());
        }

        const main = var_current_scope_1613566323036.get(this);



        return main.call(this, insertNode, beforeNode);
    };

})();

exports['src::mindmap.node.insert.after'] = (() => {







    const var_current_scope_1613566323055 = new Map();

    return function(insertNode, afterNode) {





        if (!var_current_scope_1613566323055.has(this)) {

            var_current_scope_1613566323055.set(this, (() => {
                const insert = include('src::mindmap.node.insert').bind(this);

                function main(insertNode, afterNode) {


                    /**
                     * 
                     * 插入节点
                     * 
                     * @import insert from ..insert scoped
                     * 
                     * @param {data.Record} insertNode 需要插入的节点
                     * 
                     * @param {data.Record} afterNode 参照节点
                     * 
                     * @return {boolea} 插入状态标识
                     * 
                     */

                    return insert(insertNode, afterNode, 'after');

                }

                return main;

            })());
        }

        const main = var_current_scope_1613566323055.get(this);



        return main.call(this, insertNode, afterNode);
    };

})();

exports['src::mindmap.node.restructure.preinsert'] = (() => {

    let is, getOutOfBoundOffsetY, contains, from;

    let var_init_locked_1608956299352;



    const var_current_scope_1608956299352 = new Map();

    return function(node, xy) {


        if (!var_init_locked_1608956299352) {

            is = include('src::mindmap.node.is.visibility');
            getOutOfBoundOffsetY = include('src::math.region.outOfBoundOffset.y');
            contains = include('src::math.region.contains');
            from = include('src::math.region.from');

            var_init_locked_1608956299352 = true;
        }




        if (!var_current_scope_1608956299352.has(this)) {

            var_current_scope_1608956299352.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const insertBefore = include('src::mindmap.node.insert.before').bind(this);
                const insertAfter = include('src::mindmap.node.insert.after').bind(this);
                const data = include('src::mindmap.node.data').bind(this);

                function main(node, xy) {


                    /**
                     * 
                     * 预插入节点
                     * 
                     * @import is from ..is.visibility
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @import insertBefore from ..insert.before scoped
                     * 
                     * @import insertAfter from ..insert.after scoped
                     * 
                     * @import getOutOfBoundOffsetY from math.region.outOfBoundOffset.y
                     * 
                     * @import contains from math.region.contains
                     * 
                     * @import from from math.region.from
                     * 
                     * @import data from ..data scoped
                     * 
                     * @param {data.Record} node 节点
                     * 
                     * @param {object} xy 坐标信息
                     * 
                     * @return {boolean} 插入如果成功执行则返回 true , 否则返回 false
                     * 
                     */

                    if (is(node)) {

                        let region = from(data(node)),
                            {
                                y
                            } = xy,
                            outY = getOutOfBoundOffsetY(region, y),
                            {
                                placeholderNode
                            } = this,
                            result;

                        if (outY > 0) {

                            result = insertBefore(placeholderNode, node);

                        } else if (outY < 0) {

                            result = insertAfter(placeholderNode, node);

                        } else {

                            let {
                                top: nodeY
                            } = region, {
                                height
                            } = node;

                            if (y <= nodeY + height / 2) {

                                result = insertBefore(placeholderNode, node);

                            } else {

                                result = insertAfter(placeholderNode, node);
                            }
                        }

                        return !!result;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1608956299352.get(this);



        return main.call(this, node, xy);
    };

})();

exports['src::mindmap.node.is.normal'] = (() => {

    let is;

    let var_init_locked_1608956299055;



    function main(node) {


        /**
         * 
         * 是否为正常可见节点
         * 
         * @import is from .visibility
         * 
         * @param {data.Record}  node
         * 
         * @return {boolean} 如果为正常节点则返回 true , 否则返回 false 
         * 
         */

        return is(node) && node.placeholder === false && node.restructuring === false;

    }

    return function(node) {


        if (!var_init_locked_1608956299055) {

            is = include('src::mindmap.node.is.visibility');

            var_init_locked_1608956299055 = true;
        }


        return main.call(this, node);
    };

})();

exports['src::mindmap.node.restructure'] = (() => {

    let getOutOfBoundOffsetY, from, is;

    let var_init_locked_1613308340539;



    const var_current_scope_1613308340539 = new Map();

    return function(xy, id) {


        if (!var_init_locked_1613308340539) {

            getOutOfBoundOffsetY = include('src::math.region.outOfBoundOffset.y');
            from = include('src::math.region.from');
            is = include('src::mindmap.node.is.normal');

            var_init_locked_1613308340539 = true;
        }




        if (!var_current_scope_1613308340539.has(this)) {

            var_current_scope_1613308340539.set(this, (() => {
                const expand = include('src::mindmap.node.expand').bind(this);
                const preinsert = include('src::mindmap.node.restructure.preinsert').bind(this);
                const append = include('src::mindmap.node.append').bind(this);
                const get = include('src::mindmap.node.get').bind(this);

                function main(xy, id) {


                    /**
                     * 
                     * 重构
                     * 
                     * @import expand from .expand scoped
                     * 
                     * @import preinsert from .restructure.preinsert scoped
                     * 
                     * @import append from .append scoped
                     * 
                     * @import getOutOfBoundOffsetY from math.region.outOfBoundOffset.y
                     * 
                     * @import from from math.region.from
                     * 
                     * @import get from .get scoped
                     * 
                     * @import is from .is.normal
                     * 
                     * @param {object} xy 坐标
                     * 
                     * @param {string} [id] 节点编号
                     * 
                     */

                    let me = this,
                        {
                            restructureIndicateLocked,
                            restructuring,
                            visibilityNodes,
                            placeholderNode
                        } = me;

                    if (!restructuring || restructureIndicateLocked) {

                        return;
                    }

                    if (id) {

                        let node = get(id);

                        if (is(node) && preinsert(node, xy)) {

                            me.layout();
                        }

                    } else {

                        let parentNode = visibilityNodes.getNearestParentNode(xy);

                        if (parentNode) {

                            parentNode.indicated = true;

                            if (!parentNode.expanded) {

                                me.restructureIndicateLocked = true;

                                expand(parentNode);

                                me.layout();

                                me.restructureIndicateLocked = false;

                                return;

                            }

                            let {
                                children
                            } = parentNode, {
                                y
                            } = xy;

                            for (let childNode of children) {

                                if (!is(childNode)) {

                                    continue;
                                }

                                let offsetY = getOutOfBoundOffsetY(from(childNode), y);

                                if (offsetY >= 0) {

                                    if (preinsert(childNode, xy)) {

                                        me.layout();
                                    }

                                    return;
                                }
                            }

                            if (append(placeholderNode, parentNode)) {

                                me.layout();
                            }
                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340539.get(this);



        return main.call(this, xy, id);
    };

})();

exports['src::mindmap.node.restructure.end'] = (() => {

    let getDescendantNodes, is;

    let var_init_locked_1613308340534;



    const var_current_scope_1613308340534 = new Map();

    return function(beforeMoveFn = () => true) {


        if (!var_init_locked_1613308340534) {

            getDescendantNodes = include('src::mindmap.nodes.relation.descendant');
            is = include('src::mindmap.node.is.visibility');

            var_init_locked_1613308340534 = true;
        }




        if (!var_current_scope_1613308340534.has(this)) {

            var_current_scope_1613308340534.set(this, (() => {
                const fireDrawEvent = include('src::mindmap.fire.draw').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const remove = include('src::mindmap.node.delete').bind(this);
                const insertBefore = include('src::mindmap.node.insert.before').bind(this);
                const show = include('src::mindmap.node.show').bind(this);
                const data = include('src::mindmap.node.data').bind(this);
                const getPreviousSibling = include('src::mindmap.node.sibling.previous').bind(this);
                const getNextSibling = include('src::mindmap.node.sibling.next').bind(this);
                const doOrder = include('src::mindmap.order').bind(this);

                function main(beforeMoveFn) {


                    /**
                     * 
                     * 结束重组节点
                     * 
                     * @import getDescendantNodes from ....nodes.relation.descendant
                     * 
                     * @import fireDrawEvent from ....fire.draw scoped
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @import remove from ..delete scoped
                     * 
                     * @import insertBefore from ..insert.before scoped
                     * 
                     * @import show from ..show scoped
                     * 
                     * @import is from ..is.visibility
                     * 
                     * @import data from ..data scoped
                     * 
                     * @import getPreviousSibling from ..sibling.previous scoped
                     * 
                     * @import getNextSibling from ..sibling.next scoped
                     * 
                     * @import doOrder from ....order scoped
                     * 
                     * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
                     * 
                     */

                    let me = this,
                        {
                            restructuredNode: selectedNode,
                            restructureIndicatedNode,
                            placeholderNode
                        } = me;

                    if (!selectedNode) {

                        return;
                    }

                    if (restructureIndicatedNode) {

                        restructureIndicatedNode.indicated = false;

                        delete me.restructureIndicatedNode;
                    }

                    let fireEvent;

                    if (is(placeholderNode)) {

                        let oldPreviousSibling = getPreviousSibling(selectedNode),
                            oldParentNode = getParentNode(selectedNode),
                            position,
                            siblingNode;

                        if (siblingNode = getPreviousSibling(placeholderNode)) {

                            position = 'after';

                        } else if (siblingNode = getNextSibling(placeholderNode)) {

                            position = 'before';

                        } else {

                            position = 'append';
                        }

                        if (beforeMoveFn(position, data(getParentNode(placeholderNode)), data(selectedNode), siblingNode) !== false) {

                            let {
                                selected
                            } = selectedNode;

                            insertBefore(selectedNode, placeholderNode);

                            selectedNode.selected = selected;
                        }

                        remove(placeholderNode);

                        let parentNode = getParentNode(selectedNode);

                        if (!(oldParentNode === parentNode && oldPreviousSibling === getPreviousSibling(selectedNode))) {

                            fireEvent = () => {

                                me.fireEvent('nodemove', data(selectedNode), data(parentNode), oldParentNode);

                                doOrder(parentNode);

                            };


                        }
                    }

                    delete me.restructuring;

                    delete me.restructuredNode;

                    selectedNode.restructuring = false;

                    let nodes = getDescendantNodes(selectedNode);

                    for (let node of nodes) {

                        node.restructuring = false;
                    }

                    if (fireEvent) {

                        fireEvent();

                    }

                    me.layout();


                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340534.get(this);



        return main.call(this, beforeMoveFn);
    };

})();

exports['src::mindmap.layout.pattern.logic.right'] = (() => {

    let getHeight, getWidth, setAnchorY, getY, add, intersect, contains;

    let var_init_locked_1613789851007;



    const var_current_scope_1613789851007 = new Map();

    return function(node) {


        if (!var_init_locked_1613789851007) {

            getHeight = include('src::math.region.height');
            getWidth = include('src::math.region.width');
            setAnchorY = include('src::math.region.y.anchor');
            getY = include('src::math.region.y');
            add = include('src::array.add.sort');
            intersect = include('src::math.region.intersect');
            contains = include('src::math.region.contains.x');

            var_init_locked_1613789851007 = true;
        }




        if (!var_current_scope_1613789851007.has(this)) {

            var_current_scope_1613789851007.set(this, (() => {
                const setX = include('src::mindmap.layout.node.x').bind(this);
                const setY = include('src::mindmap.layout.node.y').bind(this);
                const setOffsetY = include('src::mindmap.layout.node.y.offset').bind(this);
                const isRootNode = include('src::mindmap.layout.node.is.root').bind(this);
                const getParentNode = include('src::mindmap.layout.node.parent').bind(this);
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);
                const getDescendantNodes = include('src::mindmap.layout.nodes.descendant').bind(this);
                const getDescendantRegion = include('src::mindmap.layout.node.region.descendant.logic').bind(this);
                const getSelfRegion = include('src::mindmap.layout.node.region.self').bind(this);
                const getChildRegion = include('src::mindmap.layout.node.region.child.logic').bind(this);
                const getRegion = include('src::mindmap.layout.node.region.logic').bind(this);


                /**
                 * 
                 * 向右逻辑图算法实现
                 * 
                 * @import setX from ....node.x scoped
                 * 
                 * @import setY from ....node.y scoped
                 * 
                 * @import setOffsetY from ....node.y.offset scoped
                 * 
                 * @import isRootNode from ....node.is.root scoped
                 * 
                 * @import getParentNode from ....node.parent scoped
                 * 
                 * @import getChildNodes from ....nodes.child scoped
                 * 
                 * @import getDescendantNodes from ....nodes.descendant scoped
                 * 
                 * @import getDescendantRegion from ....node.region.descendant.logic scoped
                 * 
                 * @import getSelfRegion from ....node.region.self scoped
                 * 
                 * @import getChildRegion from ....node.region.child.logic scoped
                 * 
                 * @import getRegion from ....node.region.logic scoped
                 * 
                 * @import getHeight from math.region.height
                 * 
                 * @import getWidth from math.region.width
                 * 
                 * @import setAnchorY from math.region.y.anchor
                 * 
                 * @import getY from math.region.y
                 * 
                 * @import add from array.add.sort
                 * 
                 * @import intersect from math.region.intersect
                 * 
                 * @import contains from math.region.contains.x
                 * 
                 * @param {data.Record} node 布局节点
                 * 
                 */

                function main(node) {

                    let me = this;

                    layout.call(me, node);

                    let region = getRegion(node),
                        {
                            width,
                            height,
                            padding
                        } = this,
                        {
                            left,
                            right,
                            top,
                            bottom
                        } = padding,
                        mindmapWidth = getWidth(region) + left + right,
                        mindmapHeight = getHeight(region) + top + bottom,
                        offsetX = left,
                        offsetY = 0;

                    if (width > mindmapWidth) {

                        mindmapWidth = width;

                    }

                    if (height > mindmapHeight) {

                        let region = getSelfRegion(node);

                        setAnchorY(region, 'center', height / 2);

                        setY(node, getY(region));

                        mindmapHeight = height;

                    } else {

                        offsetY = top;

                        setOffsetY(node, -getY(region));
                    }

                    return {
                        offset: {
                            x: offsetX,
                            y: offsetY
                        },
                        size: {
                            width: mindmapWidth,
                            height: mindmapHeight
                        }
                    };
                }

                function layout(node, layoutedNodes = []) {

                    let me = this,
                        {
                            nodeHorizontalSeparationDistance
                        } = me;

                    if (isRootNode(node)) {

                        setX(node, 0, false);

                    }

                    let childNodes = getChildNodes(node),
                        {
                            length
                        } = childNodes,
                        {
                            top,
                            right
                        } = getSelfRegion(node),
                        x = right + nodeHorizontalSeparationDistance;

                    for (let i = 0; i < length; i++) {

                        let childNode = childNodes[i];

                        setX(childNode, x);

                        let previousNode = childNodes[i - 1],
                            bottom;

                        if (previousNode) {

                            bottom = getSelfRegion(previousNode).bottom;

                        } else {

                            bottom = top;
                        }

                        setY(childNode, bottom);

                        layout.call(me, childNode, layoutedNodes);

                        setY(childNode, bottom);

                        adjustY.call(me, childNode, layoutedNodes, getDescendantNodes(childNode));

                        layoutedNodes.push(childNode);

                    }

                    let region = getSelfRegion(node),
                        childRegion = getChildRegion(node);

                    setAnchorY(region, 'center', getY(childRegion) + getHeight(childRegion) / 2);

                    setY(node, getY(region), false);

                }

                function getAdjustRegions(node) {

                    let selfRegion = getSelfRegion(node),
                        descendantRegion = getDescendantRegion(node),
                        regions = [];

                    if (getWidth(descendantRegion) !== 0) {

                        regions.push(descendantRegion);

                    }

                    regions.push(selfRegion);

                    return regions;
                }

                function adjustY(node, layoutedNodes, ignoreLayoutedNodes) {

                    let regions = getAdjustRegions(node),
                        {
                            nodeVerticalSeparationDistance
                        } = this,
                        isSetOffsetY = false;

                    for (let layoutedNode of layoutedNodes) {

                        if (ignoreLayoutedNodes.includes(layoutedNode)) {

                            continue;

                        }

                        let layoutedRegions = getAdjustRegions(layoutedNode);

                        for (let layoutedRegion of layoutedRegions) {

                            for (let region of regions) {

                                if (intersect(region, layoutedRegion)) {

                                    setOffsetY(node, layoutedRegion.bottom - region.top + nodeVerticalSeparationDistance);

                                    regions = getAdjustRegions(node);

                                    isSetOffsetY = true;

                                    break;

                                }
                            }
                        }


                    }

                    if (!isSetOffsetY) {

                        setOffsetY(node, nodeVerticalSeparationDistance);

                    }
                }



                return main;

            })());
        }

        const main = var_current_scope_1613789851007.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.nodes.descendant'] = (() => {







    const var_current_scope_1613265759571 = new Map();

    return function(node) {





        if (!var_current_scope_1613265759571.has(this)) {

            var_current_scope_1613265759571.set(this, (() => {
                const cache = include('src::mindmap.layout.cache').bind(this);
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);


                /**
                 * 
                 * 获得子孙节点
                 * 
                 * @import cache from mindmap.layout.cache scoped
                 * 
                 * @import getChildNodes from .child scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {array} 子孙节点数组 
                 * 
                 */

                function main(node) {

                    return cache(node, 'getDescendantNodes', getDescendantNodes);
                }

                function getDescendantNodes(node) {

                    let childNodes = getChildNodes(node),
                        result = [];

                    for (let childNode of childNodes) {

                        result.push(childNode);

                        result.push(...getDescendantNodes(childNode));
                    }

                    return result;
                }

                return main;

            })());
        }

        const main = var_current_scope_1613265759571.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.x.offset'] = (() => {







    const var_current_scope_1613393698147 = new Map();

    return function(node, offsetX, recursive = true) {





        if (!var_current_scope_1613393698147.has(this)) {

            var_current_scope_1613393698147.set(this, (() => {
                const getDescendantNodes = include('src::mindmap.layout.nodes.descendant').bind(this);
                const setX = include('src::mindmap.layout.node.x.offset').bind(this);

                function main(node, offsetX, recursive) {


                    /**
                     * 
                     * 设置节点的相对横坐标
                     * 
                     * @import getDescendantNodes from ....nodes.descendant scoped
                     * 
                     * @import setX from .offset scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @param {number} offsetX 节点横坐标
                     * 
                     * @param {boolean} [recursive = true] 是否递归设置横坐标
                     * 
                     */

                    let {
                        x: oldValue
                    } = node;

                    node.x = oldValue + offsetX;

                    if (recursive) {

                        let descendantNodes = getDescendantNodes(node);

                        for (let descendantNode of descendantNodes) {

                            setX(descendantNode, offsetX, false);

                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613393698147.get(this);



        return main.call(this, node, offsetX, recursive);
    };

})();

exports['src::mindmap.layout.node.x'] = (() => {







    const var_current_scope_1613393698121 = new Map();

    return function(node, x, recursive = true) {





        if (!var_current_scope_1613393698121.has(this)) {

            var_current_scope_1613393698121.set(this, (() => {
                const getLeftSpacing = include('src::mindmap.layout.node.spacing.left').bind(this);
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);
                const setOffsetX = include('src::mindmap.layout.node.x.offset').bind(this);

                function main(node, x, recursive) {


                    /**
                     * 
                     * 设置节点的横坐标
                     * 
                     * @import getLeftSpacing from .spacing.left scoped
                     * 
                     * @import getChildNodes from ..nodes.child scoped
                     * 
                     * @import setOffsetX from .x.offset scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @param {number} x 节点横坐标
                     * 
                     * @param {boolean} [recursive = true] 是否递归设置横坐标
                     * 
                     */

                    let value = x + getLeftSpacing(node),
                        {
                            x: oldValue
                        } = node;

                    node.x = value;

                    let offsetValue = value - oldValue;

                    if (recursive) {

                        let childNodes = getChildNodes(node);

                        for (let childNode of childNodes) {

                            setOffsetX(childNode, offsetValue);
                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613393698121.get(this);



        return main.call(this, node, x, recursive);
    };

})();

exports['src::mindmap.layout.node.y.offset'] = (() => {







    const var_current_scope_1613393698159 = new Map();

    return function(node, offsetY, recursive = true) {





        if (!var_current_scope_1613393698159.has(this)) {

            var_current_scope_1613393698159.set(this, (() => {
                const getDescendantNodes = include('src::mindmap.layout.nodes.descendant').bind(this);
                const setY = include('src::mindmap.layout.node.y.offset').bind(this);

                function main(node, offsetY, recursive) {


                    /**
                     * 
                     * 设置节点的相对纵坐标
                     * 
                     * @import getDescendantNodes from ....nodes.descendant scoped
                     * 
                     * @import setY from .offset scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @param {number} offsetY 节点纵坐标
                     * 
                     * @param {boolean} [recursive = true] 是否递归设置横坐标
                     * 
                     */

                    let {
                        y: oldValue
                    } = node;

                    node.y = oldValue + offsetY;

                    if (recursive) {

                        let descendantNodes = getDescendantNodes(node);

                        for (let descendantNode of descendantNodes) {

                            setY(descendantNode, offsetY, false);

                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613393698159.get(this);



        return main.call(this, node, offsetY, recursive);
    };

})();

exports['src::mindmap.layout.node.y'] = (() => {







    const var_current_scope_1613393698154 = new Map();

    return function(node, y, recursive = true) {





        if (!var_current_scope_1613393698154.has(this)) {

            var_current_scope_1613393698154.set(this, (() => {
                const getTopSpacing = include('src::mindmap.layout.node.spacing.top').bind(this);
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);
                const setOffsetY = include('src::mindmap.layout.node.y.offset').bind(this);

                function main(node, y, recursive) {


                    /**
                     * 
                     * 设置节点的纵坐标
                     * 
                     * @import getTopSpacing from .spacing.top scoped
                     * 
                     * @import getChildNodes from ..nodes.child scoped
                     * 
                     * @import setOffsetY from .y.offset scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @param {number} y 节点纵坐标
                     * 
                     * @param {boolean} [recursive = true] 是否递归设置纵坐标
                     * 
                     */

                    let value = y + getTopSpacing(node),
                        {
                            y: oldValue
                        } = node;

                    node.y = value;

                    let offsetValue = value - oldValue;

                    if (recursive) {

                        let childNodes = getChildNodes(node);

                        for (let childNode of childNodes) {

                            setOffsetY(childNode, offsetValue);
                        }
                    }

                }

                return main;

            })());
        }

        const main = var_current_scope_1613393698154.get(this);



        return main.call(this, node, y, recursive);
    };

})();

exports['src::mindmap.layout.node.region.child.logic'] = (() => {







    const var_current_scope_1613788385080 = new Map();

    return function(node) {





        if (!var_current_scope_1613788385080.has(this)) {

            var_current_scope_1613788385080.set(this, (() => {
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);
                const getRegion = include('src::mindmap.layout.node.region.self').bind(this);

                function main(node) {


                    /**
                     * 
                     * 获得子节点集合的范围值
                     * 
                     * @import getChildNodes from ......nodes.child scoped
                     * 
                     * @import getRegion from ..self scoped
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {object} 范围信息 
                     * 
                     */

                    let childNodes = getChildNodes(node),
                        {
                            length
                        } = childNodes;

                    if (length) {

                        let top,
                            left,
                            bottom,
                            rights = [];

                        for (let i = 0; i < length; i++) {

                            let region = getRegion(childNodes[i]);

                            if (i === 0) {

                                top = region.top,
                                    left = region.left;

                            }

                            if (i === length - 1) {

                                bottom = region.bottom;
                            }

                            rights.push(region.right);
                        }

                        return {
                            top,
                            left,
                            bottom,
                            right: Math.max(...rights)
                        };

                    }

                    let {
                        top,
                        right,
                        bottom
                    } = getRegion(node), {
                        nodeHorizontalSeparationDistance
                    } = this;

                    right += nodeHorizontalSeparationDistance;

                    return {
                        top,
                        bottom,
                        left: right,
                        right
                    };


                }

                return main;

            })());
        }

        const main = var_current_scope_1613788385080.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.region.descendant.logic'] = (() => {







    const var_current_scope_1613742058080 = new Map();

    return function(node) {





        if (!var_current_scope_1613742058080.has(this)) {

            var_current_scope_1613742058080.set(this, (() => {
                const getChildRegion = include('src::mindmap.layout.node.region.child.logic').bind(this);
                const getSelfRegion = include('src::mindmap.layout.node.region.self').bind(this);
                const getChildNodes = include('src::mindmap.layout.nodes.child').bind(this);


                /**
                 * 
                 * 获得子孙节点集合的范围值
                 * 
                 * @import getChildRegion from ..child.logic scoped
                 * 
                 * @import getSelfRegion from ..self scoped
                 * 
                 * @import getChildNodes from ......nodes.child scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {object} 范围信息 
                 * 
                 */

                const {
                    max,
                    min
                } = Math;

                function main(node) {

                    let regions = getRegions(node),
                        tops = [],
                        bottoms = [],
                        rights = [],
                        lefts = [],
                        region = regions[0];

                    regions.pop();

                    if (regions.length === 0) {

                        let {
                            top,
                            right,
                            bottom
                        } = region;

                        return {
                            top,
                            bottom,
                            left: right,
                            right
                        };
                    }

                    for (let region of regions) {

                        lefts.push(region.left);

                        tops.push(region.top);

                        bottoms.push(region.bottom);

                        rights.push(region.right);
                    }

                    return {
                        left: min(...lefts),
                        top: min(...tops),
                        bottom: max(...bottoms),
                        right: max(...rights)
                    }
                }

                function getRegions(node) {

                    let region = getChildRegion(node),
                        result = [];

                    if (region) {

                        result.push(region);

                        let childNodes = getChildNodes(node);

                        for (let childNode of childNodes) {

                            result.push(...getRegions(childNode));
                        }
                    }

                    return result;
                }

                return main;

            })());
        }

        const main = var_current_scope_1613742058080.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.region.logic'] = (() => {

    let union;

    let var_init_locked_1613347321155;



    const var_current_scope_1613347321155 = new Map();

    return function(node) {


        if (!var_init_locked_1613347321155) {

            union = include('src::math.region.union');

            var_init_locked_1613347321155 = true;
        }




        if (!var_current_scope_1613347321155.has(this)) {

            var_current_scope_1613347321155.set(this, (() => {
                const self = include('src::mindmap.layout.node.region.self').bind(this);
                const descendant = include('src::mindmap.layout.node.region.descendant.logic').bind(this);

                function main(node) {


                    /**
                     * 
                     * 获得脑图节点的范围
                     * 
                     * @import self from .self scoped
                     * 
                     * @import descendant from .descendant.logic scoped
                     * 
                     * @import union from math.region.union
                     * 
                     * @param {data.Record} node 脑图节点
                     * 
                     * @return {object} 范围信息
                     * 
                     */

                    return union(self(node), descendant(node));

                }

                return main;

            })());
        }

        const main = var_current_scope_1613347321155.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.positioner.logic.right'] = (() => {

    let init, getNode, Logic, generateLeftRegions, generateRightRegions, getLeftNodeAnchors, getRightNodeAnchors;

    let var_init_locked_1613615189966;

    let var_class_1613615189966;



    let var_global_main_1613615189966;

    return function(mindmap, nodes) {


        if (!var_init_locked_1613615189966) {

            init = include('src::mindmap.layout.positioner.logic.init');
            getNode = include('src::mindmap.layout.positioner.logic.node');
            Logic = include('src::mindmap.layout.positioner.logic')();
            generateLeftRegions = include('src::mindmap.layout.positioner.logic.regions.right.left');
            generateRightRegions = include('src::mindmap.layout.positioner.logic.regions.right.right');
            getLeftNodeAnchors = include('src::mindmap.layout.positioner.logic.anchors.right.left');
            getRightNodeAnchors = include('src::mindmap.layout.positioner.logic.anchors.right.right');


            /**
             * 
             * 右则逻辑图位置器实现
             * 
             * @import init from .init
             * 
             * @import getNode from .node
             * 
             * @import Logic from ..logic value
             * 
             * @import generateLeftRegions from .regions.right.left
             * 
             * @import generateRightRegions from .regions.right.right
             * 
             * @import getLeftNodeAnchors from .anchors.right.left
             * 
             * @import getRightNodeAnchors from .anchors.right.right
             * 
             * @param {Mindmap} mindmap 脑图对象
             * 
             * @param {array} nodes 布局脑图节点集合
             * 
             */

            class main extends Logic {

                constructor(mindmap, nodes) {

                    super(mindmap);

                    let me = this,
                        regions = init.call(me, nodes);

                    me.leftRegions = generateLeftRegions(regions);

                    me.rightRegions = generateRightRegions(regions);
                }

                applySelectLeftNode(node) {

                    let me = this,
                        {
                            nodeMap,
                            rightRegions
                        } = me,
                        region = nodeMap.get(node);

                    return getNode.call(me, region, rightRegions, rightRegions.indexOf(region) + 1, ({
                        right
                    }, {
                        left
                    }) => right < left, [
                        getLeftNodeAnchors
                    ]).node;
                }

                applySelectRightNode(node) {

                    let me = this,
                        {
                            nodeMap,
                            leftRegions
                        } = me,
                        region = nodeMap.get(node);

                    return getNode.call(me, region, leftRegions, leftRegions.indexOf(region) + 1, ({
                        left
                    }, {
                        right
                    }) => right < left, [
                        getRightNodeAnchors
                    ]).node;
                }
            }

            var_class_1613615189966 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613615189966;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::mindmap.layout.positioner.logic.right';
                }

            };

            main = var_class_1613615189966;

            var_global_main_1613615189966 = main;

            var_init_locked_1613615189966 = true;
        }


        return new var_global_main_1613615189966(mindmap, nodes);
    };

})();

exports['src::mindmap.layout.positioner.logic.regions.bottom'] = (() => {







    function main(regions) {

        /**
         * 
         * 生成以底部逆序排序的范围集合
         * 
         * @param {array} regions 范围集合
         * 
         * @return {array} 排序后的范围集合
         * 
         */

        return Array.from(regions).sort(({
            bottom: bottom1
        }, {
            bottom: bottom2
        }) => bottom2 - bottom1);

    }

    return function(regions) {



        return main.call(this, regions);
    };

})();

exports['src::mindmap.layout.positioner.logic.regions.top'] = (() => {







    function main(regions) {

        /**
         * 
         * 生成以顶部顺序排序的范围集合
         * 
         * @param {array} regions 范围集合
         * 
         * @return {array} 排序后的范围集合
         * 
         */

        return Array.from(regions).sort(({
            top: top1
        }, {
            top: top2
        }) => top1 - top2);

    }

    return function(regions) {



        return main.call(this, regions);
    };

})();

exports['src::mindmap.layout.positioner.logic.init'] = (() => {

    let from, generateBottomRegions, generateTopRegions;

    let var_init_locked_1613628470837;



    function main(nodes) {

        /**
         * 
         * 初始化
         * 
         * @import from from math.region.from
         * 
         * @import generateBottomRegions from .regions.bottom
         * 
         * @import generateTopRegions from .regions.top
         * 
         * @param {array} nodes 脑图节点集合
         * 
         * @return {array} 范围集合
         * 
         */

        let me = this,
            regionMap = me.regionMap = new Map(),
            nodeMap = me.nodeMap = new Map(),
            regions = [];

        for (let node of nodes) {

            let region = from(node);

            regions.push(region);

            regionMap.set(region, node);

            nodeMap.set(node, region);
        }

        me.bottomRegions = generateBottomRegions(regions);

        me.topRegions = generateTopRegions(regions);

        me.cache = {
            SelectUpNode: new Map(),
            SelectDownNode: new Map(),
            SelectLeftNode: new Map(),
            SelectRightNode: new Map()
        };

        return regions;

    }

    return function(nodes) {


        if (!var_init_locked_1613628470837) {

            from = include('src::math.region.from');
            generateBottomRegions = include('src::mindmap.layout.positioner.logic.regions.bottom');
            generateTopRegions = include('src::mindmap.layout.positioner.logic.regions.top');

            var_init_locked_1613628470837 = true;
        }


        return main.call(this, nodes);
    };

})();

exports['src::mindmap.layout.positioner.logic.node'] = (() => {

    let getAnchorXY, getDistance;

    let var_init_locked_1613555531839;



    function main(region, originRegions, startIndex, isMatch, getPairAnchors, isIgnoreNode) {

        /**
         * 
         * 获得节点
         * 
         * @import getAnchorXY from math.region.xy.anchor
         * 
         * @import getDistance from math.point.line.distance
         * 
         * @param {object} region 基准范围
         * 
         * @param {array} originRegions 比较范围集合
         * 
         * @param {number} startIndex 起始比较位置
         * 
         * @param {function} isMatch 判断是否可进行比较 
         * 
         * @param {array} getPairAnchors 获得锚定插件
         * 
         * @param {function} [isIgnoreNode = () => false] 是否为忽略节点
         * 
         * @return {object} 匹配内容
         * 
         */

        let me = this,
            {
                regionMap
            } = this,
            {
                length
            } = originRegions,
            result = [];

        for (let i = startIndex; i < length; i++) {

            let originRegion = originRegions[i];

            if (isMatch(originRegion, region)) {

                let node = regionMap.get(originRegion);

                if (isIgnoreNode(node)) {

                    continue;
                }

                let {
                    length
                } = getPairAnchors;

                for (let i = 0; i < length; i++) {

                    let item = result[i],
                        {
                            start,
                            end,
                            direction
                        } = getPairAnchors[i](originRegion, region),
                        distance = getDistance(getAnchorXY(originRegion, start), getAnchorXY(region, end));

                    if (!item || item.distance > distance) {

                        result[i] = {
                            distance,
                            node,
                            direction
                        };
                    }
                }
            }
        }

        if (result.length) {

            return result.sort(({
                distance: distance1
            }, {
                distance: distance2
            }) => distance1 - distance2)[0];
        }

        return {};

    }

    return function(region, originRegions, startIndex, isMatch, getPairAnchors, isIgnoreNode = () => false) {


        if (!var_init_locked_1613555531839) {

            getAnchorXY = include('src::math.region.xy.anchor');
            getDistance = include('src::math.point.line.distance');

            var_init_locked_1613555531839 = true;
        }


        return main.call(this, region, originRegions, startIndex, isMatch, getPairAnchors, isIgnoreNode);
    };

})();

exports['src::mindmap.layout.positioner.logic.anchors.up'] = (() => {







    function main(originRegion, region) {

        /**
         * 
         * 获得向上的一对锚定值
         * 
         * @param {object} originRegion 比较范围
         * 
         * @param {object} region 基准范围
         * 
         * @return {object} 锚定值
         * 
         */

        const {
            abs
        } = Math, {
            left: regionLeft,
            right: regionRight
        } = originRegion, {
            left,
            right
        } = region;

        let start,
            end;

        if (regionRight < left) {

            start = 'br';

            end = 'tl';

        } else if (regionLeft > right) {

            start = 'bl';

            end = 'tr';

        } else {

            let result = [{
                distance: abs(regionLeft - left),
                start: 'bl',
                end: 'tl'
            }, {
                distance: abs(regionLeft - right),
                start: 'bl',
                end: 'tr'
            }, {
                distance: abs(regionRight - left),
                start: 'br',
                end: 'tl'
            }, {
                distance: abs(regionRight - right),
                start: 'br',
                end: 'tr'
            }].sort(({
                distance: distance1
            }, {
                distance: distance2
            }) => distance1 - distance2)[0];

            start = result.start;

            end = result.end;
        }

        return {
            start,
            end,
            direction: 'up'
        };

    }

    return function(originRegion, region) {



        return main.call(this, originRegion, region);
    };

})();

exports['src::mindmap.layout.positioner.logic.anchors.down'] = (() => {







    function main(originRegion, region) {

        /**
         * 
         * 获得向下的一对锚定值
         * 
         * @param {object} originRegion 比较范围
         * 
         * @param {object} region 基准范围
         * 
         * @return {object} 锚定值
         * 
         */

        const {
            abs
        } = Math, {
            left: regionLeft,
            right: regionRight
        } = originRegion, {
            left,
            right
        } = region;

        let start,
            end;

        if (regionRight < left) {

            start = 'tr';

            end = 'bl';

        } else if (regionLeft > right) {

            start = 'tl';

            end = 'br';

        } else {

            let result = [{
                distance: abs(regionLeft - left),
                start: 'tl',
                end: 'bl'
            }, {
                distance: abs(regionLeft - right),
                start: 'tl',
                end: 'br'
            }, {
                distance: abs(regionRight - left),
                start: 'tr',
                end: 'bl'
            }, {
                distance: abs(regionRight - right),
                start: 'tr',
                end: 'br'
            }].sort(({
                distance: distance1
            }, {
                distance: distance2
            }) => distance1 - distance2)[0];

            start = result.start;

            end = result.end;
        }

        return {
            start,
            end,
            direction: 'down'
        };

    }

    return function(originRegion, region) {



        return main.call(this, originRegion, region);
    };

})();

exports['src::mindmap.layout.positioner.logic.node.cache'] = (() => {







    function main(node, name) {

        /**
         * 
         * 缓存获得结果
         * 
         * @param {data.Record} node 脑图节点
         * 
         * @param {string} name 缓存名称
         * 
         * @return {data.Record} 返回缓存后的节点
         * 
         */
        let me = this,
            {
                cache
            } = me,
            map = cache[name];

        if (!map.has(node)) {

            map.set(node, me[`apply${name}`](node));
        }

        return map.get(node);

    }

    return function(node, name) {



        return main.call(this, node, name);
    };

})();

exports['src::mindmap.node.is.descendant'] = (() => {







    const var_current_scope_1613308340530 = new Map();

    return function(ancestorNode, descendantNode) {





        if (!var_current_scope_1613308340530.has(this)) {

            var_current_scope_1613308340530.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);

                function main(ancestorNode, descendantNode) {


                    /**
                     * 
                     * 判断一个脑图节点是否是另外一个脑图的子孙节点
                     * 
                     * @import getParentNode from ..parent scoped
                     * 
                     * @param {data.Record} ancestorNode 祖先节点
                     * 
                     * @param {data.Record} descendantNode 子孙节点
                     * 
                     * @return {boolean} 如果节点为叶子节点则返回 true , 否则 false
                     * 
                     */

                    let baseNode = descendantNode,
                        parentNode;

                    while (parentNode = getParentNode(baseNode)) {

                        if (parentNode === ancestorNode) {

                            return true;
                        }

                        baseNode = parentNode;
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613308340530.get(this);



        return main.call(this, ancestorNode, descendantNode);
    };

})();

exports['src::mindmap.layout.positioner.logic'] = (() => {

    let getAnchorXY, getUpNodeAnchors, getDownNodeAnchors, getCacheNode, getNode, isDescendantNode;

    let var_init_locked_1613628470859;

    let var_class_1613628470859;



    let var_global_main_1613628470859;

    return function() {


        if (!var_init_locked_1613628470859) {

            getAnchorXY = include('src::math.region.xy.anchor');
            getUpNodeAnchors = include('src::mindmap.layout.positioner.logic.anchors.up');
            getDownNodeAnchors = include('src::mindmap.layout.positioner.logic.anchors.down');
            getCacheNode = include('src::mindmap.layout.positioner.logic.node.cache');
            getNode = include('src::mindmap.layout.positioner.logic.node');
            isDescendantNode = include('src::mindmap.node.is.descendant');


            /**
             * 
             * 逻辑图位置器实现
             * 
             * @import getAnchorXY from math.region.xy.anchor
             * 
             * @import getUpNodeAnchors from .logic.anchors.up
             * 
             * @import getDownNodeAnchors from .logic.anchors.down
             * 
             * @import getCacheNode from .logic.node.cache
             * 
             * @import getNode from .logic.node
             * 
             * @import isDescendantNode from mindmap.node.is.descendant
             * 
             * @class
             * 
             */

            function applyUpNode(node, isIgnoreNode) {

                let me = this,
                    {
                        nodeMap,
                        bottomRegions
                    } = me,
                    region = nodeMap.get(node);

                return getNode.call(me, region, bottomRegions, bottomRegions.indexOf(region) + 1, ({
                    bottom
                }, {
                    top
                }) => bottom < top, [
                    getUpNodeAnchors
                ], isIgnoreNode).node;
            }

            function applyDownNode(node, isIgnoreNode) {

                let me = this,
                    {
                        nodeMap,
                        topRegions
                    } = me,
                    region = nodeMap.get(node);

                return getNode.call(me, region, topRegions, topRegions.indexOf(region) + 1, ({
                    top
                }, {
                    bottom
                }) => bottom < top, [
                    getDownNodeAnchors
                ], isIgnoreNode).node;
            }

            class main {

                constructor(mindmap) {

                    this.mindmap = mindmap;
                }

                getSelectUpNode(node) {

                    return getCacheNode.call(this, node, 'SelectUpNode');
                }

                applySelectUpNode(node) {

                    return applyUpNode.call(this, node);
                }

                getMoveUpNode(node) {

                    let me = this,
                        {
                            mindmap
                        } = me;

                    return applyUpNode.call(me, node, originNode => isDescendantNode.call(mindmap, node, originNode));
                }

                getSelectDownNode(node) {

                    return getCacheNode.call(this, node, 'SelectDownNode');
                }

                applySelectDownNode(node) {

                    return applyDownNode.call(this, node);
                }

                getMoveDownNode(node) {

                    let me = this,
                        {
                            mindmap
                        } = me;

                    return applyDownNode.call(me, node, originNode => isDescendantNode.call(mindmap, node, originNode));
                }

                getSelectLeftNode(node) {

                    return getCacheNode.call(this, node, 'SelectLeftNode');
                }

                getRightNode(node) {

                    return getCacheNode.call(this, node, 'SelectRightNode');
                }

            }

            var_class_1613628470859 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1613628470859;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::mindmap.layout.positioner.logic';
                }

            };

            main = var_class_1613628470859;

            var_global_main_1613628470859 = main;

            var_init_locked_1613628470859 = true;
        }


        return var_global_main_1613628470859;
    };

})();

exports['src::mindmap.layout.positioner.logic.regions.right.left'] = (() => {







    function main(regions) {

        /**
         * 
         * 生成以左边顺序排序的范围集合
         * 
         * @param {array} regions 范围集合
         * 
         * @return {array} 排序后的范围集合
         * 
         */

        return Array.from(regions).sort(({
            left: left1
        }, {
            left: left2
        }) => left1 - left2);

    }

    return function(regions) {



        return main.call(this, regions);
    };

})();

exports['src::mindmap.layout.positioner.logic.regions.right.right'] = (() => {







    function main(regions) {

        /**
         * 
         * 生成以右部逆序排序的范围集合
         * 
         * @param {array} regions 范围集合
         * 
         * @return {array} 排序后的范围集合
         * 
         */

        return Array.from(regions).sort(({
            right: right1
        }, {
            right: right2
        }) => right2 - right1);

    }

    return function(regions) {



        return main.call(this, regions);
    };

})();

exports['src::mindmap.layout.positioner.logic.anchors.right.left'] = (() => {







    function main(originRegion, region) {

        /**
         * 
         * 获得向左的一对锚定值
         * 
         * @param {object} originRegion 比较范围
         * 
         * @param {object} region 基准范围
         * 
         * @return {object} 锚定值
         * 
         */

        const {
            abs
        } = Math, {
            top: regionTop,
            bottom: regionBottom
        } = originRegion, {
            top,
            bottom
        } = region;

        let start,
            end;

        if (regionBottom < top) {

            start = 'br';

            end = 'tl';

        } else if (regionTop > bottom) {

            start = 'tr';

            end = 'bl';

        } else {

            let result = [{
                distance: abs(regionTop - top),
                start: 'tr',
                end: 'tl'
            }, {
                distance: abs(regionTop - bottom),
                start: 'tr',
                end: 'bl'
            }, {
                distance: abs(regionBottom - top),
                start: 'br',
                end: 'tl'
            }, {
                distance: abs(regionBottom - bottom),
                start: 'br',
                end: 'bl'
            }].sort(({
                distance: distance1
            }, {
                distance: distance2
            }) => distance1 - distance2)[0];

            start = result.start;

            end = result.end;
        }

        return {
            start,
            end,
            direction: 'left'
        };

    }

    return function(originRegion, region) {



        return main.call(this, originRegion, region);
    };

})();

exports['src::mindmap.layout.positioner.logic.anchors.right.right'] = (() => {







    function main(originRegion, region) {

        /**
         * 
         * 获得向右的一对锚定值
         * 
         * @param {object} originRegion 比较范围
         * 
         * @param {object} region 基准范围
         * 
         * @return {object} 锚定值
         * 
         */

        const {
            abs
        } = Math, {
            top: regionTop,
            bottom: regionBottom
        } = originRegion, {
            top,
            bottom
        } = region;

        let start,
            end;

        if (regionBottom < top) {

            start = 'bl';

            end = 'tr';

        } else if (regionTop > bottom) {

            start = 'tl';

            end = 'br';

        } else {

            let result = [{
                distance: abs(regionTop - top),
                start: 'tl',
                end: 'tr'
            }, {
                distance: abs(regionTop - bottom),
                start: 'tl',
                end: 'br'
            }, {
                distance: abs(regionBottom - top),
                start: 'bl',
                end: 'tr'
            }, {
                distance: abs(regionBottom - bottom),
                start: 'bl',
                end: 'br'
            }].sort(({
                distance: distance1
            }, {
                distance: distance2
            }) => distance1 - distance2)[0];

            start = result.start;

            end = result.end;
        }

        return {
            start,
            end,
            direction: 'right'
        };

    }

    return function(originRegion, region) {



        return main.call(this, originRegion, region);
    };

})();

exports['src::mindmap.layout.node.is.move.up'] = (() => {







    const var_current_scope_1613617522724 = new Map();

    return function(onBeforeNodeInsertAfter = () => true) {





        if (!var_current_scope_1613617522724.has(this)) {

            var_current_scope_1613617522724.set(this, (() => {
                const previous = include('src::mindmap.layout.node.sibling.previous').bind(this);
                const data = include('src::mindmap.node.data').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);

                function main(onBeforeNodeInsertAfter) {

                    /**
                     * 
                     * 选中节点向上移动
                     * 
                     * @import previous from ....sibling.previous scoped
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @import getParentNode from mindmap.node.parent scoped
                     * 
                     * @param {function} [onBeforeNodeInsertAfter = () => true] 拖曳的拦截函数 
                     * 
                     * @return {boolean} 判断是否可以向下移动
                     * 
                     */
                    let me = this,
                        {
                            selectedNode,
                            layoutPositioner
                        } = me,
                        node = previous(selectedNode) || layoutPositioner.getMoveUpNode(selectedNode);

                    return !!(node && onBeforeNodeInsertAfter(data(getParentNode(node)), data(selectedNode), data(node)));

                }

                return main;

            })());
        }

        const main = var_current_scope_1613617522724.get(this);



        return main.call(this, onBeforeNodeInsertAfter);
    };

})();

exports['src::mindmap.layout.node.sibling.previous'] = (() => {







    const var_current_scope_1613785480198 = new Map();

    return function(node) {





        if (!var_current_scope_1613785480198.has(this)) {

            var_current_scope_1613785480198.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const cache = include('src::mindmap.layout.cache').bind(this);


                /**
                 * 
                 * 获得上兄弟节点
                 * 
                 * @import getParentNode from mindmap.node.parent scoped
                 * 
                 * @import cache from mindmap.layout.cache scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {data.Record} 兄弟节点引用 
                 * 
                 */

                function main(node) {

                    return cache(node, 'getPreviousSiblingNode', getPreviousSiblingNode);
                }

                function getPreviousSiblingNode(node) {

                    let parentNode = getParentNode(node),
                        {
                            layoutNodes
                        } = this;

                    if (parentNode) {

                        let {
                            children
                        } = parentNode,
                        index = children.indexOf(node) - 1;

                        for (let i = index; i >= 0; i--) {

                            let previousNode = children[i];

                            if (layoutNodes.includes(previousNode)) {

                                return previousNode;
                            }
                        }
                    }
                }

                return main;

            })());
        }

        const main = var_current_scope_1613785480198.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.is.move.down'] = (() => {







    const var_current_scope_1613617522750 = new Map();

    return function(onBeforeNodeInsertBefore = () => true) {





        if (!var_current_scope_1613617522750.has(this)) {

            var_current_scope_1613617522750.set(this, (() => {
                const next = include('src::mindmap.layout.node.sibling.next').bind(this);
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const data = include('src::mindmap.node.data').bind(this);

                function main(onBeforeNodeInsertBefore) {

                    /**
                     * 
                     * 选中节点向下移动
                     * 
                     * @import next from ....sibling.next scoped
                     * 
                     * @import getParentNode from mindmap.node.parent scoped
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @param {function} [onBeforeNodeInsertBefore = () => true] 拖曳的拦截函数 
                     * 
                     * @return {boolean} 判断是否可以向下移动
                     * 
                     */

                    let me = this,
                        {
                            selectedNode,
                            layoutPositioner
                        } = me,
                        node = next(selectedNode) || layoutPositioner.getMoveDownNode(selectedNode);

                    return !!(node && onBeforeNodeInsertBefore(data(getParentNode(node)), data(selectedNode), data(node)));

                }

                return main;

            })());
        }

        const main = var_current_scope_1613617522750.get(this);



        return main.call(this, onBeforeNodeInsertBefore);
    };

})();

exports['src::mindmap.layout.node.sibling.next'] = (() => {







    const var_current_scope_1613785480204 = new Map();

    return function(node) {





        if (!var_current_scope_1613785480204.has(this)) {

            var_current_scope_1613785480204.set(this, (() => {
                const getParentNode = include('src::mindmap.node.parent').bind(this);
                const cache = include('src::mindmap.layout.cache').bind(this);


                /**
                 * 
                 * 获得上兄弟节点
                 * 
                 * @import getParentNode from mindmap.node.parent scoped
                 * 
                 * @import cache from mindmap.layout.cache scoped
                 * 
                 * @param {data.Record} node 脑图节点
                 * 
                 * @return {data.Record} 兄弟节点引用 
                 * 
                 */

                function main(node) {

                    return cache(node, 'getNextSiblingNode', getPreviousSiblingNode);
                }

                function getPreviousSiblingNode(node) {

                    let parentNode = getParentNode(node),
                        {
                            layoutNodes
                        } = this;

                    if (parentNode) {

                        let {
                            children
                        } = parentNode, {
                            length
                        } = children,
                        index = children.indexOf(node) + 1;

                        for (let i = index; i < length; i++) {

                            let nextNode = children[i];

                            if (layoutNodes.includes(nextNode)) {

                                return nextNode;
                            }
                        }
                    }
                }

                return main;

            })());
        }

        const main = var_current_scope_1613785480204.get(this);



        return main.call(this, node);
    };

})();

exports['src::mindmap.layout.node.move.up'] = (() => {







    const var_current_scope_1613628470870 = new Map();

    return function() {





        if (!var_current_scope_1613628470870.has(this)) {

            var_current_scope_1613628470870.set(this, (() => {
                const previous = include('src::mindmap.layout.node.sibling.previous').bind(this);
                const insertBefore = include('src::mindmap.node.insert.before').bind(this);
                const insertAfter = include('src::mindmap.node.insert.after').bind(this);
                const data = include('src::mindmap.node.data').bind(this);

                function main() {

                    /**
                     * 
                     * 选中节点向上移动
                     * 
                     * @import previous from ..sibling.previous scoped
                     * 
                     * @import insertBefore from mindmap.node.insert.before scoped
                     * 
                     * @import insertAfter from mindmap.node.insert.after scoped
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @return {boolean} 移动状态
                     * 
                     */

                    let me = this,
                        {
                            selectedNode,
                            layoutPositioner
                        } = me,
                        node = previous(selectedNode);

                    if (node) {

                        return insertBefore(selectedNode, node);
                    }

                    node = layoutPositioner.getMoveUpNode(selectedNode);

                    if (node) {

                        return insertAfter(selectedNode, node);
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613628470870.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.node.move.down'] = (() => {







    const var_current_scope_1613628470876 = new Map();

    return function() {





        if (!var_current_scope_1613628470876.has(this)) {

            var_current_scope_1613628470876.set(this, (() => {
                const next = include('src::mindmap.layout.node.sibling.next').bind(this);
                const insertBefore = include('src::mindmap.node.insert.before').bind(this);
                const insertAfter = include('src::mindmap.node.insert.after').bind(this);
                const data = include('src::mindmap.node.data').bind(this);

                function main() {

                    /**
                     * 
                     * 选中节点向下移动
                     * 
                     * @import next from ..sibling.next scoped
                     * 
                     * @import insertBefore from mindmap.node.insert.before scoped
                     * 
                     * @import insertAfter from mindmap.node.insert.after scoped
                     * 
                     * @import data from mindmap.node.data scoped
                     * 
                     * @return {boolean} 移动状态
                     * 
                     */

                    let me = this,
                        {
                            selectedNode,
                            layoutPositioner
                        } = me,
                        node = next(selectedNode);

                    if (node) {

                        return insertAfter(selectedNode, node);
                    }

                    node = layoutPositioner.getMoveDownNode(selectedNode);

                    if (node) {

                        return insertBefore(selectedNode, node);
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613628470876.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.node.select.logic.down'] = (() => {







    const var_current_scope_1613556861768 = new Map();

    return function() {





        if (!var_current_scope_1613556861768.has(this)) {

            var_current_scope_1613556861768.set(this, (() => {
                const next = include('src::mindmap.layout.node.sibling.next').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main() {


                    /**
                     * 
                     * 向下移动选择节点
                     * 
                     * @import next from mindmap.layout.node.sibling.next scoped
                     * 
                     * @import select from mindmap.node.select scoped
                     * 
                     */

                    let {
                        selectedNode,
                        layoutPositioner
                    } = this;

                    let node = next(selectedNode) || layoutPositioner.getSelectDownNode(selectedNode);

                    if (node) {

                        return select(node);

                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613556861768.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.node.select.logic.up'] = (() => {







    const var_current_scope_1613556861774 = new Map();

    return function() {





        if (!var_current_scope_1613556861774.has(this)) {

            var_current_scope_1613556861774.set(this, (() => {
                const previous = include('src::mindmap.layout.node.sibling.previous').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main() {


                    /**
                     * 
                     * 向上移动选择节点
                     * 
                     * @import previous from mindmap.layout.node.sibling.previous scoped
                     * 
                     * @import select from mindmap.node.select scoped
                     * 
                     */

                    let {
                        selectedNode,
                        layoutPositioner
                    } = this;

                    let node = previous(selectedNode) || layoutPositioner.getSelectUpNode(selectedNode);

                    if (node) {

                        return select(node);

                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613556861774.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.node.select.logic.right.left'] = (() => {







    const var_current_scope_1613462840486 = new Map();

    return function() {





        if (!var_current_scope_1613462840486.has(this)) {

            var_current_scope_1613462840486.set(this, (() => {
                const getParentNode = include('src::mindmap.layout.node.parent').bind(this);
                const select = include('src::mindmap.node.select').bind(this);

                function main() {


                    /**
                     * 
                     * 向左移动选择节点
                     * 
                     * @import getParentNode from mindmap.layout.node.parent scoped
                     * 
                     * @import select from mindmap.node.select scoped
                     * 
                     */

                    let {
                        selectedNode
                    } = this,
                    node = getParentNode(selectedNode);

                    if (node) {

                        return select(node);
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613462840486.get(this);



        return main.call(this);
    };

})();

exports['src::mindmap.layout.node.select.logic.right.right'] = (() => {







    const var_current_scope_1613462840491 = new Map();

    return function() {





        if (!var_current_scope_1613462840491.has(this)) {

            var_current_scope_1613462840491.set(this, (() => {
                const select = include('src::mindmap.node.select').bind(this);

                function main() {


                    /**
                     * 
                     * 向右移动选择节点
                     * 
                     * @import select from mindmap.node.select scoped
                     * 
                     */

                    let me = this,
                        {
                            children
                        } = me.selectedNode;

                    if (children.length) {

                        return select(children[0]);
                    }

                    return false;

                }

                return main;

            })());
        }

        const main = var_current_scope_1613462840491.get(this);



        return main.call(this);
    };

})();

exports['src::function.call'] = (() => {

    let isFunction, isObject, isArray, get, call;

    let var_init_locked_1608956299363;



    function main(target, ...args) {


        /**
         * 
         * 执行函数
         * 
         * @import is.function
         * 
         * @import isObject from is.object.simple
         * 
         * @import is.array
         * 
         * @import get from .get
         * 
         * @import call from .call
         * 
         * @param {mixed} target 函数或者函数描述
         * 
         * @param {array} [...args] 函数参数
         * 
         * @return {mixed} 函数的返回值
         * 
         */

        if (isFunction(target)) {

            return target(...args);

        } else if (isObject(target)) {

            let {
                fn,
                scope
            } = target;

            get(fn, scope).apply(scope, args);

        } else if (isArray(target)) {

            let targets = target;

            for (let target of targets) {

                call(target, ...args);
            }
        }

    }

    return function(target, ...args) {


        if (!var_init_locked_1608956299363) {

            isFunction = include('src::is.function');
            isObject = include('src::is.object.simple');
            isArray = include('src::is.array');
            get = include('src::function.get');
            call = include('src::function.call');

            var_init_locked_1608956299363 = true;
        }


        return main.call(this, target, ...args);
    };

})();

exports['src::function.create.after'] = (() => {







    function main(target, afterFn) {


        /**
         * 
         * 基于目标函数生成一个带有后继函数的新函数
         * 
         * @param {function} target 目标函数
         * 
         * @param {fucntion} afterFn 后继函数
         * 
         * @return {function} 生成后的函数
         * 
         */

        return function() {

            let me = this,
                value = target.apply(me, arguments);

            afterFn.apply(me, arguments);

            return value;
        };

    }

    return function(target, afterFn) {



        return main.call(this, target, afterFn);
    };

})();

exports['src::function.create.before'] = (() => {







    function main(target, beforeFn) {


        /**
         * 
         * 基于目标函数生成一个带有后继函数的新函数
         * 
         * @param {function} target 目标函数
         * 
         * @param {fucntion} beforeFn 后继函数
         * 
         * @return {function} 生成后的函数
         * 
         */

        return function() {

            let me = this;

            if (beforeFn.apply(me, arguments) !== false) {

                return target.apply(me, arguments);
            }
        };

    }

    return function(target, beforeFn) {



        return main.call(this, target, beforeFn);
    };

})();

exports['src::calendar.month.view'] = (() => {

    let extend, constructor, method_select, method_selectLeft, method_selectRight, method_selectUp, method_selectDown, method_selectMonth, method_selectNextMonth, method_selectPrevMonth, method_deselect, isObject;

    let var_init_locked_1608956299382;

    let var_class_1608956299382;



    let var_global_main_1608956299382;

    return function(target, config) {


        if (!var_init_locked_1608956299382) {

            extend = include('src::class.empty')();
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
            isObject = include('src::is.object.simple');

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

            var_class_1608956299382 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956299382;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::calendar.month.view';
                }

            };

            main = var_class_1608956299382;

            var_global_main_1608956299382 = main;

            var_init_locked_1608956299382 = true;
        }


        return new var_global_main_1608956299382(target, config);
    };

})();

exports['src::month.date.last'] = (() => {

    let get, prev, getLastDate;

    let var_init_locked_1608956299395;



    function main(year, month) {


        /**
         * 
         * 指定月份的最后日期
         * 
         * @import get from date.get
         * 
         * @import prev from date.prev
         * 
         * @import getLastDate from .last
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


        if (!var_init_locked_1608956299395) {

            get = include('src::date.get');
            prev = include('src::date.prev');
            getLastDate = include('src::month.date.last');

            var_init_locked_1608956299395 = true;
        }


        return main.call(this, year, month);
    };

})();

exports['src::calendar.month'] = (() => {

    let get, getDays, prev, next, getLastDate;

    let var_init_locked_1608956299392;



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


        if (!var_init_locked_1608956299392) {

            get = include('src::date.get');
            getDays = include('src::week.days');
            prev = include('src::date.prev');
            next = include('src::date.next');
            getLastDate = include('src::month.date.last');

            var_init_locked_1608956299392 = true;
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

    let getLastDate, get;

    let var_init_locked_1608956299399;



    const var_current_scope_1608956299399 = new Map();

    return function(year, month, day) {


        if (!var_init_locked_1608956299399) {

            getLastDate = include('src::month.date.last');
            get = include('src::date.get.properties');

            var_init_locked_1608956299399 = true;
        }




        if (!var_current_scope_1608956299399.has(this)) {

            var_current_scope_1608956299399.set(this, (() => {
                const deselect = include('src::calendar.month.view.deselect').bind(this);

                function main(year, month, day) {


                    /**
                     * 
                     * 选定
                     * 
                     * @import deselect from .deselect scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299399.get(this);



        return main.call(this, year, month, day);
    };

})();

exports['src::calendar.month.view.selectMonth'] = (() => {

    let getDates, getProperty;

    let var_init_locked_1608956299388;



    const var_current_scope_1608956299388 = new Map();

    return function(year, month) {


        if (!var_init_locked_1608956299388) {

            getDates = include('src::calendar.month');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299388 = true;
        }




        if (!var_current_scope_1608956299388.has(this)) {

            var_current_scope_1608956299388.set(this, (() => {
                const deselect = include('src::calendar.month.view.deselect').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

                function main(year, month) {


                    /**
                     * 
                     * 选定月份
                     * 
                     * @import getDates from ....month
                     * 
                     * @import deselect from .deselect scoped
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299388.get(this);



        return main.call(this, year, month);
    };

})();

exports['src::calendar.month.view.constructor'] = (() => {

    let getProxy, getProperty;

    let var_init_locked_1608956299385;



    const var_current_scope_1608956299385 = new Map();

    return function(target, {
        selectedDate,
        weekStartDay = 0,
        viewConfig = {}
    } = {}) {


        if (!var_init_locked_1608956299385) {

            getProxy = include('src::object.proxy');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299385 = true;
        }




        if (!var_current_scope_1608956299385.has(this)) {

            var_current_scope_1608956299385.set(this, (() => {
                const selectMonth = include('src::calendar.month.view.selectMonth').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

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
                     * @import selectMonth from .selectMonth scoped
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299385.get(this);



        return main.call(this, target, {
            selectedDate,
            weekStartDay,
            viewConfig
        });
    };

})();

exports['src::month.prev'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1608956299409;



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


        if (!var_init_locked_1608956299409) {

            get = include('src::date.get');
            getProperty = include('src::date.get.properties');
            isDate = include('src::is.date');

            var_init_locked_1608956299409 = true;
        }


        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectPrevMonth'] = (() => {

    let prev, getProperty;

    let var_init_locked_1608956299407;



    const var_current_scope_1608956299407 = new Map();

    return function() {


        if (!var_init_locked_1608956299407) {

            prev = include('src::month.prev');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299407 = true;
        }




        if (!var_current_scope_1608956299407.has(this)) {

            var_current_scope_1608956299407.set(this, (() => {
                const selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

                function main() {


                    /**
                     * 
                     * 向上移动月份
                     * 
                     * @import prev from month.prev
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import selectMonth from .selectMonth scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299407.get(this);



        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectLeft'] = (() => {

    let isFirst, get, prevDate, getProperty;

    let var_init_locked_1608956299402;



    const var_current_scope_1608956299402 = new Map();

    return function() {


        if (!var_init_locked_1608956299402) {

            isFirst = include('src::is.week.day.first');
            get = include('src::date.get');
            prevDate = include('src::date.prev');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299402 = true;
        }




        if (!var_current_scope_1608956299402.has(this)) {

            var_current_scope_1608956299402.set(this, (() => {
                const prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

                function main() {

                    /**
                     * 
                     * 向左移一个格
                     * 
                     * @import isFirst from is.week.day.first
                     * 
                     * @import get from date.get
                     * 
                     * @import prevMonth from .selectPrevMonth scoped
                     * 
                     * @import prevDate from date.prev
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299402.get(this);



        return main.call(this);
    };

})();

exports['src::month.next'] = (() => {

    let get, getProperty, isDate;

    let var_init_locked_1608956299417;



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


        if (!var_init_locked_1608956299417) {

            get = include('src::date.get');
            getProperty = include('src::date.get.properties');
            isDate = include('src::is.date');

            var_init_locked_1608956299417 = true;
        }


        return main.call(this, date);
    };

})();

exports['src::calendar.month.view.selectNextMonth'] = (() => {

    let next, getProperty;

    let var_init_locked_1608956299415;



    const var_current_scope_1608956299415 = new Map();

    return function() {


        if (!var_init_locked_1608956299415) {

            next = include('src::month.next');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299415 = true;
        }




        if (!var_current_scope_1608956299415.has(this)) {

            var_current_scope_1608956299415.set(this, (() => {
                const selectMonth = include('src::calendar.month.view.selectMonth').bind(this);

                function main() {


                    /**
                     * 
                     * 向下移动月份
                     * 
                     * @import next from month.next
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import selectMonth from .selectMonth scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299415.get(this);



        return main.call(this);
    };

})();

exports['src::calendar.month.view.selectRight'] = (() => {

    let isLast, get, nextDate, getProperty;

    let var_init_locked_1608956299412;



    const var_current_scope_1608956299412 = new Map();

    return function() {


        if (!var_init_locked_1608956299412) {

            isLast = include('src::is.week.day.last');
            get = include('src::date.get');
            nextDate = include('src::date.next');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299412 = true;
        }




        if (!var_current_scope_1608956299412.has(this)) {

            var_current_scope_1608956299412.set(this, (() => {
                const nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

                function main() {


                    /**
                     * 
                     * 向右移一个格日期
                     * 
                     * @import isLast from is.week.day.last
                     * 
                     * @import get from date.get
                     * 
                     * @import nextMonth from .selectNextMonth scoped
                     * 
                     * @import nextDate from date.next
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299412.get(this);



        return main.call(this);
    };

})();

exports['src::month.date.first'] = (() => {

    let get;

    let var_init_locked_1608956299426;



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


        if (!var_init_locked_1608956299426) {

            get = include('src::date.get');

            var_init_locked_1608956299426 = true;
        }


        return main.call(this, year, month);
    };

})();

exports['src::month.dates.week.first'] = (() => {

    let getDays, getFirstDate, next;

    let var_init_locked_1608956299421;



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


        if (!var_init_locked_1608956299421) {

            getDays = include('src::week.days');
            getFirstDate = include('src::month.date.first');
            next = include('src::date.next');

            var_init_locked_1608956299421 = true;
        }


        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::calendar.month.view.selectUp'] = (() => {

    let getFirstWeekDates, includes, get, prevDate, getProperty;

    let var_init_locked_1608956299419;



    const var_current_scope_1608956299419 = new Map();

    return function() {


        if (!var_init_locked_1608956299419) {

            getFirstWeekDates = include('src::month.dates.week.first');
            includes = include('src::array.dates.includes');
            get = include('src::date.get');
            prevDate = include('src::date.prev.week');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299419 = true;
        }




        if (!var_current_scope_1608956299419.has(this)) {

            var_current_scope_1608956299419.set(this, (() => {
                const prevMonth = include('src::calendar.month.view.selectPrevMonth').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

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
                     * @import prevMonth from .selectPrevMonth scoped
                     * 
                     * @import prevDate from date.prev.week
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299419.get(this);



        return main.call(this);
    };

})();

exports['src::month.dates.week.last'] = (() => {

    let getDays, getLastDate, prev;

    let var_init_locked_1608956299432;



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


        if (!var_init_locked_1608956299432) {

            getDays = include('src::week.days');
            getLastDate = include('src::month.date.last');
            prev = include('src::date.prev');

            var_init_locked_1608956299432 = true;
        }


        return main.call(this, year, month, weekStartDay);
    };

})();

exports['src::calendar.month.view.selectDown'] = (() => {

    let getLastWeekDates, includes, get, nextDate, getProperty;

    let var_init_locked_1608956299429;



    const var_current_scope_1608956299429 = new Map();

    return function() {


        if (!var_init_locked_1608956299429) {

            getLastWeekDates = include('src::month.dates.week.last');
            includes = include('src::array.dates.includes');
            get = include('src::date.get');
            nextDate = include('src::date.next.week');
            getProperty = include('src::date.get.properties');

            var_init_locked_1608956299429 = true;
        }




        if (!var_current_scope_1608956299429.has(this)) {

            var_current_scope_1608956299429.set(this, (() => {
                const nextMonth = include('src::calendar.month.view.selectNextMonth').bind(this);
                const select = include('src::calendar.month.view.select').bind(this);

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
                     * @import nextMonth from .selectNextMonth scoped
                     * 
                     * @import nextDate from date.next.week
                     * 
                     * @import getProperty from date.get.properties
                     * 
                     * @import select from .select scoped
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

                return main;

            })());
        }

        const main = var_current_scope_1608956299429.get(this);



        return main.call(this);
    };

})();

exports['src::miniprogram.storage'] = (() => {





    let var_class_1608956299435;

    let var_once_value_1608956299435;

    let var_global_main_1608956299435;

    return function(data) {


        if (!var_init_locked_1608956299435) {




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

            var_class_1608956299435 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956299435;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::miniprogram.storage';
                }

            };

            main = var_class_1608956299435;

            var_global_main_1608956299435 = main;

            var_init_locked_1608956299435 = true;
        }



        if (var_once_value_1608956299435) {

            return var_once_value_1608956299435;

        }
        return var_once_value_1608956299435 = new var_global_main_1608956299435(data);

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

exports['src::log.node'] = (() => {

    let format, createStream;

    let var_init_locked_1608956299441;

    let var_class_1608956299441;



    let var_global_main_1608956299441;

    return function(path) {


        if (!var_init_locked_1608956299441) {

            format = include('src::date.format');
            createStream = include('src::file.stream.write');


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

            var_class_1608956299441 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956299441;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::log.node';
                }

            };

            main = var_class_1608956299441;

            var_global_main_1608956299441 = main;

            var_init_locked_1608956299441 = true;
        }


        return new var_global_main_1608956299441(path);
    };

})();

exports['src::process.spawn'] = (() => {

    let Process, add, removeAll;

    let var_init_locked_1608956299445;

    let var_class_1608956299445;



    let var_global_main_1608956299445;

    return function(options) {


        if (!var_init_locked_1608956299445) {

            Process = include('src::process')();
            add = include('src::event.listener.add');
            removeAll = include('src::event.listener.remove.all');


            /**
             * 
             * 基于 spawn 进程实现
             * 
             * @import Process from ..process value
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

            var_class_1608956299445 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956299445;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::process.spawn';
                }

            };

            main = var_class_1608956299445;

            var_global_main_1608956299445 = main;

            var_init_locked_1608956299445 = true;
        }


        return new var_global_main_1608956299445(options);
    };

})();

exports['src::process'] = (() => {

    let Observable, add;

    let var_init_locked_1608956299448;

    let var_class_1608956299448;



    let var_global_main_1608956299448;

    return function() {


        if (!var_init_locked_1608956299448) {

            Observable = include('src::mixin.observable');
            add = include('src::event.listener.add');


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

            var_class_1608956299448 = class extends main {

                static get __ZBEE_IS_CLASS__() {

                    return true;
                }


                get __ZBEE_CLASS__() {

                    return true;
                }

                get __ZBEE_CURRENT_CLASS__() {

                    return var_class_1608956299448;
                }

                get __ZBEE_CLASS_NAME__() {

                    return 'src::process';
                }

            };

            main = var_class_1608956299448;

            var_global_main_1608956299448 = main;

            var_init_locked_1608956299448 = true;
        }


        return var_global_main_1608956299448;
    };

})();

exports['src::vue.component'] = (() => {

    let isFunction;

    let var_init_locked_1608956299453;



    function main(name, config, {
        methods,
        mounted,
        destroyed,
        computed,
        data
    }) {


        /**
         * 
         * Vue 组件
         * 
         * @import is.function
         * 
         * @param {string} name 属性名称
         * 
         * @param {object} config 组件原始设置
         * 
         * @param {object} extend 组件扩展配置
         * 
         * @param {object} [extend.methods = {}] 组件方法配置
         * 
         * @param {function} [extend.mounted = () => {}] 组件初始时调用
         * 
         * @param {function} [extend.destroyed = () => {}] 组件销毁时调用
         * 
         * @param {object} [extend.computed = {}] 组件计算属性
         * 
         * @param {function} [extend.data = () => {return {};}] 组件初始化数据结构 
         * 
         * @return {object} Vue 组件配置
         * 
         */

        const {
            assign
        } = Object;

        let {
            mounted: originMounted,
            destroyed: originDestroyed,
            computed: originComputed = {},
            methods: originMethods = {},
            data: originData,
            ...options
        } = config,
        componentConfig = options[name];

        delete options[name];

        methods = assign({}, methods, originMethods),
            computed = assign({}, computed, originComputed);


        if (isFunction(originData)) {

            let innerData = data;

            data = function() {

                let me = this;

                return Object.assign(originData.call(me) || {}, innerData.call(me));

            };

        }

        let innerMounted = mounted;

        if (originMounted) {

            mounted = function() {

                let me = this;

                innerMounted.call(me, componentConfig);

                originMounted.call(me);
            };

        } else {

            mounted = function() {

                innerMounted.call(this, componentConfig);

            };
        }

        let innerDestroyed = destroyed;

        if (originDestroyed) {

            destroyed = function() {

                let me = this;

                innerDestroyed.call(me, componentConfig);

                originDestroyed.call(me);

            };

        } else {

            destroyed = function() {

                innerDestroyed.call(this, componentConfig);
            };
        }

        return {
            ...options,
            data,
            computed,
            mounted,
            destroyed,
            methods
        };


    }

    return function(name, config, {
        methods = {},
        mounted = () => {},
        destroyed = () => {},
        computed = {},
        data = () => {
            return {};
        }
    }) {


        if (!var_init_locked_1608956299453) {

            isFunction = include('src::is.function');

            var_init_locked_1608956299453 = true;
        }


        return main.call(this, name, config, {
            methods,
            mounted,
            destroyed,
            computed,
            data
        });
    };

})();