function expect(val){ 
    return{ 
        toBe(a){ 
        if(val === a){ 
            return true;
        }
        else{throw Error("Not Equal")};
    },
    notToBe(b){ 
        if (val !== b){ 
            return true;
        }
        else{throw Error("Equal")}; 
    }
    }
}