import axios from 'axios';
import { useAtom } from 'jotai';
import { profileAtom } from '@/store';

type ProfileState = {
    birthday: string,
    university: string,
    faculty: string,
    major: string,
    grade: string,
    hometown: string,
    skills: string
}


export const addProfile =(profileData: {})=> {
    
    const [profile, setProfile] = useAtom<ProfileState>(profileAtom);
    
    axios.post('http://192.168.144.144:5000/api/profile', profileData)
        .then(res => {
            console.log(res.data.userProfile);
            setProfile(res.data.profileData);

            console.log(profileData);
            
        })
        .catch(err => {
            console.log(err)
        })
}