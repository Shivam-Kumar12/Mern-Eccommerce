import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../App.css"
const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container categories-container">
        <div className="row categories-row">
          {categories.map((c) => (
            <div className="col-md-6 col-lg-4 mt-4" key={c._id}>
              <Link to={`/category/${c.slug}`} className="category-btn">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
