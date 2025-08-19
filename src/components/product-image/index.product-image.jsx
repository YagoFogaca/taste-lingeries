export const ProductImage = ({
  base, // ex: "conjunto-beverly"
  alt,
  sizes = "(max-width: 768px) 90vw, 520px",
  eager = false, // true para a primeira imagem/hero
  naturalWidth = 640,
  naturalHeight = 800,
}) => (
  <picture>
    <source
      type="image/avif"
      srcSet={[
        `/products/${base}/${base}-320.avif 320w`,
        `/products/${base}/${base}-640.avif 640w`,
        `/products/${base}/${base}-960.avif 960w`,
        `/products/${base}/${base}-1280.avif 1280w`,
      ].join(", ")}
      sizes={sizes}
    />
    <source
      type="image/webp"
      srcSet={[
        `/products/${base}/${base}-320.webp 320w`,
        `/products/${base}/${base}-640.webp 640w`,
        `/products/${base}/${base}-960.webp 960w`,
        `/products/${base}/${base}-1280.webp 1280w`,
      ].join(", ")}
      sizes={sizes}
    />
    <img
      src={`/products/${base}/${base}-640.jpg`}
      srcSet={[
        `/products/${base}/${base}-320.jpg 320w`,
        `/products/${base}/${base}-640.jpg 640w`,
        `/products/${base}/${base}-960.jpg 960w`,
        `/products/${base}/${base}-1280.jpg 1280w`,
      ].join(", ")}
      sizes={sizes}
      alt={alt}
      width={naturalWidth}
      height={naturalHeight}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={{ width: "100%", height: "auto" }}
    />
  </picture>
);
