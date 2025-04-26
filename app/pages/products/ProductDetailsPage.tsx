import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useApi } from "~/store";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: any }>();
  const api = useApi((state: any) => state.api);
  const { data: products } = useQuery({
    queryKey: ["products", api],
    queryFn: async () => {
      const response = await axios.get(`${api}/products/${productId}`);
      return response.data;
    },
  });
  return !products ? (
    <div className="flex justify-center items-center h-48">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-600"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={products.images[0]}
          alt={products.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {products.title}
          </h1>
          <p className="text-gray-600 text-sm mb-4">{products.description}</p>
          <div className="flex items-center justify-between mt-6">
            <span className="text-3xl font-bold text-green-600">
              ${products.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
