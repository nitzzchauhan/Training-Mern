import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomNavbar from "./shared/Navbar";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function Dashboard() {
  const userDetails = useSelector((state) => state.auth.user);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...userDetails });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Here, you'd dispatch an action to update user data in Redux or send to backend
    console.log("Updated data to be saved:", formData);
    setEditMode(false);
  };

  return (
    <>
      <CustomNavbar />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow rounded-4 border-0">
              <Card.Body className="p-4">
                <div className="d-flex flex-column align-items-center mb-4">
                  <img
                    src={userDetails?.profile}
                    alt="Profile"
                    className="rounded-circle"
                    width={120}
                    height={120}
                  />
                  <h4 className="mt-3 fw-bold">Recruiter Dashboard</h4>
                </div>

                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3}>Full Name</Form.Label>
                    <Col sm={9}>
                      {editMode ? (
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext fw-semibold">{userDetails.fullName}</p>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3}>Email</Form.Label>
                    <Col sm={9}>
                      {editMode ? (
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext fw-semibold">{userDetails.email}</p>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3}>Phone</Form.Label>
                    <Col sm={9}>
                      {editMode ? (
                        <Form.Control
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      ) : (
                        <p className="form-control-plaintext fw-semibold">{userDetails.phoneNumber}</p>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm={3}>Role</Form.Label>
                    <Col sm={9}>
                      <p className="form-control-plaintext fw-semibold text-capitalize">
                        {userDetails.role}
                      </p>
                    </Col>
                  </Form.Group>

                  <div className="text-center">
                    {editMode ? (
                      <>
                        <Button variant="success" className="me-2" onClick={handleSave}>
                          Save Changes
                        </Button>
                        <Button variant="secondary" onClick={() => setEditMode(false)}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button variant="primary" onClick={() => setEditMode(true)}>
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
