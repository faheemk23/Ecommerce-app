import axios from "axios";

const signupHandler = async (userData) => {
  if (userData.email && userData.password) {
    try {
      const response = await axios.post(`/api/auth/signup`, userData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      alert("signed up successfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please provide your details");
  }
};

const loginHandler = async (userData) => {
  if (userData.email && userData.password) {
    try {
      const response = await axios.post(`/api/auth/login`, userData);
      // saving the encodedToken in the localStorage
      console.log(response.data);
      alert("logged in succesfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please provide your details");
  }
};

const testUserLoginHandler = async () => {
  const userData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  if (userData.email && userData.password) {
    try {
      const response = await axios.post(`/api/auth/login`, userData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      alert("logged in succesfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please provide your details");
  }
};

export { signupHandler, loginHandler, testUserLoginHandler };
