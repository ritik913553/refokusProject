import React from "react";
import Button from "./Button";
function Product({ product, mover, count }) {
  return (
    <div className="w-full h-[18rem] pt-10 text-white bg-zinc-900">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-lg mx-auto flex items-center  justify-between"
      >
        <h1 className="text-5xl capitalize font-medium ">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-7">{product.description}</p>
          <div className="flex items-center gap-5">
            {product.live && <Button />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
