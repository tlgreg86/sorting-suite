import { expect } from 'chai';
import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

describe('Bubble Sort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should take an array as a paramater', () => {
    assert.isFunction(bubbleSort, [])
  })

  it('should sort an array of numbers', () => {
    let arrayOfNums = [5, 4, 3, 2, 1]

    assert.deepEqual(bubbleSort(arrayOfNums), [1, 2, 3, 4, 5])
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = ['e', 'd', 'c', 'b', 'a']

    assert.deepEqual(bubbleSort(arrayOfLetters), ['a', 'b', 'c', 'd', 'e'])
  })

})
