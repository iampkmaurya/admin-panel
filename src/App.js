import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Register from "./Components/Accounts/Register";
import AuthLayout from "./Components/Layouts/AuthLayout";
import MainLayout from "./Components/Layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/account/login" />} />
                    <Route path="/account" element={<AuthLayout />} >
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="/dashboard" element={<MainLayout />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;