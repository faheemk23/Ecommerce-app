import { ProductCard } from "../components/cards/ProductCard";
import { Navigation } from "../components/nav/Navigation";
import { PriceDetailCard } from "../components/cards/PriceDetailCard";

export function Cart() {
  return (
    <>
      <Navigation />
      Cart
      <ProductCard />
      <PriceDetailCard />
    </>
  );
}
