const Header = ({ data }) => {
  const handleLogout = () => {
    // Clear local storage and reload the app
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{data.firstname}</span>
      </h1>
      <button
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
