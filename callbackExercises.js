// class Clock {
//   constructor() {
//     const newDate = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hours = newDate.getHours();
//     this.minutes = newDate.getMinutes();
//     this.seconds = newDate.getSeconds();
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals. 
//     setInterval(this._tick.bind(this), 1000);
//   }

//   printTime() {
//     // Format the time in HH:MM:SS
//     const time = `${this.hours}:${this.minutes}:${this.seconds}`;
//     // Use console.log to print it.
//     console.log(time);
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     this.seconds += 1;
//     // 2. Call printTime.
//     this.printTime();
//   }
// }

// // const clock = new Clock();


const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// function addNumbers(sum, numsLeft, completionCallback) {
//     function callback(input) {
//         sum += parseInt(input);
//         console.log(sum);
//         addNumbers(sum, numsLeft - 1, completionCallback);
//     }

//     if (numsLeft > 0){
//         reader.question("Gimme a number:", callback);
//     } else {
//         return completionCallback(sum);
//     }
// }
// function complete(sum) {
//     console.log(`Your sum is: ${sum}`);
//     reader.close();
// }

// addNumbers(0, 3, complete);
function askIfGreaterThan(el1, el2, callback) {

    reader.question(`is ${el1} greater than ${el2}?`, input => {
        if (input.toLowerCase() === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.

    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {

        askIfGreaterThan(arr[i], arr[i+1], input => {
            if (input){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        }); 
    }
}






function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        debugger 
        if (madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            return sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});











// function(arg1, arg2) {
//     // code goes here 
// }

// (arg1, arg2) => {
//     // code goes here 
// }

// (arg1, arg2) => return arg1 + arg2; 

// function bubbleFunction(arr) {
//     let sorted = false;
//     while (!sorted) {
//         sorted = true;
    
//         for(let i = 0; i < arr.length; i++) {
//             for(let j = i + 1; j < arr.length - 1; j++) {
//                 if (arr[i] > arr[j]) {
//                     [arr[i], arr[j]] = [arr[j], arr[i]];
//                     sorted = false;
//                 }
//             }
//         }
        
//     }
//     return arr;
// }