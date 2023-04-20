import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  return (
    // <div className="main">
    <div className="container">
      {/* BOARD LOGO */}
      <div className="txt">
        <h3>Board.</h3>
      </div>
      {/* BOARD LOGO END*/}

      {/* LOGIN FORM  */}
      <div className="content-login">
        <div className="form-content">
          <h2>Sign In</h2>
          <span className="heading">Sign in to your account</span>

          {/* LOGIN WITH */}
          <div className="quick">
            <button className="loginBtn">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="loginBtn">
              <AiFillApple /> Sign in with Apple
            </button>
          </div>
          {/* LOGIN WITH END */}

          {/* FORM SECTION */}
          <form>
            <div className="inputBx">
              <label>Email address</label>
              <input type="email" name="" />
            </div>
            <div className="inputBx gap">
              <label>Password</label>
              <input type="password" name="" />
            </div>
            <div className="forgot gap">
              <p>Forgot password?</p>
            </div>
            <div className="inputBx gap">
              {/* <input
                type="submit"
                value="Sign In"
                name=""
                id="signin"
                onClick={() => (window.location.href = "/dashboard")}
              /> */}
              <Button>
                <Link to="/dashboard">
                  <span>Sign In</span>
                </Link>
              </Button>
            </div>
          </form>
          {/* FORM SECTION END */}

          <div className="account">
            <p>
              Don’t have an account? <span>Register here</span>
            </p>
          </div>
        </div>
      </div>
      {/* LOGIN FORM END */}
    </div>
    // </div>
  );
};

export default Login;
