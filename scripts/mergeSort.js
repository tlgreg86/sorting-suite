let arr1 = [6, 5, 4, 3, 2, 1]

function mergeSort(arr) {
  var length = arr.length;

  if (length < 2) {
    return arr;
  }
  let mid   = Math.floor(length / 2)
  let left  = arr.slice(0, mid)
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


mergeSort(arr1)


function merge(left, right) {
  let result    = []
  let lLen      = left.length
  let rLen      = right.length
  let leftArr   = 0
  let rightArr  = 0;

  while (leftArr < lLen && rightArr < rLen) {
    if (left[leftArr] < right[rightArr]) {
      result.push(left[leftArr++]);
    } else {
      result.push(right[rightArr++]);
    }
  }
  return result.concat(left.slice(leftArr)).concat(right.slice(rightArr));
}




export default mergeSort;
