import { atom } from 'jotai';

type ProfileState = {
    birthday: string,
    university: string,
    faculty: string,
    major: string,
    grade: string,
    hometown: string,
    skills: string
}


export const profileAtom = atom<ProfileState>({
    birthday: '',
    university: '',
    faculty: '',
    major: '',
    grade: '',
    hometown: '',
    skills: ''
});
