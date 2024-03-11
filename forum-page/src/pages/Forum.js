// import { useParams } from 'react-router-dom';
import React, { useEffect } from "react";
import { Link} from 'react-router-dom';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
import "./forum.css";

export default function Forum() {
 
  const [list, setList] = React.useState([]);

    useEffect(() => {
       
        const isAuthenticated = localStorage.getItem('token') !== null;

        if (!isAuthenticated) {
          
            return <Navigate to="/Login" />;
        }

        Axios.get('http://localhost:8010/get-all-user')
            .then((res) => setList(res.data));
    }, []);

console.log(' List ', list);

  // let { id } = useParams();
  const handleSubmit = async (event) => {
    console.log(event.target.value);
    event.preventDefault();
    try {
      const url = `http://localhost:8010/deleteUser/${event.target.value}`;
      const response = await Axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("res", response);
      if (response.data.status === 200) {
        console.log('User deleted');
        window.location.reload(); 

      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


    return (
        <div>
            <table>
                <thead>
                    <tr>
                      <th>image</th>
                    <th>Name</th>
                      <th>Email</th>
                        <th>Password</th>
                      <th>Mobile</th>
                      <th>Update</th>
                      <th>delete</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, key) => {
                        return (
                            <tr key={key}>
                              <td>{value.image && (
                  <img
                    src={`http://localhost:8010/upload/images/${value.image}`}
                    alt={value.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td>{value.mobile}</td>
                               
                                <td >
 <Link to={`/update/${value._id}`} > Update</Link>
                                   </td>
                                   <td >

                               <button value={value._id}  onClick={
  handleSubmit
}>Delete</button>


                                   </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
// import React, { useEffect } from "react";
// import {Link } from "react-router-dom"
// import axios from 'axios';
// import { useParams } from 'react-router-dom'

// // import './Forum.css'

// export default function App() {
   
//   const [list, setList] = React.useState([]);
      
//       useEffect(()=> {  
       
//       axios.get('http://localhost:8010/get-all-user')
//         .then((res)=> setList(res.data));
    
//     }, []);
//     let {id}  = useParams();

//   const handleSubmit = async (id)=> {
//     try {
//       const url = `http://localhost:8010/delete/${id}`;
//       const response = await axios.delete(url, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       console.log("res", response);
//       if (response.data.status === 200) {
//         console.log('User deleted');
      
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };
// return (
//      <div>
//         <h1>hello Admin</h1>
//           <p>i live in this world</p>
//            <table >
//              <thead>
//                <tr>
               
//                   <th>Name</th>
//                   <th>email</th>
//                   <th>mobile</th>
//                   <th>Type</th>
//                   <th>Update Data</th>
//                   <th>Delete Data</th>
//                </tr>
//              </thead>
//            <tbody>
//           {list.map((value, key) => {
//  return (
//         <tr key={key}>
//              <td>{value.id}</td>
//             <td>{value.name}</td>
//                 <td>{value.email}</td>
//                 <td>{value.mobile}</td>
//                 <td>{value.type}</td>
            
//              <td> <Link to ={`/Update/${value._id}`}>Edit </Link>  </td>
//              / <td><button id={value._id} data={value}  >Delete</button></td> /
//             / // <button onClick={() => handleSubmit(value.id)}>Delete</button> 
//           / //  <button onClick={() => handleSubmit(value._id)}>Delete</button> 


// <button onClick={() => {
//   console.log(`Deleting user with ID:${value._id}`);
//   handleSubmit(value._id);
// }}>Delete</button>
//            </tr>
         
//             );
//         //    console.log(key)
// ;
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }