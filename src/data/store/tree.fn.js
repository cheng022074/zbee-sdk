
/**
 * 
 * 树型数据存储器
 * 
 * @import Store from data.store value
 * 
 * @param {object} options 数据存储器配置
 * 
 * 
 */

 class main extends Store{

    onProxyRead(proxy , records){

       let me = this ;

       me.loadCount = 1 ;

       me.onStoreLoad(records) ;
    }

    onStoreLoad(records , belongToRecord){

        let me = this;

        if(belongToRecord){

            me.insert(me.indexOf(belongToRecord) + 1 , records , false) ;
        
        }else{

            me.add(records , false) ;
        }

        for(let record of records){

            me.loadCount ++ ;

            record.addFieldStoreListers({
                load:{
                   fn(store , records){

                        me.onStoreLoad(records , record) ;
                   },
                   once:true
                },
                scope:me
             }) ;
        }

        me.loadCount -- ;

        if(me.loadCount === 0){

            delete me.loadCount ;

            me.fireEvent('load' , me.records) ;
        }
    }
 }