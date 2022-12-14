import { useEffect, useState } from "react";
import Users from "./Users";

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({});


    useEffect(() => {
        dasboardData();

    }, [])

    const dasboardData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:2000/dashboard", requestOptions)
            .then(response => response.json())
            .then(result => setDashboardData(result.data))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-info bg-gradient p-5">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Users </h2>
                                <h4 className="card-subtitle">{dashboardData.userCount}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-danger bg-gradient p-5">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Login Failed </h2>
                                <h4 className="card-subtitle">{dashboardData.loginFailed}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-success bg-gradient p-5">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Login Success</h2>
                                <h4 className="card-subtitle">{dashboardData.loginSucess}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <Users />
            </div>
        </>
    )
}

export default Dashboard;