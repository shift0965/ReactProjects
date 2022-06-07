import {useState, useEffect} from 'react'



const FormUse = (ValidateInfo, SubmitForm) =>{
    const [values, setValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = e => {
        const {name, value} = e.target
        setValue({
            ...values,
            [name] : value
        })
    }


    const handleSubmit = e => { 
        setErrors(ValidateInfo(values));    
        e.preventDefault(); 
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0){
            SubmitForm();
        }
    }, [errors])
    
    return {handleChange, values, handleSubmit, errors};
}

export default FormUse;