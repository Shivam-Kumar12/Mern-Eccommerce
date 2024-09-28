import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Go back-Page🚫found"}>
      <title>Page Not Found</title>
      <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" alt="image" />
      <h1 class="error-text">Whoops, We can't seem to find the resource you're looking for.</h1>
      <p class="text">Please check that the Web site address is spelled correctly.Or,</p>
      <div class="btn1">
        <Link to="/" className="error">
          Back to HomePage
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;