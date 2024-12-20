import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  const adminData = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className='h-screen w-full p-10'>
      <Header data={adminData} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
