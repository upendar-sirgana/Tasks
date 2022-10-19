function longestCommonPrefix(a) {
  let size = a.length;
  if (size == 0) return "";
  if (size == 1) return a[0];
  a.sort();
  let end = Math.min(a[0].length, a[size - 1].length);
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;
  let pre = a[0].substring(0, i);
  return pre;
}

console.log(longestCommonPrefix(["flowing", "flown", "flew"]));
console.log(longestCommonPrefix(["apple", "night", "cat"]));
