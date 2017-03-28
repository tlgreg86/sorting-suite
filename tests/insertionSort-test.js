import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';

describe('Insertion Sort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should take an array as a paramater', () => {
    assert.isFunction(insertionSort, [])
  })

  it('should sort an array of numbers', () => {
    let arrayOfNums = [5, 4, 3, 2, 1]

    assert.deepEqual(insertionSort(arrayOfNums), [1, 2, 3, 4, 5])
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = ['e', 'd', 'c', 'b', 'a']

    assert.deepEqual(insertionSort(arrayOfLetters), ['a', 'b', 'c', 'd', 'e'])
  })

})
