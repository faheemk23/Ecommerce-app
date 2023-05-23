import { useContext } from "react";
import { Navigation } from "../nav/Navigation";
import "./OrderSummary.css";
import { DataContext } from "../../contexts/DataContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleBtnRemoveFromCart } from "../../utilites/cartUtilities";
import { AddressCard } from "../cards/AddressCard/AddressCard";

export function OrderSummary({ selectedAddress }) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  const { cart } = dataState;

  const handleBtnPlaceOrder = () => {
    cart.map(({ _id }) => handleBtnRemoveFromCart(_id, dataDispatch));

    dataDispatch({ type: "clear-cart" });
    toast("Order Placed Successfully!", {
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
    navigate("/");
  };

  return (
    <div>
      <h1>Order Summary</h1>
      <div>Please take a moment to review your order</div>
      {cart.map(({ _id, title, qty, unit, price }) => (
        <div key={_id}>
          {title}({unit})*{qty} {Number(price) * qty}
        </div>
      ))}
      <div>
        Address : <AddressCard address={selectedAddress} orderSummary />
      </div>
      <button onClick={handleBtnPlaceOrder}>Place Order</button>
    </div>
  );
}
