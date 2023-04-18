import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import{Link,useNavigate} from 'react-router-dom';
function Header()
{
  let user= JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();
  function logOut()
  {
    localStorage.clear();
    navigate("/register");
  }
    return(
        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">UpdateProduct</Link>
                </>
                :
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
            } 
          </Nav>
          {localStorage.getItem("user-info")?
          <Nav>
            <NavDropdown title ={user && user.name}>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null 
}
      </Navbar>
      </div>
    )
}
export default Header
