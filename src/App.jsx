import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductsForm from "./components/ProductsForm";

function App() {
  const products1 = [
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
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const addCategoriesHandler = (category) => {
    setCategories((prev) => [
      ...prev,
      { ...category, createdAt: new Date().toISOString() },
    ]);
    localStorage.setItem(
      "categories",
      JSON.stringify([
        ...categories,
        {
          ...category,
          createdAt: new Date().toISOString(),
          id: new Date().getTime(),
        },
      ])
    );
  };
  const addProductsHandler = (product) => {
    setProducts((prev) => [
      ...prev,
      {
        ...product,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    localStorage.setItem(
      "products",
      JSON.stringify([
        ...products,
        { ...product, createdAt: new Date().toISOString() },
      ])
    );
  };
  const onDeleteHandler = (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  useEffect(() => {
    console.log(categories, products);
  }, [categories, products]);
  return (
    <div className="bg-slate-800 w-full min-h-screen ">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto ">
        <CategoryForm addCategoriesHandler={addCategoriesHandler} />
        <ProductsForm
          categories={categories}
          addProductsHandler={addProductsHandler}
        />
        <ProductList
          categories={categories}
          products={products}
          onDeleteHandler={onDeleteHandler}
        />
      </div>
    </div>
  );
}

export default App;
