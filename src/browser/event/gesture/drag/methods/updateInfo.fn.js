
/**
 * 
 * 刷新拖放信息
 * 
 * @import get from object.data.get
 * 
 * @param {HTMLElement} el 作用元素
 * 
 * @param {string} axis 轴名称
 * 
 * @param {boolean} updatePrevious 是否更新上一次信息
 * 
 */

 
let info = get(el , 'drag:info'),
    time = Date.now(),
    value = get(el , 'drag:lastPoint')[axis],
    previousValue = get(el , 'drag:previousPoint')[axis],
    startPoint = get(el , 'drag:startPoint'),
    startValue = startPoint[axis],
    delta = value - startValue,
    direction = info.direction,
    capAxis = axis.toUpperCase(),
    previousFlick = info.previous[axis],
    previousDelta;

    previousDelta = info.delta[axis];
    info.delta[axis] = delta;
    info.absDelta[axis] = Math.abs(delta);

    if (updatePrevious && value !== previousFlick && value !== info[axis] && time - info.previousTime[axis] >= 50) {

        info.previous[axis] = info[axis];
        
        info.previousTime[axis] = info.time;
    }

    info[axis] = value;

    if (value > previousValue) {

        direction[axis] = 1;
    }
    else if (value < previousValue) {

        direction[axis] = -1;
    }

    info['start' + capAxis] = startPoint[axis];
    info['previous' + capAxis] = info.previous[axis];
    info['page' + capAxis] = info[axis];
    info['delta' + capAxis] = info.delta[axis];
    info['absDelta' + capAxis] = info.absDelta[axis];
    info['previousDelta' + capAxis] = previousDelta;
    info.startTime = get(el , 'drag:startTime');