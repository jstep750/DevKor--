import logo from './logo.svg';
import './App.css';
import './main.scss'
import {Nav,Container,NavDropdown,Navbar} from 'react-bootstrap';

function App() {
  return (
    <div classNameNameName="App">
      <Navbar bg="light" expand="">
  <div className="container-fluid ms-2 me-2" style={{display: 'block'}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4" />
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
    </div>
  );
}

export default App;
