import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get("https://flat-songs-production.up.railway.app/api/v1/products");
  return {
    props: { products: res.data.data },
    revalidate: 20,
  };
}

function SSG({ products }) {
  return <div className="container">{JSON.stringify(products)}</div>;
}


export default SSG;
