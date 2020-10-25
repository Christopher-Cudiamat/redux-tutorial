import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import displayReducer from './displaySplice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    display: displayReducer,
  },
});
