"use client";
import React, { useEffect, useState } from "react";
import avatar from '../../../../public/img/img_avatar3.png'
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";
import { tokenAtom, userAtom } from "@/store";
import jwt_decode from 'jwt-decode'
import setAuthToken from "@/actions/setAuthToken";

const Header = () => {
  const [token, setToken] = useAtom<string>(tokenAtom);
  const [user, setUser] = useAtom<string>(userAtom);

  
  
  const userNav = !token
  ? [
    <Link key={0} href="/login">Login</Link>,
    <Link key={1} href="/register">Register</Link>,
  ]
  : [
    <div key={2} className="px-3 flex items-center"><Image src={avatar} alt="User Avatar"  className="h-8 w-auto rounded-full"/><p className="pl-2">{user}</p></div>,
    <Link key={3} href="/" onClick={()=> handleLogout()}>Logout</Link>,
  ];
  
  const handleLogout =()=> {
    localStorage.removeItem('userToken');
    setToken('');
    setUser('');
    setAuthToken('');
  }
  
  const localToken: string = localStorage.userToken;

  if(localStorage.userToken){
    setToken(localStorage.userToken);
    setAuthToken(localStorage.userToken);
    
    const decoded: {name: string, email: string, exp: number } = jwt_decode(localStorage.userToken);
    setUser(decoded.name);
    // const currentTime = Date.now()/1000;
    // if(decoded.exp < currentTime){
    //   handleLogout();
    //   window.location.href='/login'
    // }
  } 
  
  return (
    <div className="h-[100px] px-20 mt-6 text-white">
      <div className="h-12  flex justify-end items-center my-1 px-7">
        <ul className="flex justify-end items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href={localToken? '/dashboard' : ''} onClick={() => {if(!localToken) alert('You must to Login!')}}>Dashboard</Link>
          {userNav}
        </ul>
      </div>
      <hr className="" />
      {/* <div className="fixed w-[100%] right-0 ">
        <div className="bg-white w-80 text-center p-[50px] rounded-3xl text-xl text-red-500 m-auto ">You Must Login!</div>
      </div> */}
    </div>
  );
};

export default Header;
