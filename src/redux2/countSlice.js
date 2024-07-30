import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

const countSlide = createSlice({
    name: 'count', 
    initialState,
    reducers: {
        countUp(state) {
            state.value += 1
        },
        countDown(state) {
            state.value -= 1
        }
    }
})

console.log(typeof initialState)
console.log(initialState)
console.log(createSlice)
console.log(typeof countSlide)
console.log(countSlide)
console.log(typeof countSlide.reducer)

export const { countUp, countDown } = countSlide.actions
export default countSlide.reducer