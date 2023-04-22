import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
function ProductList() {
    const [data, setDate] = useState([]);
    const history = useNavigate();    
    async function deleteoperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: "get"
        });
        result = await result.json();
        alert(result);
        history("/");
    }
    async function getData() {
        const fetchData = async () => {
            let fetchResult = await fetch("http://localhost:8000/api/list");
            fetchResult = await fetchResult.json();
            setDate(fetchResult);
        };
        fetchData();
    }
    getData();
    return (
        <>
            <Header />
            <div className="col-sm-8 offset-sm-2">

                <h1>Product List</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                    <td><span className="deletebtn" onClick={() => deleteoperation(item.id)}>Delete</span><span>Update</span></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default ProductList;