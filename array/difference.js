/**
 * 思路：
 *    边界判断：
 *    主流程：新建一个空对象一个空数组用于接值，接着遍历传入的第一个数组，也就是原数组，把每一个值都置为 obj 的 key 值，
 *            value 值则都为0，然后接收后面传入的所有数组并且调用 flat() 方法进行降维（这里只考虑降一维），然后遍历接值
 *            后的数组，与 obj 的 key 值进行比较，如果相同，就删除 obj 中的这个 key 值，最后剩下的就是不同的，最后再遍
 *            历一遍 obj，拿到 key 存入一个数组中抛出
 * @param {Array} array
 * @param  {...Array} values
 * @returns
 */
function difference(array, ...values) {
  const obj = {};
  const result = [];
  array.map((item) => {
    obj[item] = 0;
  });
  const res = [...values.flat()];
  res.map((item) => {
    Object.keys(obj).forEach((ele) => {
      if (ele == item) {
        delete obj[ele];
      }
    });
  });
  Object.keys(obj).forEach((item) => {
    result.push(item);
  });
  return result;
}
console.log(difference(['a', 'b', 'c'], ['a', 'c']));
console.log(difference([1, 2, 3, 4, 5], [1, 2], [3, 4]));
