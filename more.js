/*
找出元素 item 在给定数组 arr 中的位置
输出描述:
  如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
输入
  [ 1, 2, 3, 4 ], 3
输出
  2
*/
function indexOf(arr, item) {
  return arr.indexOf(item)
}

/**
 题目描述
 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 示例1
 输入
 复制
 [1, 2, 3, 4, 2], 2
 输出
 复制
 [1, 3, 4]
*/
function remove(arr, item) {
  return arr.filter((v => v !== item))
}

/**
 题目描述
 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 示例1
 输入
 复制
 [1, 2, 3, 4]
 输出
 复制
 [1, 4, 9, 16]
 */
function square(arr) {
  return arr.map(m => m*m);
}


/**

 题目描述
 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
 5、fn 的参数依次为函数 a, b, c 的调用参数
 示例1
 输入
 复制
 var fn = function (a, b, c, d) {return a + b + c * d}; curryIt(fn)(1)(2)(3)(5);
 输出
 复制
 18
 */

function curryIt(fn) {
  let length = fn.length,
    args = [];
  const result = function (arg) {
    args.push(arg);
    length--;
    if (length <= 0) {
      return fn.apply(this, args);
    } else {
      return result;
    }
  };

  return result;
}