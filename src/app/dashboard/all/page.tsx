'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAtom } from 'jotai'
import { allProfileAtom } from '@/store'


const AllUsers = () => {
    const [allUsers, setAllUsers] = useAtom<[]>(allProfileAtom);
    const [userList, setUserList] = useState([]); 
    console.log('all', userList);
    
    
    
    const getAllProfile = () => {
        axios.get('http://192.168.144.144:5000/api/profile/all')
        .then(res => {
            setAllUsers(res.data.allProfile);
            setUserList(res.data.allProfile);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const setList = () => {
        // setUserList(allUsers);
        console.log(allUsers);
        
    };
    
    useEffect(() => {
        getAllProfile();
    }, [])

    const SortData =(kind) => {
        
        const arr: [] = allUsers;
        
        const sortName = () => {
            for(let i = 0; i< arr.length; i++ ){
                for(let j = i; j< arr.length; j++ ){
                    if (arr[i].name > arr[j].name) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }
        const sortHometown = () => {
            for(let i = 0; i< arr.length; i++ ){
                for(let j = i; j< arr.length; j++ ){
                    if (arr[i].hometown > arr[j].hometown) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }
        
        switch (kind) {
            case 'name':
                    sortName();
                    console.log('111111111111111111111111111', arr);
                    setUserList(arr);
                    window.location.
                break;
            case 'hometown':
                    sortHometown();
                    console.log('2222222222222222222222222222', arr);
                    setUserList(arr)
                break;
        
            default:
                break;
        }
        
        
    }

    const tableData = userList.map((user: {name: string, birthday: string, hometown: string, university: string, faculty: string, major: string, grade: string, skills: string}, index )=> (
        <tr key={index} className={`border ${index % 2 == 1 ? 'bg-slate-300': 'bg-slate-400' } `}>
            <td className='px-2 text-center border border-spacing-1'>{user.name}</td>
            <td className='px-2 text-center border border-spacing-1'>{user.birthday}</td>
            <td className='px-2 text-center border border-spacing-1'>{user.hometown}</td>
            {/* <td className='px-2 text-center border border-spacing-1'>{user.university}</td> */}
            <td className='px-2 text-center border border-spacing-1'>{user.faculty}</td>
            <td className='px-2 text-center border border-spacing-1'>{user.major}</td>
            <td className='px-2 text-center border border-spacing-1'>{user.grade}</td>
            <td className='px-2 text-center border border-spacing-1'>{user.skills}</td>
        </tr>
    ))



  return (
    <div>
        <h1 className='text-white text-3xl text-center my-6'>Lets share our information</h1>
        <table className='bg-slate-500 mx-auto'>
            <thead>
                <tr className='h-12 table-row border border-b-4 border-e-purple-100'>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('name')}>Name</th>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('birthday')}>Birthday</th>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('hometown')}>Home Town</th>
                    {/* <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('university')}>University</th> */}
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('faculty')}>Faculty</th>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('major')}>Major</th>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('grade')}>Grade</th>
                    <th className='px-1 border hover:cursor-pointer' onClick={() => SortData('topskill')}>Top Skill</th>
                </tr>
            </thead>
            <tbody>
            {       
                userList.map((user: {name: string, birthday: string, hometown: string, university: string, faculty: string, major: string, grade: string, skills: string}, index )=> (
                    <tr key={index} className={`border ${index % 2 == 1 ? 'bg-slate-300': 'bg-slate-400' } `}>
                        <td className='px-2 text-center border border-spacing-1'>{user.name}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.birthday}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.hometown}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.university}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.faculty}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.major}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.grade}</td>
                        <td className='px-2 text-center border border-spacing-1'>{user.skills}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default AllUsers