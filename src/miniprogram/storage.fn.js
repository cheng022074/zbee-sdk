
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

 class main{

    setItem(name , value){

        wx.setStorageSync(name , value) ;
    }

    getItem(name){

        return wx.getStorageSync(name) ;
    }

    removeItem(name){

        wx.removeStorageSync(name) ;
    }

    clear(){

        wx.clearStorageSync() ;
    }
 }