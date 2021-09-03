/**
 * 思路：
 *    边界判断：传入数组长是否为空值，如果是直接返回空数组
 *    主流程：遍历传入的数组，拿到数组的每一项，判断是否为空，不是就存入新数组，最后返回。我这里和 lodash 官方有所不同，
 *           官方创建了一个 resIndex 的标志位，初始值为0，给 result 数组赋值的语句为 result[resIndex++] = value，
 *           可能性能上更高
 * @param {Array} array
 * @returns
 */
function compact(array) {
  const result = [];
  if (array == null) {
    return result;
  }
  for (const value of array) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}
console.log(compact([0, 1, false, 2, '', 3]));
