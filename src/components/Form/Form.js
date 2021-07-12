import React from "react"
import { Container } from "react-bootstrap"
import { Switch, Route } from "react-router-dom"
import Documents from "./Documents/Documents"
import Records from "./Records/Record"
import RegistrationForm from "./RegistrationForm/RegistrationForm"
import UpdateInfoForm from "./UpdateInfo/UpdateInfoForm"
import UserProfile from "./UserProfile/UserProfile"
import Visitor from "./Visitor/Visitor"
const Form = () => {
  // const [token, setToken] = useState(null)

  return (
    <Container className="form-container">
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        {/* <Route path="/profile" component={UserProfile} /> */}
        <Route path="/records" component={Records} />
        <Route path="/visit" component={Visitor} />
        <Route path="/edit/:user_id" component={UpdateInfoForm} />
        <Route path="/profile/:user_id" component={UserProfile} />
        <Route path="/docs" component={Documents} />
      </Switch>
    </Container>
  )
}

export default Form
