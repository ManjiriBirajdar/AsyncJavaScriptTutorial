// async js -- non-blockching code

//start something now and finish it later

/**
 *  stmt 1
 *  stmt 2 ----- takes time --- DB
 *  stmt 3                      |
 *  stmt 4                      |
 *  callback()-------------------   
 */

//*********************************** Async JS : setTimeout() ********************************************

console.log(1);
console.log(2);

// async call: e.g. generate data after every 2 sec / database call
setTimeout(() => {
    console.log("callback function called!");
}, 2000);

console.log(3);
console.log(4);
