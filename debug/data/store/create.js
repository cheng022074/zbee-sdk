/**
 * 
 * 调试数据存储器数据加载
 * 
 * @import create from data.store.create
 * 
 */

 let store = create({
     fields:[{
         name:'id',
         mapping:'f_id'
     },{
        name:'parentNode',
        belongsTo:{
            associationKey:'f_pid',
            assocationMode:'local-key' 
        }
     }],
     data:[{
            "f_company_id": "1",
            "f_id": "3869",
            "f_pid": "0",
            "f_create_by": "427",
            "f_create_date": "2019-05-21 11:18:17",
            "f_update_by": "437",
            "f_update_date": "2019-05-21 14:23:33",
            "f_owner": "427",
            "f_title": "5555扭扭扭密密麻麻9999",
            "f_desc": "",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3869",
            "f_affair_title": "",
            "f_type_id": "0",
            "f_refer_id": "",
            "f_chat_id": "926",
            "parent": "",
            "children": [],
            "total": "0",
            "done": "0",
            "function": [],
            "owner_name": "金牌",
            "owner_head": "http://thirdwx.qlogo.cn/mmopen/vi_32/ydVBBkofXDrxTE07iagHEzl8pcTUt8siaMNibhUI77lJiaA2mzFCWbanZicOxHRWjIkmdrKFBKmloOIah2m6MPHTiaBw/132",
            "chat_info": {
                "room_id": "926",
                "day_msg_count": "0",
                "room_name": "5555",
                "room_type": "W",
                "room_property": "normal",
                "room_head": "http://testok.xinyusoft.com/ok/img/roomhead/926/807719c7-b902-4b3e-8907-53ba6e411793.jpg",
                "union_id": "427_437",
                "room_member_number": "2",
                "main_object": "427",
                "create_time": "2019-05-21 11:18:16.0",
                "user": {
                    "user_id": "427",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/ydVBBkofXDrxTE07iagHEzl8pcTUt8siaMNibhUI77lJiaA2mzFCWbanZicOxHRWjIkmdrKFBKmloOIah2m6MPHTiaBw/132",
                    "province": "上海市",
                    "company_id": "1",
                    "city": "杨浦区",
                    "name": "金牌",
                    "mobile": "15221853592",
                    "register_time": "2019-03-22 10:18:51",
                    "email": "jinpai@xinyusoft.com"
                },
                "subsidiary_user_id": "437",
                "msg_time": "1558408696633"
            },
            "group_info": [{
                    "f_check_id": "3869",
                    "f_id": "739",
                    "f_user_id": "437",
                    "f_create_by": "427",
                    "f_create_date": "2019-05-21T11:18:17",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIkb4JFA2mqlZS3oicpm5HicSUl5HVSw2icpkSOt3Nb6ZaaH4cfVrWKskclEQmOhJVR5BI4bwRrz8zKg/132",
                    "owner_name": "langwenjing"
                }, {
                    "f_check_id": "3869",
                    "f_id": "740",
                    "f_user_id": "427",
                    "f_create_by": "427",
                    "f_create_date": "2019-05-21T11:18:17",
                    "f_update_by": "",
                    "f_update_date": "",
                    "f_del_flag": "0",
                    "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/ydVBBkofXDrxTE07iagHEzl8pcTUt8siaMNibhUI77lJiaA2mzFCWbanZicOxHRWjIkmdrKFBKmloOIah2m6MPHTiaBw/132",
                    "owner_name": "金牌"
                }
            ]
        }, {
            "f_company_id": "1",
            "f_id": "3939",
            "f_pid": "3869",
            "f_create_by": "437",
            "f_create_date": "2019-05-21 13:55:55",
            "f_update_by": "437",
            "f_update_date": "2019-05-21 14:36:21",
            "f_owner": "437",
            "f_title": "单独的单独的",
            "f_desc": "",
            "f_progress": "0",
            "f_priority_time": "",
            "f_priority_value": "",
            "f_start_date": "",
            "f_end_date": "",
            "f_cost": "",
            "f_state": "1",
            "f_del_flag": "0",
            "f_rid": "3869",
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
            "source_title": "5555扭扭扭密密麻麻9999"
        }
    ]

 }) ;

let node = store.getAt(0) ;

console.log(node.get('parentNode')) ;