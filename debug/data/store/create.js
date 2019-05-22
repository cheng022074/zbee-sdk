/**
 * 
 * 调试数据存储器数据加载
 * 
 * @import create from data.store.create
 * 
 * @import Model from data.model value
 * 
 * @import define from class.define
 * 
 */

 const Node = define(class extends Model{

    static get fieldConfigurations(){

        return [{
            name:'id',
            mapping:'f_id'
        },{
           name:'parentNode',
           belongsTo:{
               associationKey:'f_pid',
               assocationMode:'local-key' 
           }
        },{
            name:'title',
            mapping:'f_title'
        }];
    }

    get parentNode(){

        return this.get('parentNode') ;
    }

    get childNodes(){

        let me = this,
        {
            id,
            store
        } = me;

        return store.findRecords(({
            parentNode
        }) => {

            if(parentNode){

                return parentNode.id === id ;
            }

            return false ;

        }) ;
    }

 }) ;

 let store = create({
     model:Node,
     data:[{
            "f_company_id": "1",
            "f_id": "3671",
            "f_pid": "0",
            "f_create_by": "426",
            "f_create_date": "2019-05-20 20:00:39",
            "f_update_by": "332",
            "f_update_date": "2019-05-22 11:44:01",
            "f_owner": "426",
            "f_title": "测试test121d",
            "f_desc": "",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "自定义",
            "f_type_id": "0",
            "f_refer_id": "",
            "f_chat_id": "925",
            "parent": "",
            "children": [],
            "total": "4",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "chat_info": {
                "room_id": "925",
                "day_msg_count": "5",
                "room_name": "测试test121d",
                "room_type": "W",
                "room_property": "normal",
                "room_head": "http://testok.xinyusoft.com/ok/img/roomhead/925/1de2fd64-531f-4c2d-a5cf-27b752b277cb.jpg",
                "union_id": "426",
                "room_member_number": "7",
                "main_object": "426",
                "create_time": "2019-05-20 20:00:38.0",
                "user": {
                    "user_id": "426",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
                    "province": "河北省",
                    "company_id": "1",
                    "city": "石家庄市",
                    "name": "候壮",
                    "mobile": "13641223176",
                    "register_time": "2019-03-20 15:31:13",
                    "email": "2997837854@qq.com"
                },
                "msg_time": "1558353638549"
            },
            "group_info": [{
                    "f_check_id": "3671",
                    "f_id": "722",
                    "f_user_id": "426",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:00:39",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
                    "owner_name": "候壮"
                }, {
                    "f_check_id": "3671",
                    "f_id": "724",
                    "f_user_id": "428",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:00:57",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/rvWBxDvYA5AEh3X2vntH7D07GtfhibmbuC0MZQADXiaAoC42RY8cZesVFLuTsjIToNrVC1EhKayK3HP4NVQ1ML3Q/132",
                    "owner_name": "用户_5586"
                }, {
                    "f_check_id": "3671",
                    "f_id": "728",
                    "f_user_id": "454",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:06:27",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/GK5qHkXfibkLVKp1Je3Txd5eNd8BHltPzibILdoM4nsfodAc9Rjvju1ngLy1yb3ic8ZhPmEBlvKYFWn8JkIk43iaEw/132",
                    "owner_name": "马传宇"
                }, {
                    "f_check_id": "3671",
                    "f_id": "730",
                    "f_user_id": "427",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:07:08",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/ydVBBkofXDrxTE07iagHEzl8pcTUt8siaMNibhUI77lJiaA2mzFCWbanZicOxHRWjIkmdrKFBKmloOIah2m6MPHTiaBw/132",
                    "owner_name": "金牌"
                }, {
                    "f_check_id": "3671",
                    "f_id": "731",
                    "f_user_id": "409",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:09:08",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKuxy0eellMvO6d9fjI9Txz9MHTBicR12yTDO0YnQ465gkCibbzOV4XYBArZVEfDJibAT5hPiaoyhXexg/132",
                    "owner_name": "糯米饭"
                }, {
                    "f_check_id": "3671",
                    "f_id": "735",
                    "f_user_id": "346",
                    "f_create_by": "427",
                    "f_create_date": "2019-05-20T20:28:04",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIDhIpvB4hJnobZG2UjqSvUwBs63TCMnAwCxtGRVSflJAPYyXMg4YwDJApsoH9udzMR85zCMNVghQ/132",
                    "owner_name": "杨昀"
                }, {
                    "f_check_id": "3671",
                    "f_id": "736",
                    "f_user_id": "437",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-20T20:28:57",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqlZS3oicpm5HicSUl5HVSw2icpkSOt3Nb6ZaaH4cfVrWKskclEQmOhJVR5BI4bwRrz8zKg/132",
                    "owner_name": "langwenjing"
                }, {
                    "f_check_id": "3671",
                    "f_id": "745",
                    "f_user_id": "332",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-21T17:59:13",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erZHPY2djd9hP1xaoBsibFntYws3ZvJrwA3M5PSH5y8X2jMbOicQhxy1CzJUEfHXUPLFFuWMsaKzdSA/132",
                    "owner_name": "高。。。"
                }
            ]
        }, {
            "f_company_id": "1",
            "f_id": "3843",
            "f_pid": "3671",
            "f_create_by": "437",
            "f_create_date": "2019-05-21 10:01:37",
            "f_update_by": "428",
            "f_update_date": "2019-05-21 17:44:48",
            "f_owner": "437",
            "f_title": "基金会",
            "f_desc": "\"null\"",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "1",
            "done": "0",
            "function": [],
            "owner_name": "langwenjing",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqlZS3oicpm5HicSUl5HVSw2icpkSOt3Nb6ZaaH4cfVrWKskclEQmOhJVR5BI4bwRrz8zKg/132",
            "source_title": "测试test121d"
        }, {
            "f_company_id": "1",
            "f_id": "3896",
            "f_pid": "3671",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 13:38:52",
            "f_update_by": "428",
            "f_update_date": "2019-05-21 19:01:40",
            "f_owner": "426",
            "f_title": "测试2",
            "f_desc": "\"null\"",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "source_title": "测试test121d"
        }, {
            "f_company_id": "1",
            "f_id": "3909",
            "f_pid": "3896",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 13:39:54",
            "f_update_by": "426",
            "f_update_date": "2019-05-22 09:32:51",
            "f_owner": "426",
            "f_title": "牛掰",
            "f_desc": "地方GV的huiiiouoiiiiii111111111jkkjk东方华府高等多个",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "1",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "attachment": [{
                    "f_check_id": "3909",
                    "f_id": "5653",
                    "f_type": "docx",
                    "f_title": "月配规则",
                    "f_path": "http://121.40.177.191:8880/api2e/upload/4c65dd0aaee6b833e490b66064674ca0.docx",
                    "f_properties": "",
                    "f_create_by": "426",
                    "f_create_date": "2019-05-22T09:32:51",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0"
                }
            ],
            "source_title": "测试2"
        }, {
            "f_company_id": "1",
            "f_id": "3980",
            "f_pid": "3843",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 14:28:02",
            "f_update_by": "428",
            "f_update_date": "2019-05-21 17:49:55",
            "f_owner": "426",
            "f_title": "发顺丰",
            "f_desc": "222323就降价",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "1",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "attachment": [{
                    "f_check_id": "3980",
                    "f_id": "5649",
                    "f_type": "docx",
                    "f_title": "月配规则",
                    "f_path": "http://121.40.177.191:8880/api2e/upload/4c65dd0aaee6b833e490b66064674ca0.docx",
                    "f_properties": "",
                    "f_create_by": "428",
                    "f_create_date": "2019-05-21T17:49:55",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0"
                }, {
                    "f_check_id": "3980",
                    "f_id": "5650",
                    "f_type": "docx",
                    "f_title": "月配规则",
                    "f_path": "http://121.40.177.191:8880/api2e/upload/4c65dd0aaee6b833e490b66064674ca0.docx",
                    "f_properties": "",
                    "f_create_by": "428",
                    "f_create_date": "2019-05-21T17:49:55",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0"
                }, {
                    "f_check_id": "3980",
                    "f_id": "5651",
                    "f_type": "docx",
                    "f_title": "月配规则",
                    "f_path": "http://121.40.177.191:8880/api2e/upload/4c65dd0aaee6b833e490b66064674ca0.docx",
                    "f_properties": "",
                    "f_create_by": "428",
                    "f_create_date": "2019-05-21T17:49:55",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0"
                }
            ],
            "source_title": "基金会"
        }, {
            "f_company_id": "1",
            "f_id": "3985",
            "f_pid": "3671",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 14:32:10",
            "f_update_by": "426",
            "f_update_date": "2019-05-21 20:12:20",
            "f_owner": "426",
            "f_title": "虎丘路",
            "f_desc": "1111111111\n",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "source_title": "测试test121d"
        }, {
            "f_company_id": "1",
            "f_id": "3988",
            "f_pid": "3985",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 14:38:01",
            "f_update_by": "428",
            "f_update_date": "2019-05-21 19:58:14",
            "f_owner": "426",
            "f_title": "测试",
            "f_desc": "dghfhhj",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "source_title": "虎丘路"
        }, {
            "f_company_id": "1",
            "f_id": "3989",
            "f_pid": "3980",
            "f_create_by": "426",
            "f_create_date": "2019-05-21 14:56:27",
            "f_update_by": "426",
            "f_update_date": "2019-05-21 20:12:31",
            "f_owner": "426",
            "f_title": "k",
            "f_desc": "\"null\"",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "候壮",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eol2DeahlxfDhKzUxdnFBibepPA5QZbN2Up5TzmZCQS5VDKA7GNZK9I9XNvR3N1h4Ic5VjUJ3Cdx8g/132",
            "source_title": "发顺丰"
        }, {
            "f_company_id": "1",
            "f_id": "4093",
            "f_pid": "3985",
            "f_create_by": "437",
            "f_create_date": "2019-05-21 18:30:21",
            "f_update_by": "426",
            "f_update_date": "2019-05-22 11:01:43",
            "f_owner": "437",
            "f_title": "1111122222222222222222222222222222222222222222222",
            "f_desc": "2",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3671",
            "f_affair_title": "",
            "f_type_id": "1",
            "f_refer_id": "",
            "f_chat_id": "",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "langwenjing",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqlZS3oicpm5HicSUl5HVSw2icpkSOt3Nb6ZaaH4cfVrWKskclEQmOhJVR5BI4bwRrz8zKg/132",
            "source_title": "虎丘路"
        }
    ]


 }) ;

 store.each(record =>{

   

        console.log(record.id , record.childNodes.length) ;
    

 }) ;