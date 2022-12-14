import { useRef, useState } from "react";
import InputElement from "../FormControls/InputElement";
import { isRequired } from "../CommonValidation";
import { Link } from "react-router-dom";

const Register = () => {

    // We use useRef because we dont want rendoring on every input. Thats why we use useRef instead of useEffect.
    // const [name, setName] = useState(''); // Name
    // const [email, setEmail] = useState(''); // Email
    // const [dateOfBirth, setDateOfBirth] = useState(''); // Date Of Birth
    // const [password, setPassword] = useState(''); // Password
    // const [cpassword, setCPassword] = useState(''); // CPassword

    const fNameRef = useRef('');// First Name ref
    const lNameRef = useRef('');// First Name ref
    const emailRef = useRef('');// Email ref
    const dateOfBirthRef = useRef('');// DOB ref
    const passwordRef = useRef('');// Password ref
    const cPasswordRef = useRef('');// CPassword ref

    // const [invalidName, setInvalidName] = useState({});
    const [invalidEmail, setInvalidEmail] = useState({});
    const [invalidPassword, setInvalidPassword] = useState({});
    const [invalidCPassword, setInvalidCPassword] = useState({});

    // const isRequired = (value) => {
    //     return !value;
    // }
    // const isMinLength = (value, minLength = 5) => {
    //     return value.length < minLength;
    // }
    // const isMaxLength = (value, maxLength) => {
    //     return value.length > maxLength
    // }




    const onSubmit = (e) => {
        //Validating Form
        // setInvalidName({ ...isRequired(nameRef.current.value), ...isMinLength(nameRef.current.value, 10), ...isMaxLength(nameRef.current.value, 30) });
        const emailValidation = { ...isRequired(emailRef.current.value) };
        const passwordValidation = { ...isRequired(passwordRef.current.value) };
        const cPasswordValidation = { ...isRequired(cPasswordRef.current.value) };
        const validation = {
            email: emailValidation,
            password: passwordValidation,
            cPassword: cPasswordValidation,
        }

        const validationCheck = Object.values(validation).map(x => Object.values(x));
        setInvalidEmail(emailValidation);
        setInvalidPassword(passwordValidation);
        setInvalidCPassword(cPasswordValidation);

        if (validationCheck.some(x => x === true)) {
            e.preventDefault();
            return;
        }

        // setInvalidPassword(false);
        // if (!nameRef.current.value) {
        //     setInvalidName({ required: true, minLength: true });
        // }
        // if (!emailRef.current.value) {
        //     setInvalidEmail(true);
        // }
        // if (!passwordRef.current.value) {
        //     setInvalidPassword(true);
        // }
        // console.log(nameRef.current.value);


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "fName": fNameRef.current.value,
            "lName": lNameRef.current.value,
            "password": passwordRef.current.value,
            "email": emailRef.current.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:2000/account/register", requestOptions)
            .then(response => response.text())
            .then(result => alert('SuccessFully Register'))
            .catch(error => console.log('error', error));


        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <h3 className="display-6">Registration</h3>
                <form className="row g-3 bg-light p-4 mt-4" onSubmit={(e) => onSubmit(e)} noValidate >
                    <div className="col-md-6">
                        {/* <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" ref={nameRef} />
                        {invalidName && <div className="invalid-feedback" >Required!</div>} */}
                        <InputElement label='First Name'>
                            <input className="form-control" id="inputName" placeholder="First Name" ref={fNameRef} />
                        </InputElement>
                    </div>
                    <div className="col-md-6">
                        {/* <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" ref={nameRef} />
                        {invalidName && <div className="invalid-feedback" >Required!</div>} */}
                        <InputElement label='Last Name' >
                            <input className="form-control" id="inputName" placeholder="Last Name" ref={lNameRef} />
                        </InputElement>
                    </div>
                    <div className="col-6">
                        {/* <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" ref={emailRef} />
                        {invalidEmail && <div className="invalid-feedback" >Required!</div>} */}
                        <InputElement label='Email' validation={invalidEmail} >
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" ref={emailRef} />
                        </InputElement>
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputDob" className="form-label">Date of birth</label>
                        <input type="date" className="form-control" id="inputDob" placeholder="Date of Birth" ref={dateOfBirthRef} />
                    </div>
                    <div className="col-6">
                        {/* <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" ref={passwordRef} />
                        {invalidPassword && <div className="invalid-feedback" >Required!</div>} */}
                        <InputElement label='Password' validation={invalidPassword} >
                            <input type="password" className="form-control" id="password" placeholder="Password" ref={passwordRef} />
                        </InputElement>
                    </div>
                    <div className="col-6">
                        <InputElement label='Confirm Password' validation={invalidCPassword} >
                            <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" ref={cPasswordRef} />
                        </InputElement>
                        {/* <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" ref={cPasswordRef} /> */}
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary" >Register</button>
                    </div>
                    <div className="col-6 text-end">
                        <Link to='/account/login'>Already Register</Link>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Register;