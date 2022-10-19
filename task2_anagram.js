function testAnagram(str1, str2) {
  const str1Arr = Array.from(str1).sort();
  const str2Arr = Array.from(str2).sort();

  if (str1Arr.length != str2Arr.length) return "isnotanAnagram";

  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) return "isnotanAnagram";
  }
  return "isanAnagram";
}
console.log(testAnagram("cat", "act"));
console.log(testAnagram("tap", "pet"));
