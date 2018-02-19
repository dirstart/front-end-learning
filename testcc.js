// Filter
// Vue.filter("dateFormat", (value, format = "yyyy-MM-dd hh:mm:ss") => {
//     const date = new Date(value);
//     const o = {
//         "M+": date.getMonth() + 1, // 月份
//         "d+": date.getDate(), // 日
//         "h+": date.getHours(), // 小时
//         "m+": date.getMinutes(), // 分
//         "s+": date.getSeconds(), // 秒
//         "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
//         "S": date.getMilliseconds() // 毫秒
//     };

//     let fmt = format;
//     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));

//     Object.keys(o).forEach((k) => {
//         if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
//     });

//     return fmt;
// });

const a = new Date();
console.log(a.getDate());

const format = (value, str) => {
  console.log("pre", value);
  const o = {
    month: value.getMonth(),
    day: value.getDate(),
    hour: value.getHours(),
    minutes: value.getMinutes()
  }
  console.log(/(y+)/.test(str));
  console.log(str = str.replace(RegExp.$1, (`${str.getFullYear}`)));
  return o;
}
console.log(format(a, "yy"));