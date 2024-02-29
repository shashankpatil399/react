// import React from 'react';
// import { useRoutes } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute'; 
// import Login from './pages/Login'; 
// import Forum from './pages/Forum';
// import Update from './pages/Update';  
// import Register from './pages/Register'; 
// import { Provider } from 'react-redux';


// const routes = [
//   {
//     path: '/',
//     element: <ProtectedRoute element={<Forum/>}/>,
//     children: [
//       { path: 'Forum', element: <Forum /> }
//     ]
//   },
//   { path: 'Update/:id',   element: <Update /> },
//   { path: 'Login',    element: <Login /> },
//   { path: 'Register', element: <Register /> },

// ];

// const Router = () => {
//   const routing = useRoutes(routes);

//   return routing;
// };

// export default Router;



import React from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login';
import Forum from './pages/Forum';
import Update from './pages/Update';
import Register from './pages/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
const routes = [
  {
    path: '/',
    element: <ProtectedRoute element={<Forum />} />,
    children: [
      { path: 'Forum', element: <Forum /> }
    ]
  },
  { path: 'Update/:id', element: <Update /> },
  { path: 'Login', element: <Login /> },
  { path: 'Register', element: <Register /> },
];

const Router = () => {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      {routing}
    </Provider>
  );
};

export default Router;
