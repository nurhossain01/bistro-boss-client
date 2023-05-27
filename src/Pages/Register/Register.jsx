import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
       
        const profile = {
          displayName: name,
          photoURL: photo
        }
        updateUser(profile)
          .then(() => {
          })
          .catch(error => { console.log(error) });
          navigate('/');
      })
      .catch(error => {
        console.log(error);
        form.reset()
      })
  }

  return (
    <div className=''>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/3 pl-4 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-600">
            <form onSubmit={handleSubmit} className="card-body">
              <h3 className='text-center font-bold text-white text-xl'>Register</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">User name</span>
                </label>
                <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="your email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" placeholder="your password" name='password' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo url</span>
                </label>
                <input type="url" placeholder="your photo url" name='photoURL' className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Sign up</button>
              </div>

              <div>
                <p className="text-sm text-center sm:px-6 dark:text-gray-500">Already have an account?
                  <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-purple-500">Sign in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;