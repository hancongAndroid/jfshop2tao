/**
 * 文档说明:
 * 正则表达式大全
 */

/**
 * ic卡号只能输入10位数字
 */
export const icCardNo = /^\d{10}$/
/**
 * 匹配全局空格
 */
export const spaces = /^\S+$/g
/**
 * 匹配大写字母
 */
export const upperCaseLetter = /^[A-Z]$/
/**
 * 匹配小写字母
 */
export const lowerCaseLetter = /^[a-z]$/
/**
 * 匹配一个数字
 */
export const number = /^\d$/
/**
 * 匹配至少一个数字（正整数）
 */
export const numbers = /^\d+$/
/**
 * 用户名：3-16位，字母、数字和下划线组合
 */
export const username = /^\w{3,16}$/
/**
 * 昵称：字母、数字和汉字组合
 */
export const nickname = /^(\d|[A-Za-z\s]|[\u4E00-\u9FA5])+$/
/**
 * 匹配至少一个中文
 */
export const chinese = /^[\u4E00-\u9FA5]+$/
/**
 * 密码：8-20位，字母和数字组合
 */
export const password = /^(?!\d+$)(?![a-zA-Z]+$)[\dA-Za-z]{8,20}$/
/**
 * 密码：8-20位，字母、数字和特殊字符组合
 */
export const passwordAll = /^(?!\d+$)(?![a-zA-Z]+$)[\dA-Za-z][~!@#$%^&*()_+-=,./<>?]{8,20}$/
/**
 * 邮件地址
 */
export const email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
/**
 * 手机号码(中国大陆)
 * Chinese Mainland
 */
export const phoneCM = /^1[3-9]\d{9}$/
/**
 * 手机号码(港澳台)
 * Hong Kong, Macao and Taiwan
 */
export const phoneHMT = /^1[3-9]\d{9}$|^([6|9])\d{7}$|^09\d{8}$|^6([8|6])\d{5}$/
/**
 * 固定电话(中国大陆)
 */
export const telephone = /^\d{3,4}-\d{7,8}$/
/**
 * 特殊字符(密码可用)
 */
export const specialSymbol = /^[~!@#$%^&*()_+-=,./<>?]$/
/**
 * 特殊字符全(密码不可用)
 */
export const specialSymbolAll = /^([`~!@#$%^&*\\+=<>?"{}|.;'·！￥…—？“”、；‘’。])/g
/**
 * 1-4位图形验证码
 */
export const captchaImage4 = /^[\dA-Za-z-]{1,4}$/
/**
 * 4位图形验证码
 */
export const captchaWord4 = /^[A-Za-z\s]{4}$/
/**
 * 4位数字验证码
 */
export const captchaNumber4 = /^\d{4}$/
/**
 * 6位数字验证码
 */
export const captchaNumber6 = /^\d{6}$/
/**
 * 4-6位数字验证码
 */
export const captchaNumber4To6 = /^\d{4,6}$/
/**
 * 主机域名(不含协议)
 */
export const hostname = /^[a-zA-Z\d][-a-zA-Z\d]{0,62}(.[a-zA-Z\d][-a-zA-Z\d]{0,62})+.?$/
/**
 * 颜色格式-全部格式
 */
export const color = /^#[\da-fA-F]{6}|[rR][gG][Bb][Aa]*[(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){2}[\s]*(2[0-4]\d|25[0-5]|[01]?\d\d?)[\s]*[)]{1}$/
/**
 * 颜色格式-16进制
 */
export const colorHex = /^#[\da-fA-F]{6}$/
/**
 * 颜色格式-RGB格式
 */
export const colorRgb = /^[rR][gG][Bb][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){2}[\s]*(2[0-4]\d|25[0-5]|[01]?\d\d?)[\s]*[)]{1}$/

/**
 * 颜色格式-RGBA格式
 * TODO等待更新
 */
export const colorRgba = /^[rR][gG][Bb][Aa][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){2}[\s]*(2[0-4]\d|25[0-5]|[01]?\d\d?)[\s]*[)]{1}$/

/**
 * 身份证号码
 * TODO等待更新
 */
export const legalId = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

/**
 * 导出正则-默认所有
 */
export default {
  icCardNo,
  spaces,
  upperCaseLetter,
  lowerCaseLetter,
  number,
  numbers,
  chinese,
  username,
  nickname,
  password,
  passwordAll,
  email,
  phoneCM,
  phoneHMT,
  telephone,
  specialSymbol,
  specialSymbolAll,
  captchaImage4,
  captchaWord4,
  captchaNumber4,
  captchaNumber6,
  hostname,
  colorHex,
  colorRgb,
  colorRgba,
  legalId
}
