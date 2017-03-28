let arr1 = [4,3,5,7,6,3,2,5,8,9,8,67,46,3,24,2,46,5,68,5,35,2]
let arr2 = ['s', 'b', 'y', 't', 'e', 'c', 'g', 'r', 'v', 'u']

let bubbleSort = (arr) => {
	for(let i = 0; i <= arr.length; i++) {
		if(arr[i] > arr[i+1]) {
			arr.splice(i,0,arr.splice(i+1,1)[0]);
			bubbleSort(arr)
		}
	}
	return arr
};

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));





export default bubbleSort;
