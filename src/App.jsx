import  { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
//import { getlocalstorage, setlocalstorage } from "./utils/localStorage";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); 
  const [loggedInUserData, setLoggedInUserData] = useState(null); 
  const authData = useContext(AuthContext); 
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser.role);
      if (storedUser.role === "employee") {
        setLoggedInUserData(storedUser.data); 
      }

    }

  }, []);

  //localStorage.clear()
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin"); 
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password );
      if (employee) {
        setUser("employee"); 
        setLoggedInUserData(employee); 
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee }));
      } 
      // else {
      //   alert("Invalid Credentials");
      // }
    } 
    else {
      alert("Invalid Credentials");
    }
  };


  return (
    <div>
      {!user ? ( <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
      {/* <EmployeeDashboard/> */}
    </div>
  );
};

export default App;

// import React, { useContext, useEffect } from "react";
// import Login from "./components/Auth/Login";
// import { getlocalstorage, setlocalstorage } from "./utils/localStorage";
// import { useState } from "react";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {

//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const authData = useContext(AuthContext)
//   console.log(authData.employees.find((e) => email == e.email && password == e.password) )

//   useEffect(() => {
//     if (authData) {
//       const loggedInUser = localStorage.getItem('loggedInUser')
//       if (loggedInUser) {
//         setUser(loggedInUser.role)
//       }
//     }


//   }, [authData]);


//   const handleLogin = (email, password) => {
//     if (email == "admin@me.com" && password == "123") {
//       setUser({role : 'admin'});
//       localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
//     } else if (authData)  {  
//        const employee = authData.employees.find((e) => email == e.email && password == e.password)
//        if (employee){
//          setUser({role:'employee'});
//          setLoggedInUserData(employee)
//        }
//       localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

 

  
//   return (
//     <div>
//       <>
//         {!user ? <Login handleLogin={handleLogin} /> : ""}
//         {user == 'admin' ? <AdminDashboard/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
//         <Login/> 
//         <EmployeeDashboard/>
//         <AdminDashboard/>
//       </>
//     </div>
//   );
// };

// export default App;
