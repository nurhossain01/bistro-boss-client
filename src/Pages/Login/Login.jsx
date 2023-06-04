import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { Helmet } from 'react-helmet-async';




const Login = () => {

  const { userSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const captchaRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        form.reset();
      })
  }


  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true)
    }
  }


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/3 pl-4 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-1/3 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h3 className='text-center font-bold text-xl'>Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" placeholder="type the text above" ref={captchaRef} name='captcha' className="input input-bordered" />
                <h3 onClick={handleValidateCaptcha} className="btn mt-2 btn-xs">Validate</h3>
              </div>
              <p className='text-rose-400 text-center'>{error}</p>
              <div className="form-control mt-6">
                <button disabled={false} type='submit' className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="text-sm text-center sm:px-6 text-red-500">Don't have an account?
                  <Link to='/register' rel="noopener noreferrer" href="#" className="underline text-violet-600">Sign up</Link>
                </p>
              </div>
              <SocialMediaLogin></SocialMediaLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;