//*********************************** Async (non-blocking) & Wait ********************************************
import fetch from 'node-fetch';

//Non-blocking code
const getData = async () => {

    //waits till the Promise (fetch) is resolved
    const response = await fetch('https://tools.learningcontainer.com/sample-json.json');  

    if(response.status !== 200){
        //promise is rejected
        throw new Error('cant fetch the data');
    }

    //waits till the Promise (json()) is resolved
    const data = await response.json();
   // console.log(data);

    return data;
};

//non blocking
console.log(1);
console.log(2);

// async always returns Promise
getData().then(retData => console.log('Resolved', retData)).catch(err => console.log('Rejected', err.message));

console.log(3);
console.log(4);