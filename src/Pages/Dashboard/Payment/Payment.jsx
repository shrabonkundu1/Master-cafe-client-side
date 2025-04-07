import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheakOutForm from './CheakOutForm';

// TODO : Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Pay and Eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakOutForm></CheakOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;