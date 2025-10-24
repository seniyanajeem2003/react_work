import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserFromLocalStorage } from "../redux/authSlice";

function AutoLogin({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  return children;
}

export default AutoLogin;
