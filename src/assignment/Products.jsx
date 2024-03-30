import React from 'react'
import ProductList from './ProductList';
const products = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 3 },
    { id: 3, name: 'Product 3', price: 20, quantity: 1 }
  ];
const Products = () => {
  return (
   <>
<div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
   </>
  )
}

export default Products