function Product({ key, item, id, HandleClick }) {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Categoria: {item.category}</p>
      <p>Preço: {item.price}</p>
      <button onClick={(element) => HandleClick(element.id)}>
        Adicionar ao carrinho
      </button>
    </li>
  );
}

export default Product;
