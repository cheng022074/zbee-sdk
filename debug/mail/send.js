/**
 * 
 * @import send from mail.send
 * 
 * @async
 * 
 */

await send('report@fontre.com' , '1234Qwer' , [
    'zhiwenchen@fontre.com'
] , {
    title:'Hello',
    text:'陈治文'
}) ;   