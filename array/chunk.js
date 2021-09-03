/**
 * 思路：
 *    边界判断：传入数组长度，是否为空值等，然后是分割长度判断，都通过后再开始进入主流程
 *    主流程：先设置两个标志位，用于计数，然后根据数组长度以及分割长度相除创建新的定长数组，这里要向上取整，不然会导致数
 *           组长度不够，然后是新数组赋值，因为前面已经定下了长度，所以这里就从第0位开始一次填充，所以 result[resIndex
 *           ++]，接着是分割原数组，从0开始，index 每次增长分割长度的大小，保证不会重复分割，直到 index 值大于原数组长
 *           度为止，最后返回得到的 result 就是分割好的新数组
 * @param {Array} array
 * @param {Number} size
 * @returns
 */
function chunk(array, size = 1) {
  let length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 2));
