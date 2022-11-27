import { useNavigate } from "react-router-dom";
import Ratings from "../ratings";

const Price = ({ price, discountPercentage }) => {
  const discount = () => price - price * (discountPercentage / 100);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="fs-5 fw-semibold">${discount().toFixed(2)}</div>&nbsp;
      <small className="fs-6 text-decoration-line-through">{price}</small>
    </div>
  );
};

const CardTemplateTwo = ({
  thumbnail,
  title,
  brand,
  rating,
  stock,
  price,
  discountPercentage,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <img src={thumbnail} alt={title} width="100%" height="150" />
      <div className="fs-6 mb-2">{brand}</div>
      <div
        role="button"
        className="fs-6 fw-semibold"
        onClick={() => navigate(`/product/${id}`)}
      >
        {title}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Ratings count={rating} />
        <span>({stock})</span>
      </div>
      <Price discountPercentage={discountPercentage} price={price} />
      <div></div>
    </div>
  );
};

export default CardTemplateTwo;

CardTemplateTwo.defaultProps = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 3.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
