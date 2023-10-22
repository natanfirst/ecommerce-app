import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";

interface ProducDetailtPageProps {
  params: { slug: string };
}

const ProductDetailPage = async ({
  params: { slug },
}: ProducDetailtPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages name={product.name} image_urls={product.image_urls} />
      <ProductInfo product={computeProductTotalPrice(product)} />

      <div>
        <div>
          <SectionTitle>Produtos Recomendados</SectionTitle>
          <ProductList products={product.category.products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
