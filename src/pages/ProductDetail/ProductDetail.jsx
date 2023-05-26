import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { ProductDetailCard } from "../../components/cards/ProductDetailCard/ProductDetailCard";

export function ProductDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const fetchProductDetail = async (productId, setProduct) => {
    try {
      setLoading(true);
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
  }, [productId]);

  return (
    <>
      {loading && (
        <div className="center-of-page">
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      {!loading && <ProductDetailCard product={product} />}
    </>
  );
}
