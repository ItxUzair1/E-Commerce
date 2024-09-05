import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";



export default function SignUpLayout(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
}