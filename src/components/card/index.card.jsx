import { Card, Carousel } from "react-bootstrap";
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
        {product.images.map((img) => (
          <Carousel.Item key={`${product.name}-${img.src}`}>
            <img
              src={publicPath(`products/${img.src}`)}
              alt={img.alt}
              className="d-block w-100"
              onError={(e) => {
                e.currentTarget.src = publicPath("products/placeholder.png");
              }}
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
        <Card.Text>
          Disponível no: <br />
          {product.size}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
