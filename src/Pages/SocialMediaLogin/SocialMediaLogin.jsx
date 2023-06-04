import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const SocialMediaLogin = () => {
  const { googleSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSign(provider)
      .then((result) => {
        const user = result.user;
        const saveUser = { name:user.displayName, email:user.email, photo:user.photoURL };
        console.log(saveUser);
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(" social login data",data);
            if (data.insertedId) {
              
            }
          })
          navigate(from, { replace: true });
      }).catch((error) => {
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <div className='divider'>
       <h3 className='rounded-full cursor-pointer border-2 p-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></h3>
      </div>
    </div>
  );
};

export default SocialMediaLogin;