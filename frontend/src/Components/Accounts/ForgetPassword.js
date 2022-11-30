import { useRef, useState } from "react";
import InputElement from "../FormControls/InputElement";
import { isRequired, isMinLength, isMaxLength } from "../CommonValidation";
const ForgetPassword = () => {
    const emailRef = useRef('');// Name ref

    const [invalidEmail, setInvalidEmail] = useState({});
    const onSubmit = (e) => {
        setInvalidEmail({
            ...isRequired(emailRef.current.value), ...isMinLength(emailRef.current.value, 10), ...isMaxLength(emailRef.current.value, 30)
        });
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <h3 className="display-6">Reset Password</h3>
                <form className="row g-3 bg-light p-4 mt-4" onSubmit={(e) => onSubmit(e)} noValidate >

                    <div className="col-6">
                        <InputElement label='Email' validation={invalidEmail} >
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" ref={emailRef} />
                        </InputElement>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary me-4" >Reset</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default ForgetPassword;