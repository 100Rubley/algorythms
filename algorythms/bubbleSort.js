// my implementation, try 1

// first of all we need to get last and one before last items of array and compare them
// then, if arr[i] < arr[i-1] we have to change their indexes
// do same thing untill the end of an array
// after first iteration our arr[0] is sorted and we don't check it
// repeat untill the end

const bubbleSortFirst = (arr) => {
  let pointer = arr.length - 1;
  while (pointer >= 0) {
    const current = arr[pointer + 1]
    if (arr[pointer] > current) {
      arr[pointer + 1] = arr[pointer];
      arr[pointer] = current;
    }
    pointer--;
  };

  return arr
}
// at this point I was lost and decided to log result 
// it turns out that this function correctly sorted one element, so i need to continue with others

const bubbleSortSecond = (arr, resultArr = []) => {
  if (arr.length === 0) return resultArr;
  if (arr.length === 1) return arr;

  let pointer = arr.length - 1;

  while (pointer >= 0) {
    const current = arr[pointer + 1];
    if (arr[pointer] > current) {
      arr[pointer + 1] = arr[pointer];
      arr[pointer] = current;
    }
    pointer--;
  };

  const sortedItem = arr.shift();
  resultArr.push(sortedItem);
  bubbleSortSecond(arr, resultArr);

  return resultArr;
}

// this time function doing well, so i need to test it
// in this case i have one cicle which uses N inerations and one inner cicle,
// which uses (N - 1) + (N - 2) + (N - 3) ...
// so in sum O(N^2/2) or O(N^2)

// console.log(bubbleSortSecond([3, 2, 1, 4, 5, 6]));
// console.log(bubbleSortSecond([0, -1, 4, 5, 2, -3]));
// console.log(bubbleSortSecond([0]));
// console.log(bubbleSortSecond([0, 0, 0]));
// console.log(bubbleSortSecond([2, -2]));
// console.log(bubbleSortSecond([-2, 2]));
// console.log(bubbleSortSecond([]));
// console.log(bubbleSortSecond([-1, -2, -3, -4, -5]));
// console.log(bubbleSortSecond([1, 2, 3, 4, 5]));
// console.log(bubbleSortSecond([1, 1, 1, 1, 1, 1]));

// test case [2, -2] with arr.length === 2 returned [1el] so i need to fix it

const bubbleSortThird = (arr, resultArr = []) => {
  if (arr.length === 0) return resultArr;

  let pointer = arr.length;

  while (pointer > 0) {
    const current = arr[pointer - 1];
    if (arr[pointer] < current) {
      arr[pointer - 1] = arr[pointer];
      arr[pointer] = current;
    }
    pointer--;
  };

  const sortedItem = arr.shift();
  resultArr.push(sortedItem);
  bubbleSortThird(arr, resultArr);

  return resultArr;
}

console.log(bubbleSortThird([3, 2, 1, 4, 5, 6]));
console.log(bubbleSortThird([0, -1, 4, 5, 2, -3]));
console.log(bubbleSortThird([0]));
console.log(bubbleSortThird([0, 0, 0]));
console.log(bubbleSortThird([2, -2]));
console.log(bubbleSortThird([-2, 2]));
console.log(bubbleSortThird([]));
console.log(bubbleSortThird([-1, -2, -3, -4, -5]));
console.log(bubbleSortThird([1, 2, 3, 4, 5]));
console.log(bubbleSortThird([1, 1, 1, 1, 1, 1]));
