
// 2️⃣ Check Divisible by Both 3 and 5

// Return true if number is divisible by both.

// Input: 15
// Output: true

let Input = 15

if(Input%3===0 && Input%5===0){
    console.log(true)
}
else{
    console.log(false)
}


// 4️⃣ Repeat String N Times

// Repeat a string N times without using repeat().

// Input: "Hi", 3
// Output: "HiHiHi"

let string = "Hi";
let num = 3;

let result = "";

for (let i = 0; i < num; i++) {
    result += string;
}

console.log(result);

// ----------------------------------------------

// 5️⃣ Count Words in a Sentence

// Count number of words in a string.

// Input: "I love MERN stack"
// Output: 4

let Sentence = 'I love MERN stack'
let words = 0



// ----------------------------------------

// 6️⃣ Check if Array is Empty

// Return true if array has no elements.

// Input: []
// Output: true

let arr = []

function checkEmpty (arr){
     if(arr.length===0){
        console.log(true)
     }else{
        console.log(false)
     }
}

checkEmpty(arr)


// 7️⃣ Find Index of Element (Without indexOf)

// Return index of given element manually.

// Input: [5, 8, 2, 9], find 2
// Output: 2


let inputArray = [5, 8, 2, 9]

let target = 9

function ReturnIndex(inputArray,target){

    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i]===target){
            return i;
            
        }
        
    }
    return;

}

console.log(ReturnIndex(inputArray,target))


// 🔟 Find Sum of Digits of a Number

// Add digits of a number.

// Input: 1234
// Output: 10




