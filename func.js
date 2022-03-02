function isEqualStr(str1, str2) {
  const stack = str1.split("");

  for (let i = 0; i < str2.length; i++) {
    const isUpperCaseStr2 = str2[i].toUpperCase() === str2[i];
    const isLowerCaseStr1 = stack.some(
      (item) => item.toLowerCase() === str1.toLowerCase()
    );
    if (!isUpperCaseStr2) {
      if (!stack.includes(str2[i])) {
        return false;
      }
    } else {
      if (isLowerCaseStr1) {
        return false;
      }
    }
  }
  return true;
}

console.log("RESULT1---->", isEqualStr("ebCde", "BCD")); //true
console.log("RESULT2---->", isEqualStr("eCB", "ECB")); //true
console.log("RESULT3---->", isEqualStr("BcdEF", "BCEF")); // true
console.log("RESULT4---->", isEqualStr("BCD", "BcD")); //false
