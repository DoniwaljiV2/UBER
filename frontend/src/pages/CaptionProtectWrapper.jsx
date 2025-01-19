import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptionDataContext } from "../context/CaptionContext";
import axios from "axios";

const CaptionProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { caption, setCaption } = useContext(CaptionDataContext);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const verifyCaption = async () => {
  //     if (!token) {
  //       navigate("/caption-login");
  //       return;
  //     }

  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_BASE_URL}/captions/profile`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       if (response.status === 200) {
  //         setCaption(response.data.caption);
          
  //       }
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       localStorage.removeItem("token");
  //       navigate("/caption-login");
  //     } finally {
  //       setIsLoading(false); 
  //     }
  //   };
    
  //   verifyCaption();
  // }, [token, navigate, setCaption]);

  useEffect(() => {
    const verifyCaption = async () => {
      if (!token) {
        navigate("/caption-login");
        return;
      }
  
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captions/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          setCaption(response.data.caption);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        localStorage.removeItem("token");
        navigate("/caption-login");
      } finally {
        setIsLoading(false);
      }
    };
  
    verifyCaption();
  }, [token, navigate, setCaption]);
  
  
  
 
  if(isLoading)
  {
    return <div>Loading...</div>
  }

  return <div>{children}</div>;
};

export default CaptionProtectWrapper;
