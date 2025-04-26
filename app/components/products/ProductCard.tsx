import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  images,
}) => {
  return (
    <div className="product-card max-w-sm flex justify-between flex-col gap-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div>
        <img
          src={images}
          alt={title}
          className="product-card__image w-full h-48 object-cover"
        />
        <div className="product-card__content p-4">
          <h2 className="product-card__title text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <p className="product-card__description text-sm text-gray-600 mt-2">
            {description}
          </p>
          <p className="product-card__price text-xl font-bold text-green-600 mt-4">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex m-3 gap-2">
        <Link to={`/products/${id}`}>
          <Button variant={"sky"}>Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
