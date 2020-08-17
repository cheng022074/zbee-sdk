/**
 * 
 * 字面量
 * 
 * @param {object} options 配置
 * 
 * @param {string} options.operation 行为
 * 
 * @param {string} options.name 函数名称
 * 
 * @param {function} complie 编译子项
 * 
 * @param {object} context 上下文引用变量名称集合
 * 
 * @return {string} 代码
 * 
 */

 if(operation === 'call'){

    return `${context.functions}.${name}(${complie(',')})` ;
 }