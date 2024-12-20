import { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user ? (
        <Login />
      ) : user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={user.data} />
      )}
    </div>
  );
};

export default App;
