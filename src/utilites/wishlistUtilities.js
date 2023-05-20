import axios from "axios";

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

export async function handleBtnAddToWishlist(product, dataDispatch) {
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

export async function handleBtnRemoveFromWishlist(productId, dataDispatch) {
  const encodedToken = localStorage.getItem("userToken");
  try {
    const res = await axios.delete(`/api/user/wishlist/${productId}`, {
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
      where: "removeFromWishlistHandler",
    });
  }
}

export function productInWishlist(wishlist, product) {
  const isProductInWishlist = wishlist.some(({ id }) => id === product.id);
  return isProductInWishlist;
}
