import React,{useState,useEffect} from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { addPurpose } from '../../../actions/PurposeActions'
import { getUser } from '../../../actions/UserActions'
import ScanPanel from './ScanPanel'
import ScanResult from './ScanResult'

const Visitor = () => {
    const [QRState, setQRState] = useState({
        userID: null,
        purpose: null,
        date: new Date()
    })
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [specificUser, setSpecificUser] = useState(null)

    useEffect(() => {

        const filtUser = user.filter(u => u._id == QRState.userID)
        setSpecificUser(filtUser)
    }, [QRState])
    useEffect(() => {
        console.log(specificUser)
        console.log(QRState)
        if (specificUser) {
            if (specificUser.length) {
                dispatch(addPurpose(QRState))
            }
        }
        
    }, [specificUser])

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return ( 
        <div>
            {user ? (
                user.length ? (
                    <Row>
                        <Col lg={4}>
                            <ScanPanel QRState={QRState} setQRState={ setQRState}/>
                        </Col>
                        <Col lg={8}>
                            <ScanResult specificUser={ specificUser}/>
                        </Col>
                    </Row>
                ) : (
                        <div style={{paddingTop:'30px', width:'100%' }}>
                            <Spinner animation="border" role="status" style={{display:"block",margin:'0 auto',color:'#669966'}}/>
                        </div>
                        
                    )
            ) : (
                    <p>loading..</p>
                )}
            
        </div>
     );
}
 
export default Visitor;