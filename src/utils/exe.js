const fetch = require('node-fetch');
const URL = 'https://httpbin.org/ip5454';

 
const maxRetry = 3;
const useIncrement = false;
const delay = 1000;

const urlQuery = url => () => fetch(url)

const delayFn = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms)
}); 
 
/**
* perform query successfully once or try up to a maximum of maxRetry times
* if unsuccessful, delay the next attempt for an amount of time. If attempts
* continue to fail then increase the delay between attempts if useIncrements
* is set to true. 
*/

const queryRetry = async (fn, maxRetry, delay, useIncrement ) => {
  
  let attemps = 0;

  while(attemps <= maxRetry ){
    attemps++;
    try{
      let results = await fn();
      let data = await results.json();
      return data;
    }catch(error){
      let time = useIncrement ?  delay*attemps : delay;
      if(attemps > maxRetry)
        throw error;
      console.log("Next attemp in " + time/1000 + "ms.");
      await delayFn(time)
      console.log("Trying again");
    }
  }

};

const handleSuccess = (data) => {
  console.log('Data: ', data);
};

const handleErrorOrMaxRetryExceeded = (error) => {
  console.log("Something wen wrong: ", error);
};

// queryRetry(urlQuery(URL), maxRetry, delay, useIncrement)
// .then(handleSuccess)
// .catch(handleErrorOrMaxRetryExceeded);

module.exports = {
  queryRetry,
  handleSuccess,
  handleErrorOrMaxRetryExceeded
};