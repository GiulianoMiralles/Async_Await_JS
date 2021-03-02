const { taskOne, taskTwo } = require('./task');


async function main() {
    try {
        console.time('midiendo el tiempo de ejecucion');

        const results = await Promise.all([taskOne(), taskTwo()])

        console.timeEnd('midiendo el tiempo de ejecucion');
    
        console.log('Result 1 returned', results[0]);
        console.log('Result 2 returned', results[1]);
    } catch (error) {
        console.log(error);
    }
}

main();