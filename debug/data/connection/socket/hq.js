/**
 * 
 * 调试行情版本
 * 
 * @import Socket from data.connection.socket.io value
 * 
 * @import isObject from is.object.simple
 * 
 * @import isEmpty from is.object.empty
 *
 * @import read from file.read.json
 * 
 * @import from from array.from
 * 
 * @import create from class.create
 * 
 * @import Subscriber from data.Subscriber value
 * 
 * @import is.array
 * 
 * @import get from date.get
 * 
 * @import parse from date.parse
 * 
 * @import getNumberFormat from number.format
 * 
 */

 const {
    join
 } = require('path') ;

const protobuf = require("protobufjs");

const protoRoot = protobuf.Root.fromJSON(read(join(process.env['ZBEE-APP-PATH'] , 'data' , 'proto.json')));


const dataTypeMaps = [{
    // 开收盘信号
    dataType: 0,
    fileName: 'MarketInfo',
    className: 'MarketInfo',
    apiName: 'api_sign',
    socketWay: 'default',
  }, {
    // 分时成交
    dataType: 4,
    fileName: 'Tick',
    className: 'Tick',
    apiName: 'api_tick',
    socketWay: 'default',
  }, {
    // 盘口
    dataType: 5,
    fileName: 'SnapShot',
    className: 'SnapShot',
    apiName: 'api_wind',
    socketWay: 'default',
  }, {
    // 个股
    dataType: 6,
    fileName: 'SnapBody',
    className: 'SnapBody',
    apiName: 'api_one',
    socketWay: 'default',
  }, {
    // 分时
    dataType: 7,
    fileName: 'TimeLine',
    className: 'TimeLine',
    apiName: 'api_time',
    socketWay: 'default',
  }, {
    // 1分k
    dataType: 8,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_k_1',
    socketWay: 'default',
  }, {
    // 5分k
    dataType: 9,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_k_5',
    socketWay: 'default',
  }, {
    // 15分k
    dataType: 10,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_k_15',
    socketWay: 'default',
  }, {
    // 30分k
    dataType: 11,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_k_30',
    socketWay: 'default',
  }, {
    // 60分k
    dataType: 12,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_k_60',
    socketWay: 'default',
  }, {
    // 日k
    dataType: 13,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_day',
    socketWay: 'default',
  }, {
    // 分笔分价
    dataType: 14,
    fileName: 'PriceFence',
    className: 'PriceFence',
    apiName: 'api_price',
    socketWay: 'rank',
  }, {
    // 当日资金流向
    dataType: 15,
    fileName: 'FundFlow',
    className: 'FundFlow',
    apiName: 'api_capital_1',
    socketWay: 'default',
  }, {
    // 五日资金流向
    dataType: 16,
    fileName: 'FundFlow',
    className: 'FundFlow',
    apiName: 'api_capital_5',
    socketWay: 'default',
  }, {
    // 涨跌家数量
    dataType: 17,
    fileName: 'IndexStat',
    className: 'IndexStat',
    apiName: 'api_indexWind',
    socketWay: 'rank',
  }, {
    // 涨跌排行榜
    dataType: 18,
    fileName: 'ComprehensiveRank',
    className: 'ComprehensiveRank',
    apiName: 'api_rank',
    socketWay: 'rank',
  }, {
    // 表格
    dataType: 19,
    fileName: 'SnapBody',
    className: 'SnapBody',
    apiName: 'api_table',
    socketWay: 'rank',
  }, {
    // 周k
    dataType: 20,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_week',
    socketWay: 'default',
  }, {
    // 月k
    dataType: 21,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_month',
    socketWay: 'default',
  }, {
    // 年k
    dataType: 22,
    fileName: 'KLine',
    className: 'KLine',
    apiName: 'api_year',
    socketWay: 'default',
  }, {
    // 快讯直播
    dataType: 23,
    fileName: 'LiveNews',
    className: 'LiveNews',
    apiName: 'api_news',
    socketWay: 'default',
  },{
    // 涨跌幅详情统计
    dataType: 30,
    fileName: 'ClassifyChangeCount',
    className: 'ClassifyChangeCount',
    apiName: 'api_all',
    socketWay: 'rank',
  }, {
    // 行业 地区 概念 分类排行数据
    dataType: 31,
    fileName: 'ClassifySectRank',
    className: 'ClassifySectRank',
    apiName: 'api_newAll',
    socketWay: 'rank',
  },{
    // 码表
    dataType: 99,
    fileName: 'CodeList',
    className: 'CodeList',
    apiName: 'api_codeList',
    socketWay: 'default',
  }]
  
  let type2info = {}, name2type = {};
  dataTypeMaps.forEach(item => {
    type2info[item.dataType] = item;
    type2info[String(item.dataType)] = item;
    name2type[item.apiName] = item.dataType;
  });
  
  function type2name(type) {
    return type2info[type].apiName;
  }
  

 class XYSocket extends Socket{

    processSubscribeParams(subscriber , params){

        return [{
          subs:[
            params
          ]
        }] ;
    }

    processMessage(dataType, symbol, arrayFlag, buffer, order, count, startNum){

        return {
            params:{
              symbol,
              dataType
            },
            data:this.decodeData(buffer, dataType, arrayFlag, symbol)
        } ;
    }

    decodeData(data, dataType, arrayFlag , symbol){

        if(isObject(data) && isEmpty(data)) {

            return {
                empty: true
            };
        }

        let names = type2info[dataType];

        let root = protoRoot.lookupType(`com.xinyu.unidata.protocbuf.${names.className}`);
        
        let newData;
        
        if(arrayFlag){

            console.log(root.decode.toString) ;

            newData = Array.from(data, item => root.decode(new Uint8Array(item)));


        }else{

            newData = root.decode(new Uint8Array(data));

        }

        return newData;
    }
 }

let socket = new XYSocket({
  socket:{
    url:'wss://quote.xinyusoft.com/stock',
    options:{
        path:'/classify',
    }
  },
  rules:[{
    test:'time\\-sharing',
    use(){
        return {
            extraParams:{
                dataType:name2type['api_tick'],
                length:-1
            },
            autoOpen:false
        } ;
    }
},{
    test:'^(\\w+):{2}(.+)$',
    use(id , api , symbol){

        return {
            params:{
              dataType:name2type[api],
              symbol
            }
        } ;
    }
}]
}) ;

return ;


socket.subscribe('api_newAll::10').bind(data =>{

  console.log('推送1') ;

}) ;


setTimeout(() =>{

  console.log('取消订阅') ;

  socket.unsubscribe('api_newAll::10') ;

  return ;

  setTimeout(() =>{

    console.log('订阅') ;
  
    socket.subscribe('api_newAll::10').bind(data =>{
  
      console.log('推送2') ;
  
    }) ;
  
  } , 3000) ;
  

} , 5000) ;

