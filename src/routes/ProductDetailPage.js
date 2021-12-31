import { mockData } from "../constant/mockData";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  let { id } = useParams();

  return (
    <div>
      {mockData.map((md) => {
        if (md.id == id) {
          return (
            <div key={id}>
              <p>{md.type}</p>
              <p>{md.name}</p>
              <p>{md.price}</p>
              <p>{md.detail}</p>
              <img src={md.image} alt="jordan 1"></img>
            </div>
          );
        }
      })}

      <button>Add to Cart</button>
    </div>
  );
}
