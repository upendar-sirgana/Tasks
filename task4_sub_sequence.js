function issubsequence(s1, s2) {
  let n = s1.length,
    m = s2.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s1[i] == s2[j]) i++;
    j++;
  }

  return i == n;
}

console.log(`${issubsequence("abc", "ahbgdc") ? true : false}`);
console.log(`${issubsequence("axc", "ahbgdc") ? true : false}`);
