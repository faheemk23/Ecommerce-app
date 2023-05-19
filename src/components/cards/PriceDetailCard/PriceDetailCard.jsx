import "./PriceDetailCard.css";

export function PriceDetailCard({ cart }) {
  const priceDetails = cart.reduce(
    (acc, { price, original_price, qty }) => ({
      price: acc.price + Number(original_price) * qty,
      discount: acc.discount + qty * (Number(original_price) - Number(price)),
      items: acc.items + qty,
    }),
    { price: 0, items: 0, discount: 0 }
  );

  const { price, items, discount } = priceDetails;

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
            <th>Total Amount</th>
            <td>₹{price - discount}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>You will save ₹{discount} on this order</div>
      <button>PLACE ORDER</button>
    </div>
  );
}
