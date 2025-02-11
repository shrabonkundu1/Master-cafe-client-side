import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form  = e.target;
        const email  = form.email.value;
        const password = form.password.value;
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
             <div className="hero-content flex-col flex md:flex-row md:w-8/12 mx-auto">
               <div className="text-center lg:text-left">
                 <p className="py-6">
                   Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                   excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                   a id nisi.
                 </p>
               </div>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                 <h1 className="text-4xl pt-10 font-bold p-5 text-center">
                   Register now!
                 </h1>
                 <form className="card-body" onSubmit={handleRegister}>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Name</span>
                     </label>
                     <input
                       type="name"
                       name="name"
                       placeholder="Enter your name"
                       className="input input-bordered"
                       
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input
                       type="email"
                       name="email"
                       placeholder="Enter your email"
                       className="input input-bordered"
                       
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Password</span>
                     </label>
                     <input
                       type="password"
                       name="password"
                       placeholder="Enter password"
                       className="input input-bordered"
                        
                     />
                    
                   </div>
                   {/* <div className="form-control">
                     <label className="label">
                       <LoadCanvasTemplate />
                     </label>
                     <input
                       type="text"
                       name="captcha"
                       ref={captchaRef} 
                       placeholder="Enter the text"
                       className="input input-bordered"
                       required
                     />
                     <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs py-5">Validate</button>
                   </div> */}
                   <div className="form-control mt-6">
                     <input
                       type="submit"
                       className="btn btn-outline"
                    //    disabled={disabled}
                       value="Register"
                       name=""
                       id=""
                     />
                   </div>
                 </form>
                 <p className='text-center p-5 pb-10 '>Allready registered? go to <Link className='text-blue-600 font-semibold' to={'/login'}>Login</Link></p>
               </div>
             </div>
           </div>
    );
};

export default Register;