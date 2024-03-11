import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginSuccess,loginFailure } from '../redux/reducer';
// import { response } from 'express';
function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
    navigate("/Forum")
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!loginData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // if (validateForm()) {
      try {
        const url = 'http://localhost:8010/Login';
        const response = await axios.post(url, loginData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
       dispatch(loginSuccess({token : response.data.token}));
          console.log('Login successful');
          // Save the token to local storage
          saveTokenToLocalStorage(response.data.token);
        } else {
       dispatch(loginFailure({error: "login failed"}));
          console.log('Invalid credentials or unexpected response status:', response.status);
        }
      } 
      catch (error) {
       dispatch(loginFailure({error: "login unsec"}));

        console.error('Error:', error);
      }
    // }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={loginData.email} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </label>
      <br />
 <button type="submit">Login</button>

<div>
<p><Link  to ="/Register"  > Register here</Link></p></div>
    </form>
  
  );
}
export default Login;


// Import statements
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// // Function to save token to local storage
// const saveTokenToLocalStorage = (token, navigate) => {
//   localStorage.setItem('token', token);
//   navigate('/forum'); // Use lowercase 'forum' based on your route definition
// };

// // Login component
// function Login() {
//   const navigate = useNavigate();
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoginData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = {};

//     if (!loginData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     }

//     if (!loginData.password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       try {
//         const url = 'http://localhost:8010/Login';
//         const response = await axios.post(url, loginData, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 200) {
//           console.log('Login successful');
//           // Save the token to local storage and navigate to the protected route
//           saveTokenToLocalStorage(response.data.token, navigate);
//         } else {
//           console.log('Invalid credentials or unexpected response status:', response.status);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* ... rest of your code ... */}
//     </form>
//   );
// }

// export default Login;
