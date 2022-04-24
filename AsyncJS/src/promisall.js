//Reference: https://programmingwithswift.com/run-async-await-in-parallel-with-javascript/


//*********************************** Promise.all() ********************************************

async function sleep(time = 1) {

    const sleepMsec = time * 1000;

    return new Promise(resolve => {

        setTimeout(() => {
            resolve(`slept for : ${sleepMsec}ms`);
        }, sleepMsec);
    });
}

// ############ Test Async #################
async function main(){

    //1
    console.time('main');

    //2
    const [firstCall, secondCall, thirdCall] = await Promise.all([
        sleep(1), sleep(2), sleep(3)
    ])

    console.log(`FirstCall: ${firstCall}`);
    console.log(`SecondCall: ${secondCall}`);
    console.log(`ThirdCall: ${thirdCall}`);

    //3
    console.timeEnd('main');
}

main()
/** Output :
 
    slept for : 1000ms
    slept for : 2000ms
    slept for : 3000ms
    main: 3.025s
*/

// ############ Test Serial execution #################

// async function main() {
// 	// 1. 
// 	console.time('main')

// 	// 2.
// 	console.log(await sleep(1))
// 	console.log(await sleep(2))
// 	console.log(await sleep(3))

// 	// 3.
// 	console.timeEnd('main')
// }

// main()
/** Output :
 
    slept for : 1000ms
    slept for : 2000ms
    slept for : 3000ms
    main: 6.016s
*/