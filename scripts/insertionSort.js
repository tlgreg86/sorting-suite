let arr1 = [4,3,5,7,6,3,2,5,8,9,8,67,46,3,24,2,46,5,68,5,35,2]
let arr2 = ['s', 'b', 'y', 't', 'e', 'c', 'g', 'r', 'v', 'u']

let insertionSort = (arr) => {

  for (var i = 1; i < arr.length; i++) {

 	let holder = arr[i]

    for (var j = i-1; j >= 0; j--) {

      if (holder < arr[j]) {

        [arr[j], arr[j + 1]] = [arr[ j + 1], arr[j]]
      }
    }
  }
	return arr
}


insertionSort(arr1)


insertionSort(arr1)

export default insertionSort;
