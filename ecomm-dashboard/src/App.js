import './App.css';
import {Routes, BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import Protected from './Protected';
import ProductList from './ProductList';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        {/* <Route exact path="/addproduct" element={<Protected Cmp="Addproduct"/>} />
        <Route exact path="/updateproduct" element={<Protected Cmp= "Updateproduct"/>} />  */}
        <Route path="/addproduct"  element={<Protected Cmp={Addproduct} />} />
        <Route path="/updateproduct"  element={<Protected Cmp={Updateproduct} />} />  
        <Route path="/"  element={<Protected Cmp={ProductList} />} />        
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
