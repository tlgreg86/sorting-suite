import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';
import { generateRandomNumber } from '../scripts/randomNumberGenerator.js'

describe('Insertion Sort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should take an array as a paramater', () => {
    assert.isFunction(insertionSort, [])
  })

  it('should sort a small array of numbers', () => {
    let randomNums = generateRandomNumber(10)
    let arrayOfNums = randomNums

    assert.deepEqual(insertionSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort a mid sized array of numbers', () => {
    let randomNums = generateRandomNumber(1000)
    let arrayOfNums = randomNums

    assert.deepEqual(insertionSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort a large array of numbers', () => {
    let randomNums = generateRandomNumber(20000)
    let arrayOfNums = randomNums

    assert.deepEqual(insertionSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = ['e', 'd', 'c', 'b', 'a']

    assert.deepEqual(insertionSort(arrayOfLetters), ['a', 'b', 'c', 'd', 'e'])
  })

})
