import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookList(props){
    const [books,setBooks]= useState([]);
    const url= "http://localhost:8088/api/books/";

    const navigate = useNavigate();
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => setBooks(resp.data))
        .catch(error => console.log(error));
    }

    const deleteBook=(id)=>{
        axios.delete(url+id)
        .then(resp=>{console.log(resp); getData()})
        .catch(error=>console.log(error));
    }
    useEffect(()=>{
        getData();
    }, [])

    const tabRow = books.map((book,index)=>{
        return (
            <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.status}</td>
                <td><button className="btn btn-primary"
                    onClick={() => navigate("/viewbook/" +book.id)}>View</button>&nbsp;
                    <button className="btn btn-danger" 
                    onClick={()=>deleteBook(book.id)}>Delete</button>&nbsp;
                    <button className="btn btn-success"
                    onClick={() => navigate("/editbook/"+book.id)}>Edit</button>&nbsp;
                    <button className="btn btn-warning"
                    onClick={() => navigate("/buybook/"+book.id)}>Buy</button>&nbsp;
                    <button className="btn btn-info"
                    onClick={() => navigate("/borrowbook/"+book.id)}>Borrow</button>
                </td>
            </tr>
        )
    })
    return(
        <div>
            <br/>
            <h1>List of Books</h1>
            <br/>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th><th>Title</th><th>Author</th><th>Price</th><th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow}
                </tbody>
            </table>
        </div>
    )
}