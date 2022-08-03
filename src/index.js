module.exports = function check(str, bracketsConfig) {
  let testArray = [];
  let answer = true;

  for (let i = 0; i < str.length; i++) {
    let manipulation = false;
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
        for (let f = 0; f < testArray.length; f++) {
          if (testArray[f] === bracketsConfig[j][0]) {
            for (let k = 0; k < bracketsConfig.length; k++) {
              if (testArray[f + 1] === bracketsConfig[k][0]) {
                return false;
              }
            }
            testArray.splice(testArray.lastIndexOf(bracketsConfig[j][0]));
            manipulation = true;
            break;
          }
        }
        if (manipulation === false) {
          testArray.push(str[i]);
          manipulation = true;
          break;
        }
      }
      if (str[i] === bracketsConfig[j][0] && manipulation === false) {
        testArray.push(str[i]);
        break;
      }
      if (str[i] === bracketsConfig[j][1] && manipulation === false) {
        for (let b = 0; b < bracketsConfig.length; b++) {
          if (
            (testArray[i - 1] === bracketsConfig[b][0] &&
              testArray[i - 1] !== bracketsConfig[j][0]) ||
            testArray.length === 0
          ) {
            return false;
          }
        }
        testArray.splice(testArray.lastIndexOf(bracketsConfig[j][0]));
        break;
      }
    }
  }
  if (testArray.length > 0) {
    answer = false;
  }
  return answer;
};
