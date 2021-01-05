import React,{useState,useEffect} from 'react'
import { Container,Form } from 'react-bootstrap';
import FocusLock from 'react-focus-lock';

const ScanPanel = ({QRState,setQRState}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        return false
    }
    const handleChange = (e) => {
        let idQuery = document.getElementById('idQuery')
        idQuery.disabled = false;
        document.getElementById('idQuery').focus()
        // setQRState({
        //     ...QRState,
        //     purpose:e.target.value
        // })
    }

    useEffect(() => {
        let idQuery = document.getElementById('idQuery')
        idQuery.disabled = true;
    }, [])
    const handleScan = () => {
        let QRIn = document.getElementById('idQuery');
        let purpose = document.getElementById('purpose');
        if (QRIn.value.length == 24) {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getUTCSeconds();
            setQRState({
                ...QRState,
                userID: QRIn.value,
                purpose: purpose.value
            })
            QRIn.value = "";
        }
    }
    return ( 
        <div className="scan-panel">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="idQuery">
                    <Form.Label>Scan QR Here:</Form.Label>
                    <FocusLock>
                        <Form.Control type="text" placeholder="QR Code" onChange={handleScan}/>
                    </FocusLock>
                </Form.Group>
                <Form.Group controlId="purpose">
                    <Form.Label>Purpose:</Form.Label>
                    <Form.Control as="select" placeholder="Purpose" onChange={handleChange}>
                        <option>None</option>
                        <option>Brgy Clearance</option>
                        <option>Inquiries</option>
                        <option>Visit</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
     );
}
 
export default ScanPanel;