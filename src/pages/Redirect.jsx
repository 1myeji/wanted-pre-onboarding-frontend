import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (
      accessToken &&
      (location.pathname === "/signin" || location.pathname === "/signup")
    )
      navigate("/todo");
    if (!accessToken && location.pathname === "/todo") navigate("/signin");
  }, [location, navigate, accessToken]);

  return null;
};

export default Redirect;
