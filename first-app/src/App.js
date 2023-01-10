import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState } from 'react';
import './App.css';

function App() {
  const appel = () => {
    console.log(sortObject({b: 2, a: 1, c:3}))
  }

  const findLargestNumber = (arrayNumber) => {
    return Math.max(...arrayNumber)
  }

  const sortWords = (arrayString) => {
    return arrayString.sort()
  }

  const countOccurrences = (strings, aChar) => {
    let aCount = 0
    for(const aString of strings){
      if(aString.includes(aChar))
        aCount ++
    }
    return aCount
  }

  const flattenArray = (arrayOfArray) => {
    arrayOfArray.forEach(aArray => {
      arrayOfArray.flat()
    })
    return arrayOfArray
  }

  const removeDupes = (arrayNumber) => {
    const newArrayNumber = new Set(arrayNumber)
    return newArrayNumber
  }

  const swapVariables = (first, second) => {
    [first, second] = [second, first]
    return [first, second]
  }

  const parseObject = (anObject) => {
    return [...Object.values(anObject)]
  }

  const mergeObjects = (firstOject, secondObject) => {
    return {...firstOject, ...secondObject}
  }

  const sumArray = (anArray) => {
    let cont = 0
    anArray.forEach(aNumber => {
      cont += aNumber
    })
    return cont
  }

  const sortObject = (anObject) => {
    let anArray = []
    for(let element in anObject){
      anArray.push(element)
    }
    anArray.sort()
    for(let element in anObject){
      anArray.push(element)
    }
    return anArray
  }

  return (
    <div className="App">
      <button onClick={appel}> ++ </button>
    </div>
  )
}

export default App;
