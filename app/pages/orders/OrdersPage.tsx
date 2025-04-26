import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { useApi } from "~/store";

const OrdersPage = () => {

  const api = useApi((state: any) => state.api);
  const { data: products } = useQuery({
    queryKey: ["products", api],
    queryFn: async () => {
      const response = await axios.get(`${api}/products`);
      return response.data;
    },
  });

  return (
    <Table  className="w-full mt-4"> 
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product: any) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            
              <TableCell className="flex items-center space-x-2">
                <Button variant={'sky'}>
                  Edit
                </Button>
                <Button variant={'destructive'}>
                  Delete
                </Button>
              </TableCell>
       
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default OrdersPage