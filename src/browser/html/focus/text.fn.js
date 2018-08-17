
/**
 * 
 * 文本类控件获取焦点
 * 
 * @param {HTMLElement} inputEl 文本类控件
 * 
 * @param {boolean} [isCursorEnd = true] 是否将光标置为输入框最后
 * 
 */

let len = inputEl.value.length ;

inputEl.setSelectionRange(len , len) ;

inputEl.focus() ;
