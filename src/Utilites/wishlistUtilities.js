import axios from "axios";

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
    dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
  } catch (e) {
    console.log(e);
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
    dataDispatch({ type: "set-wishlist", payload: res.data.wishlist });
  } catch (e) {
    console.log(e);
  }
}

export function productInWishlist(wishlist, product) {
  const isProductInWishlist = wishlist.some(({ id }) => id === product.id);
  return isProductInWishlist;
}
