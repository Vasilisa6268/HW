//#6
const Numbers = [2, 5, 5, 1, 12, 18, 7, 2, 44, 44];
const countItems = {};
for (const item of Numbers) {
  countItems[item] = countItems[item] ? countItems[item] + 1: 1;
}
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(result);
//['2', '5', '44']
