import React,{useEffect} from 'react'
import MyNavbar from './components/Layout/Navbar/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubBody from './components/Layout/SubBody/SubBody';
import { useDispatch,useSelector } from 'react-redux'
import { getUser } from './actions/UserActions';
import FooterPage from './components/Layout/Footer/FooterPage';

const App = () => {

  //   const dispatch = useDispatch()

  // useEffect(() => {
  //     // console.log('dis')
  //       dispatch(getUser)
  //   }, [dispatch])
  //   const dispatch = useDispatch()
  //   const user = useSelector(state => state.user)
  
  //  useEffect(() => {
  //       dispatch(getUser())
  //   }, [dispatch])

    return (
      <div className="App">
        <MyNavbar />
        <SubBody />
        <div style={{marginTop:'500px'}}></div>
        <FooterPage/>
      </div>
    );
}
 
export default App;

