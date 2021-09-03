/**
 * 思路：
 *    边界判断：传入数据是否为数组
 *    主流程：如果不为数组或传入数组长度为0直接返回空数组，传值正确通过 slice 方法从第0位开始切割数组到传入的 n 为止，
 *            返回剩下的数组，这里其实还缺少对于传入 n 非数字类型或非正确数值的判断
 * @param {Array} array
 * @param {Number} n
 * @returns
 */
function drop(array, n = 1) {
  const length = array == null ? 0 : array.length;
  return length ? array.slice(0, n < 0 ? 0 : n) : [];
}

console.log(drop([1, 2, 3]));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
