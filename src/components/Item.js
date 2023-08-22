import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name} - {category}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default Item;
