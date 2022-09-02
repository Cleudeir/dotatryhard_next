import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from 'react';

function Header() {
  const [useValue, setValue]=useState('');
  async function add() {
    await fetch(`/api/add/${useValue}`);
    window.location.href = `/matches/${useValue}`;
  }
  return (
    <div>
      <Navbar key={'sm'} bg="light" expand={'sm'} className="mb-3">
        <Container fluid >
          <Navbar.Brand href="/">
           Dota Try Hard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Dota Try Hard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Ranking</Nav.Link>
                <NavDropdown
                  title="Regions"
                  id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                >
                  <NavDropdown.Item href="/?region=south_america">South America</NavDropdown.Item>
                  <NavDropdown.Item href="/?region=north_america">North America</NavDropdown.Item>
                  <NavDropdown.Item href="/?region=europe">Europe</NavDropdown.Item>
                  <NavDropdown.Item href="/?region=china">China</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">World</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="number"
                  placeholder="Account_id"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=>setValue(e.target.value)}
                />
                <Button onClick={add}variant="outline-success">Add/Update</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
