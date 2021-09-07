import Product from "../Product";

function MenuContainer({ products, HandleClick }) {
  return (
    <ul>
      {products.map((item, index) => (
        <Product
          key={index}
          item={item}
          id={item.id}
          HandleClick={() => HandleClick(item.id)}
        />
      ))}
    </ul>
  );
}

export default MenuContainer;
