import fetch from 'node-fetch';

//*********************************** Fetch API ********************************************

fetch('https://tools.learningcontainer.com/sample-json.json').then((response) => {
    //console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log('data = ', data);
}).catch(err => {
    console.log('rejected', err);
});