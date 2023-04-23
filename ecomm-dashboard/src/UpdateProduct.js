import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productFilePath, setProductFilePath] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  
  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/product/${id}`);
          const data = await response.json();
          console.warn(data);

          // Update state with fetched data
          setProductId(data.id);
          setProductName(data.name);
          setProductDescription(data.description);
          setProductFilePath(data.file_path);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProduct();
    }
  }, [id]);
  async function editProduct(id) {
    const formData = new FormData();
    formData.append('file', selectedFile);// assuming productPrice is another state variable for price
    formData.append('name', productName);
    formData.append('description', productDescription); // assuming productDescription is another state variable for description
    let data = await fetch(`http://localhost:8000/api/updateproduct/${id}`, {
      method: 'POST', // change to POST
      body: formData,
      headers: {
        // remove '_method' query parameter
        'X-HTTP-Method-Override': 'PUT' // add HTTP method override header
      }
    });
    alert("Data has been updated");
  }


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Update Product Page</h1>
        
        <div>
          <h1>UpdateProduct</h1>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /> <br /> <br />
          <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} /> <br /> <br />
          <input type="file" onChange={handleFileChange} /> <br /> <br />
          <img style={{ width: 100 }} src={"http://localhost:8000/" + productFilePath} alt="Product Image" />
          <button onClick={()=>{editProduct(productId)}}>Update Product</button>
        </div>
     
      </div>
    </>
  );
}

export default UpdateProduct;
