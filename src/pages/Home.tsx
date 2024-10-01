import { useParams } from "react-router-dom";
import CategoryProducts from "../components/CategoryProduct";
import Products from "../components/Products";

export default function Home() {
  const { id } = useParams<string>();

  return (
    <>

      {
        id ? (
          <CategoryProducts />
        ) : (
          <Products />
        )
      }
    </>
  );
}
