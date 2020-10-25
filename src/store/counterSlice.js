import { createSlice } from '@reduxjs/toolkit';


// THE REDUCER
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// THE ACTIONS
export const { increment, decrement, incrementByAmount } = counterSlice.actions;


//THE THUNK OR ANY OTHER ASYN API MANAGERS
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

//FUNCTION TO GET THE REDUX STATE
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
