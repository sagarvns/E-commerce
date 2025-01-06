import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.thumbnail} className="card-img-top h-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-title">{product.price}</h5>

          <button
            href="#"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
