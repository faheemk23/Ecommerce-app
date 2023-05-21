import axios from "axios";
import { toast } from "react-toastify";

export const getCartItems = async (encodedToken, dataDispatch) => {
  try {
    const res = await axios.get(`/api/user/cart`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (res.status === 200) {
      dataDispatch({ type: "set-cart", payload: res.data.cart });
    }
  } catch (e) {
    console.error({
      message: e.message,
      code: e.code,
      where: "getCartItemsHandler",
    });
  }
};

export async function handleBtnAddToCart(
  product,
  dataDispatch,
  loggedIn,
  navigate
) {
  if (!loggedIn) {
    toast("Please Log in to add items to cart.", {
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
    return;
  } else {
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
      if (res.status === 201) {
        toast("Added to cart!", {
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
        dataDispatch({ type: "set-cart", payload: res.data.cart });
      }
    } catch (e) {
      console.error({
        message: e.message,
        code: e.code,
        where: "AddToCartHandler",
      });
    }
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
    if (res.status === 200) {
      dataDispatch({ type: "set-cart", payload: res.data.cart });
    }
  } catch (e) {
    console.error({
      message: e.message,
      code: e.code,
      where: "RemoveFromCartHandler",
    });
  }
}

export async function handleQuantityChangeInCart(
  quantity,
  type,
  productId,
  dataDispatch,
  fromWishlist
) {
  const encodedToken = localStorage.getItem("userToken");
  if (quantity <= 1 && type === "decrement") {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (res.status === 200) {
        dataDispatch({ type: "set-cart", payload: res.data.cart });
      }
    } catch (e) {
      console.error({
        message: e.message,
        code: e.code,
        where: "QuantityChangeInCartHandler",
      });
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
      if (res.status === 200) {
        if (fromWishlist) {
          const product = res.data.cart.find(({ _id }) => _id === productId);
          toast(
            `Increased "${product.title}" quantity to ${product.qty} in cart!`,
            {
              position: "bottom-right",
              type: "success",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }

        dataDispatch({ type: "set-cart", payload: res.data.cart });
      }
    } catch (e) {
      console.error({
        message: e.message,
        code: e.code,
        where: "QuantityChangeInCartHandler",
      });
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
