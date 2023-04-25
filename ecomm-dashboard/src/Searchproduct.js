import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function Searchproduct()
 {
    const [data, setData] = useState([]);
    async function search(key) {
        console.warn(key);
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json();
        setData(result);
        console.log(result);
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Product</h1>
                <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Enter Product" />
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((result) =>
                                <tr>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.price}</td>
                                    <td>{result.description}</td>
                                    <td><img style={{ width: 100 }} src={"http://localhost:8000/" + result.file_path} /></td>
                                    

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Searchproduct;