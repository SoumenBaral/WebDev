const sq=(a,b=0)=>a*a*b;

console.log(sq(3,5));

function sum(a,b){
    const result = a+b;
    return result
}
console.log(sum(2,3));

function oddEven(x){
    if(x%2 == 0){
        const z = x/2;
        return z;
    }
    else{
        const y = x*2;
        return y;
    }
}

console.log(oddEven(7));

function make_avg(myArray){
    let sum = 0;
    for (const num of myArray) {
        sum +=num;
    }
    const ArrayLength = myArray.length;
    
    const Average = sum/ArrayLength;
    return Average;


    
}

const Array = [12, 30, 2, 1, 29, 11];
make_avg(Array)
console.log("Average",make_avg(Array));


function count_Zero(Binary){
    let count = 0;
    for (const num of Binary) {
        if(num=='0')count++;
    
    }
    return count;
}


const Binary = '10011010010101010010100000';

console.log(count_Zero(Binary));
;


