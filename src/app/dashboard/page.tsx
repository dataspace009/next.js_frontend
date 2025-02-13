"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { userAtom, profileAtom } from "@/store";
import axios from 'axios';

type ProfileState = {
  birthday: string,
  hometown: string,
  university: string,
  faculty: string,
  major: string,
  grade: string,
  skills: string
}

const Dashboard = () => {
  const [user, setUser] = useAtom<string>(userAtom)
  const [profile, setProfile]= useAtom<ProfileState>(profileAtom)

  if(!localStorage.userToken) window.location.href ='login';
  
  const getProfile = () => {
    axios.get('http://192.168.144.144:5000/api/profile')
      .then(res => {
        if(res.data.userProfile) setProfile(res.data.userProfile);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    if(!profile.birthday) getProfile();
  }, [])

  const handleDelete=()=> {
    axios.delete('http://192.168.144.144:5000/api/profile')
      .then(res => {
        if(res.data.success) {
          setProfile({
            birthday: '',
            hometown: '',
            university: '',
            faculty: '',
            major: '',
            grade: '',
            skills: ''
          });
          alert('successfully deleted');
        }        
          
      })
      .catch(err => console.log(err))
  }

  
  return (
    <div className="h-[80vh] ">
      <div className="space-x-6">
        <Link href={'dashboard/add'} className="text-xl text-white py-4 px-6 rounded-xl bg-blue-600" >{!profile.birthday? 'Add':'Change'} Your Profile</Link>
        {/* <Link href={'dashboard/change'} className="text-xl text-white py-4 px-6 rounded-xl bg-orange-600" >Change Your Profile</Link> */}
        <button className="text-xl text-white py-4 px-6 rounded-xl bg-rose-600" onClick={handleDelete} style={{display: `${!profile.birthday? 'none':''}`}}>Delete Your Profile</button>
        <Link href={'dashboard/all'} className="text-xl text-white py-4 px-6 rounded-xl bg-orange-600" >All Users</Link>
      </div>

      <h1 className="text-3xl text-white text-center mx-20 mt-32 mb-5">Your Information</h1>
      <div className="bg-slate-300 mx-28 p-20 text-xl flex flex-col items-center space-y-10 rounded-xl">
        <div className="flex space-x-5">
          <p className="w-60">Name: {user}</p>
          <p className="w-60">Birthday: {profile.birthday}</p>
          <p className="w-60">Home Town: {profile.hometown}</p>
        </div>
        <div className="flex space-x-5">
          <p>University: {profile.university}</p>
          <p>Faculty: {profile.faculty}</p>
          <p>Grade: {profile.grade}</p>
        </div>
        <div className="flex space-x-5">
          <p>Major: {profile.major}</p>
          <p>Skills: {profile.skills}</p>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
