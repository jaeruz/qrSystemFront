import React from 'react'
import { Container } from 'react-bootstrap';
import DocumentCard from './DocumentCard'
import DocumentProcess from './DocumentProcess';


const Documents = () => {
    return ( 
        <Container>
            <br />
            <h2>Documents</h2>
            <hr/>
            <DocumentCard />
            <br />
            <hr/>
        </Container>
     );
}
 
export default Documents;