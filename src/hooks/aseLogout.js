import React from 'react'
import useAuth from './useAuth'
import axios from '../api/axios';

const aseLogout = () => {
    const { setAuth } = useAuth();

    const logOut = async () => {
        setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            })
        } catch (error) {
            console.log(error);
        }
    };

    return logOut

}
  


export default aseLogout

