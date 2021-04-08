const textData = [
  'Hello I am a Web developer',
  'I come from somewhere on the earth',
  'I love to learn something useful everyday',
];
const text = document.getElementById('typewritter');
const x = 'Hello I am a Web developer';
let count = 0;

setInterval(() => {
  text.innerText = textData[count];

  count === 2 ? (count = 0) : (count += 1);
  const x = 2250 / textData[count].length;
  console.log(x);
  text.style.animationTimingFunction = `steps(${Math.floor(x)}, end)`;
}, 4500);
e;
