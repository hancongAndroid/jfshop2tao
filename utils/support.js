/**
 * 在一个区间内获取一个随机整数
 * @param min
 * @param max
 * @returns {number}
 */
export function randomIn(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
