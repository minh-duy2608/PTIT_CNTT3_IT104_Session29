import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
type productType = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};
export default function Bai2() {
  const [product, setProduct] = useState<productType[]>([]);
  const getAllProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      setProduct(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      {product.map((product) => (
        <Card key={product.id} className=" pl-[10px] list-none">
          <h2>{product.id}</h2>
          <h2>{product.product_name}</h2>
          <h2>{product.image}</h2>
          <h2>{product.price}</h2>
          <h2>{product.quantity}</h2>
          <h2>{product.created_at}</h2>
        </Card>
      ))}
    </>
  );
}