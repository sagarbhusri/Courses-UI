import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Menu from './Components/Menu';
import AllCourses from './Components/AllCourses'
import AddCourse from './Components/AddCourse';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

  return (
    <Router>
    <div>
    <div>
      <Home/>
    </div> 
    <div >
        <Container >
          <Row>
            <Col md={4}><Menu/></Col>
            <Col md={8}>
              <Route path="/" component={Header} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/all-course" component={AllCourses} exact />
              <Route path="/Header" component={Header} exact />

            </Col>
          </Row>
        </Container>
     </div>
     </div>
     </Router>
  );
}

export default App;
