import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../features/userSlice';
const intitalState={
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
}
const Registration = () => {
    const [formData, setFormData] = useState(intitalState);
    const dispatch= useDispatch()
      const handleChange = (e) => {
        const { name, value } = e.target;
       setFormData({
        ...formData,[name]:value
       })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Validation for password
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
  if (!passwordRegex.test(formData.password)) {
    alert('Password should be at least 8 characters long and include at least one uppercase letter, one special character, and one number.');
    return;
  }
    // Check if password matches confirm password
    if (formData.password !== formData.confirmPassword) {
        alert('Password and confirm password do not match.');
        return;
      }
       dispatch(addData(formData))

       localStorage.setItem('userData', JSON.stringify(formData));
        console.log(formData);
      };
  return (
    <>
    <div className="heading" style={{textAlign:"center"}}>
        <h2>Register Here</h2>
    </div>
    <form className="registration_form login_form" onSubmit={handleSubmit}>
      <div className='label'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='label'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='label'>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className='label'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='label'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button" style={{textAlign:"center"}}>
      <button type="submit">Register</button>
      </div>
      
    </form>
    </>
    
  )
}

export default Registration