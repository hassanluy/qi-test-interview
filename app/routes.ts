import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Login.tsx"),
  route("dashboard", "routes/dashboard/Dashboard.tsx"),
  route("orders","routes/orders/Orders.tsx"),
  route("products/:productId", "routes/products/ProductDetails.tsx"),
] satisfies RouteConfig;
