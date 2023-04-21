import Header from "./Header";
import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
function ProductList()
{
    const [data,setDate]=useState([]);
   
    //useEffect(async ()=>{    
      //  let fetchResult = await fetch("http://localhost:8000/api/list");
        //fetchResult = await fetchResult.json();
        //setDate(fetchResult);
   // },[]);
   
   useEffect(() => {
    const fetchData = async () => {
        let fetchResult = await fetch("http://localhost:8000/api/list");
        fetchResult = await fetchResult.json();
        setDate(fetchResult);
     
    };  
    fetchData();
  }, []);

     console.warn("Result",data);
    return (
        <>
        <Header />
        <div className="col-sm-8 offset-sm-2">
            
            <h1>Product List</h1>
            <Table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                {
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><img style= {{width:100}} src={"http://localhost:8000/"+item.file_path}/></td>
                    </tr>
                 )
                }
            </Table>
        </div>
        </>
    )
}
export default ProductList;