let arr1 = [4,3,2,1]
let arr2 = ['d','c','b','a']

let bubbleSort = (arr) => {

	for(let i = 0; i <= arr.length -1; i++) {

		for(let j = 0; j <= arr.length -1; j++){

			if(arr[j] > arr[j+1]) {

			let temp = arr[j]
			arr[j] = arr[j+1]
			arr[j+1] = temp
			
			}
		}
	}
	return arr
};

console.log(bubbleSort(arr1));


export default bubbleSort;
