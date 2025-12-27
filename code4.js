function createCounter(init){ 
    let current = init;
    return{ 
        increment(){ 
            return ++current;
        },
        reset(){ 
            current = init
            return current;
        },
        decrement(){ 
            return --current;
        }
    }
}