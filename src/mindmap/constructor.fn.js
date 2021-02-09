
/**
 * 
 * 初始化脑图
 * 
 * @import create from .node.create scoped
 * 
 * @import createReader from data.reader.json
 * 
 * @import setHidden from .hidden scoped
 * 
 * @import afterSetHidden from .hidden.after scoped
 * 
 * @import setSelected from .selected scoped
 * 
 * @import setIndicated from .indicated scoped
 * 
 * @import createVisibilityNodes from .nodes.visibility scoped
 * 
 * @import buffer from function.buffer
 * 
 * @import data from .data scoped
 * 
 * @import tryLayout from .layout.try scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import getAPI from .constructor.api scoped
 * 
 * @import emptyFn from function.empty value
 * 
 * @import is.number
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readConfig = {}] 数据读取根路径设置
 * 
 * @param {boolean} [config.initVisibilityLevel = 2] 初始显示脑图节点层数
 * 
 * @param {function} [config.nodeSeparationDistance] 节点间隔距离
 * 
 * @param {number} [config.nodeVerticalSeparationDistance = 15] 节点垂直间隔距离
 * 
 * @param {number} [config.nodeHorizontalSeparationDistance = 0] 节点水平间隔距离
 * 
 * @param {number} [config.nodeHorizontalLineBreakPointOffset = 12.5] 脑图节点之间连线的折点的偏移位置
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
 * @param {function} [config.callback] 脑图内部回调
 * 
 */

 let me = this ;

 me.api = getAPI() ;

 me.nodes = new Map() ;

 callback = callback || emptyFn ;

 me.callback = (...args) => callback.call(me , ...args) ;

 me.visibilityNodes = createVisibilityNodes() ;
 
 me.unsizedNodes = new Map();
 
 me.leafNodes = new Map();

 me.unpublishedNodes = new Set() ;

 me.nodeSeparationDistance = nodeSeparationDistance ;

 me.nodeVerticalSeparationDistance = nodeVerticalSeparationDistance ;

 if(isObject(nodeHorizontalSeparationDistance)){

   let {
      max = 0,
      min = 0
   } = nodeHorizontalSeparationDistance ;

   me.maxNodeHorizontalSeparationDistance = max ;

   me.minNodeHorizontalSeparationDistance = min ;

   nodeHorizontalSeparationDistance = 0 ;
 }

 me.nodeHorizontalSeparationDistance = nodeHorizontalSeparationDistance ;

 if(nodeHorizontalLineBreakPointOffset > nodeHorizontalSeparationDistance){

   nodeHorizontalLineBreakPointOffset = nodeHorizontalSeparationDistance / 2;
 }

 me.nodeHorizontalLineBreakPointOffset = nodeHorizontalLineBreakPointOffset ;

 if(isNumber(padding)){

   me.padding = {
      top:padding,
      bottom:padding,
      left:padding,
      right:padding
   } ;

 }else if(isObject(padding)){

   me.padding = Object.assign({
      top:0,
      bottom:0,
      left:0,
      right:0
   } , padding) ;

 }else{

   me.padding = {
      top:0,
      bottom:0,
      left:0,
      right:0
   } ;
 }

 me.width = width ;

 me.height = height ;

 let mindmap = me,
 {
    fields:readerFields,
    addFields:readerAddFields = () => {}
 } = reader;
 
 reader = me.reader = createReader({
         order:{
            mode:'readwrite',
            defaultValue:0
         },

         indicators:{
               equals(value , oldValue){

                  return value === oldValue ;
               },

               defaultValue(){

                  return [] ;
               },
               
               mode:'readwrite'
         },
         ...readerFields,
         expanded:{
            mode:'readwrite',
            local:true,
            defaultValue:false
         },
         hidden:{
            mode:'readwrite',
            local:true,
            set(hidden){

               return setHidden(this , hidden) ;
            },
            afterSet(){

               return afterSetHidden(this) ;
            },
            defaultValue:true
         },
         level:{
            mode:'readwrite',
            local:true,
            defaultValue:-1
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
         selected:{
            mode:'readwrite',
            local:true,
            set(selected){

               return setSelected(this , selected) ;

            },
            defaultValue:false
         },
         placeholder:{
            mode:'readwrite',
            local:true,
            defaultValue:false
         },
         restructuring:{
            mode:'readwrite',
            local:true,
            defaultValue:false
         },
         indicated:{
            mode:'readwrite',
            local:true,
            defaultValue:false,
            set(indicated){

               return setIndicated(this , indicated) ;
            }
         },
         editing:{
            mode:'readwrite',
            local:true,
            defaultValue:false
         }
      } , readerAddFields.bind(me)) ;

 me.readConfig = readConfig ;

 me.initVisibilityLevel = initVisibilityLevel ;

 let placeholderNode = create(Object.assign({
   width:placeholderNodeWidth,
   height:placeholderNodeHeight,
   placeholder:true
 } , placeholderNodeData)) ;

 me.placeholderNode = placeholderNode ;

 {
   me.fireNodeUnsizedEvent = buffer(() => {
    
      let {
          unsizedNodes
      } = me ;

      if(unsizedNodes.size){

         me.fireEvent('nodeunsized' , data(unsizedNodes.values()).nodes) ;
      }
   }) ;

   me.fireNodeSizedEvent = buffer(() => {

      let {
         unsizedNodes
      } = me ;

      if(!unsizedNodes.size){

         me.fireEvent('nodesized') ;
      }

   }) ;
 }

me.layout = buffer(tryLayout) ;