import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import BrgyClearanceButton from './BrgyClearanceButton'
import BusinessPermit from './BusinessPermit'
import Indigency from './Indigency'



const DocumentCard = () => {
    return ( 
        <Container>
            <Card>
            <Card.Header>brgy-clearance.pdf</Card.Header>
            <Card.Body>
                <Card.Title>Get Baranggay Clearance Template</Card.Title>
                <Card.Text>
                Plain version of baranggay clearance file.
                </Card.Text>
                <BrgyClearanceButton specificUser={null}/>
            </Card.Body>
            </Card>
            <br/>
            <Card>
            <Card.Header>indigency.pdf</Card.Header>
            <Card.Body>
                <Card.Title>Get Indigency Template</Card.Title>
                <Card.Text>
                Plain version of Baranggay Indigency file.
                </Card.Text>
                <Indigency specificUser={null}/>
            </Card.Body>
            </Card>
            <br/>
            <Card>
            <Card.Header>business-permit.pdf</Card.Header>
            <Card.Body>
                <Card.Title>Get Business Permit Template</Card.Title>
                <Card.Text>
                Plain version of Business permit file.
                </Card.Text>
                    <BusinessPermit specificUser={ null}/>
            </Card.Body>
            </Card>
        </Container>
        
    );
}
 
export default DocumentCard;