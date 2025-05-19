import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counterSlice'; 

export const store = configureStore({
  reducer: {
    // Định nghĩa cấu trúc state gốc: { counter: { value: 0 }, ... }
    // Key 'counter' ở đây sẽ là tên property chứa state của counterReducer trong state gốc
    counter: counterReducer,
  },
});