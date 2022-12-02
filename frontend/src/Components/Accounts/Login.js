import { useEffect, useRef, useState } from "react";
import InputElement from "../FormControls/InputElement";
import { isRequired, isMinLength, isMaxLength } from "../CommonValidation";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef('');// Name ref
    const passwordRef = useRef('');// Password ref

    const [invalidEmail, setInvalidEmail] = useState({});
    const [invalidPassword, setInvalidPassword] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, []
    )


    const onSubmit = (e) => {
        setInvalidEmail({
            ...isRequired(emailRef.current.value), ...isMinLength(emailRef.current.value, 2), ...isMaxLength(emailRef.current.value, 30)
        });
        setInvalidPassword({ ...isRequired(passwordRef.current.value) });


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "isLoggedIn=true");

        var raw = JSON.stringify({
            "username": emailRef.current.value,
            "password": passwordRef.current.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:2000/login", requestOptions)
            .then(response => response.json())
            .then(result => verifyLoginResponse(result))
            .catch(error => console.log('error', error));


        e.preventDefault();
    }

    function verifyLoginResponse(response) {
        // {
        //     "status": true,
        //     "msg": "successfully loggedin",
        //     "data": {
        //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2OTkwODA5NCwiZXhwIjoxNjY5OTQ0MDk0fQ.bbz7C-XoPVasD2OOGFl8_GQ13lJYyaoslW9fTXFi2zY"
        //     }
        // }
        if (response.status) {

            // successful
            alert('Login Successful!!');
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');


        } else {
        }
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