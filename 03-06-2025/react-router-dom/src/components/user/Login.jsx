import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    let id = true;
    let password = false;
    if (id && password) {
      navigate("/dashboard");
    }
  }

  return <button onClick={handleLogin}>Login</button>;
}
