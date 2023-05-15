import axios from "axios";

export async function handleBtnAddToCart(product, setCart) {
  const encodedToken = localStorage.getItem("userToken");
  try {
    const res = await axios.post(
      `/api/user/cart`,
      { product: { ...product, quantity: 1 } },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setCart(res.data.cart);
  } catch (e) {
    console.log("in cart");
    console.log(e);
  }
}

export async function handleBtnRemoveFromCart(productId, setCart) {
  const encodedToken = localStorage.getItem("userToken");
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCart(res.data.cart);
  } catch (e) {
    console.log("in cart");
    console.log(e);
  }
}

export function productInCart(cart, product) {
  const isProductInCart = cart.some(({ id }) => id === product.id);
  return isProductInCart;
}

export function handleBtnGoToCart(navigate) {
  navigate("/cart");
}
