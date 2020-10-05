import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const linkStyle = {
        fontSize : '20',
        color : 'black',
        textDecoration : 'none'
    }
    return (
        <Navbar className="container" collapseOnSelect expand="lg">
            <Navbar.Brand> <Link to='/home'> <img className="logo" src={logo} alt=""/> </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                </Nav>
                <Nav className = 'd-flex align-items-center p-3'>
                    <Link className='m-3' id="RouterNavLink" style={linkStyle} to='/home'>Home</Link>
                    <Link className='m-3' id="RouterNavLink" style={linkStyle} to='/donation'>Donations</Link>
                    <Link className='m-3' id="RouterNavLink" style={linkStyle} to='/events'>Events</Link>
                    <Link className='m-3' id="RouterNavLink" style={linkStyle} to='/blog'>Blog</Link>
                    {
                        userInfo.isLoggedIn ? <h5 className='text-dark m-3'>{userInfo.userName}</h5>
                        : <Link className='m-3' id="RouterNavLink" to='/register'><button className='btn btn-primary'>Register</button></Link>
                        
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;