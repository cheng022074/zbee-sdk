
/**
 * 
 * 重写 React.createElement 方法
 * 
 * @param {mixed} React react 类库引用
 * 
 * @import init from react.properties.init
 * 
 */

const {
    createElement
} = React ;

React.createElement = function(tag , props , ...cn){

    return createElement(tag , init(props) , ...cn) ;
}
