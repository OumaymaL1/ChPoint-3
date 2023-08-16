import { product } from "./Product";
const Image = () => {
  return (
    <div>
      <img src={product.image.url} style={{ width: "250px" }} />
    </div>
  );
};
export default Image;
