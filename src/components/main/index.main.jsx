import { useMemo } from "react";
import { products } from "../../data/products.js";
import { CardComponents } from "../card/index.card";

export const Main = () => {
  const { lingerie, sexshop } = useMemo(() => {
    const groups = { lingerie: [], sexshop: [] };
    for (const p of products) {
      if (p.type === "lingerie") groups.lingerie.push(p);
      else if (p.type === "sexshop") groups.sexshop.push(p);
    }
    return groups;
  }, [products]);

  return (
    <>
      <main>
        {lingerie.length > 0 && (
          <section className="section-cards" id="lingerie">
            {lingerie.map((p) => (
              <CardComponents product={p} key={p.name} />
            ))}
          </section>
        )}

        {sexshop.length > 0 && (
          <section className="section-cards" id="sexshop">
            {sexshop.map((p) => (
              <CardComponents product={p} key={p.name} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

// <section className="section-cards">
//   {products.map((product, index) => {
//     return <CardComponents product={product} key={index} />;
//   })}
// </section>
