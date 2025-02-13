

import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signInUser(email, password); // use await here
      const user = result.user;
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
        draggable: true
      });
      navigate(from, {replace: true})
      console.log(user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // Handle Captcha Validation
  const handleValidateCaptcha = (e) => {
    // const user_captcha_value = captchaRef.current.value;
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Master Cafe | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col flex md:flex-row md:w-8/12 mx-auto">
          <div className="text-center lg:text-left">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <h1 className="text-4xl pt-10 font-bold p-5 text-center">
              Login now!
            </h1>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Enter the text"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline"
                  disabled={disabled}
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center p-5 pb-10 ">
              New here? Please <Link className="text-blue-600 font-semibold" to={'/register'}>Register</Link>
            </p>
            <div className='mx-auto w-[90%]'>
              <SocialLogin></SocialLogin>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
