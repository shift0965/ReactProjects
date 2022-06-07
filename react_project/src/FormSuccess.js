import React from 'react';
import './FormSuccess.css'

const FormSuccess = ()=>{
    return(
        <div className='form_right'>
            <div className="form_success">
                <p>We have receive your request!</p>
                <div className="img2_container">
                    <img src="img/img_1.svg" alt="successful login img" />
                </div>
            </div>
        </div>
    )
}

export default FormSuccess;