function calculateString(str) {
  const mathOps = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '%': function (x, y) { return x % y }
  };
  const digits = str.split(/[^0-9.]+/).map(val => Number(val));
  const operators = str.split(/\d+/)
    .filter(val => /[^0-9.]/.test(val))
    .map(val => val.match(/.$/));
  let result = digits[0];
  for (let i = 0; i < operators.length; i++) {

    result = mathOps[operators[i]](result, digits[i + 1]);

  }
  return result;
}

export default calculateString;