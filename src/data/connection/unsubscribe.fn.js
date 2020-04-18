
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

if(namespace){

    fullNames.push(getName(name , namespace)) ;

}else{

    let  subscriberNames = subscribers.keys(),
         namespaceRe = /\<[^\<\>]+\>$/;

    for(let subscriberName of subscriberNames){

        if(subscriberName.replace(namespaceRe , '') === name){

            fullNames.push(subscriberName) ;
        }
    }
}

for(let fullName of fullNames){

    me.doSubscriberMethod(fullName , 'destroy') ;
}

