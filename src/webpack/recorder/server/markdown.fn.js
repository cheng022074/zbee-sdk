
/**
 * 
 * 生成 Markdown 文档
 * 
 * @import read from file.read.json
 * 
 * @import write from file.write
 * 
 * @param {string} name 文档名称
 * 
 * @param {function} templateFn 模板函数
 * 
 */

 const {
            join
       } = require('path'),
       path = join(process.cwd() , `doc/${name}`),
       jsonPath = `${path}.json`,
       mdPath = `${path}.md`;

 read(jsonPath , data =>{

      if(data){
  
        let content = templateFn(data) ;
  
        if(content){
  
              write(mdPath , content) ;
        }
  
      }
}) ;