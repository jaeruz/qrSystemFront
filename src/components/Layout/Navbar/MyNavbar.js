import React from 'react'
import { Container, Navbar, Image } from 'react-bootstrap'
import Clock from 'react-live-clock';
import tsrlogo from '../../../img/tsrlogo.png'

const MyNavbar = () => {
    return (
        <div >
            <Navbar expand="lg" variant="light" className="my-navbar">
                <Container>
                    <Navbar.Brand href="#">
                        <Image src={tsrlogo} style={{ width: '75px', height: '55px' }} />
                        <h4 style={{ color: 'whitesmoke', textShadow:'2px 2px 2px black', display:'inline' }}>QR-based Information System</h4>
                    </Navbar.Brand>
                    <Clock format={'HH:mm:ss'} ticking={true}  />
                </Container>
            </Navbar>
        </div>
      );
}
 
export default MyNavbar;