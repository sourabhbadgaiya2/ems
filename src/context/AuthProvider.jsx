import { createContext, useState, useEffect } from "react";
import { getlocalstorage, setlocalstorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setlocalstorage();
    const { employees, admin } = getlocalstorage();
    setEmployees(employees);
  }, []);

  const handleLogin = (email, password) => {
    const { admin } = getlocalstorage();

    if (
      admin.find((user) => user.email === email && user.password === password)
    ) {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser({ role: "employee", data: employee });
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials!");
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
