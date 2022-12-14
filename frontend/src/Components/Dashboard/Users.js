import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Users = () => {

    const [userData, setUserData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const [rowCounts, setRowCounts] = useState(0);
    const [totalPage, setTotalPage] = useState(0);


    const goToPage = (pageNumber) => {
        setPageNumber(pageNumber);
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://localhost:2000/users?pageSize=3&pageNumber=${pageNumber}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setUserData(result.users);
                setRowCounts(result.counts);
                setTotalPage(result.totalPage);
            })
            .catch(error => console.log('error', error));
    }, [pageNumber])


    return <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map(x => {
                        return <>
                            <tr key={x.id}>
                                <td >{x.id}</td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.email}</td>
                            </tr>
                        </>
                    })

                }
            </tbody>
        </table>
        <Pagination noOfPages={totalPage} goToPage={goToPage} />

    </>
}


export default Users;