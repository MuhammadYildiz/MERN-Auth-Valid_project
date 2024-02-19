import { useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("user") && !user){
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [user])
    return (
        <div className="bg-green-900 text-white flex items-center  justify-between p-5">
            <NavLink to={"/"} className={"font-bold text-2xl"} >MERN-Auth</NavLink>
            <div className="flex">
                {user ? <div>
                    <NavLink to={"/login"} onClick={() => {
                        localStorage.removeItem("user");
                        setUser(null)
                    }} className={"border-2  p-2 m-1 rounded-md border-red-600 "}>Logout</NavLink>
                </div> :
                    <div>
                        <NavLink to={"/login"} className={"border-2 border-white p-2 m-1 rounded-md [&.active]:border-red-600 "}>Login</NavLink>
                        <NavLink to={"/signup"} className={"border-2 border-white p-2 m-1 rounded-md [&.active]:border-red-600 "}>Signup</NavLink>
                    </div>}

            </div>
        </div>
    )
}
