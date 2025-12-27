function createHelloWorld(){ 
    const c = "Hello World";
    return function(){ 
        return c;
    }
}
