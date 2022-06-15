import { useContext } from "react";
import AuthProvider, { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useAuth=()=>{
    const auth=useContext(AuthContext)
    return auth;

}


export default useAuth;