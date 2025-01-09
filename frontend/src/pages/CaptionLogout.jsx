import axios from "axios";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptionLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
        axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate('/captain-login')
            }
        })
    };
    logout();
  },[token,navigate]);
  return <div>CaptionLogout</div>;
};

export default CaptionLogout;
