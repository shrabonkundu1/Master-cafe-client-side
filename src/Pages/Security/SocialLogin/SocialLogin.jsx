import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                name : result.user?.displayName,
                email : result.user?.email
            };
            axiosPublic.post('/users', userInfo) 
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full mx-auto py-10'>
                <button onClick={handleGoogleSignIn} className='btn p-8 btn-outline w-full'>Google Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;