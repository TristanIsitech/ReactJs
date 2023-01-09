import { useState } from 'react';
import './App.css';

function App() {
  const appel = () => {
    console.log(mergeObjects({a: "fsd", b: "dqd"}, {c:"er", d:"fes"}))
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
    return {...Object.values(firstOject), ...Object.values(secondObject)}
  }

  return (
    <div className="App">
      <button onClick={appel}> ++ </button>
    </div>
  )
}

export default App;
