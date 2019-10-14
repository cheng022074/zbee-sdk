
/**
 * 
 * 载入数据
 * 
 * @import Store from data.store value
 * 
 */

 function isPrivateChat({
    room_type
 }){

   return room_type === 'S' ;
 }

 let store = new Store({
    listeners:{
       load(store , data){

         console.log('data' , data) ;
         
       }
    },
    model:{
      id:'id',
      properties:{
         count({
            count
         }){

            return Number(count) ;
         },
         id:{
            mapping:'latestmsg.room_id',
            private:true
         },
         head({
            latestmsg:data
         }){

            return isPrivateChat(data) ? data.group.head : data.group.room_head;

         },
         title({
            latestmsg:data
         }){

            return isPrivateChat(data) ? data.group.nickname : data.group.room_name;
         },
         roomType({
            latestmsg:data
         }){

            return data.room_type ;
         },
         content({
            latestmsg:data
         }){

            let {
               content,
               msg_content,
               msg_type,
               user
            } = data;

            content = content || msg_content ;

            if(isPrivateChat(data)){

               return content ;
            
            }else if(content && msg_type !== 1){

               return `${user.nickname}: ${content}` ;
            
            }else if(msg_type === 1){

               return `${user.nickname}[图片]` ;
            }
         },
         lastTime({
            latesttime
         }){

            return new Date(Number(latesttime)) ;
         }
      }
   }
 }) ; 

 store.load( [
   {
     "topic": "chat2:332",
     "count": "0",
     "latestmsg": {
       "user_id": "411",
       "user": {
         "user_id": "411",
         "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL3tiayA4bJuTcJR3KeDGKJ2uYwfwFF6pGsKqvUdMA68ias9E11QRzz5VEYicMqTZ8kKOebiaVRcciaSibw/132",
         "province": "上海市",
         "company_id": "1",
         "city": "杨浦区",
         "name": "陈志文",
         "nickname": "陈志文",
         "mobile": "18516290722",
         "register_time": "2019-03-14 14:23:37",
         "email": "chenzhiwen@xinyusoft.com"
       },
       "group": {
         "user_id": "332",
         "entry_data": "測試測i",
         "company_id": "1",
         "city": "杨浦区",
         "id_card": "2220123195510141222",
         "mobile": "15121108541",
         "contract_expiration_date": "20190617",
         "salary": "11",
         "personal_desc": "111",
         "register_time": "2019-02-22 15:48:37",
         "head": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erZHPY2djd9hP1xaoBsibFntYws3ZvJrwA3M5PSH5y8X2jMbOicQhxy1CzJUEfHXUPLFFuWMsaKzdSA/132",
         "province": "上海市",
         "marriage": "0",
         "family_address": "上海",
         "household_register": "黑龍江",
         "nickname": "高。。。",
         "name": "高。。。",
         "praise_count": "3",
         "is_online": "false",
         "attendance_card_number": "1122",
         "email": "15121108541@163.com"
       },
       "room_id": "2474",
       "room_type": "S",
       "content": "adfasdfasdfasdf",
       "msg_type": "0"
     },
     "latesttime": "1569376628694"
   }
 ]) ;