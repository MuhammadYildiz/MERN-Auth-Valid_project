import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from "react"
import { NavLink, useNavigate} from "react-router-dom";
export default function Signup({setUser}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/users/signup", formData)
            toast.success(response.data.message);
            navigate("/login")
        } catch ({ error,response }) {
            console.log(error);
            toast.success(response.data.message);
        }
    }
    return (
        <div className="h-[90vh] bg-gray-300 flex justify-center items-center text-center flex-col">
            <div className="shadow-black shadow-lg p-3 w-80 rounded-md">
                <h2 className="text-green-800 text-2xl m-5 uppercase font-bold">Signup</h2>
                <form onSubmit={handleSubmit} className="flex flex-col  *:border-2 *:border-green-800 *:m-3 *:p-2 *:outline-none *:rounded-md">
                    <input type="text" placeholder="FullName:" value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                    <input type="email" placeholder="Email:" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <input type="password" autoComplete="" placeholder="Password:" value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <input type="text" placeholder="phoneNumber:" value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                    <button type="submit" disabled= {!formData.email || !formData.password} className="bg-green-800 text-white font-bold">Signup</button>
                </form>
                <div>User? <NavLink to={"/login"} className={"text-red-500 hover:underline mx-2"}>Login</NavLink> </div>
                <ToastContainer />
            </div>
        </div>
    )
}
