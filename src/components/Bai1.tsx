import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.product_name} width={100} />
            <h3>{product.product_name}</h3>
            <p>Giá: {product.price.toLocaleString()} VND</p>
            <p>Số lượng: {product.quantity}</p>
            <p>Thêm lúc: {new Date(product.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;