import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function GridBiz() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="top-container">
        <header className="showcase">
          <h1>You web presence</h1>
          <p>More info...</p>
          <a href="#" class="btn">
            Read More
          </a>
        </header>
<div className="top-box top-box-a">
<h4>Membership</h4>
<p className="price">$199/mo</p>
<a href="" class="btn">Buy but</a>

</div>
      </section>
    </div>
  );
}

export default GridBiz;
