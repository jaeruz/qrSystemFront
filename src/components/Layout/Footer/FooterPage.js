import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { FaEnvelope, FaFacebookSquare, FaHistory, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaMapMarkedAlt, FaPeopleCarry, FaPhone, FaRegHandshake, FaSearchLocation, FaYoutube, FaYoutubeSquare } from 'react-icons/fa';

const FooterPage = () => {
  return ( 
    
    <Container className="footer" fluid style={{padding:'50px'}}>
      <Container className="footer">
        {/* <Row>
          <Col sm={6}>
            <h4>Contact Us</h4>
            <br/>
            <ul>
              <li><FaMapMarkedAlt/> Block 1 Lot 45 Katapatan Subdivision, Cabuyao City, Laguna 4025</li>
              <li><FaPhone/> 0917-783-6990</li>
              <li><FaEnvelope/> sales.tsrevolution@gmail.com</li>
            </ul>
          </Col>
          <Col sm={6}>
            <h4>TSREVOLUTION PH</h4>
            <br/>
            <ul>
              <li><FaHistory/> TSRevolution History</li>
              <li><FaPeopleCarry/> TSRevolution Team</li>
              <li><FaRegHandshake/> SRevolution Careers</li>
            </ul>
          </Col>
        </Row>
        <br />
        <FaFacebookSquare style={{ fontSize: "50px" }} />
        <FaInstagramSquare style={{ fontSize: "50px" }} />
        <FaYoutubeSquare style={{ fontSize: "50px" }} />
        <FaLinkedin style={{fontSize:"50px"}}/>
        <br />
        <hr/> */}
        <p>Copyright © 2020 TSRevolution Engineering Services | Powered by TSRevolution Engineering Services</p>
        <p><FaEnvelope/> sales.tsrevolution@gmail.com</p>
      </Container>
    </Container>
   );
}
 
export default FooterPage;