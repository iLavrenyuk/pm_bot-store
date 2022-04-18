import React from 'react';

export const CatalogItem = ({ product }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="max-h-24" src={product.image} alt="" />
      <span className="text-sm">
        {product.name} · ${product.price}
      </span>
      <button className="mt-1 px-6 py-1 bg-amber-400 font-bold rounded-md">ADD</button>
    </div>
  );
};
