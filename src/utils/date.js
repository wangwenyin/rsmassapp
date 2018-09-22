export function formatDate(date, fmt) {
  // if (date.tostring.indexOf('T') !== -1) {
  //   date = datecutT(date)
  // }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
// function datecutT(date) {
//   var str = date.tostring()
//   str = str.replace(/T/, ' ').replace('.000Z', '')
//   return new Date(str)
// }

export function DateAdd(interval, number, date) {
  switch (interval.toLowerCase()) {
    case 'y': return new Date(date.setFullYear(date.getFullYear() + number))
    case 'm': return new Date(date.setMonth(date.getMonth() + number))
    case 'd': return new Date(date.setDate(date.getDate() + number))
    case 'w': return new Date(date.setDate(date.getDate() + 7 * number))
    case 'h': return new Date(date.setHours(date.getHours() + number))
    case 'n': return new Date(date.setMinutes(date.getMinutes() + number))
    case 's': return new Date(date.setSeconds(date.getSeconds() + number))
    case 'l': return new Date(date.setMilliseconds(date.getMilliseconds() + number))
  }
}

export function DateDiff(interval, date1, date2) {
  var long = date2.getTime() - date1.getTime() // 相差毫秒
  switch (interval.toLowerCase()) {
    case 'y': return parseInt(date2.getFullYear() - date1.getFullYear())
    case 'm': return parseInt((date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()))
    case 'd': return parseInt(long / 1000 / 60 / 60 / 24)
    case 'w': return parseInt(long / 1000 / 60 / 60 / 24 / 7)
    case 'h': return parseInt(long / 1000 / 60 / 60)
    case 'n': return parseInt(long / 1000 / 60)
    case 's': return parseInt(long / 1000)
    case 'l': return parseInt(long)
  }
}

