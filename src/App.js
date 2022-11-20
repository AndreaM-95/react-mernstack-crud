//import logo from './logo.svg'; (Aquí va mi logo)
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //Llamamos bootstrap 

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react';
import CreateStudent from './Components/create-student.component';//Importamos los componentes
import EditStudent from './Components//edit-student.component';//Importamos los componentes
import ListStudent from './Components/list-student.component';//Importamos los componentes
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className="nav-link">
                  App react MERN Stack //Nombre del proyecto
                </Link> 
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Crear Estudante
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/list-student'} className="nav-link">
                    Listar Estudante
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route 
                    exact
                    path='/'
                    component={(props) => <CreateStudent {... props}/>}
                  />

                  <Route
                    exact
                    path='/create-student'
                    component={(props) => <CreateStudent {... props}/>}
                  />

                  <Route
                    exact
                    path='/edit-student/:id' //Por el id se modificará el estudiante
                    component={(props) => <EditStudent {... props}/>}
                  />

                  <Route
                    exact
                    path='/list-student'
                    component={(props) => <ListStudent {... props}/>}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
