import Header from './Header';
import React,{useState,useEffect} from 'react';
import{Table} from 'react-bootstrap';

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Invoke the fetchData() function to fetch data and update state
    getData(); // Add this line to fetch data when component mounts
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);
    getData(); // Call getData() after deletion to fetch updated data
  }

  async function getData() {
    const fetchData = async () => {
      let fetchResult = await fetch("http://localhost:8000/api/list");
      fetchResult = await fetchResult.json();
      setData(fetchResult);
    };

    fetchData();
  }

  console.warn("fetchResult", data);

  // ... Rest of the component code

  return(
    <div>
      <Header />
      <h1>Product List</h1>
      <Table>
  <tbody>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Description</td>
      <td>Image</td>
      <td>Operation</td>
    </tr>
    {
    data.map((item) => 
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <img style={{width:100}}src={"http://localhost:8000/" + item.file_path} alt="Product Image" />
        </td>
        <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
      </tr>
      )
    }
  </tbody>
</Table>

    </div>
  )
  }
 export default ProductList;