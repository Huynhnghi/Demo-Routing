import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
