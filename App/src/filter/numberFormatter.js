


/**
 * 格式化数值
 * @param  {Number} number 待格式化的数值
 * @param  {Number} decimal 需要保留的小数位数
 * @return {String}
 */
export default (number, decimal) => {
  let m = number
  let dec = decimal || 0
  if (isNaN(m)) m = 0
  var x = Math.pow(10, dec)
  m = Math.round(m * x) / x
  var s = m.toString()

  let l = s.split('.')[0].split('').reverse().join('')
  let r = s.split('.')[1] || ''
  let r1 = r.length < dec ? (r + '000000'.substr(0, dec - r.length)) : r
  let r2 = dec > 0 ? '.' + r1 : ''
  let t = l.replace(/\d{3}(?=\d)/g, '$&,').split('').reverse().join('')

  return t + r2
}
