
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
 * @import data from .data scoped
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
 * @param {mixed} [config.layout = 'logic.right'] 布局模式
 * 
 * @param {object} [config.api = {}] 附加 API
 * 
 * @param {function} [config.callback] 脑图内部回调
 * 
 */

 let me = this ;

 {
   let methods = Object.keys(api) ;

   for(let method of methods){

      me[method] = include(api[method]) ;
   }
 }

 {

   let layoutConfig = {} ;

   if(isString(layout)){

      layout = {
         pattern:layout
      };
   
   }else if(!isObject(layout)){

      layout = {} ;
   }

   layoutConfig.createPositioner = include(`mindmap.layout.positioner.${layout.createPositioner || 'logic.right'}`).bind(me) ;
   
   layoutConfig.pattern = include(`mindmap.layout.pattern.${layout.pattern || 'logic.right'}`).bind(me) ;

   layoutConfig.getRootNode = include(`mindmap.layout.node.root.${layout.getRootNode || 'normal'}`).bind(me) ;

   layoutConfig.getDescendantNodes = include(`mindmap.layout.nodes.descendant.${layout.getDescendantNodes || 'normal'}`).bind(me) ;

   if(isNumber(nodeSpacing)){

      nodeSpacing = {
         top:nodeSpacing,
         bottom:nodeSpacing,
         left:nodeSpacing,
         right:nodeSpacing
      } ;
   }

   if(isObject(nodeSpacing)){

      layoutConfig.nodeSpacing = nodeSpacing ;
   
   }

   me.layoutConfig = layoutConfig ;
   
 }

 me.nodes = new Map() ;

 callback = callback || emptyFn ;

 me.callback = (...args) => callback.call(me , ...args) ;

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


 me.layout = buffer(doLayout) ;

 me.refresh = buffer(doRefresh) ;