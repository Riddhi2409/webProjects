import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {useNavigate} from "react-router-dom"
import jwt_decoder from 'jwt-decode'

import sharevideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import {client} from '../client'

const Login = () => {
  const navigate=useNavigate();
  const responseGoogle = (response) => {
    const decoded=jwt_decoder(response.credential)
    localStorage.setItem('user', JSON.stringify(decoded));
    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <div className="flex flex-col h-screen justify-start items-center">
      <div className="w-full h-full relative  ">
        <video
          src={sharevideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="py-5">
          <img src={logo} width='230px'/>
        </div>
        <div>
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={responseGoogle}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
