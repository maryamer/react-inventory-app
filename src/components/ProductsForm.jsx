import React from "react";
import { useState } from "react";

export default function ProductsForm({ categories, addProductsHandler }) {
  const [product, setProduct] = useState({
    title: "",
    quantity: 0,
    category: "",
  });
  const onChangeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addProductsHandler(product);
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        onSubmit={submitHandler}
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            value={product.title}
            id="product-title"
            onChange={onChangeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="quantity"
            onChange={onChangeHandler}
            id="product-quantity"
            value={product.quantity}
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="category"
            id="product-category"
            onChange={onChangeHandler}
            value={product.category}
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories.map((item) => (
              <option
                key={item.createdAt}
                className="bg-slate-500 text-slate-300"
                value={item.title}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            type="submit"
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
}
