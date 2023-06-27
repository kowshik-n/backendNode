// exporting multiple function

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   sub,
// };

// Another way of exporting multiple func name is

exports.add = (a, b) => {
  return a + b;
};

exports.sub = (a, b) => {
  return a - b;
};
