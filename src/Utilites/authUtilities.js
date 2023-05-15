import axios from "axios";

export async function signupHandler(userData) {
  if (userData.email && userData.password) {
    try {
      const response = await axios.post(`/api/auth/signup`, userData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("userToken", response.data.encodedToken);
      alert("signed up successfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please provide your details");
  }
}

export async function loginHandler(userData) {
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
}

export async function testUserLoginHandler() {
  const userData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  if (userData.email && userData.password) {
    try {
      const response = await axios.post(`/api/auth/login`, userData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("userToken", response.data.encodedToken);
      alert("logged in succesfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Please provide your details");
  }
}
