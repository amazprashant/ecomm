import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
    let user = JSON.parse(localStorage.getItem('User-Info'));
    const history = useNavigate();

    function logout() {
        console.warn("sakshi");
        localStorage.clear("");
        history("/register");

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                    {
                        localStorage.getItem('User-Info') ?
                            <>
                                <Link to="/Addproduct">Add Products </Link>
                                <Link to="/Updateproduct">Update Products </Link>
                            </>
                            :
                            <>
                                <Link to="/Login">Login</Link>
                                <Link to="/Register">Register</Link>
                            </>
                    }
                </Nav>

                {localStorage.getItem('User-Info') ?
                    <Nav>
                        <NavDropdown title={user && user.name} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    : null
                }
            </Navbar>

        </div>
    )
}
export default Header;
