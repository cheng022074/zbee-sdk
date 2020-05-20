
/**
 * 
 * 初始化脑图
 * 
 * @import createReader from data.reader.json
 * 
 * @import remove from array.remove
 * 
 * @import defer from function.defer
 * 
 * @import nodes from .nodes
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readerAsRoot] 数据读取根路径设置
 * 
 * @param {boolean} [config.initVisibilityLevel = 2] 初始显示脑图节点层数
 * 
 * @param {number} [config.nodeVerticalSeparationDistance = 15] 节点垂直间隔距离
 * 
 * @param {number} [config.nodeHorizontalSeparationDistance = 25] 节点水平间隔距离
 * 
 * @param {number} [config.padding = 5] 脑图四周填充距离
 * 
 * @param {number} [config.width = 0] 脑图宽度
 * 
 * @param {number} [config.height = 0] 脑图高度
 * 
 * @param {object} [...config.options] 其它脑图配置
 * 
 */

 let me = this,
     visibilityNodeLevels = me.visibilityNodeLevels = new Map(),
     visibilityNodes = me.visibilityNodes = new Map(),
     waitInitSizeNodes = me.waitInitSizeNodes = new Map();

 me.nodeVerticalSeparationDistance = nodeVerticalSeparationDistance ;

 me.nodeHorizontalSeparationDistance = nodeHorizontalSeparationDistance ;

 me.padding = padding ;

 me.width = width - 1 ;

 me.height = height - 1 ;

 me.region = {
   left:0,
   top:0,
   right:0,
   bottom:0
 } ;

 let mindmap = me ;

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
         } = me ;

         if(hidden === false){

            visibilityNodes.set(id , me) ;

            let {
               width,
               height
            } = me ; 

            if(!(width && height)){

               waitInitSizeNodes.set(id , me) ;

               let {
                  nodeCreatedTimerId
               } = mindmap ;

               if(nodeCreatedTimerId){

                  clearTimeout(nodeCreatedTimerId) ;
               }

               mindmap.nodeCreatedTimerId = defer(() => {

                  let {
                     waitInitSizeNodes
                  } = mindmap ;

                  mindmap.fireEvent('nodecreated' , nodes(waitInitSizeNodes.values())) ;

               }) ;
            }
         
         }else{
      
            visibilityNodes.delete(id) ;

            me.level = 0 ;
         }

         return hidden ;
      },
      defaultValue:true
   },
   width:{
      mode:'readwrite',
      local:true,
      defaultValue:false
   },
   height:{
      mode:'readwrite',
      local:true,
      defaultValue:false
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
         
         }else{

            let ids = visibilityNodeLevels.get(level) ;

            remove(ids , id) ;

            if(ids.length === 0){

               visibilityNodeLevels.delete(ids) ;
            }
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