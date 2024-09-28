import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  // Effect to fetch products and category data when the slug changes
  useEffect(() => {
    if (params?.slug) getProductsByCat();  // Ensure slug is present before fetching data
  }, [params?.slug]);

  // Function to get products based on the category slug
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`  // API endpoint to get products by category
      );
      setProducts(data?.products);  // Set fetched products
      setCategory(data?.category);  // Set category details
    } catch (error) {
      console.log(error);  // Log any errors during the API call
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category-page">
        <h4 className="text-center">Category - {category?.name}</h4>  {/* Display the category name */}
        <h6 className="text-center">{products?.length} result(s) found</h6>  {/* Display the number of results */}

        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="product-grid">  {/* Grid layout for displaying products */}
              {products?.map((p) => (
                <div className="product-card" key={p._id}>  {/* Each product card */}
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}  // Product image
                    className="product-image"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>  {/* Product name */}
                      <h5 className="card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}  
                      </h5>
                    </div>
                    <p className="card-text">
                      {p.description.substring(0, 80)}...  {/* Truncated product description */}
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      {/* Add to Cart functionality (commented out for now) */}
                      {/* <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination or Load More button functionality (if needed) */}
            {/* <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Load more"}
                </button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
