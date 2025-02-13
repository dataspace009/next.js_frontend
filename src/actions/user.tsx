import { useAtom } from "jotai";
import { userAtom } from "@/store";

const [user, setUser] = useAtom<string>(userAtom);

export const setLoginedUser=(user: string)=> {
    setUser(user);
    console.log('handled user jotai');
    
}
