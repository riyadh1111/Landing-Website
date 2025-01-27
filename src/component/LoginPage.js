import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import Input from "./Input";
import LoginButton from "./LoginButton";
import { apiHandler } from "../assets/api";
import { endpoint } from "../assets/api/endpoint";
import { useDispatch } from "react-redux";
import { saveAuthToken, saveSuccessmsg } from "../store/store/Reducers/testSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BallTriangle, Circles, ColorRing, Hearts } from "react-loader-spinner";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|in|co\.in|co)$/;
    if (!emailPattern.test(userEmail)) {
      setFlag(true);
      toast.error("Invalid email address");
      return false;
    }
    if (userPass.length !== 8) {
      setFlag(true);
      toast.error("Password must be exactly 8 characters");
      return false;
    }
    return true;
  };

  const LoginSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const data = {
      email: userEmail,
      password: userPass,
    };
    const result = await apiHandler({
      url: endpoint.LOGIN,
      method: "POST",
      data: data,
    });
    
    if (result.data) {
      dispatch(saveAuthToken(result.data?.token));
      dispatch(saveSuccessmsg(result.data?.success));
      toast.success("Submit successful");
      // setLoading(false);
      navigate("/another");
    } else {
      setLoading(false);
      toast.error("Submit failed");
    }

    console.log("Result", result && result.data.token);
  };

  return (
    <>
      <div className="Login-Page">
        <div className="d-flex align-items-center justify-content-center">
          <div className="card">
            <div className="card-body Login-Inner-card">
              <div className="d-flex justify-content-center gap-2">
                <div className="Login_Page-Logo">
                  <SiGmail color="#9868ff" className="logo" />
                </div>
                <div>
                  <h5 className="card-title Heading">Materio</h5>
                </div>
              </div>
              <p className="card-text mt-3">
                <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
              </p>
              <p>Please sign in to your account and start the adventure</p>
              <Input
                flag={flag}
                errormsg="invalid email address"
                label="Email"
                placeholder="Email"
                type="email"
                onchange={(e) => setEmail(e.target.value)}
                value={userEmail}
              />
              <Input
                flag={flag}
                errormsg="invalid password"
                label="Password"
                placeholder="Password"
                type="password"
                onchange={(e) => setPass(e.target.value)}
                value={userPass}
              />

              <div className="d-flex justify-content-between align-items-center mb-4 pt-4">
                <div className="d-flex gap-2">
                  <input className="form-check-input" type="checkbox" id="rememberme" />
                  <label htmlFor="rememberme">Remember Me</label>
                </div>
                <div>
                  <a className="float-end mb-1 forgptLink">
                    <span onClick={() => navigate("/forget")}>Forgot Password?</span>
                  </a>
                </div>
              </div>
              <LoginButton onClick={LoginSubmit}>
                {/* {loading ? <>Loading...</> : <>Login</>} */}
              </LoginButton>
            </div>
          </div>
        </div>
        {loading ? (
               <div className="d-flex loadericon justify-content-center align-items-center position-fixed top-0 ">
               <Circles color="black" height={60} width={60} />
             </div>
        ) : null}
      </div>
      <div className="login-Page-Image">
        <div className="d-flex justify-content-between ps-5 pe-5 pb-5">
          <div className="left-Img">
            <img
              className="left-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree-3.png"
              alt=""
            />
          </div>
          <div className="right-img">
            <img
              className="right-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree.png"
              alt=""
            />
          </div>
          <div className="buynow">
            <a
              href="https://themeselection.com/item/materio-dashboard-pro-bootstrap/"
              target="blank"
              className="btn btn-danger btn-buynow"
            >
              Buy Now
            </a>
          </div>
        </div>
        <ToastContainer />
      </div>
      {/* <div className="d-flex loadericon justify-content-center align-items-center position-fixed top-0 ">
            <Circles color="black" height={60} width={60} />
          </div> */}
    </>
  );
};

export default LoginPage;
