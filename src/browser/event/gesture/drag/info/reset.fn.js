
/**
 * 
 * 刷新拖放信息
 * 
 * @param {string} axis 轴名称
 * 
 */

 let {
    info,
    startPoint,
    lastPoint,
    startTime
 } = this ;

let value = lastPoint[axis],
    startValue = startPoint[axis],
    delta = value - startValue,
    capAxis = axis.toUpperCase();

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