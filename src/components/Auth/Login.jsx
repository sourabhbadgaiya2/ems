// import { useState } from 'react'

// const Login = ({handleLogin}) => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()
//         handleLogin(email, password)
//         setEmail('')
//         setPassword('')

//     }

//   return ( 
//    <div className='flex h-screen w-screen items-center justify-center' >
//     <div className='border-2 border-emerald-600 p-20'>
//         <form 
//         onSubmit={(e) => {
//             submitHandler(e)
//         }}
//         className='flex flex-col items-center justify-center'
//         >
//             <input 
//             value={email}
//             onChange={(e)=> {
//                setEmail(e.target.value)
//             }}
//             required 
//             className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//             />
//             <input 
//             value={password}
//             onChange={(e) => {
//                 setPassword(e.target.value)
//             }}
//             required 
//             className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
//             <button className='mt-5 text-white border-none outline-none bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white' >Log In</button>
//         </form>    
//     </div> 
//    </div>

//   )
// }

// export default Login


import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="mt-5 text-white border-none outline-none bg-emerald-600 py-3 px-5 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;