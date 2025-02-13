

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const axiosPublic = UseAxiosPublic();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser , updateUserProfile} = useContext(AuthContext);
  const navigate  = useNavigate();


  const onSubmit = async (data) => {
    try {
        console.log(data);
        const result = await createUser(data.email, data.password);
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name,data.photoUrl)
        .then(() => {
          console.log('user Profile info updated')
          // user data post database:
          const userInfo = {
            name : data.name,
            email: data.email
          }
          axiosPublic.post('/users',userInfo)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              console.log('user added to the database successfully')
              reset();
              Swal.fire({
                      title: "User created Successfully!",
                      icon: "success",
                      draggable: true
                    });
                    navigate('/')
            }
          })
          // reset();
          // Swal.fire({
          //         title: "User created Successfully!",
          //         icon: "success",
          //         draggable: true
          //       });
          //       navigate('/')
        })
        .catch(error => console.log(error))
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
  return (  
    <>
      <Helmet>
        <title>Master Cafe | Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col flex md:flex-row md:w-8/12 mx-auto">
          <div className="text-center lg:text-left">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <h1 className="text-4xl pt-10 font-bold p-5 text-center">
              Register now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-600 p-1">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoUrl && <span className="text-red-600 p-1">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600 p-1">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                    pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/,
                  })}
                  placeholder="Enter password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <span className="text-red-600 p-1">Password is required</span>}
                {errors.password?.type === 'minLength' && <span className="text-red-600 p-1">Password must be 6 character</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600 p-1">Password must contain one special character</span>}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center p-5 pb-10">
              Already registered? Go to <Link className="text-blue-600 font-semibold" to="/login">Login</Link>
            </p>
            <div className='mx-auto w-[90%]'>
              <SocialLogin></SocialLogin>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register; 
