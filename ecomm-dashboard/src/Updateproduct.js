import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Updateproduct(props) {
  const [product, setProduct] = useState();
  const { id } = useParams(); // Get the id parameter from the URL
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const history =useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/product/${id}`);
          const data1 = await response.json();
          setProduct(data1);
          setName(data1.name);
          setPrice(data1.price);
          setDescription(data1.description);
          setFile(data1.file);
        } catch (error) {
         // console.error(error);
        }
      };

      fetchProduct();
    }
  }, [id]);
 

  async function editProduct(id) {
      let item = { name,file, price, description };
      const formData = new FormData();
      formData.append('file',file);
      formData.append('name',name);
      formData.append('price',price);
      formData.append('description',description);

      let result = await fetch("http://localhost:8000/api/updateproduct/"+id+"?_method=PUT", {
          method: 'POST',
          body: formData          
      })
      alert("Data has been Updated");
      result = await result.json();
       history("/");
  }
  return (
    <>
      <Header />
      <div>
        <h1>Update Product Page</h1>
        {product && (
            <div className="col-sm-6 offset-sm-3">
            <input type="text" defaultValue={product.name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Product" />
            <br/>
            <input type="text"  defaultValue={product.price} onChange={(e) => setPrice(e.target.value)}  className="form-control" placeholder="Enter Product" />
            <br/>
            <input type="text" defaultValue={product.description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Enter Product" />
            <br/>
            <input type="file" defaultValue={product.file} onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="Enter Product" />
            <br/>
            <img style={{ width: 100 }} src={"http://localhost:8000/" + product.file_path} />
            <br/><br/>
            <button onClick={()=>editProduct(product.id)} className="btn btn-primary">Update</button>            
          </div>
        )}
      </div>
      {/* POSTMAN TEST
      http://localhost:8000/api/updateproduct/6?_method=PUT */}
    </>
  );
}

export default Updateproduct;
