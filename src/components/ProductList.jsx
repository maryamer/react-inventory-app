import React from "react";

export default function ProductList() {
  return (
    <>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product list</h2>
      <div className="flex items-center justify-between mb-6">
        <label for="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label for="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option
            className="bg-slate-500 text-slate-300"
            selected
            value="newest"
          >
            newest
          </option>
          <option className="bg-slate-500 text-slate-300" value="oldest">
            oldest
          </option>
        </select>
      </div>
      <div id="products-list" className="overflow-x-auto"></div>
      <div className="h-20"></div>
    </>
  );
}
