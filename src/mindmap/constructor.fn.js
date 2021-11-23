
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
 * @import getHidden from .node.field.hidden.get scoped
 * 
 * @import setSelected from .node.field.selected scoped
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
 * @import get from function.get
 * 
 * @import generate from .node.id.generate scoped
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readConfig = {}] 数据读取根路径设置
 * 
 * @param {number} [config.nodeSpacing = 0] 节点间隔设置
 * 
 * @param {number} [config.padding = 5] 脑图四周填充距离
 * 
 * @param {number} [config.width = 0] 脑图宽度
 * 
 * @param {number} [config.height = 0] 脑图高度
 * 
 * @param {number} [config.dragNodeDiscernRadius = 10] 拖曳识别半径
 * 
 * @param {mixed} [config.layout] 布局模式
 * 
 * @param {object} [config.api = {}] 附加 API
 * 
 */

 let me = this ;

 me.dragNodeDiscernRadius = dragNodeDiscernRadius ;

 {
   let methods = Object.keys(api) ;

   for(let method of methods){

      me[method] = get(api[method] , me) ;
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

   let {
      createPositioner = 'mindmap.layout.positioner.logic.right',
      pattern = 'mindmap.layout.pattern.logic.right',
      getRootNode = 'mindmap.node.root',
      getDescendantNodes = 'mindmap.prelayout.nodes.descendant',
      ...options
   } = layout ;

   layoutConfig.createPositioner = get(createPositioner , me) ;
   
   layoutConfig.pattern = get(pattern , me) ;

   layoutConfig.patternName = pattern ;

   layoutConfig.getRootNode = get(getRootNode , me) ;

   layoutConfig.getDescendantNodes = get(getDescendantNodes , me) ;

   Object.assign(layoutConfig , options) ;

   if(isNumber(nodeSpacing)){

      nodeSpacing = {
         top:nodeSpacing,
         bottom:nodeSpacing,
         left:nodeSpacing,
         right:nodeSpacing
      } ;
   }

   if(isObject(nodeSpacing)){

      layoutConfig.nodeSpacing = Object.assign({
         top:0,
         bottom:0,
         left:0,
         right:0
      } , nodeSpacing) ;
   
   }

   me.layoutConfig = layoutConfig ;
   
 }

 me.nodes = new Map() ;

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
    fields:readerFields
 } = reader;
 
 reader = me.reader = createReader({
         id:{
            convert(){

               return generate() ;
            }
         },

         document:{

            get(){

               return {

                  getParentNode(node){

                     return me.getParentNode(node) ;
                  },

                  getChildNodes(node){

                     return me.getChildNodes(node) ;
                  }

               } ;
            }
         },

         visibility:{
            defaultValue:true
         },

         loaded:{
            defaultValue:true,
            mode:'readwrite'
         },
         loadChildrenData:{
            defaultValue(){

               return ()=> [] ;
            }
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
         ...readerFields,
         parentNodeId: {
            local:true,
            mode:'readwrite'
          },
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
            get(hidden){

               return getHidden(this , hidden) ;
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
         selected:{
            mode:'readwrite',
            local:true,
            set(selected){

               return setSelected(this , selected) ;

            },
            defaultValue:false
         },
         dragging:{
            mode:'readwrite',
            local:true,
            defaultValue:false
         }
      }) ;

 me.readConfig = readConfig ;

 let placeholderNode = create({
   type:'placeholder'
 }) ;

 me.placeholderNode = placeholderNode ;