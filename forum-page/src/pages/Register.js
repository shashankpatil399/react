import { connect } from 'react-redux';

import React, { useState } from 'react';
import axios from 'axios';

import { registerRequest, registerSuccess, registerFailure } from '../redux/action';


function Register({

registerRequest,
registerSuccess,
registerFailure 

}){
  const [userData, setUserData] = useState({
  
    name: '',
    email: '',
    mobile: '',
    father: '',
    image: '',
    password: ''
    
  });
  console.log("user detail",userData);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    father: '',
    password: '',
    image:''
});



const handleChange = (event) => {
  const { name, value, type, files } = event.target;
  if (type === 'file') {
    setUserData((prev) => ({ ...prev, [name]: files[0] }));
  } else {
    setUserData((prev) => ({ ...prev, [name]: value }));
  }
  setErrors((prev) => ({ ...prev, [name]: ""}));
};


 

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!userData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email.trim())) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!userData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(userData.mobile.trim())) {
      newErrors.mobile = 'Invalid mobile number';
      isValid = false;
    }

    if (!userData.father.trim()) {
      newErrors.father = 'Father\'s name is required';
      isValid = false;
    }

    if (!userData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (userData.password.trim().length < 8) {
      newErrors.password = 'Password should be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData =new FormData();
    formData.append("name",userData.name)
    formData.append("email",userData.email)
    formData.append("mobile",userData.mobile)
    formData.append("father",userData.father)
    formData.append("image",userData.image)
    formData.append("password",userData.password)


    if (validateForm()) {
      try {

        registerRequest();
        const url = 'http://localhost:8010/addUser'
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': "multipart/form-data"
          },
        });

        if (response.data.status === 200) {
          registerSuccess();
          console.log('User registered successfully');
        }
      } catch (error) {
        registerFailure();  
        console.log('Error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>


      <label>
        Name:
        <input type="text" name="name" value={FormData.name} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.name}</span>
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={FormData.email} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </label>
      <br />
      <label>
        Mobile No.:
        <input type="text" name="mobile" value={FormData.mobile} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.mobile}</span>
      </label>
      <br />
      <label>
        Father Name:
        <input type="text" name="father" value={FormData.father} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.father}</span>
      </label>
      <br />
      <label>
       Image:
        <input type="file" name='image' onChange={handleChange} />
      
      </label>

<br/>

      <label>
       Password:
        <input type="password" name="password" value={FormData.password} onChange={handleChange} />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  registerRequest,
  registerSuccess,
  registerFailure
})(Register);






// import React, { useState } from 'react';
// import axios from 'axios';
// // import { useForm } from "react-hook-form";

// function Register() {

  
//   const [userData, setUserData] = useState({
//     name: '',
//     email: ' ',
//     mobile : "",
//     father : "",
//     password : ""

