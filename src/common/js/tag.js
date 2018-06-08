export function SetTag(tages) {
   var a = str.split(',');
  const o = {
    '住宅': { text: '住宅',type: ''},
    '商业': { text: '商业',type: 'success'},
    '办公': { text: '办公',type: 'info'},
    '工业': { text: '工业',type: 'warning'},
    '其他': { text: '其他',type: 'danger'}
      }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(a)) {
      const str = o[k] 
      fmt +=str
    }
  }
  return '['+fmt+']'
}

