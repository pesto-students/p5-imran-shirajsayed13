const doTask1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Doing Task-1'));
        }, 1000);
    });
};

const doTask2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Doing Task-2'));
        }, 1000);
    });
};

const doTask3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Doing Task-3'));
        }, 1000);
    });
};

async function allAsync() {
    try {
        await doTask1();
        console.log('Task-1 done');
        
        await doTask2();
        console.log('Task-2 done');

        await doTask3();
        console.log('Task-3 done');

    } catch (err) {
        console.log(`Error-${err}`);
    } finally {
        console.log('finished all 3 async tasks');
    }
}

allAsync()

async function* genFunc() {
    yield await doTask1().then((x) => console.log('doTask1 done'));
    yield await doTask2().then((x) => console.log('doTask2 done'));
    yield await doTask3().then((x) => console.log('doTask3 done'));
    return { done: true };
}

let gen = genFunc();

gen.next();
gen.next();
gen.next()