//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const url = 'http://localhost:8010/addUser';
//       const response = await axios.post(url, userData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.data.status === 200) {
//         console.log('User registered successfully');
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name='name' value={userData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name='email' value={userData.email} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Mobile No.:
//         <input type="text"  name='mobile' value={userData.mobile} onChange={handleChange} />
//       </label>
//       <br />

//       <label>
//         Father Name:
//         <input type="text" name='father'  value={userData.father} onChange={handleChange} />
//       </label>
//       <br />

//       <label>
//         Password:
//         <input type="text" name='password'  value={userData.password} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Register;





// / import React,{ useState} from 'react'
//   import axios  from "axios"


//   function Register() {
//   const [userData,setUserData] = useState({
//         name : "",
//         email : ""
//      })
 
//   }
//      const handleChange = async(event)=> async (event)=>{
//       if (event.target.name == 'email') {
//           setUserData((prev)=>({...prev,email:event.target.value }))
//       }

//       else if  (event.target.name == 'name') {
//         setUserData((prev)=>({...prev,name:event.target.value }))
     
    
//   }

//   const handleSubmit = () =>{
//     try {

//       const url = "http://localhost:8080/addUser"
//       axios({method:"POST",url:url,headers:{
//         'Content-Type' : 'application/json'
//       },data:json.stringify(userData)}).then((res) =>{
//         console.log("res",res)
//         if(res.data.status === 200){
//           console.log("User register successfully")
//         }
//       }).catch((error) => {
//         console.log("error",error)
//       })
      
//     } catch (error) {
//       console.log("error",error)
    
//   }
//     return (
//     <form>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit"  onSubmit={handleSubmit}>Submit</button>
//     </form>
//   );

//     }



// export default Register;



//   //   const [userName, setName] = useState("")
//   //   const [mobile, setMobile] = useState("")
//   //   const [email, setEmail] = useState("")
//   //   const [password, setPassword] = useState("")

//   //   const handleChange = (event) => {

//   //     if(event.target.name === "userName"){
//   //       setName(event.target.value)
//   //   }

//   //     if(event.target.name === "mobile"){
//   //       console.log(mobile)
//   //       setMobile(event.target.value)
//   //   }

//   //   if(event.target.name === "email"){
//   //     console.log(email)
//   //     setEmail(event.target.value)
//   // }

//   //   if(event.target.name === "password"){
//   //     console.log(password)
//   //     setPassword(event.target.value)
//   // }
   
//   // }


// import React,{ useState} from 'react'
//   import axios  from "axios"


//   function Register() {
//   const [userData,setUserData] = useState({
//         name : "",
//         email : ""
//      })
 
//   }
//      const handleChange = async(event)=> async (event)=>{
//       if (event.target.name == 'email') {
//           setUserData((prev)=>({...prev,email:event.target.value }))
//       }

//       else if  (event.target.name == 'name') {
//         setUserData((prev)=>({...prev,name:event.target.value }))
     
     
//   }}

//   const handleSubmit = () =>{
//     try {

//       const url = "http://localhost:8080/addUser"
//       axios({method:"POST",url:url,headers:{
//         'Content-Type' : 'application/json'
//       },data:json.stringify(userData)}).then((res) =>{
//         console.log("res",res)
//         if(res.data.status === 200){
//           console.log("User register successfully")
//         }
//       }).catch((error) => {
//         console.log("error",error)
//       })
      
//     } catch (error) {
//       console.log("error",error)
    
//   }




//     return (
//     <form>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit"  onSubmit={handleSubmit}>Submit</button>
//     </form>
//   );

//     }
// export default Register;






//   const handleSubmit = () =>{
//     try {

//       const url = "http://localhost:8010/addUser"
//       axios({method:"POST",url:url,data:{userName:userName,mobile:mobile,email:email,password:password}}).then((res) =>{
//         console.log("res",res)
//         if(res.data.status === 200){
//           console.log("User register successfully")
//         }
//       }).catch((error) => {
//         console.log("error",error)
//       })
      
//     } catch (error) {
//       console.log("error",error)
//     }
//   }


  
 



//     return ( 
    
//     <main className='details'>
//     <form id='detailsForm'
//     onSubmit={handleSubmit}
//     >
    
   


      
//         <label htmlFor='mobile'className="form-label">Mobile no.</label>
//         <input
//             type='text'
//             name='mobile'
//             id='mobile'
//             className="form-control"
//             value={mobile}
//             onChange={handleChange}
//         />
          
          
//           <label htmlFor='email'className="form-label">Email Address</label>
//         <input
//             type='text'
//             name='email'
//             id='email'
//             className="form-control"
//             value={email}
//             onChange={handleChange}
//         />



         
//     <label 
//                                         htmlFor="password"
//                                         className="form-label">Password
//                                     </label>
//                                     <input 
//                                         type="password"
//                                         className="form-control"
//                                         id="password"
//                                         name="password"
//                                         value={password}
//                                         onChange={handleChange}
//                                     />

//         <label htmlFor='userName'className="form-label">Name</label>

//         <input
//             type='string'
//             name='userName'
//             id='userName'
//             value={userName}
//             onChange={handleChange}
//         />
//         <button className='submitBtn' type="submit"  >Submit   </button>
       
//     </form>
// </main>
//  )}      
   
// export default Register;






// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () =>{
//     console.log("sucess");
//         try {
    
//           const url = "http://localhost:8010/addUser"
//           const data1= axios({method:"POST",url:url,data:{name,email}}).then((res) =>{
//             console.log("res",res)
//             if(res.data.status === 200){
//               res.send (data1)
//               console.log("User register successfully")
//               alert("succeess")
//             }
//           }).catch((error) => {
//             console.log("error",error)
//             alert("error")
//           })
          
//         } catch (error) {
//           console.log("error",error)
//           alert("error 2")
//         }
//       }
  // }
