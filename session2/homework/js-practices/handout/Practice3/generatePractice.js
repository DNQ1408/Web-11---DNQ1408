'use strict'
function search(input, target) {
  return input.indexOf(target);
};

function sort(input) {
  return input.sort((a,b) => a - b);
};

function randomInterger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function generate(testLengthArray) {
  var objects = new Array;
  console.log(testLengthArray.length);
  for (let i = 0; i < testLengthArray.length; i++) {
    var input = [];
    while (input.length < testLengthArray[i]) { input.push(randomInterger(-10000,10000))};
    sort(input);
    var target, output;
    if (testLengthArray.length >= 4) {
      switch (i) {
        case 0:
          target = 21489;
          output = -1;
          break;
        case 1:
          target = input[0];
          break;
        case 2:
          target = input[input.length - 1];
          break;
        case 3:
          target = input[randomInterger(1,input.length - 2)]
      };
      output = search(input,target)
      objects.push({ "input":input, "target":target, "output":output});
    };
  };
  return objects;
};

module.exports = generate
