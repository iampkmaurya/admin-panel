import { useRef, useState } from "react";
import InputElement from "../FormControls/InputElement";
import { isRequired, isMinLength, isMaxLength } from "../CommonValidation";
import { Link } from "react-router-dom";

const Login = () => {

    const emailRef = useRef('');// Name ref
    const passwordRef = useRef('');// Password ref

    const [invalidEmail, setInvalidEmail] = useState({});
    const [invalidPassword, setInvalidPassword] = useState({});

    const onSubmit = (e) => {
        setInvalidEmail({
            ...isRequired(emailRef.current.value), ...isMinLength(emailRef.current.value, 10), ...isMaxLength(emailRef.current.value, 30)
        });
        setInvalidPassword({ ...isRequired(passwordRef.current.value) });
        e.preventDefault();
    }

    return (
        <>
            <div className="container">
                <h3 className="display-6">Login</h3>
                <form className="row g-3 bg-light p-4 mt-4" onSubmit={(e) => onSubmit(e)} noValidate >

                    <div className="col-6">
                        <InputElement label='Email' validation={invalidEmail} >
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" ref={emailRef} />
                        </InputElement>
                    </div>
                    <div className="col-6">
                        <InputElement label='Password' validation={invalidPassword} >
                            <input type="password" className="form-control" id="password" placeholder="Password" ref={passwordRef} />
                        </InputElement>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary me-4" >Login</button>
                        <Link to='/account/forgetpassword'>Forget Password</Link>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Login;