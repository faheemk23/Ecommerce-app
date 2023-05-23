import { Link } from "react-router-dom";
import "./PriceDetailCard.css";

export function PriceDetailCard({ cart, checkout, setShowOrderSummary }) {
  const priceDetails = cart.reduce(
    (acc, { price, original_price, qty }) => ({
      price: acc.price + Number(original_price) * qty,
      discount: acc.discount + qty * (Number(original_price) - Number(price)),
      items: acc.items + qty,
    }),
    { price: 0, items: 0, discount: 0 }
  );

  const { price, discount } = priceDetails;

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "250px" }}>
      <div>Price Detail</div>
      <hr />
      <div>Items ||Total Price</div>
      <hr />
      {cart.map(({ _id, title, qty, unit, price }) => (
        <div key={_id}>
          {title}({unit})*{qty} {Number(price) * qty}
        </div>
      ))}

      <hr />
      <div>Cart total: ₹{price - discount}</div>
      <div>You will save ₹{discount} on this order</div>
      {checkout ? (
        <button
          className="btn btn-primary"
          onClick={() => setShowOrderSummary(true)}
        >
          Checkout
        </button>
      ) : (
        <Link className="btn btn-primary" to="/checkout">
          Checkout
        </Link>
      )}
    </div>
  );
}
