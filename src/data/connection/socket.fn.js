
/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @class
 * 
 */

 class main extends Connection{

    constructor({
        rules = [],
        ...options
    }){

        super(options) ;

        this.rules = me.createRules(rules) ;
    }

    /**
     * 
     * 构建规则集合
     * 
     * 
     * @param {object} rules 规则配置
     * 
     * @return {Map} 规则集合
     */
    createRules(rules){

        let result = [] ;

        for(let {
            test,
            use
        } of rules){

            if(isFunction(use)){

                result.push({
                    test:createRegex(test),
                    use
                }) ;
            }
        }

        return result ;
    }

    processMessage(...args){

        return {} ;
    }

    validateMessage({
        params:baseParams
    } , {
        params:equalParams
    }){

        if(isObject(baseParams) || isObject(equalParams)){

            let keys = getKeys(baseParams) ;

            for(let key of keys){

                if(getValue(baseParams , key) !== getValue(equalParams , key)){

                    return false ;
                }
            }
        }

        return true ;
    }

    /**
     * 
     * 接收消息
     * 
     * @param  {mixed} [...args] 消息参数
     * 
     */
    acceptMessage(...args){

        let me = this,
            message = me.processMessage(...args),
            {
                subscribers
            } = me,
            data = me.processData(message);

        subscribers.forEach(subscriber => {

            if(me.validateMessage(subscriber , message)){

                subscriber.acceptData(data) ;
            }

        }) ;
    }

    /**
     * 
     * 将订阅名称根据预定义的规则转换成订阅器配置
     * 
     * @param {string} name 订阅名称
     * 
     * @return {object} 订阅器配置
     * 
     */
    convertNameToSubscriberOptions(name){

        let {
            rules
        } = this;

        for(let {
            test,
            use
        } of rules){

            let args = name.match(test) ;

            if(args){

                return use(...args) ;
            }
        }
    }

    /**
     * 
     * 订阅
     * 
     * @param {string} name 订阅名称
     * 
     * @param {object} [options = {}] 订阅参数
     * 
     * @return {data.connection.Subscribe} 成功订阅后的获得的订阅器
     * 
     */
    subscribe(name , options = {}){

        let me = this ;

        let baseOptions = me.convertNameToSubscriberOptions(name);

        if(baseOptions){

            return super.subscribe(name , assign(baseOptions , options)) ;

        }else{

            throw new Error(`无效的订阅名称 ${name}`) ;
        }
    }
 }