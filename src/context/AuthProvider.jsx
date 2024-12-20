// import { createContext, useState, useEffect } from "react";
// import { getlocalstorage, setlocalstorage } from "../utils/localStorage";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     setlocalstorage();
//     const { employees, admin } = getlocalstorage();
//     setUserData({ employees, admin });
//   }, []);

//   // const data = getlocalstorage()
//   // console.log(data)
//   return (
//     <div>
//       <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
//     </div>
//   );
// };

// export default AuthProvider;


import { createContext, useState, useEffect } from "react";
import { getlocalstorage, setlocalstorage } from "../utils/localStorage";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalstorage();
    const { employees, admin } = getlocalstorage();
    setUserData({ employees, admin });
  }, []);

  const handleLogin = (email, password) => {
    const { admin } = getlocalstorage();
    const user = admin.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      // Perform further actions, like setting user state
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <AuthContext.Provider value={{ userData, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
