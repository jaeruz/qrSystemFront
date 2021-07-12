import React from 'react'
import { Container, Nav, Navbar,Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const SubNavBar = () => {
    return ( 
        <Navbar expand="lg" variant="light" className="sub-nav">
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" className="nav-link">Registration</Nav.Link>
                    <Nav.Link as={NavLink} to="/records" className="nav-link">Records</Nav.Link>
                    <Nav.Link as={NavLink} to="/visit" className="nav-link">Visitor</Nav.Link>
                    <Nav.Link as={NavLink} to="/docs" className="nav-link">Documents</Nav.Link>
                    <Nav.Link as={NavLink} to="/logs" className="nav-link">Logs</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default SubNavBar;