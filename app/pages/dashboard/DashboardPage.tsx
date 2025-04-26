import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "~/components/products/ProductCard";
import { Box } from "~/components/ui/box";
import { useApi } from "~/store";

export default function Page() {
  const api = useApi((state: any) => state.api);
  const { data: products } = useQuery({
    queryKey: ["products", api],
    queryFn: async () => {
      const response = await axios.get(`${api}/products`);
      return response.data;
    },
  });
  return (
   
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 my-5">
          {!products ? (
            <div className="flex justify-center items-center col-span-full">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            products.map((product: any) => (
              <ProductCard
                id={product.id}
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                images={product.images[0]}
              />
            ))
          )}
        </Box>
   
  );
}
