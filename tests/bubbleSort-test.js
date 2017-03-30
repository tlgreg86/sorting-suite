import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';
import { generateRandomNumber } from '../scripts/randomNumberGenerator.js'

describe('Bubble Sort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should take an array as a paramater', () => {
    assert.isFunction(bubbleSort, [])
  })

  it('should sort a small array of numbers', () => {
    let randomNums = generateRandomNumber(10)
    let arrayOfNums = randomNums

    assert.deepEqual(bubbleSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort mid sized array of numbers', () => {
    let randomNums = generateRandomNumber(1000)
    let arrayOfNums = randomNums

    assert.deepEqual(bubbleSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort a large array of numbers', () => {
    let randomNums = generateRandomNumber(16000)
    let arrayOfNums = randomNums

    assert.deepEqual(bubbleSort(arrayOfNums), arrayOfNums.sort())
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = ['e', 'd', 'c', 'b', 'a']

    assert.deepEqual(bubbleSort(arrayOfLetters), ['a', 'b', 'c', 'd', 'e'])
  })

})
