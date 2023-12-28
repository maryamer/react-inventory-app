import React from "react";
import { useState } from "react";

export default function CategoryForm({
  addCategoriesHandler,
  setIsShow,
  isShow,
}) {
  const [category, setCategory] = useState({
    title: "",
    description: "",
  });
  const handleCategory = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addCategoriesHandler(category);
    setCategory({
      title: "",
      description: "",
    });
  };
  return (
    <section>
      <div className={`mb-6${isShow ? "" : " hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New category
        </h2>
        <form
          onSubmit={submitHandler}
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              value={category.title}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              onChange={(e) => handleCategory(e)}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type=" text"
              name="description"
              id="category-description"
              value={category.description}
              onChange={handleCategory}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              type="button"
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
              onClick={() => setIsShow(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prev) => !prev)}
      >
        Add new Category?
      </button>
    </section>
  );
}
