import axios from "axios";
import { useEffect, useState } from "react";

function CSR() {
    const [product,setProduct] = useState();
    useEffect(() => {
    document.title = 'Test Page';
      axios
        .get('https://flat-songs-production.up.railway.app/api/v1/products')
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch((error) => console.error(error));
    }, []);

    return (
      <div className="container">
        {JSON.stringify(product)}
      </div>
    );
  }


export default CSR;
