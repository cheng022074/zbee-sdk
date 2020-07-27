/**
 * 
 * 修复 socket.io 解析器无法连接的问题
 * 
 * @once
 * 
 */

const {
    Encoder,
    BINARY_EVENT,
    BINARY_ACK,
    ERROR
} = require('socket.io-parser') ;

function stringify(data){

    try{

    return JSON.stringify(data);
    
    }catch(e){
    
    }

    return false;
}

const {
    encode
} = Encoder.prototype ;

Encoder.prototype.encode = function(obj, callback){

    let {
        type
    } = obj ;

    switch(type){

        case BINARY_EVENT:
        case BINARY_ACK:

        encode.call(this , obj , callback) ;

        break ;

        default:

            callback([
            encodeAsString(obj)
            ]);
    }
};
  
function encodeAsString(obj) {

    let {
        type,
        nsp,
        id,
        data,
        attachments
        } = obj ;

    let str = `${type}`;

    switch(type){

        case BINARY_EVENT:
        case BINARY_ACK:

        str += attachments + '-';
    }

    if (nsp && '/' !== nsp) {

        str += `${nsp}`;

    }

    if(id || data){

        str += ',' ;
    }

    if (null != id) {
        
        str += id;

    }

    if (null != data) {

        let payload = stringify(data);
        
        if (payload !== false) {

        str += payload;
        
        }else{
        
        return `${ERROR}"encode error"`;
        }
    }

    return str;
}