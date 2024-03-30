import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem('userData'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
