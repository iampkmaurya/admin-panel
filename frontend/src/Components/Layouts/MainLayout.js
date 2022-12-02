import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const MainLayout = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/account/login');

    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/account/login');
        }
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button type="button" className="btn btn-primary" onClick={(e) => logOut()}>Logout</button>
                </div>
            </nav>
            <Outlet />
        </>
    )

}

export default MainLayout;