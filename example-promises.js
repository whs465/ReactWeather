function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('wrong number format');
    }
  })
};

addPromise(3, 4).then(function (add) {
  console.log('promise success ', add);
}, function (err) {
  console.log('promise error ', err);
});

addPromise('3', 4).then(function (add) {
  console.log('promise success ', add);
}, function (err) {
  console.log('promise error ', err);
});
