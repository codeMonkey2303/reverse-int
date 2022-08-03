module.exports = function reverse (n) {
  let num = n < 0 ? n * -1 : n;
  return [...String(num)].reverse().join('');
}