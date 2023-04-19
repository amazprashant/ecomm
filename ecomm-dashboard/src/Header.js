import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
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
            </Navbar>

        </div>
    )
}
export default Header;
