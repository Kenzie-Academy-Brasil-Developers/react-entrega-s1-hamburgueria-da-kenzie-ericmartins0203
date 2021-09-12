import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer/index";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  function HandleClick(id) {
    const item = products[id - 1];
    console.log(item);
    if (!currentSale.includes(item)) {
      setCurrentSale([...currentSale, item]);
      setCartTotal(cartTotal + item.price);
    }
  }

  return (
    <div className="App">
      <h1>Hamburgueria da Kenzie</h1>

      <MenuContainer products={products} HandleClick={HandleClick} />
      <section className="cart">
        <h3>Carrinho</h3>
        <label> Preço total: {cartTotal.toFixed(2)}</label>
        <ul>
          {currentSale.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Categoria: {item.category}</p>
              <p>Preço: {item.price}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
