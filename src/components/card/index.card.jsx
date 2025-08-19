import { Card, Carousel } from "react-bootstrap";
import { ProductImage } from "../product-image/index.product-image";
import "./index.card.css";

export const CardComponents = ({ product }) => {
  const publicPath = (path) => {
    const base = import.meta.env.BASE_URL || "/";
    const b = base.endsWith("/") ? base : base + "/";
    return b + path.replace(/^\//, "");
  };
  const hasMultiple = product.images.length > 1;

  return (
    <Card>
      <Carousel
        data-bs-theme="dark"
        indicators={false}
        controls={hasMultiple}
        interval={5000}
        pause="hover"
        touch>
        {product.images.map((img, idx) => (
          <Carousel.Item key={`${product.name}-${img.src}`}>
            <ProductImage
              base={img.src}
              alt={img.alt}
              eager={idx === 0}
              sizes="(max-width: 768px) 95vw, 520px"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="price">
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Text>
        <Card.Text className="text-infos">Tamanhos:</Card.Text>
        <Card.Text>{product.size}</Card.Text>

        <Card.Text className="text-infos">Cores:</Card.Text>
        <Card.Text>{product.color}</Card.Text>
      </Card.Body>
    </Card>
  );
};
