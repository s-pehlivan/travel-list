import React from "react";
import Item from "./Item";

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
