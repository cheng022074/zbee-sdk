/**
 * 
 * 发送邮件
 * 
 * @param {string} fromMailAddress 发送者邮箱地址
 * 
 * @param {string} fromMailPassword 发送者邮箱密码
 * 
 * @param {string[]} toMailAddress 接收者邮箱地址
 * 
 * @param {object} [config = {}] 邮件配置
 * 
 * @param {string} config.title 邮件标题
 * 
 * @param {string} config.text 邮件内容
 * 
 * @param {array} [config.attachments = []] 附件内容
 * 
 * @param {string} [config.name = 'default'] 邮件发送配置
 * 
 * @config mailConfig from mail
 * 
 */

const {
    createTransport
} = require('nodemailer');

if(mailConfig.hasOwnProperty(name)){

    return new Promise((resolve , reject) =>{
        
            createTransport({
                ...mailConfig[name],
                auth: {
                    user:fromMailAddress,
                    pass:fromMailPassword
                }
            }).sendMail({
                from:fromMailAddress,
                to:toMailAddress.join(','),
                subject:title,
                text,
            }, err => {

                if(error){

                    reject(error) ;
                    
                }else{

                    resolve() ;
                }
            
            });

    }) ;

}