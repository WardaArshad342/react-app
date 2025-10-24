import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="you@example.com" id="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" id="password" />
        </div>
      </div>

      <div className="submit-container">
        <button className="submit">Login</button>
      </div>
    </div>
  );
};

export default Login;
