
const arr = [1, 2, 3, 3];
let obj = {};

arr.forEach((index) => {
  obj[index] = (obj[index] || 0) + 1;
});

const keys = Object.keys(obj);
let max = obj[keys[0]];

for (let i = 1; i < keys.length; i++) {
  var value = obj[keys[i]];
  if (value > max) max = obj[keys[i]];
}

const majElmt = Object.keys(obj).find((key) => obj[key] === max);
console.log(majElmt);
