export function PriceDetailCard(){
    return (<div style={{backgroundColor:"rgba(0,0,0,0.2)",maxWidth:"250px"}}>
        <div>Price Detail</div>
        <hr />
        <table>
            <tbody>
                <tr>
                    <th>Price(1 item)</th>
                    <td>₹2000</td>
                </tr>
                <tr>
                    <th>Discount</th>
                    <td>-₹1000</td>
                </tr>
                <tr>
                    <th>Delivery Charges</th>
                    <td>₹499</td>
                </tr>
                <hr />
                <tr>
                    <th>Total Amount</th>
                    <td>₹2499</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <div>You will save ₹1000 on this order</div>
        <button>PLACE ORDER</button>
        
    </div>)
}