// const map = document.getElementById('map');
// document.addEventListener('scroll', () => {
//   const x = map.scrollTop;
//   console.log(`The height of Window is : ${window.innerHeight}`);

//   const details = map.getBoundingClientRect();
//   console.log(details.top - window.innerHeight);
//   if (details.top > 0 && details.top - window.innerHeight < -140) {
//     console.log('start...');
//     map.style.animation = `1s linear zoomIn`;
//     setTimeout(() => {
//       map.style.opacity = 1;
//     }, 950);
//   }

//   // console.log(document.body.offsetHeight);
// });
// var element = document.getElementById('watchme');
// element.addEventListener('animationstart', listener, false);
// element.addEventListener('animationend', listener, false);
// element.addEventListener('animationiteration', listener, false);

// element.className = 'slidein';
// function listener(event) {
//   var l = document.createElement('li');
//   switch (event.type) {
//     case 'animationstart':
//       l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
//       break;
//     case 'animationend':
//       l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
//       break;
//     case 'animationiteration':
//       l.textContent = `New loop started at time ${event.elapsedTime}`;
//       break;
//   }
//   document.getElementById('output').appendChild(l);
// }
const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  // const piece = isKnightHere ? <Knight /> : null;
  return console.log('hello');
};
const start = performance.now();
const squares = [...new Array(64)].map((item, i) => renderSquare(i, [0, 0]));
// const squares = [];
// for (let i = 0; i < 64; i++) {
//   squares.push(renderSquare(i, [0, 0]));
// }
// console.log(squares)
const end = performance.now();
console.log(end - start);
