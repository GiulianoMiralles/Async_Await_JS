const { taskOne, taskTwo } = require('./task');


async function main() {
    try {
        console.time('midiendo el tiempo de ejecucion');
        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        console.timeEnd('midiendo el tiempo de ejecucion');
    
        console.log('Task One returned', valueOne);
        console.log('Task One returned', valueTwo);
    } catch (error) {
        console.log(error);
    }
}

main();