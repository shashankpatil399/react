import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  let { id } = useParams();
  const [update, setUpdate] = useState({
   
    name: '',
    email: '',
    mobile: '',
    father: '',
    password: ''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
       const response= axios.get(`http://localhost:8010/getUserById/${id}`)
        .then(res => setUpdate({...update,name:res.data.name,email:res.data.email,
          mobile:res.data.mobile,father:res.data.father,password:res.data.password}))

.catch(err => console.log(err))
console.log(response);
        },[]);
       const Navigate =useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response= axios.put(`http://localhost:8010/Update/${id}`,update)
    .then(res => {
      Navigate('/Forum');
    })
.catch(err => console.log(err))
console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={update.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={update.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mobile No.:
        <input type="text" name="mobile" value={update.mobile} onChange={handleChange} />
      </label>
      <br />
      <label>
        Father Name:
        <input type="text" name="father" value={update.father} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={update.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default Update;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function Update() {

//   const [userData, setUserData] = useState({

//     name: '',
//     email: '',
//     mobile: '',
//     father: '',
//     password: ''
//   });


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
  
//   };
//   let {id}  = useParams();


// const handleSubmit = (event) => {
//     event.preventDefault();
//     try {

//       const url = `http://localhost:8010/Update/${id}`
//       axios({ method:"PUT", url:url, userData }).then((res) => {
//           console.log("ressss",res)
//           if(res.data.status === 200){
//               console.log("data update successfully")
//           }
//       }).catch((err) => {
//           console.log("err--",err)
//       })
//     } catch (error) {

//        console.log("error",error)
//     }
//   }
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={userData.name} onChange={handleChange} />
       
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={userData.email} onChange={handleChange} />
       
//       </label>
//       <br />
//       <label>
//         Mobile No.:
//         <input type="text" name="mobile" value={userData.mobile} onChange={handleChange} />

//       </label>
//       <br />
//       <label>
//         Father Name:
//         <input type="text" name="father" value={userData.father} onChange={handleChange} />
    
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" value={userData.password} onChange={handleChange} />
      
//       </label>
//       <br />
//       <button type="submit">Update</button>
//     </form>
//   );
// }

// export default Update;


//   const handleSubmit = async (event) => {
//     event.preventDefault();

   
//       try {
//         const url = `http://localhost:8010/Update/${id}`;
//         const response = await axios.put(url, userData, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
          
//         });
//         console.log("res",response );
//         if (response.data.status === 200) {
//           console.log('User update');
//         }
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     }