import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Lists = () => {
  const { list } = useGlobalContext();
  return (
    <div className="ui grid container">
      {list.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div className="four wide column product" key={id}>
            <Link to={`/product/${id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image prod-image">
                    <img className="prod-img" src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
