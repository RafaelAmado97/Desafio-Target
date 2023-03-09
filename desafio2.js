function fibonacci(n){
    let a = 0;
    let b = 1;

    while (b <= n){
        if (b === n){
            return true;
        }
        let c = a + b;
        a = b;
        b = c;
    }

    return false;
}

console.log(fibonacci(5));