function createCounter(n) { 
    return function add() { 
        //n += 1;
        //return n-1;
        return n++;
    }
}