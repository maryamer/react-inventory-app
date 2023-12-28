import React, { useEffect } from "react";
import { useState } from "react";

export default function ProductList({ products, onDeleteHandler, categories }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  const searchHandler = (value) => {
    const searchedProducts = products.filter((item) =>
      item.title.includes(value)
    );
    setFilteredProducts(searchedProducts);
    console.log(value);
  };
  const sortHandler = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "oldest") {
      const sorted = [...filteredProducts].sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
      setFilteredProducts(sorted);
    } else if (sortBy === "") {
      setFilteredProducts(products);
    } else if (sortBy === "newest") {
      const sorted = [...filteredProducts].sort((a, b) =>
        a.createdAt > b.createdAt ? -1 : 1
      );
      setFilteredProducts(sorted);
    } else {
      const filtered = products.filter((item) => item.category === sortBy);
      setFilteredProducts(filtered);
    }
  };
  return (
    <>
      <h2 className="text-xl text-slate-300 h-full font-bold mb-2">
        Product list
      </h2>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          onChange={sortHandler}
        >
          <option className="bg-slate-600 text-slate-300" value="">
            all
          </option>
          <option className="bg-slate-600 text-slate-300" value="newest">
            newest
          </option>
          <option className="bg-slate-600 text-slate-300" value="oldest">
            oldest
          </option>
          {categories.map((item) => (
            <option
              key={item.id}
              className="bg-slate-500 text-slate-300"
              value={item.title}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="h-20">
        {filteredProducts.map((item) => (
          <div
            key={item.createdAt}
            className="flex items-center justify-between mb-2 w-full min-w-[400px]"
          >
            <span className="text-slate-400">{item.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date().toLocaleDateString("fa-IR")}
              </span>
              <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                {item.title}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {item.quantity}
              </span>
              <button
                className="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product"
                onClick={() => onDeleteHandler(item.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
