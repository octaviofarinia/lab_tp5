import { Link } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import productsData from "../../data.json";
import { Product } from "../types";
import styles from "./Product.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductList = () => {
  const [instrumentos, setInstrumentos] = useState([]);

  const getInstrumentos =  () => {
    axios
      .get("http://localhost:8080/instrumentos")
      .then((res) => setInstrumentos(res.data.data));

    /*if (instrumentos == null) {
      axios.put("http://localhost:8080/instrumentos/save-list", {productsData});
    }*/
  };
  useEffect(() => {
    getInstrumentos();
  }, []);
  return (
    <div className={styles.divList}>
      {instrumentos == null ? (
        <button className={styles.btnCarga} onClick={getInstrumentos}>
          Carga
        </button>
      ) : (
        instrumentos.map((product: Product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductListItem product={product} />
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductList;
