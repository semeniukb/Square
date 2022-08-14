// .push()

const array = [1, 2, 3, 4];

function push(arr, num) {
    arr[arr.length] = num;
    return arr.length;

}

console.log(push(array, 5));
console.log(array);

//.pop()

function pop (mass) {
    const lastItem = mass[mass.length - 1];
    mass.length -= 1;
    return lastItem;
}

// .shift()

function shift(a) {
    

}

// .reverse()

const b = [2,3,4,5,6,7,];
function reverse (arr) {
    const time = arr.concat();
    for (let i = 1; i < arr.length; i++){
        time[i - 1] = arr[arr.length - i];
    }

    console.log(time);
    return arr;
}

console.log(reverse(b));


function checkForSpam(message) {
    let result;
    // Change code below this line
    result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam') ;
    // Change code above this line
    return result;
  }

  
console.log(checkForSpam('Tour sale and tor gtr'));

function findLongestWord(string) {
    // Change code below this line
  const arr = string.split(' ');
  let longest = arr[1];
//   console.log(longest);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        return arr[i];
    }
    
  }
//   return longest;
  }

  console.log(findLongestWord("May ther force be without you"));


  function getCommonElements(array1, array2) {
    // Change code below this line
    
    const newArray = [];
    array1.forEach((item, i) => {
        if (array2.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
  
  
   // Change code above this line
  }

  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


  function getEvenNumbers(start, end) {
    // Change code below this line
   const newArr = [];
   for (let i = start; i <= end; i++) {
     if (i % 2 === 0) {
       newArr.push(i);
     }
   }
 
 
    return newArr;
   }

   console.log(getEvenNumbers(3, 11));