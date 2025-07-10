import React from "react";
import { Container, Nav, Navbar, Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  let user = {
    name: "nitin",
    role: "recruiter",
  };
  user = false;
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand className="display-1 fs-1">
              Job <span className="text-danger">Portal</span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/*links navigation*/}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3 fw-medium">
              {user && user.role === "recruiter" ? (
                <>
                  <Nav.Link to={""}>Companies</Nav.Link>
                  <Nav.Link to={""}>Jobs</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link to={""}>Home</Nav.Link>
                  <Nav.Link to={""}>Jobs</Nav.Link>
                  <Nav.Link to={""}>Browse</Nav.Link>
                </>
              )}
            </Nav>

            {!user ? (
              <>
                <button>Login</button>
                <button>
                  <Link to={"/signup"}>Sign UP</Link>
                </button>
              </>
            ) : (
              <>
                <>
                  <Dropdown>
                    <Dropdown.Toggle variant="link" className="p-0 border-0">
                      <Image
                        src={
                          "https://th.bing.com/th?id=ORMS.d0cbfecd5b58e76aed2fd46e5177728a&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.375&p=0"
                        }
                        roundedCircle
                        width={40}
                        height={40}
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-3" style={{ width: "5rem" }}>
                      <div className="d-flex align-item-center justify-content-center mb-2">
                        {user.name}
                      </div>
                      <div className="d-flex align-item-center justify-content-center mb-2">
                        {user.role}
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
