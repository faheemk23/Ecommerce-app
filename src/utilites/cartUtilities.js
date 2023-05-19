import axios from "axios";

export const getCartItems = async (encodedToken, dataDispatch) => {
  try {
    const res = await axios.get(`/api/user/cart`, {
      headers: {
        authorization: encodedToken,
      },
    });
    dataDispatch({ type: "set-cart", payload: res.data.cart });
  } catch (e) {
    console.log(e);
  }
};

export async function handleBtnAddToCart(product, dataDispatch) {
  const encodedToken = localStorage.getItem("userToken");
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
    dataDispatch({ type: "set-cart", payload: res.data.cart });
  } catch (e) {
    console.log(e);
  }
}

export async function handleBtnRemoveFromCart(productId, dataDispatch) {
  const encodedToken = localStorage.getItem("userToken");
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    dataDispatch({ type: "set-cart", payload: res.data.cart });
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuantityChangeInCart(
  quantity,
  type,
  productId,
  dataDispatch
) {
  const encodedToken = localStorage.getItem("userToken");
  if (quantity <= 1 && type === "decrement") {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dataDispatch({ type: "set-cart", payload: res.data.cart });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type } },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dataDispatch({ type: "set-cart", payload: res.data.cart });
    } catch (e) {
      console.log(e);
    }
  }
}

export function productInCart(cart, product) {
  const isProductInCart = cart.some(({ id }) => id === product.id);
  return isProductInCart;
}

export function handleBtnGoToCart(navigate) {
  navigate("/cart");
}
