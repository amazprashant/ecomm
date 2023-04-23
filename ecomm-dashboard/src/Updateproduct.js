import Header from './Header';
import React, { useState, useEffect } from 'react';

function Updateproduct(props) {
    console.warn(props);
  const [product, setProduct] = useState();

  useEffect(() => {
    if (props.match && props.match.params) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/product/${props.match.params.id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProduct();
    }
  }, [props.match.params]);

  return (
    <>
      <Header />
      <div>
        <h1>Update Product Page</h1>
        {product && (
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Updateproduct;
