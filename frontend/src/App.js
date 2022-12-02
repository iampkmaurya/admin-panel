import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Register from "./Components/Accounts/Register";
import AuthLayout from "./Components/Layouts/AuthLayout";
import MainLayout from "./Components/Layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgetPassword from "./Components/Accounts/ForgetPassword";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/account/login" />} /> */}
                    <Route path="/account" element={<AuthLayout />} >
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="forgetpassword" element={<ForgetPassword />} />

                    </Route>
                    <Route path="/" element={<MainLayout />} >
                        <Route path="dashboard" element={<h1>this is dashboard</h1>} />
                        <Route path="profile" element={<h1>Profile</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;