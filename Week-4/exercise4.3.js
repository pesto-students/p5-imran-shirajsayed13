const Fib = (n) => (
    // returns an iterable object
    {
    [Symbol.iterator]: () => {
        let i = 1, prev = 0, curr = 0;
        // returns an iterator
        return {
            next: () => {
                if(i++ <= n) {
                    [prev, curr] = [curr, (prev + curr) || 1];
                    return {
                        value: prev,
                        done: false
                    }
                }
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
});

console.log([...Fib(8)]);