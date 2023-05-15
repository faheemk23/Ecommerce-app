import "./PriceDetailCard.css";

export function PriceDetailCard({ cart }) {
  const priceDetails = cart.reduce(
    (acc, { price, original_price, delivery_time, qty }) => ({
      price: acc.price + Number(original_price) * qty,
      discount: acc.discount + qty * (Number(original_price) - Number(price)),
      items: acc.items + qty,
      delivery_time: acc.delivery_time + Number(delivery_time),
    }),
    { price: 0, items: 0, discount: 0, delivery_time: 0 }
  );

  const { price, items, discount, delivery_time } = priceDetails;
  const delivery_charges = delivery_time * 15;

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", maxWidth: "250px" }}>
      <div>Price Detail</div>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Price({items === 1 ? "1 item" : `${items} items`})</th>
            <td>₹{price}</td>
          </tr>
          <tr>
            <th>Discount</th>
            <td>-₹{discount}</td>
          </tr>
          <tr>
            <th>Delivery Charges</th>
            <td>{price > 5000 ? "Free" : <>+₹{delivery_charges}</>}</td>
          </tr>
          <tr>
            <th>Total Amount</th>
            <td>
              ₹
              {price > 5000
                ? price - discount
                : price - discount + delivery_charges}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        You will save ₹{price > 5000 ? discount + delivery_charges : discount}{" "}
        on this order
      </div>
      <button>PLACE ORDER</button>
    </div>
  );
}
