import { useParams } from "react-router-dom";
import { Navigation } from "../../components/nav/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";

export function ProductDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const fetchProductDetail = async (productId, setProduct) => {
    try {
      const res = await axios.get(`/api/products/${productId}`);
      if (res.status === 200) {
        setProduct(res.data.product);
      }
    } catch (e) {
      console.error({
        message: e.message,
        code: e.code,
        where: "fetchProductDetailHandler",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail(productId, setProduct);
  }, []);

  return (
    <>
      <Navigation />
      {loading && <p>Loading...</p>}
      {!loading && <ProductCard product={product} />}
    </>
  );
}
