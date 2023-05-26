import { Link, useNavigate } from "react-router-dom";
import "./PriceDetailCard.css";
import { AddressCard } from "../AddressCard/AddressCard";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { handleBtnRemoveFromCart } from "../../../utilites/cartUtilities";
import { giveToast } from "../../../utilites/miscUtilities";

export function PriceDetailCard({
  cart,
  setShowOrderSummary,
  showAddresses,
  setShowAddresses,
  showOrderSummary,
  selectedAddress,
}) {
  const { dataState, dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();

  // const { cart } = dataState;
  const priceDetails = cart.reduce(
    (acc, { price, original_price, qty }) => ({
      price: acc.price + Number(original_price) * qty,
      discount: acc.discount + qty * (Number(original_price) - Number(price)),
      items: acc.items + qty,
    }),
    { price: 0, items: 0, discount: 0 }
  );

  const { price, discount } = priceDetails;

  const handleBtnPlaceOrder = () => {
    cart.map(({ _id }) => handleBtnRemoveFromCart(_id, dataDispatch));

    dataDispatch({ type: "clear-cart" });
    giveToast("Order Placed Successfully!", "success");
    navigate("/");
  };

  return (
    <div className="price-detail-card">
      <div className="price-detail-title">
        {showOrderSummary ? "Order Summary" : "Price Detail"}
      </div>
      <hr />
      {showOrderSummary && <div>Items:</div>}
      {cart.map(({ _id, title, qty, unit, price }) => (
        <div key={_id} className="flex-space-between price-card-product">
          <div>
            <span className="bold">{title}</span>{" "}
            <div className="smaller">
              Qty: ({unit}) X {qty}
            </div>
          </div>{" "}
          {!showOrderSummary && <span>{Number(price) * qty}</span>}
        </div>
      ))}

      <hr />
      <div className="flex-space-between bold">
        <span>Cart total:</span> <span>₹{price - discount}</span>
      </div>
      {showOrderSummary && (
        <div>
          <hr />
          <span className="bold">Deliver to:</span>
          <AddressCard address={selectedAddress} orderSummary />
        </div>
      )}
      {!showOrderSummary && (
        <>
          <hr />
          <div className="price-detail-discount">
            You will save <span className="bold orange">₹{discount}</span> on
            this order
          </div>
        </>
      )}
      {!showOrderSummary &&
        (showAddresses ? (
          <button
            className="btn-checkout btn btn-primary "
            onClick={() => setShowOrderSummary(true)}
          >
            CHECKOUT
          </button>
        ) : (
          <button
            className=" btn-checkout btn btn-primary"
            onClick={() => setShowAddresses(true)}
          >
            PLACE ORDER
          </button>
        ))}
      {showOrderSummary && (
        <button
          className="btn-checkout btn btn-primary"
          onClick={handleBtnPlaceOrder}
        >
          Place Order
        </button>
      )}
    </div>
  );
}
