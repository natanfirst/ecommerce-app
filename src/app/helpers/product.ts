import { Product } from "@prisma/client";

export interface ProductsWithTotalPrice extends Product {
  total_price: Number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductsWithTotalPrice => {
  if (product.discount_percent === 0) {
    return {
      ...product,
      total_price: Number(product.base_price),
    };
  }

  const totalPrice =
    Number(product.base_price) * (product.discount_percent / 100);

  return {
    ...product,
    total_price: totalPrice,
  };
};
