import { products } from "../../data/products.js";
import { CardComponents } from "../card/index.card";

export const Main = () => {
  return (
    <>
      <main>
        <section className="section-cards">
          {products.map((product, index) => {
            return <CardComponents product={product} key={index} />;
          })}
        </section>
      </main>
    </>
  );
};
