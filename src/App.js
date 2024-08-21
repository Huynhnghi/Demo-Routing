import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './Store.js';

import Calculator from './Calculator.js';
import History from './History.js';

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand href="#">ICO WEB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
              <Nav.Link as={Link} to="/history">Lịch sử</Nav.Link>
              <NavDropdown title="Đăng ký/ Đăng nhập" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Đăng ký</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Đăng nhập</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routing Configuration */}
      <Content />
    </Router>
  );
}

function Content() {
  const balance = useSelector((state) => state);
  const dispatch = useDispatch();

  const buttonConfigs = [
    { id: "deposit", label: "DEPOSIT", action: () => dispatch(deposit(10)) },
    { id: "withdraw", label: "WITHDRAW", action: () => dispatch(withdraw(5)) }
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/history" element={<History />} />
      </Routes>

      <div>
        <h1 id="output">Balance: {balance}</h1>
        {buttonConfigs.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            className="button-spacing"
            onClick={button.action}
            style={{ margin: '5px' }}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
