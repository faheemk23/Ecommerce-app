import axios from "axios";
import { toast } from "react-toastify";
import { giveToast } from "./miscUtilities";

export const getWishlistItems = async (encodedToken, dataDispatch) => {
  try {
    const res = await axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (res.status === 200) {
      dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
    }
  } catch (e) {
    console.error({
      message: e.message,
      code: e.code,
      where: "getWishlistItemsHandler",
    });
  }
};

export async function handleBtnAddToWishlist(
  product,
  dataDispatch,
  loggedIn,
  navigate
) {
  if (!loggedIn) {
    giveToast("Please Log in to add items to wishlist.", "error");
    navigate("/login");
    return;
  } else {
    const encodedToken = localStorage.getItem("userToken");
    try {
      const res = await axios.post(
        `/api/user/wishlist`,
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (res.status === 201) {
        giveToast("Added to wishlist!", "success");
        dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
      }
    } catch (e) {
      console.error({
        message: e.message,
        code: e.code,
        where: "addToWishlistHandler",
      });
    }
  }
}

export async function handleBtnRemoveFromWishlist(productId, dataDispatch) {
  const encodedToken = localStorage.getItem("userToken");
  try {
    const res = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (res.status === 200) {
      giveToast("Removed from wishlist!", "error");
      dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
    }
  } catch (e) {
    console.error({
      message: e.message,
      code: e.code,
      where: "removeFromWishlistHandler",
    });
  }
}

export function productInWishlist(wishlist, product) {
  const isProductInWishlist = wishlist.some(({ id }) => id === product.id);
  return isProductInWishlist;
}
