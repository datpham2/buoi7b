import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { countDown, countUp } from '../redux2/countSlice'


export default function Exam3() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count.value)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(countDown())}>Count down</button>
      <button onClick={() => dispatch(countUp())}>Count up</button>
    </div>
  )
}
