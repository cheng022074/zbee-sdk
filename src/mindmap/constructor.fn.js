
/**
 * 
 * 初始化脑图
 * 
 * @import createReader from data.reader.json
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readerAsRoot] 数据读取根路径设置
 * 
 * @param {boolean} [config.initDisplayLevel = 2] 初始显示脑图节点层数
 * 
 * @param {object} [...config.options] 其它脑图配置
 * 
 */

 let me = this ;

 me.reader = createReader({
   ...reader,
   expanded:{
      mode:'readwrite',
      local:true,
      defaultValue:false
   },
   hidden:{
      mode:'readwrite',
      local:true,
      defaultValue:true
   },
   width:{
      mode:'readwrite',
      local:true,
      defaultValue:-1
   },
   height:{
      mode:'readwrite',
      local:true,
      defaultValue:-1
   },
 }) ;

 me.readerAsRoot = readerAsRoot ;

 me.initDisplayLevel = initDisplayLevel ;

 let visibilityNodes = me.visibilityNodes = new Map() ;

 me.onRootNodePropertyChange = (ob , node , name , value) => {

   if(name === 'hidden'){

      if(value === false){

         visibilityNodes.set(node.id , node) ;
      
      }else{
   
         visibilityNodes.delete(node.id) ;
      }
   }

 } ;