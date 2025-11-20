function getSeriousNumber(a){
    let count = (a % 2 === 0) ? a-1 :a;

    return Array.from({length:count},(_, i) => 2 * (i+1) -1 ).join(", ")
}


// alternate method

function serious(a){
    let count = (a % 2 === 0) ? a-1 :a;
    let result = [];

    for(let i = 1; i <= count ; i++){
        result.push(2*i-1)
    }

    return result.join(", ")
}

console.log(getSeriousNumber(2))