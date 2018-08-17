
/**
 * 
 * 计算拖放速度
 * 
 * @param {string} axis 轴信息
 * 
 * @param {object} info 拖放信息
 * 
 */

let duration = info.time - info.previousTime[axis];

if (duration > 0) {

    info.flick.velocity[axis] = (info[axis] - info.previous[axis]) / duration;
}
