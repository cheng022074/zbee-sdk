
/**
 * 
 * 测试 JSON 读取器
 * 
 * @import createReader from data.reader.json
 * 
 * 
 */

 let reader = createReader({
     multi:false,
     fields:[
         'name',
         'sex',{
             name:'age',
             convert({
                 birthDate
             }){

                return (new Date()).getFullYear() - new Date(birthDate).getFullYear() + 1 ;
             }
         },
         {
             name:'job',
             defaultValue:'程序员'
         }
     ]
 }) ;

 console.log(reader({
     name:'陈治文',
     sex:'男',
     birthDate:'1981-10-28'
 })) ;
