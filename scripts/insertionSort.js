let arr1 = [4, 3, 2, 1]

export const insertionSort = (arr) => {

  for (var i = 1; i < arr.length; i++) {

    let holder = arr[i]

    for (var j = i - 1; j >= 0; j--) {

      if (holder < arr[j]) {

        [arr[j], arr[j + 1]] = [arr[ j + 1], arr[j]]
      }
    }
  }
  return arr
}

insertionSort(arr1)
