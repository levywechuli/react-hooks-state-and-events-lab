import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function to add/remove item from cart
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
