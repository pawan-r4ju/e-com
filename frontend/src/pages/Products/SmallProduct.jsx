import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[35rem] border-2 rounded-lg p-2 ">
      <Link to={`/product/${product._id}`}>
        <div className="relative mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto rounded"
          />
          <HeartIcon product={product} />
        </div>

        <div className="p-4">
          <h2 className="flex justify-between items-center">
            <div><span className="text-xl font-semibold">{product.name}</span></div>
            <span className="bg-pink-100 text-pink-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-100">
              ₹{product.price}
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default SmallProduct;
