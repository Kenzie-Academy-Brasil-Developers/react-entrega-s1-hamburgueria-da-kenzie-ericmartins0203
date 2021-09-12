import Product from "../Product";
import { useState } from "react";

function MenuContainer({ products, HandleClick }) {
  const [isFilter, setIsFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState("");

  function HandleFilter() {
    setIsFilter(true);
  }

  function HandreFilterOff() {
    setIsFilter(false);
  }
  return (
    <>
      <section className="find">
        <input
          placeholder="nome do produto"
          onChange={(event) => setFilteredProducts(event.target.value)}
        ></input>
        <button onClick={() => HandleFilter()}> filtrar </button>
        <button onClick={() => HandreFilterOff()}>Mostrar tudo</button>
      </section>
      <ul>
        {isFilter &&
          products
            .filter(
              (item) =>
                item.name.toLocaleLowerCase() ===
                filteredProducts.toLocaleLowerCase()
            )
            .map((item) => (
              <Product item={item} HandleClick={() => HandleClick(item.id)} />
            ))}
        {!isFilter &&
          products.map((item) => (
            <Product item={item} HandleClick={() => HandleClick(item.id)} />
          ))}
      </ul>
    </>
  );
}

export default MenuContainer;
