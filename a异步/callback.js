// 耗时操作
// let a = 3;
// for (i = 0; i < 1000000000; i++) {
//   a++;
// }
// console.log(a);
// console.log('我是不依赖上面的函数');

// 将不依赖上面的函数执行。 防止，超长时间的 代码带来的阻塞问题。

let a = 3;
setTimeout(() => {
  for (i = 0; i < 1000000000; i++) {
    a++;
  }
  console.log(a);
}, 0);
console.log('不依赖的函数');