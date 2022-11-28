import { useRef, useState } from "react";

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

    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);


    const onSubmit = (e) => {
        //Validating Form
        setInvalidName(false);
        setInvalidEmail(false);
        setInvalidPassword(false);
        if (!nameRef.current.value) {
            setInvalidName(true);
        }
        if (!emailRef.current.value) {
            setInvalidEmail(true);
        }
        if (!passwordRef.current.value) {
            setInvalidPassword(true);
        }
        // console.log(nameRef.current.value);
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <h3 className="display-6">Registration</h3>
                <form className="row g-3 bg-light p-4 mt-4" onSubmit={(e) => onSubmit(e)} >
                    <div className="col-md-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" ref={nameRef} />
                        {invalidName && <div className="invalid-feedback" >Required!</div>}
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" ref={emailRef} />
                        {invalidEmail && <div className="invalid-feedback" >Required!</div>}
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputDob" className="form-label">Date of birth</label>
                        <input type="date" className="form-control" id="inputDob" placeholder="Date of Birth" ref={dateOfBirthRef} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" ref={passwordRef} />
                        {invalidPassword && <div className="invalid-feedback" >Required!</div>}
                    </div>
                    <div className="col-6">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" ref={cPasswordRef} />
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