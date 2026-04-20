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


//======================== 5 no answer ===============

function sortArrayDescending(arr){
    let desc = arr.sort((a, b) => b -a);
    console.log("this array Desceding Number :" , desc);
}
sortArrayDescending([3, 1, 8, 5, 2]);



//============================= 6 no Answer ============================

function lowercaseFirstLetter(name){
    let = name.charAt(0).toLowerCase() + name.slice(1);
    console.log("first lowe Case: ", name);
}

lowercaseFirstLetter("Sofik");


//====================== 7 no Answer ========================================= 

function findAverage(arr){
    let sum =0;
    for (i = 0; i<arr.length; i++){
        sum += arr[i]
    }
  let avg = sum / arr.length;
  console.log(avg);
}

findAverage([4, 5, 8])


//============================= 8 no Answer =============================
function isLeapYear(year){

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(true);
    }
    else{
         console.log(false);
    }
}

isLeapYear(2020)