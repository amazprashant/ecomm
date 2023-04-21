import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
function Addproduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history =useNavigate();

    async function addProduct() {
 
        let item = { name,file, price, description };
        console.warn(item);
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);

        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: 'POST',
            body: formData          
        })
        alert("Data has been Saved");
        //result = await result.json();
        // //localStorage.setItem("User-Info",JSON.stringify(result));
        // history("/addproduct");
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1>Add Product Page</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Product Name" />
            <br />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="Enter Price" />
            < br />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter Price" />
            < br />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter Description" />
            <br />
            <button onClick={addProduct} className="btn btn-primary">Sign UP</button>
            </div>
        </>

    )
}
export default Addproduct;