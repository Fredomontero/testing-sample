const fetchUser = () => {
  let time = 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Alfredo Martinez',
        age: 29,
      });
    }, time);
  });
};

module.exports = fetchUser;