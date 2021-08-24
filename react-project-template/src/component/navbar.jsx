import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import '../Style.css'
import infinity from '../img/infinityW.png'

const Tabs = () => {

  return ( <>
    <Navbar 
     style={{marginBottom:'20px',backgroundColor:'orange'}} 
     variant={'dark'} 
     expand="md">
   <Container>
     <Navbar.Brand 
     id='navBrand'> 
      <img id='navLogo' 
      src={infinity}/>
      T<span>ac</span>O<span>ca</span>T
     </Navbar.Brand>
     <Navbar.Toggle 
     aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav 
       id="navLink"
      className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/App">the App</Nav.Link>
        <Nav.Link as={Link} to="/Code">the Code</Nav.Link>
        <Nav.Link as={Link} to="/Git">Git Repo</Nav.Link>
        <Nav.Link as={Link} to="/About">About me</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  </> );
}
 
export default Tabs;
