const train = document.querySelector('#train');

console.dir(train);
const lily = document.getElementById('lily');
lily.style.color = 'red';
lily.outerHTML = '<p>Hello lily</p>';
console.log(lily.outerHTML);
// console.log(train);
train.onclick = function () {
  text.innerHTML = 'Hello world';
  // console.log(train.style);
  let start = Date.now();
  // train.style.left = '0px';
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    train.style.left = timePassed / 5 + 'px';
    // train.style.left = parseInt(train.style.left) + 10 + 'px';
    // console.log(parseInt(train.style.left));
    // console.log(train.style.left);

    if (timePassed > 2000) clearInterval(timer);
    // if (parseInt(train.style.left) > 2000) clearInterval(timer);
  }, 20);
};
const text = document.getElementById('text');
let startTime = performance.now();
let number = 0;

function pain(x) {
  // console.log(x);
  number++;

  text.innerHTML = number;
  if (number < 20) {
    return requestAnimationFrame(pain);
  }
  // console.log(performance.now() - startTime);
}
requestAnimationFrame(pain);
// console.log(performance.now() - startTime);
// console.log(text.clientHeight);

// Animate
function animate(options) {
  var start = performance.now();
  console.log(options);
  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

// Ball
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      let x =
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
      console.log(x);
      return x;
    }
  }
}

ball.onclick = function () {
  let to = field.clientHeight - ball.clientHeight;

  animate({
    duration: 2000,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball.style.top = to * progress + 'px';
    },
  });
};
// window.console.log('hello world');
// const javascriptInfo = document.getElementById('javascript-info');
// console.log(javascriptInfo.childElementCount);
// // console.log(javascriptInfo.childNodes[0].textContent.trim().length === 0);
// const childElement = javascriptInfo.children;
// console.log(childElement[1].parentNode);

for (let p1 of document.getElementsByTagName('p')) {
  let ttitleP = p1.innerText;
  // console.log(ttitleP);
}
console.log(document.querySelectorAll('p').length);
