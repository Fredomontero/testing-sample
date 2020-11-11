const { expect } = require('@jest/globals');
const { queryRetry, handleSuccess, handleErrorOrMaxRetryExceeded } = require('./exe.js');
jest.setTimeout(100000);

queryRetry(urlQuery(URL), maxRetry, delay, useIncrement)
.then(handleSuccess)
.catch(handleErrorOrMaxRetryExceeded);
