import { assert } from 'chai';
import { mergeSort } from '../scripts/mergeSort';
import { generateRandomNumber } from '../scripts/randomNumberGenerator.js'

describe('Merge Sort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should take an array as a paramater', () => {
    assert.isFunction(mergeSort, [])
  })

  it('should sort a small array of numbers', () => {
    let randomNums = generateRandomNumber(10)
    let arrayOfNums = randomNums
    let sortedArrayOfNums = arrayOfNums.sort(function(a, b) {
      return a - b;
    });

    assert.deepEqual(mergeSort(arrayOfNums), sortedArrayOfNums)
  })

  it('should sort a mid sized array of numbers', () => {
    let randomNums = generateRandomNumber(1000)
    let arrayOfNums = randomNums
    let sortedArrayOfNums = arrayOfNums.sort(function(a, b) {
      return a - b;
    });

    assert.deepEqual(mergeSort(arrayOfNums), sortedArrayOfNums)
  })

  it('should sort a large array of numbers', () => {
    let randomNums = generateRandomNumber(420000)
    let arrayOfNums = randomNums
    let sortedArrayOfNums = arrayOfNums.sort(function(a, b) {
      return a - b;
    });

    assert.deepEqual(mergeSort(arrayOfNums), sortedArrayOfNums)
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = ['e', 'd', 'c', 'b', 'a']

    assert.deepEqual(mergeSort(arrayOfLetters), ['a', 'b', 'c', 'd', 'e'])
  })

})
