import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductDetail = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = `Product ${router.query.id} Page`;
  });
  return (
    <div className="container">
      <h1>Product Detail</h1>
      <p>ID: {router.query.id}</p>
      {/* <p>Filter: {router.query.filter}</p> */}
      {/* <p>{JSON.stringify(router.query)}</p> */}
    </div>
  );
};

export default ProductDetail;
