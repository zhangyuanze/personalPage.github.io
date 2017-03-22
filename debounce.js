// debounce函数用来包裹我们的事件
function debounce(fn, delay) {
  // 持久化一个timer
  let timer = null;
  // 闭包可以获取到timer
  return function() {
    // 通过函数获取到作用域和参数列表
    // 通过 'this' 和 'arguments'
    let context = this;
    let args = arguments;
    // 如果事件被触发，清除timer并重新开始计时
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

// 当用户滚动时函数会被调用
function foo() {
  console.log('You are scrolling!');
}

document.body.addEventListener('scroll', debounce(foo, 2000));
