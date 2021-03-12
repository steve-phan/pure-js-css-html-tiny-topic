const train = document.querySelector('#train');
// console.log(train);
train.onclick = function () {
  text.innerHTML = 'Hello world';
  console.log(train.style);
  let start = Date.now();
  train.style.left = '0px';
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    // train.style.left = timePassed / 5 + 'px';
    train.style.left = parseInt(train.style.left) + 10 + 'px';
    // console.log(parseInt(train.style.left));
    console.log(train.style.left);

    // if (timePassed > 2000) clearInterval(timer);
    if (parseInt(train.style.left) > 2000) clearInterval(timer);
  }, 20);
};
