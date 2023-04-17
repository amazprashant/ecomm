import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_warapper">
                        <Link to="/Addproduct">Add Products </Link>
                        <Link to="/Updateproduct">Update Products </Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Register">Register</Link>

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar>

        </div>
    )
}
export default Header;
