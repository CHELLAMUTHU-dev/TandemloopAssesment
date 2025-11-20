let input = [1,2,8,9,12,46,76,82,15,20,30]


function getMultipleCount(arr) {
    let result = {};
    
    for (let i= 1; i <= 9; i++){
        result[i] = 0
    }

    arr.forEach(number => {
        for(let i = 1 ; i <= 9; i++){
            if(number % i === 0){
                result[i]++
            }
        }
    });
    return result
}

console.log(getMultipleCount(input))


//simple method

function multipleCount(arr) {
    return Object.fromEntries(
        Array.from({ length: 9 }, (_, i) => i + 1).map(n => [
            n, 
            arr.filter(number => number % n === 0).length
        ])
    );
}

console.log(multipleCount(input));

