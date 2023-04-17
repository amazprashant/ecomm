import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/addproduct" element={<Addproduct/>} />
        <Route exact path="/updateproduct" element={<Updateproduct/>} />       
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
