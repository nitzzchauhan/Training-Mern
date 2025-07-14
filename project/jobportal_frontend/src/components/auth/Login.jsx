import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomNavbar from "../shared/Navbar";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";
import { useNavigate } from "react-router-dom";
import Toaster from "../ui/Toast.jsx";

function Login() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [logInput, setLogInput] = useState({
    password: "",
    email: "",
    role: "",
  });

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    setLogInput({ ...logInput, [e.target.name]: e.target.value });
    console.log(logInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // data bhejunga axios
      // http://localhost:3000/api/user
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        logInput,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      console.log(response);

      // failure
      // setShowToast(true);

      // success user created
      if (response.data.success) {
        localStorage.setItem("access_token", response.data.token);
        setShowToast(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        // ✅ JSON message from backend is here
        setShowToast(true);

        console.log("Error Message:", error.response.data.message);
        console.log("Full error response:", error.response.data);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  };
  return (
    <>
      {/* Navbar */}
      <CustomNavbar />
      <div className="container">
        <h1 className="display-3 text-muted text-center">Log In</h1>
        <Form
          onSubmit={handleSubmit}
          className="my-5 mx-auto"
          style={{ width: "50%" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="email"
              autoComplete="off"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="password"
              autoComplete="off"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              onChange={handleOnChange}
              aria-label="Default select example"
            >
              <option>Role</option>
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 text-muted">
            <Form.Check
              type="checkbox"
              label="I agree with all Terms and Conditions"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Toaster show={showToast} onClose={() => setShowToast(false)} />
      </div>
    </>
  );
}

export default Login;
