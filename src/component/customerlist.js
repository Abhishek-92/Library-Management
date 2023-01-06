import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate} from "react-router-dom";

export function CustomerList(props){
    const [customers,setCustomers]= useState([]);
    const url= "http://localhost:8088/api/customers";

    // const navigate = useNavigate();
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setCustomers(resp.data))
        .catch(error => console.log(error));
    }

    
    useEffect(()=>{
        getData();
    }, [])

    const tabRow = customers.map((customer,index)=>{
        return (
            <tr key={index}>
                <td>{customer.customerId}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                
                <td>
                    
                </td>
            </tr>
        )
    })
    return(
        <div>
            <br/>
            <h1>List of Customers</h1>
            <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Email</th><th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    )
}