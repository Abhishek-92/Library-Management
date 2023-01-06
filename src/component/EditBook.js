import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditBook(){
    const params=useParams();
    const [book,setBook]=useState({})
    const url = "http://localhost:8088/api/books/"+ params.id;

    const navigate=useNavigate();
        const getData = () => {
            const data = axios.get(url);
            data.then(resp => {setBook(resp.data);console.log(book)})
            .catch(error => console.log(error));
        }
        useEffect(() =>{
            getData();
        },[])
    
        const inputHandler=(e)=>{
            setBook((book)=>({
                ...book,
                [e.target.id]:e.target.value
            }))
        }

        const submitHandler=(e)=>{
            e.preventDefault();
            const data=axios.put(url,book);
            data.then(resp=>{
                navigate('/booklist')
            })
            .catch(error=>console.log(error));
        }

        return(
            <div>
                <br/>
                <h1>Edit Book</h1>
                <br/>
                <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Go Back</button>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={submitHandler}>
                        
                        <label>Title</label>
                        <input type = "text" id="title" placeholder="Enter Title"
                        value={book.title} className="form-control" onChange={inputHandler}/>
                        <label>Author</label>
                        <input type = "text" id="author" placeholder="Enter Author"
                        value={book.author} className="form-control" onChange={inputHandler}/>
                        <label>Price</label>
                        <input type = "number" id="price" placeholder="Enter Price"
                        value={book.price} className="form-control" onChange={inputHandler}/>
                        <br/>
                        <button className="btn btn-primary" typr="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }