const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1
}

// before doing selection sort i have to implement linear search
// this method is a really straightforward one, so i don't have to write test
// it's O(N) 
