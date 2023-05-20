import axios, { all } from "axios";

export async function signupHandler(
  userData,
  navigate,
  setErrorMessage,
  setLoggedIn
) {
  const { firstName, lastName, email, password, confirmPassword } = userData;
  // validating data
  if (!(firstName && lastName && email && password && confirmPassword)) {
    setErrorMessage(() => "Please all provide your details");
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
        alert("Logged in");
        navigate("/");
      }
    } catch (e) {
      alert("Email is already registered. Please log in.");
      navigate("/login");
      console.log({ message: e.message, code: e.code });
    }
  }
}

export async function loginHandler(userData, navigate, setLoggedIn) {
  if (userData.email && userData.password) {
    try {
      const res = await axios.post(`/api/auth/login`, userData);
      // saving the encodedToken in the localStorage
      // console.log(res.data);
      if (res.status === 200) {
        localStorage.setItem("userToken", res.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(res.data.foundUser));
        setLoggedIn(true);
        alert("Logged in");
        navigate("/");
      }
    } catch (e) {
      if (e.code === "ERR_BAD_REQUEST") {
        alert("Email is not registered. Please sign up");
        navigate("/signup");
      }
      console.log({ message: e.message, code: e.code });
    }
  } else {
    alert("Please provide your details");
  }
}
