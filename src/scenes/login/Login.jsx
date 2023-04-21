import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  return (
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
              <Button
                style={{
                  backgroundColor: "#000",
                  width: "100%",
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "none",
                  fontWeight: "700",
                  borderRadius: "10px",
                }}
              >
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
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
  );
};

export default Login;
