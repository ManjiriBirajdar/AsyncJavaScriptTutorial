//*********************************** Promise ********************************************

function sendTransaction(tx) {

    return new Promise((resolve, reject) => {
        //  console.log('value of  tx = ', tx);

        //Resolve : process transaction and its successful
        if (tx == true)
            setTimeout(() => {
                let retValue = 'TX resolved!';
                resolve(retValue);
            }, 2000);



        //Reject : //process transaction and its failed
        else
            setTimeout(() => {
                let retValue = 'ERR!!!! -- TX rejected!';
                reject(retValue);
            }, 2000);
    });
}

//*********************************** Chaining Promises ********************************************

let tx = true;

sendTransaction(tx).then((retValue) => {
    console.log('Promise 1 --', retValue);    
    return sendTransaction(tx);
}).then((retValue) => {
    console.log('Promise 2 --', retValue);
   // tx = false;
    return sendTransaction(tx);
}).then((retValue) => {
    console.log('Promise 3 --', retValue);
}).catch(err => {
    console.log(err);
});