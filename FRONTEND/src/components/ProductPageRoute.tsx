import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./ProductPage";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductPageRoute = () => {
  const [instrumento,setInstrumento]=useState();
  const getInstrumentos = async () => {
    axios
      .get("http://localhost:8080/instrumentos/"+productId)
      .then((res) => setInstrumento(res.data.data));
  };
  useEffect(() => {
    getInstrumentos();
  }, []);
  const { productId } = useParams();
  

  return instrumento ? (
    <ProductPage product={instrumento} />
  ) : (
    <h2>Product not found</h2>
  );
};

export default ProductPageRoute;
