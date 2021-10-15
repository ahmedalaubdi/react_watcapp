import "./login.scss";
import logo from "../../img/netflix.png";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign in</button>
          <span>
            New to netflix? <b>Sign up now</b>
          </span>
          <small>
            This page is protected by google reCapture to ensure you're not a
            bot <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
