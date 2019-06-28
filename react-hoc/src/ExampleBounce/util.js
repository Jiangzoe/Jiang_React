import {
  set
} from "mobx";

/** 防抖
 * func wait
 */
export function debounce(func, wait) {
  var result, timeout;
  return function () {
    var context = this
    var args = arguments
    timeout = setTimeout(function () {
    result = func.apply(this, args)
    }, wait);
    return result
  }
}

// 可用于装饰的防抖
export function decDebounce() {

}