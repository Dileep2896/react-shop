// eslint-disable-next-line react/prop-types
export default function Shop(props) {
  const { children } = props;

  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">{children}</ul>
    </section>
  );
}
