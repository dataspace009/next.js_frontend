'use client'
import React, { useState } from "react";
import InputBox from "@/app/components/input/InputBox";
// import { addProfile } from "@/actions/profile";
import axios from 'axios';
import { useAtom } from 'jotai';
import { profileAtom } from '@/store';
import Link from "next/link";

type ProfileState = {
    birthday: string,
    university: string,
    faculty: string,
    major: string,
    grade: string,
    hometown: string,
    skills: string
}


const AddProfile = () => {
  const [profile, setProfile] = useAtom<ProfileState>(profileAtom);
  const [birth, setBirth] = useState(profile.birthday);
  const [university, setUniversity] = useState(profile.university);
  const [faculty, setFaculty] = useState(profile.faculty);
  const [major, setMajor] = useState(profile.major);
  const [grade, setGrade] = useState(profile.grade);
  const [homeTown, setHomeTown] = useState(profile.hometown);
  const [skills, setSkills] = useState(profile.skills);

  const addProfileData = {
        birthday: birth,
        university: university,
        faculty: faculty,
        major: major,
        grade: grade,
        hometown: homeTown,
        skills: skills
  }
  
  const addProfile =(profileData: {})=> {
    
    
    axios.post('http://192.168.144.144:5000/api/profile', profileData)
        .then(res => {
            console.log(res.data.userProfile);
            if(res.data.profileData) setProfile(res.data.profileData);

            alert('Successfuly Added Your Informatin');
            window.location.href = '/dashboard';
        })
        .catch(err => {
            console.log(err)
        })
}

  const handleAddProfile=(e: any)=> {
    e.preventDefault()
    addProfile(addProfileData);
  }

  return (
    <div className="mx-[20%]">
      <Link href={'/dashboard'} className="bg-orange-500 text-white p-2 rounded-r-xl rounded-l-full">Go Back</Link>
      <div className="text-[200%] text-white text-center m-4">Add Your Profile</div>
      <form className="flex flex-col space-y-4" onSubmit={handleAddProfile}>
        <InputBox type='text' boxName="Birthday"    name="birthday"   value={birth}       onChange={setBirth}         placeholder="2000.01.01"      required={true}/>
        <InputBox type='text' boxName="Home Town"   name="homeTown"   value={homeTown}    onChange={setHomeTown}      placeholder="Pyongyang"       required={true}/>
        <InputBox type='text' boxName="University"  name="university" value={university}  onChange={setUniversity}    placeholder="Kimchaek University of Technology"           required={true}/>
        <InputBox type='text' boxName="Faculty"     name="faculty"    value={faculty}     onChange={setFaculty}       placeholder="Faculty of Material Science and Engineering" required={true}/>
        <InputBox type='text' boxName="Major"       name="major"      value={major}       onChange={setMajor}         placeholder="Nano Technology" required={true}/>
        <InputBox type='text' boxName="Grade"       name="grade"      value={grade}       onChange={setGrade}         placeholder="2-2"             required={true}/>
        <InputBox type='text' boxName="Skills"      name="skills"     value={skills}      onChange={setSkills}        placeholder="English"         required={false}/>
        <button type="submit" className="text-white text-xl px-4 py-2 bg-blue-600 rounded-lg mx-auto ">{!profile.birthday? 'Add Profile':'Change Profile'}</button>
      </form>
    </div>
  );
};

export default AddProfile;
