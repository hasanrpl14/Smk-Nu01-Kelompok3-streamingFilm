// import React from 'react'

// import loginImg from '../assets/login.jpg'

export default function Login() {
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-red-600 shadow-lg shadow-red-400/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>
                <a href="home">SIGIN</a>
                </button>
                <div className="text-white">
                <span>Dont have an account yes?</span><a href="daftar">Sign up</a>
                </div>
                
            </form>
        </div>
    </div>
  )
}



// const Lo = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//         <div className="bg-blue-400 w-96 h-96">
//             <h1 className="text-white text-center mt-9 text-3xl font-semibold">Login</h1>
//             <div className="my-4 flex flex-col items-center justify-center text-black">
//                 <label className="text-center" placeholder="Isi username...">Username</label>
//                 <input type="text" className="w-56 text-center" />
//                 <label htmlFor="">Password</label>
//                 <input type="password" />
//                 <button className="btn btn-outline btn-error">Error</button>
//             </div>
//         </div>
//     </div>
// //     <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
// //   <div className="hero-overlay bg-opacity-60"></div>
// //   <div className="hero-content text-center text-neutral-content">
// //     <div className="max-w-md">
// //       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
// //       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
// //       <button className="btn btn-primary">Get Started</button>
// //     </div>
// //   </div>
// // </div>
//   )
// }

// export default Lo