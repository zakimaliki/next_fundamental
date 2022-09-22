import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("https://flat-songs-production.up.railway.app/api/v1/products");
  return {
    props: { products: res.data.data },
  };
}

function SSR({ products }) {
  return <div className="container">{JSON.stringify(products)}</div>;
}


export default SSR;
