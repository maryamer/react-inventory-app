import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductsForm from "./components/ProductsForm";

function App() {
  const products = [
    {
      id: 1,
      title: "React.js",
      category: "frontend",
      createdAt: "2021-10-31T15:02:00.411Z",
    },
    {
      id: 2,
      title: "Node.js",
      category: "backend",
      createdAt: "2021-10-31T15:03:23.556Z",
    },
    {
      id: 3,
      title: "Vue.js",
      category: "frontend",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
  ];

  const categories1 = [
    {
      id: 1,
      title: "frontend",
      description: "frontend of applications",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
    {
      id: 2,
      title: "backend",
      description: "the backend of the applications",
      createdAt: "2021-10-01T10:47:26.889Z",
    },
  ];
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  const addCategoriesHandler = (category) => {
    setCategories((prev) => [...prev, category]);
    localStorage.setItem(
      "categories",
      JSON.stringify([...categories, category])
    );
  };
  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <div className="bg-slate-800 w-screen min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm addCategoriesHandler={addCategoriesHandler} />
        <ProductsForm />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
