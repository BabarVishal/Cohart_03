//find the sum of 2 number.....
function sum(a, b){
    return a + b;
}
let ans = sum(2,2);
console.log(ans);

//Fins the sum of 1 to N Number.......
function allSum(n){
    let ans = 0;  // return n * (n + 1)
    for(let i = 0; i <= n; i++){
        ans = ans + i;        
    }
    return ans;
}

let allans = allSum(10);
console.log(allans);

// Synchronous code.........
// Synchronous code run line by line!
function sum(n){
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans += i;
    }
    return ans;
}

let ans1 = sum(10);
console.log(ans1);

let ans2 = sum(20);
console.log(ans2);

let ans3 = sum(203);
console.log(ans3);


function sum(a , b){
    return a + b;
}

function Operation(a,b,op){
    return op(a, b);
}

let ans4 = Operation(1,2,sum);
console.log(ans);
