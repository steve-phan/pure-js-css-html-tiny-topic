const addProgressBar = () => {
  const element = document.createElement('div');
  element.id = 'progress-container';
  element.innerHTML = '<div id="progress-bar"></div>';

  document.body.appendChild(element);
};
const javascriptInfo = document.getElementById('lily');
const readingProgress = (target) => {
  const winTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetBottom = target.offsetTop + target.scrollHeight;
  //   console.log(pageYOffset);
  //   console.log(target);
  //   console.log(target.scrollTop);
  //   console.log(document.documentElement.clientHeight);
  const deviceHeight = document.documentElement.clientHeight;
  //   console.log(target.scrollHeight);

  //   console.log(target.offsetTop);
  //   console.log(targetBottom);
  const windowBottom = winTop + window.outerHeight;
  //   console.log(outerHeight);
  //   console.log('Window bottom is ' + windowBottom);
  const percent = (deviceHeight + target.scrollTop) / target.scrollHeight;
  //   console.log(percent);
  const progress1 = percent * 100;

  console.log(progress1);
  let scrollBottom =
    target.scrollHeight - target.scrollTop - target.clientHeight;
  //   console.log(
  //     ` scrollHeight : ${target.scrollHeight} scrollTop  : ${target.scrollTop} clientHeight is : ${target.clientHeight} `
  //   );
  //   console.log(scrollBottom);

  const progress =
    100 -
    ((targetBottom - windowBottom + window.outerHeight / 3) /
      (targetBottom - window.outerHeight + window.outerHeight / 3)) *
      100;

  document.querySelector('#progress-bar').style.width = progress1 + '%';

  progress > 100
    ? document.querySelector('#progress-container').classList.add('ready')
    : document.querySelector('#progress-container').classList.remove('ready');

  console.log(progress);
};
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('html');
  addProgressBar();
  readingProgress(content);
  window.addEventListener('scroll', () => {
    readingProgress(content);
  });
});
// const content = document.querySelector('#javascript-info');
// addProgressBar();
// readingProgress(content);
// window.addEventListener('scroll', () => {
//   readingProgress(content);
// });

// content.addEventListener('scroll', () => {
//   console.log(content.scrollTop);
// });

// console.log(document.documentElement.scrollTop);
// javascriptInfo.scrollTop = 600;
