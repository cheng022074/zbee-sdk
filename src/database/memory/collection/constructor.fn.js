
/**
 * 
 * 使用表名与数据目录路径构建存储模型
 * 
 * @import parse from database.memory.collection.connectionString.parse
 * 
 * @import read from database.memory.collection.sync.read
 * 
 * @param {string} connectionString 标准连接字符串
 * 
 */

let me = this,
{
    name,
    ns,
    type
} = parse(connectionString);

me.name = name ;

me.ns = ns ;

me.type = type ;

me.data = read(name , ns , type) || [];
