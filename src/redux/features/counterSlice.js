import { createSlice } from '@reduxjs/toolkit';

// 1. Định nghĩa State Ban Đầu cho Slice này
const initialState = {
  value: 0, 
};

// 2. Tạo Slice bằng createSlice
export const counterSlice = createSlice({
  name: 'counter', 
  initialState,    
  reducers: {       
    increment: (state) => {
      // Redux Toolkit cho phép "viết code thay đổi state trực tiếp" 
      state.value += 1; //Thay đổi state trực tiếp
    },
    decrement: (state) => {
      state.value -= 1; // Thay đổi state trực tiếp
    },
    incrementByAmount: (state, action) => {
      // Reducers nhận state hiện tại và object action
      // action.payload chứa dữ liệu đi kèm với action
      state.value += action.payload; 
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
