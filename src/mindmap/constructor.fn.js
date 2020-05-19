
/**
 * 
 * 初始化脑图
 * 
 * @import createReader from data.reader.json
 * 
 * @import remove from array.remove
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readerAsRoot] 数据读取根路径设置
 * 
 * @param {boolean} [config.initVisibilityLevel = 2] 初始显示脑图节点层数
 * 
 * @param {object} [...config.options] 其它脑图配置
 * 
 */

 let me = this,
     visibilityNodeLevels = me.visibilityNodeLevels = new Map(),
     visibilityNodes = me.visibilityNodes = new Map() ;

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
      set(hidden){

         let me = this,
         {
            id
         } = this ;

         if(hidden === false){

            visibilityNodes.set(id , me) ;
         
         }else{
      
            visibilityNodes.delete(id) ;
         }

         return hidden ;
      },
      defaultValue:true
   },
   width:{
      mode:'readwrite',
      local:true,
      defaultValue:0
   },
   height:{
      mode:'readwrite',
      local:true,
      defaultValue:0
   },
   x:{
      mode:'readwrite',
      local:true,
      defaultValue:0
   },
   y:{
      mode:'readwrite',
      local:true,
      defaultValue:0
   },
   level:{
      mode:'readwrite',
      local:true,
      set(level , oldLevel){
         
         let {
            id
         } = this ;

         if(oldLevel !== 0){

            let ids = visibilityNodeLevels.get(oldLevel) ;

            remove(ids , id) ;

            if(ids.length === 0){

               visibilityNodeLevels.delete(ids) ;
            }
         }

         if(level !== 0){

            if(!visibilityNodeLevels.has(level)){

               visibilityNodeLevels.set(level , []) ;
            }
   
            visibilityNodeLevels.get(level).push(id) ;
         }

         return level ;
      },
      defaultValue:0
   }
 }) ;

 me.readerAsRoot = readerAsRoot ;

 me.initVisibilityLevel = initVisibilityLevel ;

 me.onRootNodePropertyChange = (ob , node , name , value) => {
 } ;