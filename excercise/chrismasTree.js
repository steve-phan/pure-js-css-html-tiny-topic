function christmasTree(height) {
  var tree = [];
  for (var i = 1; i <= height; i++) {
    tree.push(
      repeat(' ', height - i) +
        repeat('*', (i - 1) * 2 + 1) +
        repeat(' ', height - i)
    );
  }
  console.log(tree);
  return tree.join('\n');
}
christmasTree(5);

function repeat(char, n) {
  return new Array(n).fill(char).join('');
}
