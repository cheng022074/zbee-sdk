
/**
 * 
 * 初始化脑图
 * 
 * @import createReader from data.reader.json
 * 
 * @import setHidden from .hidden scoped
 * 
 * @import setLevel from .level scoped
 * 
 * @import setSelected from .selected scoped
 * 
 * @import setIndicated from .indicated scoped
 * 
 * @import createVisibilityNodes from .nodes.visibility scoped
 * 
 * @import generate from id.generate
 * 
 * @import buffer from function.buffer
 * 
 * @import data from .data scoped
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
 * @param {object} [...config.options] 其它脑图配置
 * 
 */

 let me = this ;

 me.nodes = new Map() ;

 me.visibilityNodeLevels = new Map();

 me.visibilityNodes = createVisibilityNodes() ;
 
 me.unsizedNodes = new Map();
 
 me.leafNodes = new Map();

 me.nodeVerticalSeparationDistance = nodeVerticalSeparationDistance ;

 me.nodeHorizontalSeparationDistance = nodeHorizontalSeparationDistance ;

 me.padding = padding ;

 me.width = width ;

 me.height = height ;

 let mindmap = me;
 
 reader = me.reader = createReader({
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

               return setHidden(this , hidden) ;
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
               
               return setLevel(this , level , oldLevel) ;
            },
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
         order:{
            mode:'readwrite',
            defaultValue:0
         }
      }) ;

 me.readerAsRoot = readerAsRoot ;

 me.initVisibilityLevel = initVisibilityLevel ;

 let placeholderNode = reader.create({
   id:generate('placeholder-'),
   width:placeholderNodeWidth,
   height:placeholderNodeHeight,
   placeholder:true,
   children:[]
 }) ;

 me.placeholderNode = placeholderNode ;

 me.fireNodeUnsizedEvent = buffer(() => {
    
   let {
       unsizedNodes
   } = me ;

   me.fireEvent('nodeunsized' , data(unsizedNodes.values()).nodes) ;

}) ;




