import axios from "axios";

export async function handleBtnAddToCart(product) {
  console.log(product);
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
  } catch (e) {
    console.log("in cart");
    console.log(e);
  }
}
