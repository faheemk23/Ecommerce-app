import axios from "axios";
import { getCartItems } from "./cartUtilities";
import { getWishlistItems } from "./wishlistUtilities";
import { toast } from "react-toastify";

export async function signupHandler(
  userData,
  navigate,
  setErrorMessage,
  setLoggedIn
) {
  const { firstName, lastName, email, password, confirmPassword } = userData;
  // validating data
  if (!(firstName && lastName && email && password && confirmPassword)) {
    setErrorMessage(() => "Please provide all  your details");
  } else if (password.length < 6) {
    setErrorMessage(() => "Password should atleast be 6 characters long.");
  } else if (password !== confirmPassword) {
    setErrorMessage(() => "Confirm password doesn't match.");
  } else {
    try {
      const res = await axios.post(`/api/auth/signup`, userData);
      // saving the encodedToken in the localStorage
      if (res.status === 201) {
        localStorage.setItem("userToken", res.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(res.data.createdUser));
        setLoggedIn(true);
        toast("Logged In Successfully!", {
          position: "bottom-right",
          type: "success",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/productlisting");
      }
    } catch (e) {
      toast("Email is already registered. Please log in.", {
        position: "bottom-right",
        type: "error",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/login");
      console.log({ message: e.message, code: e.code });
    }
  }
}

export async function loginHandler(
  userData,
  navigate,
  setLoggedIn,
  dataDispatch,
  from
) {
  if (userData.email && userData.password) {
    try {
      const res = await axios.post(`/api/auth/login`, userData);
      // saving the encodedToken in the localStorage
      // console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem("userToken", res.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(res.data.foundUser));
        setLoggedIn(true);
        toast("Logged In Successfully!", {
          position: "bottom-right",
          type: "success",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        if (from) {
          navigate(from);
        } else {
          navigate("/productlisting");
        }
        getCartItems(res.data.encodedToken, dataDispatch);
        getWishlistItems(res.data.encodedToken, dataDispatch);
      }
    } catch (e) {
      if (e.code === "ERR_BAD_REQUEST") {
        toast("Email is not registered. Please sign up", {
          position: "bottom-right",
          type: "error",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/signup");
      }
      console.log({ message: e.message, code: e.code });
    }
  } else {
    toast("Please provide your details", {
      position: "bottom-right",
      type: "error",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}
