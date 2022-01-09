import { useRecoilState } from "recoil";
import { currentUser } from "../../atoms/userAtom";
import UserNav from "./UserNav";
import AdminNav from "./AdminNav";
import { useEffect } from "react";

const Nav = () => {
    const [user, setUser] = useRecoilState(currentUser);

    useEffect(async () => {
        const promise = await fetch(`/api/auth/current_user`);
        if(promise.ok){
            const json = await promise.json();
            setUser(json)
        }
        else{
            setUser(null)
        }
    }, [])

    if(user && user.hasOwnProperty("isAdmin") && user.isAdmin){
        return <AdminNav />
    }

    return <UserNav user={user} />
}

export default Nav;