import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function SearchProduct() {
  const [data,setData]=useState([]);
  async function search(key){
    
    if(key.length >1){
    let result = await fetch("http://localhost:8000/api/search/"+key)
    result = await result.json();
    console.warn(result)
    setData(result)
    }
  }
  return (
    <>
      <Header />
      <div>
       
        <div>
          <h1>SearchProduct</h1>
          <input type="text" onChange={(e)=>search(e.target.value)} className='form-control-sm-6' placeholder='search product'/> <br /> <br />
          {
            data.length>0?
             <Table>
             <thead>
               <tr>
                 <td>Id</td>
                 <td>Name</td>
                 <td>Description</td>
                 <td>Image</td>
                 <td>Operation</td>
               </tr>
             </thead>
             <tbody>
               {
                 data.map((item) =>
                   <tr>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.description}</td>
                     <td>
                       <img style={{ width: 100 }} src={"http://localhost:8000/" + item.file_path} alt="Product Image" />
                     </td>
                     
                   </tr>
                 )
               }
             </tbody>
           </Table>
           :<h3>Please Search Product</h3>
          }
        </div>
     
      </div>
    </>
  );
}

export default SearchProduct;
