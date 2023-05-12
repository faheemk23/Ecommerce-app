import "./Cards.css"

export function ProductCard(){
    return (<div style={{backgroundColor:"rgba(0,0,0,0.2)",maxWidth:"200px"}}>
        <img src="https://picsum.photos/200/200" alt="product"/>
        <div>Men Premium Jacket</div>
        <div><strong>₹2000</strong> <span className="original-price">₹3999</span></div>
        <div>50% off</div>
        {true ? <button>Add to Cart</button>: <button>Go to Cart</button> }
        {true ?<button>Save to Wishlist</button>: <button>Remove from Wishlist</button> }
    </div>)
}