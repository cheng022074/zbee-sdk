const {
    Coder
} = require('../../../coder'),
{
    expression
} = require('../../../../script/generator');

module.exports = class extends Coder{

    applyCode(){

        let {
            el
        } = this ;

        return `notDeepStrictEqual(${expression(el.getAttribute('actual'))} , ${expression(el.getAttribute('expected'))});` ;
    }
}