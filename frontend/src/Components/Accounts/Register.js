import { useRef, useState } from "react";
import InputElement from "../FormControls/InputElement";
import { isRequired, isMinLength, isMaxLength } from "../CommonValidation";

const Register = () => {

    // We use useRef because we dont want rendoring on every input. Thats why we use useRef instead of useEffect.
    // const [name, setName] = useState(''); // Name
    // const [email, setEmail] = useState(''); // Email
    // const [dateOfBirth, setDateOfBirth] = useState(''); // Date Of Birth
    // const [password, setPassword] = useState(''); // Password
    // const [cpassword, setCPassword] = useState(''); // CPassword

    const nameRef = useRef('');// Name ref
    const emailRef = useRef('');// Name ref
    const dateOfBirthRef = useRef('');// DOB ref
    const passwordRef = useRef('');// Password ref
    const cPasswordRef = useRef('');// CPassword ref

    const [invalidName, setInvalidName] = useState({});
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
        setInvalidName({ ...isRequired(nameRef.current.value), ...isMinLength(nameRef.current.value, 10), ...isMaxLength(nameRef.current.value, 30) });
        setInvalidEmail({ required: isRequired(emailRef.current.value) });
        setInvalidPassword({ required: isRequired(passwordRef.current.value) });
        setInvalidCPassword({ required: isRequired(cPasswordRef.current.value) });

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
            "name": nameRef.current.value,
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
                    <div className="col-md-12">
                        {/* <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" ref={nameRef} />
                        {invalidName && <div className="invalid-feedback" >Required!</div>} */}
                        <InputElement label='Name' validation={invalidName} >
                            <input className="form-control" id="inputName" placeholder="Name" ref={nameRef} />
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
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" >Register</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Register;