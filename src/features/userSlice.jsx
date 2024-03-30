
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  phone: '',
  cofirmPassword:""
};

export const UserDetails = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData: (state, action) => {
      const { name, email, password, phone ,confirmPassword} = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.phone = phone;
      state.cofirmPassword=confirmPassword
    },
    updateData: (state, action) => {
        const { name, email, password, phone ,confirmPassword} = action.payload;
        state.name = name;
        state.email = email;
        state.password = password;
        state.phone = phone;
        state.cofirmPassword=confirmPassword
      },
    
  }
});

export const { addData , updateData} = UserDetails.actions;

export default UserDetails.reducer;
