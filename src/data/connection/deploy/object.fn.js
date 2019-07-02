
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

 for(let name of names){

    let field = name === 'default' ? 'subscribers' : `${name}_subscribers`,
        subscribers = component[field] ;

    if(subscribers){

        config[name] ={
            varName:`$${name}`,
            connection:connections[name],
            subscribers
        } ;

        delete component[field] ;
    }
 }

 return deploy(config);