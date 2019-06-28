// Object.defineProperty(Base,'add',{
//   value:() => {}
// })

// function log(target,name,descriptor){
//   const method = descriptor.value
//   descriptor.value = function(...args){
//     console.log('log type: add')
//     return method(...args);
//   }
// }

function log(logType){
  return function log(target,name,descriptor){
    const method = descriptor.value
    descriptor.value = function(...args){
      console.log('log type: '+logType)
      return method(...args);
    }
  }
}
// 修饰符是一个函数
class Base{
  @log('add')
  add(a,b){
    // console.log('log type : add')
    return a+b
  }
  @log('divide')
  divide(a,b){
    return a/b
  }
}

const base = new Base();
console.log('add',base.add(1,2))
console.log('divide',base.divide(10,2))

export default Base
//  加日志
