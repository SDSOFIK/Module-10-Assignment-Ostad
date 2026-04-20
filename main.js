//========================= 1 no Answer =====================

function calculateDifference(num1, num2) {
    return num1 - num2;
}

let Defference = calculateDifference(10, 5);
console.log(" Difference Number is: " , Defference);


//========================= 2 no Answer =====================

function isOdd(num) {
if(num %2=== 1){
    return true
}
else{
    return false
}

}

let odd = isOdd(5);
console.log(odd);

//==================== 3 no Answer =====================

function findMin(arr){
    console.log("this array min Number :", Math.min(...arr))
}

let min = findMin([8,5,9,2,22]);


// ========================== 4 no aswer =================

function filterEvenNumbers(arr){
    console.log("array all Evend Number : ", arr.filter(e =>e%2==0))
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);