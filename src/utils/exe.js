const fetch = require("node-fetch");

// // const fetchUser = () => {
// //   let time = 1000;
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve({
// //         name: 'Alfredo Martinez',
// //         age: 29,
// //       });
// //     }, time);
// //   });
// // };

// // module.exports = {
// //   fetchUser,
// // };


// // const urlQuery = url => () => fetch(url);
 
// // const maxRetry = 3;
// // const useIncrement = true;
// // const delay = 1000;
 
// /**
// * perform query successfully once or try up to a maximum of maxRetry times
// * if unsuccessful, delay the next attempt for an amount of time. If attempts
// * continue to fail then increase the delay between attempts if useIncrements
// * is set to true. 
// */

// // const queryRetry = async () => {

// // };

// // queryRetry(urlQuery('https://randomuser.me/api/?results=1'), maxRetry, delay, useIncrement)
// // .then(handleSuccess)
// // .catch(handleErrorOrMaxRetryExceeded);

const urlQuery = url => () => fetch(url);
let result = urlQuery('https://randomuser.me/api/?results=1');
console.log(result);