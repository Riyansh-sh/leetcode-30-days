function map(arr, fn){ 
    const array = [];
    for (let i = 0; i< arr.length; i++){ 
        array.push(fn(arr[i],i));
    }
    return array;
}
/* function fn(){ 
    return{ 
        plusone(n){ 
            return n+1;
        },
        plusI(n,i){ 
            return n+i;
        },
        constant(){ 
            return 42;
        }
    }
}*/ 