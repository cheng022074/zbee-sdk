
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
 */

let info = get(el , 'drag:info'),
    value = get(el , 'drag:lastPoint')[axis],
    startPoint = get(el , 'drag:startPoint'),
    startValue = startPoint[axis],
    delta = value - startValue,
    capAxis = axis.toUpperCase(),
    startTime = get(el , 'drag:startTime');

    info.delta[axis] = delta;
    info.absDelta[axis] = Math.abs(delta);

    info.previousTime[axis] = startTime;
    info.previous[axis] = startValue;
    info[axis] = value;
    info.direction[axis] = 0;

    info['start' + capAxis] = startPoint[axis];
    info['previous' + capAxis] = info.previous[axis];
    info['page' + capAxis] = info[axis];
    info['delta' + capAxis] = info.delta[axis];
    info['absDelta' + capAxis] = info.absDelta[axis];
    info['previousDelta' + capAxis] = 0;
    info.startTime = startTime;