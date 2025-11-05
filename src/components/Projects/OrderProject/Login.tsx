import { useState } from "react";
import email_icon from "../../../assets/email.png";
import password_icon from "../../../assets/password.png";
import "./Login.css";

interface LoginProps {
  onLogin: (email: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    if (email === "admin@nuclieos.com" && password === "admin") {
      onLogin(email);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="you@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="submit-container">
        <button className="submit" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
