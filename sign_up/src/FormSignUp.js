//import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import FormUse from './FormUse';
import ValidateInfo from './ValidateInfo';
import './FormSignUp.css'


const FormSignUp = ({SubmitForm}) => {

    const {handleChange, values, handleSubmit, errors} = FormUse(ValidateInfo, SubmitForm);


  return (
        <div className="form_right">
            <form action="" className="form" onSubmit={handleSubmit}>
                <p>Get started with us today! Create your account by filling out the information below.</p>

                <div className="form_inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="Enter your name"
                        value = {values.username}
                        onChange = {handleChange}
                        />
                        {errors.username && <p className='errorMassage'>{errors.username}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="Email" className="form-label">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your Email"
                        value = {values.email}
                        onChange = {handleChange}
                        />
                        {errors.email && <p className='errorMassage'>{errors.email}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="Password" className="form-label">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="Enter your Password"
                        value = {values.password}
                        onChange = {handleChange}
                        />
                        {errors.password && <p className='errorMassage'>{errors.password}</p>}
                </div>
                <div className="form_inputs">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        className="form-input" 
                        placeholder="Confirm your Password"
                        value = {values.confirmPassword}
                        onChange = {handleChange}
                        />
                        {errors.confirmPassword && <p className='errorMassage'>{errors.confirmPassword}</p>}
                </div>
                
                <button className="form_input_btn" type="submit" >
                    <span className="input_btn_text">Sign Up</span>
                </button>

                <span className="form_input_login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
  );
}

export default FormSignUp;