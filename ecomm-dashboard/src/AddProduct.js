import Header from './Header';
import {useState} from 'react';
function AddProduct()
{
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [file,setFile]=useState("");
    async function addProduct(){
        console.warn(name,description,file);
        const formData = new FormData();
        formData.append('name',name);
        formData.append('description',description);
        formData.append('file', file);
        let result =await fetch("http://localhost:8000/api/addproduct",{
            method:'POST',
            body: formData
        })
        
        alert("Data has been saved");
    }
    return(
        <div>
             <Header />
            <h1>Add Product</h1>
            <div className='col-sm-6 offset-sm-3'>
                <br />
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder='name'/>
            <br />
            <input type="text" onChange={(e)=>setDescription(e.target.value)}className="form-control" placeholder='description'/>
            <br />
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}className="form-control" placeholder='file'/>
            <br />
            <button onClick={addProduct} className='btn btn-primary'>Add Product</button>

            </div>

        </div>
    )
}
export default AddProduct