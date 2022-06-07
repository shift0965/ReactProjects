

const ValidateInfo = (values) =>{
    let errors = {};

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    var emailPattern = /^.+@[\w]+\.[\w]+/
    if(!values.email){
        errors.email = "Email required"
    }
    else if(!emailPattern.test(values.email)){
        errors.email = 'Invalid email'
    }

    var passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/
    if(!values.password){
        errors.password = 'Password required'
    }
    else if(values.password.length < 6){
        errors.password = 'Password needs to be 6 characters or more'
    }
    else if(!passwordPattern.test(values.password)){
        errors.password = 'Password must contain one lowercase, one uppercase, one digit number'
    }

    if(!values.confirmPassword){
        errors.confirmPassword = 'Confirm password required'
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Passwords do not match'
    }

    return(errors);

}




export default ValidateInfo;