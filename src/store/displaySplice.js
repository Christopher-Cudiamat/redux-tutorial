import { createSlice } from '@reduxjs/toolkit';


// THE REDUCER
export const displaySlice = createSlice({
  
  name: 'display',

  initialState: {
    displayValue: true,
  },

  reducers: {
    toggleDisplay: state => {
      state.displayValue = !state.displayValue;
    },
  },
});

// THE ACTIONS
export const { toggleDisplay } = displaySlice.actions;


//FUNCTION TO GET THE REDUX STATE
export const selectDisplay = state =>  {return state.display.displayValue};
console.log("WOAH", selectDisplay);
export default displaySlice.reducer;
