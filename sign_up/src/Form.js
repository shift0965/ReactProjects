import React, {useState} from 'react';
import FormSignUp from './FormSignUp';
import './Form.css'
import FormSuccess from './FormSuccess';

const Form = ({setFormOpen}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    function SubmitForm(){
        setIsSubmitted(true);
    }
    
    return(
        <div className="body">
            <div className="main_content">
                <div className="form_left">
                    <div className="img_container">
                        <img src="img/img_2.svg" alt="an image of rocket" />
                    </div>
                </div>
                <div className="close_btn">
                    <a onClick={() => setFormOpen()}>
                        <span className="bar" id='close_bar'></span>
                        <span className="bar"></span>
                    </a>
                </div> 
                {!isSubmitted ? <FormSignUp SubmitForm={SubmitForm}/> : <FormSuccess/>}
            </div>
        </div>
        
    )
}
export default Form;